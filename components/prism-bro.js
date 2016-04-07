Prism.languages.bro = {
    'comment': [
        {
	        pattern: /(^|[^\\$])#.*/,
		            	lookbehind: true
		            }
	],

    'string': /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,

    'boolean': /\b(T|F)\b/,

    'keyword': [
        /\b(break|next|continue)\b/,
        /\b(alarm|using|of|add|delete)\b/,
		/\b(export)\b/,
        /\b(print|return|schedule)\b/,
		/\b(when|timeout)\b/,
		/\b(addr|any|bool|count)\b/,
		/\b(double|enum)\b/,
		/\b(file|int|interval)\b/,
		/\b(pattern|opaque)\b/,
		/\b(port|record|set)\b/,
		/\b(string|subnet|table)\b/,
		/\b(time|vector)\b/,
		/\b(for|if|else)\b/,      
	],
	
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
	
	'function': [
	{
		pattern: /function [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/i,
		inside: {
			keyword: /function/
		}
	},
	
	{
		pattern: /hook [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/i,
		inside: {
			keyword: /hook/
		}
	},
	
	{
		pattern: /event [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/i,
		inside: {
			keyword: /event/
		}
	}
	],
	
	'variable':	
	[{
		pattern: /global [a-zA-Z0-9_]+/i,
		inside: {
			keyword: /global/
		}
	},
	{
		pattern: /local [a-zA-Z0-9_]+/i,
		inside: {
			keyword: /local/
		}
	}],
	
	
	'number': [       
	     /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	     
    ],
    
    'italic':  /\b(TODO|FIXME|XXX)\b/,
	'punctuation': /[{}[\];(),.:]/,
	
	'builtin': 
	[
	     /@load\s+/,
	     /@load-sigs\s+/,
	     /@load-plugin\s+/,
	     /@unload\s+/,
	     /@prefixes\s+/,
	     /@if\s+/,
	     /@ifdef\s+/,
	     /@ifndef\s+/,
	     /@else\s+/,
	     /@endif\s+/,
	     /@DIR\s+/,
	     /@FILENAME\s+/,
	     {pattern: /&(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column)/,
	     }
	],
		     
	'constant': 
	{
		pattern: /const [a-zA-Z0-9_]+/i,
		inside: {
			keyword: /const/
		}
	},
};
