(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ckeditorNuxt"] = factory(require("vue"));
	else
		root["ckeditorNuxt"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6930":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e(__webpack_require__("8bbf")):undefined}(window,(function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);var o=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},a=n(1),u="object"==typeof self&&self&&self.Object===Object&&self,c=a.a||u||Function("return this")(),s=function(){return c.Date.now()},l=/\s/;var f=function(t){for(var e=t.length;e--&&l.test(t.charAt(e)););return e},d=/^\s+/;var p=function(t){return t?t.slice(0,f(t)+1).replace(d,""):t},v=c.Symbol,h=Object.prototype,m=h.hasOwnProperty,y=h.toString,b=v?v.toStringTag:void 0;var g=function(t){var e=m.call(t,b),n=t[b];try{t[b]=void 0;var i=!0}catch(t){}var r=y.call(t);return i&&(e?t[b]=n:delete t[b]),r},j=Object.prototype.toString;var w=function(t){return j.call(t)},O=v?v.toStringTag:void 0;var $=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":O&&O in Object(t)?g(t):w(t)};var _=function(t){return null!=t&&"object"==typeof t};var E=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==$(t)},S=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,T=/^0o[0-7]+$/i,D=parseInt;var N=function(t){if("number"==typeof t)return t;if(E(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=p(t);var n=x.test(t);return n||T.test(t)?D(t.slice(2),n?2:8):S.test(t)?NaN:+t},I=Math.max,M=Math.min;var C=function(t,e,n){var i,r,a,u,c,l,f=0,d=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=i,o=r;return i=r=void 0,f=e,u=t.apply(o,n)}function m(t){return f=t,c=setTimeout(b,e),d?h(t):u}function y(t){var n=t-l;return void 0===l||n>=e||n<0||p&&t-f>=a}function b(){var t=s();if(y(t))return g(t);c=setTimeout(b,function(t){var n=e-(t-l);return p?M(n,a-(t-f)):n}(t))}function g(t){return c=void 0,v&&i?h(t):(i=r=void 0,u)}function j(){var t=s(),n=y(t);if(i=arguments,r=this,l=t,n){if(void 0===c)return m(l);if(p)return clearTimeout(c),c=setTimeout(b,e),h(l)}return void 0===c&&(c=setTimeout(b,e)),u}return e=N(e)||0,o(n)&&(d=!!n.leading,a=(p="maxWait"in n)?I(N(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==c&&clearTimeout(c),f=0,i=l=r=c=void 0},j.flush=function(){return void 0===c?u:g(s())},j};var K={name:"ckeditor",created(){const{CKEDITOR_VERSION:t}=window;if(t){const[e]=t.split(".").map(Number);e<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(t){return t(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({$_instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){const t=Object.assign({},this.config);this.value&&(t.initialData=this.value),this.editor.create(this.$el,t).then(e=>{this.$_instance=e,this.$_setUpEditorEvents(),this.value!==t.initialData&&e.setData(this.value),this.disabled&&e.enableReadOnlyMode("Integration Sample"),this.$emit("ready",e)}).catch(t=>{console.error(t)})},beforeDestroy(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{value(t){this.$_instance&&t!==this.$_lastEditorData&&this.$_instance.setData(t)},disabled(t){t?this.$_instance.enableReadOnlyMode("Integration Sample"):this.$_instance.disableReadOnlyMode("Integration Sample")}},methods:{$_setUpEditorEvents(){const t=this.$_instance,e=C(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("input",n,e,t)},300,{leading:!0});t.model.document.on("change:data",e),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const R=r.a?r.a.version:i.version,[k]=R.split(".").map(t=>parseInt(t,10));if(2!==k)throw new Error("The CKEditor plugin works only with Vue 2.x. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v2.html");const P={install(t){t.component("ckeditor",K)},component:K};e.default=P}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "def5":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align center":"Align center","Align left":"Align left","Align right":"Align right","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue","Blue marker":"Blue marker",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Characters: %0":"Characters: %0","Choose heading":"Choose heading",Circle:"Circle",Color:"Color","Color picker":"Color picker",Column:"Column",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc","Document colors":"Document colors",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Edit source":"Edit source","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Empty snippet content":"Empty snippet content","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption",Find:"Find","Find and replace":"Find and replace","Find in text…":"Find in text…","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","Full size image":"Full size image",Green:"Green","Green marker":"Green marker","Green pen":"Green pen",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",Highlight:"Highlight","Horizontal line":"Horizontal line","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","HTML object":"HTML object","HTML snippet":"HTML snippet",Huge:"Huge","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert HTML":"Insert HTML","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Inset:"Inset",Italic:"Italic",Justify:"Justify","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Match case":"Match case","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Next result":"Next result","No preview available":"No preview available",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding","Page break":"Page break",Paragraph:"Paragraph","Paste raw HTML here...":"Paste raw HTML here...","Paste the media URL in the input.":"Paste the media URL in the input.","Pink marker":"Pink marker",Previous:"Previous","Previous result":"Previous result",Purple:"Purple",Red:"Red","Red pen":"Red pen",Redo:"Redo","Remove color":"Remove color","Remove highlight":"Remove highlight",Replace:"Replace","Replace all":"Replace all","Replace with…":"Replace with…","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Save changes":"Save changes","Select all":"Select all","Select column":"Select column","Select row":"Select row","Show more items":"Show more items","Show options":"Show options","Side image":"Side image",Small:"Small",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Style:"Style","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","Text highlight toolbar":"Text highlight toolbar","Text to find must not be empty.":"Text to find must not be empty.",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Find some text first in order to replace it.":"Tip: Find some text first in order to replace it.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Whole words only":"Whole words only","Widget toolbar":"Widget toolbar",Width:"Width","Words: %0":"Words: %0","Wrap text":"Wrap text",Yellow:"Yellow","Yellow marker":"Yellow marker"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
//# sourceMappingURL=ckeditor.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ffff8064-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CkeditorNuxt.vue?vue&type=template&id=d8047056&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ckeditor', {
    attrs: {
      "editor": _vm.editor,
      "value": _vm.value,
      "config": _vm.config,
      "tagName": _vm.tagName,
      "disabled": _vm.disabled
    },
    on: {
      "input": event => _vm.$emit('input', event)
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CkeditorNuxt.vue?vue&type=template&id=d8047056&

// EXTERNAL MODULE: ./node_modules/@atageldi194229/ckeditor5-build-classic/build/ckeditor.js
var ckeditor = __webpack_require__("def5");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-vue2/dist/ckeditor.js
var dist_ckeditor = __webpack_require__("6930");
var dist_ckeditor_default = /*#__PURE__*/__webpack_require__.n(dist_ckeditor);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CkeditorNuxt.vue?vue&type=script&lang=js&


/* harmony default export */ var CkeditorNuxtvue_type_script_lang_js_ = ({
  components: {
    ckeditor: dist_ckeditor_default.a.component
  },
  props: {
    value: {
      type: String,
      required: false
    },
    tagName: {
      type: String,
      required: false,
      default: "div"
    },
    disabled: {
      type: Boolean,
      required: false
    },
    uploadUrl: {
      type: String,
      required: false
    },
    config: {
      type: Object,
      required: false,
      default: function () {}
    }
  },
  data() {
    return {
      editor: ckeditor_default.a
    };
  }
});
// CONCATENATED MODULE: ./src/components/CkeditorNuxt.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CkeditorNuxtvue_type_script_lang_js_ = (CkeditorNuxtvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CkeditorNuxt.vue





/* normalize component */

var component = normalizeComponent(
  components_CkeditorNuxtvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CkeditorNuxt = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('CkeditorNuxt', CkeditorNuxt);
/* harmony default export */ var components = (CkeditorNuxt);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});
//# sourceMappingURL=ckeditorNuxt.umd.js.map