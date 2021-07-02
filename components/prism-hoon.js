Prism.languages.hoon = {
	constant: /(?:%\.n)|(?:%\.y)|(?:%[\w-]+\w?)/,
	comment: {
		pattern: /::.*/,
		lookahead: true,
		greedy: true
	},
	'function-name': /(?:\+[-+] {2})?(?:[a-z]([a-z0-9-]*[a-z0-9])?)/,
	'class-name': [
		{
			pattern: /@(?:[a-z])?(?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
			lookahead: true,
			greedy: true
		},
		/\*/
	],
	'string': [
		{
			pattern: /"(?:[^"])*"/,
			lookahead: true,
			greedy: true
		},
		{
			pattern: /'(?:[^'])*'/,
			lookahead: true,
			greedy: true
		}
	],
	'keyword': /:_|\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
};
