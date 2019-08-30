(function(Prism) {
  Prism.languages.sparql = {
    comment: {
      pattern: /#.*/ // No need for greedy as the JSON is read in descending order. With first in line the comments
    },
    "multiline-string": {
      pattern: /"""(?:[^"\\]"?"?)*"""|'''(?:[^'\\]'?'?)*'''/,
      greedy: true, //usecase to make sure that an # does not convert the latter into a comment: """Gre#noble"""
      alias: "string" // Taking over the colorscheme of string.
    },
    string: {
      pattern: /"(?:[^\\"\r\n\t\b\f])*"|'(?:[^\\'\r\n\t\b\f])*'/,
      greedy: true //usecase to make sure that an # does not convert the latter into a comment: "Gre#noble"
    },
    iri: {
      pattern: /<([^<>"{}|^`\x00-\x20]*)>/,
      greedy: true, // Is greedy to make sure an # does not convert the latter into a comment: <http://expml.rg/g#eo>
      alias: "url" // Taking over the colorscheme of url.
    },
    PrefixedName: {
      pattern: /(?:(?![-.\d])[-.\w\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]+)?:(?:(?![-.])(?:[-.\w\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|%[\da-fA-F]{2}|\\[!#-/;=?@_~])*)/i,
      alias: "function" // Taking over the colorscheme of function.
    },
    languagetag: {
      pattern: /@[a-zA-Z]+(\-[a-zA-Z0-9]+)*/i,
      alias: "tag" // Taking over the colorscheme of tag.
    },
    number: /[+-]?\b\d+\.?\d*(?:e[+-]?\d+)?/i,
    variable: /(\?|\$)[\w]+/g,
    punctuation: /[{}.,;[\]]|\^\^/,
    boolean: /\b(?:true|false)\b/i,
    keyword: [
      /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/gi,
      /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|ROUND|REGEX|REPLACE|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/gi,
      /\b(?:GRAPH|BASE|PREFIX)\b/gi
    ]

    // ,operator: /\b|[-+]{1}|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//gi // Operators are not activated on yasgui. It is not activated here as well.
  };
})(Prism);

Prism.languages.rq = Prism.languages.sparql;
