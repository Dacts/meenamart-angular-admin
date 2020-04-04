function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-mobile-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/text-field.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/text-field.js ***!
    \*********************************************************/

  /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

  /***/
  function node_modulesAngularCdkEsm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
      return AutofillMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
      return CdkAutofill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
      return CdkTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
      return TextFieldModule;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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
     * Options to pass to the animationstart listener.
     * @type {?}
     */


    var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * An injectable service that can be used to monitor the autofill state of an input.
     * Based on the following blog post:
     * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
     */

    var AutofillMonitor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _platform
       * @param {?} _ngZone
       */
      function AutofillMonitor(_platform, _ngZone) {
        _classCallCheck(this, AutofillMonitor);

        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
      }
      /**
       * @param {?} elementOrRef
       * @return {?}
       */


      _createClass(AutofillMonitor, [{
        key: "monitor",
        value: function monitor(elementOrRef) {
          var _this = this;

          if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            return info.subject.asObservable();
          }
          /** @type {?} */


          var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var cssClass = 'cdk-text-field-autofilled';
          /** @type {?} */

          var listener =
          /** @type {?} */

          /**
          * @param {?} event
          * @return {?}
          */
          function listener(event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
              element.classList.add(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: true
                });
              });
            } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
              element.classList.remove(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: false
                });
              });
            }
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
          });

          this._monitoredElements.set(element, {
            subject: result,
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {
              element.removeEventListener('animationstart', listener, listenerOptions);
            }
          });

          return result.asObservable();
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(elementOrRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');

            this._monitoredElements.delete(element);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          this._monitoredElements.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this2.stopMonitoring(element);
          });
        }
      }]);

      return AutofillMonitor;
    }();

    AutofillMonitor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AutofillMonitor.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /** @nocollapse */


    AutofillMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AutofillMonitor_Factory() {
        return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: AutofillMonitor,
      providedIn: "root"
    });
    /**
     * A directive that can be used to monitor the autofill state of an input.
     */

    var CdkAutofill =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _autofillMonitor
       */
      function CdkAutofill(_elementRef, _autofillMonitor) {
        _classCallCheck(this, CdkAutofill);

        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */

        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(CdkAutofill, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._autofillMonitor.monitor(this._elementRef).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this3.cdkAutofill.emit(event);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._autofillMonitor.stopMonitoring(this._elementRef);
        }
      }]);

      return CdkAutofill;
    }();

    CdkAutofill.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkAutofill]'
      }]
    }];
    /** @nocollapse */

    CdkAutofill.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: AutofillMonitor
      }];
    };

    CdkAutofill.propDecorators = {
      cdkAutofill: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     */

    var CdkTextareaAutosize =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} _ngZone
       */
      function CdkTextareaAutosize(_elementRef, _platform, _ngZone) {
        _classCallCheck(this, CdkTextareaAutosize);

        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */

        this._previousMinRows = -1;
        this._textareaElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Minimum amount of rows in the textarea.
       * @return {?}
       */


      _createClass(CdkTextareaAutosize, [{
        key: "_setMinHeight",

        /**
         * Sets the minimum height of the textarea as determined by minRows.
         * @return {?}
         */
        value: function _setMinHeight() {
          /** @type {?} */
          var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

          if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
          }
        }
        /**
         * Sets the maximum height of the textarea as determined by maxRows.
         * @return {?}
         */

      }, {
        key: "_setMaxHeight",
        value: function _setMaxHeight() {
          /** @type {?} */
          var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

          if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this4.resizeToFitContent(true);
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Cache the height of a single-row textarea if it has not already been cached.
         *
         * We need to know how large a single "row" of a textarea is in order to apply minRows and
         * maxRows. For the initial version, we will assume that the height of a single line in the
         * textarea does not ever change.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheTextareaLineHeight",
        value: function _cacheTextareaLineHeight() {
          if (this._cachedLineHeight) {
            return;
          } // Use a clone element because we have to override some styles.

          /** @type {?} */


          var textareaClone =
          /** @type {?} */
          this._textareaElement.cloneNode(false);

          textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
          // `visibility: hidden` so that nothing is rendered. Clear any other styles that
          // would affect the height.

          textareaClone.style.position = 'absolute';
          textareaClone.style.visibility = 'hidden';
          textareaClone.style.border = 'none';
          textareaClone.style.padding = '0';
          textareaClone.style.height = '';
          textareaClone.style.minHeight = '';
          textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
          // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
          // As a workaround that removes the extra space for the scrollbar, we can just set overflow
          // to hidden. This ensures that there is no invalid calculation of the line height.
          // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

          textareaClone.style.overflow = 'hidden';

          /** @type {?} */
          this._textareaElement.parentNode.appendChild(textareaClone);

          this._cachedLineHeight = textareaClone.clientHeight;

          /** @type {?} */
          this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


          this._setMinHeight();

          this._setMaxHeight();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._platform.isBrowser) {
            this.resizeToFitContent();
          }
        }
        /**
         * Resize the textarea to fit its content.
         * @param {?=} force Whether to force a height recalculation. By default the height will be
         *    recalculated only if the value changed since the last call.
         * @return {?}
         */

      }, {
        key: "resizeToFitContent",
        value: function resizeToFitContent() {
          var _this5 = this;

          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          // If autosizing is disabled, just skip everything else
          if (!this._enabled) {
            return;
          }

          this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
          // in checking the height of the textarea.


          if (!this._cachedLineHeight) {
            return;
          }
          /** @type {?} */


          var textarea =
          /** @type {?} */
          this._elementRef.nativeElement;
          /** @type {?} */

          var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

          if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
          }
          /** @type {?} */


          var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
          // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
          // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
          // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
          // need to be removed temporarily.

          textarea.classList.add('cdk-textarea-autosize-measuring');
          textarea.placeholder = ''; // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
          // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

          /** @type {?} */

          var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

          textarea.style.height = "".concat(height, "px");
          textarea.classList.remove('cdk-textarea-autosize-measuring');
          textarea.placeholder = placeholderText;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            } else {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            }
          });

          this._previousValue = value;
          this._previousMinRows = this._minRows;
        }
        /**
         * Resets the textarea to its original size
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          // Do not try to change the textarea, if the initialHeight has not been determined yet
          // This might potentially remove styles when reset() is called before ngAfterViewInit
          if (this._initialHeight === undefined) {
            return;
          }

          this._textareaElement.style.height = this._initialHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_noopInputHandler",
        value: function _noopInputHandler() {} // no-op handler that ensures we're running change detection on input events.

        /**
         * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
         * prevent it from scrolling to the caret position. We need to re-set the selection
         * in order for it to scroll to the proper position.
         * @private
         * @param {?} textarea
         * @return {?}
         */

      }, {
        key: "_scrollToCaretPosition",
        value: function _scrollToCaretPosition(textarea) {
          var selectionStart = textarea.selectionStart,
              selectionEnd = textarea.selectionEnd; // IE will throw an "Unspecified error" if we try to set the selection range after the
          // element has been removed from the DOM. Assert that the directive hasn't been destroyed
          // between the time we requested the animation frame and when it was executed.
          // Also note that we have to assert that the textarea is focused before we set the
          // selection range. Setting the selection range on a non-focused textarea will cause
          // it to receive focus on IE and Edge.

          if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      }, {
        key: "minRows",
        get: function get() {
          return this._minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minRows = value;

          this._setMinHeight();
        }
        /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */

      }, {
        key: "maxRows",
        get: function get() {
          return this._maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxRows = value;

          this._setMaxHeight();
        }
        /**
         * Whether autosizing is enabled or not
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
          // resizeToFitContent too early (i.e. before ngAfterViewInit)

          if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
          }
        }
      }]);

      return CdkTextareaAutosize;
    }();

    CdkTextareaAutosize.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'textarea[cdkTextareaAutosize]',
        exportAs: 'cdkTextareaAutosize',
        host: {
          'class': 'cdk-textarea-autosize',
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          'rows': '1',
          '(input)': '_noopInputHandler()'
        }
      }]
    }];
    /** @nocollapse */

    CdkTextareaAutosize.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkTextareaAutosize.propDecorators = {
      minRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMinRows']
      }],
      maxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMaxRows']
      }],
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTextareaAutosize']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TextFieldModule = function TextFieldModule() {
      _classCallCheck(this, TextFieldModule);
    };

    TextFieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [CdkAutofill, CdkTextareaAutosize],
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
        exports: [CdkAutofill, CdkTextareaAutosize]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=text-field.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/autocomplete.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/autocomplete.js ***!
    \****************************************************************/

  /*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin */

  /***/
  function node_modulesAngularMaterialEsm2015AutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return MatAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return MatAutocomplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return MatAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return getMatAutocompleteMissingPanelError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return MatAutocompleteTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return MatAutocompleteOrigin;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueAutocompleteIdCounter = 0;
    /**
     * Event object that is emitted when an autocomplete option is selected.
     */

    var MatAutocompleteSelectedEvent =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatAutocompleteSelectedEvent(source, option) {
      _classCallCheck(this, MatAutocompleteSelectedEvent);

      this.source = source;
      this.option = option;
    }; // Boilerplate for applying mixins to MatAutocomplete.

    /**
     * \@docs-private
     */


    var MatAutocompleteBase = function MatAutocompleteBase() {
      _classCallCheck(this, MatAutocompleteBase);
    };
    /** @type {?} */


    var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
    /**
     * Injection token to be used to override the default options for `mat-autocomplete`.
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
      providedIn: 'root',
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
      return {
        autoActiveFirstOption: false
      };
    }

    var MatAutocomplete =
    /*#__PURE__*/
    function (_MatAutocompleteMixin) {
      _inherits(MatAutocomplete, _MatAutocompleteMixin);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} defaults
       */
      function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this6;

        _classCallCheck(this, MatAutocomplete);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(MatAutocomplete).call(this));
        _this6._changeDetectorRef = _changeDetectorRef;
        _this6._elementRef = _elementRef;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */

        _this6.showPanel = false;
        _this6._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */

        _this6.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */

        _this6.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        _this6.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        _this6.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this6._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */

        _this6.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
        _this6._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this6;
      }
      /**
       * Whether the autocomplete panel is open.
       * @return {?}
       */


      _createClass(MatAutocomplete, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap(); // Set the initial visibility state.

          this._setVisibility();
        }
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_setScrollTop",
        value: function _setScrollTop(scrollTop) {
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Returns the panel's scrollTop.
         * @return {?}
         */

      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Panel should hide itself when the option list is empty.
         * @return {?}
         */

      }, {
        key: "_setVisibility",
        value: function _setVisibility() {
          this.showPanel = !!this.options.length;

          this._setVisibilityClasses(this._classList);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits the `select` event.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitSelectEvent",
        value: function _emitSelectEvent(option) {
          /** @type {?} */
          var event = new MatAutocompleteSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
         * @private
         * @param {?} classList
         * @return {?}
         */

      }, {
        key: "_setVisibilityClasses",
        value: function _setVisibilityClasses(classList) {
          classList['mat-autocomplete-visible'] = this.showPanel;
          classList['mat-autocomplete-hidden'] = !this.showPanel;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen && this.showPanel;
        }
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */

      }, {
        key: "autoActiveFirstOption",
        get: function get() {
          return this._autoActiveFirstOption;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "classList",
        set: function set(value) {
          if (value && value.length) {
            this._classList = value.split(' ').reduce(
            /**
            * @param {?} classList
            * @param {?} className
            * @return {?}
            */
            function (classList, className) {
              classList[className.trim()] = true;
              return classList;
            },
            /** @type {?} */
            {});
          } else {
            this._classList = {};
          }

          this._setVisibilityClasses(this._classList);

          this._elementRef.nativeElement.className = '';
        }
      }]);

      return MatAutocomplete;
    }(_MatAutocompleteMixinBase);

    MatAutocomplete.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'mat-autocomplete',
        template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        exportAs: 'matAutocomplete',
        inputs: ['disableRipple'],
        host: {
          'class': 'mat-autocomplete'
        },
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]
      }]
    }];
    /** @nocollapse */

    MatAutocomplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatAutocomplete.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          static: true
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel', {
          static: false
        }]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoActiveFirstOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      panelWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      optionSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['class']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */

    var MatAutocompleteOrigin =
    /**
     * @param {?} elementRef
     */
    function MatAutocompleteOrigin(elementRef) {
      _classCallCheck(this, MatAutocompleteOrigin);

      this.elementRef = elementRef;
    };

    MatAutocompleteOrigin.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matAutocompleteOrigin]',
        exportAs: 'matAutocompleteOrigin'
      }]
    }];
    /** @nocollapse */

    MatAutocompleteOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The height of each autocomplete option.
     * @type {?}
     */


    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /**
     * The total height of the autocomplete panel.
     * @type {?}
     */

    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /**
     * Injection token that determines the scroll handling while the autocomplete panel is open.
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * \@docs-private
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatAutocompleteTrigger;
      }),
      multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * \@docs-private
     * @return {?}
     */

    function getMatAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
    }

    var MatAutocompleteTrigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _overlay
       * @param {?} _viewContainerRef
       * @param {?} _zone
       * @param {?} _changeDetectorRef
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _formField
       * @param {?} _document
       * @param {?=} _viewportRuler
       */
      function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this7 = this;

        _classCallCheck(this, MatAutocompleteTrigger);

        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */

        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */

        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */

        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */

        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */

        this._windowBlurHandler =
        /**
        * @return {?}
        */
        function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this7._canOpenOnNextFocus = _this7._document.activeElement !== _this7._element.nativeElement || _this7.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */


        this._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when autocomplete has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */


        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */

        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */

        this.optionSelections =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(
        /**
        * @return {?}
        */
        function () {
          if (_this7.autocomplete && _this7.autocomplete.options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"]).apply(void 0, _toConsumableArray(_this7.autocomplete.options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.onSelectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // Return a stream that we'll replace with the real one once everything is in place.


          return _this7._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this7.optionSelections;
          }));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       * @return {?}
       */


      _createClass(MatAutocompleteTrigger, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this8 = this;

          if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              window.addEventListener('blur', _this8._windowBlurHandler);
            });

            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["_supportsShadowDom"])()) {
              /** @type {?} */
              var element = this._element.nativeElement;
              /** @type {?} */

              var rootNode = element.getRootNode ? element.getRootNode() : null; // We need to take the `ShadowRoot` off of `window`, because the built-in types are
              // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.

              this._isInsideShadowRoot = rootNode instanceof
              /** @type {?} */
              window.ShadowRoot;
            }
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);

            if (this.panelOpen) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
          }

          this._viewportSubscription.unsubscribe();

          this._componentDestroyed = true;

          this._destroyPanel();

          this._closeKeyEventStream.complete();
        }
        /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */

      }, {
        key: "openPanel",

        /**
         * Opens the autocomplete suggestion panel.
         * @return {?}
         */
        value: function openPanel() {
          this._attachOverlay();

          this._floatLabel();
        }
        /**
         * Closes the autocomplete suggestion panel.
         * @return {?}
         */

      }, {
        key: "closePanel",
        value: function closePanel() {
          this._resetLabel();

          if (!this._overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
          }

          this.autocomplete._isOpen = this._overlayAttached = false;

          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();

            this._closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._overlayAttached) {
            /** @type {?} */
            this._overlayRef.updatePosition();
          }
        }
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */

      }, {
        key: "_getOutsideClickStream",

        /**
         * Stream of clicks outside of the autocomplete panel.
         * @private
         * @return {?}
         */
        value: function _getOutsideClickStream() {
          var _this9 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'click'),
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.

            /** @type {?} */
            var clickTarget =
            /** @type {?} */
            _this9._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
            /** @type {?} */

            var formField = _this9._formField ? _this9._formField._elementRef.nativeElement : null;
            return _this9._overlayAttached && clickTarget !== _this9._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this9._overlayRef && !_this9._overlayRef.overlayElement.contains(clickTarget);
          }));
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this10 = this;

          Promise.resolve(null).then(
          /**
          * @return {?}
          */
          function () {
            return _this10._setTriggerValue(value);
          });
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._element.nativeElement.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
          // in line with other browsers. By default, pressing escape on IE will cause it to revert
          // the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();

            this._resetActiveItem();

            event.preventDefault();
          } else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */

            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"];

            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["TAB"]) {
              this.autocomplete._keyManager.onKeydown(event);
            } else if (isArrowKey && this._canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
              this._scrollToOption();
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var value = target.value; // Based on `NumberValueAccessor` from forms.

          if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load,
          // focus and blur, in addition to when the user actually changed the value. To
          // filter out all of the extra events, we save the value on focus and between
          // `input` events, and we check whether it changed.
          // See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this._previousValue !== value) {
            this._previousValue = value;

            this._onChange(value);

            if (this._canOpen() && this._document.activeElement === event.target) {
              this.openPanel();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
          } else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;

            this._attachOverlay();

            this._floatLabel(true);
          }
        }
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @private
         * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
         * @return {?}
         */

      }, {
        key: "_floatLabel",
        value: function _floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this._formField._animateAndLockLabel();
            } else {
              this._formField.floatLabel = 'always';
            }

            this._manuallyFloatingLabel = true;
          }
        }
        /**
         * If the label has been manually elevated, return it to its normal state.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetLabel",
        value: function _resetLabel() {
          if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
          }
        }
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToOption",
        value: function _scrollToOption() {
          /** @type {?} */
          var index = this.autocomplete._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

          if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            this.autocomplete._setScrollTop(0);
          } else {
            /** @type {?} */
            var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

            this.autocomplete._setScrollTop(newScrollPosition);
          }
        }
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToClosingActions",
        value: function _subscribeToClosingActions() {
          var _this11 = this;

          /** @type {?} */
          var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
          /** @type {?} */


          var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this11._positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var wasOpen = _this11.panelOpen;

            _this11._resetActiveItem();

            _this11.autocomplete._setVisibility();

            if (_this11.panelOpen) {
              /** @type {?} */
              _this11._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
              // event, because we may not have emitted it when the panel was attached. This
              // can happen if the users opens the panel and there are no options, but the
              // options come in slightly later or as a result of the value changing.


              if (wasOpen !== _this11.panelOpen) {
                _this11.autocomplete.opened.emit();
              }
            }

            return _this11.panelClosingActions;
          }), // when the first closing event occurs...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
          .subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this11._setValueAndClose(event);
          });
        }
        /**
         * Destroys the autocomplete suggestion panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPanel",
        value: function _destroyPanel() {
          if (this._overlayRef) {
            this.closePanel();

            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTriggerValue",
        value: function _setTriggerValue(value) {
          /** @type {?} */
          var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and shouldn't fall back to an empty string.

          /** @type {?} */

          var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
          // through change detection.

          if (this._formField) {
            this._formField._control.value = inputValue;
          } else {
            this._element.nativeElement.value = inputValue;
          }

          this._previousValue = inputValue;
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_setValueAndClose",
        value: function _setValueAndClose(event) {
          if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);

            this._setTriggerValue(event.source.value);

            this._onChange(event.source.value);

            this._element.nativeElement.focus();

            this.autocomplete._emitSelectEvent(event.source);
          }

          this.closePanel();
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         * @private
         * @param {?} skip
         * @return {?}
         */

      }, {
        key: "_clearPreviousSelectedOption",
        value: function _clearPreviousSelectedOption(skip) {
          this.autocomplete.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this12 = this;

          if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
          }
          /** @type {?} */


          var overlayRef = this._overlayRef;

          if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.

            overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] && event.altKey) {
                _this12._resetActiveItem();

                _this12._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                // reach the input itself and cause the overlay to be reopened.


                event.stopPropagation();
                event.preventDefault();
              }
            });

            if (this._viewportRuler) {
              this._viewportSubscription = this._viewportRuler.change().subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this12.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this12._getPanelWidth()
                  });
                }
              });
            }
          } else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());

            overlayRef.updateSize({
              width: this._getPanelWidth()
            });
          }

          if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
          }
          /** @type {?} */


          var wasOpen = this.panelOpen;

          this.autocomplete._setVisibility();

          this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

          this._setStrategyPositions(strategy);

          this._positionStrategy = strategy;
          return strategy;
        }
        /**
         * Sets the positions on a position strategy based on the directive's input state.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_setStrategyPositions",
        value: function _setStrategyPositions(positionStrategy) {
          /** @type {?} */
          var belowPosition = {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          };
          /** @type {?} */

          var abovePosition = {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.
            panelClass: 'mat-autocomplete-panel-above'
          };
          /** @type {?} */

          var positions;

          if (this.position === 'above') {
            positions = [abovePosition];
          } else if (this.position === 'below') {
            positions = [belowPosition];
          } else {
            positions = [belowPosition, abovePosition];
          }

          positionStrategy.withPositions(positions);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getConnectedElement",
        value: function _getConnectedElement() {
          if (this.connectedTo) {
            return this.connectedTo.elementRef;
          }

          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getPanelWidth",
        value: function _getPanelWidth() {
          return this.autocomplete.panelWidth || this._getHostWidth();
        }
        /**
         * Returns the width of the input element, so the panel width can match it.
         * @private
         * @return {?}
         */

      }, {
        key: "_getHostWidth",
        value: function _getHostWidth() {
          return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetActiveItem",
        value: function _resetActiveItem() {
          this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        }
        /**
         * Determines whether the panel can be opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_canOpen",
        value: function _canOpen() {
          /** @type {?} */
          var element = this._element.nativeElement;
          return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        }
      }, {
        key: "autocompleteDisabled",
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._overlayAttached && this.autocomplete.showPanel;
        }
      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this13 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this13._overlayAttached;
          })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this13._overlayAttached;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])()).pipe( // Normalize the output so we return a consistent type.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */

      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
          }

          return null;
        }
      }]);

      return MatAutocompleteTrigger;
    }();

    MatAutocompleteTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: "input[matAutocomplete], textarea[matAutocomplete]",
        host: {
          'class': 'mat-autocomplete-trigger',
          '[attr.autocomplete]': 'autocompleteAttribute',
          '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
          '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
          '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
          '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
          '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
          '[attr.aria-haspopup]': '!autocompleteDisabled',
          // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
          // a little earlier. This avoids issues where IE delays the focusing of the input.
          '(focusin)': '_handleFocus()',
          '(blur)': '_onTouched()',
          '(input)': '_handleInput($event)',
          '(keydown)': '_handleKeydown($event)'
        },
        exportAs: 'matAutocompleteTrigger',
        providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    MatAutocompleteTrigger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"]
      }];
    };

    MatAutocompleteTrigger.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocomplete']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompletePosition']
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteConnectedTo']
      }],
      autocompleteAttribute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['autocomplete']
      }],
      autocompleteDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteDisabled']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatAutocompleteModule = function MatAutocompleteModule() {
      _classCallCheck(this, MatAutocompleteModule);
    };

    MatAutocompleteModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]],
        exports: [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=autocomplete.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/form-field.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/form-field.js ***!
    \**************************************************************/

  /*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
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

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * Single error message to be shown underneath the form field.
     */

    var MatError = function MatError() {
      _classCallCheck(this, MatError);

      this.id = "mat-error-".concat(nextUniqueId++);
    };

    MatError.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-error',
        host: {
          'class': 'mat-error',
          'role': 'alert',
          '[attr.id]': 'id'
        }
      }]
    }];
    MatError.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the MatFormField.
     * \@docs-private
     * @type {?}
     */

    var matFormFieldAnimations = {
      /**
       * Animation that transitions the form field's error and hint messages.
       */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An interface which allows a control to work inside of a `MatFormField`.
     * @abstract
     * @template T
     */

    var MatFormFieldControl = function MatFormFieldControl() {
      _classCallCheck(this, MatFormFieldControl);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /**
     * \@docs-private
     * @param {?} align
     * @return {?}
     */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Hint text to be shown underneath the form field control.
     */

    var MatHint = function MatHint() {
      _classCallCheck(this, MatHint);

      /**
       * Whether to align the hint label at the start or end of the line.
       */
      this.align = 'start';
      /**
       * Unique ID for the hint. Used for the aria-describedby on the form field control.
       */

      this.id = "mat-hint-".concat(nextUniqueId$1++);
    };

    MatHint.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-hint',
        host: {
          'class': 'mat-hint',
          '[class.mat-right]': 'align == "end"',
          '[attr.id]': 'id',
          // Remove align attribute to prevent it from interfering with layout.
          '[attr.align]': 'null'
        }
      }]
    }];
    MatHint.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The floating label for a `mat-form-field`.
     */

    var MatLabel = function MatLabel() {
      _classCallCheck(this, MatLabel);
    };

    MatLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-label'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * \@breaking-change 8.0.0
     */

    var MatPlaceholder = function MatPlaceholder() {
      _classCallCheck(this, MatPlaceholder);
    };

    MatPlaceholder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-placeholder'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Prefix to be placed in front of the form field.
     */

    var MatPrefix = function MatPrefix() {
      _classCallCheck(this, MatPrefix);
    };

    MatPrefix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matPrefix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Suffix to be placed at the end of the form field.
     */

    var MatSuffix = function MatSuffix() {
      _classCallCheck(this, MatSuffix);
    };

    MatSuffix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matSuffix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextUniqueId$2 = 0;
    /** @type {?} */

    var floatingLabelScale = 0.75;
    /** @type {?} */

    var outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * \@docs-private
     */

    var MatFormFieldBase =
    /**
     * @param {?} _elementRef
     */
    function MatFormFieldBase(_elementRef) {
      _classCallCheck(this, MatFormFieldBase);

      this._elementRef = _elementRef;
    };
    /**
     * Base class to which we're applying the form field mixins.
     * \@docs-private
     * @type {?}
     */


    var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     * @type {?}
     */


    var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Container for form controls that applies Material Design styling and behavior.
     */

    var MatFormField =
    /*#__PURE__*/
    function (_MatFormFieldMixinBas) {
      _inherits(MatFormField, _MatFormFieldMixinBas);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} labelOptions
       * @param {?} _dir
       * @param {?} _defaults
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _animationMode
       */
      function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this14;

        _classCallCheck(this, MatFormField);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(MatFormField).call(this, _elementRef));
        _this14._elementRef = _elementRef;
        _this14._changeDetectorRef = _changeDetectorRef;
        _this14._dir = _dir;
        _this14._defaults = _defaults;
        _this14._platform = _platform;
        _this14._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */

        _this14._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */

        _this14._outlineGapCalculationNeededOnStable = false;
        _this14._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */

        _this14._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */

        _this14._subscriptAnimationState = '';
        _this14._hintLabel = ''; // Unique id for the hint label.

        _this14._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

        _this14._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
        /* Holds the previous direction emitted by directionality service change emitter.
             This is used in updateOutlineGap() method to update the width and position of the gap in the
             outline. Only relevant for the outline appearance. The direction is getting updated in the
             UI after directionality service change emission. So the outlines gaps are getting
             updated in updateOutlineGap() method before connectionContainer child direction change
             in UI. We may get wrong calculations. So we are storing the previous direction to get the
             correct outline calculations*/

        _this14._previousDirection = 'ltr';
        _this14._labelOptions = labelOptions ? labelOptions : {};
        _this14.floatLabel = _this14._labelOptions.float || 'auto';
        _this14._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

        _this14.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
        _this14._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
        return _this14;
      }
      /**
       * The form-field appearance style.
       * @return {?}
       */


      _createClass(MatFormField, [{
        key: "getConnectedOverlayOrigin",

        /**
         * Gets an ElementRef for the element that a overlay attached to the form-field should be
         * positioned relative to.
         * @return {?}
         */
        value: function getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this15 = this;

          this._validateControlChild();
          /** @type {?} */


          var control = this._control;

          if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
          } // Subscribe to changes in the child control state in order to update the form field UI.


          control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(
          /** @type {?} */
          null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._validatePlaceholders();

            _this15._syncDescribedByIds();

            _this15._changeDetectorRef.markForCheck();
          }); // Run change detection if the value changes.

          if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this15._changeDetectorRef.markForCheck();
            });
          } // Note that we have to run outside of the `NgZone` explicitly,
          // in order to avoid throwing users into an infinite loop
          // if `zone-patch-rxjs` is included.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this15._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this15._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this15._outlineGapCalculationNeededOnStable) {
                _this15.updateOutlineGap();
              }
            });
          }); // Run change detection and update the outline if the suffix or prefix changes.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._outlineGapCalculationNeededOnStable = true;

            _this15._changeDetectorRef.markForCheck();
          }); // Re-validate when the number of hints changes.

          this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._processHints();

            _this15._changeDetectorRef.markForCheck();
          }); // Update the aria-described by when the number of errors changes.


          this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15._syncDescribedByIds();

            _this15._changeDetectorRef.markForCheck();
          });

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this15.updateOutlineGap();

              _this15._previousDirection = _this15._dir.value;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._validateControlChild();

          if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Avoid animations on load.
          this._subscriptAnimationState = 'enter';

          this._changeDetectorRef.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Determines whether a class from the NgControl should be forwarded to the host element.
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_shouldForward",
        value: function _shouldForward(prop) {
          /** @type {?} */
          var ngControl = this._control ? this._control.ngControl : null;
          return ngControl && ngControl[prop];
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasPlaceholder",
        value: function _hasPlaceholder() {
          return !!(this._control && this._control.placeholder || this._placeholderChild);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasLabel",
        value: function _hasLabel() {
          return !!this._labelChild;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_shouldLabelFloat",
        value: function _shouldLabelFloat() {
          return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideControlPlaceholder",
        value: function _hideControlPlaceholder() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasFloatingLabel",
        value: function _hasFloatingLabel() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
        }
        /**
         * Determines whether to display hints or errors.
         * @return {?}
         */

      }, {
        key: "_getDisplayedMessages",
        value: function _getDisplayedMessages() {
          return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
        }
        /**
         * Animates the placeholder up and locks it in position.
         * @return {?}
         */

      }, {
        key: "_animateAndLockLabel",
        value: function _animateAndLockLabel() {
          var _this16 = this;

          if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled) {
              this._showAlwaysAnimate = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this16._showAlwaysAnimate = false;
              });
            }

            this.floatLabel = 'always';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
         * or child element with the `mat-placeholder` directive).
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePlaceholders",
        value: function _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
          }
        }
        /**
         * Does any extra processing that is required when handling the hints.
         * @private
         * @return {?}
         */

      }, {
        key: "_processHints",
        value: function _processHints() {
          this._validateHints();

          this._syncDescribedByIds();
        }
        /**
         * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
         * attribute being considered as `align="start"`.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateHints",
        value: function _validateHints() {
          var _this17 = this;

          if (this._hintChildren) {
            /** @type {?} */
            var startHint;
            /** @type {?} */

            var endHint;

            this._hintChildren.forEach(
            /**
            * @param {?} hint
            * @return {?}
            */
            function (hint) {
              if (hint.align === 'start') {
                if (startHint || _this17.hintLabel) {
                  throw getMatFormFieldDuplicatedHintError('start');
                }

                startHint = hint;
              } else if (hint.align === 'end') {
                if (endHint) {
                  throw getMatFormFieldDuplicatedHintError('end');
                }

                endHint = hint;
              }
            });
          }
        }
        /**
         * Sets the list of element IDs that describe the child control. This allows the control to update
         * its `aria-describedby` attribute accordingly.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncDescribedByIds",
        value: function _syncDescribedByIds() {
          if (this._control) {
            /** @type {?} */
            var ids = [];

            if (this._getDisplayedMessages() === 'hint') {
              /** @type {?} */
              var startHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'start';
              }) : null;
              /** @type {?} */

              var endHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'end';
              }) : null;

              if (startHint) {
                ids.push(startHint.id);
              } else if (this._hintLabel) {
                ids.push(this._hintLabelId);
              }

              if (endHint) {
                ids.push(endHint.id);
              }
            } else if (this._errorChildren) {
              ids = this._errorChildren.map(
              /**
              * @param {?} error
              * @return {?}
              */
              function (error) {
                return error.id;
              });
            }

            this._control.setDescribedByIds(ids);
          }
        }
        /**
         * Throws an error if the form field's control is missing.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateControlChild",
        value: function _validateControlChild() {
          if (!this._control) {
            throw getMatFormFieldMissingControlError();
          }
        }
        /**
         * Updates the width and position of the gap in the outline. Only relevant for the outline
         * appearance.
         * @return {?}
         */

      }, {
        key: "updateOutlineGap",
        value: function updateOutlineGap() {
          /** @type {?} */
          var labelEl = this._label ? this._label.nativeElement : null;

          if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
            return;
          }

          if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
          } // If the element is not present in the DOM, the outline gap will need to be calculated
          // the next time it is checked and in the DOM.


          if (!
          /** @type {?} */
          document.documentElement.contains(this._elementRef.nativeElement)) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
          }
          /** @type {?} */


          var startWidth = 0;
          /** @type {?} */

          var gapWidth = 0;
          /** @type {?} */

          var container = this._connectionContainerRef.nativeElement;
          /** @type {?} */

          var startEls = container.querySelectorAll('.mat-form-field-outline-start');
          /** @type {?} */

          var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

          if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

            if (containerRect.width === 0 && containerRect.height === 0) {
              this._outlineGapCalculationNeededOnStable = true;
              this._outlineGapCalculationNeededImmediately = false;
              return;
            }
            /** @type {?} */


            var containerStart = this._getStartEnd(containerRect);
            /** @type {?} */


            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */


            var labelWidth = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = labelEl.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;
                labelWidth += child.offsetWidth;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            startWidth = labelStart - containerStart - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
          }

          for (var i = 0; i < startEls.length; i++) {
            startEls.item(i).style.width = "".concat(startWidth, "px");
          }

          for (var _i = 0; _i < gapEls.length; _i++) {
            gapEls.item(_i).style.width = "".concat(gapWidth, "px");
          }

          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
        }
        /**
         * Gets the start end of the rect considering the current directionality.
         * @private
         * @param {?} rect
         * @return {?}
         */

      }, {
        key: "_getStartEnd",
        value: function _getStartEnd(rect) {
          return this._previousDirection === 'rtl' ? rect.right : rect.left;
        }
      }, {
        key: "appearance",
        get: function get() {
          return this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldValue = this._appearance;
          this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

          if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
          }
        }
        /**
         * Whether the required marker should be hidden.
         * @return {?}
         */

      }, {
        key: "hideRequiredMarker",
        get: function get() {
          return this._hideRequiredMarker;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the floating label should always float or not.
         * @return {?}
         */

      }, {
        key: "_shouldAlwaysFloat",
        get: function get() {
          return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        }
        /**
         * Whether the label can float or not.
         * @return {?}
         */

      }, {
        key: "_canLabelFloat",
        get: function get() {
          return this.floatLabel !== 'never';
        }
        /**
         * Text for the form field hint.
         * @return {?}
         */

      }, {
        key: "hintLabel",
        get: function get() {
          return this._hintLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hintLabel = value;

          this._processHints();
        }
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */

      }, {
        key: "floatLabel",
        get: function get() {
          return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._floatLabel) {
            this._floatLabel = value || this._labelOptions.float || 'auto';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_control",
        get: function get() {
          // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
          // and ViewEngine. We should clean this up once Ivy is the default renderer.
          return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._explicitFormFieldControl = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_labelChild",
        get: function get() {
          return this._labelChildNonStatic || this._labelChildStatic;
        }
      }]);

      return MatFormField;
    }(_MatFormFieldMixinBase);

    MatFormField.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-form-field',
        exportAs: 'matFormField',
        template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
        // MatInput is a directive and can't have styles, so we need to include its styles here
        // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
        // big deal for people who aren't using MatInput.
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
        animations: [matFormFieldAnimations.transitionMessages],
        host: {
          'class': 'mat-form-field',
          '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
          '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
          '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
          '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
          '[class.mat-form-field-invalid]': '_control.errorState',
          '[class.mat-form-field-can-float]': '_canLabelFloat',
          '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
          '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
          '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
          '[class.mat-form-field-disabled]': '_control.disabled',
          '[class.mat-form-field-autofilled]': '_control.autofilled',
          '[class.mat-focused]': '_control.focused',
          '[class.mat-accent]': 'color == "accent"',
          '[class.mat-warn]': 'color == "warn"',
          '[class.ng-untouched]': '_shouldForward("untouched")',
          '[class.ng-touched]': '_shouldForward("touched")',
          '[class.ng-pristine]': '_shouldForward("pristine")',
          '[class.ng-dirty]': '_shouldForward("dirty")',
          '[class.ng-valid]': '_shouldForward("valid")',
          '[class.ng-invalid]': '_shouldForward("invalid")',
          '[class.ng-pending]': '_shouldForward("pending")',
          '[class._mat-animation-noopable]': '!_animationsEnabled'
        },
        inputs: ['color'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatFormField.ctorParameters = function () {
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
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatFormField.propDecorators = {
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideRequiredMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hintLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      floatLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      underlineRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['underline', {
          static: false
        }]
      }],
      _connectionContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['connectionContainer', {
          static: true
        }]
      }],
      _inputContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['inputContainer', {
          static: false
        }]
      }],
      _label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['label', {
          static: false
        }]
      }],
      _controlNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatFormFieldControl, {
          static: false
        }]
      }],
      _controlStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatFormFieldControl, {
          static: true
        }]
      }],
      _labelChildNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatLabel, {
          static: false
        }]
      }],
      _labelChildStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatLabel, {
          static: true
        }]
      }],
      _placeholderChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatPlaceholder, {
          static: false
        }]
      }],
      _errorChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatError]
      }],
      _hintChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatHint]
      }],
      _prefixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatPrefix]
      }],
      _suffixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatSuffix]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatFormFieldModule = function MatFormFieldModule() {
      _classCallCheck(this, MatFormFieldModule);
    };

    MatFormFieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]],
        exports: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=form-field.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/input.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/input.js ***!
    \*********************************************************/

  /*! exports provided: MatTextareaAutosize, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */

  /***/
  function node_modulesAngularMaterialEsm2015InputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
      return MatTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInput", function () {
      return MatInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
      return getMatInputUnsupportedTypeError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
      return MatInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
      return MAT_INPUT_VALUE_ACCESSOR;
    });
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
     * Directive to automatically resize a textarea to fit its content.
     * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
     * \@breaking-change 8.0.0
     */


    var MatTextareaAutosize =
    /*#__PURE__*/
    function (_angular_cdk_text_fie) {
      _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

      function MatTextareaAutosize() {
        _classCallCheck(this, MatTextareaAutosize);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTextareaAutosize).apply(this, arguments));
      }

      _createClass(MatTextareaAutosize, [{
        key: "matAutosizeMinRows",

        /**
         * @return {?}
         */
        get: function get() {
          return this.minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.minRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosizeMaxRows",
        get: function get() {
          return this.maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.maxRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matTextareaAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
      }]);

      return MatTextareaAutosize;
    }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

    MatTextareaAutosize.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
        exportAs: 'matTextareaAutosize',
        inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
        host: {
          'class': 'cdk-textarea-autosize mat-autosize',
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          'rows': '1',
          '(input)': '_noopInputHandler()'
        }
      }]
    }];
    MatTextareaAutosize.propDecorators = {
      matAutosizeMinRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosizeMaxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-autosize']
      }],
      matTextareaAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @param {?} type
     * @return {?}
     */

    function getMatInputUnsupportedTypeError(type) {
      return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This token is used to inject the object whose value should be set into `MatInput`. If none is
     * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
     * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
     * value to them.
     * @type {?}
     */


    var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

    /** @type {?} */

    var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
    /** @type {?} */

    var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

    /**
     * \@docs-private
     */

    var MatInputBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatInputBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };
    /** @type {?} */


    var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
    /**
     * Directive that allows a native input to work inside a `MatFormField`.
     */


    var MatInput =
    /*#__PURE__*/
    function (_MatInputMixinBase2) {
      _inherits(MatInput, _MatInputMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} ngControl
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} inputValueAccessor
       * @param {?} _autofillMonitor
       * @param {?} ngZone
       */
      function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this18;

        _classCallCheck(this, MatInput);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(MatInput).call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl));
        _this18._elementRef = _elementRef;
        _this18._platform = _platform;
        _this18.ngControl = ngControl;
        _this18._autofillMonitor = _autofillMonitor;
        _this18._uid = "mat-input-".concat(nextUniqueId++);
        /**
         * Whether the component is being rendered on the server.
         */

        _this18._isServer = false;
        /**
         * Whether the component is a native html select.
         */

        _this18._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this18.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this18.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this18.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this18.autofilled = false;
        _this18._disabled = false;
        _this18._required = false;
        _this18._type = 'text';
        _this18._readonly = false;
        _this18._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(
        /**
        * @param {?} t
        * @return {?}
        */
        function (t) {
          return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
        });
        /** @type {?} */

        var element = _this18._elementRef.nativeElement; // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.

        _this18._inputValueAccessor = inputValueAccessor || element;
        _this18._previousNativeValue = _this18.value; // Force setter to be called in case id was not specified.

        _this18.id = _this18.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.

        if (_platform.IOS) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _elementRef.nativeElement.addEventListener('keyup',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var el =
              /** @type {?} */
              event.target;

              if (!el.value && !el.selectionStart && !el.selectionEnd) {
                // Note: Just setting `0, 0` doesn't fix the issue. Setting
                // `1, 1` fixes it for the first time that you type text and
                // then hold delete. Toggling to `1, 1` and then back to
                // `0, 0` seems to completely fix it.
                el.setSelectionRange(1, 1);
                el.setSelectionRange(0, 0);
              }
            });
          });
        }

        _this18._isServer = !_this18._platform.isBrowser;
        _this18._isNativeSelect = element.nodeName.toLowerCase() === 'select';

        if (_this18._isNativeSelect) {
          _this18.controlType =
          /** @type {?} */
          element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
        }

        return _this18;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      _createClass(MatInput, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this19 = this;

          if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this19.autofilled = event.isAutofilled;

              _this19.stateChanges.next();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();

          if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          } // We need to dirty-check the native element's value, because there are some cases where
          // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
          // updating the value using `emitEvent: false`).


          this._dirtyCheckNativeValue();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Callback for the cases where the focused state of the input changes.
         * @param {?} isFocused
         * @return {?}
         */

      }, {
        key: "_focusChanged",
        value: function _focusChanged(isFocused) {
          if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {} // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.

        /**
         * Does some manual dirty checking on the native input `value` property.
         * @protected
         * @return {?}
         */

      }, {
        key: "_dirtyCheckNativeValue",
        value: function _dirtyCheckNativeValue() {
          /** @type {?} */
          var newValue = this._elementRef.nativeElement.value;

          if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
          }
        }
        /**
         * Make sure the input is a supported type.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateType",
        value: function _validateType() {
          if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
          }
        }
        /**
         * Checks whether the input type is one of the types that are never empty.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isNeverEmpty",
        value: function _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1;
        }
        /**
         * Checks whether the input is invalid based on the native validation.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isBadInput",
        value: function _isBadInput() {
          // The `validity` property won't be present on platform-server.

          /** @type {?} */
          var validity =
          /** @type {?} */
          this._elementRef.nativeElement.validity;
          return validity && validity.badInput;
        }
        /**
         * Determines if the component host is a textarea.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isTextarea",
        value: function _isTextarea() {
          return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",

        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          // Do not re-focus the input element if the element is already focused. Otherwise it can happen
          // that someone clicks on a time input and the cursor resets to the "hours" field while the
          // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
          if (!this.focused) {
            this.focus();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
          }

          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
          // Reset from here to ensure that the element doesn't become stuck.

          if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Input type of the element.
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value || 'text';

          this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
          // input element. To ensure that bindings for `type` work, we need to sync the setter
          // with the native property. Textarea elements don't support the type property or attribute.


          if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            /** @type {?} */
            this._elementRef.nativeElement.type = this._type;
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._inputValueAccessor.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
          }
        }
        /**
         * Whether the element is readonly.
         * @return {?}
         */

      }, {
        key: "readonly",
        get: function get() {
          return this._readonly;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.

            /** @type {?} */
            var selectElement =
            /** @type {?} */
            this._elementRef.nativeElement;
            /** @type {?} */

            var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

            return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
          } else {
            return this.focused || !this.empty;
          }
        }
      }]);

      return MatInput;
    }(_MatInputMixinBase);

    MatInput.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
        exportAs: 'matInput',
        host: {
          /**
           * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
           */
          'class': 'mat-input-element mat-form-field-autofill-control',
          '[class.mat-input-server]': '_isServer',
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          '[attr.id]': 'id',
          '[attr.placeholder]': 'placeholder',
          '[disabled]': 'disabled',
          '[required]': 'required',
          '[attr.readonly]': 'readonly && !_isNativeSelect || null',
          '[attr.aria-describedby]': '_ariaDescribedby || null',
          '[attr.aria-invalid]': 'errorState',
          '[attr.aria-required]': 'required.toString()',
          '(blur)': '_focusChanged(false)',
          '(focus)': '_focusChanged(true)',
          '(input)': '_onInput()'
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]
      }]
    }];
    /** @nocollapse */

    MatInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_INPUT_VALUE_ACCESSOR]
        }]
      }, {
        type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MatInput.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatInputModule = function MatInputModule() {
      _classCallCheck(this, MatInputModule);
    };

    MatInputModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [MatInput, MatTextareaAutosize],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
        exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=input.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileAdddashboardcomponentAdddashboardcomponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n\n    <nb-card-header>Add Dashboard Component</nb-card-header>\n    <nb-card-body>\n        <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Component Type : </label>\n                <div class=\"col-sm-9\">\n                    <nb-select selected=\"\" style=\"width: 100%;\" formControlName=\"component_type\">\n                        <!-- <nb-option value=\"\">All SubCategories List</nb-option> -->\n                        <nb-option *ngFor=\"let item of componentType\" [value]=\"item.id\">{{item.component_name}}</nb-option>\n                        <!-- <nb-option value=\"0\">Others</nb-option> -->\n                    </nb-select>\n                    <div *ngIf=\"submited&&formGroup.get('component_type').invalid&&formGroup.get('component_type').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                    <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"uploading\">Add Category</button>\n                </div>\n            </div>\n        </form>\n    </nb-card-body>\n\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/componentdetails/componentdetails.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/componentdetails/componentdetails.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileComponentdetailsComponentdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!loading\" [ngSwitch]=\"data.component.component_name\">\n    <ngx-slideradds [data]=\"data\" (eventEmitor)=\"refresh($event)\" *ngSwitchCase=\"'Slider Adds'\"></ngx-slideradds>\n    <ngx-imageadd [data]=\"data\" (eventEmitor)=\"refresh($event)\" *ngSwitchCase=\"'Image Add'\"></ngx-imageadd>\n    <ngx-productslider [data]=\"data\" (eventEmitor)=\"refresh($event)\" *ngSwitchCase=\"'Product Slider'\"></ngx-productslider>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/addproduct/addproduct.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/addproduct/addproduct.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileComponentsAddproductAddproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <nb-card>\n                <nb-card-header></nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"formGroup\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Product </label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" [matAutocomplete]=\"auto\" placeholder=\"Category Name ...\" formControlName=\"productName\">\n                                <mat-autocomplete #auto=\"matAutocomplete\">\n                                    <mat-option style=\"background-color: white;color:black;\" *ngFor=\"let state of suggestion\" [value]=\"state.product_name\" (click)=\"onSelect(state.id)\">\n                                        <img class=\"example-option-img\" aria-hidden [src]=\"baseurl+state.images\" height=\"50\">\n                                        <span>{{state.product_name}}</span> |\n                                        <small>Id: {{state.id}}</small>\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/imageadd/imageadd.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/imageadd/imageadd.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileComponentsImageaddImageaddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <nb-card *ngIf=\"data.data.length == 0\">\n                <nb-card-header>{{data.component.component_name}}</nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Title</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Category Name ...\" formControlName=\"title\">\n                                <div *ngIf=\"submited&&formGroup.get('title').invalid&&formGroup.get('title').errors.required\">\n                                    <p class=\"text-danger\">Please Fill this field</p>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Slide Image</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"file\" nbInput fullWidth (change)=\"uploadImage($event)\">\n                                <div *ngIf=\"submited&&formGroup.get('file').invalid&&formGroup.get('file').errors.required\">\n                                    <p class=\"text-danger\">Please upload a file</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n                                <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"\">Submit</button>\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n\n            <nb-card *ngIf=\"data.data.length > 0\">\n                <nb-card-header>{{data.data[0].title}}</nb-card-header>\n                <nb-card-body>\n                    <div [ngStyle]=\"{'width': '100%',\n                                'height': '250px',\n                                'background-image': 'url('+baseUrl+data.data[0].image+')',\n                                'background-size': 'cover',\n                                'background-repeat': 'no-repeat',\n                                'background-position': 'center',\n                                'background-color':'red'\n                                }\">\n\n                    </div>\n                </nb-card-body>\n            </nb-card>\n\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n                <nb-card-header></nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"addproductGroup\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Product </label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" [matAutocomplete]=\"auto\" placeholder=\"Category Name ...\" formControlName=\"productName\">\n                                <mat-autocomplete #auto=\"matAutocomplete\">\n                                    <mat-option style=\"background-color: white;color:black;\" *ngFor=\"let state of suggestion\" [value]=\"state.product_name\" (click)=\"onSelect(state.id)\">\n                                        <img class=\"example-option-img\" aria-hidden [src]=\"baseUrl+state.images\" height=\"50\">\n                                        <span>{{state.product_name}}</span> |\n                                        <small>Id: {{state.id}}</small>\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n        </div>\n        <div class=\"col-lg-8\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n                <nb-card-header>\n                    Product Table\n                    <!-- <nb-action style=\"float: right;\">\n                        <button [routerLink]=\"['','mobile','addproduct','slider',selectedSliderId]\" nbButton status=\"primary\" [disabled]=\"false\">Add Component</button>\n                    </nb-action> -->\n                </nb-card-header>\n\n                <nb-card-body>\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>\n                                    Product Id\n                                </th>\n                                <th>\n                                    Product Name\n                                </th>\n\n                                <th>\n                                    Delete\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let x of data.data[0].product\">\n                                <td>\n                                    {{x.id}}\n                                </td>\n                                <td>\n                                    {{x.product_name}}\n                                </td>\n                                <td>\n                                    <i class=\"nb-trash\" (click)=\"onDelete(x.id)\" style=\"font-size: 35px;cursor:pointer;\" aria-hidden=\"true\"></i>\n                                    <!--(click)=\"onDelete(selectedSliderId,x.id)\" <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                                    <!-- <i class=\"fas fa-arrow-up text-center\" style=\"font-size: 25px;\"></i> -->\n                                </td>\n\n\n                            </tr>\n                        </tbody>\n\n                    </table>\n                </nb-card-body>\n            </nb-card>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/productslider/productslider.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/productslider/productslider.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileComponentsProductsliderProductsliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\" *ngIf=\"data.data.length == 0\">\n            <nb-card>\n                <nb-card-header>{{data.component.component_name}}</nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Title</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Category Name ...\" formControlName=\"title\">\n                                <div *ngIf=\"submited&&formGroup.get('title').invalid&&formGroup.get('title').errors.required\">\n                                    <p class=\"text-danger\">Please Fill this field</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n                                <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"\">Submit</button>\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n\n            <!-- <nb-card *ngIf=\"data.data.length > 0\">\n                <nb-card-header>{{data.data[0].title}}</nb-card-header>\n                <nb-card-body>\n                    <div [ngStyle]=\"{'width': '100%',\n                              'height': '250px',\n                              'background-image': 'url('+baseUrl+data.data[0].image+')',\n                              'background-size': 'cover',\n                              'background-repeat': 'no-repeat',\n                              'background-position': 'center',\n                              'background-color':'red'\n                              }\">\n\n                    </div>\n                </nb-card-body>\n            </nb-card> -->\n\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n                <nb-card-header></nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"addproductGroup\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Product </label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" [matAutocomplete]=\"auto\" placeholder=\"Category Name ...\" formControlName=\"productName\">\n                                <mat-autocomplete #auto=\"matAutocomplete\">\n                                    <mat-option style=\"background-color: white;color:black;\" *ngFor=\"let state of suggestion\" [value]=\"state.product_name\" (click)=\"onSelect(state.id)\">\n                                        <img class=\"example-option-img\" aria-hidden [src]=\"baseUrl+state.images\" height=\"50\">\n                                        <span>{{state.product_name}}</span> |\n                                        <small>Id: {{state.id}}</small>\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n                <nb-card-header>\n                    {{data.data[0].title}} ( Product Table)\n                    <!-- <nb-action style=\"float: right;\">\n                      <button [routerLink]=\"['','mobile','addproduct','slider',selectedSliderId]\" nbButton status=\"primary\" [disabled]=\"false\">Add Component</button>\n                  </nb-action> -->\n                </nb-card-header>\n\n                <nb-card-body>\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>\n                                    Product Id\n                                </th>\n                                <th>\n                                    Product Name\n                                </th>\n\n                                <th>\n                                    Delete\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let x of data.data[0].product\">\n                                <td>\n                                    {{x.id}}\n                                </td>\n                                <td>\n                                    {{x.product_name}}\n                                </td>\n                                <td>\n                                    <i class=\"nb-trash\" (click)=\"onDelete(x.id)\" style=\"font-size: 35px;cursor:pointer;\" aria-hidden=\"true\"></i>\n                                    <!--(click)=\"onDelete(selectedSliderId,x.id)\" <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                                    <!-- <i class=\"fas fa-arrow-up text-center\" style=\"font-size: 25px;\"></i> -->\n                                </td>\n\n\n                            </tr>\n                        </tbody>\n\n                    </table>\n                </nb-card-body>\n            </nb-card>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/slideradds/slideradds.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/slideradds/slideradds.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileComponentsSlideraddsSlideraddsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n            <nb-card>\n                <nb-card-header>{{data.component.component_name}}</nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onTitleSubmit()\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Title</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Category Name ...\" formControlName=\"title\">\n                                <div *ngIf=\"submited&&formGroup.get('title').invalid&&formGroup.get('title').errors.required\">\n                                    <p class=\"text-danger\">Please Fill this field</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\" *ngIf=\"data.data.length == 0\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n                                <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"uploading\">Submit</button>\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n            </nb-card>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n\n                <nb-card-header>Add Slides</nb-card-header>\n                <nb-card-body>\n                    <form [formGroup]=\"slideGroup\" (ngSubmit)=\"onSubmitSLides()\">\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Slide Title</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Slide Name\" formControlName=\"title\">\n                                <div *ngIf=\"submitedSlide&&slideGroup.get('title').invalid&&slideGroup.get('title').errors.required\">\n                                    <p class=\"text-danger\">Please Fill this field</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Slide Image</label>\n                            <div class=\"col-sm-9\">\n                                <input type=\"file\" nbInput fullWidth (change)=\"uploadImage($event)\">\n                                <div *ngIf=\"submitedSlide&&slideGroup.get('file').invalid&&slideGroup.get('file').errors.required\">\n                                    <p class=\"text-danger\">Please upload a file</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"offset-sm-3 col-sm-9\">\n                                <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"submitedSlide\">Add Slides</button>\n                            </div>\n                        </div>\n                    </form>\n                </nb-card-body>\n\n            </nb-card>\n        </div>\n\n\n\n        <div class=\"col-lg-6 col-md-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card>\n                <nb-card-header>\n                    Slides\n                </nb-card-header>\n                <nb-card-body>\n                    <div class=\"container\">\n                        <div class=\"row\" style=\"margin-top:8px;\" *ngFor=\"let x of data.data[0].entries\">\n                            <div class=\"col-lg-6\">\n                                <div [ngStyle]=\"{'width': '300px',\n                                  'height': '150px',\n                                  'background-image': 'url('+BASE_URL+x.image+')',\n                                  'background-size': 'cover',\n                                  'background-repeat': 'no-repeat',\n                                  'background-position': 'center',\n                                  'background-color':'red'\n                                  }\">\n\n                                </div>\n\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <strong>Title : </strong><br> {{x.title}}\n                                <br><br>\n                                <button type=\"submit\" (click)=\"onSelectSlider(x.id,x.product)\" nbButton status=\"primary\" [disabled]=\"uploading\">products</button>\n                                <div style=\"margin-top:10px;\">\n                                    <button (click)=\"onDeleteSlider(x.id,content)\">\n                                    <i class=\"nb-trash\"  style=\"font-size: 35px;cursor:pointer;\" aria-hidden=\"true\"></i>\n                                  </button>\n                                </div>\n\n\n                            </div>\n                            <div class=\"col-lg-12 divider\">\n\n                            </div>\n                        </div>\n                    </div>\n                </nb-card-body>\n            </nb-card>\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"data.data.length > 0\">\n            <nb-card *ngIf=\"selectedSliderId != 0\">\n                <nb-card-header>\n                    Product Table\n                    <nb-action style=\"float: right;\">\n                        <button [routerLink]=\"['','mobile','addproduct','slider',selectedSliderId]\" nbButton status=\"primary\" [disabled]=\"false\">Add Component</button>\n                    </nb-action>\n                </nb-card-header>\n\n                <nb-card-body>\n                    <table>\n                        <thead>\n                            <tr>\n                                <th>\n                                    Product Id\n                                </th>\n                                <th>\n                                    Product Name\n                                </th>\n\n                                <th>\n                                    Delete\n                                </th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let x of productList\">\n                                <td>\n                                    {{x.id}}\n                                </td>\n                                <td>\n                                    {{x.product_name}}\n                                </td>\n                                <td>\n                                    <i (click)=\"onDelete(selectedSliderId,x.id)\" class=\"nb-trash\" style=\"font-size: 35px;cursor:pointer;\" aria-hidden=\"true\"></i>\n                                    <!-- <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                                    <!-- <i class=\"fas fa-arrow-up text-center\" style=\"font-size: 25px;\"></i> -->\n                                </td>\n\n\n                            </tr>\n                        </tbody>\n\n                    </table>\n                </nb-card-body>\n            </nb-card>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirmation !</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n        <strong>Are you sure you want to delete ?</strong>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('sure')\">sure</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('cancel')\">cancel</button>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/dashboard/dashboard.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/dashboard/dashboard.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>\n        All Category\n        <nb-action style=\"float: right;\">\n            <button routerLink=\"/mobile/addcomponent\" nbButton status=\"primary\" [disabled]=\"false\">Add Component</button>\n        </nb-action>\n    </nb-card-header>\n\n\n    <nb-card-body>\n        <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table> -->\n        <table>\n            <thead>\n                <tr>\n                    <th>\n                        Id\n                    </th>\n                    <th>\n                        Component Type\n                    </th>\n\n                    <th>\n                        Delete\n                    </th>\n                    <th>\n                        Move up\n                    </th>\n                    <th>\n                        Move Down\n                    </th>\n\n                    <th>\n                        Actions\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let x of screenComponent\">\n                    <td>\n                        {{x.id}}\n                    </td>\n                    <td>\n                        {{x.component_type.component_name}}\n                    </td>\n                    <td>\n                        <i class=\"nb-trash\" style=\"font-size: 35px;cursor:pointer;\" aria-hidden=\"true\"></i>\n                        <!-- <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                        <!-- <i class=\"fas fa-arrow-up text-center\" style=\"font-size: 25px;\"></i> -->\n                    </td>\n                    <td class=\"text-center\">\n                        <!-- <i class=\"nb-trash\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                        <!-- <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                        <i class=\"fas fa-arrow-up\" style=\"font-size: 25px;cursor:pointer;\"></i>\n                    </td>\n                    <td class=\"text-center\">\n                        <!-- <i class=\"nb-trash\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                        <!-- <i class=\"arrow-upward-outline\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i> -->\n                        <i class=\"fas fa-arrow-down\" style=\"font-size: 25px;cursor:pointer;\"></i>\n                    </td>\n                    <td>\n                        <button [routerLink]=\"['details',x.id]\" nbButton status=\"primary\" [disabled]=\"(\n                          x.component_type.component_name == 'Row Category' || x.component_type.component_name == 'List Category'\n                        )?true:false\"> Details </button>\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n    </nb-card-body>\n    <div class=\"row card-footer\">\n        <!-- <div style=\"padding-left: 16px;\">\n        <ngb-pagination [collectionSize]=\"paginator.total_count\" [boundaryLinks]=\"true\" (pageChange)=\"getCouponData($event)\" [pageSize]=\"10\"></ngb-pagination>\n    </div> -->\n\n    </div>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/editscreen/editscreen.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/editscreen/editscreen.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileEditscreenEditscreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-body>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"mobilescreen\" style=\"background-color: white;\">\n                        <div class=\"appBar\">\n\n                        </div>\n                        <ngx-slider></ngx-slider>\n                        <ngx-productwithtitle></ngx-productwithtitle>\n                        <ngx-imagesingle></ngx-imagesingle>\n                        <ngx-slider></ngx-slider>\n                        <ngx-imagesingle></ngx-imagesingle>\n                        <ngx-productwithtitle></ngx-productwithtitle>\n                        <ngx-productwithtitle></ngx-productwithtitle>\n                        <ngx-productwithtitle></ngx-productwithtitle>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/imagesingle/imagesingle.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/imagesingle/imagesingle.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileLayoutImagesingleImagesingleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"showimage\">\n    <div class=\"showimage-background\">\n        <!-- Slider -->\n        <div class=\"showimage-content\">IMAGE ADD</div>\n        <div class=\"diagonal\">\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/productwithtitle/productwithtitle.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/productwithtitle/productwithtitle.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileLayoutProductwithtitleProductwithtitleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"productList\">\n    <div class=\"title\">\n        <strong>TITLE</strong>\n    </div>\n    <div class=\"productList-image\">\n        <!-- Slider -->\n        <div class=\"productList-content\">Product List</div>\n        <div class=\"diagonal\">\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/slider/slider.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/slider/slider.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileLayoutSliderSliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"slider\">\n    <div class=\"slider-image\">\n        <!-- Slider -->\n        <div class=\"slider-content\">SLIDER</div>\n        <div class=\"diagonal\">\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/topproducts/topproducts.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/topproducts/topproducts.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileLayoutTopproductsTopproductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>topproducts works!</p>\n";
    /***/
  },

  /***/
  "./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileAdddashboardcomponentAdddashboardcomponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9hZGRkYXNoYm9hcmRjb21wb25lbnQvYWRkZGFzaGJvYXJkY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdddashboardcomponentComponent */

  /***/
  function srcAppMobileAdddashboardcomponentAdddashboardcomponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdddashboardcomponentComponent", function () {
      return AdddashboardcomponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/product/product.service */
    "./src/app/services/product/product.service.ts");

    var AdddashboardcomponentComponent =
    /*#__PURE__*/
    function () {
      function AdddashboardcomponentComponent(productService, toastrService) {
        _classCallCheck(this, AdddashboardcomponentComponent);

        this.productService = productService;
        this.toastrService = toastrService;
        this.uploading = false;
        this.submited = false;
        this.componentType = [];
      }

      _createClass(AdddashboardcomponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            component_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.productService.getMethod(function (response) {
            _this20.componentType = response;
          }, function (error) {
            _this20.showToaster("OOPS !!", "Something went wrong please try again ..", "danger");
          }, {}, "dashboard/componenttype");
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          if (this.formGroup.valid) {
            // const formData = new FormData();
            // formData.append('categories_image',this.formGroup.get('file').value);
            // formData.append('category_name',this.formGroup.get('name').value);
            var data = {
              "component_type": this.formGroup.get('component_type').value
            };
            this.uploading = true;
            this.productService.postMethod(function (response) {
              _this21.uploading = false;

              _this21.showToaster("Success", "The component added successfully.", "primary");
            }, function (error) {
              console.log(error);
              _this21.uploading = false;

              _this21.showToaster("OOPS !!", "Something went wrong please try again ..", "danger");
            }, data, "dashboard/component");
          } else {
            this.showToaster("OOPS !!", "Please Select a Component type.", "danger");
          }
        }
      }, {
        key: "showToaster",
        value: function showToaster(title, body, status) {
          var config = {
            status: status,
            destroyByClick: false,
            duration: 2000,
            hasIcon: true,
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbGlobalLogicalPosition"].BOTTOM_END,
            preventDuplicates: false
          };
          this.toastrService.show(body, title, config);
        }
      }]);

      return AdddashboardcomponentComponent;
    }();

    AdddashboardcomponentComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
      }];
    };

    AdddashboardcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-adddashboardcomponent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adddashboardcomponent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adddashboardcomponent.component.scss */
      "./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]])], AdddashboardcomponentComponent);
    /***/
  },

  /***/
  "./src/app/mobile/componentdetails/componentdetails.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/mobile/componentdetails/componentdetails.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileComponentdetailsComponentdetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9jb21wb25lbnRkZXRhaWxzL2NvbXBvbmVudGRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/componentdetails/componentdetails.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/mobile/componentdetails/componentdetails.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ComponentdetailsComponent */

  /***/
  function srcAppMobileComponentdetailsComponentdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentdetailsComponent", function () {
      return ComponentdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ComponentdetailsComponent =
    /*#__PURE__*/
    function () {
      function ComponentdetailsComponent(productService, route) {
        _classCallCheck(this, ComponentdetailsComponent);

        this.productService = productService;
        this.route = route;
        this.loading = true;
      }

      _createClass(ComponentdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this22 = this;

          this.loading = true;
          this.data = {};
          var path = this.route.url.split("/");
          var id = path[path.length - 1];
          this.productService.getMethod(function (response) {
            _this22.loading = false;
            console.log(response);
            _this22.data = response;
          }, function (error) {
            console.log(error);
          }, {}, "dashboard/componentdetails/" + id.toString());
        }
      }, {
        key: "refresh",
        value: function refresh($event) {
          console.log("refresh");
          this.getData();
        }
      }]);

      return ComponentdetailsComponent;
    }();

    ComponentdetailsComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ComponentdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-componentdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./componentdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/componentdetails/componentdetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./componentdetails.component.scss */
      "./src/app/mobile/componentdetails/componentdetails.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ComponentdetailsComponent);
    /***/
  },

  /***/
  "./src/app/mobile/components/addproduct/addproduct.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/mobile/components/addproduct/addproduct.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileComponentsAddproductAddproductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9jb21wb25lbnRzL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/mobile/components/addproduct/addproduct.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/mobile/components/addproduct/addproduct.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddproductComponent */

  /***/
  function srcAppMobileComponentsAddproductAddproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddproductComponent", function () {
      return AddproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _Models_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Models/common */
    "./src/app/Models/common.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddproductComponent =
    /*#__PURE__*/
    function () {
      function AddproductComponent(productService, router) {
        _classCallCheck(this, AddproductComponent);

        this.productService = productService;
        this.router = router; // productName = new FormControl();

        this.suggestion = [];
      }

      _createClass(AddproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.baseurl = _Models_common__WEBPACK_IMPORTED_MODULE_4__["imageBaseUrl"];
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.formGroup.get('productName').valueChanges.subscribe(function (data) {
            // console.log(data);
            if (data.toString().length > 0) {
              _this23.productService.getMethod(function (response) {
                _this23.suggestion = response;
              }, function (error) {}, {
                "query": data
              }, "dashboard/search");
            } else {
              _this23.suggestion = [];
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(id) {
          console.log(id); // let path = this.router.url;

          var listOfPath = this.router.url.split("/");
          var sliderImageId = listOfPath[listOfPath.length - 1];
          this.productService.postMethod(function (response) {
            alert("Product added successfully");
          }, function (error) {}, {
            "product_id": id
          }, "dashboard/addsliderproduct/" + sliderImageId);
        }
      }]);

      return AddproductComponent;
    }();

    AddproductComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-addproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/addproduct/addproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addproduct.component.scss */
      "./src/app/mobile/components/addproduct/addproduct.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AddproductComponent);
    /***/
  },

  /***/
  "./src/app/mobile/components/imageadd/imageadd.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/mobile/components/imageadd/imageadd.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileComponentsImageaddImageaddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  border: 1px solid #f2f2f2; }\n\ntd {\n  text-align: center;\n  padding: 8px;\n  border: 1px solid #f2f2f2; }\n\nth {\n  text-align: center;\n  padding: 16px;\n  border: 1px solid #f2f2f2; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2NvbXBvbmVudHMvaW1hZ2VhZGQvRTpcXHByb2plY3Qtb25lLWZvci1hbGxcXGludGVybWVkaWF0ZVxcYW5ndWxhci1qYW4xL3NyY1xcYXBwXFxtb2JpbGVcXGNvbXBvbmVudHNcXGltYWdlYWRkXFxpbWFnZWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvY29tcG9uZW50cy9pbWFnZWFkZC9pbWFnZWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/mobile/components/imageadd/imageadd.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/mobile/components/imageadd/imageadd.component.ts ***!
    \******************************************************************/

  /*! exports provided: ImageaddComponent */

  /***/
  function srcAppMobileComponentsImageaddImageaddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageaddComponent", function () {
      return ImageaddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Models/common */
    "./src/app/Models/common.ts");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ImageaddComponent =
    /*#__PURE__*/
    function () {
      function ImageaddComponent(productService, router) {
        _classCallCheck(this, ImageaddComponent);

        this.productService = productService;
        this.router = router;
        this.eventEmitor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submited = false;
        this.baseUrl = '';
        this.loading = false;
        this.suggestion = [];
      }

      _createClass(ImageaddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.baseUrl = _Models_common__WEBPACK_IMPORTED_MODULE_3__["imageBaseUrl"];
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.addproductGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.addproductGroup.get('productName').valueChanges.subscribe(function (data) {
            // console.log(data);
            if (data.toString().length > 0) {
              _this24.productService.getMethod(function (response) {
                _this24.suggestion = response;
              }, function (error) {}, {
                "query": data
              }, "dashboard/search");
            } else {
              _this24.suggestion = [];
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this25 = this;

          console.log(">>>>");

          if (this.formGroup.valid) {
            this.loading = true;
            var formData = new FormData();
            formData.append('title', this.formGroup.get('title').value);
            formData.append('image', this.formGroup.get('file').value);
            formData.append('image_adds', this.data.id);
            this.productService.postMethod(function (response) {
              console.log(response);
              _this25.loading = false;

              _this25.eventEmitor.emit();
            }, function (error) {}, formData, "dashboard/singleimageadd/1");
          } else {
            alert("Please provide a valid details");
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage($event) {
          if ($event.target.files.length > 0) {
            this.formGroup.patchValue({
              file: $event.target.files[0]
            });
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect(id) {
          var _this26 = this;

          console.log(id); // let path = this.router.url;

          var listOfPath = this.router.url.split("/");
          var sliderImageId = listOfPath[listOfPath.length - 1];
          this.productService.postMethod(function (response) {
            alert("Product added successfully");

            _this26.eventEmitor.emit();
          }, function (error) {
            alert("Something went wrong");
          }, {
            "product_id": id,
            "image_add": this.data.data[0].id
          }, "dashboard/imageadds/add");
        }
      }, {
        key: "onDelete",
        value: function onDelete(productId) {
          var _this27 = this;

          this.productService.deleteMethod(function (response) {
            console.log(response);

            _this27.eventEmitor.emit();
          }, function (error) {
            console.log(error);
          }, {
            "product_id": productId,
            "image_add": this.data.data[0].id
          }, "dashboard/imageadds/add");
        }
      }]);

      return ImageaddComponent;
    }();

    ImageaddComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageaddComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageaddComponent.prototype, "eventEmitor", void 0);
    ImageaddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-imageadd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imageadd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/imageadd/imageadd.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imageadd.component.scss */
      "./src/app/mobile/components/imageadd/imageadd.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ImageaddComponent);
    /***/
  },

  /***/
  "./src/app/mobile/components/productslider/productslider.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/mobile/components/productslider/productslider.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileComponentsProductsliderProductsliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  border: 1px solid #f2f2f2; }\n\ntd {\n  text-align: center;\n  padding: 8px;\n  border: 1px solid #f2f2f2; }\n\nth {\n  text-align: center;\n  padding: 16px;\n  border: 1px solid #f2f2f2; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2NvbXBvbmVudHMvcHJvZHVjdHNsaWRlci9FOlxccHJvamVjdC1vbmUtZm9yLWFsbFxcaW50ZXJtZWRpYXRlXFxhbmd1bGFyLWphbjEvc3JjXFxhcHBcXG1vYmlsZVxcY29tcG9uZW50c1xccHJvZHVjdHNsaWRlclxccHJvZHVjdHNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvY29tcG9uZW50cy9wcm9kdWN0c2xpZGVyL3Byb2R1Y3RzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/components/productslider/productslider.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/mobile/components/productslider/productslider.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductsliderComponent */

  /***/
  function srcAppMobileComponentsProductsliderProductsliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsliderComponent", function () {
      return ProductsliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Models/common */
    "./src/app/Models/common.ts");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductsliderComponent =
    /*#__PURE__*/
    function () {
      function ProductsliderComponent(productService, router) {
        _classCallCheck(this, ProductsliderComponent);

        this.productService = productService;
        this.router = router;
        this.eventEmitor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submited = false;
        this.baseUrl = '';
        this.loading = false;
        this.suggestion = [];
      }

      _createClass(ProductsliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.baseUrl = _Models_common__WEBPACK_IMPORTED_MODULE_3__["imageBaseUrl"];
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          this.addproductGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.addproductGroup.get('productName').valueChanges.subscribe(function (data) {
            // console.log(data);
            if (data.toString().length > 0) {
              _this28.productService.getMethod(function (response) {
                _this28.suggestion = response;
              }, function (error) {}, {
                "query": data
              }, "dashboard/search");
            } else {
              _this28.suggestion = [];
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this29 = this;

          console.log(">>>>");

          if (this.formGroup.valid) {
            this.loading = true;
            var formData = new FormData();
            formData.append('title', this.formGroup.get('title').value); // formData.append('image',this.formGroup.get('file').value);

            formData.append('deals_component', this.data.id);
            this.productService.postMethod(function (response) {
              console.log(response);
              _this29.loading = false;

              _this29.eventEmitor.emit();
            }, function (error) {}, formData, "dashboard/productslider/1");
          } else {
            alert("Please provide a valid details");
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage($event) {
          if ($event.target.files.length > 0) {
            this.formGroup.patchValue({
              file: $event.target.files[0]
            });
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect(id) {
          var _this30 = this;

          console.log(id); // let path = this.router.url;

          var listOfPath = this.router.url.split("/");
          var sliderImageId = listOfPath[listOfPath.length - 1];
          this.productService.postMethod(function (response) {
            alert("Product added successfully");

            _this30.eventEmitor.emit();
          }, function (error) {
            alert("Something went wrong");
          }, {
            "product_id": id,
            "image_add": this.data.data[0].id
          }, "dashboard/addproductslider");
        }
      }, {
        key: "onDelete",
        value: function onDelete(productId) {
          var _this31 = this;

          this.productService.deleteMethod(function (response) {
            console.log(response);

            _this31.eventEmitor.emit();
          }, function (error) {
            console.log(error);
          }, {
            "product_id": productId,
            "image_add": this.data.data[0].id
          }, "dashboard/addproductslider");
        }
      }]);

      return ProductsliderComponent;
    }();

    ProductsliderComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductsliderComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductsliderComponent.prototype, "eventEmitor", void 0);
    ProductsliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-productslider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productslider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/productslider/productslider.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productslider.component.scss */
      "./src/app/mobile/components/productslider/productslider.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ProductsliderComponent);
    /***/
  },

  /***/
  "./src/app/mobile/components/slideradds/slideradds.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/mobile/components/slideradds/slideradds.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileComponentsSlideraddsSlideraddsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-class {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.image-container {\n  background-color: red;\n  height: 100px;\n  width: 100%; }\n\n.divider {\n  height: 0.5px;\n  background-color: grey;\n  width: 100%;\n  margin: 16px;\n  padding: 0.5px; }\n\ntable {\n  width: 100%;\n  border: 1px solid #f2f2f2; }\n\ntd {\n  text-align: center;\n  padding: 8px;\n  border: 1px solid #f2f2f2; }\n\nth {\n  text-align: center;\n  padding: 16px;\n  border: 1px solid #f2f2f2; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2NvbXBvbmVudHMvc2xpZGVyYWRkcy9FOlxccHJvamVjdC1vbmUtZm9yLWFsbFxcaW50ZXJtZWRpYXRlXFxhbmd1bGFyLWphbjEvc3JjXFxhcHBcXG1vYmlsZVxcY29tcG9uZW50c1xcc2xpZGVyYWRkc1xcc2xpZGVyYWRkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL2NvbXBvbmVudHMvc2xpZGVyYWRkcy9zbGlkZXJhZGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNsYXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMC41cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwLjVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/mobile/components/slideradds/slideradds.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/mobile/components/slideradds/slideradds.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SlideraddsComponent */

  /***/
  function srcAppMobileComponentsSlideraddsSlideraddsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideraddsComponent", function () {
      return SlideraddsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Models/common */
    "./src/app/Models/common.ts");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"); // import { EventEmitter } from 'events';


    var SlideraddsComponent =
    /*#__PURE__*/
    function () {
      function SlideraddsComponent(productServices, modalService) {
        _classCallCheck(this, SlideraddsComponent);

        this.productServices = productServices;
        this.modalService = modalService;
        this.eventEmitor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = "";
        this.submited = false;
        this.submitedSlide = false;
        this.uploading = false;
        this.productList = [];
        this.selectedSliderId = 0;
      }

      _createClass(SlideraddsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.BASE_URL = _Models_common__WEBPACK_IMPORTED_MODULE_3__["imageBaseUrl"];
          console.log(this.data);

          if (this.data.data.length > 0) {
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.data[0].title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              slder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          } else {
            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              slder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }

          this.slideGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "onTitleSubmit",
        value: function onTitleSubmit() {
          var _this32 = this;

          this.uploading = true;

          if (this.formGroup.valid) {
            this.productServices.postMethod(function (response) {
              _this32.eventEmitor.emit();

              _this32.uploading = false;
              console.log(response);
            }, function (error) {
              console.log(error);
            }, {
              "id": this.data.id,
              "title": this.formGroup.get('title').value
            }, "dashboard/slideradds/1");
          } else {
            alert("Please enter a valid details");
          }
        }
      }, {
        key: "onSelectSlider",
        value: function onSelectSlider(id, products) {
          console.log("slider Image id", id);
          this.selectedSliderId = id;
          this.productList = products;
        }
      }, {
        key: "onDelete",
        value: function onDelete(sliderId, productId) {
          var _this33 = this;

          console.log(sliderId, productId);
          this.productServices.deleteMethod(function (response) {
            console.log(response);

            _this33.eventEmitor.emit();
          }, function (error) {
            console.log(error);
          }, {
            "product_id": productId
          }, "dashboard/addsliderproduct/" + sliderId);
        }
      }, {
        key: "uploadImage",
        value: function uploadImage($event) {
          if ($event.target.files.length > 0) {
            this.slideGroup.patchValue({
              file: $event.target.files[0]
            });
          }
        }
      }, {
        key: "onSubmitSLides",
        value: function onSubmitSLides() {
          var _this34 = this;

          if (this.slideGroup.valid) {
            this.submitedSlide = true;
            var formData = new FormData();
            console.log(this.slideGroup.get('title').value);
            formData.append("title", this.slideGroup.get('title').value);
            formData.append("images", this.slideGroup.get('file').value);
            formData.append("slider", this.data.id);
            console.log(formData.forEach(function (val, key) {
              console.log(val);
            }));
            this.productServices.postMethod(function (response) {
              _this34.submitedSlide = false;
              console.log(response);

              _this34.eventEmitor.emit();
            }, function (error) {
              _this34.submitedSlide = false;
              console.log(error);
            }, formData, "dashboard/slideraddsimages/" + this.data.id);
          } else {
            this.submitedSlide = true;
            alert("Please provide a valid information");
            this.submitedSlide = false;
          }
        }
      }, {
        key: "onDeleteSlider",
        value: function onDeleteSlider(id, content) {
          this.open(id, content);
        }
      }, {
        key: "open",
        value: function open(id, content) {
          var _this35 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this35.closeResults = "Closed with: ".concat(result);
            console.log(result);

            if (result == 'sure') {
              _this35.productServices.deleteMethod(function (response) {
                console.log("deleted");

                _this35.eventEmitor.emit();
              }, function (error) {}, {}, "dashboard/slideraddsimages/" + id);
            }
          }, function (reason) {
            _this35.closeResults = "Dismissed ".concat(_this35.getDismissReason(reason));
            console.log(reason);
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return SlideraddsComponent;
    }();

    SlideraddsComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SlideraddsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SlideraddsComponent.prototype, "eventEmitor", void 0);
    SlideraddsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-slideradds',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slideradds.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/components/slideradds/slideradds.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slideradds.component.scss */
      "./src/app/mobile/components/slideradds/slideradds.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])], SlideraddsComponent);
    /***/
  },

  /***/
  "./src/app/mobile/dashboard/dashboard.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/mobile/dashboard/dashboard.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  border: 1px solid #f2f2f2; }\n\ntd {\n  text-align: center;\n  padding: 8px;\n  border: 1px solid #f2f2f2; }\n\nth {\n  text-align: center;\n  padding: 16px;\n  border: 1px solid #f2f2f2; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2Rhc2hib2FyZC9FOlxccHJvamVjdC1vbmUtZm9yLWFsbFxcaW50ZXJtZWRpYXRlXFxhbmd1bGFyLWphbjEvc3JjXFxhcHBcXG1vYmlsZVxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/dashboard/dashboard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/mobile/dashboard/dashboard.component.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppMobileDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product/product.service */
    "./src/app/services/product/product.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(productService) {
        _classCallCheck(this, DashboardComponent);

        this.productService = productService;
        this.screenComponent = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.productService.getMethod(function (response) {
            _this36.screenComponent = response;
          }, function (error) {
            alert("Something went wrong please refresh");
          }, {}, "dashboard/component");
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/mobile/dashboard/dashboard.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/mobile/editscreen/editscreen.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/mobile/editscreen/editscreen.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileEditscreenEditscreenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mobilescreen {\n  border: 1px solid #333;\n  height: 500px;\n  width: 50%;\n  overflow: scroll;\n  display: block;\n  background-color: whitesmoke; }\n\n.appBar {\n  background-color: green;\n  height: 50px;\n  width: 100%;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2VkaXRzY3JlZW4vRTpcXHByb2plY3Qtb25lLWZvci1hbGxcXGludGVybWVkaWF0ZVxcYW5ndWxhci1qYW4xL3NyY1xcYXBwXFxtb2JpbGVcXGVkaXRzY3JlZW5cXGVkaXRzY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9lZGl0c2NyZWVuL2VkaXRzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlc2NyZWVuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5hcHBCYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vLyAuc2xpZGVyLWNvbnRlbnQge1xyXG4vLyAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcclxuLy8gfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/editscreen/editscreen.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/mobile/editscreen/editscreen.component.ts ***!
    \***********************************************************/

  /*! exports provided: EditscreenComponent */

  /***/
  function srcAppMobileEditscreenEditscreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditscreenComponent", function () {
      return EditscreenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditscreenComponent =
    /*#__PURE__*/
    function () {
      function EditscreenComponent() {
        _classCallCheck(this, EditscreenComponent);
      }

      _createClass(EditscreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditscreenComponent;
    }();

    EditscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-editscreen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editscreen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/editscreen/editscreen.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editscreen.component.scss */
      "./src/app/mobile/editscreen/editscreen.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EditscreenComponent);
    /***/
  },

  /***/
  "./src/app/mobile/layout/imagesingle/imagesingle.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/mobile/layout/imagesingle/imagesingle.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileLayoutImagesingleImagesingleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showimage {\n  margin: 8px;\n  height: 100px;\n  width: 100%;\n  background-color: white;\n  border: 1px solid gray; }\n  .showimage .showimage-background {\n    width: 100%;\n    height: 100px;\n    display: inline-block;\n    background-color: white;\n    background: linear-gradient(to top left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%), linear-gradient(to top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%); }\n  .showimage .showimage-background .showimage-content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100px;\n      font-weight: bold;\n      color: gray;\n      font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2xheW91dC9pbWFnZXNpbmdsZS9FOlxccHJvamVjdC1vbmUtZm9yLWFsbFxcaW50ZXJtZWRpYXRlXFxhbmd1bGFyLWphbjEvc3JjXFxhcHBcXG1vYmlsZVxcbGF5b3V0XFxpbWFnZXNpbmdsZVxcaW1hZ2VzaW5nbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUFMMUI7SUFRUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIscVVBQTJWLEVBQUE7RUFablc7TUFlWSxhQUFhO01BRWIsbUJBQW1CO01BRW5CLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbGF5b3V0L2ltYWdlc2luZ2xlL2ltYWdlc2luZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dpbWFnZSB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIC5zaG93aW1hZ2UtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlIC0gMC44cHgpLCByZ2JhKDAsIDAsIDAsIDEpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSAtIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAxKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgICAgICAgLnNob3dpbWFnZS1jb250ZW50IHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvLyAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/mobile/layout/imagesingle/imagesingle.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/mobile/layout/imagesingle/imagesingle.component.ts ***!
    \********************************************************************/

  /*! exports provided: ImagesingleComponent */

  /***/
  function srcAppMobileLayoutImagesingleImagesingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesingleComponent", function () {
      return ImagesingleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImagesingleComponent =
    /*#__PURE__*/
    function () {
      function ImagesingleComponent() {
        _classCallCheck(this, ImagesingleComponent);
      }

      _createClass(ImagesingleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImagesingleComponent;
    }();

    ImagesingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-imagesingle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imagesingle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/imagesingle/imagesingle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imagesingle.component.scss */
      "./src/app/mobile/layout/imagesingle/imagesingle.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImagesingleComponent);
    /***/
  },

  /***/
  "./src/app/mobile/layout/productwithtitle/productwithtitle.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/mobile/layout/productwithtitle/productwithtitle.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileLayoutProductwithtitleProductwithtitleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".productList {\n  margin: 8px;\n  height: 200px;\n  width: 100%;\n  background-color: white;\n  border: 1px solid gray; }\n  .productList .title {\n    border: 1px solid gray;\n    height: 50px;\n    padding: 16px;\n    font-weight: bold;\n    color: gray;\n    font-size: 18px; }\n  .productList .productList-image {\n    width: 100%;\n    height: 150px;\n    display: inline-block;\n    background-color: white;\n    background: linear-gradient(to top left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%), linear-gradient(to top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%); }\n  .productList .productList-image .productList-content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 150px;\n      font-weight: bold;\n      color: gray;\n      font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2xheW91dC9wcm9kdWN0d2l0aHRpdGxlL0U6XFxwcm9qZWN0LW9uZS1mb3ItYWxsXFxpbnRlcm1lZGlhdGVcXGFuZ3VsYXItamFuMS9zcmNcXGFwcFxcbW9iaWxlXFxsYXlvdXRcXHByb2R1Y3R3aXRodGl0bGVcXHByb2R1Y3R3aXRodGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUFMMUI7SUFPUSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWUsRUFBQTtFQVp2QjtJQWdCUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIscVVBQTJWLEVBQUE7RUFwQm5XO01BdUJZLGFBQWE7TUFFYixtQkFBbUI7TUFFbkIsdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sYXlvdXQvcHJvZHVjdHdpdGh0aXRsZS9wcm9kdWN0d2l0aHRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RMaXN0IHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0TGlzdC1pbWFnZSB7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlIC0gMC44cHgpLCByZ2JhKDAsIDAsIDAsIDEpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSAtIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAxKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgICAgICAgLnByb2R1Y3RMaXN0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/layout/productwithtitle/productwithtitle.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/mobile/layout/productwithtitle/productwithtitle.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductwithtitleComponent */

  /***/
  function srcAppMobileLayoutProductwithtitleProductwithtitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductwithtitleComponent", function () {
      return ProductwithtitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductwithtitleComponent =
    /*#__PURE__*/
    function () {
      function ProductwithtitleComponent() {
        _classCallCheck(this, ProductwithtitleComponent);
      }

      _createClass(ProductwithtitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductwithtitleComponent;
    }();

    ProductwithtitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-productwithtitle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productwithtitle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/productwithtitle/productwithtitle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productwithtitle.component.scss */
      "./src/app/mobile/layout/productwithtitle/productwithtitle.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProductwithtitleComponent);
    /***/
  },

  /***/
  "./src/app/mobile/layout/slider/slider.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/mobile/layout/slider/slider.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileLayoutSliderSliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".slider {\n  margin: 8px;\n  height: 100px;\n  width: 100%;\n  background-color: white;\n  border: 1px solid gray; }\n  .slider .slider-image {\n    width: 100%;\n    height: 100px;\n    display: inline-block;\n    background-color: white;\n    background: linear-gradient(to top left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%), linear-gradient(to top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) calc(50% - 0.8px), black 50%, rgba(0, 0, 0, 0) calc(50% + 0.8px), rgba(0, 0, 0, 0) 100%); }\n  .slider .slider-image .slider-content {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100px;\n      font-weight: bold;\n      color: gray;\n      font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL2xheW91dC9zbGlkZXIvRTpcXHByb2plY3Qtb25lLWZvci1hbGxcXGludGVybWVkaWF0ZVxcYW5ndWxhci1qYW4xL3NyY1xcYXBwXFxtb2JpbGVcXGxheW91dFxcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUFMMUI7SUFRUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIscVVBQTJWLEVBQUE7RUFablc7TUFlWSxhQUFhO01BRWIsbUJBQW1CO01BRW5CLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbGF5b3V0L3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLnNsaWRlci1pbWFnZSB7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIGNhbGMoNTAlIC0gMC44cHgpLCByZ2JhKDAsIDAsIDAsIDEpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSAtIDAuOHB4KSwgcmdiYSgwLCAwLCAwLCAxKSA1MCUsIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgKyAwLjhweCksIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgICAgICAgLnNsaWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvLyAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/mobile/layout/slider/slider.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/mobile/layout/slider/slider.component.ts ***!
    \**********************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppMobileLayoutSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SliderComponent =
    /*#__PURE__*/
    function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-slider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/slider/slider.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slider.component.scss */
      "./src/app/mobile/layout/slider/slider.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SliderComponent);
    /***/
  },

  /***/
  "./src/app/mobile/layout/topproducts/topproducts.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/mobile/layout/topproducts/topproducts.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileLayoutTopproductsTopproductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9sYXlvdXQvdG9wcHJvZHVjdHMvdG9wcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/layout/topproducts/topproducts.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/mobile/layout/topproducts/topproducts.component.ts ***!
    \********************************************************************/

  /*! exports provided: TopproductsComponent */

  /***/
  function srcAppMobileLayoutTopproductsTopproductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopproductsComponent", function () {
      return TopproductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TopproductsComponent =
    /*#__PURE__*/
    function () {
      function TopproductsComponent() {
        _classCallCheck(this, TopproductsComponent);
      }

      _createClass(TopproductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopproductsComponent;
    }();

    TopproductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-topproducts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topproducts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/layout/topproducts/topproducts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topproducts.component.scss */
      "./src/app/mobile/layout/topproducts/topproducts.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TopproductsComponent);
    /***/
  },

  /***/
  "./src/app/mobile/mobile-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/mobile/mobile-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MobileRoutingModule */

  /***/
  function srcAppMobileMobileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileRoutingModule", function () {
      return MobileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _editscreen_editscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editscreen/editscreen.component */
    "./src/app/mobile/editscreen/editscreen.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/mobile/dashboard/dashboard.component.ts");
    /* harmony import */


    var _adddashboardcomponent_adddashboardcomponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adddashboardcomponent/adddashboardcomponent.component */
    "./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.ts");
    /* harmony import */


    var _componentdetails_componentdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentdetails/componentdetails.component */
    "./src/app/mobile/componentdetails/componentdetails.component.ts");
    /* harmony import */


    var _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/addproduct/addproduct.component */
    "./src/app/mobile/components/addproduct/addproduct.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'edit',
      component: _editscreen_editscreen_component__WEBPACK_IMPORTED_MODULE_3__["EditscreenComponent"]
    }, {
      path: 'addcomponent',
      component: _adddashboardcomponent_adddashboardcomponent_component__WEBPACK_IMPORTED_MODULE_5__["AdddashboardcomponentComponent"]
    }, {
      path: 'details/:id',
      component: _componentdetails_componentdetails_component__WEBPACK_IMPORTED_MODULE_6__["ComponentdetailsComponent"]
    }, {
      path: 'addproduct/:type/:id',
      component: _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_7__["AddproductComponent"]
    }];

    var MobileRoutingModule = function MobileRoutingModule() {
      _classCallCheck(this, MobileRoutingModule);
    };

    MobileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MobileRoutingModule);
    /***/
  },

  /***/
  "./src/app/mobile/mobile.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/mobile/mobile.module.ts ***!
    \*****************************************/

  /*! exports provided: MobileModule */

  /***/
  function srcAppMobileMobileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileModule", function () {
      return MobileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _mobile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mobile-routing.module */
    "./src/app/mobile/mobile-routing.module.ts");
    /* harmony import */


    var _editscreen_editscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editscreen/editscreen.component */
    "./src/app/mobile/editscreen/editscreen.component.ts");
    /* harmony import */


    var _layout_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/slider/slider.component */
    "./src/app/mobile/layout/slider/slider.component.ts");
    /* harmony import */


    var _layout_productwithtitle_productwithtitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/productwithtitle/productwithtitle.component */
    "./src/app/mobile/layout/productwithtitle/productwithtitle.component.ts");
    /* harmony import */


    var _layout_topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/topproducts/topproducts.component */
    "./src/app/mobile/layout/topproducts/topproducts.component.ts");
    /* harmony import */


    var _layout_imagesingle_imagesingle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/imagesingle/imagesingle.component */
    "./src/app/mobile/layout/imagesingle/imagesingle.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/mobile/dashboard/dashboard.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _adddashboardcomponent_adddashboardcomponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./adddashboardcomponent/adddashboardcomponent.component */
    "./src/app/mobile/adddashboardcomponent/adddashboardcomponent.component.ts");
    /* harmony import */


    var _componentdetails_componentdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./componentdetails/componentdetails.component */
    "./src/app/mobile/componentdetails/componentdetails.component.ts");
    /* harmony import */


    var _components_slideradds_slideradds_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/slideradds/slideradds.component */
    "./src/app/mobile/components/slideradds/slideradds.component.ts");
    /* harmony import */


    var _components_imageadd_imageadd_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/imageadd/imageadd.component */
    "./src/app/mobile/components/imageadd/imageadd.component.ts");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/addproduct/addproduct.component */
    "./src/app/mobile/components/addproduct/addproduct.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_productslider_productslider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/productslider/productslider.component */
    "./src/app/mobile/components/productslider/productslider.component.ts"); // import {
    //   NbActionsModule,
    //   NbButtonModule,
    //   NbCardModule,
    //   NbTabsetModule,
    //   NbUserModule,
    //   NbRadioModule,
    //   NbSelectModule,
    //   NbListModule,
    //   NbIconModule,
    //   NbCheckboxModule,
    //   NbDatepickerModule,
    //   NbInputModule,
    // } from '@nebular/theme';


    var MobileModule = function MobileModule() {
      _classCallCheck(this, MobileModule);
    };

    MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_editscreen_editscreen_component__WEBPACK_IMPORTED_MODULE_4__["EditscreenComponent"], _layout_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _layout_productwithtitle_productwithtitle_component__WEBPACK_IMPORTED_MODULE_6__["ProductwithtitleComponent"], _layout_topproducts_topproducts_component__WEBPACK_IMPORTED_MODULE_7__["TopproductsComponent"], _layout_imagesingle_imagesingle_component__WEBPACK_IMPORTED_MODULE_8__["ImagesingleComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _adddashboardcomponent_adddashboardcomponent_component__WEBPACK_IMPORTED_MODULE_12__["AdddashboardcomponentComponent"], _componentdetails_componentdetails_component__WEBPACK_IMPORTED_MODULE_13__["ComponentdetailsComponent"], _components_slideradds_slideradds_component__WEBPACK_IMPORTED_MODULE_14__["SlideraddsComponent"], _components_imageadd_imageadd_component__WEBPACK_IMPORTED_MODULE_15__["ImageaddComponent"], _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_18__["AddproductComponent"], _components_productslider_productslider_component__WEBPACK_IMPORTED_MODULE_21__["ProductsliderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mobile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MobileRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]],
      exports: [_components_slideradds_slideradds_component__WEBPACK_IMPORTED_MODULE_14__["SlideraddsComponent"]],
      bootstrap: [_components_slideradds_slideradds_component__WEBPACK_IMPORTED_MODULE_14__["SlideraddsComponent"]]
    })], MobileModule);
    /***/
  }
}]);
//# sourceMappingURL=mobile-mobile-module-es5.js.map