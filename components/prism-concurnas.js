Prism.languages.concurnas = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(?:[rub]|rb|br)?(\|\||r"|r'|"|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'keyword': /\b(?:class|enum|annotation|def|init|gpudef|gpukernel|typedef|int|size_t|long|short|float|double|boolean|bool|byte|char|lambda|void|import|from|using|assert|inject|provider|provide|single|nodefault|unchecked|global|local|constant|private|public|package|protected|true|false|null|this|super|del|await|trans|transient|shared|new|abstract|override|extends|trait|val|var|in|out|default|sizeof|while|for|with|if|elif|else|throw|try|catch|finally|onchange|every|async|pre|post|loop|also|open|closed|sync|parfor|parforsync|return|break|continue|actor|of|changed|match|case)\b/,
	'boolean': /\b(?:true|false)\b/,
	'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
	'punctuation': /[{}[\];(),.:]/,
	'operator': {
		pattern: /<==|>==|=>|->|<-|<>|\^|&==|&<>|!|\?|\?:|\.\?|\+\+|--|[-+*/=<>]=?|\b(?:as|is|isnot|bor|band|bxor|comp|mod|and|inv|or|shl|shr|ushr|xor)\b=?/
	}

};

Prism.languages.insertBefore('concurnas', 'keyword', {
		'annotation': {
			pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
			alias: 'builtin'
		}
	});

Prism.languages.conc = Prism.languages.concurnas;
