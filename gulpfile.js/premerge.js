"use strict";

const git = require('simple-git/promise')(__dirname);


/**
 * Checks that no files have been modified by the build process.
 */
function gitChanges() {
	return git.status().then(res => {
		if (res.files.length > 0) {
			console.log(res);
			throw new Error('There are changes in the file system. Did you forget to run gulp?');
		}
	});
}

module.exports = {
	premerge: gitChanges
};
