// Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.
// Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.

(function (Prism) {

	var _django_template = {
		'property': {
			pattern: /(?:{{|{%)[\s\S]*?(?:%}|}})/g,
			greedy: true,
			inside: {
				'string': {
					pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
					greedy: true
				},
				'keyword': /\b(?:\||load|verbatim|widthratio|ssi|firstof|for|url|ifchanged|csrf_token|lorem|ifnotequal|autoescape|now|templatetag|debug|cycle|ifequal|regroup|comment|filter|endfilter|if|spaceless|with|extends|block|include|else|empty|endif|endfor|as|endblock|endautoescape|endverbatim|trans|endtrans|[Tt]rue|[Ff]alse|[Nn]one|in|is|static|macro|endmacro|call|endcall|set|endset|raw|endraw)\b/,
				'operator': /[-+=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
				'function': /\b(?:_|abs|add|addslashes|attr|batch|callable|capfirst|capitalize|center|count|cut|d|date|default|default_if_none|defined|dictsort|dictsortreversed|divisibleby|e|equalto|escape|escaped|escapejs|even|filesizeformat|first|float|floatformat|force_escape|forceescape|format|get_digit|groupby|indent|int|iriencode|iterable|join|last|length|length_is|linebreaks|linebreaksbr|linenumbers|list|ljust|lower|make_list|map|mapping|number|odd|phone2numeric|pluralize|pprint|random|reject|rejectattr|removetags|replace|reverse|rjust|round|safe|safeseq|sameas|select|selectattr|sequence|slice|slugify|sort|string|stringformat|striptags|sum|time|timesince|timeuntil|title|trim|truncate|truncatechars|truncatechars_html|truncatewords|truncatewords_html|undefined|unordered_list|upper|urlencode|urlize|urlizetrunc|wordcount|wordwrap|xmlattr|yesno)\b/,
				'important': /\b-?\d+(?:\.\d+)?\b/,
				'variable': /\b\w+?\b/,
				'punctuation': /[[\];(),.:]/
			}
		}
	};

	var django = Prism.languages.django = Prism.languages.extend('markup', { 'comment': /(?:<!--|{#)[\s\S]*?(?:#}|-->)/ });
	// Updated html tag pattern to allow template tags inside html tags
	django.tag.pattern = /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^>=]+))?)*\s*\/?>/i;
	django = Prism.languages.insertBefore('django', 'entity', _django_template);
	Prism.languages.insertBefore('inside', 'tag', _django_template, django.tag);

	if (Prism.languages.javascript) {
		// Combine js code and template tags painting inside <script> blocks
		Prism.languages.insertBefore('inside', 'string', _django_template, django.script);
		django.script.inside.string.inside = _django_template;
	}
	if (Prism.languages.css) {
		// Combine css code and template tags painting inside <style> blocks
		Prism.languages.insertBefore('inside', 'atrule', { 'tag': _django_template.property }, django.style);
		django.style.inside.string.inside = _django_template;
	}

	// Add an Jinja2 alias
	Prism.languages.jinja2 = django;

}(Prism));
