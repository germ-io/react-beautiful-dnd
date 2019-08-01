(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = global || self, factory(global.ReactBeautifulDnd = {}, global.React, global.ReactDOM));
}(this, function (exports, React, ReactDOM) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.9' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode:  'pure' ,
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$1 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$1
	};

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.1 Object.assign(target, source, ...)






	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	var assign$1 = assign;

	function _extends() {
	  _extends = assign$1 || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function areInputsEqual(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }

	  for (var i = 0; i < newInputs.length; i++) {
	    if (newInputs[i] !== lastInputs[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	function useMemoOne(getResult, inputs) {
	  var initial = React.useState(function () {
	    return {
	      inputs: inputs,
	      result: getResult()
	    };
	  })[0];
	  var committed = React.useRef(initial);
	  var isInputMatch = Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
	  var cache = isInputMatch ? committed.current : {
	    inputs: inputs,
	    result: getResult()
	  };
	  React.useEffect(function () {
	    committed.current = cache;
	  }, [cache]);
	  return cache.result;
	}
	function useCallbackOne(callback, inputs) {
	  return useMemoOne(function () {
	    return callback;
	  }, inputs);
	}
	var useMemo = useMemoOne;
	var useCallback = useCallbackOne;

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	var $Object = _core.Object;
	var create = function create(P, D) {
	  return $Object.create(P, D);
	};

	var create$1 = create;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = create$1(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var spacesAndTabs = /[ \t]{2,}/g;
	var lineStartWithSpaces = /^[ \t]*/gm;

	var clean = function clean(value) {
	  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
	};

	var getDevMessage = function getDevMessage(message) {
	  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
	};

	var getFormattedMessage = function getFormattedMessage(message) {
	  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
	};
	var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
	var warning = function warning(message) {
	  var _console;

	  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
	    return;
	  }

	  (_console = console).warn.apply(_console, getFormattedMessage(message));
	};

	function printFatalError(error) {
	  var _console;

	  (_console = console).error.apply(_console, getFormattedMessage("\n        An error has occurred while a drag is occurring.\n        Any existing drag will be cancelled.\n\n        > " + error.message + "\n        "));

	  console.error('raw', error);
	}

	function shouldRecover(error) {
	  return error.message.indexOf('Invariant failed') !== -1;
	}

	var ErrorBoundary = function (_React$Component) {
	  _inheritsLoose(ErrorBoundary, _React$Component);

	  function ErrorBoundary() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.onError = void 0;

	    _this.setOnError = function (fn) {
	      _this.onError = fn;
	    };

	    _this.onFatalError = function (error) {
	      printFatalError(error);

	      if (_this.onError) {
	        _this.onError();
	      } else {
	         warning('Could not find recovering function') ;
	      }

	      if (shouldRecover(error)) {
	        _this.setState({});
	      }
	    };

	    return _this;
	  }

	  var _proto = ErrorBoundary.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    window.addEventListener('error', this.onFatalError);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('error', this.onFatalError);
	  };

	  _proto.componentDidCatch = function componentDidCatch(error) {
	    this.onFatalError(error);

	    if (!shouldRecover(error)) {
	      throw error;
	    }
	  };

	  _proto.render = function render() {
	    return this.props.children(this.setOnError);
	  };

	  return ErrorBoundary;
	}(React__default.Component);

	var liftInstruction = "Draggable item. Ensure your screen reader is not in browse mode and then press spacebar to lift.";

	var position = function position(index) {
	  return index + 1;
	};

	var onDragStart = function onDragStart(start) {
	  return "\n  You have lifted an item in position " + position(start.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
	};

	var withLocation = function withLocation(source, destination) {
	  var isInHomeList = source.droppableId === destination.droppableId;
	  var startPosition = position(source.index);
	  var endPosition = position(destination.index);

	  if (isInHomeList) {
	    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
	  }

	  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
	};

	var withCombine = function withCombine(id, source, combine) {
	  var inHomeList = source.droppableId === combine.droppableId;

	  if (inHomeList) {
	    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
	  }

	  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
	};

	var onDragUpdate = function onDragUpdate(update) {
	  var location = update.destination;

	  if (location) {
	    return withLocation(update.source, location);
	  }

	  var combine = update.combine;

	  if (combine) {
	    return withCombine(update.draggableId, update.source, combine);
	  }

	  return 'You are over an area that cannot be dropped on';
	};

	var returnedToStart = function returnedToStart(source) {
	  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
	};

	var onDragEnd = function onDragEnd(result) {
	  if (result.reason === 'CANCEL') {
	    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
	  }

	  var location = result.destination;
	  var combine = result.combine;

	  if (location) {
	    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
	  }

	  if (combine) {
	    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
	  }

	  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
	};

	var preset = {
	  liftInstruction: liftInstruction,
	  onDragStart: onDragStart,
	  onDragUpdate: onDragUpdate,
	  onDragEnd: onDragEnd
	};

	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	  if (condition) {
	    return;
	  }

	  {
	    throw new Error(prefix + ": " + (message || ''));
	  }
	}

	function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

	/* global window */

	var root;

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = symbolObservablePonyfill(root);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
	  }

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */


	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }

	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */


	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected the listener to be a function.');
	    }

	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	    }

	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
	      }

	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */


	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */


	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */


	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[result] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.


	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[result] = observable, _ref2;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$1(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty

	}

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass an action creator as the first argument,
	 * and get a dispatch wrapped function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */


	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
	  }

	  var boundActionCreators = {};

	  for (var key in actionCreators) {
	    var actionCreator = actionCreators[key];

	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }

	  return boundActionCreators;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
	  }

	  if (enumerableOnly) keys = keys.filter(function (sym) {
	    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	  });
	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(source, true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(source).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);

	      var _dispatch = function dispatch() {
	        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
	      };

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread2({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */

	function isCrushed() {}

	if ( typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  warning$1('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});
	var reactIs_1 = reactIs.isValidElementType;
	var reactIs_2 = reactIs.isContextConsumer;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ( typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!reactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning$1(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has$1(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var ReactIs = reactIs;

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
	}
	});

	var ReactReduxContext = React__default.createContext(null);

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}

	var batch = defaultNoopBatch; // Allow injecting another batching function later

	var setBatch = function setBatch(newBatch) {
	  return batch = newBatch;
	}; // Supply a getter just to skip dealing with ESM bindings

	var getBatch = function getBatch() {
	  return batch;
	};

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?

	  var current = [];
	  var next = [];
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      batch(function () {
	        for (var i = 0; i < listeners.length; i++) {
	          listeners[i]();
	        }
	      });
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(store, parentSub) {
	    this.store = store;
	    this.parentSub = parentSub;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
	  }

	  var _proto = Subscription.prototype;

	  _proto.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  _proto.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  _proto.handleChangeWrapper = function handleChangeWrapper() {
	    if (this.onStateChange) {
	      this.onStateChange();
	    }
	  };

	  _proto.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  _proto.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
	      this.listeners = createListenerCollection();
	    }
	  };

	  _proto.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	var Provider =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(Provider, _Component);

	  function Provider(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    var store = props.store;
	    _this.notifySubscribers = _this.notifySubscribers.bind(_assertThisInitialized(_this));
	    var subscription = new Subscription(store);
	    subscription.onStateChange = _this.notifySubscribers;
	    _this.state = {
	      store: store,
	      subscription: subscription
	    };
	    _this.previousState = store.getState();
	    return _this;
	  }

	  var _proto = Provider.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this.state.subscription.trySubscribe();

	    if (this.previousState !== this.props.store.getState()) {
	      this.state.subscription.notifyNestedSubs();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribe) this.unsubscribe();
	    this.state.subscription.tryUnsubscribe();
	    this._isMounted = false;
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.store !== prevProps.store) {
	      this.state.subscription.tryUnsubscribe();
	      var subscription = new Subscription(this.props.store);
	      subscription.onStateChange = this.notifySubscribers;
	      this.setState({
	        store: this.props.store,
	        subscription: subscription
	      });
	    }
	  };

	  _proto.notifySubscribers = function notifySubscribers() {
	    this.state.subscription.notifyNestedSubs();
	  };

	  _proto.render = function render() {
	    var Context = this.props.context || ReactReduxContext;
	    return React__default.createElement(Context.Provider, {
	      value: this.state
	    }, this.props.children);
	  };

	  return Provider;
	}(React.Component);

	Provider.propTypes = {
	  store: propTypes.shape({
	    subscribe: propTypes.func.isRequired,
	    dispatch: propTypes.func.isRequired,
	    getState: propTypes.func.isRequired
	  }),
	  context: propTypes.object,
	  children: propTypes.any
	};

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$1.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextType: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromError: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};

	var FORWARD_REF_STATICS = {
	    '$$typeof': true,
	    render: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true
	};

	var MEMO_STATICS = {
	    '$$typeof': true,
	    compare: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true,
	    type: true
	};

	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

	function getStatics(component) {
	    if (reactIs.isMemo(component)) {
	        return MEMO_STATICS;
	    }
	    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols$1) {
	            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
	        }

	        var targetStatics = getStatics(targetComponent);
	        var sourceStatics = getStatics(sourceComponent);

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try {
	                    // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var invariant$1 = function(condition, format, a, b, c, d, e, f) {
	  {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	var invariant_1 = invariant$1;

	var EMPTY_ARRAY = [];
	var NO_SUBSCRIPTION_ARRAY = [null, null];

	var stringifyComponent = function stringifyComponent(Comp) {
	  try {
	    return JSON.stringify(Comp);
	  } catch (err) {
	    return String(Comp);
	  }
	};

	function storeStateUpdatesReducer(state, action) {
	  var updateCount = state[1];
	  return [action.payload, updateCount + 1];
	}

	var initStateUpdates = function initStateUpdates() {
	  return [null, 0];
	}; // React currently throws a warning when using useLayoutEffect on the server.
	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect because we want
	// `connect` to perform sync updates to a ref to save the latest props after
	// a render is actually committed to the DOM.


	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  if (_ref === void 0) {
	    _ref = {};
	  }

	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      _ref2$forwardRef = _ref2.forwardRef,
	      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
	      _ref2$context = _ref2.context,
	      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
	      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

	  invariant_1(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
	  invariant_1(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
	  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
	  invariant_1(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
	  var Context = context;
	  return function wrapWithConnect(WrappedComponent) {
	    {
	      invariant_1(reactIs_1(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
	    }

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends$1({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var pure = connectOptions.pure;

	    function createChildSelector(store) {
	      return selectorFactory(store.dispatch, selectorFactoryOptions);
	    } // If we aren't running in "pure" mode, we don't want to memoize values.
	    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
	    // that just executes the given callback immediately.


	    var usePureOnlyMemo = pure ? React.useMemo : function (callback) {
	      return callback();
	    };

	    function ConnectFunction(props) {
	      var _useMemo = React.useMemo(function () {
	        // Distinguish between actual "data" props that were passed to the wrapper component,
	        // and values needed to control behavior (forwarded refs, alternate context instances).
	        // To maintain the wrapperProps object reference, memoize this destructuring.
	        var forwardedRef = props.forwardedRef,
	            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

	        return [props.context, forwardedRef, wrapperProps];
	      }, [props]),
	          propsContext = _useMemo[0],
	          forwardedRef = _useMemo[1],
	          wrapperProps = _useMemo[2];

	      var ContextToUse = React.useMemo(function () {
	        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
	        // Memoize the check that determines which context instance we should use.
	        return propsContext && propsContext.Consumer && reactIs_2(React__default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
	      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

	      var contextValue = React.useContext(ContextToUse); // The store _must_ exist as either a prop or in context

	      var didStoreComeFromProps = Boolean(props.store);
	      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
	      invariant_1(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
	      var store = props.store || contextValue.store;
	      var childPropsSelector = React.useMemo(function () {
	        // The child props selector needs the store reference as an input.
	        // Re-create this selector whenever the store changes.
	        return createChildSelector(store);
	      }, [store]);

	      var _useMemo2 = React.useMemo(function () {
	        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.

	        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `subscription` will then be null. This can
	        // probably be avoided if Subscription's listeners logic is changed to not call listeners
	        // that have been unsubscribed in the  middle of the notification loop.

	        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
	        return [subscription, notifyNestedSubs];
	      }, [store, didStoreComeFromProps, contextValue]),
	          subscription = _useMemo2[0],
	          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
	      // and memoize that value to avoid unnecessary context updates.


	      var overriddenContextValue = React.useMemo(function () {
	        if (didStoreComeFromProps) {
	          // This component is directly subscribed to a store from props.
	          // We don't want descendants reading from this store - pass down whatever
	          // the existing context value is from the nearest connected ancestor.
	          return contextValue;
	        } // Otherwise, put this component's subscription instance into context, so that
	        // connected descendants won't update until after this component is done


	        return _extends$1({}, contextValue, {
	          subscription: subscription
	        });
	      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
	      // causes a change to the calculated child component props (or we caught an error in mapState)

	      var _useReducer = React.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
	          _useReducer$ = _useReducer[0],
	          previousStateUpdateResult = _useReducer$[0],
	          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


	      if (previousStateUpdateResult && previousStateUpdateResult.error) {
	        throw previousStateUpdateResult.error;
	      } // Set up refs to coordinate values between the subscription effect and the render logic


	      var lastChildProps = React.useRef();
	      var lastWrapperProps = React.useRef(wrapperProps);
	      var childPropsFromStoreUpdate = React.useRef();
	      var renderIsScheduled = React.useRef(false);
	      var actualChildProps = usePureOnlyMemo(function () {
	        // Tricky logic here:
	        // - This render may have been triggered by a Redux store update that produced new child props
	        // - However, we may have gotten new wrapper props after that
	        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
	        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
	        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
	        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
	          return childPropsFromStoreUpdate.current;
	        } // TODO We're reading the store directly in render() here. Bad idea?
	        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
	        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
	        // to determine what the child props should be.


	        return childPropsSelector(store.getState(), wrapperProps);
	      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
	      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
	      // just useEffect instead to avoid the warning, since neither will run anyway.

	      useIsomorphicLayoutEffect(function () {
	        // We want to capture the wrapper props and child props we used for later comparisons
	        lastWrapperProps.current = wrapperProps;
	        lastChildProps.current = actualChildProps;
	        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

	        if (childPropsFromStoreUpdate.current) {
	          childPropsFromStoreUpdate.current = null;
	          notifyNestedSubs();
	        }
	      }); // Our re-subscribe logic only runs when the store/subscription setup changes

	      useIsomorphicLayoutEffect(function () {
	        // If we're not subscribed to the store, nothing to do here
	        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

	        var didUnsubscribe = false;
	        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

	        var checkForUpdates = function checkForUpdates() {
	          if (didUnsubscribe) {
	            // Don't run stale listeners.
	            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
	            return;
	          }

	          var latestStoreState = store.getState();
	          var newChildProps, error;

	          try {
	            // Actually run the selector with the most recent store state and wrapper props
	            // to determine what the child props should be
	            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
	          } catch (e) {
	            error = e;
	            lastThrownError = e;
	          }

	          if (!error) {
	            lastThrownError = null;
	          } // If the child props haven't changed, nothing to do here - cascade the subscription update


	          if (newChildProps === lastChildProps.current) {
	            if (!renderIsScheduled.current) {
	              notifyNestedSubs();
	            }
	          } else {
	            // Save references to the new child props.  Note that we track the "child props from store update"
	            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
	            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
	            // forcing another re-render, which we don't want.
	            lastChildProps.current = newChildProps;
	            childPropsFromStoreUpdate.current = newChildProps;
	            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

	            forceComponentUpdateDispatch({
	              type: 'STORE_UPDATED',
	              payload: {
	                latestStoreState: latestStoreState,
	                error: error
	              }
	            });
	          }
	        }; // Actually subscribe to the nearest connected ancestor (or store)


	        subscription.onStateChange = checkForUpdates;
	        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
	        // changed since we began.

	        checkForUpdates();

	        var unsubscribeWrapper = function unsubscribeWrapper() {
	          didUnsubscribe = true;
	          subscription.tryUnsubscribe();

	          if (lastThrownError) {
	            // It's possible that we caught an error due to a bad mapState function, but the
	            // parent re-rendered without this component and we're about to unmount.
	            // This shouldn't happen as long as we do top-down subscriptions correctly, but
	            // if we ever do those wrong, this throw will surface the error in our tests.
	            // In that case, throw the error from here so it doesn't get lost.
	            throw lastThrownError;
	          }
	        };

	        return unsubscribeWrapper;
	      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
	      // We memoize the elements for the rendered child component as an optimization.

	      var renderedWrappedComponent = React.useMemo(function () {
	        return React__default.createElement(WrappedComponent, _extends$1({}, actualChildProps, {
	          ref: forwardedRef
	        }));
	      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
	      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

	      var renderedChild = React.useMemo(function () {
	        if (shouldHandleStateChanges) {
	          // If this component is subscribed to store updates, we need to pass its own
	          // subscription instance down to our descendants. That means rendering the same
	          // Context instance, and putting a different value into the context.
	          return React__default.createElement(ContextToUse.Provider, {
	            value: overriddenContextValue
	          }, renderedWrappedComponent);
	        }

	        return renderedWrappedComponent;
	      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
	      return renderedChild;
	    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


	    var Connect = pure ? React__default.memo(ConnectFunction) : ConnectFunction;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;

	    if (forwardRef) {
	      var forwarded = React__default.forwardRef(function forwardConnectRef(props, ref) {
	        return React__default.createElement(Connect, _extends$1({}, props, {
	          forwardedRef: ref
	        }));
	      });
	      forwarded.displayName = displayName;
	      forwarded.WrappedComponent = WrappedComponent;
	      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
	    }

	    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
	  };
	}

	var hasOwn = Object.prototype.hasOwnProperty;

	function is$1(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is$1(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$1(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  var baseProto = proto;

	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }

	  return proto === baseProto;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$2(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject$1(value)) {
	    warning$2(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }

	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	//
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..

	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	//
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//

	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps


	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      verifyPlainObject(props, displayName, methodName);
	      return props;
	    };

	    return proxy;
	  };
	}

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
	    return bindActionCreators(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
	}
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? wrapMapToPropsConstant(function () {
	    return {};
	  }) : undefined;
	}
	var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends$1({}, ownProps, stateProps, dispatchProps);
	}
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        verifyPlainObject(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      warning$2("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  {
	    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios


	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }

	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
	        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, _extends$1({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	var connect = createConnect();

	setBatch(ReactDOM.unstable_batchedUpdates);

	var keys = createCommonjsModule(function (module, exports) {
	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	});
	var keys_1 = keys.shim;

	var is_arguments = createCommonjsModule(function (module, exports) {
	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	}});
	var is_arguments_1 = is_arguments.supported;
	var is_arguments_2 = is_arguments.unsupported;

	var deepEqual_1 = createCommonjsModule(function (module) {
	var pSlice = Array.prototype.slice;



	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	};

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (is_arguments(a)) {
	    if (!is_arguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = keys(a),
	        kb = keys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}
	});

	var origin = {
	  x: 0,
	  y: 0
	};
	var add = function add(point1, point2) {
	  return {
	    x: point1.x + point2.x,
	    y: point1.y + point2.y
	  };
	};
	var subtract = function subtract(point1, point2) {
	  return {
	    x: point1.x - point2.x,
	    y: point1.y - point2.y
	  };
	};
	var isEqual = function isEqual(point1, point2) {
	  return point1.x === point2.x && point1.y === point2.y;
	};
	var negate = function negate(point) {
	  return {
	    x: point.x !== 0 ? -point.x : 0,
	    y: point.y !== 0 ? -point.y : 0
	  };
	};
	var patch = function patch(line, value, otherValue) {
	  var _ref;

	  if (otherValue === void 0) {
	    otherValue = 0;
	  }

	  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
	};
	var distance = function distance(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};
	var closest = function closest(target, points) {
	  return Math.min.apply(Math, points.map(function (point) {
	    return distance(target, point);
	  }));
	};
	var apply = function apply(fn) {
	  return function (point) {
	    return {
	      x: fn(point.x),
	      y: fn(point.y)
	    };
	  };
	};

	var prefix$1 = 'Invariant failed';
	function invariant$2(condition, message) {
	  if (condition) {
	    return;
	  }

	  {
	    throw new Error(prefix$1 + ": " + (message || ''));
	  }
	}

	var getRect = function getRect(_ref) {
	  var top = _ref.top,
	      right = _ref.right,
	      bottom = _ref.bottom,
	      left = _ref.left;
	  var width = right - left;
	  var height = bottom - top;
	  var rect = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: width,
	    height: height,
	    x: left,
	    y: top,
	    center: {
	      x: (right + left) / 2,
	      y: (bottom + top) / 2
	    }
	  };
	  return rect;
	};
	var expand = function expand(target, expandBy) {
	  return {
	    top: target.top - expandBy.top,
	    left: target.left - expandBy.left,
	    bottom: target.bottom + expandBy.bottom,
	    right: target.right + expandBy.right
	  };
	};
	var shrink = function shrink(target, shrinkBy) {
	  return {
	    top: target.top + shrinkBy.top,
	    left: target.left + shrinkBy.left,
	    bottom: target.bottom - shrinkBy.bottom,
	    right: target.right - shrinkBy.right
	  };
	};

	var shift = function shift(target, shiftBy) {
	  return {
	    top: target.top + shiftBy.y,
	    left: target.left + shiftBy.x,
	    bottom: target.bottom + shiftBy.y,
	    right: target.right + shiftBy.x
	  };
	};

	var noSpacing = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};
	var createBox = function createBox(_ref2) {
	  var borderBox = _ref2.borderBox,
	      _ref2$margin = _ref2.margin,
	      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
	      _ref2$border = _ref2.border,
	      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
	      _ref2$padding = _ref2.padding,
	      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
	  var marginBox = getRect(expand(borderBox, margin));
	  var paddingBox = getRect(shrink(borderBox, border));
	  var contentBox = getRect(shrink(paddingBox, padding));
	  return {
	    marginBox: marginBox,
	    borderBox: getRect(borderBox),
	    paddingBox: paddingBox,
	    contentBox: contentBox,
	    margin: margin,
	    border: border,
	    padding: padding
	  };
	};

	var parse = function parse(raw) {
	  var value = raw.slice(0, -2);
	  var suffix = raw.slice(-2);

	  if (suffix !== 'px') {
	    return 0;
	  }

	  var result = Number(value);
	  !!isNaN(result) ?  invariant$2(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]")  : void 0;
	  return result;
	};

	var getWindowScroll = function getWindowScroll() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	};

	var offset = function offset(original, change) {
	  var borderBox = original.borderBox,
	      border = original.border,
	      margin = original.margin,
	      padding = original.padding;
	  var shifted = shift(borderBox, change);
	  return createBox({
	    borderBox: shifted,
	    border: border,
	    margin: margin,
	    padding: padding
	  });
	};
	var withScroll = function withScroll(original, scroll) {
	  if (scroll === void 0) {
	    scroll = getWindowScroll();
	  }

	  return offset(original, scroll);
	};
	var calculateBox = function calculateBox(borderBox, styles) {
	  var margin = {
	    top: parse(styles.marginTop),
	    right: parse(styles.marginRight),
	    bottom: parse(styles.marginBottom),
	    left: parse(styles.marginLeft)
	  };
	  var padding = {
	    top: parse(styles.paddingTop),
	    right: parse(styles.paddingRight),
	    bottom: parse(styles.paddingBottom),
	    left: parse(styles.paddingLeft)
	  };
	  var border = {
	    top: parse(styles.borderTopWidth),
	    right: parse(styles.borderRightWidth),
	    bottom: parse(styles.borderBottomWidth),
	    left: parse(styles.borderLeftWidth)
	  };
	  return createBox({
	    borderBox: borderBox,
	    margin: margin,
	    padding: padding,
	    border: border
	  });
	};
	var getBox = function getBox(el) {
	  var borderBox = el.getBoundingClientRect();
	  var styles = window.getComputedStyle(el);
	  return calculateBox(borderBox, styles);
	};

	var executeClip = (function (frame, subject) {
	  var result = getRect({
	    top: Math.max(subject.top, frame.top),
	    right: Math.min(subject.right, frame.right),
	    bottom: Math.min(subject.bottom, frame.bottom),
	    left: Math.max(subject.left, frame.left)
	  });

	  if (result.width <= 0 || result.height <= 0) {
	    return null;
	  }

	  return result;
	});

	var offsetByPosition = function offsetByPosition(spacing, point) {
	  return {
	    top: spacing.top + point.y,
	    left: spacing.left + point.x,
	    bottom: spacing.bottom + point.y,
	    right: spacing.right + point.x
	  };
	};
	var getCorners = function getCorners(spacing) {
	  return [{
	    x: spacing.left,
	    y: spacing.top
	  }, {
	    x: spacing.right,
	    y: spacing.top
	  }, {
	    x: spacing.left,
	    y: spacing.bottom
	  }, {
	    x: spacing.right,
	    y: spacing.bottom
	  }];
	};
	var noSpacing$1 = {
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	var scroll = function scroll(target, frame) {
	  if (!frame) {
	    return target;
	  }

	  return offsetByPosition(target, frame.scroll.diff.displacement);
	};

	var increase = function increase(target, axis, withPlaceholder) {
	  if (withPlaceholder && withPlaceholder.increasedBy) {
	    var _extends2;

	    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
	  }

	  return target;
	};

	var clip = function clip(target, frame) {
	  if (frame && frame.shouldClipSubject) {
	    return executeClip(frame.pageMarginBox, target);
	  }

	  return getRect(target);
	};

	var getSubject = (function (_ref) {
	  var page = _ref.page,
	      withPlaceholder = _ref.withPlaceholder,
	      axis = _ref.axis,
	      frame = _ref.frame;
	  var scrolled = scroll(page.marginBox, frame);
	  var increased = increase(scrolled, axis, withPlaceholder);
	  var clipped = clip(increased, frame);
	  return {
	    page: page,
	    withPlaceholder: withPlaceholder,
	    active: clipped
	  };
	});

	var scrollDroppable = (function (droppable, newScroll) {
	  !droppable.frame ?  invariant(false)  : void 0;
	  var scrollable = droppable.frame;
	  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
	  var scrollDisplacement = negate(scrollDiff);

	  var frame = _extends({}, scrollable, {
	    scroll: {
	      initial: scrollable.scroll.initial,
	      current: newScroll,
	      diff: {
	        value: scrollDiff,
	        displacement: scrollDisplacement
	      },
	      max: scrollable.scroll.max
	    }
	  });

	  var subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: droppable.subject.withPlaceholder,
	    axis: droppable.axis,
	    frame: frame
	  });

	  var result = _extends({}, droppable, {
	    frame: frame,
	    subject: subject
	  });

	  return result;
	});

	var records = {};
	var isEnabled = false;

	var isTimingsEnabled = function isTimingsEnabled() {
	  return isEnabled;
	};
	var start = function start(key) {
	  {
	    if (!isTimingsEnabled()) {
	      return;
	    }

	    var now = performance.now();
	    records[key] = now;
	  }
	};
	var finish = function finish(key) {
	  {
	    if (!isTimingsEnabled()) {
	      return;
	    }

	    var now = performance.now();
	    var previous = records[key];

	    if (!previous) {
	      console.warn('cannot finish timing as no previous time found', key);
	      return;
	    }

	    var result = now - previous;
	    var rounded = result.toFixed(2);

	    var style = function () {
	      if (result < 12) {
	        return {
	          textColor: 'green',
	          symbol: '✅'
	        };
	      }

	      if (result < 40) {
	        return {
	          textColor: 'orange',
	          symbol: '⚠️'
	        };
	      }

	      return {
	        textColor: 'red',
	        symbol: '❌'
	      };
	    }();

	    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold;', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
	  }
	};

	var whatIsDraggedOver = (function (impact) {
	  var at = impact.at;

	  if (!at) {
	    return null;
	  }

	  if (at.type === 'REORDER') {
	    return at.destination.droppableId;
	  }

	  return at.combine.droppableId;
	});

	function areInputsEqual$1(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }

	  for (var i = 0; i < newInputs.length; i++) {
	    if (newInputs[i] !== lastInputs[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	function memoizeOne(resultFn, isEqual) {
	  if (isEqual === void 0) {
	    isEqual = areInputsEqual$1;
	  }

	  var lastThis;
	  var lastArgs = [];
	  var lastResult;
	  var calledOnce = false;

	  var result = function memoized() {
	    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
	      newArgs[_key] = arguments[_key];
	    }

	    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
	      return lastResult;
	    }

	    lastResult = resultFn.apply(this, newArgs);
	    calledOnce = true;
	    lastThis = this;
	    lastArgs = newArgs;
	    return lastResult;
	  };

	  return result;
	}

	var isEnum = _objectPie.f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = _toIobject(it);
	    var keys = _objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!_descriptors || isEnum.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries

	var $values = _objectToArray(false);

	_export(_export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

	var values = _core.Object.values;

	var values$1 = values;

	function values$2(map) {
	  return values$1(map);
	}
	function findIndex(list, predicate) {
	  if (list.findIndex) {
	    return list.findIndex(predicate);
	  }

	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return i;
	    }
	  }

	  return -1;
	}
	function find(list, predicate) {
	  if (list.find) {
	    return list.find(predicate);
	  }

	  var index = findIndex(list, predicate);

	  if (index !== -1) {
	    return list[index];
	  }

	  return undefined;
	}
	function toArray(list) {
	  return Array.prototype.slice.call(list);
	}

	var toDroppableMap = memoizeOne(function (droppables) {
	  return droppables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDraggableMap = memoizeOne(function (draggables) {
	  return draggables.reduce(function (previous, current) {
	    previous[current.descriptor.id] = current;
	    return previous;
	  }, {});
	});
	var toDroppableList = memoizeOne(function (droppables) {
	  return values$2(droppables);
	});
	var toDraggableList = memoizeOne(function (draggables) {
	  return values$2(draggables);
	});

	var isWithin = (function (lowerBound, upperBound) {
	  return function (value) {
	    return lowerBound <= value && value <= upperBound;
	  };
	});

	var isPositionInFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (point) {
	    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
	  };
	});

	var getDroppableOver = (function (_ref) {
	  var target = _ref.target,
	      droppables = _ref.droppables;
	  var maybe = find(toDroppableList(droppables), function (droppable) {
	    if (!droppable.isEnabled) {
	      return false;
	    }

	    var active = droppable.subject.active;

	    if (!active) {
	      return false;
	    }

	    return isPositionInFrame(active)(target);
	  });
	  return maybe ? maybe.descriptor.id : null;
	});

	var getDraggablesInsideDroppable = memoizeOne(function (droppableId, draggables) {
	  var result = toDraggableList(draggables).filter(function (draggable) {
	    return droppableId === draggable.descriptor.droppableId;
	  }).sort(function (a, b) {
	    return a.descriptor.index - b.descriptor.index;
	  });
	  return result;
	});

	var withDroppableScroll = (function (droppable, point) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return point;
	  }

	  return add(point, frame.scroll.diff.value);
	});

	var vertical = {
	  direction: 'vertical',
	  line: 'y',
	  crossAxisLine: 'x',
	  start: 'top',
	  end: 'bottom',
	  size: 'height',
	  crossAxisStart: 'left',
	  crossAxisEnd: 'right',
	  crossAxisSize: 'width'
	};
	var horizontal = {
	  direction: 'horizontal',
	  line: 'x',
	  crossAxisLine: 'y',
	  start: 'left',
	  end: 'right',
	  size: 'width',
	  crossAxisStart: 'top',
	  crossAxisEnd: 'bottom',
	  crossAxisSize: 'height'
	};

	var isUserMovingForward = (function (axis, direction) {
	  return axis === vertical ? direction.vertical === 'down' : direction.horizontal === 'right';
	});

	var getDisplacedBy = memoizeOne(function getDisplacedBy(axis, displaceBy) {
	  var displacement = displaceBy[axis.line];
	  return {
	    value: displacement,
	    point: patch(axis.line, displacement)
	  };
	});

	var removeDraggableFromList = memoizeOne(function (remove, list) {
	  return list.filter(function (item) {
	    return item.descriptor.id !== remove.descriptor.id;
	  });
	});

	var isHomeOf = (function (draggable, destination) {
	  return draggable.descriptor.droppableId === destination.descriptor.id;
	});

	function didStartAfterCritical(draggableId, afterCritical) {
	  return Boolean(afterCritical.effected[draggableId]);
	}

	var noDisplacedBy = {
	  point: origin,
	  value: 0
	};
	var emptyGroups = {
	  invisible: {},
	  visible: {},
	  all: []
	};
	var noImpact = {
	  displaced: emptyGroups,
	  displacedBy: noDisplacedBy,
	  at: null
	};

	var isPartiallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

	    if (isContained) {
	      return true;
	    }

	    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
	    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
	    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

	    if (isPartiallyContained) {
	      return true;
	    }

	    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
	    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
	    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

	    if (isTargetBiggerThanFrame) {
	      return true;
	    }

	    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
	    return isTargetBiggerOnOneAxis;
	  };
	});

	var isTotallyVisibleThroughFrame = (function (frame) {
	  var isWithinVertical = isWithin(frame.top, frame.bottom);
	  var isWithinHorizontal = isWithin(frame.left, frame.right);
	  return function (subject) {
	    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    return isContained;
	  };
	});

	var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
	  return function (frame) {
	    var isWithinVertical = isWithin(frame.top, frame.bottom);
	    var isWithinHorizontal = isWithin(frame.left, frame.right);
	    return function (subject) {
	      if (axis === vertical) {
	        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
	      }

	      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
	    };
	  };
	});

	var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
	  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
	  return offsetByPosition(target, displacement);
	};

	var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
	  if (!destination.subject.active) {
	    return false;
	  }

	  return isVisibleThroughFrameFn(destination.subject.active)(target);
	};

	var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
	  return isVisibleThroughFrameFn(viewport)(target);
	};

	var isVisible = function isVisible(_ref) {
	  var toBeDisplaced = _ref.target,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      withDroppableDisplacement = _ref.withDroppableDisplacement,
	      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
	  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
	  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
	};

	var isPartiallyVisible = function isPartiallyVisible(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
	  }));
	};
	var isTotallyVisible = function isTotallyVisible(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
	  }));
	};
	var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
	  return isVisible(_extends({}, args, {
	    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
	  }));
	};

	var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
	  if (typeof forceShouldAnimate === 'boolean') {
	    return forceShouldAnimate;
	  }

	  if (!last) {
	    return true;
	  }

	  var invisible = last.invisible,
	      visible = last.visible;

	  if (invisible[id]) {
	    return false;
	  }

	  var previous = visible[id];
	  return previous ? previous.shouldAnimate : true;
	};

	function getTarget(draggable, displacedBy) {
	  var marginBox = draggable.page.marginBox;
	  var expandBy = {
	    top: displacedBy.point.y,
	    right: 0,
	    bottom: 0,
	    left: displacedBy.point.x
	  };
	  return getRect(expand(marginBox, expandBy));
	}

	function getDisplacementGroups(_ref) {
	  var afterDragging = _ref.afterDragging,
	      destination = _ref.destination,
	      displacedBy = _ref.displacedBy,
	      viewport = _ref.viewport,
	      forceShouldAnimate = _ref.forceShouldAnimate,
	      last = _ref.last;
	  return afterDragging.reduce(function process(groups, draggable) {
	    var target = getTarget(draggable, displacedBy);
	    var id = draggable.descriptor.id;
	    groups.all.push(id);
	    var isVisible = isPartiallyVisible({
	      target: target,
	      destination: destination,
	      viewport: viewport,
	      withDroppableDisplacement: true
	    });

	    if (!isVisible) {
	      groups.invisible[draggable.descriptor.id] = true;
	      return groups;
	    }

	    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
	    var displacement = {
	      draggableId: id,
	      shouldAnimate: shouldAnimate
	    };
	    groups.visible[id] = displacement;
	    return groups;
	  }, {
	    all: [],
	    visible: {},
	    invisible: {}
	  });
	}

	function getIndexOfLastItem(draggables, options) {
	  if (!draggables.length) {
	    return 0;
	  }

	  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
	  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
	}

	function goAtEnd(_ref) {
	  var insideDestination = _ref.insideDestination,
	      inHomeList = _ref.inHomeList,
	      displacedBy = _ref.displacedBy,
	      destination = _ref.destination;
	  var newIndex = getIndexOfLastItem(insideDestination, {
	    inHomeList: inHomeList
	  });
	  return {
	    displaced: emptyGroups,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: newIndex
	      }
	    }
	  };
	}

	function calculateReorderImpact(_ref2) {
	  var draggable = _ref2.draggable,
	      insideDestination = _ref2.insideDestination,
	      destination = _ref2.destination,
	      viewport = _ref2.viewport,
	      displacedBy = _ref2.displacedBy,
	      last = _ref2.last,
	      index = _ref2.index,
	      forceShouldAnimate = _ref2.forceShouldAnimate;
	  var inHomeList = isHomeOf(draggable, destination);

	  if (index == null) {
	    return goAtEnd({
	      insideDestination: insideDestination,
	      inHomeList: inHomeList,
	      displacedBy: displacedBy,
	      destination: destination
	    });
	  }

	  var match = find(insideDestination, function (item) {
	    return item.descriptor.index === index;
	  });

	  if (!match) {
	    return goAtEnd({
	      insideDestination: insideDestination,
	      inHomeList: inHomeList,
	      displacedBy: displacedBy,
	      destination: destination
	    });
	  }

	  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  var sliceFrom = insideDestination.indexOf(match);
	  var impacted = withoutDragging.slice(sliceFrom);
	  var displaced = getDisplacementGroups({
	    afterDragging: impacted,
	    destination: destination,
	    displacedBy: displacedBy,
	    last: last,
	    viewport: viewport.frame,
	    forceShouldAnimate: forceShouldAnimate
	  });
	  return {
	    displaced: displaced,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: {
	        droppableId: destination.descriptor.id,
	        index: index
	      }
	    }
	  };
	}

	function atIndex(_ref) {
	  var draggable = _ref.draggable,
	      closest = _ref.closest,
	      inHomeList = _ref.inHomeList;

	  if (!closest) {
	    return null;
	  }

	  if (!inHomeList) {
	    return closest.descriptor.index;
	  }

	  if (closest.descriptor.index > draggable.descriptor.index) {
	    return closest.descriptor.index - 1;
	  }

	  return closest.descriptor.index;
	}

	var getReorderImpact = (function (_ref2) {
	  var currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
	      draggable = _ref2.draggable,
	      destination = _ref2.destination,
	      insideDestination = _ref2.insideDestination,
	      last = _ref2.last,
	      viewport = _ref2.viewport,
	      userDirection = _ref2.userDirection,
	      afterCritical = _ref2.afterCritical;
	  var axis = destination.axis;
	  var isMovingForward = isUserMovingForward(destination.axis, userDirection);
	  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  var targetCenter = currentCenter[axis.line];
	  var displacement = displacedBy.value;
	  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
	  var closest = find(withoutDragging, function (child) {
	    var id = child.descriptor.id;
	    var borderBox = child.page.borderBox;
	    var start = borderBox[axis.start];
	    var end = borderBox[axis.end];
	    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);

	    if (isMovingForward) {
	      if (didStartAfterCritical$1) {
	        return targetCenter < start;
	      }

	      return targetCenter < start + displacement;
	    }

	    if (didStartAfterCritical$1) {
	      return targetCenter <= end - displacement;
	    }

	    return targetCenter <= end;
	  });
	  var newIndex = atIndex({
	    draggable: draggable,
	    closest: closest,
	    inHomeList: isHomeOf(draggable, destination)
	  });
	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    last: last,
	    displacedBy: displacedBy,
	    index: newIndex
	  });
	});

	var getCombinedItemDisplacement = (function (_ref) {
	  var displaced = _ref.displaced,
	      afterCritical = _ref.afterCritical,
	      combineWith = _ref.combineWith,
	      displacedBy = _ref.displacedBy;
	  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

	  if (didStartAfterCritical(combineWith, afterCritical)) {
	    return isDisplaced ? origin : negate(displacedBy.point);
	  }

	  return isDisplaced ? displacedBy.point : origin;
	});

	function getWhenEntered(id, current, lastCombineImpact) {
	  if (!lastCombineImpact) {
	    return current;
	  }

	  if (id !== lastCombineImpact.combine.draggableId) {
	    return current;
	  }

	  return lastCombineImpact.whenEntered;
	}

	function tryGetCombineImpact(impact) {
	  if (impact.at && impact.at.type === 'COMBINE') {
	    return impact.at;
	  }

	  return null;
	}

	function calculateCombineImpact(_ref) {
	  var combineWithId = _ref.combineWithId,
	      destinationId = _ref.destinationId,
	      userDirection = _ref.userDirection,
	      previousImpact = _ref.previousImpact;
	  var lastCombineImpact = tryGetCombineImpact(previousImpact);
	  var whenEntered = getWhenEntered(combineWithId, userDirection, lastCombineImpact);
	  var impact = {
	    displacedBy: previousImpact.displacedBy,
	    displaced: previousImpact.displaced,
	    at: {
	      type: 'COMBINE',
	      whenEntered: whenEntered,
	      combine: {
	        draggableId: combineWithId,
	        droppableId: destinationId
	      }
	    }
	  };
	  return impact;
	}

	function getWhenEntered$1(id, current, lastCombineImpact) {
	  if (!lastCombineImpact) {
	    return current;
	  }

	  if (id !== lastCombineImpact.combine.draggableId) {
	    return current;
	  }

	  return lastCombineImpact.whenEntered;
	}

	var isCombiningWith = function isCombiningWith(_ref) {
	  var id = _ref.id,
	      currentCenter = _ref.currentCenter,
	      axis = _ref.axis,
	      borderBox = _ref.borderBox,
	      displaceBy = _ref.displaceBy,
	      currentUserDirection = _ref.currentUserDirection,
	      lastCombineImpact = _ref.lastCombineImpact;
	  var start = borderBox[axis.start] + displaceBy[axis.line];
	  var end = borderBox[axis.end] + displaceBy[axis.line];
	  var size = borderBox[axis.size];
	  var twoThirdsOfSize = size * 0.666;
	  var whenEntered = getWhenEntered$1(id, currentUserDirection, lastCombineImpact);
	  var isMovingForward = isUserMovingForward(axis, whenEntered);
	  var targetCenter = currentCenter[axis.line];

	  if (isMovingForward) {
	    return isWithin(start, start + twoThirdsOfSize)(targetCenter);
	  }

	  return isWithin(end - twoThirdsOfSize, end)(targetCenter);
	};

	function tryGetCombineImpact$1(impact) {
	  if (impact.at && impact.at.type === 'COMBINE') {
	    return impact.at;
	  }

	  return null;
	}

	var getCombineImpact = (function (_ref2) {
	  var draggable = _ref2.draggable,
	      currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange,
	      previousImpact = _ref2.previousImpact,
	      destination = _ref2.destination,
	      insideDestination = _ref2.insideDestination,
	      userDirection = _ref2.userDirection,
	      afterCritical = _ref2.afterCritical;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var axis = destination.axis;
	  var displaced = previousImpact.displaced;
	  var canBeDisplacedBy = previousImpact.displacedBy;
	  var lastCombineImpact = tryGetCombineImpact$1(previousImpact);
	  var combineWith = find(removeDraggableFromList(draggable, insideDestination), function (child) {
	    var id = child.descriptor.id;
	    var displaceBy = getCombinedItemDisplacement({
	      displaced: displaced,
	      afterCritical: afterCritical,
	      combineWith: id,
	      displacedBy: canBeDisplacedBy
	    });
	    return isCombiningWith({
	      id: id,
	      currentCenter: currentCenter,
	      axis: axis,
	      borderBox: child.page.borderBox,
	      displaceBy: displaceBy,
	      currentUserDirection: userDirection,
	      lastCombineImpact: lastCombineImpact
	    });
	  });

	  if (!combineWith) {
	    return null;
	  }

	  return calculateCombineImpact({
	    combineWithId: combineWith.descriptor.id,
	    destinationId: destination.descriptor.id,
	    previousImpact: previousImpact,
	    userDirection: userDirection
	  });
	});

	var getDragImpact = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      userDirection = _ref.userDirection,
	      afterCritical = _ref.afterCritical;
	  var destinationId = getDroppableOver({
	    target: pageBorderBoxCenter,
	    droppables: droppables
	  });

	  if (!destinationId) {
	    return noImpact;
	  }

	  var destination = droppables[destinationId];
	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var pageBorderBoxCenterWithDroppableScrollChange = withDroppableScroll(destination, pageBorderBoxCenter);
	  return getCombineImpact({
	    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
	    draggable: draggable,
	    previousImpact: previousImpact,
	    destination: destination,
	    insideDestination: insideDestination,
	    userDirection: userDirection,
	    afterCritical: afterCritical
	  }) || getReorderImpact({
	    pageBorderBoxCenterWithDroppableScrollChange: pageBorderBoxCenterWithDroppableScrollChange,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    last: previousImpact.displaced,
	    viewport: viewport,
	    userDirection: userDirection,
	    afterCritical: afterCritical
	  });
	});

	var getHomeLocation = (function (descriptor) {
	  return {
	    index: descriptor.index,
	    droppableId: descriptor.droppableId
	  };
	});

	var getLiftEffect = (function (_ref) {
	  var draggable = _ref.draggable,
	      home = _ref.home,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport;
	  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
	  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
	  var rawIndex = insideHome.indexOf(draggable);
	  !(rawIndex !== -1) ?  invariant(false, 'Expected draggable to be inside home list')  : void 0;
	  var afterDragging = insideHome.slice(rawIndex + 1);
	  var effected = afterDragging.reduce(function (previous, item) {
	    previous[item.descriptor.id] = true;
	    return previous;
	  }, {});
	  var afterCritical = {
	    inVirtualList: home.descriptor.mode === 'VIRTUAL',
	    displacedBy: displacedBy,
	    effected: effected
	  };
	  var displaced = getDisplacementGroups({
	    afterDragging: afterDragging,
	    destination: home,
	    displacedBy: displacedBy,
	    last: null,
	    viewport: viewport.frame,
	    forceShouldAnimate: false
	  });
	  var impact = {
	    displaced: displaced,
	    displacedBy: displacedBy,
	    at: {
	      type: 'REORDER',
	      destination: getHomeLocation(draggable.descriptor)
	    }
	  };
	  return {
	    impact: impact,
	    afterCritical: afterCritical
	  };
	});

	var offsetDraggable = (function (_ref) {
	  var draggable = _ref.draggable,
	      offset$1 = _ref.offset,
	      initialWindowScroll = _ref.initialWindowScroll;
	  var client = offset(draggable.client, offset$1);
	  var page = withScroll(client, initialWindowScroll);

	  var moved = _extends({}, draggable, {
	    placeholder: _extends({}, draggable.placeholder, {
	      client: client
	    }),
	    client: client,
	    page: page
	  });

	  return moved;
	});

	var adjustAdditionsForScrollChanges = (function (_ref) {
	  var additions = _ref.additions,
	      updatedDroppables = _ref.updatedDroppables,
	      viewport = _ref.viewport;
	  var windowScrollChange = viewport.scroll.diff.value;
	  return additions.map(function (draggable) {
	    var droppableId = draggable.descriptor.droppableId;
	    var modified = updatedDroppables[droppableId];
	    var frame = modified.frame;
	    !frame ?  invariant(false)  : void 0;
	    var droppableScrollChange = frame.scroll.diff.value;
	    var totalChange = add(windowScrollChange, droppableScrollChange);
	    var moved = offsetDraggable({
	      draggable: draggable,
	      offset: totalChange,
	      initialWindowScroll: viewport.scroll.initial
	    });
	    return moved;
	  });
	});

	var getMaxScroll = (function (_ref) {
	  var scrollHeight = _ref.scrollHeight,
	      scrollWidth = _ref.scrollWidth,
	      height = _ref.height,
	      width = _ref.width;
	  var maxScroll = subtract({
	    x: scrollWidth,
	    y: scrollHeight
	  }, {
	    x: width,
	    y: height
	  });
	  var adjustedMaxScroll = {
	    x: Math.max(0, maxScroll.x),
	    y: Math.max(0, maxScroll.y)
	  };
	  return adjustedMaxScroll;
	});

	var getDroppableDimension = (function (_ref) {
	  var descriptor = _ref.descriptor,
	      isEnabled = _ref.isEnabled,
	      isCombineEnabled = _ref.isCombineEnabled,
	      isFixedOnPage = _ref.isFixedOnPage,
	      direction = _ref.direction,
	      client = _ref.client,
	      page = _ref.page,
	      closest = _ref.closest;

	  var frame = function () {
	    if (!closest) {
	      return null;
	    }

	    var scrollSize = closest.scrollSize,
	        frameClient = closest.client;
	    var maxScroll = getMaxScroll({
	      scrollHeight: scrollSize.scrollHeight,
	      scrollWidth: scrollSize.scrollWidth,
	      height: frameClient.paddingBox.height,
	      width: frameClient.paddingBox.width
	    });
	    return {
	      pageMarginBox: closest.page.marginBox,
	      frameClient: frameClient,
	      scrollSize: scrollSize,
	      shouldClipSubject: closest.shouldClipSubject,
	      scroll: {
	        initial: closest.scroll,
	        current: closest.scroll,
	        max: maxScroll,
	        diff: {
	          value: origin,
	          displacement: origin
	        }
	      }
	    };
	  }();

	  var axis = direction === 'vertical' ? vertical : horizontal;
	  var subject = getSubject({
	    page: page,
	    withPlaceholder: null,
	    axis: axis,
	    frame: frame
	  });
	  var dimension = {
	    descriptor: descriptor,
	    isCombineEnabled: isCombineEnabled,
	    isFixedOnPage: isFixedOnPage,
	    axis: axis,
	    isEnabled: isEnabled,
	    client: client,
	    page: page,
	    frame: frame,
	    subject: subject
	  };
	  return dimension;
	});

	var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
	  var axis = droppable.axis;
	  var availableSpace = droppable.subject.page.contentBox[axis.size];
	  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
	    return sum + dimension.client.marginBox[axis.size];
	  }, 0);
	  var requiredSpace = spaceUsed + placeholderSize[axis.line];
	  var needsToGrowBy = requiredSpace - availableSpace;

	  if (needsToGrowBy <= 0) {
	    return null;
	  }

	  return patch(axis.line, needsToGrowBy);
	};

	var withMaxScroll = function withMaxScroll(frame, max) {
	  return _extends({}, frame, {
	    scroll: _extends({}, frame.scroll, {
	      max: max
	    })
	  });
	};

	var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
	  var frame = droppable.frame;
	  !!isHomeOf(draggable, droppable) ?  invariant(false, 'Should not add placeholder space to home list')  : void 0;
	  !!droppable.subject.withPlaceholder ?  invariant(false, 'Cannot add placeholder size to a subject when it already has one')  : void 0;
	  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
	  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
	  var added = {
	    placeholderSize: placeholderSize,
	    increasedBy: requiredGrowth,
	    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
	  };

	  if (!frame) {
	    var _subject = getSubject({
	      page: droppable.subject.page,
	      withPlaceholder: added,
	      axis: droppable.axis,
	      frame: droppable.frame
	    });

	    return _extends({}, droppable, {
	      subject: _subject
	    });
	  }

	  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
	  var newFrame = withMaxScroll(frame, maxScroll);
	  var subject = getSubject({
	    page: droppable.subject.page,
	    withPlaceholder: added,
	    axis: droppable.axis,
	    frame: newFrame
	  });
	  return _extends({}, droppable, {
	    subject: subject,
	    frame: newFrame
	  });
	};
	var removePlaceholder = function removePlaceholder(droppable) {
	  var added = droppable.subject.withPlaceholder;
	  !added ?  invariant(false, 'Cannot remove placeholder form subject when there was none')  : void 0;
	  var frame = droppable.frame;

	  if (!frame) {
	    var _subject2 = getSubject({
	      page: droppable.subject.page,
	      axis: droppable.axis,
	      frame: null,
	      withPlaceholder: null
	    });

	    return _extends({}, droppable, {
	      subject: _subject2
	    });
	  }

	  var oldMaxScroll = added.oldFrameMaxScroll;
	  !oldMaxScroll ?  invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder')  : void 0;
	  var newFrame = withMaxScroll(frame, oldMaxScroll);
	  var subject = getSubject({
	    page: droppable.subject.page,
	    axis: droppable.axis,
	    frame: newFrame,
	    withPlaceholder: null
	  });
	  return _extends({}, droppable, {
	    subject: subject,
	    frame: newFrame
	  });
	};

	var patchDroppableMap = (function (droppables, updated) {
	  var _extends2;

	  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
	});

	var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
	  var previousImpact = _ref.previousImpact,
	      impact = _ref.impact,
	      droppables = _ref.droppables;
	  var last = whatIsDraggedOver(previousImpact);
	  var now = whatIsDraggedOver(impact);

	  if (!last) {
	    return droppables;
	  }

	  if (last === now) {
	    return droppables;
	  }

	  var lastDroppable = droppables[last];

	  if (!lastDroppable.subject.withPlaceholder) {
	    return droppables;
	  }

	  var updated = removePlaceholder(lastDroppable);
	  return patchDroppableMap(droppables, updated);
	};

	var recomputePlaceholders = (function (_ref2) {
	  var draggable = _ref2.draggable,
	      draggables = _ref2.draggables,
	      droppables = _ref2.droppables,
	      previousImpact = _ref2.previousImpact,
	      impact = _ref2.impact;
	  var cleaned = clearUnusedPlaceholder({
	    previousImpact: previousImpact,
	    impact: impact,
	    droppables: droppables
	  });
	  var isOver = whatIsDraggedOver(impact);

	  if (!isOver) {
	    return cleaned;
	  }

	  var droppable = droppables[isOver];

	  if (isHomeOf(draggable, droppable)) {
	    return cleaned;
	  }

	  if (droppable.subject.withPlaceholder) {
	    return cleaned;
	  }

	  var patched = addPlaceholder(droppable, draggable, draggables);
	  return patchDroppableMap(cleaned, patched);
	});

	var forward = {
	  vertical: 'down',
	  horizontal: 'right'
	};
	var backward = {
	  vertical: 'up',
	  horizontal: 'left'
	};

	function tryGetDestination(impact) {
	  if (impact.at && impact.at.type === 'REORDER') {
	    return impact.at.destination;
	  }

	  return null;
	}
	function tryGetCombine(impact) {
	  if (impact.at && impact.at.type === 'COMBINE') {
	    return impact.at.combine;
	  }

	  return null;
	}

	var moveToNextCombine = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var location = tryGetDestination(previousImpact);

	  if (!location) {
	    return null;
	  }

	  function getImpact(target) {
	    var at = {
	      type: 'COMBINE',
	      whenEntered: isMovingForward ? forward : backward,
	      combine: {
	        draggableId: target,
	        droppableId: destination.descriptor.id
	      }
	    };
	    return _extends({}, previousImpact, {
	      at: at
	    });
	  }

	  var all = previousImpact.displaced.all;
	  var closestId = all.length ? all[0] : null;

	  if (isMovingForward) {
	    return closestId ? getImpact(closestId) : null;
	  }

	  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

	  if (!closestId) {
	    if (!withoutDraggable.length) {
	      return null;
	    }

	    var last = withoutDraggable[withoutDraggable.length - 1];
	    return getImpact(last.descriptor.id);
	  }

	  var indexOfClosest = findIndex(withoutDraggable, function (d) {
	    return d.descriptor.id === closestId;
	  });
	  !(indexOfClosest !== -1) ?  invariant(false, 'Could not find displaced item in set')  : void 0;
	  var proposedIndex = indexOfClosest - 1;

	  if (proposedIndex < 0) {
	    return null;
	  }

	  var before = withoutDraggable[proposedIndex];
	  return getImpact(before.descriptor.id);
	});

	var fromCombine = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      combine = _ref.combine,
	      afterCritical = _ref.afterCritical;

	  if (!destination.isCombineEnabled) {
	    return null;
	  }

	  var combineId = combine.draggableId;
	  var combineWith = draggables[combineId];
	  var combineWithIndex = combineWith.descriptor.index;
	  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

	  if (didCombineWithStartAfterCritical) {
	    if (isMovingForward) {
	      return combineWithIndex;
	    }

	    return combineWithIndex - 1;
	  }

	  if (isMovingForward) {
	    return combineWithIndex + 1;
	  }

	  return combineWithIndex;
	});

	var fromReorder = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      isInHomeList = _ref.isInHomeList,
	      insideDestination = _ref.insideDestination,
	      location = _ref.location;

	  if (!insideDestination.length) {
	    return null;
	  }

	  var currentIndex = location.index;
	  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
	  var firstIndex = insideDestination[0].descriptor.index;
	  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
	  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

	  if (proposedIndex < firstIndex) {
	    return null;
	  }

	  if (proposedIndex > upperBound) {
	    return null;
	  }

	  return proposedIndex;
	});

	var moveToNextIndex = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      isInHomeList = _ref.isInHomeList,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var wasAt = previousImpact.at;
	  !wasAt ?  invariant(false, 'Cannot move in direction without previous impact location')  : void 0;

	  if (wasAt.type === 'REORDER') {
	    var _newIndex = fromReorder({
	      isMovingForward: isMovingForward,
	      isInHomeList: isInHomeList,
	      location: wasAt.destination,
	      insideDestination: insideDestination
	    });

	    if (_newIndex == null) {
	      return null;
	    }

	    return calculateReorderImpact({
	      draggable: draggable,
	      insideDestination: insideDestination,
	      destination: destination,
	      viewport: viewport,
	      last: previousImpact.displaced,
	      displacedBy: previousImpact.displacedBy,
	      index: _newIndex
	    });
	  }

	  var newIndex = fromCombine({
	    isMovingForward: isMovingForward,
	    destination: destination,
	    displaced: previousImpact.displaced,
	    draggables: draggables,
	    combine: wasAt.combine,
	    afterCritical: afterCritical
	  });

	  if (newIndex == null) {
	    return null;
	  }

	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    last: previousImpact.displaced,
	    displacedBy: previousImpact.displacedBy,
	    index: newIndex
	  });
	});

	var whenCombining = (function (_ref) {
	  var afterCritical = _ref.afterCritical,
	      impact = _ref.impact,
	      draggables = _ref.draggables;
	  var combine = tryGetCombine(impact);
	  !combine ?  invariant(false)  : void 0;
	  var combineWith = combine.draggableId;
	  var center = draggables[combineWith].page.borderBox.center;
	  var displaceBy = getCombinedItemDisplacement({
	    displaced: impact.displaced,
	    afterCritical: afterCritical,
	    combineWith: combineWith,
	    displacedBy: impact.displacedBy
	  });
	  return add(center, displaceBy);
	});

	var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
	  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
	};

	var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
	  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
	};

	var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
	  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
	};

	var goAfter = function goAfter(_ref) {
	  var axis = _ref.axis,
	      moveRelativeTo = _ref.moveRelativeTo,
	      isMoving = _ref.isMoving;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	var goBefore = function goBefore(_ref2) {
	  var axis = _ref2.axis,
	      moveRelativeTo = _ref2.moveRelativeTo,
	      isMoving = _ref2.isMoving;
	  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
	};
	var goIntoStart = function goIntoStart(_ref3) {
	  var axis = _ref3.axis,
	      moveInto = _ref3.moveInto,
	      isMoving = _ref3.isMoving;
	  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
	};

	var whenReordering = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      droppable = _ref.droppable,
	      afterCritical = _ref.afterCritical;
	  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
	  var draggablePage = draggable.page;
	  var axis = droppable.axis;

	  if (!insideDestination.length) {
	    return goIntoStart({
	      axis: axis,
	      moveInto: droppable.page,
	      isMoving: draggablePage
	    });
	  }

	  var displaced = impact.displaced,
	      displacedBy = impact.displacedBy;
	  var closestAfter = displaced.all[0];

	  if (closestAfter) {
	    var closest = draggables[closestAfter];

	    if (didStartAfterCritical(closestAfter, afterCritical)) {
	      return goBefore({
	        axis: axis,
	        moveRelativeTo: closest.page,
	        isMoving: draggablePage
	      });
	    }

	    var withDisplacement = offset(closest.page, displacedBy.point);
	    return goBefore({
	      axis: axis,
	      moveRelativeTo: withDisplacement,
	      isMoving: draggablePage
	    });
	  }

	  var last = insideDestination[insideDestination.length - 1];

	  if (last.descriptor.id === draggable.descriptor.id) {
	    return draggablePage.borderBox.center;
	  }

	  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
	    var page = offset(last.page, negate(afterCritical.displacedBy.point));
	    return goAfter({
	      axis: axis,
	      moveRelativeTo: page,
	      isMoving: draggablePage
	    });
	  }

	  return goAfter({
	    axis: axis,
	    moveRelativeTo: last.page,
	    isMoving: draggablePage
	  });
	});

	var withDroppableDisplacement = (function (droppable, point) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return point;
	  }

	  return add(point, frame.scroll.diff.displacement);
	});

	var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      afterCritical = _ref.afterCritical;
	  var original = draggable.page.borderBox.center;
	  var at = impact.at;

	  if (!droppable) {
	    return original;
	  }

	  if (!at) {
	    return original;
	  }

	  if (at.type === 'REORDER') {
	    return whenReordering({
	      impact: impact,
	      draggable: draggable,
	      draggables: draggables,
	      droppable: droppable,
	      afterCritical: afterCritical
	    });
	  }

	  return whenCombining({
	    impact: impact,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	};

	var getPageBorderBoxCenterFromImpact = (function (args) {
	  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
	  var droppable = args.droppable;
	  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
	  return withDisplacement;
	});

	var scrollViewport = (function (viewport, newScroll) {
	  var diff = subtract(newScroll, viewport.scroll.initial);
	  var displacement = negate(diff);
	  var _viewport$frame = viewport.frame,
	      top = _viewport$frame.top,
	      left = _viewport$frame.left,
	      bottom = _viewport$frame.bottom,
	      right = _viewport$frame.right;
	  var _viewport$scroll$curr = viewport.scroll.current,
	      currentX = _viewport$scroll$curr.x,
	      currentY = _viewport$scroll$curr.y;
	  var newX = newScroll.x,
	      newY = newScroll.y;
	  var newTop = top - currentY + newY;
	  var newLeft = left - currentX + newX;
	  var frame = getRect({
	    top: newTop,
	    bottom: newTop + viewport.frame.height,
	    left: newLeft,
	    right: newLeft + viewport.frame.width
	  });
	  var updated = {
	    frame: frame,
	    scroll: {
	      initial: viewport.scroll.initial,
	      max: viewport.scroll.max,
	      current: newScroll,
	      diff: {
	        value: diff,
	        displacement: displacement
	      }
	    }
	  };
	  return updated;
	});

	function getDraggables(ids, draggables) {
	  return ids.map(function (id) {
	    return draggables[id];
	  });
	}

	function tryGetVisible(id, groups) {
	  for (var i = 0; i < groups.length; i++) {
	    var displacement = groups[i].visible[id];

	    if (displacement) {
	      return displacement;
	    }
	  }

	  return null;
	}

	var speculativelyIncrease = (function (_ref) {
	  var impact = _ref.impact,
	      viewport = _ref.viewport,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      maxScrollChange = _ref.maxScrollChange;
	  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
	  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
	  var last = impact.displaced;
	  var withViewportScroll = getDisplacementGroups({
	    afterDragging: getDraggables(last.all, draggables),
	    destination: destination,
	    displacedBy: impact.displacedBy,
	    viewport: scrolledViewport.frame,
	    last: last,
	    forceShouldAnimate: false
	  });
	  var withDroppableScroll = getDisplacementGroups({
	    afterDragging: getDraggables(last.all, draggables),
	    destination: scrolledDroppable,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    last: last,
	    forceShouldAnimate: false
	  });
	  var invisible = {};
	  var visible = {};
	  var groups = [last, withViewportScroll, withDroppableScroll];
	  last.all.forEach(function (id) {
	    var displacement = tryGetVisible(id, groups);

	    if (displacement) {
	      visible[id] = displacement;
	      return;
	    }

	    invisible[id] = true;
	  });

	  var newImpact = _extends({}, impact, {
	    displaced: {
	      all: last.all,
	      invisible: invisible,
	      visible: visible
	    }
	  });

	  return newImpact;
	});

	var withViewportDisplacement = (function (viewport, point) {
	  return add(viewport.scroll.diff.displacement, point);
	});

	var getClientFromPageBorderBoxCenter = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      draggable = _ref.draggable,
	      viewport = _ref.viewport;
	  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
	  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
	  return add(draggable.client.borderBox.center, offset);
	});

	var isTotallyVisibleInNewLocation = (function (_ref) {
	  var draggable = _ref.draggable,
	      destination = _ref.destination,
	      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
	      viewport = _ref.viewport,
	      withDroppableDisplacement = _ref.withDroppableDisplacement,
	      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
	      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
	  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
	  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
	  var args = {
	    target: shifted,
	    destination: destination,
	    withDroppableDisplacement: withDroppableDisplacement,
	    viewport: viewport
	  };
	  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
	});

	var moveToNextPlace = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      draggable = _ref.draggable,
	      destination = _ref.destination,
	      draggables = _ref.draggables,
	      previousImpact = _ref.previousImpact,
	      viewport = _ref.viewport,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      previousClientSelection = _ref.previousClientSelection,
	      afterCritical = _ref.afterCritical;

	  if (!destination.isEnabled) {
	    return null;
	  }

	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var isInHomeList = isHomeOf(draggable, destination);
	  var impact = moveToNextCombine({
	    isMovingForward: isMovingForward,
	    draggable: draggable,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact
	  }) || moveToNextIndex({
	    isMovingForward: isMovingForward,
	    isInHomeList: isInHomeList,
	    draggable: draggable,
	    draggables: draggables,
	    destination: destination,
	    insideDestination: insideDestination,
	    previousImpact: previousImpact,
	    viewport: viewport,
	    afterCritical: afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	    draggable: draggable,
	    destination: destination,
	    newPageBorderBoxCenter: pageBorderBoxCenter,
	    viewport: viewport.frame,
	    withDroppableDisplacement: false,
	    onlyOnMainAxis: true
	  });

	  if (isVisibleInNewLocation) {
	    var clientSelection = getClientFromPageBorderBoxCenter({
	      pageBorderBoxCenter: pageBorderBoxCenter,
	      draggable: draggable,
	      viewport: viewport
	    });
	    return {
	      clientSelection: clientSelection,
	      impact: impact,
	      scrollJumpRequest: null
	    };
	  }

	  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
	  var cautious = speculativelyIncrease({
	    impact: impact,
	    viewport: viewport,
	    destination: destination,
	    draggables: draggables,
	    maxScrollChange: distance
	  });
	  return {
	    clientSelection: previousClientSelection,
	    impact: cautious,
	    scrollJumpRequest: distance
	  };
	});

	var getKnownActive = function getKnownActive(droppable) {
	  var rect = droppable.subject.active;
	  !rect ?  invariant(false, 'Cannot get clipped area from droppable')  : void 0;
	  return rect;
	};

	var getBestCrossAxisDroppable = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      source = _ref.source,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport;
	  var active = source.subject.active;

	  if (!active) {
	    return null;
	  }

	  var axis = source.axis;
	  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
	  var candidates = toDroppableList(droppables).filter(function (droppable) {
	    return droppable !== source;
	  }).filter(function (droppable) {
	    return droppable.isEnabled;
	  }).filter(function (droppable) {
	    return Boolean(droppable.subject.active);
	  }).filter(function (droppable) {
	    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
	  }).filter(function (droppable) {
	    var activeOfTarget = getKnownActive(droppable);

	    if (isMovingForward) {
	      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
	    }

	    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
	  }).filter(function (droppable) {
	    var activeOfTarget = getKnownActive(droppable);
	    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
	    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
	  }).sort(function (a, b) {
	    var first = getKnownActive(a)[axis.crossAxisStart];
	    var second = getKnownActive(b)[axis.crossAxisStart];

	    if (isMovingForward) {
	      return first - second;
	    }

	    return second - first;
	  }).filter(function (droppable, index, array) {
	    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
	  });

	  if (!candidates.length) {
	    return null;
	  }

	  if (candidates.length === 1) {
	    return candidates[0];
	  }

	  var contains = candidates.filter(function (droppable) {
	    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
	    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
	  });

	  if (contains.length === 1) {
	    return contains[0];
	  }

	  if (contains.length > 1) {
	    return contains.sort(function (a, b) {
	      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	    })[0];
	  }

	  return candidates.sort(function (a, b) {
	    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
	    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

	    if (first !== second) {
	      return first - second;
	    }

	    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
	  })[0];
	});

	var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
	  var original = draggable.page.borderBox.center;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
	};
	var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
	  var original = draggable.page.borderBox;
	  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
	};

	var getClosestDraggable = (function (_ref) {
	  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
	      viewport = _ref.viewport,
	      destination = _ref.destination,
	      insideDestination = _ref.insideDestination,
	      afterCritical = _ref.afterCritical;
	  var sorted = insideDestination.filter(function (draggable) {
	    return isTotallyVisible({
	      target: getCurrentPageBorderBox(draggable, afterCritical),
	      destination: destination,
	      viewport: viewport.frame,
	      withDroppableDisplacement: true
	    });
	  }).sort(function (a, b) {
	    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
	    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

	    if (distanceToA < distanceToB) {
	      return -1;
	    }

	    if (distanceToB < distanceToA) {
	      return 1;
	    }

	    return a.descriptor.index - b.descriptor.index;
	  });
	  return sorted[0] || null;
	});

	var moveToNewDroppable = (function (_ref) {
	  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      moveRelativeTo = _ref.moveRelativeTo,
	      insideDestination = _ref.insideDestination,
	      draggable = _ref.draggable,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;

	  if (!moveRelativeTo) {
	    if (insideDestination.length) {
	      return null;
	    }

	    var proposed = {
	      displaced: emptyGroups,
	      displacedBy: noDisplacedBy,
	      at: {
	        type: 'REORDER',
	        destination: {
	          droppableId: destination.descriptor.id,
	          index: 0
	        }
	      }
	    };
	    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	      impact: proposed,
	      draggable: draggable,
	      droppable: destination,
	      draggables: draggables,
	      afterCritical: afterCritical
	    });
	    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
	    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
	      draggable: draggable,
	      destination: withPlaceholder,
	      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
	      viewport: viewport.frame,
	      withDroppableDisplacement: false,
	      onlyOnMainAxis: true
	    });
	    return isVisibleInNewLocation ? proposed : null;
	  }

	  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

	  var proposedIndex = function () {
	    var relativeTo = moveRelativeTo.descriptor.index;

	    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
	      return relativeTo;
	    }

	    if (isGoingBeforeTarget) {
	      return relativeTo;
	    }

	    return relativeTo + 1;
	  }();

	  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
	  return calculateReorderImpact({
	    draggable: draggable,
	    insideDestination: insideDestination,
	    destination: destination,
	    viewport: viewport,
	    displacedBy: displacedBy,
	    last: emptyGroups,
	    index: proposedIndex
	  });
	});

	var moveCrossAxis = (function (_ref) {
	  var isMovingForward = _ref.isMovingForward,
	      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
	      draggable = _ref.draggable,
	      isOver = _ref.isOver,
	      draggables = _ref.draggables,
	      droppables = _ref.droppables,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var destination = getBestCrossAxisDroppable({
	    isMovingForward: isMovingForward,
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    source: isOver,
	    droppables: droppables,
	    viewport: viewport
	  });

	  if (!destination) {
	    return null;
	  }

	  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
	  var moveRelativeTo = getClosestDraggable({
	    pageBorderBoxCenter: previousPageBorderBoxCenter,
	    viewport: viewport,
	    destination: destination,
	    insideDestination: insideDestination,
	    afterCritical: afterCritical
	  });
	  var impact = moveToNewDroppable({
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    destination: destination,
	    draggable: draggable,
	    draggables: draggables,
	    moveRelativeTo: moveRelativeTo,
	    insideDestination: insideDestination,
	    viewport: viewport,
	    afterCritical: afterCritical
	  });

	  if (!impact) {
	    return null;
	  }

	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    afterCritical: afterCritical
	  });
	  var clientSelection = getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    viewport: viewport
	  });
	  return {
	    clientSelection: clientSelection,
	    impact: impact,
	    scrollJumpRequest: null
	  };
	});

	var getDroppableOver$1 = function getDroppableOver(impact, droppables) {
	  var id = whatIsDraggedOver(impact);
	  return id ? droppables[id] : null;
	};

	var moveInDirection = (function (_ref) {
	  var state = _ref.state,
	      type = _ref.type;
	  var isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
	  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
	  var home = state.dimensions.droppables[state.critical.droppable.id];
	  var isOver = isActuallyOver || home;
	  var direction = isOver.axis.direction;
	  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

	  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
	    return null;
	  }

	  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
	  var draggable = state.dimensions.draggables[state.critical.draggable.id];
	  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
	  var _state$dimensions = state.dimensions,
	      draggables = _state$dimensions.draggables,
	      droppables = _state$dimensions.droppables;
	  return isMovingOnMainAxis ? moveToNextPlace({
	    isMovingForward: isMovingForward,
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    draggable: draggable,
	    destination: isOver,
	    draggables: draggables,
	    viewport: state.viewport,
	    previousClientSelection: state.current.client.selection,
	    previousImpact: state.impact,
	    afterCritical: state.afterCritical
	  }) : moveCrossAxis({
	    isMovingForward: isMovingForward,
	    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
	    draggable: draggable,
	    isOver: isOver,
	    draggables: draggables,
	    droppables: droppables,
	    viewport: state.viewport,
	    afterCritical: state.afterCritical
	  });
	});

	function isMovementAllowed(state) {
	  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
	}

	var getVertical = function getVertical(previous, diff) {
	  if (diff === 0) {
	    return previous;
	  }

	  return diff > 0 ? 'down' : 'up';
	};

	var getHorizontal = function getHorizontal(previous, diff) {
	  if (diff === 0) {
	    return previous;
	  }

	  return diff > 0 ? 'right' : 'left';
	};

	var getUserDirection = (function (previous, oldPageBorderBoxCenter, newPageBorderBoxCenter) {
	  var diff = subtract(newPageBorderBoxCenter, oldPageBorderBoxCenter);
	  return {
	    horizontal: getHorizontal(previous.horizontal, diff.x),
	    vertical: getVertical(previous.vertical, diff.y)
	  };
	});

	var update = (function (_ref) {
	  var state = _ref.state,
	      forcedClientSelection = _ref.clientSelection,
	      forcedDimensions = _ref.dimensions,
	      forcedViewport = _ref.viewport,
	      forcedImpact = _ref.impact,
	      scrollJumpRequest = _ref.scrollJumpRequest;
	  var viewport = forcedViewport || state.viewport;
	  var currentWindowScroll = viewport.scroll.current;
	  var dimensions = forcedDimensions || state.dimensions;
	  var clientSelection = forcedClientSelection || state.current.client.selection;
	  var offset = subtract(clientSelection, state.initial.client.selection);
	  var client = {
	    offset: offset,
	    selection: clientSelection,
	    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
	  };
	  var page = {
	    selection: add(client.selection, currentWindowScroll),
	    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
	  };
	  var current = {
	    client: client,
	    page: page
	  };
	  var userDirection = getUserDirection(state.userDirection, state.current.page.borderBoxCenter, current.page.borderBoxCenter);

	  if (state.phase === 'COLLECTING') {
	    return _extends({
	      phase: 'COLLECTING'
	    }, state, {
	      dimensions: dimensions,
	      viewport: viewport,
	      current: current,
	      userDirection: userDirection
	    });
	  }

	  var draggable = dimensions.draggables[state.critical.draggable.id];
	  var newImpact = forcedImpact || getDragImpact({
	    pageBorderBoxCenter: page.borderBoxCenter,
	    draggable: draggable,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact: state.impact,
	    viewport: viewport,
	    userDirection: userDirection,
	    afterCritical: state.afterCritical
	  });
	  var withUpdatedPlaceholders = recomputePlaceholders({
	    draggable: draggable,
	    impact: newImpact,
	    previousImpact: state.impact,
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables
	  });

	  var result = _extends({}, state, {
	    current: current,
	    userDirection: userDirection,
	    dimensions: {
	      draggables: dimensions.draggables,
	      droppables: withUpdatedPlaceholders
	    },
	    impact: newImpact,
	    viewport: viewport,
	    scrollJumpRequest: scrollJumpRequest || null,
	    forceShouldAnimate: scrollJumpRequest ? false : null
	  });

	  return result;
	});

	function getDraggables$1(ids, draggables) {
	  return ids.map(function (id) {
	    return draggables[id];
	  });
	}

	var recompute = (function (_ref) {
	  var impact = _ref.impact,
	      viewport = _ref.viewport,
	      draggables = _ref.draggables,
	      destination = _ref.destination,
	      forceShouldAnimate = _ref.forceShouldAnimate;
	  var last = impact.displaced;
	  var afterDragging = getDraggables$1(last.all, draggables);
	  var displaced = getDisplacementGroups({
	    afterDragging: afterDragging,
	    destination: destination,
	    displacedBy: impact.displacedBy,
	    viewport: viewport.frame,
	    forceShouldAnimate: forceShouldAnimate,
	    last: last
	  });
	  return _extends({}, impact, {
	    displaced: displaced
	  });
	});

	var getClientBorderBoxCenter = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      droppable = _ref.droppable,
	      draggables = _ref.draggables,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
	    impact: impact,
	    draggable: draggable,
	    draggables: draggables,
	    droppable: droppable,
	    afterCritical: afterCritical
	  });
	  return getClientFromPageBorderBoxCenter({
	    pageBorderBoxCenter: pageBorderBoxCenter,
	    draggable: draggable,
	    viewport: viewport
	  });
	});

	var refreshSnap = (function (_ref) {
	  var state = _ref.state,
	      forcedDimensions = _ref.dimensions,
	      forcedViewport = _ref.viewport;
	  !(state.movementMode === 'SNAP') ?  invariant(false)  : void 0;
	  var needsVisibilityCheck = state.impact;
	  var viewport = forcedViewport || state.viewport;
	  var dimensions = forcedDimensions || state.dimensions;
	  var draggables = dimensions.draggables,
	      droppables = dimensions.droppables;
	  var draggable = draggables[state.critical.draggable.id];
	  var isOver = whatIsDraggedOver(needsVisibilityCheck);
	  !isOver ?  invariant(false, 'Must be over a destination in SNAP movement mode')  : void 0;
	  var destination = droppables[isOver];
	  var impact = recompute({
	    impact: needsVisibilityCheck,
	    viewport: viewport,
	    destination: destination,
	    draggables: draggables
	  });
	  var clientSelection = getClientBorderBoxCenter({
	    impact: impact,
	    draggable: draggable,
	    droppable: destination,
	    draggables: draggables,
	    viewport: viewport,
	    afterCritical: state.afterCritical
	  });
	  return update({
	    impact: impact,
	    clientSelection: clientSelection,
	    state: state,
	    dimensions: dimensions,
	    viewport: viewport
	  });
	});

	var patchDimensionMap = (function (dimensions, updated) {
	  return {
	    draggables: dimensions.draggables,
	    droppables: patchDroppableMap(dimensions.droppables, updated)
	  };
	});

	var timingsKey = 'Processing dynamic changes';
	var publishWhileDraggingInVirtual = (function (_ref) {
	  var _extends2, _extends3;

	  var state = _ref.state,
	      published = _ref.published;
	  start(timingsKey);
	  var withScrollChange = published.modified.map(function (droppable) {
	    var existing = state.dimensions.droppables[droppable.descriptor.id];
	    var frame = existing.frame;

	    if (!frame) {
	      return droppable;
	    }

	    var scrolled = scrollDroppable(existing, frame.scroll.current);
	    return scrolled;
	  });

	  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

	  var updated = adjustAdditionsForScrollChanges({
	    additions: published.additions,
	    updatedDroppables: droppables,
	    viewport: state.viewport
	  });

	  var draggables = _extends({}, state.dimensions.draggables, {}, toDraggableMap(updated));

	  published.removals.forEach(function (id) {
	    delete draggables[id];
	  });
	  var dimensions = {
	    droppables: droppables,
	    draggables: draggables
	  };
	  var draggable = dimensions.draggables[state.critical.draggable.id];
	  var home = dimensions.droppables[state.critical.droppable.id];

	  var _getLiftEffect = getLiftEffect({
	    draggable: draggable,
	    home: home,
	    draggables: draggables,
	    viewport: state.viewport
	  }),
	      onLiftImpact = _getLiftEffect.impact,
	      afterCritical = _getLiftEffect.afterCritical;

	  var impact = getDragImpact({
	    pageBorderBoxCenter: state.current.page.borderBoxCenter,
	    draggable: dimensions.draggables[state.critical.draggable.id],
	    draggables: dimensions.draggables,
	    droppables: dimensions.droppables,
	    previousImpact: state.impact,
	    viewport: state.viewport,
	    userDirection: state.userDirection,
	    afterCritical: afterCritical
	  });
	  finish(timingsKey);

	  var draggingState = _extends({
	    phase: 'DRAGGING'
	  }, state, (_extends2 = {}, _extends2["phase"] = 'DRAGGING', _extends2.impact = impact, _extends2.onLiftImpact = onLiftImpact, _extends2.dimensions = dimensions, _extends2.afterCritical = afterCritical, _extends2.forceShouldAnimate = false, _extends2));

	  if (state.phase === 'COLLECTING') {
	    return draggingState;
	  }

	  var dropPending = _extends({
	    phase: 'DROP_PENDING'
	  }, draggingState, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.reason = state.reason, _extends3.isWaiting = false, _extends3));

	  return dropPending;
	});

	var isSnapping = function isSnapping(state) {
	  return state.movementMode === 'SNAP';
	};

	var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
	  var dimensions = patchDimensionMap(state.dimensions, updated);

	  if (!isSnapping(state) || isEnabledChanging) {
	    return update({
	      state: state,
	      dimensions: dimensions
	    });
	  }

	  return refreshSnap({
	    state: state,
	    dimensions: dimensions
	  });
	};

	var idle = {
	  phase: 'IDLE',
	  completed: null,
	  shouldFlush: false
	};
	var reducer = (function (state, action) {
	  if (state === void 0) {
	    state = idle;
	  }

	  if (action.type === 'CLEAN') {
	    return _extends({}, idle, {
	      shouldFlush: action.payload.shouldFlush
	    });
	  }

	  if (action.type === 'INITIAL_PUBLISH') {
	    !(state.phase === 'IDLE') ?  invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase')  : void 0;
	    var _action$payload = action.payload,
	        critical = _action$payload.critical,
	        clientSelection = _action$payload.clientSelection,
	        viewport = _action$payload.viewport,
	        dimensions = _action$payload.dimensions,
	        movementMode = _action$payload.movementMode;
	    var draggable = dimensions.draggables[critical.draggable.id];
	    var home = dimensions.droppables[critical.droppable.id];
	    var client = {
	      selection: clientSelection,
	      borderBoxCenter: draggable.client.borderBox.center,
	      offset: origin
	    };
	    var initial = {
	      client: client,
	      page: {
	        selection: add(client.selection, viewport.scroll.initial),
	        borderBoxCenter: add(client.selection, viewport.scroll.initial)
	      }
	    };
	    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
	      return !item.isFixedOnPage;
	    }) || true;

	    var _getLiftEffect = getLiftEffect({
	      draggable: draggable,
	      home: home,
	      draggables: dimensions.draggables,
	      viewport: viewport
	    }),
	        impact = _getLiftEffect.impact,
	        afterCritical = _getLiftEffect.afterCritical;

	    var result = {
	      phase: 'DRAGGING',
	      isDragging: true,
	      critical: critical,
	      movementMode: movementMode,
	      dimensions: dimensions,
	      initial: initial,
	      current: initial,
	      isWindowScrollAllowed: isWindowScrollAllowed,
	      impact: impact,
	      afterCritical: afterCritical,
	      onLiftImpact: impact,
	      viewport: viewport,
	      userDirection: forward,
	      scrollJumpRequest: null,
	      forceShouldAnimate: null
	    };
	    return result;
	  }

	  if (action.type === 'COLLECTION_STARTING') {
	    var _extends2;

	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ?  invariant(false, "Collection cannot start from phase " + state.phase)  : void 0;

	    var _result = _extends({
	      phase: 'COLLECTING'
	    }, state, (_extends2 = {}, _extends2["phase"] = 'COLLECTING', _extends2));

	    return _result;
	  }

	  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
	    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  invariant(false, "Unexpected " + action.type + " received in phase " + state.phase)  : void 0;
	    return publishWhileDraggingInVirtual({
	      state: state,
	      published: action.payload
	    });
	  }

	  if (action.type === 'MOVE') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ?  invariant(false, action.type + " not permitted in phase " + state.phase)  : void 0;
	    var _clientSelection = action.payload.client;

	    if (isEqual(_clientSelection, state.current.client.selection)) {
	      return state;
	    }

	    return update({
	      state: state,
	      clientSelection: _clientSelection,
	      impact: isSnapping(state) ? state.impact : null
	    });
	  }

	  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    if (state.phase === 'COLLECTING') {
	      return state;
	    }

	    !isMovementAllowed(state) ?  invariant(false, action.type + " not permitted in phase " + state.phase)  : void 0;
	    var _action$payload2 = action.payload,
	        id = _action$payload2.id,
	        offset = _action$payload2.offset;
	    var target = state.dimensions.droppables[id];

	    if (!target) {
	      return state;
	    }

	    var scrolled = scrollDroppable(target, offset);
	    return postDroppableChange(state, scrolled, false);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ?  invariant(false, "Attempting to move in an unsupported phase " + state.phase)  : void 0;
	    var _action$payload3 = action.payload,
	        _id = _action$payload3.id,
	        isEnabled = _action$payload3.isEnabled;
	    var _target = state.dimensions.droppables[_id];
	    !_target ?  invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state")  : void 0;
	    !(_target.isEnabled !== isEnabled) ?  invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled))  : void 0;

	    var updated = _extends({}, _target, {
	      isEnabled: isEnabled
	    });

	    return postDroppableChange(state, updated, true);
	  }

	  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
	    if (state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !isMovementAllowed(state) ?  invariant(false, "Attempting to move in an unsupported phase " + state.phase)  : void 0;
	    var _action$payload4 = action.payload,
	        _id2 = _action$payload4.id,
	        isCombineEnabled = _action$payload4.isCombineEnabled;
	    var _target2 = state.dimensions.droppables[_id2];
	    !_target2 ?  invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state")  : void 0;
	    !(_target2.isCombineEnabled !== isCombineEnabled) ?  invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled))  : void 0;

	    var _updated = _extends({}, _target2, {
	      isCombineEnabled: isCombineEnabled
	    });

	    return postDroppableChange(state, _updated, true);
	  }

	  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
	    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
	      return state;
	    }

	    !isMovementAllowed(state) ?  invariant(false, "Cannot move by window in phase " + state.phase)  : void 0;
	    !state.isWindowScrollAllowed ?  invariant(false, 'Window scrolling is currently not supported for fixed lists. Aborting drag')  : void 0;
	    var newScroll = action.payload.newScroll;

	    if (isEqual(state.viewport.scroll.current, newScroll)) {
	      return state;
	    }

	    var _viewport = scrollViewport(state.viewport, newScroll);

	    if (isSnapping(state)) {
	      return refreshSnap({
	        state: state,
	        viewport: _viewport
	      });
	    }

	    return update({
	      state: state,
	      viewport: _viewport
	    });
	  }

	  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
	    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
	      return state;
	    }

	    !(state.phase === 'DRAGGING') ?  invariant(false, action.type + " received while not in DRAGGING phase")  : void 0;

	    var _result2 = moveInDirection({
	      state: state,
	      type: action.type
	    });

	    if (!_result2) {
	      return state;
	    }

	    return update({
	      state: state,
	      impact: _result2.impact,
	      clientSelection: _result2.clientSelection,
	      scrollJumpRequest: _result2.scrollJumpRequest
	    });
	  }

	  if (action.type === 'DROP_PENDING') {
	    var _extends3;

	    var reason = action.payload.reason;
	    !(state.phase === 'COLLECTING') ?  invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase')  : void 0;

	    var newState = _extends({
	      phase: 'DROP_PENDING'
	    }, state, (_extends3 = {}, _extends3["phase"] = 'DROP_PENDING', _extends3.isWaiting = true, _extends3.reason = reason, _extends3));

	    return newState;
	  }

	  if (action.type === 'DROP_ANIMATE') {
	    var _action$payload5 = action.payload,
	        completed = _action$payload5.completed,
	        dropDuration = _action$payload5.dropDuration,
	        newHomeClientOffset = _action$payload5.newHomeClientOffset;
	    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  invariant(false, "Cannot animate drop from phase " + state.phase)  : void 0;
	    var _result3 = {
	      phase: 'DROP_ANIMATING',
	      completed: completed,
	      dropDuration: dropDuration,
	      newHomeClientOffset: newHomeClientOffset,
	      dimensions: state.dimensions
	    };
	    return _result3;
	  }

	  if (action.type === 'DROP_COMPLETE') {
	    var _action$payload6 = action.payload,
	        _completed = _action$payload6.completed,
	        shouldFlush = _action$payload6.shouldFlush;
	    return {
	      phase: 'IDLE',
	      completed: _completed,
	      shouldFlush: shouldFlush
	    };
	  }

	  return state;
	});

	var lift = function lift(args) {
	  return {
	    type: 'LIFT',
	    payload: args
	  };
	};
	var initialPublish = function initialPublish(args) {
	  return {
	    type: 'INITIAL_PUBLISH',
	    payload: args
	  };
	};
	var publishWhileDragging = function publishWhileDragging(args) {
	  return {
	    type: 'PUBLISH_WHILE_DRAGGING',
	    payload: args
	  };
	};
	var collectionStarting = function collectionStarting() {
	  return {
	    type: 'COLLECTION_STARTING',
	    payload: null
	  };
	};
	var updateDroppableScroll = function updateDroppableScroll(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_SCROLL',
	    payload: args
	  };
	};
	var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_IS_ENABLED',
	    payload: args
	  };
	};
	var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
	  return {
	    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
	    payload: args
	  };
	};
	var move = function move(args) {
	  return {
	    type: 'MOVE',
	    payload: args
	  };
	};
	var moveByWindowScroll = function moveByWindowScroll(args) {
	  return {
	    type: 'MOVE_BY_WINDOW_SCROLL',
	    payload: args
	  };
	};
	var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
	  return {
	    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
	    payload: args
	  };
	};
	var moveUp = function moveUp() {
	  return {
	    type: 'MOVE_UP',
	    payload: null
	  };
	};
	var moveDown = function moveDown() {
	  return {
	    type: 'MOVE_DOWN',
	    payload: null
	  };
	};
	var moveRight = function moveRight() {
	  return {
	    type: 'MOVE_RIGHT',
	    payload: null
	  };
	};
	var moveLeft = function moveLeft() {
	  return {
	    type: 'MOVE_LEFT',
	    payload: null
	  };
	};
	var clean$1 = function clean(args) {
	  if (args === void 0) {
	    args = {
	      shouldFlush: false
	    };
	  }

	  return {
	    type: 'CLEAN',
	    payload: args
	  };
	};
	var animateDrop = function animateDrop(args) {
	  return {
	    type: 'DROP_ANIMATE',
	    payload: args
	  };
	};
	var completeDrop = function completeDrop(args) {
	  return {
	    type: 'DROP_COMPLETE',
	    payload: args
	  };
	};
	var drop = function drop(args) {
	  return {
	    type: 'DROP',
	    payload: args
	  };
	};
	var dropPending = function dropPending(args) {
	  return {
	    type: 'DROP_PENDING',
	    payload: args
	  };
	};
	var dropAnimationFinished = function dropAnimationFinished() {
	  return {
	    type: 'DROP_ANIMATION_FINISHED',
	    payload: null
	  };
	};

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	var keys$1 = _core.Object.keys;

	var keys$2 = keys$1;

	function checkIndexesAreConsecutive(droppableId, draggables) {
	  var insideDestination = getDraggablesInsideDroppable(droppableId, draggables);

	  if (insideDestination.length <= 1) {
	    return;
	  }

	  var indexes = insideDestination.map(function (d) {
	    return d.descriptor.index;
	  });
	  var errors = {};

	  for (var i = 1; i < indexes.length; i++) {
	    var current = indexes[i];
	    var previous = indexes[i - 1];

	    if (current !== previous + 1) {
	      errors[current] = true;
	    }
	  }

	  if (!keys$2(errors).length) {
	    return;
	  }

	  var formatted = indexes.map(function (index) {
	    var hasError = Boolean(errors[index]);
	    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
	  }).join(', ');
	   warning("\n    Detected non-consecutive Draggable indexes\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") ;
	}

	function validateDimensions(critical, dimensions) {
	  {
	    checkIndexesAreConsecutive(critical.droppable.id, dimensions.draggables);
	  }
	}

	var lift$1 = (function (marshal) {
	  return function (_ref) {
	    var getState = _ref.getState,
	        dispatch = _ref.dispatch;
	    return function (next) {
	      return function (action) {
	        if (action.type !== 'LIFT') {
	          next(action);
	          return;
	        }

	        var _action$payload = action.payload,
	            id = _action$payload.id,
	            clientSelection = _action$payload.clientSelection,
	            movementMode = _action$payload.movementMode;
	        var initial = getState();

	        if (initial.phase === 'DROP_ANIMATING') {
	          dispatch(completeDrop({
	            completed: initial.completed,
	            shouldFlush: true
	          }));
	        }

	        !(getState().phase === 'IDLE') ?  invariant(false, 'Incorrect phase to start a drag')  : void 0;
	        var scrollOptions = {
	          shouldPublishImmediately: movementMode === 'SNAP'
	        };
	        var request = {
	          draggableId: id,
	          scrollOptions: scrollOptions
	        };

	        var _marshal$startPublish = marshal.startPublishing(request),
	            critical = _marshal$startPublish.critical,
	            dimensions = _marshal$startPublish.dimensions,
	            viewport = _marshal$startPublish.viewport;

	        validateDimensions(critical, dimensions);
	        dispatch(initialPublish({
	          critical: critical,
	          dimensions: dimensions,
	          clientSelection: clientSelection,
	          movementMode: movementMode,
	          viewport: viewport
	        }));
	      };
	    };
	  };
	});

	var style = (function (marshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          marshal.dragging();
	        }

	        if (action.type === 'DROP_ANIMATE') {
	          marshal.dropping(action.payload.completed.result.reason);
	        }

	        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
	          marshal.resting();
	        }

	        next(action);
	      };
	    };
	  };
	});

	var curves = {
	  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
	  drop: 'cubic-bezier(.2,1,.1,1)'
	};
	var combine = {
	  opacity: {
	    drop: 0,
	    combining: 0.7
	  },
	  scale: {
	    drop: 0.75
	  }
	};
	var timings = {
	  outOfTheWay: 0.2,
	  minDropTime: 0.33,
	  maxDropTime: 0.55
	};
	var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
	var transitions = {
	  fluid: "opacity " + outOfTheWayTiming,
	  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
	  drop: function drop(duration) {
	    var timing = duration + "s " + curves.drop;
	    return "transform " + timing + ", opacity " + timing;
	  },
	  outOfTheWay: "transform " + outOfTheWayTiming,
	  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
	};

	var moveTo = function moveTo(offset) {
	  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
	};

	var transforms = {
	  moveTo: moveTo,
	  drop: function drop(offset, isCombining) {
	    var translate = moveTo(offset);

	    if (!translate) {
	      return null;
	    }

	    if (!isCombining) {
	      return translate;
	    }

	    return translate + " scale(" + combine.scale.drop + ")";
	  }
	};

	var minDropTime = timings.minDropTime,
	    maxDropTime = timings.maxDropTime;
	var dropTimeRange = maxDropTime - minDropTime;
	var maxDropTimeAtDistance = 1500;
	var cancelDropModifier = 0.6;
	var getDropDuration = (function (_ref) {
	  var current = _ref.current,
	      destination = _ref.destination,
	      reason = _ref.reason;
	  var distance$1 = distance(current, destination);

	  if (distance$1 <= 0) {
	    return minDropTime;
	  }

	  if (distance$1 >= maxDropTimeAtDistance) {
	    return maxDropTime;
	  }

	  var percentage = distance$1 / maxDropTimeAtDistance;
	  var duration = minDropTime + dropTimeRange * percentage;
	  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
	  return Number(withDuration.toFixed(2));
	});

	var getNewHomeClientOffset = (function (_ref) {
	  var impact = _ref.impact,
	      draggable = _ref.draggable,
	      dimensions = _ref.dimensions,
	      viewport = _ref.viewport,
	      afterCritical = _ref.afterCritical;
	  var draggables = dimensions.draggables,
	      droppables = dimensions.droppables;
	  var droppableId = whatIsDraggedOver(impact);
	  var destination = droppableId ? droppables[droppableId] : null;
	  var home = droppables[draggable.descriptor.droppableId];
	  var newClientCenter = getClientBorderBoxCenter({
	    impact: impact,
	    draggable: draggable,
	    draggables: draggables,
	    afterCritical: afterCritical,
	    droppable: destination || home,
	    viewport: viewport
	  });
	  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
	  return offset;
	});

	var getDropImpact = (function (_ref) {
	  var draggables = _ref.draggables,
	      reason = _ref.reason,
	      lastImpact = _ref.lastImpact,
	      home = _ref.home,
	      viewport = _ref.viewport,
	      onLiftImpact = _ref.onLiftImpact;

	  if (!lastImpact.at || reason !== 'DROP') {
	    var recomputedHomeImpact = recompute({
	      draggables: draggables,
	      impact: onLiftImpact,
	      destination: home,
	      viewport: viewport,
	      forceShouldAnimate: true
	    });
	    return {
	      impact: recomputedHomeImpact,
	      didDropInsideDroppable: false
	    };
	  }

	  if (lastImpact.at.type === 'REORDER') {
	    return {
	      impact: lastImpact,
	      didDropInsideDroppable: true
	    };
	  }

	  var withoutMovement = _extends({}, lastImpact, {
	    displaced: emptyGroups
	  });

	  return {
	    impact: withoutMovement,
	    didDropInsideDroppable: true
	  };
	});

	var drop$1 = (function (_ref) {
	  var getState = _ref.getState,
	      dispatch = _ref.dispatch;
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP') {
	        next(action);
	        return;
	      }

	      var state = getState();
	      var reason = action.payload.reason;

	      if (state.phase === 'COLLECTING') {
	        dispatch(dropPending({
	          reason: reason
	        }));
	        return;
	      }

	      if (state.phase === 'IDLE') {
	        return;
	      }

	      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
	      !!isWaitingForDrop ?  invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting')  : void 0;
	      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  invariant(false, "Cannot drop in phase: " + state.phase)  : void 0;
	      var critical = state.critical;
	      var dimensions = state.dimensions;
	      var draggable = dimensions.draggables[state.critical.draggable.id];

	      var _getDropImpact = getDropImpact({
	        reason: reason,
	        lastImpact: state.impact,
	        afterCritical: state.afterCritical,
	        onLiftImpact: state.onLiftImpact,
	        home: state.dimensions.droppables[state.critical.droppable.id],
	        viewport: state.viewport,
	        draggables: state.dimensions.draggables
	      }),
	          impact = _getDropImpact.impact,
	          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

	      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
	      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
	      var source = {
	        index: critical.draggable.index,
	        droppableId: critical.droppable.id
	      };
	      var result = {
	        draggableId: draggable.descriptor.id,
	        type: draggable.descriptor.type,
	        source: source,
	        reason: reason,
	        mode: state.movementMode,
	        destination: destination,
	        combine: combine
	      };
	      var newHomeClientOffset = getNewHomeClientOffset({
	        impact: impact,
	        draggable: draggable,
	        dimensions: dimensions,
	        viewport: state.viewport,
	        afterCritical: state.afterCritical
	      });
	      var completed = {
	        critical: state.critical,
	        afterCritical: state.afterCritical,
	        result: result,
	        impact: impact
	      };
	      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

	      if (!isAnimationRequired) {
	        dispatch(completeDrop({
	          completed: completed,
	          shouldFlush: false
	        }));
	        return;
	      }

	      var dropDuration = getDropDuration({
	        current: state.current.client.offset,
	        destination: newHomeClientOffset,
	        reason: reason
	      });
	      var args = {
	        newHomeClientOffset: newHomeClientOffset,
	        dropDuration: dropDuration,
	        completed: completed
	      };
	      dispatch(animateDrop(args));
	    };
	  };
	});

	var rafSchd = function rafSchd(fn) {
	  var lastArgs = [];
	  var frameId = null;

	  var wrapperFn = function wrapperFn() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    lastArgs = args;

	    if (frameId) {
	      return;
	    }

	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      fn.apply(void 0, lastArgs);
	    });
	  };

	  wrapperFn.cancel = function () {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	  };

	  return wrapperFn;
	};

	function getOptions(shared, fromBinding) {
	  return _extends({}, shared, {}, fromBinding);
	}

	function bindEvents(el, bindings, sharedOptions) {
	  var unbindings = bindings.map(function (binding) {
	    var options = getOptions(sharedOptions, binding.options);
	    el.addEventListener(binding.eventName, binding.fn, options);
	    return function unbind() {
	      el.removeEventListener(binding.eventName, binding.fn, options);
	    };
	  });
	  return function unbindAll() {
	    unbindings.forEach(function (unbind) {
	      unbind();
	    });
	  };
	}

	var getWindowScroll$1 = (function () {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	});

	function noop() {}

	function getWindowScrollBinding(update) {
	  return {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn(event) {
	      if (event.currentTarget !== window) {
	        return;
	      }

	      update();
	    }
	  };
	}

	function getScrollListener(_ref) {
	  var onWindowScroll = _ref.onWindowScroll;

	  function updateScroll() {
	    onWindowScroll(getWindowScroll$1());
	  }

	  var scheduled = rafSchd(updateScroll);
	  var binding = getWindowScrollBinding(scheduled);
	  var unbind = noop;

	  function isActive() {
	    return unbind !== noop;
	  }

	  function start() {
	    !!isActive() ?  invariant(false, 'Cannot start scroll listener when already active')  : void 0;
	    unbind = bindEvents(window, [binding]);
	  }

	  function stop() {
	    !isActive() ?  invariant(false, 'Cannot stop scroll listener when not active')  : void 0;
	    scheduled.cancel();
	    unbind();
	    unbind = noop;
	  }

	  return {
	    start: start,
	    stop: stop,
	    isActive: isActive
	  };
	}

	var shouldEnd = function shouldEnd(action) {
	  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'CLEAN';
	};

	var scrollListener = (function (store) {
	  var listener = getScrollListener({
	    onWindowScroll: function onWindowScroll(newScroll) {
	      store.dispatch(moveByWindowScroll({
	        newScroll: newScroll
	      }));
	    }
	  });
	  return function (next) {
	    return function (action) {
	      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
	        listener.start();
	      }

	      if (listener.isActive() && shouldEnd(action)) {
	        listener.stop();
	      }

	      next(action);
	    };
	  };
	});

	var getExpiringAnnounce = (function (announce) {
	  var wasCalled = false;
	  var isExpired = false;
	  var timeoutId = setTimeout(function () {
	    isExpired = true;
	  });

	  var result = function result(message) {
	    if (wasCalled) {
	       warning('Announcement already made. Not making a second announcement') ;
	      return;
	    }

	    if (isExpired) {
	       warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") ;
	      return;
	    }

	    wasCalled = true;
	    announce(message);
	    clearTimeout(timeoutId);
	  };

	  result.wasCalled = function () {
	    return wasCalled;
	  };

	  return result;
	});

	var getAsyncMarshal = (function () {
	  var entries = [];

	  var execute = function execute(timerId) {
	    var index = findIndex(entries, function (item) {
	      return item.timerId === timerId;
	    });
	    !(index !== -1) ?  invariant(false, 'Could not find timer')  : void 0;

	    var _entries$splice = entries.splice(index, 1),
	        entry = _entries$splice[0];

	    entry.callback();
	  };

	  var add = function add(fn) {
	    var timerId = setTimeout(function () {
	      return execute(timerId);
	    });
	    var entry = {
	      timerId: timerId,
	      callback: fn
	    };
	    entries.push(entry);
	  };

	  var flush = function flush() {
	    if (!entries.length) {
	      return;
	    }

	    var shallow = [].concat(entries);
	    entries.length = 0;
	    shallow.forEach(function (entry) {
	      clearTimeout(entry.timerId);
	      entry.callback();
	    });
	  };

	  return {
	    add: add,
	    flush: flush
	  };
	});

	var areLocationsEqual = function areLocationsEqual(first, second) {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.droppableId === second.droppableId && first.index === second.index;
	};
	var isCombineEqual = function isCombineEqual(first, second) {
	  if (first == null && second == null) {
	    return true;
	  }

	  if (first == null || second == null) {
	    return false;
	  }

	  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
	};
	var isCriticalEqual = function isCriticalEqual(first, second) {
	  if (first === second) {
	    return true;
	  }

	  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
	  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
	  return isDraggableEqual && isDroppableEqual;
	};

	var withTimings = function withTimings(key, fn) {
	  start(key);
	  fn();
	  finish(key);
	};

	var getDragStart = function getDragStart(critical, mode) {
	  return {
	    draggableId: critical.draggable.id,
	    type: critical.droppable.type,
	    source: {
	      droppableId: critical.droppable.id,
	      index: critical.draggable.index
	    },
	    mode: mode
	  };
	};

	var execute = function execute(responder, data, announce, getDefaultMessage) {
	  if (!responder) {
	    announce(getDefaultMessage(data));
	    return;
	  }

	  var willExpire = getExpiringAnnounce(announce);
	  var provided = {
	    announce: willExpire
	  };
	  responder(data, provided);

	  if (!willExpire.wasCalled()) {
	    announce(getDefaultMessage(data));
	  }
	};

	var getPublisher = (function (getResponders, announce) {
	  var asyncMarshal = getAsyncMarshal();
	  var dragging = null;

	  var beforeStart = function beforeStart(critical, mode) {
	    !!dragging ?  invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    withTimings('onBeforeDragStart', function () {
	      var fn = getResponders().onBeforeDragStart;

	      if (fn) {
	        fn(getDragStart(critical, mode));
	      }
	    });
	  };

	  var start = function start(critical, mode) {
	    !!dragging ?  invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published')  : void 0;
	    var data = getDragStart(critical, mode);
	    dragging = {
	      mode: mode,
	      lastCritical: critical,
	      lastLocation: data.source,
	      lastCombine: null
	    };
	    asyncMarshal.add(function () {
	      withTimings('onDragStart', function () {
	        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
	      });
	    });
	  };

	  var update = function update(critical, impact) {
	    var location = tryGetDestination(impact);
	    var combine = tryGetCombine(impact);
	    !dragging ?  invariant(false, 'Cannot fire onDragMove when onDragStart has not been called')  : void 0;
	    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

	    if (hasCriticalChanged) {
	      dragging.lastCritical = critical;
	    }

	    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

	    if (hasLocationChanged) {
	      dragging.lastLocation = location;
	    }

	    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

	    if (hasGroupingChanged) {
	      dragging.lastCombine = combine;
	    }

	    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
	      return;
	    }

	    var data = _extends({}, getDragStart(critical, dragging.mode), {
	      combine: combine,
	      destination: location
	    });

	    asyncMarshal.add(function () {
	      withTimings('onDragUpdate', function () {
	        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
	      });
	    });
	  };

	  var flush = function flush() {
	    !dragging ?  invariant(false, 'Can only flush responders while dragging')  : void 0;
	    asyncMarshal.flush();
	  };

	  var drop = function drop(result) {
	    !dragging ?  invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart')  : void 0;
	    dragging = null;
	    withTimings('onDragEnd', function () {
	      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
	    });
	  };

	  var abort = function abort() {
	    if (!dragging) {
	      return;
	    }

	    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
	      combine: null,
	      destination: null,
	      reason: 'CANCEL'
	    });

	    drop(result);
	  };

	  return {
	    beforeStart: beforeStart,
	    start: start,
	    update: update,
	    flush: flush,
	    drop: drop,
	    abort: abort
	  };
	});

	var responders = (function (getResponders, announce) {
	  var publisher = getPublisher(getResponders, announce);
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          var critical = action.payload.critical;
	          publisher.beforeStart(critical, action.payload.movementMode);
	          next(action);
	          publisher.start(critical, action.payload.movementMode);
	          return;
	        }

	        if (action.type === 'DROP_COMPLETE') {
	          var result = action.payload.completed.result;
	          publisher.flush();
	          next(action);
	          publisher.drop(result);
	          return;
	        }

	        next(action);

	        if (action.type === 'CLEAN') {
	          publisher.abort();
	          return;
	        }

	        var state = store.getState();

	        if (state.phase === 'DRAGGING') {
	          publisher.update(state.critical, state.impact);
	        }
	      };
	    };
	  };
	});

	var dropAnimationFinish = (function (store) {
	  return function (next) {
	    return function (action) {
	      if (action.type !== 'DROP_ANIMATION_FINISHED') {
	        next(action);
	        return;
	      }

	      var state = store.getState();
	      !(state.phase === 'DROP_ANIMATING') ?  invariant(false, 'Cannot finish a drop animating when no drop is occurring')  : void 0;
	      store.dispatch(completeDrop({
	        completed: state.completed,
	        shouldFlush: false
	      }));
	    };
	  };
	});

	var dropAnimationFlushOnScroll = (function (store) {
	  var unbind = null;
	  var frameId = null;

	  function clear() {
	    if (frameId) {
	      cancelAnimationFrame(frameId);
	      frameId = null;
	    }

	    if (unbind) {
	      unbind();
	      unbind = null;
	    }
	  }

	  return function (next) {
	    return function (action) {
	      if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
	        clear();
	      }

	      next(action);

	      if (action.type !== 'DROP_ANIMATE') {
	        return;
	      }

	      var binding = {
	        eventName: 'scroll',
	        options: {
	          capture: true,
	          passive: false
	        },
	        fn: function flushDropAnimation() {
	          var state = store.getState();

	          if (state.phase === 'DROP_ANIMATING') {
	            store.dispatch(dropAnimationFinished());
	          }
	        }
	      };
	      frameId = requestAnimationFrame(function () {
	        unbind = bindEvents(window, [binding]);
	      });
	    };
	  };
	});

	var dimensionMarshalStopper = (function (marshal) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
	          marshal.stopPublishing();
	        }

	        next(action);
	      };
	    };
	  };
	});

	var focus = (function (marshal) {
	  var isWatching = false;
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === 'INITIAL_PUBLISH') {
	          isWatching = true;
	          marshal.tryRecordFocus(action.payload.critical.draggable.id);
	          next(action);
	          marshal.tryRestoreFocusRecorded();
	          return;
	        }

	        next(action);

	        if (!isWatching) {
	          return;
	        }

	        if (action.type === 'CLEAN') {
	          isWatching = false;
	          marshal.tryRestoreFocusRecorded();
	          return;
	        }

	        if (action.type === 'DROP_COMPLETE') {
	          isWatching = false;
	          var result = action.payload.completed.result;

	          if (result.combine) {
	            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
	          }

	          marshal.tryRestoreFocusRecorded();
	        }
	      };
	    };
	  };
	});

	var shouldStop = function shouldStop(action) {
	  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'CLEAN';
	};

	var shouldCancelPending = function shouldCancelPending(action) {
	  return action.type === 'COLLECTION_STARTING';
	};

	var autoScroll = (function (autoScroller) {
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        if (shouldStop(action)) {
	          autoScroller.stop();
	          next(action);
	          return;
	        }

	        if (shouldCancelPending(action)) {
	          autoScroller.cancelPending();
	          next(action);
	          return;
	        }

	        if (action.type === 'INITIAL_PUBLISH') {
	          next(action);
	          var state = store.getState();
	          !(state.phase === 'DRAGGING') ?  invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH')  : void 0;
	          autoScroller.start(state);
	          return;
	        }

	        next(action);
	        autoScroller.scroll(store.getState());
	      };
	    };
	  };
	});

	var pendingDrop = (function (store) {
	  return function (next) {
	    return function (action) {
	      next(action);

	      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
	        return;
	      }

	      var postActionState = store.getState();

	      if (postActionState.phase !== 'DROP_PENDING') {
	        return;
	      }

	      if (postActionState.isWaiting) {
	        return;
	      }

	      store.dispatch(drop({
	        reason: postActionState.reason
	      }));
	    };
	  };
	});

	var composeEnhancers =  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
	var createStore$1 = (function (_ref) {
	  var dimensionMarshal = _ref.dimensionMarshal,
	      focusMarshal = _ref.focusMarshal,
	      styleMarshal = _ref.styleMarshal,
	      getResponders = _ref.getResponders,
	      announce = _ref.announce,
	      autoScroller = _ref.autoScroller;
	  return createStore(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
	});

	var clean$2 = function clean() {
	  return {
	    additions: {},
	    removals: {},
	    modified: {}
	  };
	};

	var timingKey = 'Publish collection from DOM';
	function createPublisher(_ref) {
	  var registry = _ref.registry,
	      callbacks = _ref.callbacks;

	  var advancedUsageWarning = function () {

	    var hasAnnounced = false;
	    return function () {
	      if (hasAnnounced) {
	        return;
	      }

	      hasAnnounced = true;
	       warning("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature.\n\n        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/changes-while-dragging.md\n      ") ;
	    };
	  }();

	  var staging = clean$2();
	  var frameId = null;

	  var collect = function collect() {
	    advancedUsageWarning();

	    if (frameId) {
	      return;
	    }

	    frameId = requestAnimationFrame(function () {
	      frameId = null;
	      callbacks.collectionStarting();
	      var critical = callbacks.getCritical();
	      start(timingKey);
	      var _staging = staging,
	          additions = _staging.additions,
	          removals = _staging.removals,
	          modified = _staging.modified;

	      var added = keys$2(additions).map(function (id) {
	        return registry.draggable.getById(id).getDimension(origin);
	      }).sort(function (a, b) {
	        return a.descriptor.index - b.descriptor.index;
	      });

	      var updated = keys$2(modified).map(function (id) {
	        var entry = registry.droppable.getById(id);
	        var isHome = entry.descriptor.id === critical.droppable.id;
	        var options = {
	          withoutPlaceholder: !isHome
	        };
	        return entry.callbacks.recollect(options);
	      });

	      var result = {
	        additions: added,
	        removals: keys$2(removals),
	        modified: updated
	      };
	      staging = clean$2();
	      finish(timingKey);
	      callbacks.publish(result);
	    });
	  };

	  var add = function add(entry) {
	    var id = entry.descriptor.id;
	    staging.additions[id] = entry;
	    staging.modified[entry.descriptor.droppableId] = true;

	    if (staging.removals[id]) {
	      delete staging.removals[id];
	    }

	    collect();
	  };

	  var remove = function remove(descriptor) {
	    staging.removals[descriptor.id] = true;
	    staging.modified[descriptor.droppableId] = true;

	    if (staging.additions[descriptor.id]) {
	      delete staging.additions[descriptor.id];
	    }

	    collect();
	  };

	  var stop = function stop() {
	    if (!frameId) {
	      return;
	    }

	    cancelAnimationFrame(frameId);
	    frameId = null;
	    staging = clean$2();
	  };

	  return {
	    add: add,
	    remove: remove,
	    stop: stop
	  };
	}

	var getDocumentElement = (function () {
	  var doc = document.documentElement;
	  !doc ?  invariant(false, 'Cannot find document.documentElement')  : void 0;
	  return doc;
	});

	var getMaxWindowScroll = (function () {
	  var doc = getDocumentElement();
	  var maxScroll = getMaxScroll({
	    scrollHeight: doc.scrollHeight,
	    scrollWidth: doc.scrollWidth,
	    width: doc.clientWidth,
	    height: doc.clientHeight
	  });
	  return maxScroll;
	});

	var getViewport = (function () {
	  var scroll = getWindowScroll$1();
	  var maxScroll = getMaxWindowScroll();
	  var top = scroll.y;
	  var left = scroll.x;
	  var doc = getDocumentElement();
	  var width = doc.clientWidth;
	  var height = doc.clientHeight;
	  var right = left + width;
	  var bottom = top + height;
	  var frame = getRect({
	    top: top,
	    left: left,
	    right: right,
	    bottom: bottom
	  });
	  var viewport = {
	    frame: frame,
	    scroll: {
	      initial: scroll,
	      current: scroll,
	      max: maxScroll,
	      diff: {
	        value: origin,
	        displacement: origin
	      }
	    }
	  };
	  return viewport;
	});

	var getContainerScroll = (function (container) {
	  return {
	    x: container.scrollLeft,
	    y: container.scrollTop
	  };
	});

	var getMaxContainerScroll = (function (container) {
	  var maxScroll = getMaxScroll({
	    scrollHeight: container.scrollHeight,
	    scrollWidth: container.scrollWidth,
	    width: container.clientWidth,
	    height: container.clientHeight
	  });
	  return maxScroll;
	});

	var getContainerViewport = (function (container) {
	  var scroll = getContainerScroll(container);
	  var maxScroll = getMaxContainerScroll(container);

	  var _container$getBoundin = container.getBoundingClientRect(),
	      top = _container$getBoundin.top,
	      left = _container$getBoundin.left,
	      width = _container$getBoundin.width,
	      height = _container$getBoundin.height,
	      right = _container$getBoundin.right,
	      bottom = _container$getBoundin.bottom;

	  var scrollTop = top + scroll.y;
	  var scrollLeft = left + scroll.x;
	  var scrollRight = scrollLeft + width;
	  var scrollBottom = scrollTop + height;
	  var frame = getRect({
	    top: scrollTop,
	    left: scrollLeft,
	    right: scrollRight,
	    bottom: scrollBottom
	  });
	  var viewport = {
	    frame: frame,
	    scroll: {
	      initial: scroll,
	      current: scroll,
	      max: maxScroll,
	      diff: {
	        value: origin,
	        displacement: origin
	      }
	    }
	  };
	  return viewport;
	});

	var getInitialPublish = (function (_ref) {
	  var critical = _ref.critical,
	      scrollOptions = _ref.scrollOptions,
	      registry = _ref.registry,
	      getContainer = _ref.getContainer;
	  var timingKey = 'Initial collection from DOM';
	  start(timingKey);
	  var viewport = getContainer() ? getContainerViewport(getContainer()) : getViewport();
	  var windowScroll = viewport.scroll.current;
	  var home = critical.droppable;
	  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
	    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
	  });
	  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
	    return entry.getDimension(windowScroll);
	  });
	  var dimensions = {
	    draggables: toDraggableMap(draggables),
	    droppables: toDroppableMap(droppables)
	  };
	  finish(timingKey);
	  var result = {
	    dimensions: dimensions,
	    critical: critical,
	    viewport: viewport
	  };
	  return result;
	});

	var createDimensionMarshal = (function (registry, callbacks, _temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$getContainer = _ref.getContainer,
	      getContainer = _ref$getContainer === void 0 ? function () {} : _ref$getContainer;

	  var collection = null;
	  var publisher = createPublisher({
	    callbacks: {
	      publish: callbacks.publishWhileDragging,
	      collectionStarting: callbacks.collectionStarting,
	      getCritical: function getCritical() {
	        !collection ?  invariant(false, 'Cannot get critical when there is no collection')  : void 0;
	        return collection.critical;
	      }
	    },
	    registry: registry
	  });

	  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
	    !registry.droppable.exists(id) ?  invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered")  : void 0;

	    if (!collection) {
	      return;
	    }

	    callbacks.updateDroppableIsEnabled({
	      id: id,
	      isEnabled: isEnabled
	    });
	  };

	  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ?  invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered")  : void 0;
	    callbacks.updateDroppableIsCombineEnabled({
	      id: id,
	      isCombineEnabled: isCombineEnabled
	    });
	  };

	  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
	    if (!collection) {
	      return;
	    }

	    !registry.droppable.exists(id) ?  invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered")  : void 0;
	    callbacks.updateDroppableScroll({
	      id: id,
	      offset: newScroll
	    });
	  };

	  var scrollDroppable = function scrollDroppable(id, change) {
	    if (!collection) {
	      return;
	    }

	    registry.droppable.getById(id).callbacks.scroll(change);
	  };

	  var stopPublishing = function stopPublishing() {
	    if (!collection) {
	      return;
	    }

	    publisher.stop();
	    var home = collection.critical.droppable;
	    registry.droppable.getAllByType(home.type).forEach(function (entry) {
	      return entry.callbacks.dragStopped();
	    });
	    collection.unsubscribe();
	    collection = null;
	  };

	  var subscriber = function subscriber(event) {
	    !collection ?  invariant(false, 'Should only be subscribed when a collection is occurring')  : void 0;
	    var criticalId = collection.critical.draggable.id;

	    if (event.type === 'ADDITION') {
	      if (event.value.descriptor.id !== criticalId) {
	        publisher.add(event.value);
	      }
	    }

	    if (event.type === 'REMOVAL') {
	      if (event.value.id !== criticalId) {
	        publisher.remove(event.value);
	      }
	    }
	  };

	  var startPublishing = function startPublishing(request) {
	    !!collection ?  invariant(false, 'Cannot start capturing critical dimensions as there is already a collection')  : void 0;
	    var entry = registry.draggable.getById(request.draggableId);
	    var home = registry.droppable.getById(entry.descriptor.droppableId);
	    var critical = {
	      draggable: entry.descriptor,
	      droppable: home.descriptor
	    };
	    var unsubscribe = registry.subscribe(subscriber);
	    collection = {
	      critical: critical,
	      unsubscribe: unsubscribe
	    };
	    return getInitialPublish({
	      critical: critical,
	      registry: registry,
	      scrollOptions: request.scrollOptions,
	      getContainer: getContainer
	    });
	  };

	  var marshal = {
	    updateDroppableIsEnabled: updateDroppableIsEnabled,
	    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
	    scrollDroppable: scrollDroppable,
	    updateDroppableScroll: updateDroppableScroll,
	    startPublishing: startPublishing,
	    stopPublishing: stopPublishing
	  };
	  return marshal;
	});

	var canStartDrag = (function (state, id) {
	  if (state.phase === 'IDLE') {
	    return true;
	  }

	  if (state.phase !== 'DROP_ANIMATING') {
	    return false;
	  }

	  if (state.completed.result.draggableId === id) {
	    return false;
	  }

	  return state.completed.result.reason === 'DROP';
	});

	var scrollContainer = (function (container, change) {
	  container.scrollBy(change.x, change.y);
	});

	var scrollWindow = (function (change) {
	  window.scrollBy(change.x, change.y);
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()


	_export(_export.S, 'Date', { now: function () { return new Date().getTime(); } });

	var now = _core.Date.now;

	var now$1 = now;

	var getScrollableDroppables = memoizeOne(function (droppables) {
	  return toDroppableList(droppables).filter(function (droppable) {
	    if (!droppable.isEnabled) {
	      return false;
	    }

	    if (!droppable.frame) {
	      return false;
	    }

	    return true;
	  });
	});

	var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
	  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
	    !droppable.frame ?  invariant(false, 'Invalid result')  : void 0;
	    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
	  });
	  return maybe;
	};

	var getBestScrollableDroppable = (function (_ref) {
	  var center = _ref.center,
	      destination = _ref.destination,
	      droppables = _ref.droppables;

	  if (destination) {
	    var _dimension = droppables[destination];

	    if (!_dimension.frame) {
	      return null;
	    }

	    return _dimension;
	  }

	  var dimension = getScrollableDroppableOver(center, droppables);
	  return dimension;
	});

	var config = {
	  startFromPercentage: 0.25,
	  maxScrollAtPercentage: 0.05,
	  maxPixelScroll: 28,
	  ease: function ease(percentage) {
	    return Math.pow(percentage, 2);
	  },
	  durationDampening: {
	    stopDampeningAt: 1200,
	    accelerateAt: 360
	  }
	};

	var getDistanceThresholds = (function (container, axis) {
	  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
	  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
	  var thresholds = {
	    startScrollingFrom: startScrollingFrom,
	    maxScrollValueAt: maxScrollValueAt
	  };
	  return thresholds;
	});

	var getPercentage = (function (_ref) {
	  var startOfRange = _ref.startOfRange,
	      endOfRange = _ref.endOfRange,
	      current = _ref.current;
	  var range = endOfRange - startOfRange;

	  if (range === 0) {
	     warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") ;
	    return 0;
	  }

	  var currentInRange = current - startOfRange;
	  var percentage = currentInRange / range;
	  return percentage;
	});

	var minScroll = 1;

	var getValueFromDistance = (function (distanceToEdge, thresholds) {
	  if (distanceToEdge > thresholds.startScrollingFrom) {
	    return 0;
	  }

	  if (distanceToEdge <= thresholds.maxScrollValueAt) {
	    return config.maxPixelScroll;
	  }

	  if (distanceToEdge === thresholds.startScrollingFrom) {
	    return minScroll;
	  }

	  var percentageFromMaxScrollValueAt = getPercentage({
	    startOfRange: thresholds.maxScrollValueAt,
	    endOfRange: thresholds.startScrollingFrom,
	    current: distanceToEdge
	  });
	  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
	  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
	  return Math.ceil(scroll);
	});

	var accelerateAt = config.durationDampening.accelerateAt;
	var stopAt = config.durationDampening.stopDampeningAt;
	var dampenValueByTime = (function (proposedScroll, dragStartTime) {
	  var startOfRange = dragStartTime;
	  var endOfRange = stopAt;

	  var now = now$1();

	  var runTime = now - startOfRange;

	  if (runTime >= stopAt) {
	    return proposedScroll;
	  }

	  if (runTime < accelerateAt) {
	    return minScroll;
	  }

	  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
	    startOfRange: accelerateAt,
	    endOfRange: endOfRange,
	    current: runTime
	  });
	  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
	  return Math.ceil(scroll);
	});

	var getValue = (function (_ref) {
	  var distanceToEdge = _ref.distanceToEdge,
	      thresholds = _ref.thresholds,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var scroll = getValueFromDistance(distanceToEdge, thresholds);

	  if (scroll === 0) {
	    return 0;
	  }

	  if (!shouldUseTimeDampening) {
	    return scroll;
	  }

	  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
	});

	var getScrollOnAxis = (function (_ref) {
	  var container = _ref.container,
	      distanceToEdges = _ref.distanceToEdges,
	      dragStartTime = _ref.dragStartTime,
	      axis = _ref.axis,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var thresholds = getDistanceThresholds(container, axis);
	  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

	  if (isCloserToEnd) {
	    return getValue({
	      distanceToEdge: distanceToEdges[axis.end],
	      thresholds: thresholds,
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });
	  }

	  return -1 * getValue({
	    distanceToEdge: distanceToEdges[axis.start],
	    thresholds: thresholds,
	    dragStartTime: dragStartTime,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	});

	var adjustForSizeLimits = (function (_ref) {
	  var container = _ref.container,
	      subject = _ref.subject,
	      proposedScroll = _ref.proposedScroll;
	  var isTooBigVertically = subject.height > container.height;
	  var isTooBigHorizontally = subject.width > container.width;

	  if (!isTooBigHorizontally && !isTooBigVertically) {
	    return proposedScroll;
	  }

	  if (isTooBigHorizontally && isTooBigVertically) {
	    return null;
	  }

	  return {
	    x: isTooBigHorizontally ? 0 : proposedScroll.x,
	    y: isTooBigVertically ? 0 : proposedScroll.y
	  };
	});

	var clean$3 = apply(function (value) {
	  return value === 0 ? 0 : value;
	});
	var getScroll = (function (_ref) {
	  var dragStartTime = _ref.dragStartTime,
	      container = _ref.container,
	      subject = _ref.subject,
	      center = _ref.center,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var distanceToEdges = {
	    top: center.y - container.top,
	    right: container.right - center.x,
	    bottom: container.bottom - center.y,
	    left: center.x - container.left
	  };
	  var y = getScrollOnAxis({
	    container: container,
	    distanceToEdges: distanceToEdges,
	    dragStartTime: dragStartTime,
	    axis: vertical,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  var x = getScrollOnAxis({
	    container: container,
	    distanceToEdges: distanceToEdges,
	    dragStartTime: dragStartTime,
	    axis: horizontal,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  var required = clean$3({
	    x: x,
	    y: y
	  });

	  if (isEqual(required, origin)) {
	    return null;
	  }

	  var limited = adjustForSizeLimits({
	    container: container,
	    subject: subject,
	    proposedScroll: required
	  });

	  if (!limited) {
	    return null;
	  }

	  return isEqual(limited, origin) ? null : limited;
	});

	var smallestSigned = apply(function (value) {
	  if (value === 0) {
	    return 0;
	  }

	  return value > 0 ? 1 : -1;
	});
	var getOverlap = function () {
	  var getRemainder = function getRemainder(target, max) {
	    if (target < 0) {
	      return target;
	    }

	    if (target > max) {
	      return target - max;
	    }

	    return 0;
	  };

	  return function (_ref) {
	    var current = _ref.current,
	        max = _ref.max,
	        change = _ref.change;
	    var targetScroll = add(current, change);
	    var overlap = {
	      x: getRemainder(targetScroll.x, max.x),
	      y: getRemainder(targetScroll.y, max.y)
	    };

	    if (isEqual(overlap, origin)) {
	      return null;
	    }

	    return overlap;
	  };
	}();
	var canPartiallyScroll = function canPartiallyScroll(_ref2) {
	  var rawMax = _ref2.max,
	      current = _ref2.current,
	      change = _ref2.change;
	  var max = {
	    x: Math.max(current.x, rawMax.x),
	    y: Math.max(current.y, rawMax.y)
	  };
	  var smallestChange = smallestSigned(change);
	  var overlap = getOverlap({
	    max: max,
	    current: current,
	    change: smallestChange
	  });

	  if (!overlap) {
	    return true;
	  }

	  if (smallestChange.x !== 0 && overlap.x === 0) {
	    return true;
	  }

	  if (smallestChange.y !== 0 && overlap.y === 0) {
	    return true;
	  }

	  return false;
	};
	var canScrollWindow = function canScrollWindow(viewport, change) {
	  return canPartiallyScroll({
	    current: viewport.scroll.current,
	    max: viewport.scroll.max,
	    change: change
	  });
	};
	var getWindowOverlap = function getWindowOverlap(viewport, change) {
	  if (!canScrollWindow(viewport, change)) {
	    return null;
	  }

	  var max = viewport.scroll.max;
	  var current = viewport.scroll.current;
	  return getOverlap({
	    current: current,
	    max: max,
	    change: change
	  });
	};
	var canScrollDroppable = function canScrollDroppable(droppable, change) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return false;
	  }

	  return canPartiallyScroll({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change: change
	  });
	};
	var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
	  var frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  if (!canScrollDroppable(droppable, change)) {
	    return null;
	  }

	  return getOverlap({
	    current: frame.scroll.current,
	    max: frame.scroll.max,
	    change: change
	  });
	};

	var getWindowScrollChange = (function (_ref) {
	  var viewport = _ref.viewport,
	      subject = _ref.subject,
	      center = _ref.center,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var scroll = getScroll({
	    dragStartTime: dragStartTime,
	    container: viewport.frame,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
	});

	var getDroppableScrollChange = (function (_ref) {
	  var droppable = _ref.droppable,
	      subject = _ref.subject,
	      center = _ref.center,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
	  var frame = droppable.frame;

	  if (!frame) {
	    return null;
	  }

	  var scroll = getScroll({
	    dragStartTime: dragStartTime,
	    container: frame.pageMarginBox,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });
	  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
	});

	var scroll$1 = (function (_ref) {
	  var state = _ref.state,
	      dragStartTime = _ref.dragStartTime,
	      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
	      scrollWindow = _ref.scrollWindow,
	      scrollDroppable = _ref.scrollDroppable;
	  var center = state.current.page.borderBoxCenter;
	  var draggable = state.dimensions.draggables[state.critical.draggable.id];
	  var subject = draggable.page.marginBox;

	  if (state.isWindowScrollAllowed) {
	    var viewport = state.viewport;

	    var _change = getWindowScrollChange({
	      dragStartTime: dragStartTime,
	      viewport: viewport,
	      subject: subject,
	      center: center,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });

	    if (_change) {
	      scrollWindow(_change);
	      return;
	    }
	  }

	  var droppable = getBestScrollableDroppable({
	    center: center,
	    destination: whatIsDraggedOver(state.impact),
	    droppables: state.dimensions.droppables
	  });

	  if (!droppable) {
	    return;
	  }

	  var change = getDroppableScrollChange({
	    dragStartTime: dragStartTime,
	    droppable: droppable,
	    subject: subject,
	    center: center,
	    shouldUseTimeDampening: shouldUseTimeDampening
	  });

	  if (change) {
	    scrollDroppable(droppable.descriptor.id, change);
	  }
	});

	var createFluidScroller = (function (_ref) {
	  var scrollWindow = _ref.scrollWindow,
	      scrollDroppable = _ref.scrollDroppable;
	  var scheduleWindowScroll = rafSchd(scrollWindow);
	  var scheduleDroppableScroll = rafSchd(scrollDroppable);
	  var dragging = null;

	  var tryScroll = function tryScroll(state) {
	    !dragging ?  invariant(false, 'Cannot fluid scroll if not dragging')  : void 0;
	    var _dragging = dragging,
	        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
	        dragStartTime = _dragging.dragStartTime;
	    scroll$1({
	      state: state,
	      scrollWindow: scheduleWindowScroll,
	      scrollDroppable: scheduleDroppableScroll,
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: shouldUseTimeDampening
	    });
	  };

	  var cancelPending = function cancelPending() {
	    !dragging ?  invariant(false, 'Cannot cancel pending fluid scroll when not started')  : void 0;
	    scheduleWindowScroll.cancel();
	    scheduleDroppableScroll.cancel();
	  };

	  var start$1 = function start$1(state) {
	    start('starting fluid scroller');
	    !!dragging ?  invariant(false, 'Cannot start auto scrolling when already started')  : void 0;

	    var dragStartTime = now$1();

	    var wasScrollNeeded = false;

	    var fakeScrollCallback = function fakeScrollCallback() {
	      wasScrollNeeded = true;
	    };

	    scroll$1({
	      state: state,
	      dragStartTime: 0,
	      shouldUseTimeDampening: false,
	      scrollWindow: fakeScrollCallback,
	      scrollDroppable: fakeScrollCallback
	    });
	    dragging = {
	      dragStartTime: dragStartTime,
	      shouldUseTimeDampening: wasScrollNeeded
	    };
	    finish('starting fluid scroller');

	    if (wasScrollNeeded) {
	      tryScroll(state);
	    }
	  };

	  var stop = function stop() {
	    if (!dragging) {
	      return;
	    }

	    cancelPending();
	    dragging = null;
	  };

	  return {
	    start: start$1,
	    stop: stop,
	    cancelPending: cancelPending,
	    scroll: tryScroll
	  };
	});

	var createJumpScroller = (function (_ref) {
	  var move = _ref.move,
	      scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow;

	  var moveByOffset = function moveByOffset(state, offset) {
	    var client = add(state.current.client.selection, offset);
	    move({
	      client: client
	    });
	  };

	  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
	    if (!canScrollDroppable(droppable, change)) {
	      return change;
	    }

	    var overlap = getDroppableOverlap(droppable, change);

	    if (!overlap) {
	      scrollDroppable(droppable.descriptor.id, change);
	      return null;
	    }

	    var whatTheDroppableCanScroll = subtract(change, overlap);
	    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
	    var remainder = subtract(change, whatTheDroppableCanScroll);
	    return remainder;
	  };

	  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
	    if (!isWindowScrollAllowed) {
	      return change;
	    }

	    if (!canScrollWindow(viewport, change)) {
	      return change;
	    }

	    var overlap = getWindowOverlap(viewport, change);

	    if (!overlap) {
	      scrollWindow(change);
	      return null;
	    }

	    var whatTheWindowCanScroll = subtract(change, overlap);
	    scrollWindow(whatTheWindowCanScroll);
	    var remainder = subtract(change, whatTheWindowCanScroll);
	    return remainder;
	  };

	  var jumpScroller = function jumpScroller(state) {
	    var request = state.scrollJumpRequest;

	    if (!request) {
	      return;
	    }

	    var destination = whatIsDraggedOver(state.impact);
	    !destination ?  invariant(false, 'Cannot perform a jump scroll when there is no destination')  : void 0;
	    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

	    if (!droppableRemainder) {
	      return;
	    }

	    var viewport = state.viewport;
	    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

	    if (!windowRemainder) {
	      return;
	    }

	    moveByOffset(state, windowRemainder);
	  };

	  return jumpScroller;
	});

	var createAutoScroller = (function (_ref) {
	  var scrollDroppable = _ref.scrollDroppable,
	      scrollWindow = _ref.scrollWindow,
	      move = _ref.move;
	  var fluidScroller = createFluidScroller({
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });
	  var jumpScroll = createJumpScroller({
	    move: move,
	    scrollWindow: scrollWindow,
	    scrollDroppable: scrollDroppable
	  });

	  var scroll = function scroll(state) {
	    if (state.phase !== 'DRAGGING') {
	      return;
	    }

	    if (state.movementMode === 'FLUID') {
	      fluidScroller.scroll(state);
	      return;
	    }

	    if (!state.scrollJumpRequest) {
	      return;
	    }

	    jumpScroll(state);
	  };

	  var scroller = {
	    scroll: scroll,
	    cancelPending: fluidScroller.cancelPending,
	    start: fluidScroller.start,
	    stop: fluidScroller.stop
	  };
	  return scroller;
	});

	var prefix$2 = 'data-rbd';
	var dragHandle = function () {
	  var base = prefix$2 + "-drag-handle";
	  return {
	    base: base,
	    draggableId: base + "-draggable-id",
	    contextId: base + "-context-id"
	  };
	}();
	var draggable = function () {
	  var base = prefix$2 + "-draggable";
	  return {
	    base: base,
	    contextId: base + "-context-id",
	    id: base + "-id"
	  };
	}();
	var droppable = function () {
	  var base = prefix$2 + "-droppable";
	  return {
	    base: base,
	    contextId: base + "-context-id",
	    id: base + "-id"
	  };
	}();
	var scrollContainer$1 = {
	  contextId: prefix$2 + "-scroll-container-context-id"
	};

	var makeGetSelector = function makeGetSelector(context) {
	  return function (attribute) {
	    return "[" + attribute + "=\"" + context + "\"]";
	  };
	};

	var getStyles = function getStyles(rules, property) {
	  return rules.map(function (rule) {
	    var value = rule.styles[property];

	    if (!value) {
	      return '';
	    }

	    return rule.selector + " { " + value + " }";
	  }).join(' ');
	};

	var noPointerEvents = 'pointer-events: none;';
	var getStyles$1 = (function (contextId) {
	  var getSelector = makeGetSelector(contextId);

	  var dragHandle$1 = function () {
	    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
	    return {
	      selector: getSelector(dragHandle.contextId),
	      styles: {
	        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
	        resting: grabCursor,
	        dragging: noPointerEvents,
	        dropAnimating: grabCursor
	      }
	    };
	  }();

	  var draggable$1 = function () {
	    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
	    return {
	      selector: getSelector(draggable.contextId),
	      styles: {
	        dragging: transition,
	        dropAnimating: transition,
	        userCancel: transition
	      }
	    };
	  }();

	  var droppable$1 = {
	    selector: getSelector(droppable.contextId),
	    styles: {
	      always: "overflow-anchor: none;"
	    }
	  };
	  var body = {
	    selector: 'body',
	    styles: {
	      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
	    }
	  };
	  var rules = [draggable$1, dragHandle$1, droppable$1, body];
	  return {
	    always: getStyles(rules, 'always'),
	    resting: getStyles(rules, 'resting'),
	    dragging: getStyles(rules, 'dragging'),
	    dropAnimating: getStyles(rules, 'dropAnimating'),
	    userCancel: getStyles(rules, 'userCancel')
	  };
	});

	var useIsomorphicLayoutEffect$1 = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

	var getHead = function getHead() {
	  var head = document.querySelector('head');
	  !head ?  invariant(false, 'Cannot find the head to append a style to')  : void 0;
	  return head;
	};

	var createStyleEl = function createStyleEl() {
	  var el = document.createElement('style');
	  el.type = 'text/css';
	  return el;
	};

	function useStyleMarshal(contextId) {
	  var styles = useMemo(function () {
	    return getStyles$1(contextId);
	  }, [contextId]);
	  var alwaysRef = React.useRef(null);
	  var dynamicRef = React.useRef(null);
	  var setDynamicStyle = useCallback(memoizeOne(function (proposed) {
	    var el = dynamicRef.current;
	    !el ?  invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }), []);
	  var setAlwaysStyle = useCallback(function (proposed) {
	    var el = alwaysRef.current;
	    !el ?  invariant(false, 'Cannot set dynamic style element if it is not set')  : void 0;
	    el.textContent = proposed;
	  }, []);
	  useIsomorphicLayoutEffect$1(function () {
	    !(!alwaysRef.current && !dynamicRef.current) ?  invariant(false, 'style elements already mounted')  : void 0;
	    var always = createStyleEl();
	    var dynamic = createStyleEl();
	    alwaysRef.current = always;
	    dynamicRef.current = dynamic;
	    always.setAttribute(prefix$2 + "-always", contextId);
	    dynamic.setAttribute(prefix$2 + "-dynamic", contextId);
	    getHead().appendChild(always);
	    getHead().appendChild(dynamic);
	    setAlwaysStyle(styles.always);
	    setDynamicStyle(styles.resting);
	    return function () {
	      var remove = function remove(ref) {
	        var current = ref.current;
	        !current ?  invariant(false, 'Cannot unmount ref as it is not set')  : void 0;
	        getHead().removeChild(current);
	        ref.current = null;
	      };

	      remove(alwaysRef);
	      remove(dynamicRef);
	    };
	  }, [setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
	  var dragging = useCallback(function () {
	    return setDynamicStyle(styles.dragging);
	  }, [setDynamicStyle, styles.dragging]);
	  var dropping = useCallback(function (reason) {
	    if (reason === 'DROP') {
	      setDynamicStyle(styles.dropAnimating);
	      return;
	    }

	    setDynamicStyle(styles.userCancel);
	  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
	  var resting = useCallback(function () {
	    if (!dynamicRef.current) {
	      return;
	    }

	    setDynamicStyle(styles.resting);
	  }, [setDynamicStyle, styles.resting]);
	  var marshal = useMemo(function () {
	    return {
	      dragging: dragging,
	      dropping: dropping,
	      resting: resting
	    };
	  }, [dragging, dropping, resting]);
	  return marshal;
	}

	var getWindowFromEl = (function (el) {
	  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
	});

	function isHtmlElement(el) {
	  return el instanceof getWindowFromEl(el).HTMLElement;
	}

	var throwIfRefIsInvalid = (function (ref) {
	  !(ref && isHtmlElement(ref)) ?  invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ")  : void 0;
	});

	function getDragHandle(contextId, draggableId) {
	  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
	  var possible = toArray(document.querySelectorAll(selector));

	  if (!possible.length) {
	     warning("Unable to find any drag handles in the context \"" + contextId + "\"") ;
	    return null;
	  }

	  var handle = find(possible, function (el) {
	    return el.getAttribute(dragHandle.draggableId) === draggableId;
	  });

	  if (!handle) {
	     warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") ;
	    return null;
	  }

	  if (!isHtmlElement(handle)) {
	     warning('drag handle needs to be a HTMLElement') ;
	    return null;
	  }

	  return handle;
	}

	function useFocusMarshal(contextId) {
	  var entriesRef = React.useRef({});
	  var recordRef = React.useRef(null);
	  var restoreFocusFrameRef = React.useRef(null);
	  var register = useCallback(function register(id, focus) {
	    var entry = {
	      id: id,
	      focus: focus
	    };
	    entriesRef.current[id] = entry;
	    return function unregister() {
	      var entries = entriesRef.current;
	      var current = entries[id];

	      if (current !== entry) {
	        delete entries[id];
	      }
	    };
	  }, []);
	  var tryGiveFocus = useCallback(function tryGiveFocus(tryGiveFocusTo) {
	    var handle = getDragHandle(contextId, tryGiveFocusTo);

	    if (handle && handle !== document.activeElement) {
	      handle.focus();
	    }
	  }, [contextId]);
	  var tryShiftRecord = useCallback(function tryShiftRecord(previous, redirectTo) {
	    if (recordRef.current === previous) {
	      recordRef.current = redirectTo;
	    }
	  }, []);
	  var tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded() {
	    restoreFocusFrameRef.current = requestAnimationFrame(function () {
	      restoreFocusFrameRef.current = null;
	      var record = recordRef.current;

	      if (record) {
	        tryGiveFocus(record);
	      }
	    });
	  }, [tryGiveFocus]);

	  function tryRecordFocus(id) {
	    recordRef.current = null;
	    var focused = document.activeElement;

	    if (!focused) {
	      return;
	    }

	    if (focused.getAttribute(dragHandle.draggableId) !== id) {
	      return;
	    }

	    recordRef.current = id;
	  }

	  useIsomorphicLayoutEffect$1(function () {
	    return function clearFrameOnUnmount() {
	      var frameId = restoreFocusFrameRef.current;

	      if (frameId) {
	        cancelAnimationFrame(frameId);
	      }
	    };
	  }, []);
	  var marshal = useMemo(function () {
	    return {
	      register: register,
	      tryRecordFocus: tryRecordFocus,
	      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
	      tryShiftRecord: tryShiftRecord
	    };
	  }, [register, tryRestoreFocusRecorded, tryShiftRecord]);
	  return marshal;
	}

	function createRegistry() {
	  var entries = {
	    draggables: {},
	    droppables: {}
	  };
	  var subscribers = [];

	  function subscribe(cb) {
	    subscribers.push(cb);
	    return function unsubscribe() {
	      var index = subscribers.indexOf(cb);

	      if (index === -1) {
	        return;
	      }

	      subscribers.splice(index, 1);
	    };
	  }

	  function notify(event) {
	    if (subscribers.length) {
	      subscribers.forEach(function (cb) {
	        return cb(event);
	      });
	    }
	  }

	  function findDraggableById(id) {
	    return entries.draggables[id] || null;
	  }

	  function getDraggableById(id) {
	    var entry = findDraggableById(id);
	    !entry ?  invariant(false, "Cannot find draggable entry with id [" + id + "]")  : void 0;
	    return entry;
	  }

	  var draggableAPI = {
	    register: function register(entry) {
	      entries.draggables[entry.descriptor.id] = entry;
	      notify({
	        type: 'ADDITION',
	        value: entry
	      });
	    },
	    update: function update(entry, last) {
	      var current = entries.draggables[last.descriptor.id];

	      if (!current) {
	        return;
	      }

	      if (current.uniqueId !== entry.uniqueId) {
	        return;
	      }

	      delete entries.draggables[last.descriptor.id];
	      entries.draggables[entry.descriptor.id] = entry;
	    },
	    unregister: function unregister(entry) {
	      var draggableId = entry.descriptor.id;
	      var current = findDraggableById(draggableId);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.draggables[draggableId];
	      notify({
	        type: 'REMOVAL',
	        value: entry.descriptor
	      });
	    },
	    getById: getDraggableById,
	    findById: findDraggableById,
	    exists: function exists(id) {
	      return Boolean(findDraggableById(id));
	    },
	    getAllByType: function getAllByType(type) {
	      return values$2(entries.draggables).filter(function (entry) {
	        return entry.descriptor.type === type;
	      });
	    }
	  };

	  function findDroppableById(id) {
	    return entries.droppables[id] || null;
	  }

	  function getDroppableById(id) {
	    var entry = findDroppableById(id);
	    !entry ?  invariant(false, "Cannot find droppable entry with id [" + id + "]")  : void 0;
	    return entry;
	  }

	  var droppableAPI = {
	    register: function register(entry) {
	      entries.droppables[entry.descriptor.id] = entry;
	    },
	    unregister: function unregister(entry) {
	      var current = findDroppableById(entry.descriptor.id);

	      if (!current) {
	        return;
	      }

	      if (entry.uniqueId !== current.uniqueId) {
	        return;
	      }

	      delete entries.droppables[entry.descriptor.id];
	    },
	    getById: getDroppableById,
	    findById: findDroppableById,
	    exists: function exists(id) {
	      return Boolean(findDroppableById(id));
	    },
	    getAllByType: function getAllByType(type) {
	      return values$2(entries.droppables).filter(function (entry) {
	        return entry.descriptor.type === type;
	      });
	    }
	  };

	  function clean() {
	    entries.draggables = {};
	    entries.droppables = {};
	    subscribers.length = 0;
	  }

	  return {
	    draggable: draggableAPI,
	    droppable: droppableAPI,
	    subscribe: subscribe,
	    clean: clean
	  };
	}

	function useRegistry() {
	  var registry = useMemo(createRegistry, []);
	  React.useEffect(function () {
	    return function unmount() {
	      requestAnimationFrame(registry.clean);
	    };
	  }, [registry]);
	  return registry;
	}

	var StoreContext = React__default.createContext(null);

	var getBodyElement = (function () {
	  var body = document.body;
	  !body ?  invariant(false, 'Cannot find document.body')  : void 0;
	  return body;
	});

	var visuallyHidden = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  margin: '-1px',
	  border: '0',
	  padding: '0',
	  overflow: 'hidden',
	  clip: 'rect(0 0 0 0)',
	  'clip-path': 'inset(100%)'
	};

	var getId = function getId(contextId) {
	  return "rbd-announcement-" + contextId;
	};
	function useAnnouncer(contextId) {
	  var id = useMemo(function () {
	    return getId(contextId);
	  }, [contextId]);
	  var ref = React.useRef(null);
	  React.useEffect(function () {
	    !!ref.current ?  invariant(false, 'Announcement node already mounted')  : void 0;
	    var el = document.createElement('div');
	    ref.current = el;
	    el.id = id;
	    el.setAttribute('aria-live', 'assertive');
	    el.setAttribute('role', 'log');
	    el.setAttribute('aria-atomic', 'true');

	    assign$1(el.style, visuallyHidden);

	    getBodyElement().appendChild(el);
	    return function () {
	      setTimeout(function remove() {
	        var toBeRemoved = ref.current;
	        !toBeRemoved ?  invariant(false, 'Cannot unmount announcement node')  : void 0;
	        getBodyElement().removeChild(toBeRemoved);
	        ref.current = null;
	      });
	    };
	  }, [id]);
	  var announce = useCallback(function (message) {
	    var el = ref.current;

	    if (el) {
	      el.textContent = message;
	      return;
	    }

	     warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") ;
	  }, []);
	  return announce;
	}

	var getId$1 = function getId(contextId) {
	  return "rbd-lift-instruction-" + contextId;
	};
	function useLiftInstruction(contextId, liftInstruction) {
	  var id = useMemo(function () {
	    return getId$1(contextId);
	  }, [contextId]);
	  var ref = React.useRef(null);
	  React.useEffect(function mount() {
	    !!ref.current ?  invariant(false, 'Description node already mounted')  : void 0;
	    var el = document.createElement('div');
	    ref.current = el;
	    el.id = id;
	    el.textContent = liftInstruction;

	    assign$1(el.style, visuallyHidden);

	    getBodyElement().appendChild(el);
	    return function unmount() {
	      var toBeRemoved = ref.current;
	      !toBeRemoved ?  invariant(false, 'Cannot unmount description node')  : void 0;
	      getBodyElement().removeChild(toBeRemoved);
	      ref.current = null;
	    };
	  }, [id, liftInstruction]);
	  return id;
	}

	var AppContext = React__default.createContext(null);

	var peerDependencies = {
		react: "^16.8.5"
	};

	var semver = /(\d+)\.(\d+)\.(\d+)/;

	var getVersion = function getVersion(value) {
	  var result = semver.exec(value);
	  !(result != null) ?  invariant(false, "Unable to parse React version " + value)  : void 0;
	  var major = Number(result[1]);
	  var minor = Number(result[2]);
	  var patch = Number(result[3]);
	  return {
	    major: major,
	    minor: minor,
	    patch: patch,
	    raw: value
	  };
	};

	var isSatisfied = function isSatisfied(expected, actual) {
	  if (actual.major > expected.major) {
	    return true;
	  }

	  if (actual.major < expected.major) {
	    return false;
	  }

	  if (actual.minor > expected.minor) {
	    return true;
	  }

	  if (actual.minor < expected.minor) {
	    return false;
	  }

	  return actual.patch >= expected.patch;
	};

	var checkReactVersion = (function (peerDepValue, actualValue) {
	  var peerDep = getVersion(peerDepValue);
	  var actual = getVersion(actualValue);

	  if (isSatisfied(peerDep, actual)) {
	    return;
	  }

	   warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") ;
	});

	var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
	var checkDoctype = (function (doc) {
	  var doctype = doc.doctype;

	  if (!doctype) {
	     warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") ;
	    return;
	  }

	  if (doctype.name.toLowerCase() !== 'html') {
	     warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") ;
	  }

	  if (doctype.publicId !== '') {
	     warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") ;
	  }
	});

	function useStartupValidation() {
	  React.useEffect(function () {

	    checkReactVersion(peerDependencies.react, React__default.version);
	    checkDoctype(document);
	  }, []);
	}

	function usePrevious(current) {
	  var ref = React.useRef(current);
	  React.useEffect(function () {
	    ref.current = current;
	  });
	  return ref;
	}

	function create$2() {
	  var lock = null;

	  function isClaimed() {
	    return Boolean(lock);
	  }

	  function isActive(value) {
	    return value === lock;
	  }

	  function claim(abandon) {
	    !!lock ?  invariant(false, 'Cannot claim lock as it is already claimed')  : void 0;
	    var newLock = {
	      abandon: abandon
	    };
	    lock = newLock;
	    return newLock;
	  }

	  function release() {
	    !lock ?  invariant(false, 'Cannot release lock when there is no lock')  : void 0;
	    lock = null;
	  }

	  function tryAbandon() {
	    if (lock) {
	      lock.abandon();
	      release();
	    }
	  }

	  return {
	    isClaimed: isClaimed,
	    isActive: isActive,
	    claim: claim,
	    release: release,
	    tryAbandon: tryAbandon
	  };
	}

	var tab = 9;
	var enter = 13;
	var escape = 27;
	var space = 32;
	var pageUp = 33;
	var pageDown = 34;
	var end = 35;
	var home = 36;
	var arrowLeft = 37;
	var arrowUp = 38;
	var arrowRight = 39;
	var arrowDown = 40;

	var _preventedKeys;
	var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
	var preventStandardKeyEvents = (function (event) {
	  if (preventedKeys[event.keyCode]) {
	    event.preventDefault();
	  }
	});

	var supportedEventName = function () {
	  var base = 'visibilitychange';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
	  var supported = find(candidates, function (eventName) {
	    return "on" + eventName in document;
	  });
	  return supported || base;
	}();

	function noop$1() {}

	var primaryButton = 0;
	var sloppyClickThreshold = 5;

	function isSloppyClickThresholdExceeded(original, current) {
	  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
	}

	var idle$1 = {
	  type: 'IDLE'
	};

	function getCaptureBindings(_ref) {
	  var cancel = _ref.cancel,
	      completed = _ref.completed,
	      getPhase = _ref.getPhase,
	      setPhase = _ref.setPhase;
	  return [{
	    eventName: 'mousemove',
	    fn: function fn(event) {
	      var button = event.button,
	          clientX = event.clientX,
	          clientY = event.clientY;

	      if (button !== primaryButton) {
	        return;
	      }

	      var point = {
	        x: clientX,
	        y: clientY
	      };
	      var phase = getPhase();

	      if (phase.type === 'DRAGGING') {
	        event.preventDefault();
	        phase.actions.move(point);
	        return;
	      }

	      !(phase.type === 'PENDING') ?  invariant(false, 'Cannot be IDLE')  : void 0;
	      var pending = phase.point;

	      if (!isSloppyClickThresholdExceeded(pending, point)) {
	        return;
	      }

	      event.preventDefault();
	      var actions = phase.actions.fluidLift(pending);
	      setPhase({
	        type: 'DRAGGING',
	        actions: actions
	      });
	    }
	  }, {
	    eventName: 'mouseup',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: function fn(event) {
	      if (getPhase().type === 'DRAGGING') {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type === 'PENDING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'scroll',
	    options: {
	      passive: true,
	      capture: false
	    },
	    fn: function fn() {
	      if (getPhase().type === 'PENDING') {
	        cancel();
	      }
	    }
	  }, {
	    eventName: 'webkitmouseforcedown',
	    fn: function fn(event) {
	      var phase = getPhase();
	      !(phase.type !== 'IDLE') ?  invariant(false, 'Unexpected phase')  : void 0;

	      if (phase.actions.shouldRespectForcePress()) {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useMouseSensor(api) {
	  var phaseRef = React.useRef(idle$1);
	  var unbindEventsRef = React.useRef(noop$1);
	  var startCaptureBinding = useMemo(function () {
	    return {
	      eventName: 'mousedown',
	      fn: function onMouseDown(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        if (event.button !== primaryButton) {
	          return;
	        }

	        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var actions = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!actions) {
	          return;
	        }

	        event.preventDefault();
	        var point = {
	          x: event.clientX,
	          y: event.clientY
	        };
	        unbindEventsRef.current();
	        startPendingDrag(actions, point);
	      }
	    };
	  }, [api]);
	  var preventForcePressBinding = useMemo(function () {
	    return {
	      eventName: 'webkitmouseforcewillbegin',
	      fn: function fn(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        var id = api.findClosestDraggableId(event);

	        if (!id) {
	          return;
	        }

	        var options = api.findOptionsForDraggable(id);

	        if (!options) {
	          return;
	        }

	        if (options.shouldRespectForcePress) {
	          return;
	        }

	        if (!api.canGetLock(id)) {
	          return;
	        }

	        event.preventDefault();
	      }
	    };
	  }, [api]);
	  var listenForCapture = useCallback(function listenForCapture() {
	    var options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
	  }, [preventForcePressBinding, startCaptureBinding]);
	  var stop = useCallback(function () {
	    var current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    phaseRef.current = idle$1;
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture]);
	  var cancel = useCallback(function () {
	    var phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  var bindCapturingEvents = useCallback(function bindCapturingEvents() {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    var bindings = getCaptureBindings({
	      cancel: cancel,
	      completed: stop,
	      getPhase: function getPhase() {
	        return phaseRef.current;
	      },
	      setPhase: function setPhase(phase) {
	        phaseRef.current = phase;
	      }
	    });
	    unbindEventsRef.current = bindEvents(window, bindings, options);
	  }, [cancel, stop]);
	  var startPendingDrag = useCallback(function startPendingDrag(actions, point) {
	    !(phaseRef.current.type === 'IDLE') ?  invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    phaseRef.current = {
	      type: 'PENDING',
	      point: point,
	      actions: actions
	    };
	    bindCapturingEvents();
	  }, [bindCapturingEvents]);
	  useIsomorphicLayoutEffect$1(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	var _scrollJumpKeys;

	function noop$2() {}

	var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

	function getDraggingBindings(actions, stop) {
	  function cancel() {
	    stop();
	    actions.cancel();
	  }

	  function drop() {
	    stop();
	    actions.drop();
	  }

	  return [{
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (event.keyCode === escape) {
	        event.preventDefault();
	        cancel();
	        return;
	      }

	      if (event.keyCode === space) {
	        event.preventDefault();
	        drop();
	        return;
	      }

	      if (event.keyCode === arrowDown) {
	        event.preventDefault();
	        actions.moveDown();
	        return;
	      }

	      if (event.keyCode === arrowUp) {
	        event.preventDefault();
	        actions.moveUp();
	        return;
	      }

	      if (event.keyCode === arrowRight) {
	        event.preventDefault();
	        actions.moveRight();
	        return;
	      }

	      if (event.keyCode === arrowLeft) {
	        event.preventDefault();
	        actions.moveLeft();
	        return;
	      }

	      if (scrollJumpKeys[event.keyCode]) {
	        event.preventDefault();
	        return;
	      }

	      preventStandardKeyEvents(event);
	    }
	  }, {
	    eventName: 'mousedown',
	    fn: cancel
	  }, {
	    eventName: 'mouseup',
	    fn: cancel
	  }, {
	    eventName: 'click',
	    fn: cancel
	  }, {
	    eventName: 'touchstart',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'wheel',
	    fn: cancel,
	    options: {
	      passive: true
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useKeyboardSensor(api) {
	  var unbindEventsRef = React.useRef(noop$2);
	  var startCaptureBinding = useMemo(function () {
	    return {
	      eventName: 'keydown',
	      fn: function onKeyDown(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        if (event.keyCode !== space) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var preDrag = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!preDrag) {
	          return;
	        }

	        event.preventDefault();
	        var isCapturing = true;
	        var actions = preDrag.snapLift();
	        unbindEventsRef.current();

	        function stop() {
	          !isCapturing ?  invariant(false, 'Cannot stop capturing a keyboard drag when not capturing')  : void 0;
	          isCapturing = false;
	          unbindEventsRef.current();
	          listenForCapture();
	        }

	        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
	          capture: true,
	          passive: false
	        });
	      }
	    };
	  }, [api]);
	  var listenForCapture = useCallback(function tryStartCapture() {
	    var options = {
	      passive: false,
	      capture: true
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  useIsomorphicLayoutEffect$1(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	    };
	  }, [listenForCapture]);
	}

	var idle$2 = {
	  type: 'IDLE'
	};
	var timeForLongPress = 120;
	var forcePressThreshold = 0.15;

	function getWindowBindings(_ref) {
	  var cancel = _ref.cancel,
	      getPhase = _ref.getPhase;
	  return [{
	    eventName: 'orientationchange',
	    fn: cancel
	  }, {
	    eventName: 'resize',
	    fn: cancel
	  }, {
	    eventName: 'contextmenu',
	    fn: function fn(event) {
	      event.preventDefault();
	    }
	  }, {
	    eventName: 'keydown',
	    fn: function fn(event) {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      if (event.keyCode === escape) {
	        event.preventDefault();
	      }

	      cancel();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function getTargetBindings(_ref2) {
	  var cancel = _ref2.cancel,
	      completed = _ref2.completed,
	      getPhase = _ref2.getPhase;
	  return [{
	    eventName: 'touchmove',
	    options: {
	      capture: false
	    },
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      phase.hasMoved = true;
	      var _event$touches$ = event.touches[0],
	          clientX = _event$touches$.clientX,
	          clientY = _event$touches$.clientY;
	      var point = {
	        x: clientX,
	        y: clientY
	      };
	      event.preventDefault();
	      phase.actions.move(point);
	    }
	  }, {
	    eventName: 'touchend',
	    fn: function fn(event) {
	      var phase = getPhase();

	      if (phase.type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      phase.actions.drop({
	        shouldBlockNextClick: true
	      });
	      completed();
	    }
	  }, {
	    eventName: 'touchcancel',
	    fn: function fn(event) {
	      if (getPhase().type !== 'DRAGGING') {
	        cancel();
	        return;
	      }

	      event.preventDefault();
	      cancel();
	    }
	  }, {
	    eventName: 'touchforcechange',
	    fn: function fn(event) {
	      var phase = getPhase();
	      !(phase.type !== 'IDLE') ?  invariant(false)  : void 0;
	      var touch = event.touches[0];
	      var isForcePress = touch.force >= forcePressThreshold;

	      if (!isForcePress) {
	        return;
	      }

	      var shouldRespect = phase.actions.shouldRespectForcePress();

	      if (phase.type === 'PENDING') {
	        if (shouldRespect) {
	          cancel();
	        }

	        return;
	      }

	      if (shouldRespect) {
	        if (phase.hasMoved) {
	          event.preventDefault();
	          return;
	        }

	        cancel();
	        return;
	      }

	      event.preventDefault();
	    }
	  }, {
	    eventName: supportedEventName,
	    fn: cancel
	  }];
	}

	function useMouseSensor$1(api) {
	  var phaseRef = React.useRef(idle$2);
	  var unbindEventsRef = React.useRef(noop$1);
	  var getPhase = useCallback(function getPhase() {
	    return phaseRef.current;
	  }, []);
	  var setPhase = useCallback(function setPhase(phase) {
	    phaseRef.current = phase;
	  }, []);
	  var startCaptureBinding = useMemo(function () {
	    return {
	      eventName: 'touchstart',
	      fn: function onTouchStart(event) {
	        if (event.defaultPrevented) {
	          return;
	        }

	        var draggableId = api.findClosestDraggableId(event);

	        if (!draggableId) {
	          return;
	        }

	        var actions = api.tryGetLock(draggableId, stop, {
	          sourceEvent: event
	        });

	        if (!actions) {
	          return;
	        }

	        var touch = event.touches[0];
	        var clientX = touch.clientX,
	            clientY = touch.clientY;
	        var point = {
	          x: clientX,
	          y: clientY
	        };
	        var target = event.target;
	        !isHtmlElement(target) ?  invariant(false, 'Expected touch target to be an element')  : void 0;
	        unbindEventsRef.current();
	        startPendingDrag(actions, point, target);
	      }
	    };
	  }, [api]);
	  var listenForCapture = useCallback(function listenForCapture() {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
	  }, [startCaptureBinding]);
	  var stop = useCallback(function () {
	    var current = phaseRef.current;

	    if (current.type === 'IDLE') {
	      return;
	    }

	    if (current.type === 'PENDING') {
	      clearTimeout(current.longPressTimerId);
	    }

	    setPhase(idle$2);
	    unbindEventsRef.current();
	    listenForCapture();
	  }, [listenForCapture, setPhase]);
	  var cancel = useCallback(function () {
	    var phase = phaseRef.current;
	    stop();

	    if (phase.type === 'DRAGGING') {
	      phase.actions.cancel({
	        shouldBlockNextClick: true
	      });
	    }

	    if (phase.type === 'PENDING') {
	      phase.actions.abort();
	    }
	  }, [stop]);
	  var bindCapturingEvents = useCallback(function bindCapturingEvents(target) {
	    var options = {
	      capture: true,
	      passive: false
	    };
	    var args = {
	      cancel: cancel,
	      completed: stop,
	      getPhase: getPhase
	    };
	    var unbindTarget = bindEvents(target, getTargetBindings(args), options);
	    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

	    unbindEventsRef.current = function unbindAll() {
	      unbindTarget();
	      unbindWindow();
	    };
	  }, [cancel, getPhase, stop]);
	  var startDragging = useCallback(function startDragging() {
	    var phase = getPhase();
	    !(phase.type === 'PENDING') ?  invariant(false, "Cannot start dragging from phase " + phase.type)  : void 0;
	    var actions = phase.actions.fluidLift(phase.point);
	    setPhase({
	      type: 'DRAGGING',
	      actions: actions,
	      hasMoved: false
	    });
	  }, [getPhase, setPhase]);
	  var startPendingDrag = useCallback(function startPendingDrag(actions, point, target) {
	    !(getPhase().type === 'IDLE') ?  invariant(false, 'Expected to move from IDLE to PENDING drag')  : void 0;
	    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
	    setPhase({
	      type: 'PENDING',
	      point: point,
	      actions: actions,
	      longPressTimerId: longPressTimerId
	    });
	    bindCapturingEvents(target);
	  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
	  useIsomorphicLayoutEffect$1(function mount() {
	    listenForCapture();
	    return function unmount() {
	      unbindEventsRef.current();
	      var phase = getPhase();

	      if (phase.type === 'PENDING') {
	        clearTimeout(phase.longPressTimerId);
	        setPhase(idle$2);
	      }
	    };
	  }, [getPhase, listenForCapture, setPhase]);
	  useIsomorphicLayoutEffect$1(function webkitHack() {
	    var unbind = bindEvents(window, [{
	      eventName: 'touchmove',
	      fn: function fn() {},
	      options: {
	        capture: false,
	        passive: false
	      }
	    }]);
	    return unbind;
	  }, []);
	}

	function useValidateSensorHooks(sensorHooks) {
	  var previousRef = usePrevious(sensorHooks);
	  React.useEffect(function () {
	    {
	      !(previousRef.current.length === sensorHooks.length) ?  invariant(false, 'Cannot change the amount of sensor hooks after mounting')  : void 0;
	    }
	  });
	}

	var interactiveTagNames = {
	  input: true,
	  button: true,
	  textarea: true,
	  select: true,
	  option: true,
	  optgroup: true,
	  video: true,
	  audio: true
	};

	function isAnInteractiveElement(parent, current) {
	  if (current == null) {
	    return false;
	  }

	  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

	  if (hasAnInteractiveTag) {
	    return true;
	  }

	  var attribute = current.getAttribute('contenteditable');

	  if (attribute === 'true' || attribute === '') {
	    return true;
	  }

	  if (current === parent) {
	    return false;
	  }

	  return isAnInteractiveElement(parent, current.parentElement);
	}

	function isEventInInteractiveElement(draggable, event) {
	  var target = event.target;

	  if (!isHtmlElement(target)) {
	    return false;
	  }

	  return isAnInteractiveElement(draggable, target);
	}

	var getBorderBoxCenterPosition = (function (el) {
	  return getRect(el.getBoundingClientRect()).center;
	});

	var supportedMatchesName = function () {
	  var base = 'matches';

	  if (typeof document === 'undefined') {
	    return base;
	  }

	  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
	  var value = find(candidates, function (name) {
	    return name in Element.prototype;
	  });
	  return value || base;
	}();

	function closestPonyfill(el, selector) {
	  if (el == null) {
	    return null;
	  }

	  if (el[supportedMatchesName](selector)) {
	    return el;
	  }

	  return closestPonyfill(el.parentElement, selector);
	}

	function closest$1(el, selector) {
	  return closestPonyfill(el, selector);
	}

	function getSelector(contextId) {
	  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
	}

	function tryGetClosestDraggableIdFromEvent(contextId, event) {
	  var target = event.target;

	  if (!isHtmlElement(target)) {
	     warning('event.target must be a HTMLElement') ;
	    return null;
	  }

	  var selector = getSelector(contextId);
	  var handle = closest$1(target, selector);

	  if (!handle) {
	    return null;
	  }

	  return handle.getAttribute(dragHandle.draggableId);
	}

	function tryGetDraggable(contextId, draggableId) {
	  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
	  var possible = toArray(document.querySelectorAll(selector));
	  var draggable$1 = find(possible, function (el) {
	    return el.getAttribute(draggable.id) === draggableId;
	  });

	  if (!draggable$1) {
	    return null;
	  }

	  if (!isHtmlElement(draggable$1)) {
	     warning('Draggable element is not a HTMLElement') ;
	    return null;
	  }

	  return draggable$1;
	}

	function preventDefault(event) {
	  event.preventDefault();
	}

	function _isActive(_ref) {
	  var expected = _ref.expected,
	      phase = _ref.phase,
	      isLockActive = _ref.isLockActive,
	      shouldWarn = _ref.shouldWarn;

	  if (!isLockActive()) {
	    if (shouldWarn) {
	       warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") ;
	    }

	    return false;
	  }

	  if (expected !== phase) {
	    if (shouldWarn) {
	       warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") ;
	    }

	    return false;
	  }

	  return true;
	}

	function canStart(_ref2) {
	  var lockAPI = _ref2.lockAPI,
	      store = _ref2.store,
	      registry = _ref2.registry,
	      draggableId = _ref2.draggableId;

	  if (lockAPI.isClaimed()) {
	    return false;
	  }

	  var entry = registry.draggable.findById(draggableId);

	  if (!entry) {
	     warning("Unable to find draggable with id: " + draggableId) ;
	    return false;
	  }

	  if (!entry.options.isEnabled) {
	    return false;
	  }

	  if (!canStartDrag(store.getState(), draggableId)) {
	    return false;
	  }

	  return true;
	}

	function tryStart(_ref3) {
	  var lockAPI = _ref3.lockAPI,
	      contextId = _ref3.contextId,
	      store = _ref3.store,
	      registry = _ref3.registry,
	      draggableId = _ref3.draggableId,
	      forceSensorStop = _ref3.forceSensorStop,
	      sourceEvent = _ref3.sourceEvent;
	  var shouldStart = canStart({
	    lockAPI: lockAPI,
	    store: store,
	    registry: registry,
	    draggableId: draggableId
	  });

	  if (!shouldStart) {
	    return null;
	  }

	  var entry = registry.draggable.getById(draggableId);
	  var el = tryGetDraggable(contextId, entry.descriptor.id);

	  if (!el) {
	     warning("Unable to find draggable element with id: " + draggableId) ;
	    return null;
	  }

	  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
	    return null;
	  }

	  var lock = lockAPI.claim(forceSensorStop || noop$1);
	  var phase = 'PRE_DRAG';

	  function getShouldRespectForcePress() {
	    var item = registry.draggable.getById(draggableId);
	    return item.options.shouldRespectForcePress;
	  }

	  function isLockActive() {
	    return lockAPI.isActive(lock);
	  }

	  function tryDispatch(expected, getAction) {
	    if (_isActive({
	      expected: expected,
	      phase: phase,
	      isLockActive: isLockActive,
	      shouldWarn: true
	    })) {
	      store.dispatch(getAction());
	    }
	  }

	  var tryDispatchWhenDragging = tryDispatch.bind(this, 'DRAGGING');

	  function lift$1(args) {
	    function completed() {
	      lockAPI.release();
	      phase = 'COMPLETED';
	    }

	    if (phase !== 'PRE_DRAG') {
	      completed();
	      !(phase === 'PRE_DRAG') ?  invariant(false, "Cannot lift in phase " + phase)  : void 0;
	    }

	    store.dispatch(lift(args.liftActionArgs));
	    phase = 'DRAGGING';

	    function finish(reason, options) {
	      if (options === void 0) {
	        options = {
	          shouldBlockNextClick: false
	        };
	      }

	      args.cleanup();

	      if (options.shouldBlockNextClick) {
	        window.addEventListener('click', preventDefault, {
	          once: true,
	          passive: false,
	          capture: true
	        });
	      }

	      completed();
	      store.dispatch(drop({
	        reason: reason
	      }));
	    }

	    return _extends({
	      isActive: function isActive() {
	        return _isActive({
	          expected: 'DRAGGING',
	          phase: phase,
	          isLockActive: isLockActive,
	          shouldWarn: false
	        });
	      },
	      shouldRespectForcePress: getShouldRespectForcePress,
	      drop: function drop(options) {
	        return finish('DROP', options);
	      },
	      cancel: function cancel(options) {
	        return finish('CANCEL', options);
	      }
	    }, args.actions);
	  }

	  function fluidLift(clientSelection) {
	    var move$1 = rafSchd(function (client) {
	      tryDispatchWhenDragging(function () {
	        return move({
	          client: client
	        });
	      });
	    });
	    var api = lift$1({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection: clientSelection,
	        movementMode: 'FLUID'
	      },
	      cleanup: function cleanup() {
	        return move$1.cancel();
	      },
	      actions: {
	        move: move$1
	      }
	    });
	    return _extends({}, api, {
	      move: move$1
	    });
	  }

	  function snapLift() {
	    var actions = {
	      moveUp: function moveUp$1() {
	        return tryDispatchWhenDragging(moveUp);
	      },
	      moveRight: function moveRight$1() {
	        return tryDispatchWhenDragging(moveRight);
	      },
	      moveDown: function moveDown$1() {
	        return tryDispatchWhenDragging(moveDown);
	      },
	      moveLeft: function moveLeft$1() {
	        return tryDispatchWhenDragging(moveLeft);
	      }
	    };
	    return lift$1({
	      liftActionArgs: {
	        id: draggableId,
	        clientSelection: getBorderBoxCenterPosition(el),
	        movementMode: 'SNAP'
	      },
	      cleanup: noop$1,
	      actions: actions
	    });
	  }

	  function abortPreDrag() {
	    var shouldRelease = _isActive({
	      expected: 'PRE_DRAG',
	      phase: phase,
	      isLockActive: isLockActive,
	      shouldWarn: true
	    });

	    if (shouldRelease) {
	      lockAPI.release();
	    }
	  }

	  var preDrag = {
	    isActive: function isActive() {
	      return _isActive({
	        expected: 'PRE_DRAG',
	        phase: phase,
	        isLockActive: isLockActive,
	        shouldWarn: false
	      });
	    },
	    shouldRespectForcePress: getShouldRespectForcePress,
	    fluidLift: fluidLift,
	    snapLift: snapLift,
	    abort: abortPreDrag
	  };
	  return preDrag;
	}

	var defaultSensors = [useMouseSensor, useKeyboardSensor, useMouseSensor$1];
	function useSensorMarshal(_ref4) {
	  var contextId = _ref4.contextId,
	      store = _ref4.store,
	      registry = _ref4.registry,
	      customSensors = _ref4.customSensors,
	      enableDefaultSensors = _ref4.enableDefaultSensors;
	  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
	  var lockAPI = React.useState(function () {
	    return create$2();
	  })[0];
	  var tryAbandonLock = useCallback(function tryAbandonLock(previous, current) {
	    if (previous.isDragging && !current.isDragging) {
	      lockAPI.tryAbandon();
	    }
	  }, [lockAPI]);
	  useIsomorphicLayoutEffect$1(function listenToStore() {
	    var previous = store.getState();
	    var unsubscribe = store.subscribe(function () {
	      var current = store.getState();
	      tryAbandonLock(previous, current);
	      previous = current;
	    });
	    return unsubscribe;
	  }, [lockAPI, store, tryAbandonLock]);
	  useIsomorphicLayoutEffect$1(function () {
	    return lockAPI.tryAbandon;
	  }, [lockAPI.tryAbandon]);
	  var canGetLock = useCallback(function (draggableId) {
	    return canStart({
	      lockAPI: lockAPI,
	      registry: registry,
	      store: store,
	      draggableId: draggableId
	    });
	  }, [lockAPI, registry, store]);
	  var tryGetLock = useCallback(function (draggableId, forceStop, options) {
	    return tryStart({
	      lockAPI: lockAPI,
	      registry: registry,
	      contextId: contextId,
	      store: store,
	      draggableId: draggableId,
	      forceSensorStop: forceStop,
	      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
	    });
	  }, [contextId, lockAPI, registry, store]);
	  var findClosestDraggableId = useCallback(function (event) {
	    return tryGetClosestDraggableIdFromEvent(contextId, event);
	  }, [contextId]);
	  var findOptionsForDraggable = useCallback(function (id) {
	    var entry = registry.draggable.findById(id);
	    return entry ? entry.options : null;
	  }, [registry.draggable]);
	  var tryReleaseLock = useCallback(lockAPI.tryAbandon, [lockAPI]);
	  var isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]);
	  var api = useMemo(function () {
	    return {
	      canGetLock: canGetLock,
	      tryGetLock: tryGetLock,
	      findClosestDraggableId: findClosestDraggableId,
	      findOptionsForDraggable: findOptionsForDraggable,
	      tryReleaseLock: tryReleaseLock,
	      isLockClaimed: isLockClaimed
	    };
	  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
	  useValidateSensorHooks(useSensors);

	  for (var i = 0; i < useSensors.length; i++) {
	    useSensors[i](api);
	  }
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is$2(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual$1(objA, objB) {
	  if (is$2(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty$2.call(objB, keysA[i]) || !is$2(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	var shallowEqual_1 = shallowEqual$1;

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
	  var currentListeners = [];
	  var nextListeners = currentListeners;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  function listen(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function () {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  function emit() {
	    currentListeners = nextListeners;
	    var listeners = currentListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(listeners, arguments);
	    }
	  }

	  return {
	    listen: listen,
	    emit: emit
	  };
	};
	});

	unwrapExports(lib);
	var lib_1 = lib.createChangeEmitter;

	var setStatic = function setStatic(key, value) {
	  return function (BaseComponent) {
	    /* eslint-disable no-param-reassign */
	    BaseComponent[key] = value;
	    /* eslint-enable no-param-reassign */

	    return BaseComponent;
	  };
	};

	var setDisplayName = function setDisplayName(displayName) {
	  return setStatic('displayName', displayName);
	};

	var getDisplayName = function getDisplayName(Component$$1) {
	  if (typeof Component$$1 === 'string') {
	    return Component$$1;
	  }

	  if (!Component$$1) {
	    return undefined;
	  }

	  return Component$$1.displayName || Component$$1.name || 'Component';
	};

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + "(" + getDisplayName(BaseComponent) + ")";
	};

	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);

	    var ShouldUpdate =
	    /*#__PURE__*/
	    function (_Component) {
	      _inheritsLoose$1(ShouldUpdate, _Component);

	      function ShouldUpdate() {
	        return _Component.apply(this, arguments) || this;
	      }

	      var _proto = ShouldUpdate.prototype;

	      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };

	      _proto.render = function render() {
	        return factory(this.props);
	      };

	      return ShouldUpdate;
	    }(React.Component);

	    {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
	    }

	    return ShouldUpdate;
	  };
	};

	var pure = function pure(BaseComponent) {
	  var hoc = shouldUpdate(function (props, nextProps) {
	    return !shallowEqual_1(props, nextProps);
	  });

	  {
	    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
	  }

	  return hoc(BaseComponent);
	};

	var createResponders = function createResponders(props) {
	  return {
	    onBeforeDragStart: props.onBeforeDragStart,
	    onDragStart: props.onDragStart,
	    onDragEnd: props.onDragEnd,
	    onDragUpdate: props.onDragUpdate
	  };
	};

	function getStore(lazyRef) {
	  !lazyRef.current ?  invariant(false, 'Could not find store from lazy ref')  : void 0;
	  return lazyRef.current;
	}

	function App(props) {
	  var contextId = props.contextId,
	      setOnError = props.setOnError,
	      sensors = props.sensors,
	      liftInstruction = props.liftInstruction,
	      childComponent = props.childComponent;
	  var lazyStoreRef = React.useRef(null);
	  var draggableRef = React.useRef(null);
	  useStartupValidation();
	  var lastPropsRef = usePrevious(props);
	  var getResponders = useCallback(function () {
	    return createResponders(lastPropsRef.current);
	  }, [lastPropsRef]);
	  var announce = useAnnouncer(contextId);
	  var liftInstructionId = useLiftInstruction(contextId, liftInstruction);
	  var styleMarshal = useStyleMarshal(contextId);
	  var lazyDispatch = useCallback(function (action) {
	    getStore(lazyStoreRef).dispatch(action);
	  }, []);
	  var callbacks = useMemo(function () {
	    return bindActionCreators({
	      publishWhileDragging: publishWhileDragging,
	      updateDroppableScroll: updateDroppableScroll,
	      updateDroppableIsEnabled: updateDroppableIsEnabled,
	      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
	      collectionStarting: collectionStarting
	    }, lazyDispatch);
	  }, [lazyDispatch]);
	  var registry = useRegistry();
	  var getDraggableRef = useCallback(function () {
	    return draggableRef.current;
	  }, []);
	  var dimensionMarshal = useMemo(function () {
	    return createDimensionMarshal(registry, callbacks, {
	      getContainer: getDraggableRef
	    });
	  }, [registry, callbacks, getDraggableRef]);
	  var modifiedScrollWindow = useCallback(function (change) {
	    var current = getStore(lazyStoreRef);

	    if (!getIsMovementAllowed()) {
	      return;
	    }

	    if (!draggableRef.current) {
	      return scrollWindow(change);
	    }

	    scrollContainer(draggableRef.current, change);
	  }, [getIsMovementAllowed]);
	  var autoScroller = useMemo(function () {
	    return createAutoScroller(_extends({
	      scrollWindow: modifiedScrollWindow,
	      scrollDroppable: dimensionMarshal.scrollDroppable
	    }, bindActionCreators({
	      move: move
	    }, lazyDispatch)));
	  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
	  var focusMarshal = useFocusMarshal(contextId);
	  var store = useMemo(function () {
	    return createStore$1({
	      announce: announce,
	      autoScroller: autoScroller,
	      dimensionMarshal: dimensionMarshal,
	      focusMarshal: focusMarshal,
	      getResponders: getResponders,
	      styleMarshal: styleMarshal
	    });
	  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

	  {
	    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
	       warning('unexpected store change') ;
	    }
	  }

	  lazyStoreRef.current = store;
	  var tryResetStore = useCallback(function () {
	    var current = getStore(lazyStoreRef);
	    var state = current.getState();

	    if (state.phase !== 'IDLE') {
	      current.dispatch(clean$1({
	        shouldFlush: true
	      }));
	    }
	  }, []);
	  setOnError(tryResetStore);
	  var getCanLift = useCallback(function (id) {
	    return canStartDrag(getStore(lazyStoreRef).getState(), id);
	  }, []);
	  var getIsMovementAllowed = useCallback(function () {
	    return isMovementAllowed(getStore(lazyStoreRef).getState());
	  }, []);
	  var appContext = useMemo(function () {
	    return {
	      marshal: dimensionMarshal,
	      focus: focusMarshal,
	      contextId: contextId,
	      canLift: getCanLift,
	      isMovementAllowed: getIsMovementAllowed,
	      liftInstructionId: liftInstructionId,
	      registry: registry,
	      lazyDispatch: lazyDispatch
	    };
	  }, [contextId, dimensionMarshal, focusMarshal, getCanLift, getIsMovementAllowed, liftInstructionId, registry, lazyDispatch]);
	  var notifyScrollToWindow = useCallback(function () {
	    var current = getStore(lazyStoreRef);

	    if (!getIsMovementAllowed()) {
	      return;
	    }

	    current.dispatch(moveByWindowScroll({
	      newScroll: getContainerScroll(draggableRef.current)
	    }));
	  }, [getIsMovementAllowed]);
	  var measuredRef = useCallback(function (ref) {
	    if (ref === null) {
	      return;
	    }

	    if (ref === draggableRef.current) {
	      return;
	    }

	    if (draggableRef.current) {
	      draggableRef.current.removeEventListener('scroll', notifyScrollToWindow);
	    }

	    draggableRef.current = ref;

	    if (ref) {
	      ref.addEventListener('scroll', notifyScrollToWindow);
	    }

	    throwIfRefIsInvalid(ref);
	  }, [notifyScrollToWindow]);
	  useSensorMarshal({
	    contextId: contextId,
	    store: store,
	    registry: registry,
	    customSensors: sensors,
	    enableDefaultSensors: props.enableDefaultSensors !== false
	  });
	  React.useEffect(function () {
	    return tryResetStore;
	  }, [tryResetStore]);
	  var ChildComponent = childComponent;
	  return React__default.createElement(AppContext.Provider, {
	    value: appContext
	  }, React__default.createElement(Provider, {
	    context: StoreContext,
	    store: store
	  }, ChildComponent ? React__default.createElement(ChildComponent, _extends({
	    measuredRef: measuredRef
	  }, props)) : props.children(measuredRef)));
	}

	var arePropsEqual = function arePropsEqual(prevProps, nextProps) {
	  if (prevProps !== nextProps) {
	    var isEqual = deepEqual_1(prevProps, nextProps);
	    return isEqual;
	  }

	  return prevProps === nextProps;
	};

	var App$1 = React.memo(App, arePropsEqual);

	var instanceCount = 0;
	function resetServerContext() {
	  instanceCount = 0;
	}
	function DragDropContext(props) {
	  var contextId = useMemo(function () {
	    return "" + instanceCount++;
	  }, []);
	  var liftInstruction = props.liftInstruction || preset.liftInstruction;
	  return React__default.createElement(ErrorBoundary, null, function (setOnError) {
	    return React__default.createElement(App$1, _extends({
	      setOnError: setOnError,
	      contextId: contextId,
	      liftInstruction: liftInstruction
	    }, props), props.children);
	  });
	}

	var isEqual$1 = function isEqual(base) {
	  return function (value) {
	    return base === value;
	  };
	};

	var isScroll = isEqual$1('scroll');
	var isAuto = isEqual$1('auto');
	var isVisible$1 = isEqual$1('visible');

	var isEither = function isEither(overflow, fn) {
	  return fn(overflow.overflowX) || fn(overflow.overflowY);
	};

	var isBoth = function isBoth(overflow, fn) {
	  return fn(overflow.overflowX) && fn(overflow.overflowY);
	};

	var isElementScrollable = function isElementScrollable(el) {
	  var style = window.getComputedStyle(el);
	  var overflow = {
	    overflowX: style.overflowX,
	    overflowY: style.overflowY
	  };
	  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
	};

	var isBodyScrollable = function isBodyScrollable() {

	  var body = getBodyElement();
	  var html = document.documentElement;
	  !html ?  invariant(false)  : void 0;

	  if (!isElementScrollable(body)) {
	    return false;
	  }

	  var htmlStyle = window.getComputedStyle(html);
	  var htmlOverflow = {
	    overflowX: htmlStyle.overflowX,
	    overflowY: htmlStyle.overflowY
	  };

	  if (isBoth(htmlOverflow, isVisible$1)) {
	    return false;
	  }

	   warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") ;
	  return false;
	};

	var getClosestScrollable = function getClosestScrollable(el) {
	  if (el == null) {
	    return null;
	  }

	  if (el === document.body) {
	    return isBodyScrollable() ? el : null;
	  }

	  if (el === document.documentElement) {
	    return null;
	  }

	  if (!isElementScrollable(el)) {
	    return getClosestScrollable(el.parentElement);
	  }

	  return el;
	};

	var checkForNestedScrollContainers = (function (scrollable) {
	  if (!scrollable) {
	    return;
	  }

	  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

	  if (!anotherScrollParent) {
	    return;
	  }

	   warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") ;
	});

	var getScroll$1 = (function (el) {
	  return {
	    x: el.scrollLeft,
	    y: el.scrollTop
	  };
	});

	var getIsFixed = function getIsFixed(el) {
	  if (!el) {
	    return false;
	  }

	  var style = window.getComputedStyle(el);

	  if (style.position === 'fixed') {
	    return true;
	  }

	  return getIsFixed(el.parentElement);
	};

	var getEnv = (function (start) {
	  var closestScrollable = getClosestScrollable(start);
	  var isFixedOnPage = getIsFixed(start);
	  return {
	    closestScrollable: closestScrollable,
	    isFixedOnPage: isFixedOnPage
	  };
	});

	var getClient = function getClient(targetRef, closestScrollable) {
	  var base = getBox(targetRef);

	  if (!closestScrollable) {
	    return base;
	  }

	  if (targetRef !== closestScrollable) {
	    return base;
	  }

	  var top = base.paddingBox.top - closestScrollable.scrollTop;
	  var left = base.paddingBox.left - closestScrollable.scrollLeft;
	  var bottom = top + closestScrollable.scrollHeight;
	  var right = left + closestScrollable.scrollWidth;
	  var paddingBox = {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left
	  };
	  var borderBox = expand(paddingBox, base.border);
	  var client = createBox({
	    borderBox: borderBox,
	    margin: base.margin,
	    border: base.border,
	    padding: base.padding
	  });
	  return client;
	};

	var getDimension = (function (_ref) {
	  var ref = _ref.ref,
	      descriptor = _ref.descriptor,
	      env = _ref.env,
	      windowScroll = _ref.windowScroll,
	      direction = _ref.direction,
	      isDropDisabled = _ref.isDropDisabled,
	      isCombineEnabled = _ref.isCombineEnabled,
	      shouldClipSubject = _ref.shouldClipSubject;
	  var closestScrollable = env.closestScrollable;
	  var client = getClient(ref, closestScrollable);
	  var page = withScroll(client, windowScroll);

	  var closest = function () {
	    if (!closestScrollable) {
	      return null;
	    }

	    var frameClient = getBox(closestScrollable);
	    var scrollSize = {
	      scrollHeight: closestScrollable.scrollHeight,
	      scrollWidth: closestScrollable.scrollWidth
	    };
	    return {
	      client: frameClient,
	      page: withScroll(frameClient, windowScroll),
	      scroll: getScroll$1(closestScrollable),
	      scrollSize: scrollSize,
	      shouldClipSubject: shouldClipSubject
	    };
	  }();

	  var dimension = getDroppableDimension({
	    descriptor: descriptor,
	    isEnabled: !isDropDisabled,
	    isCombineEnabled: isCombineEnabled,
	    isFixedOnPage: env.isFixedOnPage,
	    direction: direction,
	    client: client,
	    page: page,
	    closest: closest
	  });
	  return dimension;
	});

	function withoutPlaceholder(placeholder, fn) {
	  if (!placeholder) {
	    return fn();
	  }

	  var last = placeholder.style.display;
	  placeholder.style.display = 'none';
	  var result = fn();
	  placeholder.style.display = last;
	  return result;
	}

	var immediate = {
	  passive: false
	};
	var delayed = {
	  passive: true
	};
	var getListenerOptions = (function (options) {
	  return options.shouldPublishImmediately ? immediate : delayed;
	});

	function useRequiredContext(Context) {
	  var result = React.useContext(Context);
	  !result ?  invariant(false, 'Could not find required context')  : void 0;
	  return result;
	}

	var count = 0;
	function useUniqueId(prefix) {
	  var countRef = React.useRef(count++);
	  return prefix + "::" + countRef.current;
	}

	var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
	  return dragging && dragging.env.closestScrollable || null;
	};

	function useDroppablePublisher(args) {
	  var whileDraggingRef = React.useRef(null);
	  var appContext = useRequiredContext(AppContext);
	  var uniqueId = useUniqueId('droppable');
	  var registry = appContext.registry,
	      marshal = appContext.marshal;
	  var previousRef = usePrevious(args);
	  var descriptor = useMemo(function () {
	    return {
	      id: args.droppableId,
	      type: args.type,
	      mode: args.mode
	    };
	  }, [args.droppableId, args.mode, args.type]);
	  var publishedDescriptorRef = React.useRef(descriptor);
	  var memoizedUpdateScroll = useMemo(function () {
	    return memoizeOne(function (x, y) {
	      !whileDraggingRef.current ?  invariant(false, 'Can only update scroll when dragging')  : void 0;
	      var scroll = {
	        x: x,
	        y: y
	      };
	      marshal.updateDroppableScroll(descriptor.id, scroll);
	    });
	  }, [descriptor.id, marshal]);
	  var getClosestScroll = useCallback(function () {
	    var dragging = whileDraggingRef.current;

	    if (!dragging || !dragging.env.closestScrollable) {
	      return origin;
	    }

	    return getScroll$1(dragging.env.closestScrollable);
	  }, []);
	  var updateScroll = useCallback(function () {
	    var scroll = getClosestScroll();
	    memoizedUpdateScroll(scroll.x, scroll.y);
	  }, [getClosestScroll, memoizedUpdateScroll]);
	  var scheduleScrollUpdate = useMemo(function () {
	    return rafSchd(updateScroll);
	  }, [updateScroll]);
	  var onClosestScroll = useCallback(function () {
	    var dragging = whileDraggingRef.current;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ?  invariant(false, 'Could not find scroll options while scrolling')  : void 0;
	    var options = dragging.scrollOptions;

	    if (options.shouldPublishImmediately) {
	      updateScroll();
	      return;
	    }

	    scheduleScrollUpdate();
	  }, [scheduleScrollUpdate, updateScroll]);
	  var getDimensionAndWatchScroll = useCallback(function (windowScroll, options) {
	    !!whileDraggingRef.current ?  invariant(false, 'Cannot collect a droppable while a drag is occurring')  : void 0;
	    var previous = previousRef.current;
	    var ref = previous.getDroppableRef();
	    !ref ?  invariant(false, 'Cannot collect without a droppable ref')  : void 0;
	    var env = getEnv(ref);
	    var dragging = {
	      ref: ref,
	      descriptor: descriptor,
	      env: env,
	      scrollOptions: options
	    };
	    whileDraggingRef.current = dragging;
	    var dimension = getDimension({
	      ref: ref,
	      descriptor: descriptor,
	      env: env,
	      windowScroll: windowScroll,
	      direction: previous.direction,
	      isDropDisabled: previous.isDropDisabled,
	      isCombineEnabled: previous.isCombineEnabled,
	      shouldClipSubject: !previous.ignoreContainerClipping
	    });
	    var scrollable = env.closestScrollable;

	    if (scrollable) {
	      scrollable.setAttribute(scrollContainer$1.contextId, appContext.contextId);
	      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

	      {
	        checkForNestedScrollContainers(scrollable);
	      }
	    }

	    return dimension;
	  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
	  var recollect = useCallback(function (options) {
	    var dragging = whileDraggingRef.current;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !(dragging && closest) ?  invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container')  : void 0;
	    var previous = previousRef.current;

	    var execute = function execute() {
	      return getDimension({
	        ref: dragging.ref,
	        descriptor: dragging.descriptor,
	        env: dragging.env,
	        windowScroll: origin,
	        direction: previous.direction,
	        isDropDisabled: previous.isDropDisabled,
	        isCombineEnabled: previous.isCombineEnabled,
	        shouldClipSubject: !previous.ignoreContainerClipping
	      });
	    };

	    if (!options.withoutPlaceholder) {
	      return execute();
	    }

	    return withoutPlaceholder(previous.getPlaceholderRef(), execute);
	  }, [previousRef]);
	  var dragStopped = useCallback(function () {
	    var dragging = whileDraggingRef.current;
	    !dragging ?  invariant(false, 'Cannot stop drag when no active drag')  : void 0;
	    var closest = getClosestScrollableFromDrag(dragging);
	    whileDraggingRef.current = null;

	    if (!closest) {
	      return;
	    }

	    scheduleScrollUpdate.cancel();
	    closest.removeAttribute(scrollContainer$1.contextId);
	    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
	  }, [onClosestScroll, scheduleScrollUpdate]);
	  var scroll = useCallback(function (change) {
	    var dragging = whileDraggingRef.current;
	    !dragging ?  invariant(false, 'Cannot scroll when there is no drag')  : void 0;
	    var closest = getClosestScrollableFromDrag(dragging);
	    !closest ?  invariant(false, 'Cannot scroll a droppable with no closest scrollable')  : void 0;
	    closest.scrollTop += change.y;
	    closest.scrollLeft += change.x;
	  }, []);
	  var callbacks = useMemo(function () {
	    return {
	      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
	      recollect: recollect,
	      dragStopped: dragStopped,
	      scroll: scroll
	    };
	  }, [dragStopped, getDimensionAndWatchScroll, recollect, scroll]);
	  var entry = useMemo(function () {
	    return {
	      uniqueId: uniqueId,
	      descriptor: descriptor,
	      callbacks: callbacks
	    };
	  }, [callbacks, descriptor, uniqueId]);
	  useIsomorphicLayoutEffect$1(function () {
	    publishedDescriptorRef.current = entry.descriptor;
	    registry.droppable.register(entry);
	    return function () {
	      if (whileDraggingRef.current) {
	         warning('Unsupported: changing the droppableId or type of a Droppable during a drag') ;
	        dragStopped();
	      }

	      registry.droppable.unregister(entry);
	    };
	  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
	  useIsomorphicLayoutEffect$1(function () {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
	  }, [args.isDropDisabled, marshal]);
	  useIsomorphicLayoutEffect$1(function () {
	    if (!whileDraggingRef.current) {
	      return;
	    }

	    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
	  }, [args.isCombineEnabled, marshal]);
	}

	function noop$3() {}

	var empty = {
	  width: 0,
	  height: 0,
	  margin: noSpacing$1
	};

	var getSize = function getSize(_ref) {
	  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
	      placeholder = _ref.placeholder,
	      animate = _ref.animate;

	  if (isAnimatingOpenOnMount) {
	    return empty;
	  }

	  if (animate === 'close') {
	    return empty;
	  }

	  return {
	    height: placeholder.client.borderBox.height,
	    width: placeholder.client.borderBox.width,
	    margin: placeholder.client.margin
	  };
	};

	var getStyle = function getStyle(_ref2) {
	  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
	      placeholder = _ref2.placeholder,
	      animate = _ref2.animate;
	  var size = getSize({
	    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
	    placeholder: placeholder,
	    animate: animate
	  });
	  return {
	    display: placeholder.display,
	    boxSizing: 'border-box',
	    width: size.width,
	    height: size.height,
	    marginTop: size.margin.top,
	    marginRight: size.margin.right,
	    marginBottom: size.margin.bottom,
	    marginLeft: size.margin.left,
	    flexShrink: '0',
	    flexGrow: '0',
	    pointerEvents: 'none',
	    transition: transitions.placeholder
	  };
	};

	function Placeholder(props) {
	  var animateOpenTimerRef = React.useRef(null);
	  var tryClearAnimateOpenTimer = useCallback(function () {
	    if (!animateOpenTimerRef.current) {
	      return;
	    }

	    clearTimeout(animateOpenTimerRef.current);
	    animateOpenTimerRef.current = null;
	  }, []);
	  var animate = props.animate,
	      onTransitionEnd = props.onTransitionEnd,
	      onClose = props.onClose,
	      contextId = props.contextId;

	  var _useState = React.useState(props.animate === 'open'),
	      isAnimatingOpenOnMount = _useState[0],
	      setIsAnimatingOpenOnMount = _useState[1];

	  React.useEffect(function () {
	    if (!isAnimatingOpenOnMount) {
	      return noop$3;
	    }

	    if (animate !== 'open') {
	      tryClearAnimateOpenTimer();
	      setIsAnimatingOpenOnMount(false);
	      return noop$3;
	    }

	    if (animateOpenTimerRef.current) {
	      return noop$3;
	    }

	    animateOpenTimerRef.current = setTimeout(function () {
	      animateOpenTimerRef.current = null;
	      setIsAnimatingOpenOnMount(false);
	    });
	    return tryClearAnimateOpenTimer;
	  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
	  var onSizeChangeEnd = useCallback(function (event) {
	    if (event.propertyName !== 'height') {
	      return;
	    }

	    onTransitionEnd();

	    if (animate === 'close') {
	      onClose();
	    }
	  }, [animate, onClose, onTransitionEnd]);
	  var style = getStyle({
	    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
	    animate: props.animate,
	    placeholder: props.placeholder
	  });
	  return React__default.createElement(props.placeholder.tagName, {
	    style: style,
	    'data-rbd-placeholder-context-id': contextId,
	    onTransitionEnd: onSizeChangeEnd,
	    ref: props.innerRef
	  });
	}

	var Placeholder$1 = React__default.memo(Placeholder);

	var DroppableContext = React__default.createContext(null);

	function checkIsValidInnerRef(el) {
	  !(el && isHtmlElement(el)) ?  invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ")  : void 0;
	}

	function isBoolean(value) {
	  return typeof value === 'boolean';
	}

	function run(args, checks) {
	  checks.forEach(function (check) {
	    return check(args);
	  });
	}

	var shared$1 = [function required(_ref) {
	  var props = _ref.props;
	  !props.droppableId ?  invariant(false, 'A Droppable requires a droppableId prop')  : void 0;
	}, function _boolean(_ref2) {
	  var props = _ref2.props;
	  !isBoolean(props.isDropDisabled) ?  invariant(false, 'isDropDisabled must be a boolean')  : void 0;
	  !isBoolean(props.isCombineEnabled) ?  invariant(false, 'isCombineEnabled must be a boolean')  : void 0;
	  !isBoolean(props.ignoreContainerClipping) ?  invariant(false, 'ignoreContainerClipping must be a boolean')  : void 0;
	}, function ref(_ref3) {
	  var getDroppableRef = _ref3.getDroppableRef;
	  checkIsValidInnerRef(getDroppableRef());
	}];
	var standard = [function placeholder(_ref4) {
	  var props = _ref4.props,
	      getPlaceholderRef = _ref4.getPlaceholderRef;

	  if (!props.placeholder) {
	    return;
	  }

	  var ref = getPlaceholderRef();

	  if (ref) {
	    return;
	  }

	   warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") ;
	}];
	var virtual = [function hasClone(_ref5) {
	  var props = _ref5.props;
	  !props.whenDraggingClone ?  invariant(false, 'Must provide a clone render function (whenDraggingClone) for virtual lists')  : void 0;
	}, function hasNoPlaceholder(_ref6) {
	  var getPlaceholderRef = _ref6.getPlaceholderRef;
	  !!getPlaceholderRef() ?  invariant(false, 'Expected virtual list to not have a placeholder')  : void 0;
	}];
	function useValidation(args) {
	  React.useEffect(function () {
	    {
	      run(args, shared$1);

	      if (args.props.mode === 'STANDARD') {
	        run(args, standard);
	      }

	      if (args.props.mode === 'VIRTUAL') {
	        run(args, virtual);
	      }
	    }
	  });
	}

	var AnimateInOut = function (_React$PureComponent) {
	  _inheritsLoose(AnimateInOut, _React$PureComponent);

	  function AnimateInOut() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
	    _this.state = {
	      isVisible: Boolean(_this.props.on),
	      data: _this.props.on,
	      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
	    };

	    _this.onClose = function () {
	      if (_this.state.animate !== 'close') {
	        return;
	      }

	      _this.setState({
	        isVisible: false
	      });
	    };

	    return _this;
	  }

	  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (!props.shouldAnimate) {
	      return {
	        isVisible: Boolean(props.on),
	        data: props.on,
	        animate: 'none'
	      };
	    }

	    if (props.on) {
	      return {
	        isVisible: true,
	        data: props.on,
	        animate: 'open'
	      };
	    }

	    if (state.isVisible) {
	      return {
	        isVisible: true,
	        data: state.data,
	        animate: 'close'
	      };
	    }

	    return {
	      isVisible: false,
	      animate: 'close',
	      data: null
	    };
	  };

	  var _proto = AnimateInOut.prototype;

	  _proto.render = function render() {
	    if (!this.state.isVisible) {
	      return null;
	    }

	    var provided = {
	      onClose: this.onClose,
	      data: this.state.data,
	      animate: this.state.animate
	    };
	    return this.props.children(provided);
	  };

	  return AnimateInOut;
	}(React__default.PureComponent);

	var deepDiff = createCommonjsModule(function (module, exports) {
	(function(root, factory) { // eslint-disable-line no-extra-semi
	  var deepDiff = factory(root);
	  // eslint-disable-next-line no-undef
	  {
	      // Node.js or ReactNative
	      module.exports = deepDiff;
	  }
	}(commonjsGlobal, function(root) {
	  var validKinds = ['N', 'E', 'A', 'D'];

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString === 'function' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  // http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
	  function hashThisString(string) {
	    var hash = 0;
	    if (string.length === 0) { return hash; }
	    for (var i = 0; i < string.length; i++) {
	      var char = string.charCodeAt(i);
	      hash = ((hash << 5) - hash) + char;
	      hash = hash & hash; // Convert to 32bit integer
	    }
	    return hash;
	  }

	  // Gets a hash of the given object in an array order-independent fashion
	  // also object key order independent (easier since they can be alphabetized)
	  function getOrderIndependentHash(object) {
	    var accum = 0;
	    var type = realTypeOf(object);

	    if (type === 'array') {
	      object.forEach(function (item) {
	        // Addition is commutative so this is order indep
	        accum += getOrderIndependentHash(item);
	      });

	      var arrayString = '[type: array, hash: ' + accum + ']';
	      return accum + hashThisString(arrayString);
	    }

	    if (type === 'object') {
	      for (var key in object) {
	        if (object.hasOwnProperty(key)) {
	          var keyValueString = '[ type: object, key: ' + key + ', value hash: ' + getOrderIndependentHash(object[key]) + ']';
	          accum += hashThisString(keyValueString);
	        }
	      }

	      return accum;
	    }

	    // Non object, non array...should be good?
	    var stringToHash = '[ type: ' + type + ' ; value: ' + object + ']';
	    return accum + hashThisString(stringToHash);
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack, orderIndependent) {
	    changes = changes || [];
	    path = path || [];
	    stack = stack || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined' && key !== null) {
	      if (prefilter) {
	        if (typeof (prefilter) === 'function' && prefilter(currentPath, key)) {
	          return;
	        } else if (typeof (prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) {
	            return;
	          }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    var i, j, k, other;

	    var ldefined = ltype !== 'undefined' ||
	      (stack && (stack.length > 0) && stack[stack.length - 1].lhs &&
	        Object.getOwnPropertyDescriptor(stack[stack.length - 1].lhs, key));
	    var rdefined = rtype !== 'undefined' ||
	      (stack && (stack.length > 0) && stack[stack.length - 1].rhs &&
	        Object.getOwnPropertyDescriptor(stack[stack.length - 1].rhs, key));

	    if (!ldefined && rdefined) {
	      changes.push(new DiffNew(currentPath, rhs));
	    } else if (!rdefined && ldefined) {
	      changes.push(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes.push(new DiffEdit(currentPath, lhs, rhs));
	    } else if (realTypeOf(lhs) === 'date' && (lhs - rhs) !== 0) {
	      changes.push(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      for (i = stack.length - 1; i > -1; --i) {
	        if (stack[i].lhs === lhs) {
	          other = true;
	          break;
	        }
	      }
	      if (!other) {
	        stack.push({ lhs: lhs, rhs: rhs });
	        if (Array.isArray(lhs)) {
	          // If order doesn't matter, we need to sort our arrays
	          if (orderIndependent) {
	            lhs.sort(function (a, b) {
	              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
	            });

	            rhs.sort(function (a, b) {
	              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
	            });
	          }
	          i = rhs.length - 1;
	          j = lhs.length - 1;
	          while (i > j) {
	            changes.push(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i--])));
	          }
	          while (j > i) {
	            changes.push(new DiffArray(currentPath, j, new DiffDeleted(undefined, lhs[j--])));
	          }
	          for (; i >= 0; --i) {
	            deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack, orderIndependent);
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          for (i = 0; i < akeys.length; ++i) {
	            k = akeys[i];
	            other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
	              pkeys[other] = null;
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack, orderIndependent);
	            }
	          }
	          for (i = 0; i < pkeys.length; ++i) {
	            k = pkeys[i];
	            if (k) {
	              deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
	            }
	          }
	        }
	        stack.length = stack.length - 1;
	      } else if (lhs !== rhs) {
	        // lhs is contains a cycle at this element and it differs from rhs
	        changes.push(new DiffEdit(currentPath, lhs, rhs));
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes.push(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function observableDiff(lhs, rhs, observer, prefilter, orderIndependent) {
	    var changes = [];
	    deepDiff(lhs, rhs, changes, prefilter, null, null, null, orderIndependent);
	    if (observer) {
	      for (var i = 0; i < changes.length; ++i) {
	        observer(changes[i]);
	      }
	    }
	    return changes;
	  }

	  function orderIndependentDeepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    return deepDiff(lhs, rhs, changes, prefilter, path, key, stack, true);
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    var observer = (accum) ?
	      function (difference) {
	        if (difference) {
	          accum.push(difference);
	        }
	      } : undefined;
	    var changes = observableDiff(lhs, rhs, observer, prefilter);
	    return (accum) ? accum : (changes.length) ? changes : undefined;
	  }

	  function accumulateOrderIndependentDiff(lhs, rhs, prefilter, accum) {
	    var observer = (accum) ?
	      function (difference) {
	        if (difference) {
	          accum.push(difference);
	        }
	      } : undefined;
	    var changes = observableDiff(lhs, rhs, observer, prefilter, true);
	    return (accum) ? accum : (changes.length) ? changes : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	        i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (typeof change === 'undefined' && source && ~validKinds.indexOf(source.kind)) {
	      change = source;
	    }
	    if (target && change && change.kind) {
	      var it = target,
	        i = -1,
	        last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i + 1] !== 'undefined' && typeof change.path[i + 1] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          if (change.path && typeof it[change.path[i]] === 'undefined') {
	            it[change.path[i]] = [];
	          }
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	        i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	        i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function (change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      observableDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    orderIndependentDiff: {
	      value: accumulateOrderIndependentDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: observableDiff,
	      enumerable: true
	    },
	    orderIndependentObservableDiff: {
	      value: orderIndependentDeepDiff,
	      enumerable: true
	    },
	    orderIndepHash: {
	      value: getOrderIndependentHash,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function () {
	        return typeof $conflict !== 'undefined';
	      },
	      enumerable: true
	    }
	  });

	  // hackish...
	  accumulateDiff.DeepDiff = accumulateDiff;
	  // ...but works with:
	  // import DeepDiff from 'deep-diff'
	  // import { DeepDiff } from 'deep-diff'
	  // const DeepDiff = require('deep-diff');
	  // const { DeepDiff } = require('deep-diff');

	  if (root) {
	    root.DeepDiff = accumulateDiff;
	  }

	  return accumulateDiff;
	}));
	});

	var zIndexOptions = {
	  dragging: 5000,
	  dropAnimating: 4500
	};

	var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
	  if (dropping) {
	    return transitions.drop(dropping.duration);
	  }

	  if (shouldAnimateDragMovement) {
	    return transitions.snap;
	  }

	  return transitions.fluid;
	};

	var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
	  if (!isCombining) {
	    return null;
	  }

	  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
	};

	var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
	  if (dragging.forceShouldAnimate != null) {
	    return dragging.forceShouldAnimate;
	  }

	  return dragging.mode === 'SNAP';
	};

	function getDraggingStyle(dragging) {
	  var dimension = dragging.dimension;
	  var box = dimension.client;
	  var offset = dragging.offset,
	      combineWith = dragging.combineWith,
	      dropping = dragging.dropping;
	  var isCombining = Boolean(combineWith);
	  var shouldAnimate = getShouldDraggingAnimate(dragging);
	  var isDropAnimating = Boolean(dropping);
	  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
	  var style = {
	    position: 'fixed',
	    top: box.marginBox.top,
	    left: box.marginBox.left,
	    boxSizing: 'border-box',
	    width: box.borderBox.width,
	    height: box.borderBox.height,
	    transition: getDraggingTransition(shouldAnimate, dropping),
	    transform: transform,
	    opacity: getDraggingOpacity(isCombining, isDropAnimating),
	    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
	    pointerEvents: 'none'
	  };
	  return style;
	}

	function getSecondaryStyle(secondary) {
	  return {
	    transform: transforms.moveTo(secondary.offset),
	    transition: secondary.shouldAnimateDisplacement ? null : 'none'
	  };
	}

	function getStyle$1(mapped) {
	  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
	}

	function getDimension$1(descriptor, el, windowScroll) {
	  if (windowScroll === void 0) {
	    windowScroll = origin;
	  }

	  var computedStyles = window.getComputedStyle(el);
	  var borderBox = el.getBoundingClientRect();
	  var client = calculateBox(borderBox, computedStyles);
	  var page = withScroll(client, windowScroll);
	  var placeholder = {
	    client: client,
	    tagName: el.tagName.toLowerCase(),
	    display: computedStyles.display
	  };
	  var displaceBy = {
	    x: client.marginBox.width,
	    y: client.marginBox.height
	  };
	  var dimension = {
	    descriptor: descriptor,
	    placeholder: placeholder,
	    displaceBy: displaceBy,
	    client: client,
	    page: page
	  };
	  return dimension;
	}

	function useDraggablePublisher(args) {
	  var uniqueId = useUniqueId('draggable');
	  var draggableId = args.draggableId,
	      index = args.index,
	      getDraggableRef = args.getDraggableRef,
	      canDragInteractiveElements = args.canDragInteractiveElements,
	      shouldRespectForcePress = args.shouldRespectForcePress,
	      isEnabled = args.isEnabled;
	  var appContext = useRequiredContext(AppContext);
	  var registry = appContext.registry;
	  var droppableContext = useRequiredContext(DroppableContext);
	  var droppableId = droppableContext.droppableId,
	      type = droppableContext.type;
	  var descriptor = useMemo(function () {
	    var result = {
	      id: draggableId,
	      droppableId: droppableId,
	      type: type,
	      index: index
	    };
	    return result;
	  }, [draggableId, droppableId, index, type]);
	  var options = useMemo(function () {
	    return {
	      canDragInteractiveElements: canDragInteractiveElements,
	      shouldRespectForcePress: shouldRespectForcePress,
	      isEnabled: isEnabled
	    };
	  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
	  var getDimension = useCallback(function (windowScroll) {
	    var el = getDraggableRef();
	    !el ?  invariant(false, 'Cannot get dimension when no ref is set')  : void 0;
	    return getDimension$1(descriptor, el, windowScroll);
	  }, [descriptor, getDraggableRef]);
	  var entry = useMemo(function () {
	    return {
	      uniqueId: uniqueId,
	      descriptor: descriptor,
	      options: options,
	      getDimension: getDimension
	    };
	  }, [descriptor, getDimension, options, uniqueId]);
	  var publishedRef = React.useRef(entry);
	  var isFirstPublishRef = React.useRef(true);
	  useIsomorphicLayoutEffect$1(function () {
	    registry.draggable.register(publishedRef.current);
	    return function () {
	      return registry.draggable.unregister(publishedRef.current);
	    };
	  }, [registry.draggable]);
	  useIsomorphicLayoutEffect$1(function () {
	    if (isFirstPublishRef.current) {
	      isFirstPublishRef.current = false;
	      return;
	    }

	    var last = publishedRef.current;
	    publishedRef.current = entry;
	    registry.draggable.update(entry, last);
	  }, [entry, registry.draggable]);
	}

	// 20.1.2.3 Number.isInteger(number)

	var floor$1 = Math.floor;
	var _isInteger = function isInteger(it) {
	  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
	};

	// 20.1.2.3 Number.isInteger(number)


	_export(_export.S, 'Number', { isInteger: _isInteger });

	var isInteger = _core.Number.isInteger;

	var isInteger$1 = isInteger;

	function checkOwnProps(props) {
	  !isInteger$1(props.index) ?  invariant(false, 'Draggable requires an integer index prop')  : void 0;
	  !props.draggableId ?  invariant(false, 'Draggable requires a draggableId')  : void 0;
	}

	function useValidation$1(props, getRef) {
	  React.useEffect(function () {
	    {
	      checkOwnProps(props);

	      if (props.mapped.type !== 'DRAGGING') {
	        checkIsValidInnerRef(getRef());
	      }
	    }
	  });
	}
	function useClonePropValidation(isClone) {
	  var initialRef = React.useRef(isClone);
	  React.useEffect(function () {
	    if (isClone !== initialRef.current) {
	       warning('Draggable isClone prop value changed during component life') ;
	    }
	  }, [isClone]);
	}

	function preventHtml5Dnd(event) {
	  event.preventDefault();
	}

	var Draggable = function Draggable(props) {
	  var ref = React.useRef(null);
	  var setRef = useCallback(function (el) {
	    ref.current = el;
	  }, []);
	  var getRef = useCallback(function () {
	    return ref.current;
	  }, []);

	  var _useRequiredContext = useRequiredContext(AppContext),
	      contextId = _useRequiredContext.contextId,
	      liftInstructionId = _useRequiredContext.liftInstructionId,
	      lazyDispatch = _useRequiredContext.lazyDispatch;

	  var children = props.children,
	      ChildComponent = props.childComponent,
	      draggableId = props.draggableId,
	      isEnabled = props.isEnabled,
	      shouldRespectForcePress = props.shouldRespectForcePress,
	      canDragInteractiveElements = props.canDragInteractiveElements,
	      index = props.index,
	      isClone = props.isClone,
	      mapped = props.mapped,
	      dropAnimationFinishedAction = props.dropAnimationFinished;
	  useValidation$1(props, getRef);
	  useClonePropValidation(isClone);

	  if (!isClone) {
	    var forPublisher = useMemo(function () {
	      return {
	        draggableId: draggableId,
	        index: index,
	        getDraggableRef: getRef,
	        canDragInteractiveElements: canDragInteractiveElements,
	        shouldRespectForcePress: shouldRespectForcePress,
	        isEnabled: isEnabled
	      };
	    }, [canDragInteractiveElements, draggableId, getRef, index, isEnabled, shouldRespectForcePress]);
	    useDraggablePublisher(forPublisher);
	  }

	  var dragHandleProps = useMemo(function () {
	    return isEnabled ? {
	      tabIndex: 0,
	      'data-rbd-drag-handle-draggable-id': draggableId,
	      'data-rbd-drag-handle-context-id': contextId,
	      'aria-labelledby': liftInstructionId,
	      draggable: false,
	      onDragStart: preventHtml5Dnd
	    } : null;
	  }, [contextId, draggableId, isEnabled, liftInstructionId]);
	  var onMoveEnd = useCallback(function (event) {
	    if (mapped.type !== 'DRAGGING') {
	      return;
	    }

	    if (!mapped.dropping) {
	      return;
	    }

	    if (event.propertyName !== 'transform') {
	      return;
	    }

	    lazyDispatch(dropAnimationFinishedAction());
	  }, [dropAnimationFinishedAction, lazyDispatch, mapped]);
	  var provided = useMemo(function () {
	    var style = getStyle$1(mapped);
	    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
	    var result = {
	      innerRef: setRef,
	      draggableProps: {
	        'data-rbd-draggable-context-id': contextId,
	        'data-rbd-draggable-id': draggableId,
	        style: style,
	        onTransitionEnd: onTransitionEnd
	      },
	      dragHandleProps: dragHandleProps
	    };
	    return result;
	  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);

	  if (ChildComponent) {
	    return React__default.createElement(ChildComponent, _extends({
	      provided: provided,
	      snapshot: mapped.snapshot
	    }, props));
	  }

	  return children(provided, mapped.snapshot);
	};

	var Draggable$1 = pure(Draggable);

	var isStrictEqual = (function (a, b) {
	  return a === b;
	});

	var whatIsDraggedOverFromResult = (function (result) {
	  var combine = result.combine,
	      destination = result.destination;

	  if (destination) {
	    return destination.droppableId;
	  }

	  if (combine) {
	    return combine.droppableId;
	  }

	  return null;
	});

	var getCombineWithFromResult = function getCombineWithFromResult(result) {
	  return result.combine ? result.combine.draggableId : null;
	};

	var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
	  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
	};

	function getDraggableSelector() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x,
	      y: y
	    };
	  });
	  var getMemoizedSnapshot = memoizeOne(function (mode, draggingOver, combineWith, dropping) {
	    return {
	      isDragging: true,
	      isDropAnimating: Boolean(dropping),
	      dropAnimation: dropping,
	      mode: mode,
	      draggingOver: draggingOver,
	      combineWith: combineWith,
	      combineTargetFor: null
	    };
	  });
	  var getMemoizedProps = memoizeOne(function (offset, mode, dimension, draggingOver, combineWith, forceShouldAnimate) {
	    return {
	      mapped: {
	        type: 'DRAGGING',
	        dropping: null,
	        draggingOver: draggingOver,
	        combineWith: combineWith,
	        mode: mode,
	        offset: offset,
	        dimension: dimension,
	        forceShouldAnimate: forceShouldAnimate,
	        snapshot: getMemoizedSnapshot(mode, draggingOver, combineWith, null)
	      }
	    };
	  });

	  var selector = function selector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id !== ownProps.draggableId) {
	        return null;
	      }

	      var offset = state.current.client.offset;
	      var dimension = state.dimensions.draggables[ownProps.draggableId];
	      var mode = state.movementMode;
	      var draggingOver = whatIsDraggedOver(state.impact);
	      var combineWith = getCombineWithFromImpact(state.impact);
	      var forceShouldAnimate = state.forceShouldAnimate;
	      return getMemoizedProps(memoizedOffset(offset.x, offset.y), mode, dimension, draggingOver, combineWith, forceShouldAnimate);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (completed.result.draggableId !== ownProps.draggableId) {
	        return null;
	      }

	      var _dimension = state.dimensions.draggables[ownProps.draggableId];
	      var result = completed.result;
	      var _mode = result.mode;

	      var _draggingOver = whatIsDraggedOverFromResult(result);

	      var _combineWith = getCombineWithFromResult(result);

	      var duration = state.dropDuration;
	      var dropping = {
	        duration: duration,
	        curve: curves.drop,
	        moveTo: state.newHomeClientOffset,
	        opacity: _combineWith ? combine.opacity.drop : null,
	        scale: _combineWith ? combine.scale.drop : null
	      };
	      return {
	        mapped: {
	          type: 'DRAGGING',
	          offset: state.newHomeClientOffset,
	          dimension: _dimension,
	          dropping: dropping,
	          draggingOver: _draggingOver,
	          combineWith: _combineWith,
	          mode: _mode,
	          forceShouldAnimate: null,
	          snapshot: getMemoizedSnapshot(_mode, _draggingOver, _combineWith, dropping)
	        }
	      };
	    }

	    return null;
	  };

	  return selector;
	}

	function getSecondarySnapshot(combineTargetFor) {
	  return {
	    isDragging: false,
	    isDropAnimating: false,
	    dropAnimation: null,
	    mode: null,
	    draggingOver: null,
	    combineTargetFor: combineTargetFor,
	    combineWith: null
	  };
	}

	function getSecondarySelector() {
	  var memoizedOffset = memoizeOne(function (x, y) {
	    return {
	      x: x,
	      y: y
	    };
	  });
	  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
	  var getMemoizedProps = memoizeOne(function (offset, combineTargetFor, shouldAnimateDisplacement) {
	    if (combineTargetFor === void 0) {
	      combineTargetFor = null;
	    }

	    return {
	      mapped: {
	        type: 'SECONDARY',
	        offset: offset,
	        combineTargetFor: combineTargetFor,
	        shouldAnimateDisplacement: shouldAnimateDisplacement,
	        snapshot: getMemoizedSnapshot(combineTargetFor)
	      }
	    };
	  });

	  var getFallback = function getFallback(combineTargetFor) {
	    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
	  };

	  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
	    var displacement = impact.displaced.visible[ownId];
	    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
	    var combineTargetFor = tryGetCombine(impact) ? draggingId : null;

	    if (!displacement) {
	      if (!isAfterCriticalInVirtualList) {
	        return getFallback(combineTargetFor);
	      }

	      var change = negate(afterCritical.displacedBy.point);

	      var _offset = memoizedOffset(change.x, change.y);

	      return getMemoizedProps(_offset, combineTargetFor, true);
	    }

	    if (isAfterCriticalInVirtualList) {
	      return getFallback(combineTargetFor);
	    }

	    var displaceBy = impact.displacedBy.point;
	    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
	    return getMemoizedProps(offset, combineTargetFor, displacement.shouldAnimate);
	  };

	  var selector = function selector(state, ownProps) {
	    if (state.isDragging) {
	      if (state.critical.draggable.id === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (completed.result.draggableId === ownProps.draggableId) {
	        return null;
	      }

	      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
	    }

	    return null;
	  };

	  return selector;
	}

	var defaultMapProps = {
	  mapped: {
	    type: 'SECONDARY',
	    offset: origin,
	    combineTargetFor: null,
	    shouldAnimateDisplacement: true,
	    snapshot: getSecondarySnapshot(null)
	  }
	};

	var fastSelector = function fastSelector(state, ownProps) {
	  if (state.isDragging || state.phase === 'DROP_ANIMATING') {
	    var draggingSelector = getDraggableSelector();
	    var secondarySelector = getSecondarySelector();
	    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || defaultMapProps;
	  }

	  return defaultMapProps;
	};

	var makeMapStateToProps = function makeMapStateToProps() {
	  return fastSelector;
	};

	var mapDispatchToProps = function mapDispatchToProps() {
	  return {
	    dropAnimationFinished: dropAnimationFinished
	  };
	};

	var ConnectedDraggable = connect(makeMapStateToProps, mapDispatchToProps, null, {
	  context: StoreContext,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Draggable$1);

	var ImpurePrivateDraggable = function ImpurePrivateDraggable(props) {
	  var droppableContext = useRequiredContext(DroppableContext);
	  var isUsingCloneFor = droppableContext.isUsingCloneFor;
	  return React.useMemo(function () {
	    if (isUsingCloneFor === props.draggableId && !props.isClone) {
	      return null;
	    }

	    return React__default.createElement(ConnectedDraggable, props);
	  }, [isUsingCloneFor]);
	};

	var PrivateDraggable = pure(ImpurePrivateDraggable);
	var PublicDraggable = function (_React$PureComponent) {
	  _inheritsLoose(PublicDraggable, _React$PureComponent);

	  function PublicDraggable() {
	    return _React$PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = PublicDraggable.prototype;

	  _proto.render = function render() {
	    var props = this.props;
	    var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
	    var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
	    var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
	    return React__default.createElement(ConnectedDraggable, _extends({}, props, {
	      isClone: false,
	      isEnabled: isEnabled,
	      canDragInteractiveElements: canDragInteractiveElements,
	      shouldRespectForcePress: shouldRespectForcePress
	    }));
	  };

	  return PublicDraggable;
	}(React__default.PureComponent);

	function Droppable(props) {
	  var appContext = React.useContext(AppContext);
	  !appContext ?  invariant(false, 'Could not find app context')  : void 0;
	  var contextId = appContext.contextId,
	      isMovementAllowed = appContext.isMovementAllowed;
	  var droppableRef = React.useRef(null);
	  var placeholderRef = React.useRef(null);
	  var children = props.children,
	      droppableId = props.droppableId,
	      type = props.type,
	      mode = props.mode,
	      direction = props.direction,
	      ignoreContainerClipping = props.ignoreContainerClipping,
	      isDropDisabled = props.isDropDisabled,
	      isCombineEnabled = props.isCombineEnabled,
	      snapshot = props.snapshot,
	      useClone = props.useClone,
	      ChildComponent = props.childComponent,
	      updateViewportMaxScroll = props.updateViewportMaxScroll,
	      getContainerForClone = props.getContainerForClone;
	  var getDroppableRef = useCallback(function () {
	    return droppableRef.current;
	  }, []);
	  var getPlaceholderRef = useCallback(function () {
	    return placeholderRef.current;
	  }, []);
	  var setDroppableRef = useCallback(function (value) {
	    droppableRef.current = value;
	  }, []);
	  var setPlaceholderRef = useCallback(function (value) {
	    placeholderRef.current = value;
	  }, []);

	  var _useRequiredContext = useRequiredContext(AppContext),
	      lazyDispatch = _useRequiredContext.lazyDispatch;

	  var onPlaceholderTransitionEnd = useCallback(function () {
	    if (isMovementAllowed()) {
	      lazyDispatch(updateViewportMaxScroll({
	        maxScroll: getMaxWindowScroll()
	      }));
	    }
	  }, [isMovementAllowed, updateViewportMaxScroll, lazyDispatch]);
	  useDroppablePublisher({
	    droppableId: droppableId,
	    type: type,
	    mode: mode,
	    direction: direction,
	    isDropDisabled: isDropDisabled,
	    isCombineEnabled: isCombineEnabled,
	    ignoreContainerClipping: ignoreContainerClipping,
	    getDroppableRef: getDroppableRef,
	    getPlaceholderRef: getPlaceholderRef
	  });
	  var placeholder = React__default.createElement(AnimateInOut, {
	    on: props.placeholder,
	    shouldAnimate: props.shouldAnimatePlaceholder
	  }, function (_ref) {
	    var onClose = _ref.onClose,
	        data = _ref.data,
	        animate = _ref.animate;
	    return React__default.createElement(Placeholder$1, {
	      placeholder: data,
	      onClose: onClose,
	      innerRef: setPlaceholderRef,
	      animate: animate,
	      contextId: contextId,
	      onTransitionEnd: onPlaceholderTransitionEnd
	    });
	  });
	  var provided = useMemo(function () {
	    return {
	      innerRef: setDroppableRef,
	      placeholder: placeholder,
	      droppableProps: {
	        'data-rbd-droppable-id': droppableId,
	        'data-rbd-droppable-context-id': contextId
	      }
	    };
	  }, [contextId, droppableId, placeholder, setDroppableRef]);
	  var isUsingCloneFor = useClone ? useClone.draggableId : null;
	  var droppableContext = useMemo(function () {
	    return {
	      droppableId: droppableId,
	      type: type,
	      isUsingCloneFor: isUsingCloneFor
	    };
	  }, [droppableId, isUsingCloneFor, type]);
	  useValidation({
	    props: props,
	    getDroppableRef: function getDroppableRef() {
	      return droppableRef.current;
	    },
	    getPlaceholderRef: function getPlaceholderRef() {
	      return placeholderRef.current;
	    }
	  });

	  function getClone() {
	    if (!useClone) {
	      return null;
	    }

	    var draggableId = useClone.draggableId,
	        source = useClone.source,
	        render = useClone.render;
	    var node = React__default.createElement(PrivateDraggable, {
	      draggableId: draggableId,
	      index: source.index,
	      isClone: true,
	      isEnabled: true,
	      shouldRespectForcePress: false,
	      canDragInteractiveElements: true
	    }, function (draggableProvided, draggableSnapshot) {
	      return render(draggableProvided, draggableSnapshot, source);
	    });
	    return ReactDOM__default.createPortal(node, getContainerForClone());
	  }

	  return React__default.createElement(DroppableContext.Provider, {
	    value: droppableContext
	  }, ChildComponent ? React__default.createElement(ChildComponent, _extends({
	    provided: provided,
	    snapshot: snapshot
	  }, props)) : children(provided, snapshot), getClone());
	}

	var Droppable$1 = pure(Droppable);

	var isMatchingType = function isMatchingType(type, critical) {
	  return type === critical.droppable.type;
	};

	var getDraggable = function getDraggable(critical, dimensions) {
	  return dimensions.draggables[critical.draggable.id];
	};

	var makeMapStateToProps$1 = function makeMapStateToProps() {
	  var idle = {
	    placeholder: null,
	    shouldAnimatePlaceholder: true,
	    snapshot: {
	      isDraggingOver: false,
	      draggingOverWith: null,
	      draggingFromThisWith: null
	    },
	    useClone: null
	  };

	  var idleWithoutAnimation = _extends({}, idle, {
	    shouldAnimatePlaceholder: false
	  });

	  var getMapProps = memoizeOne(function (id, isDraggingOver, dragging, snapshot, whenDraggingClone) {
	    var isHome = dragging.descriptor.droppableId === id;

	    if (isHome) {
	      var useClone = whenDraggingClone ? {
	        render: whenDraggingClone,
	        draggableId: dragging.descriptor.id,
	        source: getHomeLocation(dragging.descriptor)
	      } : null;
	      return {
	        placeholder: dragging.placeholder,
	        shouldAnimatePlaceholder: false,
	        snapshot: snapshot,
	        useClone: useClone
	      };
	    }

	    if (!isDraggingOver) {
	      return idle;
	    }

	    return {
	      placeholder: dragging.placeholder,
	      shouldAnimatePlaceholder: true,
	      snapshot: snapshot,
	      useClone: null
	    };
	  });
	  var getSnapshot = memoizeOne(function (id, isDraggingOver, dragging) {
	    var draggableId = dragging.descriptor.id;
	    var isHome = dragging.descriptor.droppableId === id;
	    var draggingOverWith = isDraggingOver ? draggableId : null;
	    var draggingFromThisWith = isHome ? draggableId : null;
	    return {
	      isDraggingOver: isDraggingOver,
	      draggingOverWith: draggingOverWith,
	      draggingFromThisWith: draggingFromThisWith
	    };
	  });

	  var selector = function selector(state, ownProps) {
	    var id = ownProps.droppableId;
	    var type = ownProps.type;
	    var whenDraggingClone = ownProps.whenDraggingClone;

	    if (state.isDragging) {
	      var critical = state.critical;

	      if (!isMatchingType(type, critical)) {
	        return idle;
	      }

	      var dragging = getDraggable(critical, state.dimensions);
	      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
	      var snapshot = getSnapshot(id, isDraggingOver, dragging);
	      return getMapProps(id, isDraggingOver, dragging, snapshot, whenDraggingClone);
	    }

	    if (state.phase === 'DROP_ANIMATING') {
	      var completed = state.completed;

	      if (!isMatchingType(type, completed.critical)) {
	        return idle;
	      }

	      var _dragging = getDraggable(completed.critical, state.dimensions);

	      var _snapshot = getSnapshot(id, whatIsDraggedOverFromResult(completed.result) === id, _dragging);

	      return getMapProps(id, whatIsDraggedOver(completed.impact) === id, _dragging, _snapshot, whenDraggingClone);
	    }

	    if (state.phase === 'IDLE' && !state.completed && state.shouldFlush) {
	      return idleWithoutAnimation;
	    }

	    if (state.phase === 'IDLE' && state.completed) {
	      var _completed = state.completed;

	      if (!isMatchingType(type, _completed.critical)) {
	        return idle;
	      }

	      var wasOver = whatIsDraggedOver(_completed.impact) === id;
	      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');

	      if (state.shouldFlush) {
	        return idleWithoutAnimation;
	      }

	      if (wasOver) {
	        return wasCombining ? idle : idleWithoutAnimation;
	      }

	      return idle;
	    }

	    return idle;
	  };

	  return selector;
	};

	var mapDispatchToProps$1 = function mapDispatchToProps() {
	  return {
	    updateViewportMaxScroll: updateViewportMaxScroll
	  };
	};

	function getBody() {
	  !document.body ?  invariant(false, 'document.body is not ready')  : void 0;
	  return document.body;
	}

	var defaultProps = {
	  mode: 'STANDARD',
	  type: 'DEFAULT',
	  direction: 'vertical',
	  isDropDisabled: false,
	  isCombineEnabled: false,
	  ignoreContainerClipping: false,
	  whenDraggingClone: null,
	  getContainerForClone: getBody
	};
	var ConnectedDroppable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
	  context: StoreContext,
	  pure: true,
	  areStatePropsEqual: isStrictEqual
	})(Droppable$1);
	ConnectedDroppable.defaultProps = defaultProps;

	exports.DragDropContext = DragDropContext;
	exports.Draggable = PublicDraggable;
	exports.Droppable = ConnectedDroppable;
	exports.resetServerContext = resetServerContext;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
