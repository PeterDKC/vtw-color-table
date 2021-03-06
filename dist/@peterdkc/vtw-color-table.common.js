module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "282a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "282a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"553e40dc-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/ColorTable.vue?vue&type=template&id=23b61649&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-white p-6 m-4 rounded"},[_c('div',{staticClass:"w-full text-center"},[_c('a',{staticClass:"bold rounded border border-blue-dark p-2 bg-blue-dark text-white hover:bg-white hover:text-blue-dark no-underline",attrs:{"href":"#"},on:{"click":_vm.toggleTable}},[_vm._v("\n            Color Table ("+_vm._s(_vm.colorTable.length)+" rows)\n            "),(_vm.tableIsOpen)?_c('span',[_vm._v("-")]):_vm._e(),(! _vm.tableIsOpen)?_c('span',[_vm._v("+")]):_vm._e()])]),_c('div',{staticClass:"pt-4",style:({ display: _vm.displayTable })},_vm._l((_vm.colorTable),function(row){return _c('div',{staticClass:"flex"},_vm._l((row),function(cell){return _c('div',{staticClass:"flex-1 p-2 m-1 rounded text-sm font-medium",class:{ border: cell.border },style:({
                    'background-color': cell.color,
                    'color': cell.textColor
                })},[_vm._v("\n                "+_vm._s(cell.name)+" - "+_vm._s(cell.color)+"\n            ")])}),0)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/ColorTable.vue?vue&type=template&id=23b61649&

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/ColorTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ColorTablevue_type_script_lang_js_ = ({
    data() {
        return {
            colors: tailwindColors,
            colorTable: [],
            displayTable: "none"
        }
    },

    methods: {
        toggleTable(event) {
            event.preventDefault();

            this.displayTable = (this.displayTable === "none") ?
                "block" :
                "none";
        },

        doColors() {
            let row = 0,
                cell = 0,
                greyscaleRow = 0,
                color,
                colors = this.colors;

            for (color in colors) {
                if (! this.colorTable[row]) {
                    this.colorTable[row] = [];
                }

                if (cell > 5 || this.isGreyscale(color)) {
                    cell = 0;
                    row++;

                    continue;
                }

                this.colorTable[row].push({
                    name: color,
                    color: colors[color],
                    textColor: cell < 2 ? "white": "black",
                    border: false
                });

                cell++;
            }

            greyscaleRow = row + 1;

            this.colorTable[greyscaleRow] = [];

            for (color in colors) {
                if (this.isGreyscale(color)) {
                    this.colorTable[greyscaleRow].push({
                        name: color,
                        color: colors[color],
                        textColor: this.greyscaleTextColor(color),
                        border: this.greyscaleBorder(color)
                    });
                }
            }

            console.dir(this.colorTable);
        },

        isGreyscale(color) {
            return color == "black" || color == "transparent" || color == "white";
        },

        greyscaleTextColor(color) {
            if (color == "black") return "white";

            return "black";
        },

        greyscaleBorder(color) {
            return color !== "black";
        }
    },

    computed: {
        tableIsOpen() {
            return this.displayTable === "flex";
        }
    },

    created() {
        this.doColors();
    }
});

// CONCATENATED MODULE: ./src/ColorTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ColorTablevue_type_script_lang_js_ = (ColorTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/ColorTable.vue





/* normalize component */

var component = normalizeComponent(
  src_ColorTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ColorTable = (component.exports);
// CONCATENATED MODULE: ./src/index.js



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('vtw-color-table', ColorTable);

/* harmony default export */ var src = (ColorTable);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ });
//# sourceMappingURL=vtw-color-table.common.js.map