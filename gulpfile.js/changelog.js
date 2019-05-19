"use strict";

const { src, dest } = require('gulp');

const replace = require('gulp-replace');
const pump = require('pump');
const git = require('simple-git/promise')(__dirname);

const { changelog } = require('./paths');


const ISSUE_RE = /#(\d+)(?![\d\]])/g;
const ISSUE_SUB = '[#$1](https://github.com/PrismJS/prism/issues/$1)';

function linkify(cb) {
	return pump([
		src(changelog),
		replace(ISSUE_RE, ISSUE_SUB),
		replace(
			/\[[\da-f]+(?:, *[\da-f]+)*\]/g,
			m => m.replace(/([\da-f]{7})[\da-f]*/g, '[`$1`](https://github.com/PrismJS/prism/commit/$1)')
		),
		dest('.')
	], cb);
}

/**
 * Creates an array which iterates its items in the order given by `compareFn`.
 *
 * The array may not be sorted at all times.
 *
 * @param {(a: T, b: T) => number} compareFn
 * @returns {T[]}
 * @template T
 */
function createSortedArray(compareFn) {
	const a = [];

	a['sort'] = function () {
		return Array.prototype.sort.call(this, compareFn);
	};
	a[Symbol.iterator] = function* () {
		const copy = [];
		for (let i = 0; i < this.length; i++) {
			copy.push(this[i]);
		}
		copy.sort(compareFn);
		for (const item of copy) {
			yield item;
		}
	};

	return a;
}

/**
 * Parses the given log line and adds the list of the changed files to the output.
 *
 * @param {string} line A one-liner log line consisting of the commit hash and the commit message.
 * @returns {Promise<CommitInfo>}
 *
 * @typedef {{ message: string, hash: string, changes: CommitChange[] }} CommitInfo
 * @typedef {{ file: string, mode: ChangeMode }} CommitChange
 * @typedef {"A" | "C" | "D" | "M" | "R" | "T" | "U" | "X" | "B"} ChangeMode
 */
function getCommitInfo(line) {
	const [, hash, message] = /^([a-f\d]+)\s+(.*)$/i.exec(line);

	return git.raw(['diff-tree', '--no-commit-id', '--name-status', '-r', hash]).then(res => {
		/* The output looks like this:
		 *
		 * M       components.js
		 * M       components.json
		 *
		 * or nothing for e.g. reverts.
		 */

		const changes = !res ? [] : res.trim().split(/\n/g).map(line => {
			const [, mode, file] = /(\w)\s+(.+)/.exec(line);
			return { mode: /** @type {ChangeMode} */ (mode), file };
		});
		return { hash, message, changes };
	});
}

/**
 * Parses the output of `git log` with the given revision range.
 *
 * @param {string | Promise<string>} range The revision range in which the log will be parsed.
 * @returns {Promise<CommitInfo[]>}
 */
function getLog(range) {
	return Promise.resolve(range).then(range => {
		return git.raw(['log', range, '--oneline']);
	}).then(res => {
		/* The output looks like this:
		 *
		 * bfbe4464 Invoke `callback` after `after-highlight` hook (#1588)
		 * b41fb8f1 Fixes regex for JS examples (#1591)
		 */
		const commits = !res ? [] : res.trim().split(/\n/g);

		return Promise.all(commits.map(getCommitInfo));
	});
}

const revisionRanges = {
	nextRelease: git.raw(['describe', '--abbrev=0', '--tags']).then(res => `${res.trim()}..HEAD`),
	v1_15_0__HEAD: 'v1.15.0..HEAD',
	v1_14_0__v1_15_0: 'v1.14.0..v1.15.0',
};
const strCompare = (a, b) => a.localeCompare(b, 'en');

