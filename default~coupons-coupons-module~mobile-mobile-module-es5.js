function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~coupons-coupons-module~mobile-mobile-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/cdk.js":
  /*!**************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
    \**************************************************/

  /*! exports provided: VERSION */

  /***/
  function node_modulesAngularCdkEsm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of the Angular Component Development Kit.
     * @type {?}
     */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=cdk.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/core.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/core.js ***!
    \********************************************************/

  /*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */

  /***/
  function node_modulesAngularMaterialEsm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return AnimationCurves;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return AnimationDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return MatCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return MATERIAL_SANITY_CHECKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return mixinDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return mixinColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return mixinDisableRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return mixinTabIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return mixinErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return mixinInitialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return MatNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return MAT_DATE_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return MAT_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return MAT_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return MAT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return NativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return MAT_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return ShowOnDirtyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return ErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return MAT_HAMMER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return GestureConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return setLines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return MatLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return MatLineSetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return MatLineModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return MatOptionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _countGroupLabelsBeforeOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _getOptionScrollPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return MatOptionSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return MAT_OPTION_PARENT_COMPONENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return MAT_LABEL_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return MatRippleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return MAT_RIPPLE_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return MatRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleState", function () {
      return RippleState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return RippleRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return defaultRippleAnimationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return RippleRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return MatPseudoCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return JAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return FEB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return MAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return APR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return MAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return JUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return JUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return AUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return SEP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return OCT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return NOV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return DEC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa1", function () {
      return MATERIAL_SANITY_CHECKS_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk */
    "./node_modules/@angular/cdk/esm2015/cdk.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Material.
     * @type {?}
     */


    var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    var AnimationCurves = function AnimationCurves() {
      _classCallCheck(this, AnimationCurves);
    };

    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    /**
     * \@docs-private
     */

    var AnimationDurations = function AnimationDurations() {
      _classCallCheck(this, AnimationDurations);
    };

    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Private version constant to circumvent test/build issues,
    // i.e. avoid core to depend on the @angular/material primary entry-point
    // Can be removed once the Material primary entry-point no longer
    // re-exports all secondary entry-points

    /** @type {?} */

    var VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * \@docs-private
     * @return {?}
     */

    function MATERIAL_SANITY_CHECKS_FACTORY() {
      return true;
    }
    /**
     * Injection token that configures whether the Material sanity checks are enabled.
     * @type {?}
     */


    var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
      providedIn: 'root',
      factory: MATERIAL_SANITY_CHECKS_FACTORY
    });
    /**
     * Module that captures anything that should be loaded and/or run for *all* Angular Material
     * components. This includes Bidi, etc.
     *
     * This module should be imported to each top-level component module (e.g., MatTabsModule).
     */

    var MatCommonModule =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _sanityChecksEnabled
       * @param {?=} _hammerLoader
       */
      function MatCommonModule(_sanityChecksEnabled, _hammerLoader) {
        _classCallCheck(this, MatCommonModule);

        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */

        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */

        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */

        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */

        this._window = typeof window === 'object' && window ? window : null;

        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
          this._checkDoctypeIsDefined();

          this._checkThemeIsPresent();

          this._checkCdkVersionMatch();

          this._hasDoneGlobalChecks = true;
        }
      }
      /**
       * Whether any sanity checks are enabled
       * @private
       * @return {?}
       */


      _createClass(MatCommonModule, [{
        key: "_areChecksEnabled",
        value: function _areChecksEnabled() {
          return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
        }
        /**
         * Whether the code is running in tests.
         * @private
         * @return {?}
         */

      }, {
        key: "_isTestEnv",
        value: function _isTestEnv() {
          /** @type {?} */
          var window =
          /** @type {?} */
          this._window;
          return window && (window.__karma__ || window.jasmine);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkDoctypeIsDefined",
        value: function _checkDoctypeIsDefined() {
          if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkThemeIsPresent",
        value: function _checkThemeIsPresent() {
          // We need to assert that the `body` is defined, because these checks run very early
          // and the `body` won't be defined if the consumer put their scripts in the `head`.
          if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
          }
          /** @type {?} */


          var testElement = this._document.createElement('div');

          testElement.classList.add('mat-theme-loaded-marker');

          this._document.body.appendChild(testElement);
          /** @type {?} */


          var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
          // Firefox, the computed style is null if an application is running inside of a hidden iframe.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

          if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
          }

          this._document.body.removeChild(testElement);
        }
        /**
         * Checks whether the material version matches the cdk version
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCdkVersionMatch",
        value: function _checkCdkVersionMatch() {
          if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
          }
        }
        /**
         * Checks whether HammerJS is available.
         * @return {?}
         */

      }, {
        key: "_checkHammerIsAvailable",
        value: function _checkHammerIsAvailable() {
          if (this._hasCheckedHammer || !this._window) {
            return;
          }

          if (this._areChecksEnabled() && !
          /** @type {?} */
          this._window['Hammer'] && !this._hammerLoader) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
          }

          this._hasCheckedHammer = true;
        }
      }]);

      return MatCommonModule;
    }();

    MatCommonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
        exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      }]
    }];
    /** @nocollapse */

    MatCommonModule.ctorParameters = function () {
      return [{
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MATERIAL_SANITY_CHECKS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisabled(base) {
      return (
        /*#__PURE__*/
        function (_base) {
          _inherits(_class, _base);

          /**
           * @param {...?} args
           */
          function _class() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
            _this._disabled = false;
            return _this;
          }
          /**
           * @return {?}
           */


          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `color` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultColor
     * @return {?}
     */


    function mixinColor(base, defaultColor) {
      return (
        /*#__PURE__*/
        function (_base2) {
          _inherits(_class2, _base2);

          _createClass(_class2, [{
            key: "color",

            /**
             * @return {?}
             */
            get: function get() {
              return this._color;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              /** @type {?} */
              var colorPalette = value || defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
            /**
             * @param {...?} args
             */

          }]);

          function _class2() {
            var _getPrototypeOf3;

            var _this2;

            _classCallCheck(this, _class2);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf3, [this].concat(args))); // Set the default color that can be specified from the mixin.

            _this2.color = defaultColor;
            return _this2;
          }

          return _class2;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disableRipple` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisableRipple(base) {
      return (
        /*#__PURE__*/
        function (_base3) {
          _inherits(_class3, _base3);

          /**
           * @param {...?} args
           */
          function _class3() {
            var _getPrototypeOf4;

            var _this3;

            _classCallCheck(this, _class3);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(_class3)).call.apply(_getPrototypeOf4, [this].concat(args)));
            _this3._disableRipple = false;
            return _this3;
          }
          /**
           * Whether the ripple effect is disabled or not.
           * @return {?}
           */


          _createClass(_class3, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class3;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `tabIndex` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultTabIndex
     * @return {?}
     */


    function mixinTabIndex(base) {
      var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return (
        /*#__PURE__*/
        function (_base4) {
          _inherits(_class4, _base4);

          /**
           * @param {...?} args
           */
          function _class4() {
            var _getPrototypeOf5;

            var _this4;

            _classCallCheck(this, _class4);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(_class4)).call.apply(_getPrototypeOf5, [this].concat(args)));
            _this4._tabIndex = defaultTabIndex;
            return _this4;
          }
          /**
           * @return {?}
           */


          _createClass(_class4, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? value : defaultTabIndex;
            }
          }]);

          return _class4;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with updateErrorState method.
     * For component with `errorState` and need to update `errorState`.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinErrorState(base) {
      return (
        /*#__PURE__*/
        function (_base5) {
          _inherits(_class5, _base5);

          /**
           * @param {...?} args
           */
          function _class5() {
            var _getPrototypeOf6;

            var _this5;

            _classCallCheck(this, _class5);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this5 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(_class5)).call.apply(_getPrototypeOf6, [this].concat(args)));
            /**
             * Whether the component is in an error state.
             */

            _this5.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this5.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            return _this5;
          }
          /**
           * @return {?}
           */


          _createClass(_class5, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              /** @type {?} */
              var oldState = this.errorState;
              /** @type {?} */

              var parent = this._parentFormGroup || this._parentForm;
              /** @type {?} */

              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              /** @type {?} */

              var control = this.ngControl ?
              /** @type {?} */
              this.ngControl.control : null;
              /** @type {?} */

              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class5;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinInitialized(base) {
      return (
        /*#__PURE__*/
        function (_base6) {
          _inherits(_class6, _base6);

          /**
           * @param {...?} args
           */
          function _class6() {
            var _getPrototypeOf7;

            var _this6;

            _classCallCheck(this, _class6);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this6 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(_class6)).call.apply(_getPrototypeOf7, [this].concat(args)));
            /**
             * Whether this directive has been marked as initialized.
             */

            _this6._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this6._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this6.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
            /**
            * @param {?} subscriber
            * @return {?}
            */
            function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this6._isInitialized) {
                _this6._notifySubscriber(subscriber);
              } else {
                /** @type {?} */
                _this6._pendingSubscribers.push(subscriber);
              }
            });
            return _this6;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * \@docs-private
           * @return {?}
           */


          _createClass(_class6, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              /** @type {?} */
              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /**
             * Emits and completes the subscriber stream (should only emit once).
             * @param {?} subscriber
             * @return {?}
             */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class6;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
      providedIn: 'root',
      factory: MAT_DATE_LOCALE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DATE_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
    }
    /**
     * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
     * If you are importing and providing this in your code you can simply remove it.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */


    var MAT_DATE_LOCALE_PROVIDER = {
      provide: MAT_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
    };
    /**
     * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
     * @abstract
     * @template D
     */

    var DateAdapter =
    /*#__PURE__*/
    function () {
      function DateAdapter() {
        _classCallCheck(this, DateAdapter);

        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */


      _createClass(DateAdapter, [{
        key: "deserialize",

        /**
         * Attempts to deserialize a value to a valid date object. This is different from parsing in that
         * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
         * string). The default implementation does not allow any deserialization, it simply checks that
         * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
         * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
         * support passing values from your backend directly to these properties by overriding this method
         * to also deserialize the format used by your backend.
         * @param {?} value The value to be deserialized into a date object.
         * @return {?} The deserialized date object, either a valid date, null if the value can be
         *     deserialized into a null date (e.g. the empty string), or an invalid date.
         */
        value: function deserialize(value) {
          if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
          }

          return this.invalid();
        }
        /**
         * Sets the locale used for all dates.
         * @param {?} locale The new locale.
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.locale = locale;

          this._localeChanges.next();
        }
        /**
         * Compares two dates.
         * @param {?} first The first date to compare.
         * @param {?} second The second date to compare.
         * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
         *     a number greater than 0 if the first date is later.
         */

      }, {
        key: "compareDate",
        value: function compareDate(first, second) {
          return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
        }
        /**
         * Checks if two dates are equal.
         * @param {?} first The first date to check.
         * @param {?} second The second date to check.
         * @return {?} Whether the two dates are equal.
         *     Null dates are considered equal to other null dates.
         */

      }, {
        key: "sameDate",
        value: function sameDate(first, second) {
          if (first && second) {
            /** @type {?} */
            var firstValid = this.isValid(first);
            /** @type {?} */

            var secondValid = this.isValid(second);

            if (firstValid && secondValid) {
              return !this.compareDate(first, second);
            }

            return firstValid == secondValid;
          }

          return first == second;
        }
        /**
         * Clamp the given date between min and max dates.
         * @param {?} date The date to clamp.
         * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
         * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
         * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
         *     otherwise `date`.
         */

      }, {
        key: "clampDate",
        value: function clampDate(date, min, max) {
          if (min && this.compareDate(date, min) < 0) {
            return min;
          }

          if (max && this.compareDate(date, max) > 0) {
            return max;
          }

          return date;
        }
      }, {
        key: "localeChanges",
        get: function get() {
          return this._localeChanges;
        }
      }]);

      return DateAdapter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      SUPPORTS_INTL_API = typeof Intl != 'undefined';
    } catch (_a) {
      SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    var ɵ0 =
    /**
    * @param {?} i
    * @return {?}
    */
    function ɵ0(i) {
      return String(i + 1);
    };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_DATE_NAMES = range(31, ɵ0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    var NativeDateAdapter =
    /*#__PURE__*/
    function (_DateAdapter) {
      _inherits(NativeDateAdapter, _DateAdapter);

      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      function NativeDateAdapter(matDateLocale, platform) {
        var _this7;

        _classCallCheck(this, NativeDateAdapter);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(NativeDateAdapter).call(this));
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        _this7.useUtcForDisplay = true;

        _get(_getPrototypeOf(NativeDateAdapter.prototype), "setLocale", _assertThisInitialized(_this7)).call(_assertThisInitialized(_this7), matDateLocale); // IE does its own time zone correction, so we disable this on IE.


        _this7.useUtcForDisplay = !platform.TRIDENT;
        _this7._clampDate = platform.TRIDENT || platform.EDGE;
        return _this7;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      _createClass(NativeDateAdapter, [{
        key: "getYear",
        value: function getYear(date) {
          return date.getFullYear();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return date.getMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return date.getDate();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return date.getDay();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          var _this8 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              month: style,
              timeZone: 'utc'
            });
            return range(12,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this8._stripDirectionalityCharacters(_this8._format(dtf, new Date(2017, i, 1)));
            });
          }

          return DEFAULT_MONTH_NAMES[style];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          var _this9 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              day: 'numeric',
              timeZone: 'utc'
            });
            return range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this9._stripDirectionalityCharacters(_this9._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DATE_NAMES;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          var _this10 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              weekday: style,
              timeZone: 'utc'
            });
            return range(7,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this10._stripDirectionalityCharacters(_this10._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              year: 'numeric',
              timeZone: 'utc'
            });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return String(this.getYear(date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
          return 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return new Date(date.getTime());
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Check for invalid month and date (except upper bound on date which we have to check after
          // creating the Date).
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


          if (result.getMonth() != month) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return new Date();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value) {
          // We have no way using the native JS Date to set the parse format or locale, so we ignore these
          // parameters.
          if (typeof value == 'number') {
            return new Date(value);
          }

          return value ? new Date(Date.parse(value)) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
          }

          if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
              date = this.clone(date);
              date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }

            displayFormat = Object.assign({}, displayFormat, {
              timeZone: 'utc'
            });
            /** @type {?} */

            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return this._stripDirectionalityCharacters(date.toDateString());
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.addCalendarMonths(date, years * 12);
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          /** @type {?} */
          var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
          // month. In this case we want to go to the last day of the desired month.
          // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
          // guarantee this.


          if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
          }

          return newDate;
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (typeof value === 'string') {
            if (!value) {
              return null;
            } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.


            if (ISO_8601_REGEX.test(value)) {
              /** @type {?} */
              var date = new Date(value);

              if (this.isValid(date)) {
                return date;
              }
            }
          }

          return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return obj instanceof Date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return !isNaN(date.getTime());
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return new Date(NaN);
        }
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_createDateWithOverflow",
        value: function _createDateWithOverflow(year, month, date) {
          /** @type {?} */
          var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
          // abbreviations for 19xx.

          if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
          }

          return result;
        }
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */

      }, {
        key: "_2digit",
        value: function _2digit(n) {
          return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */

      }, {
        key: "_stripDirectionalityCharacters",
        value: function _stripDirectionalityCharacters(str) {
          return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */

      }, {
        key: "_format",
        value: function _format(dtf, date) {
          /** @type {?} */
          var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
          return dtf.format(d);
        }
      }]);

      return NativeDateAdapter;
    }(DateAdapter);

    NativeDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NativeDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_DATE_LOCALE]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NativeDateModule = function NativeDateModule() {
      _classCallCheck(this, NativeDateModule);
    };

    NativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }]
      }]
    }];
    var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

    var MatNativeDateModule = function MatNativeDateModule() {
      _classCallCheck(this, MatNativeDateModule);
    };

    MatNativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [NativeDateModule],
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Error state matcher that matches when a control is invalid and dirty.
     */

    var ShowOnDirtyErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function ShowOnDirtyErrorStateMatcher() {
        _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
      }

      _createClass(ShowOnDirtyErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.dirty || form && form.submitted));
        }
      }]);

      return ShowOnDirtyErrorStateMatcher;
    }();

    ShowOnDirtyErrorStateMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * Provider that defines how form controls behave with regards to displaying error messages.
     */

    var ErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function ErrorStateMatcher() {
        _classCallCheck(this, ErrorStateMatcher);
      }

      _createClass(ErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.touched || form && form.submitted));
        }
      }]);

      return ErrorStateMatcher;
    }();

    ErrorStateMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ErrorStateMatcher_Factory() {
        return new ErrorStateMatcher();
      },
      token: ErrorStateMatcher,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to provide options to the Hammerjs instance.
     * More info at http://hammerjs.github.io/api/.
     * @type {?}
     */

    var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
    /** @type {?} */

    var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

    var ɵ0$2 =
    /**
    * @return {?}
    */
    function ɵ0$2() {},
        ɵ1 =
    /**
    * @return {?}
    */
    function ɵ1() {};
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     * @type {?}
     */


    var noopHammerInstance = {
      on: ɵ0$2,
      off: ɵ1
    };
    /**
     * Adjusts configuration of our gesture library, Hammer.
     */

    var GestureConfig =
    /*#__PURE__*/
    function (_angular_platform_bro) {
      _inherits(GestureConfig, _angular_platform_bro);

      /**
       * @param {?=} _hammerOptions
       * @param {?=} commonModule
       */
      function GestureConfig(_hammerOptions, commonModule) {
        var _this11;

        _classCallCheck(this, GestureConfig);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(GestureConfig).call(this));
        _this11._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */

        _this11.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;

        if (commonModule) {
          commonModule._checkHammerIsAvailable();
        }

        return _this11;
      }
      /**
       * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
       *
       * Our gesture names come from the Material Design gestures spec:
       * https://material.io/design/#gestures-touch-mechanics
       *
       * More information on default recognizers can be found in Hammer docs:
       * http://hammerjs.github.io/recognizer-pan/
       * http://hammerjs.github.io/recognizer-press/
       *
       * @param {?} element Element to which to assign the new HammerJS gestures.
       * @return {?} Newly-created HammerJS instance.
       */


      _createClass(GestureConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          /** @type {?} */
          var hammer = typeof window !== 'undefined' ?
          /** @type {?} */
          window.Hammer : null;

          if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
          }
          /** @type {?} */


          var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

          /** @type {?} */

          var pan = new hammer.Pan();
          /** @type {?} */

          var swipe = new hammer.Swipe();
          /** @type {?} */

          var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
          // Otherwise the previous `recognizeWith` will be dropped.
          // TODO: Confirm threshold numbers with Material Design UX Team

          /** @type {?} */

          var slide = this._createRecognizer(pan, {
            event: 'slide',
            threshold: 0
          }, swipe);
          /** @type {?} */


          var longpress = this._createRecognizer(press, {
            event: 'longpress',
            time: 500
          }); // Overwrite the default `pan` event to use the swipe event.


          pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
          // accidentally reset the longpress recognizer. In order to make sure that the two
          // recognizers can run simultaneously but don't affect each other, we allow the slide
          // recognizer to recognize while a longpress is being processed.
          // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

          longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

          mc.add([swipe, press, pan, slide, longpress]);
          return (
            /** @type {?} */
            mc
          );
        }
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @private
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */

      }, {
        key: "_createRecognizer",
        value: function _createRecognizer(base, options) {
          /** @type {?} */
          var recognizer = new
          /** @type {?} */
          base.constructor(options);

          for (var _len7 = arguments.length, inheritances = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
            inheritances[_key7 - 2] = arguments[_key7];
          }

          inheritances.push(base);
          inheritances.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return recognizer.recognizeWith(item);
          });
          return recognizer;
        }
      }]);

      return GestureConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]);

    GestureConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    GestureConfig.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_HAMMER_OPTIONS]
        }]
      }, {
        type: MatCommonModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shared directive to count lines inside a text area, such as a list item.
     * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
     * counted by checking the query list's length.
     */


    var MatLine = function MatLine() {
      _classCallCheck(this, MatLine);
    };

    MatLine.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-line], [matLine]',
        host: {
          'class': 'mat-line'
        }
      }]
    }];
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @param {?} lines
     * @param {?} element
     * @return {?}
     */

    function setLines(lines, element) {
      // Note: doesn't need to unsubscribe, because `changes`
      // gets completed by Angular when the view is destroyed.
      lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref) {
        var length = _ref.length;
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);

        if (length === 2 || length === 3) {
          setClass(element, "mat-".concat(length, "-line"), true);
        } else if (length > 3) {
          setClass(element, "mat-multi-line", true);
        }
      });
    }
    /**
     * Adds or removes a class from an element.
     * @param {?} element
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */


    function setClass(element, className, isAdd) {
      /** @type {?} */
      var classList = element.nativeElement.classList;
      isAdd ? classList.add(className) : classList.remove(className);
    }
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @deprecated Use `setLines` instead.
     * \@breaking-change 8.0.0
     */


    var MatLineSetter =
    /**
     * @param {?} lines
     * @param {?} element
     */
    function MatLineSetter(lines, element) {
      _classCallCheck(this, MatLineSetter);

      setLines(lines, element);
    };

    var MatLineModule = function MatLineModule() {
      _classCallCheck(this, MatLineModule);
    };

    MatLineModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatCommonModule],
        exports: [MatLine, MatCommonModule],
        declarations: [MatLine]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */

    var RippleState = {
      FADING_IN: 0,
      VISIBLE: 1,
      FADING_OUT: 2,
      HIDDEN: 3
    };
    RippleState[RippleState.FADING_IN] = 'FADING_IN';
    RippleState[RippleState.VISIBLE] = 'VISIBLE';
    RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
    RippleState[RippleState.HIDDEN] = 'HIDDEN';
    /**
     * Reference to a previously launched ripple element.
     */

    var RippleRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} element
       * @param {?} config
       */
      function RippleRef(_renderer, element, config) {
        _classCallCheck(this, RippleRef);

        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */

        this.state = RippleState.HIDDEN;
      }
      /**
       * Fades out the ripple element.
       * @return {?}
       */


      _createClass(RippleRef, [{
        key: "fadeOut",
        value: function fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }]);

      return RippleRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default ripple animation configuration for ripples without an explicit
     * animation config specified.
     * @type {?}
     */


    var defaultRippleAnimationConfig = {
      enterDuration: 450,
      exitDuration: 400
    };
    /**
     * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
     * events to avoid synthetic mouse events.
     * @type {?}
     */

    var ignoreMouseEventsTimeout = 800;
    /**
     * Options that apply to all the event listeners that are bound by the ripple renderer.
     * @type {?}
     */

    var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Helper service that performs DOM manipulations. Not intended to be used outside this module.
     * The constructor takes a reference to the ripple directive's host element and a map of DOM
     * event handlers to be installed on the element that triggers ripple animations.
     * This will eventually become a custom renderer once Angular support exists.
     * \@docs-private
     */

    var RippleRenderer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _target
       * @param {?} _ngZone
       * @param {?} elementOrElementRef
       * @param {?} platform
       */
      function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
        var _this12 = this;

        _classCallCheck(this, RippleRenderer);

        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */

        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */

        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */

        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */

        this._onMousedown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Screen readers will fire fake mouse events for space/enter. Skip launching a
          // ripple in this case for consistency with the non-screen-reader experience.

          /** @type {?} */
          var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
          /** @type {?} */

          var isSyntheticEvent = _this12._lastTouchStartEvent && Date.now() < _this12._lastTouchStartEvent + ignoreMouseEventsTimeout;

          if (!_this12._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            _this12._isPointerDown = true;

            _this12.fadeInRipple(event.clientX, event.clientY, _this12._target.rippleConfig);
          }
        };
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */


        this._onTouchStart =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this12._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            _this12._lastTouchStartEvent = Date.now();
            _this12._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.

            /** @type {?} */

            var touches = event.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              _this12.fadeInRipple(touches[i].clientX, touches[i].clientY, _this12._target.rippleConfig);
            }
          }
        };
        /**
         * Function being called whenever the trigger is being released.
         */


        this._onPointerUp =
        /**
        * @return {?}
        */
        function () {
          if (!_this12._isPointerDown) {
            return;
          }

          _this12._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

          _this12._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

            /** @type {?} */
            var isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;

            if (!ripple.config.persistent && isVisible) {
              ripple.fadeOut();
            }
          });
        }; // Only do anything if we're on the browser.


        if (platform.isBrowser) {
          this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef); // Specify events which need to be registered on the trigger.

          this._triggerEvents.set('mousedown', this._onMousedown).set('mouseup', this._onPointerUp).set('mouseleave', this._onPointerUp).set('touchstart', this._onTouchStart).set('touchend', this._onPointerUp).set('touchcancel', this._onPointerUp);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
       * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param {?=} config Extra ripple options.
       * @return {?}
       */


      _createClass(RippleRenderer, [{
        key: "fadeInRipple",
        value: function fadeInRipple(x, y) {
          var _this13 = this;

          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
          /** @type {?} */


          var animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);

          if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
          }
          /** @type {?} */


          var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
          /** @type {?} */

          var offsetX = x - containerRect.left;
          /** @type {?} */

          var offsetY = y - containerRect.top;
          /** @type {?} */

          var duration = animationConfig.enterDuration;
          /** @type {?} */

          var ripple = document.createElement('div');
          ripple.classList.add('mat-ripple-element');
          ripple.style.left = "".concat(offsetX - radius, "px");
          ripple.style.top = "".concat(offsetY - radius, "px");
          ripple.style.height = "".concat(radius * 2, "px");
          ripple.style.width = "".concat(radius * 2, "px"); // If the color is not set, the default CSS color will be used.

          ripple.style.backgroundColor = config.color || null;
          ripple.style.transitionDuration = "".concat(duration, "ms");

          this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
          // ripple elements. This is critical because then the `scale` would not animate properly.


          enforceStyleRecalculation(ripple);
          ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

          /** @type {?} */

          var rippleRef = new RippleRef(this, ripple, config);
          rippleRef.state = RippleState.FADING_IN; // Add the ripple reference to the list of all active ripples.

          this._activeRipples.add(rippleRef);

          if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
          } // Wait for the ripple element to be completely faded in.
          // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var isMostRecentTransientRipple = rippleRef === _this13._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE; // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.

            if (!config.persistent && (!isMostRecentTransientRipple || !_this13._isPointerDown)) {
              rippleRef.fadeOut();
            }
          }, duration);

          return rippleRef;
        }
        /**
         * Fades out a ripple reference.
         * @param {?} rippleRef
         * @return {?}
         */

      }, {
        key: "fadeOutRipple",
        value: function fadeOutRipple(rippleRef) {
          /** @type {?} */
          var wasActive = this._activeRipples.delete(rippleRef);

          if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
          } // Clear out the cached bounding rect if we have no more ripples.


          if (!this._activeRipples.size) {
            this._containerRect = null;
          } // For ripples that are not active anymore, don't re-run the fade-out animation.


          if (!wasActive) {
            return;
          }
          /** @type {?} */


          var rippleEl = rippleRef.element;
          /** @type {?} */

          var animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
          rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
          rippleEl.style.opacity = '0';
          rippleRef.state = RippleState.FADING_OUT; // Once the ripple faded out, the ripple can be safely removed from the DOM.

          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            rippleRef.state = RippleState.HIDDEN;

            /** @type {?} */
            rippleEl.parentNode.removeChild(rippleEl);
          }, animationConfig.exitDuration);
        }
        /**
         * Fades out all currently active ripples.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            return ripple.fadeOut();
          });
        }
        /**
         * Sets up the trigger event listeners
         * @param {?} elementOrElementRef
         * @return {?}
         */

      }, {
        key: "setupTriggerEvents",
        value: function setupTriggerEvents(elementOrElementRef) {
          var _this14 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);

          if (!element || element === this._triggerElement) {
            return;
          } // Remove all previously registered event listeners from the trigger element.


          this._removeTriggerEvents();

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this14._triggerEvents.forEach(
            /**
            * @param {?} fn
            * @param {?} type
            * @return {?}
            */
            function (fn, type) {
              element.addEventListener(type, fn, passiveEventOptions);
            });
          });

          this._triggerElement = element;
        }
        /**
         * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
         * @private
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "_runTimeoutOutsideZone",
        value: function _runTimeoutOutsideZone(fn) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(fn, delay);
          });
        }
        /**
         * Removes previously registered event listeners from the trigger element.
         * @return {?}
         */

      }, {
        key: "_removeTriggerEvents",
        value: function _removeTriggerEvents() {
          var _this15 = this;

          if (this._triggerElement) {
            this._triggerEvents.forEach(
            /**
            * @param {?} fn
            * @param {?} type
            * @return {?}
            */
            function (fn, type) {
              /** @type {?} */
              _this15._triggerElement.removeEventListener(type, fn, passiveEventOptions);
            });
          }
        }
      }]);

      return RippleRenderer;
    }();
    /**
     * Enforces a style recalculation of a DOM element by computing its styles.
     * @param {?} element
     * @return {?}
     */


    function enforceStyleRecalculation(element) {
      // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
      // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
      // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      window.getComputedStyle(element).getPropertyValue('opacity');
    }
    /**
     * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */


    function distanceToFurthestCorner(x, y, rect) {
      /** @type {?} */
      var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
      /** @type {?} */

      var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
      return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify the global ripple options.
     * @type {?}
     */


    var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

    var MatRipple =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} globalOptions
       * @param {?=} animationMode
       */
      function MatRipple(_elementRef, ngZone, platform, globalOptions, animationMode) {
        _classCallCheck(this, MatRipple);

        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */

        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */

        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);

        if (animationMode === 'NoopAnimations') {
          this._globalOptions.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }
      }
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       * @return {?}
       */


      _createClass(MatRipple, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        /**
         * Fades out all currently showing ripple elements.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        /**
         * Ripple configuration from the directive's input values.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "_setupTriggerEventsIfEnabled",

        /**
         * Sets up the trigger event listeners if ripples are enabled.
         * @private
         * @return {?}
         */
        value: function _setupTriggerEventsIfEnabled() {
          if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
          }
        }
        /**
         * Launches a manual ripple at the specified coordinated or just by the ripple config.
         * @param {?} configOrX
         * @param {?=} y
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "launch",
        value: function launch(configOrX) {
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var config = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
          } else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = value;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         * @return {?}
         */

      }, {
        key: "trigger",
        get: function get() {
          return this._trigger || this._elementRef.nativeElement;
        }
        /**
         * @param {?} trigger
         * @return {?}
         */
        ,
        set: function set(trigger) {
          this._trigger = trigger;

          this._setupTriggerEventsIfEnabled();
        }
      }, {
        key: "rippleConfig",
        get: function get() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign({}, this._globalOptions.animation, this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
          };
        }
        /**
         * Whether ripples on pointer-down are disabled or not.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || !!this._globalOptions.disabled;
        }
      }]);

      return MatRipple;
    }();

    MatRipple.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-ripple], [matRipple]',
        exportAs: 'matRipple',
        host: {
          'class': 'mat-ripple',
          '[class.mat-ripple-unbounded]': 'unbounded'
        }
      }]
    }];
    /** @nocollapse */

    MatRipple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_RIPPLE_GLOBAL_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatRipple.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleColor']
      }],
      unbounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleUnbounded']
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleCentered']
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleRadius']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleAnimation']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleDisabled']
      }],
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleTrigger']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatRippleModule = function MatRippleModule() {
      _classCallCheck(this, MatRippleModule);
    };

    MatRippleModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
        exports: [MatRipple, MatCommonModule],
        declarations: [MatRipple]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Component that shows a simplified checkbox without including any kind of "real" checkbox.
     * Meant to be used when the checkbox is purely decorative and a large number of them will be
     * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
     * Note that theming is meant to be handled by the parent element, e.g.
     * `mat-primary .mat-pseudo-checkbox`.
     *
     * Note that this component will be completely invisible to screen-reader users. This is *not*
     * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
     * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
     * of more complex components that appropriately handle selected / checked state.
     * \@docs-private
     */

    var MatPseudoCheckbox =
    /**
     * @param {?=} _animationMode
     */
    function MatPseudoCheckbox(_animationMode) {
      _classCallCheck(this, MatPseudoCheckbox);

      this._animationMode = _animationMode;
      /**
       * Display state of the checkbox.
       */

      this.state = 'unchecked';
      /**
       * Whether the checkbox is disabled.
       */

      this.disabled = false;
    };

    MatPseudoCheckbox.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'mat-pseudo-checkbox',
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
        template: '',
        host: {
          'class': 'mat-pseudo-checkbox',
          '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
          '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
          '[class.mat-pseudo-checkbox-disabled]': 'disabled',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
        }
      }]
    }];
    /** @nocollapse */

    MatPseudoCheckbox.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPseudoCheckbox.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
      _classCallCheck(this, MatPseudoCheckboxModule);
    };

    MatPseudoCheckboxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [MatPseudoCheckbox],
        declarations: [MatPseudoCheckbox]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatOptgroup.

    /**
     * \@docs-private
     */

    var MatOptgroupBase = function MatOptgroupBase() {
      _classCallCheck(this, MatOptgroupBase);
    };
    /** @type {?} */


    var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

    /** @type {?} */


    var _uniqueOptgroupIdCounter = 0;
    /**
     * Component that is used to group instances of `mat-option`.
     */

    var MatOptgroup =
    /*#__PURE__*/
    function (_MatOptgroupMixinBase2) {
      _inherits(MatOptgroup, _MatOptgroupMixinBase2);

      function MatOptgroup() {
        var _this16;

        _classCallCheck(this, MatOptgroup);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(MatOptgroup).apply(this, arguments));
        /**
         * Unique id for the underlying label.
         */

        _this16._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
        return _this16;
      }

      return MatOptgroup;
    }(_MatOptgroupMixinBase);

    MatOptgroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-optgroup',
        exportAs: 'matOptgroup',
        template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
        host: {
          'class': 'mat-optgroup',
          'role': 'group',
          '[class.mat-optgroup-disabled]': 'disabled',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-labelledby]': '_labelId'
        }
      }]
    }];
    MatOptgroup.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Option IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */

    var _uniqueIdCounter = 0;
    /**
     * Event object emitted by MatOption when selected or deselected.
     */

    var MatOptionSelectionChange =
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MatOptionSelectionChange(source) {
      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, MatOptionSelectionChange);

      this.source = source;
      this.isUserInput = isUserInput;
    };
    /**
     * Injection token used to provide the parent component to options.
     * @type {?}
     */


    var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
    /**
     * Single option inside of a `<mat-select>` element.
     */

    var MatOption =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?} _parent
       * @param {?} group
       */
      function MatOption(_element, _changeDetectorRef, _parent, group) {
        _classCallCheck(this, MatOption);

        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */

        this.id = "mat-option-".concat(_uniqueIdCounter++);
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */


      _createClass(MatOption, [{
        key: "select",

        /**
         * Selects the option.
         * @return {?}
         */
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Deselects the option.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Sets focus onto this option.
         * @param {?=} _origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(_origin, options) {
          // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
          // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

          /** @type {?} */
          var element = this._getHostElement();

          if (typeof element.focus === 'function') {
            element.focus(options);
          }
        }
        /**
         * This method sets display styles on the option to make it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setActiveStyles",
        value: function setActiveStyles() {
          if (!this._active) {
            this._active = true;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * This method removes display styles on the option that made it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setInactiveStyles",
        value: function setInactiveStyles() {
          if (this._active) {
            this._active = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this.viewValue;
        }
        /**
         * Ensures the option is selected when activated from the keyboard.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


            event.preventDefault();
          }
        }
        /**
         * `Selects the option while indicating the selection came from the user. Used to
         * determine if the select's view -> model callback should be invoked.`
         * @return {?}
         */

      }, {
        key: "_selectViaInteraction",
        value: function _selectViaInteraction() {
          if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent(true);
          }
        }
        /**
         * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
         * attribute from single-selection, unselected options. Including the `aria-selected="false"`
         * attributes adds a significant amount of noise to screen-reader users without providing useful
         * information.
         * @return {?}
         */

      }, {
        key: "_getAriaSelected",
        value: function _getAriaSelected() {
          return this.selected || (this.multiple ? false : null);
        }
        /**
         * Returns the correct tabindex for the option depending on disabled state.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Gets the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          // Since parent components could be using the option's label to display the selected values
          // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
          // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
          // relatively cheap, however we still limit them only to selected options in order to avoid
          // hitting the DOM too often.
          if (this._selected) {
            /** @type {?} */
            var viewValue = this.viewValue;

            if (viewValue !== this._mostRecentViewValue) {
              this._mostRecentViewValue = viewValue;

              this._stateChanges.next();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * Emits the selection change event.
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_emitSelectionChangeEvent",
        value: function _emitSelectionChangeEvent() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
        }
      }, {
        key: "multiple",
        get: function get() {
          return this._parent && this._parent.multiple;
        }
        /**
         * Whether or not the option is currently selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.group && this.group.disabled || this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._parent && this._parent.disableRipple;
        }
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * @return {?}
         */

      }, {
        key: "viewValue",
        get: function get() {
          // TODO(kara): Add input property alternative for node envs.
          return (this._getHostElement().textContent || '').trim();
        }
      }]);

      return MatOption;
    }();

    MatOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-option',
        exportAs: 'matOption',
        host: {
          'role': 'option',
          '[attr.tabindex]': '_getTabIndex()',
          '[class.mat-selected]': 'selected',
          '[class.mat-option-multiple]': 'multiple',
          '[class.mat-active]': 'active',
          '[id]': 'id',
          '[attr.aria-selected]': '_getAriaSelected()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[class.mat-option-disabled]': 'disabled',
          '(click)': '_selectViaInteraction()',
          '(keydown)': '_handleKeydown($event)',
          'class': 'mat-option'
        },
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
        template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_OPTION_PARENT_COMPONENT]
        }]
      }, {
        type: MatOptgroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatOption.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * Counts the amount of option group labels that precede the specified option.
     * \@docs-private
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */

    function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        /** @type {?} */
        var optionsArray = options.toArray();
        /** @type {?} */

        var groups = optionGroups.toArray();
        /** @type {?} */

        var groupCounter = 0;

        for (var i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }

        return groupCounter;
      }

      return 0;
    }
    /**
     * Determines the position to which to scroll a panel in order for an option to be into view.
     * \@docs-private
     * @param {?} optionIndex Index of the option to be scrolled into the view.
     * @param {?} optionHeight Height of the options.
     * @param {?} currentScrollPosition Current scroll position of the panel.
     * @param {?} panelHeight Height of the panel.
     * @return {?}
     */


    function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
      /** @type {?} */
      var optionOffset = optionIndex * optionHeight;

      if (optionOffset < currentScrollPosition) {
        return optionOffset;
      }

      if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
      }

      return currentScrollPosition;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatOptionModule = function MatOptionModule() {
      _classCallCheck(this, MatOptionModule);
    };

    MatOptionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
        exports: [MatOption, MatOptgroup],
        declarations: [MatOption, MatOptgroup]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken that can be used to specify the global label options.
     * @type {?}
     */

    var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * When constructing a Date, the month is zero-based. This can be confusing, since people are
     * used to seeing them one-based. So we create these aliases to make writing the tests easier.
     * \@docs-private
     * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
     * @type {?}
     */

    var JAN = 0;
    /** @type {?} */

    var FEB = 1;
    /** @type {?} */

    var MAR = 2;
    /** @type {?} */

    var APR = 3;
    /** @type {?} */

    var MAY = 4;
    /** @type {?} */

    var JUN = 5;
    /** @type {?} */

    var JUL = 6;
    /** @type {?} */

    var AUG = 7;
    /** @type {?} */

    var SEP = 8;
    /** @type {?} */

    var OCT = 9;
    /** @type {?} */

    var NOV = 10;
    /** @type {?} */

    var DEC = 11;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=core.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~coupons-coupons-module~mobile-mobile-module-es5.js.map