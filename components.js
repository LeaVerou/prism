var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML"},"option":"default"},"css":{"title":"CSS","option":"default","peerDependencies":"markup"},"clike":{"title":"C-like","option":"default","overrideExampleHeader":true},"javascript":{"title":"JavaScript","require":"clike","peerDependencies":"markup","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"Augmented Backus–Naur form","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","peerDependencies":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","owner":"eisbehr-"},"arff":{"title":"ARFF","owner":"Golmote"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"bash":{"title":"Bash","alias":"shell","aliasTitles":{"shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"Backus–Naur form","alias":"rbnf","aliasTitles":{"rbnf":"Routing Backus–Naur form"},"owner":"RunDevelopment"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"bro":{"title":"Bro","owner":"wayward710"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cil":{"title":"CIL","owner":"sbrl"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"clojure":{"title":"Clojure","owner":"troglotit"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"css-extras":{"title":"CSS Extras","require":"css","owner":"milesj"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"ebnf":{"title":"Extended Backus–Naur form","owner":"RunDevelopment"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment"},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"clike","owner":"Golmote"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"graphql":{"title":"GraphQL","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","peerDependencies":["css","css-extras","coffeescript","erb","javascript","less","markdown","ruby","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"http":{"title":"HTTP","peerDependencies":["javascript","markup"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"peerDependencies":["scala"],"owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","peerDependencies":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike"],"peerDependencies":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","peerDependencies":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"js-templates":{"title":"JS Templates","require":"javascript","peerDependencies":["css","css-extras","graphql","markdown","markup"],"owner":"RunDevelopment"},"json":{"title":"JSON","owner":"CupOfTea696"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","require":"clike","owner":"Golmote"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"less":{"title":"Less","require":"css","peerDependencies":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"matlab":{"title":"MATLAB","owner":"Golmote"},"mel":{"title":"MEL","owner":"Golmote"},"mizar":{"title":"Mizar","owner":"Golmote"},"monkey":{"title":"Monkey","owner":"Golmote"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","peerDependencies":["jsdoc"],"alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"nasm":{"title":"NASM","owner":"rbmj"},"nginx":{"title":"nginx","owner":"westonganger","require":"clike"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"opencl":{"title":"OpenCL","require":"cpp","peerDependencies":["c","cpp"],"overrideExampleHeader":true,"owner":"Milania1"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":["clike","markup-templating"],"owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","owner":"milesj"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"peerDependencies":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","peerDependencies":["c","cpp","fortran"],"owner":"Golmote"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"jsx":{"title":"React JSX","require":["markup","javascript"],"peerDependencies":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"renpy":{"title":"Ren'py","owner":"HyuchiaDiego"},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","peerDependencies":["actionscript","coffeescript","flow","javascript","typescript","vala"],"owner":"RunDevelopment"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robot-framework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","require":"sql","owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","owner":"Golmote"},"scss":{"title":"Sass (Scss)","require":"css","peerDependencies":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","owner":"Golmote"},"solidity":{"title":"Solidity (Ethereum)","require":"clike","owner":"glachaud"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"stylus":{"title":"Stylus","owner":"vkbansal"},"swift":{"title":"Swift","require":"clike","owner":"chrischares"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"textile":{"title":"Textile","require":"markup","peerDependencies":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"turtle":{"title":"Turtle","alias":["trig"],"aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","peerDependencies":"js-templates","alias":"ts","owner":"vkbansal"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","visual-basic"],"owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"vala":{"title":"Vala","require":"clike","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":"vb","owner":"Golmote"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","after":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"Allows you to prefix Prism default classes (e.g. <code>.comment</code> will become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code> or <code>.comment_7sh3a</code>).","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","after":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","after":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"}}};
if (typeof module !== 'undefined' && module.exports) { module.exports = components; }