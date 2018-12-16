Prism.languages.hcl = {
	'comment': /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
	'keyword': [
		{
			pattern: /(?:resource|data)\s+(?:[\w-]+|"[\w-]+")(?=\s+"[\w-]+"\s+{)/i,
			inside: {
				'type': [
					{
						pattern: /(resource|data|\s+)(?:[\w-]+|"[\w-]+")/i,
						lookbehind: true,
						alias: 'variable'
					}
				]
			}
		},
		{
			pattern: /(?:provider|provisioner|variable|output|module|backend)\s+"?[\w-]+"?\s+(?={)/i,
			inside: {
				'type': [
					{
						pattern: /(provider|provisioner|variable|output|module|backend)\s+"?[\w-]+"?\s+/i,
						lookbehind: true,
						alias: 'variable'
					}
				]
			}
		},
		{
			pattern: /[\w-]+(?=\s+{)/
		}
	],
	'interpolation': [
		{
			pattern: /\${(?:[\w[\](+)\-*%^"',?=:/\s\\]+\.?)+}/i,
			inside: {
				'type': [
					{
						pattern: /((?:terraform|var|self|count|module|path|data|local)\.)[\w\*]+/i,
						lookbehind: true,
						alias: 'variable'
					}
				],
				'keyword': /(?:terraform|var|self|count|module|path|data|local)/i,
				'function': /\w+(?=\()/,
				'string': /"(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*"/,
				'punctuation': /[!"\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
				'number': /-?\d+\.?\d*/,
				'others': [
					{
						pattern: /[\w\*]+/,
						alias: 'string'
					}
				]
			}
		}
	],
	'property': [
		/[^\\\r\n]+(?=\s*=)/,
		/"[^\\\r\n]+"(?=\s*:)/
	],
	'string': /"(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*"/,
	'number': /(?:\d+.?\d*e[+-]?\d+|0[0-7]+|0x[\da-f]+|\d+\.?\d*)/i,
	'boolean': /\b(?:true|false)\b/i,
	'punctuation': /[=\[\]]/,
};
