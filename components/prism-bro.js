Prism.languages.bro = {

	'comment': {
		pattern: /(^|[^\\$])#.*/,
		lookbehind: true,
		inside: {
			'italic': /\b(?:FIXME|TODO|XXX)\b/
		}
	},

	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},

	'boolean': /\b[TF]\b/,

	'function': {
		pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
		inside: {
			keyword: /^(?:function|hook|event)/
		}
	},

	'variable': {
		pattern: /(?:global|local) \w+/i,
		inside: {
			keyword: /(?:global|local)/
		}
	},

	'builtin': /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,

	'constant': {
		pattern: /const \w+/i,
		inside: {
			keyword: /const/
		}
	},

	'keyword': /\b(?:add|addr|alarm|any|bool|break|continue|count|delete|double|else|enum|export|file|for|function|if|in|int|interval|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,

	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,

	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,

	'punctuation': /[{}[\];(),.:]/
};
