/**
 * Extends php syntax
 * SBP is a programming langage that adds syntaxic sugar to PHP
 * http://sbp.selfbuild.fr/
 */


Prism.languages.sbp = Prism.languages.extend('php', {
	'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b|\s(f|@f|should|be|not|isnt|eq|ne|is|lt|gt|lte|gte)\b/ig
});
