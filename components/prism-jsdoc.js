Prism.languages.jsdoc = {
	'parameter': {
		pattern: /(@(?:param|arg|argument)\s+(?:\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}\s+)?)(?:\w+|\[\w+(?:=[^[[\]]+)?\])(?=\s|$)/,
		lookbehind: true,
		inside: {
			'code': {
				pattern: /(\w=)[^[[\]]+(?=\]$)/,
				lookbehind: true,
				inside: Prism.languages.javascript
			},
			'punctuation': /[=[\]]/
		}
	},
	'class-name': [
		{
			pattern: /(@[a-z]+\s+)\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/,
			lookbehind: true,
			inside: {
				'punctuation': /[.,:?=<>|{}()[\]]/
			}
		},
		{
			pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		}
	],
	'example': {
		pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
		lookbehind: true,
		inside: {
			'code': {
				pattern: /^(\s*(?:\*\s*)?).+$/m,
				lookbehind: true,
				inside: Prism.languages.javascript
			}
		}
	},
	'keyword': /@(?:abstract|virtual|access|alias|async|augments|extends|author|borrows|callback|class|(?:hide)?constructor|classdesc|constant|const|constructs|copyright|default(?:Value)?|deprecated|description|desc|enum|event|example|exports|external|host|file|(?:file)?overview|fires|emits|function|func|method|generator|global|ignore|implements|inheritdoc|inner|instance|interface|kind|lends|license|listens|member|var|memberof|mixes|mixin|module|name|namespace|override|package|param|arg|argument|private|property|prop|protected|public|readonly|requires|returns?|see|since|static|summary|this|throws|exception|todo|tutorial|type|typedef|variation|version|yields?)\b/
};

Prism.languages.javascript['doc-comment'].inside = Prism.languages.jsdoc;
