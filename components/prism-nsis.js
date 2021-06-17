/**
 * Original by Jan T. Sott (http://github.com/idleberg)
 *
 * Includes all commands and plug-ins shipped with NSIS 3.02
 */
Prism.languages.nsis = {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|[#;].*)/,
		lookbehind: true
	},
	'string': {
		pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'keyword': {
		pattern: /(^[\t ]*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|BG(?:Font|Gradient|Image)|Banner|BrandingText|BringToFront|CRCCheck|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Inst(?:Type(?:GetText|SetText)?)|InstProgressFlags|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|Int(?:64)?Fmt|Int(?:64|Ptr)?CmpU?|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|NSISdl|Name|Nop|OutFile|PE(?:DllCharacteristics|SubsysVer)|Page(?:Callbacks)?|Pop|Push|Quit|RMDir|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|UnRegDLL|Unicode|UninstPage|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UserInfo|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|Var|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle|ns(?:Dialogs|Exec))\b/m,
		lookbehind: true
	},
	'property': /\b(?:ARCHIVE|FILE_(?:ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(?:(?:CR|CU|LM)(?:32|64)?|DD|PD|U)|HKEY_(?:CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY|admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user)\b/,
	'constant': /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,
	'variable': /\$\w+/i,
	'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
	'operator': /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
	'punctuation': /[{}[\];(),.:]/,
	'important': {
		pattern: /(^[\t ]*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
		lookbehind: true
	}
};