function changes() {

	const { languages, plugins } = require('../components');

	return getLog(revisionRanges.nextRelease).then(infos => {

		const entries = {
			'TODO:': {},
			'New components': {
				['']: createSortedArray(strCompare)
			},
			'Updated components': {},
			'Updated plugins': {},
			'Updated themes': {},
			'Other': {},
		};
		/**
		 *
		 * @param {string} category
		 * @param {string | { message: string, hash: string }} info
		 */
		function addEntry(category, info) {
			const path = category.split(/\s*>>\s*/g);
			if (path[path.length - 1] !== '') {
				path.push('');
			}

			let current = entries;
			for (const key of path) {
				if (key) {
					current = current[key] = current[key] || {};
				} else {
					(current[key] = current[key] || []).push(info);
				}
			}
		}


		/** @param {CommitChange} change */
		function notGenerated(change) {
			return !change.file.endsWith('.min.js') && ['prism.js', 'components.js'].indexOf(change.file) === -1;
		}
		/** @param {CommitChange} change */
		function notPartlyGenerated(change) {
			return change.file !== 'plugins/autoloader/prism-autoloader.js' &&
				change.file !== 'plugins/show-language/prism-show-language.js';
		}
		/** @param {CommitChange} change */
		function notTests(change) {
			return !/^tests\//.test(change.file);
		}
		/** @param {CommitChange} change */
		function notExamples(change) {
			return !/^examples\//.test(change.file);
		}
		/** @param {CommitChange} change */
		function notComponentsJSON(change) {
			return change.file !== 'components.json';
		}

		/**
		 * @param {((e: T, index: number) => boolean)[]} filters
		 * @returns {(e: T, index: number) => boolean}
		 * @template T
		 */
		function and(...filters) {
			return (e, index) => {
				let res = true;
				for (let i = 0, l = filters.length; i < l && res; i++) {
					res = res && filters[i](e, index);
				}
				return res;
			};
		}

		/**
		 * Some commit message have the format `component changed: actual message`.
		 * This function can be used to remove this prefix.
		 *
		 * @param {string} prefix
		 * @param {CommitInfo} info
		 * @returns {{ message: string, hash: string }}
		 */
		function removeMessagePrefix(prefix, info) {
			const patter = RegExp(String.raw`^${prefix.replace(/[-\s]/g, '[-\\s]')}:\s*`, 'i')
			return {
				message: info.message.replace(patter, ''),
				hash: info.hash
			};
		}


		/**
		 * @type {((info: CommitInfo) => boolean)[]}
		 */
		const commitSorters = [

			function rebuild(info) {
				if (info.changes.length > 0 && info.changes.filter(notGenerated).length === 0) {
					console.log('Rebuild found: ' + info.message);
					return true;
				}
			},

			function addedComponent(info) {
				let relevantChanges = info.changes.filter(and(notGenerated, notTests, notExamples));

				// `components.json` has to be modified
				if (relevantChanges.some(c => c.file === 'components.json')) {
					relevantChanges = relevantChanges.filter(and(notComponentsJSON, notPartlyGenerated));

					// now, only the newly added JS should be left
					if (relevantChanges.length === 1) {
						const change = relevantChanges[0];
						if (change.mode === 'A' && change.file.startsWith('components/prism-')) {
							var lang = change.file.match(/prism-([\w-]+)\.js$/)[1];
							var titles = [languages[lang].title];
							if (languages[lang].aliasTitles) {
								titles.push(...Object.values(languages[lang].aliasTitles));
							}
							addEntry('New components', `__${titles.join('__ & __')}__: ${infoToString(info)}`);
							return true;
						}
					}
				}
			},

			function changedComponentOrCore(info) {
				let relevantChanges = info.changes.filter(and(notGenerated, notTests, notExamples));

				// if `components.json` changed, then autoloader and show-language also change
				if (relevantChanges.some(c => c.file === 'components.json')) {
					relevantChanges = relevantChanges.filter(and(notComponentsJSON, notPartlyGenerated));
				}

				if (relevantChanges.length === 1) {
					const change = relevantChanges[0];
					if (change.mode === 'M' && change.file.startsWith('components/prism-')) {
						var lang = change.file.match(/prism-([\w-]+)\.js$/)[1];
						if (lang === 'core') {
							addEntry('Other >> Core', removeMessagePrefix('Core', info));
						} else {
							const title = languages[lang].title;
							addEntry('Updated components >> ' + title, removeMessagePrefix(title, info));
						}
						return true;
					}
				}
			},

			function changedPlugin(info) {
				let relevantChanges = info.changes.filter(and(notGenerated, notTests, notExamples, c => !/\.(?:html|css)$/.test(c.file)));

				if (relevantChanges.length > 0 &&
					relevantChanges.every(c => c.mode === 'M' && /^plugins\/.*\.js$/.test(c.file))) {

					if (relevantChanges.length === 1) {
						const change = relevantChanges[0];
						const id = change.file.match(/\/prism-([\w-]+)\.js/)[1];
						const title = plugins[id].title || plugins[id];
						addEntry('Updated plugins >> ' + title, removeMessagePrefix(title, info));
					} else {
						addEntry('Updated plugins', info);
					}
					return true;
				}
			},

			function changedTheme(info) {
				if (info.changes.length > 0 && info.changes.every(c => {
					return /themes\/.*\.css/.test(c.file) && c.mode === 'M';
				})) {
					if (info.changes.length === 1) {
						const change = info.changes[0];
						let name = (change.file.match(/prism-(\w+)\.css$/) || [, 'Default'])[1];
						name = name[0].toUpperCase() + name.substr(1);
						addEntry('Updated themes >> ' + name, removeMessagePrefix(name, info));
					} else {
						addEntry('Updated themes', info);
					}
					return true;
				}
			},

			function changedInfrastructure(info) {
				if (info.changes.length > 0 && info.changes.every(c => {
					if (c.file.startsWith('gulpfile.js')) {
						return true;
					}
					if (/^\.[\w.]+$/.test(c.file)) {
						return true;
					}
					return ['CNAME', 'composer.json', 'package.json', 'package-lock.json'].indexOf(c.file) >= 0;
				})) {
					addEntry('Other >> Infrastructure', info);
					return true;
				}
			},

			function changedWebsite(info) {
				if (info.changes.length > 0 && info.changes.every(c => {
					if (/[\w-]+\.(?:html|svg)$/.test(c.file)) {
						return true;
					}
					if (/^scripts(?:\/[\w-]+)*\/[\w-]+\.js$/.test(c.file)) {
						return true;
					}
					return ['style.css'].indexOf(c.file) >= 0;
				})) {
					addEntry('Other >> Website', info);
					return true;
				}
			},

			function otherChanges(info) {
				// detect changes of the Github setup
				// This assumes that .md files are related to GitHub
				if (info.changes.length > 0 && info.changes.every(c => /\.md$/i.test(c.file))) {
					addEntry('Other', info);
					return true;
				}
			},

		];

		for (const info of infos) {
			if (!commitSorters.some(sorter => sorter(info))) {
				addEntry('TODO:', info);
			}
		}


		function infoToString(info) {
			if (typeof info === 'string') {
				return info;
			}
			return `${info.message} [\`${info.hash}\`](https://github.com/PrismJS/prism/commit/${info.hash})`;
		}
		function printCategory(category, indentation = '') {
			for (const subCategory of Object.keys(category).sort(strCompare)) {
				if (subCategory) {
					md += `${indentation}* __${subCategory}__\n`;
					printCategory(category[subCategory], indentation + '    ')
				} else {
					for (const info of category['']) {
						md += `${indentation}* ${infoToString(info)}\n`;
					}
				}
			}
		}

		let md = '';
		for (const category of Object.keys(entries)) {
			md += `\n### ${category}\n\n`;
			printCategory(entries[category]);
		}
		console.log(md);
	});
}


module.exports = { linkify, changes };
