// 1C:Enterprise
// https://github.com/Diversus23/
// todo: Добавить функции (Add function).

Prism.languages.bsl = {
	'comment': /\/\/.*/,
	'string': [
		// strings
		{
			pattern: /"(?:[^"]|"")*"(?!")/,
			greedy: true
		},
		// date & time
		{
			pattern: /\'(?:\\?.)*?\'/,
			lookbehind: true			
		}
	],
	'keyword': [
		{
			// RU
			pattern: /(?:(?<=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])|(?<![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f]))(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|истина|ложь)(?:(?<=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])|(?<![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f]))/i
		},
		{
			// EN
			pattern: /\b(?:while|for|new|break|try|except|raise|else|endtry|undefined|function|var|return|endfunction|null|if|elseif|procedure|endprocedure|then|val|export|endif|in|each|true|false|to|do|enddo|true|false)\b/i,
		}
	],
	'number': /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
	'operator': [	
		/<[=]?|>[=]?|[+\-*\/]=?|[\%=]/i,
		// RU
		{
			pattern: /(?:(?<=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])|(?<![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f]))(?:и|или|не)(?:(?<=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])|(?<![\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?=[\w\u0400-\u0484\u0487-\u052f\u1c80-\u1c88\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f]))/i,
			lookbehind: true
		},		
		// EN
		{
			pattern: /(^|[^&])\b(?:and|or|not)\b/,
			lookbehind: true
		}
		
	],
	'punctuation': /\(\.|\.\)|[()\[\]:;,.]/,	
	'directive': [
		// Теги препроцессора вида &Клиент and &Сервер
		{
			pattern: /^\s*&.*/gm,
			lookbehind: true,
			alias: 'important'
		},
		// Теги препроцессора вида #Область и #КонецОбласти
		{
			pattern: /^\s*#.*/gm,
			lookbehind: true,
			alias: 'important'
		}	
	]
};

Prism.languages.oscript = Prism.languages['bsl'];