Prism.languages.bash = {
	'shebang': {
		pattern: /^#!.*\n/g,
		alias: 'important'
	},
	'caseenv': {
		pattern: /(\bcase\b.*?in\b\s*)[\w\W]+?(?=esac)/gi,
		inside: {
			'selector': {
				pattern: /(^\s*)[^)\n]+\)/gm,
				lookbehind: true
			}
		},
		lookbehind: true
	},
	'comment': {
		pattern: /(^\s*|[^${])#.*$/gm,
		lookbehind: true
	},
	// allow multiline string
	'string': [
		{
			pattern: /"(?:\\?[\s\S])*?"/g,
			inside: {}
		},
		// single quote strings cannot have variables inside
		/'(?:\\?[\s\S])*?'/g
	],
	'variable': {
		pattern: /(^\s*(?:export\s*)?)[a-z_]+(?=\=)/gim,
		lookbehind: true
	},
	'variable-usage': [
		{
			pattern: /\$(?:[a-z0-9_#\?\-\*!@]+|\{[^}]+\})/gi,
			alias: 'property'
		},
		{
			pattern: /\$(?=\()/g,
			alias: 'property'
		}
	],
	'arithenv': {
		pattern: /(\(\()[\w\W]+(?=\)\))/g,
		lookbehind: true,
		inside: {
			'operator': /\*|\/|[-+]{1,2}|!=?|<=?|>=?|==?|&{1,2}|\|?\|/g,
			'variable-usage': {
				pattern: /[a-z_]+/gi,
				alias: 'property'
			}
		}
	},
	'keyword': /\b(if|then|else|elif|export|eval|esac|exec|getopts|hash|pwd|test|umask|unset|trap|times|alias|bind|builtin|printf|read|ulimit|unalias|local|let|type|typeset|shift|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare|cd|rm|mkdir|cat|sleep|ls|clear|kill|killall)\b/g,
	'boolean': /\b(true|false)\b/g,
	'function': /[a-z0-9_]+(?=\()/ig,
	'number': /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/g,
	'operator': /!=?|<=?|>=?|==?|&{1,2}|\|?\|/g,
	'punctuation': /[{}[\];(),.:`]/g
};

Prism.languages.bash.caseenv.inside.rest = Prism.languages.bash;
Prism.languages.bash.arithenv.inside.number = Prism.languages.bash.number;
Prism.languages.bash.string[0].inside['variable-usage'] = Prism.languages.bash['variable-usage'][0];