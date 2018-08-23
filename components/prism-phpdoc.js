(function (Prism) {

	var typeExpression = /(?:[a-zA-Z]\w*|[|\\[\]])+/.source;

	Prism.languages.phpdoc = Prism.languages.extend('javadoclike', {
		'parameter': {
			pattern: RegExp('(' + /@(?:global|param|property(?:-read|-write)?|var)\s+/.source + '(?:' + typeExpression + '\\s+)?)' + /\$\w+/.source),
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('phpdoc', 'keyword', {
		'class-name': [
			{
				pattern: RegExp(/(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\s+)/.source + typeExpression),
				lookbehind: true,
				inside: {
					'keyword': /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
					'punctuation': /[|\\[\]()]/
				}
			}
		],
	});

	var javaDocLike = Prism.languages.javadoclike;
	javaDocLike.addSupport(['php'], Prism.languages.phpdoc);

}(Prism));
