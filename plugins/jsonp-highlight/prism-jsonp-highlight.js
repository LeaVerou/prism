(function () {
	if (!self.Prism || !self.document || !document.querySelectorAll || ![].filter) return;

	/**
	 * The list of adapter which will be used if `data-adapter` is not specified.
	 *
	 * @type {Array.<(response: any, pre?: HTMLPreElement) => string>}
	 */
	var adapters = [];

	/**
	 * Adds a new function to the list of adapters.
	 *
	 * If the given adapter is already registered or not a function, nothing will happen.
	 *
	 * @param {(response: any, pre?: HTMLElement) => string} adapter The adapter to be registered.
	 */
	function registerAdapter(adapter) {
		if (typeof adapter === "function" && !getAdapter(adapter)) {
			adapters.push(adapter);
		}
	}
	/**
	 * Returns the given adapter itself, if registered, or a registered adapter with the given function name.
	 *
	 * If no fitting adapter is registered, `null` will be returned.
	 *
	 * @param {string|Function} adapter The adapter itself or the function name of an adapter.
	 * @returns {(response: any, pre?: HTMLElement) => string} A registered adapter or `null`.
	 */
	function getAdapter(adapter) {
		if (typeof adapter === "function") {
			return adapters.filter(function (fn) { return fn.valueOf() === adapter.valueOf(); })[0];
		}
		else if (typeof adapter === "string" && adapter.length > 0) {
			return adapters.filter(function (fn) { return fn.name === adapter; })[0];
		}
		return null;
	}
	/**
	 * Remove the given adapter or the first registered adapter with the given function name from the list of
	 * registered adapters.
	 *
	 * @param {string|Function} adapter The adapter itself or the function name of an adapter.
	 */
	function removeAdapter(adapter) {
		if (typeof adapter === "string") {
			adapter = getAdapter(adapter);
		}
		if (typeof adapter === "function") {
			var index = adapters.indexOf(adapter);
			if (index >= 0) {
				adapters.splice(index, 1);
			}
		}
	}

	registerAdapter(function github(rsp, el) {
		if (rsp && rsp.meta && rsp.data) {
			if (rsp.meta.status && rsp.meta.status >= 400) {
				return "Error: " + (rsp.data.message || rsp.meta.status);
			}
			else if (typeof (rsp.data.content) === "string") {
				return typeof (atob) === "function"
					? atob(rsp.data.content.replace(/\s/g, ""))
					: "Your browser cannot decode base64";
			}
		}
		return null;
	});
	registerAdapter(function gist(rsp, el) {
		if (rsp && rsp.meta && rsp.data && rsp.data.files) {
			if (rsp.meta.status && rsp.meta.status >= 400) {
				return "Error: " + (rsp.data.message || rsp.meta.status);
			}

			var files = rsp.data.files;
			var filename = el.getAttribute("data-filename");
			if (filename == null) {
				// Maybe in the future we can somehow render all files
				// But the standard <script> include for gists does that nicely already,
				// so that might be getting beyond the scope of this plugin
				for (var key in files) {
					if (files.hasOwnProperty(key)) {
						filename = key;
						break;
					}
				}
			}

			if (files[filename] !== undefined) {
				return files[filename].content;
			}
			return "Error: unknown or missing gist file " + filename;
		}
		return null;
	});
	registerAdapter(function bitbucket(rsp, el) {
		if (rsp && rsp.node && typeof (rsp.data) === "string") {
			return rsp.data;
		}
		return null;
	});

	var jsonpcb = 0,
		loadMsg = "Loading\u2026";

	/**
	 * Highlights all `pre` elements with an `data-jsonp` by requesting the specified JSON and using the specified adapter
	 * or a registered adapter to extract the code to highlight from the response. The highlighted code will be inserted
	 * into the `pre` element.
	 */
	function highlight() {
		Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function (pre) {
			pre.textContent = "";

			var code = document.createElement("code");
			code.textContent = loadMsg;
			pre.appendChild(code);

			var adapterName = pre.getAttribute("data-adapter");
			var adapter = null;
			if (adapterName) {
				if (typeof window[adapterName] === "function") {
					adapter = window[adapterName];
				}
				else {
					code.textContent = "JSONP adapter function '" + adapterName + "' doesn't exist";
					return;
				}
			}

			var cb = "prismjsonp" + jsonpcb++;

			var uri = document.createElement("a");
			var src = uri.href = pre.getAttribute("data-jsonp");
			uri.href += (uri.search ? "&" : "?") + (pre.getAttribute("data-callback") || "callback") + "=" + cb;

			var timeout = setTimeout(function () {
				// we could clean up window[cb], but if the request finally succeeds, keeping it around is a good thing
				if (code.textContent === loadMsg) {
					code.textContent = "Timeout loading '" + src + "'";
				}
			}, 5000);

			var script = document.createElement("script");
			script.src = uri.href;

			window[cb] = function (rsp) {
				document.head.removeChild(script);
				clearTimeout(timeout);
				delete window[cb];

				var data = "";

				if (adapter) {
					data = adapter(rsp, pre);
				}
				else {
					for (var p in adapters) {
						data = adapters[p](rsp, pre);
						if (data !== null) {
							break;
						}
					}
				}

				if (data === null) {
					code.textContent = "Cannot parse response (perhaps you need an adapter function?)";
				}
				else {
					code.textContent = data;
					Prism.highlightElement(code);
				}
			};

			document.head.appendChild(script);
		});
	}

	Prism.plugins.jsonphighlight = {
		registerAdapter: registerAdapter,
		removeAdapter: removeAdapter,
		highlight: highlight
	};

	highlight();
})();