(function (Prism) {
	Prism.languages.timeline = {
		'timepoint': {
			pattern: /^\s*(?:\.[0-9]+|(?:0|[1-9][0-9]*)(?:\.[0-9]*)?)(?=\s|$)/gm,
			alias: 'number',
		},
	}
}(Prism))
