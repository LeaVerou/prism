Prism.languages.psl = {
	'comment': [
		{
			pattern: /#.*/,
			greedy: true
		}
	],
	'string': [{
		pattern: /"(?:\\"|[^"\r\n]|[\r\n])*"/,
		greedy: true,
		inside: {
			'symbol': /\\[ntrbA-Z"\\]/
		}
	},
	{
		pattern: /<<<([a-zA-Z_]\w*)[\r\n](?:.*[\r\n])*?\1\b/,
		alias: 'heredoc-string',
		greedy: true
	}],

	'keyword': /\b(?:export|function|local|exit|last|next|requires|return|until|case|default|do|elsif|else|for|foreach|if|switch|while|line|word|__single|__multi)\b/,
	'constant': /\b(?:ALARM|CHART_ADD_GRAPH|CHART_DELETE_GRAPH|CHART_DESTROY|CHART_LOAD|CHART_PRINT|EOF|FALSE|False|false|NO|No|no|OK|OFFLINE|PSL_PROF_LOG|R_CHECK_HORIZ|R_CHECK_VERT|R_CLICKER|R_COLUMN|R_FRAME|R_ICON|R_LABEL|R_LABEL_CENTER|R_LIST_MULTIPLE|R_LIST_MULTIPLE_ND|R_LIST_SINGLE|R_LIST_SINGLE_ND|R_MENU|R_POPUP|R_POPUP_SCROLLED|R_RADIO_HORIZ|R_RADIO_VERT|R_ROW|R_SCALE_HORIZ|R_SCALE_VERT|R_SPINNER|R_TEXT_FIELD|R_TEXT_FIELD_LABEL|R_TOGGLE|TRUE|True|true|TRIM_LEADING|TRIM_TRAILING|TRIM_REDUNDANT|TRIM_LEADING_AND_TRAILING|VOID|WARN)\b/,
	'variable': /\b(?:errno|exit_status|PslDebug)\b/,
	'function': /\b(?:acos|add_diary|annotate|annotate_get|asctime|asin|atan|atexit|ascii_to_ebcdic|batch_set|blackout|cat|ceil|chan_exists|change_state|close|code_cvt|cond_signal|cond_wait|console_type|convert_base|convert_date|convert_locale_date|cos|cosh|create|destroy_lock|dump_hist|date|destroy|difference|dget_text|dcget_text|ebcdic_to_ascii|encrypt|event_archive|event_catalog_get|event_check|event_query|event_range_manage|event_range_query|event_report|event_schedule|event_trigger|event_trigger2|execute|exists|exp|fabs|floor|fmod|full_discovery|file|fopen|ftell|fseek|grep|get_vars|getenv|get|get_chan_info|get_ranges|get_text|gethostinfo|getpid|getpname|history_get_retention|history|index|int|is_var|intersection|isnumber|internal|in_transition|join|kill|length|lines|lock|lock_info|log|loge|log10|matchline|msg_check|msg_get_format|msg_get_severity|msg_printf|msg_sprintf|ntharg|num_consoles|nthargf|nthline|nthlinef|num_bytes|print|proc_exists|process|popen|printf|pconfig|poplines|pow|PslExecute|PslFunctionCall|PslFunctionExists|PslSetOptions|random|read|readln|refresh_parameters|remote_check|remote_close|remote_event_query|remote_event_trigger|remote_file_send|remote_open|remove|replace|rindex|sec_check_priv|sec_store_get|sec_store_set|set_alarm_ranges|set_locale|share|sin|sinh|sleep|sopen|sqrt|srandom|subset|set|substr|system|sprintf|sort|subset|snmp_agent_config|_snmp_debug|snmp_agent_stop|snmp_agent_start|snmp_h_set|snmp_h_get_next|snmp_h_get|snmp_set|snmp_walk|snmp_get_next|snmp_get|snmp_config|snmp_close|snmp_open|snmp_trap_receive|snmp_trap_ignore|snmp_trap_listen|snmp_trap_send|snmp_trap_raise_std_trap|snmp_trap_register_im|splitline|strcasecmp|str_repeat|trim|tail|tan|tanh|time|tmpnam|tolower|toupper|trace_psl_process|text_domain|unlock|unique|union|unset|va_arg|va_start|write)\b/,
	'number': /\b(?:(?:0[xX][0-9a-fA-F]*)|(?:[0-9]+\.[0-9]+)|[0-9]+)\b/,
	'operator': /[+\-~=\/*%&><\^!|\.]/,
	'punctuation': /[\(\){}\[\]:;,?]/
};
