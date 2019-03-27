Prism.languages.solidity = Prism.languages.extend('javascript', {
	'keyword': [
		/\b(?:assert|break|constant|continue|do|else|emit|external|for|function|if|import|inherited|internal|is|memory|new|payable|private|public|pure|require|returns?|revert|selfdestruct|storage|suicide|this|throw|var|view|while|_)\b/,
		{
			pattern: /\b(?:contract|interface|library|using|struct|function|modifier)\s+[A-Za-z_]\w*(?:\s+is\s+(?:[A-Za-z_][,\s]*)*)?\b/,
			inside: {
				'variable': {
					pattern: /\b(contract|interface|library|using|struct|function|modifier)\s+[A-Za-z_]\w*(?:\s+is\s+(?:[A-Za-z_][,\s]*)*)?\b/,
					lookbehind: true
				}
			}
		},
	],
	'constant': [
		{
			pattern: /\b(?:address|string|bytes\d*|int\d*|uint\d*|bool|u?fixed\d+x\d+)\b(?:\s+(?:indexed\s+)?[A-Za-z_]\w*\s*[,)])?/,
			inside: {
				'attr-name' : {
					pattern: /\b(address|string|bytes\d*|int\d*|uint\d*|bool|u?fixed\d+x\d+)\b(?:\s+(?:indexed\s+)?[A-Za-z_]\w*\s*[,)])?/,
					lookbehind: true,
					inside: {
						punctuation: /[(){};:]/
					}
				}
			}
		},
		{
			pattern: /\bmapping\s*\(.*\s+=>\s+.*\)(?:\s+(?:private|public|internal|external|inherited))?\s+[A-Za-z_]\w*\b/,
			inside: {
				keyword: {
					pattern: /(\s+)(?:private|public|internal|external|inherited)/,
					lookbehind: true
				}
			}
		}
	]
});
