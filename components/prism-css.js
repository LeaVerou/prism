Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//g,
	'atrule': /@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,
	'url': /url\((["']?).*?\1\)/gi,
	'selector': {
		pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
		inside: {
			'pseudo': /:\w+/g
		}
	},
	'string': /("|')(\\?.)*?\1/g,
	'property': /(\b|\B)[a-z-]+(?=\s*:)/ig,
	'important': /\B!important\b/gi,
	'hexcode': /#[0-9a-f]{3,6}/gi,
	'number': /\d+/g,
	'function': /(attr|calc|cross-fade|cycle|element|hsl|hsla|image|lang|linear-gradient|matrix|matrix3d|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgb|rgba|rotate|rotatex|rotatey|rotatez|rotate3d|scale|scalex|scaley|scalez|scale3d|skew|skewx|skewy|steps|translate|translatex|translatey|translatez|translate3d|url|var)/ig,
	'ignore': /&(lt|gt|amp);/gi,
	'punctuation': /[\{\};:]/g
};

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
			inside: {
				'tag': {
					pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
					inside: Prism.languages.markup.tag.inside
				},
				rest: Prism.languages.css
			}
		}
	});
}