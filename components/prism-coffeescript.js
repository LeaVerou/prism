Prism.languages.coffeescript =  {
  'comment': {
    pattern: /(^|[^#])(#.*?(\r?\n|$))/g,
    lookbehind: true
  },

  'function': {
    pattern: /[a-z|A-z]+\s*:\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,
    inside: {
      'function-name': /[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g,
      'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g
    }
  },

  'string': /("|')(\\?.)*?\1/g,

  'class-name': {
    pattern: /(class\s+)[a-z-]+[\.a-z]*\s/gi,
    lookbehind: true
  },

  'keyword': /\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g,
  'number': /\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g,
  'attr-name': /[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g,
  'boolean': /\b(true|false)\b/g,
  'number': /\b-?(0x)?\d*\.?[\da-f]+\b/g,
  'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
  'ignore': /&(lt|gt|amp);/gi,
  'punctuation': /[{}[\];(),.:]/g
};
