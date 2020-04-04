function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupons-coupons-module"], {
  /***/
  "./node_modules/@angular/material/esm2015/checkbox.js":
  /*!************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/checkbox.js ***!
    \************************************************************/

  /*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator */

  /***/
  function node_modulesAngularMaterialEsm2015CheckboxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function () {
      return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function () {
      return TransitionCheckState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function () {
      return MatCheckboxChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckbox", function () {
      return MatCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function () {
      return MAT_CHECKBOX_CLICK_ACTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function () {
      return _MatCheckboxRequiredValidatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function () {
      return MatCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function () {
      return MAT_CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function () {
      return MatCheckboxRequiredValidator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
     * Injection token that can be used to specify the checkbox click behavior.
     * @type {?}
     */


    var MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-checkbox-click-action');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for checkbox components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * \@docs-private
     * @type {?}
     */

    var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatCheckbox;
      }),
      multi: true
    };
    /** @enum {number} */

    var TransitionCheckState = {
      /** The initial state of the component before any user interaction. */
      Init: 0,

      /** The state representing the component when it's becoming checked. */
      Checked: 1,

      /** The state representing the component when it's becoming unchecked. */
      Unchecked: 2,

      /** The state representing the component when it's becoming indeterminate. */
      Indeterminate: 3
    };
    TransitionCheckState[TransitionCheckState.Init] = 'Init';
    TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
    TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
    TransitionCheckState[TransitionCheckState.Indeterminate] = 'Indeterminate';
    /**
     * Change event object emitted by MatCheckbox.
     */

    var MatCheckboxChange = function MatCheckboxChange() {
      _classCallCheck(this, MatCheckboxChange);
    }; // Boilerplate for applying mixins to MatCheckbox.

    /**
     * \@docs-private
     */


    var MatCheckboxBase =
    /**
     * @param {?} _elementRef
     */
    function MatCheckboxBase(_elementRef) {
      _classCallCheck(this, MatCheckboxBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase)), 'accent'));
    /**
     * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
     * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
     * disabled. Note that all additional accessibility attributes are taken care of by the component,
     * so there is no need to provide them yourself. However, if you want to omit a label and still
     * have the checkbox be accessible, you may supply an [aria-label] input.
     * See: https://material.io/design/components/selection-controls.html
     */


    var MatCheckbox =
    /*#__PURE__*/
    function (_MatCheckboxMixinBase2) {
      _inherits(MatCheckbox, _MatCheckboxMixinBase2);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _focusMonitor
       * @param {?} _ngZone
       * @param {?} tabIndex
       * @param {?} _clickAction
       * @param {?=} _animationMode
       */
      function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _clickAction, _animationMode) {
        var _this;

        _classCallCheck(this, MatCheckbox);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MatCheckbox).call(this, elementRef));
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusMonitor = _focusMonitor;
        _this._ngZone = _ngZone;
        _this._clickAction = _clickAction;
        _this._animationMode = _animationMode;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */

        _this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */

        _this.ariaLabelledby = null;
        _this._uniqueId = "mat-checkbox-".concat(++nextUniqueId);
        /**
         * A unique id for the checkbox input. If none is supplied, it will be auto-generated.
         */

        _this.id = _this._uniqueId;
        /**
         * Whether the label should appear after or before the checkbox. Defaults to 'after'
         */

        _this.labelPosition = 'after';
        /**
         * Name value will be applied to the input element if present
         */

        _this.name = null;
        /**
         * Event emitted when the checkbox's `checked` value changes.
         */

        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the checkbox's `indeterminate` value changes.
         */

        _this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * \@docs-private
         */

        _this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this._currentAnimationClass = '';
        _this._currentCheckState = TransitionCheckState.Init;

        _this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};

        _this._checked = false;
        _this._disabled = false;
        _this._indeterminate = false;
        _this.tabIndex = parseInt(tabIndex) || 0;

        _this._focusMonitor.monitor(elementRef, true).subscribe(
        /**
        * @param {?} focusOrigin
        * @return {?}
        */
        function (focusOrigin) {
          if (!focusOrigin) {
            // When a focused element becomes disabled, the browser *immediately* fires a blur event.
            // Angular does not expect events to be raised during change detection, so any state change
            // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
            // See https://github.com/angular/angular/issues/17793. To work around this, we defer
            // telling the form control it has been touched until the next tick.
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this._onTouched();

              _changeDetectorRef.markForCheck();
            });
          }
        });

        return _this;
      }
      /**
       * Returns the unique id for the visual hidden input.
       * @return {?}
       */


      _createClass(MatCheckbox, [{
        key: "ngAfterViewChecked",
        // TODO: Delete next major revision.

        /**
         * @return {?}
         */
        value: function ngAfterViewChecked() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Whether the checkbox is checked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",

        /**
         * @return {?}
         */
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
          // component will be only marked for check, but no actual change detection runs automatically.
          // Instead of going back into the zone in order to trigger a change detection which causes
          // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
          // an explicit change detection for the checkbox view and its children.
          this._changeDetectorRef.detectChanges();
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
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
          this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getAriaChecked",
        value: function _getAriaChecked() {
          return this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false';
        }
        /**
         * @private
         * @param {?} newState
         * @return {?}
         */

      }, {
        key: "_transitionCheckState",
        value: function _transitionCheckState(newState) {
          /** @type {?} */
          var oldState = this._currentCheckState;
          /** @type {?} */

          var element = this._elementRef.nativeElement;

          if (oldState === newState) {
            return;
          }

          if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
          }

          this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
          this._currentCheckState = newState;

          if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass); // Remove the animation class to avoid animation when the checkbox is moved between containers

            /** @type {?} */

            var animationClass = this._currentAnimationClass;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                element.classList.remove(animationClass);
              }, 1000);
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          /** @type {?} */
          var event = new MatCheckboxChange();
          event.source = this;
          event.checked = this.checked;

          this._controlValueAccessorChangeFn(this.checked);

          this.change.emit(event);
        }
        /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;
        }
        /**
         * Event handler for checkbox input element.
         * Toggles checked state if element is not disabled.
         * Do not toggle on (change) event since IE doesn't fire change event when
         *   indeterminate checkbox is clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
          var _this2 = this;

          // We have to stop propagation for click events on the visual hidden input element.
          // By default, when a user clicks on a label element, a generated click event will be
          // dispatched on the associated input element. Since we are using a label element as our
          // root container, the click event on the `checkbox` will be executed twice.
          // The real click event will bubble up, and the generated click event also tries to bubble up.
          // This will lead to multiple click events.
          // Preventing bubbling for the second event will solve that issue.
          event.stopPropagation(); // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click

          if (!this.disabled && this._clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && this._clickAction !== 'check') {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this2._indeterminate = false;

                _this2.indeterminateChange.emit(_this2._indeterminate);
              });
            }

            this.toggle();

            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked); // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.


            this._emitChangeEvent();
          } else if (!this.disabled && this._clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
          }
        }
        /**
         * Focuses the checkbox.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'keyboard';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInteractionEvent",
        value: function _onInteractionEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the `change` output.
          event.stopPropagation();
        }
        /**
         * @private
         * @param {?} oldState
         * @param {?} newState
         * @return {?}
         */

      }, {
        key: "_getAnimationClassForCheckStateTransition",
        value: function _getAnimationClassForCheckStateTransition(oldState, newState) {
          // Don't transition if animations are disabled.
          if (this._animationMode === 'NoopAnimations') {
            return '';
          }
          /** @type {?} */


          var animSuffix = '';

          switch (oldState) {
            case TransitionCheckState.Init:
              // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
              // [checked] bound to it.
              if (newState === TransitionCheckState.Checked) {
                animSuffix = 'unchecked-checked';
              } else if (newState == TransitionCheckState.Indeterminate) {
                animSuffix = 'unchecked-indeterminate';
              } else {
                return '';
              }

              break;

            case TransitionCheckState.Unchecked:
              animSuffix = newState === TransitionCheckState.Checked ? 'unchecked-checked' : 'unchecked-indeterminate';
              break;

            case TransitionCheckState.Checked:
              animSuffix = newState === TransitionCheckState.Unchecked ? 'checked-unchecked' : 'checked-indeterminate';
              break;

            case TransitionCheckState.Indeterminate:
              animSuffix = newState === TransitionCheckState.Checked ? 'indeterminate-checked' : 'indeterminate-unchecked';
              break;
          }

          return "mat-checkbox-anim-".concat(animSuffix);
        }
      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
        /**
         * Whether the checkbox is required.
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
      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value != this.checked) {
            this._checked = value;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         * @return {?}
         */

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
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);

          if (newValue !== this.disabled) {
            this._disabled = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         * @return {?}
         */

      }, {
        key: "indeterminate",
        get: function get() {
          return this._indeterminate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var changed = value != this._indeterminate;
          this._indeterminate = value;

          if (changed) {
            if (this._indeterminate) {
              this._transitionCheckState(TransitionCheckState.Indeterminate);
            } else {
              this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            }

            this.indeterminateChange.emit(this._indeterminate);
          }
        }
      }]);

      return MatCheckbox;
    }(_MatCheckboxMixinBase);

    MatCheckbox.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-checkbox',
        template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label><div class=\"mat-checkbox-inner-container\" [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\"><input #input class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [checked]=\"checked\" [attr.value]=\"value\" [disabled]=\"disabled\" [attr.name]=\"name\" [tabIndex]=\"tabIndex\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"ariaLabel || null\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-checked]=\"_getAriaChecked()\" (change)=\"_onInteractionEvent($event)\" (click)=\"_onInputClick($event)\"><div matRipple class=\"mat-checkbox-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleRadius]=\"20\" [matRippleCentered]=\"true\" [matRippleAnimation]=\"{enterDuration: 150}\"><div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div></div><div class=\"mat-checkbox-frame\"></div><div class=\"mat-checkbox-background\"><svg version=\"1.1\" focusable=\"false\" class=\"mat-checkbox-checkmark\" viewBox=\"0 0 24 24\" xml:space=\"preserve\"><path class=\"mat-checkbox-checkmark-path\" fill=\"none\" stroke=\"white\" d=\"M4.1,12.7 9,17.6 20.3,6.3\"/></svg><div class=\"mat-checkbox-mixedmark\"></div></div></div><span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></span></label>",
        styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],
        exportAs: 'matCheckbox',
        host: {
          'class': 'mat-checkbox',
          '[id]': 'id',
          '[attr.tabindex]': 'null',
          '[class.mat-checkbox-indeterminate]': 'indeterminate',
          '[class.mat-checkbox-checked]': 'checked',
          '[class.mat-checkbox-disabled]': 'disabled',
          '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
          '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
        },
        providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
        inputs: ['disableRipple', 'color', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatCheckbox.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_CHECKBOX_CLICK_ACTION]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatCheckbox.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-labelledby']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      indeterminateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['input', {
          static: false
        }]
      }],
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], {
          static: false
        }]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      indeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatCheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * Validator for Material checkbox's required attribute in template-driven checkbox.
     * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
     * work with `mat-checkbox`.
     */

    var MatCheckboxRequiredValidator =
    /*#__PURE__*/
    function (_angular_forms__WEBPA) {
      _inherits(MatCheckboxRequiredValidator, _angular_forms__WEBPA);

      function MatCheckboxRequiredValidator() {
        _classCallCheck(this, MatCheckboxRequiredValidator);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatCheckboxRequiredValidator).apply(this, arguments));
      }

      return MatCheckboxRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"]);

    MatCheckboxRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
        providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based checkbox implementations.
     */
    // tslint:disable-next-line:class-name

    var _MatCheckboxRequiredValidatorModule = function _MatCheckboxRequiredValidatorModule() {
      _classCallCheck(this, _MatCheckboxRequiredValidatorModule);
    };

    _MatCheckboxRequiredValidatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [MatCheckboxRequiredValidator],
        declarations: [MatCheckboxRequiredValidator]
      }]
    }];

    var MatCheckboxModule = function MatCheckboxModule() {
      _classCallCheck(this, MatCheckboxModule);
    };

    MatCheckboxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule],
        exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
        declarations: [MatCheckbox]
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
    //# sourceMappingURL=checkbox.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/addcoupons/addcoupons.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/addcoupons/addcoupons.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCouponsAddcouponsAddcouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>Add Coupons</nb-card-header>\n    <nb-card-body>\n        <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Coupon Code : </label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Coupon Code\" formControlName=\"couponCode\">\n                    <div *ngIf=\"submited&&formGroup.get('couponCode').invalid&&formGroup.get('couponCode').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"inputPassword2\" class=\"label col-sm-3 col-form-label\">Discount</label>\n                <div class=\"col-sm-9\">\n                    <input nbInput fullWidth placeholder=\"Discount ..\" formControlName=\"value\">\n                    <div *ngIf=\"submited&&formGroup.get('value').invalid&&formGroup.get('value').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                    <div style=\"margin: 8px;\">\n\n                        <input type=\"checkbox\" style=\"background-color:aqua;\" (click)=\"setDiscount('1')\" [checked]=\"formGroup.get('discount').value == '1'\"><span class=\"label\">Discount</span>\n                        <!-- <label for=\"\" style=\"margin-top: -10px;\"></label> -->\n\n                    </div>\n                    <div style=\"margin: 8px;\">\n\n                        <input type=\"checkbox\" style=\"background-color:aqua;\" (click)=\"setDiscount('0')\" [checked]=\"formGroup.get('discount').value == '0'\"><span class=\"label\">Price</span>\n                        <!-- <label for=\"\" style=\"margin-top: -10px;\"></label> -->\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Min order : </label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Min order ..\" formControlName=\"minOrder\">\n                    <div *ngIf=\"submited&&formGroup.get('minOrder').invalid&&formGroup.get('minOrder').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Max amount to be reduced : </label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"Max amount to be reduced ..\" formControlName=\"maxAmountToBeReduced\">\n                    <div *ngIf=\"submited&&formGroup.get('maxAmountToBeReduced').invalid&&formGroup.get('maxAmountToBeReduced').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Product Price</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"text\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"0.0\" formControlName=\"price\">\n                    <div *ngIf=\"submited&&formGroup.get('price').invalid&&formGroup.get('price').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Incremented By</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"0.0\" formControlName=\"incrementedBy\">\n                    <div *ngIf=\"submited&&formGroup.get('incrementedBy').invalid && formGroup.get('incrementedBy').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n\n                </div>\n            </div> -->\n\n            <!-- <div class=\"form-group row\">\n                <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">Discount</label>\n                <div class=\"col-sm-9\">\n                    <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"0.0\" formControlName=\"discount\">\n                    <div *ngIf=\"submited&&formGroup.get('discount').invalid&&formGroup.get('discount').errors.required\">\n                        <p class=\"text-danger\">Please Fill this field</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- <div class=\"form-group row\">\n          <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">All Category : </label>\n          <div class=\"col-sm-9\">\n              <nb-select selected=\"\" style=\"width: 100%;\" formControlName=\"category\">\n                  <nb-option value=\"\">All Categories List</nb-option>\n                  <nb-option value=\"1\">Fruits</nb-option>\n                  <nb-option value=\"2\">Fruits</nb-option>\n              </nb-select>\n              <div *ngIf=\"submited&&formGroup.get('category').invalid&&formGroup.get('category').errors.required\">\n                  <p class=\"text-danger\">Please Fill this field</p>\n              </div>\n          </div>\n      </div> -->\n\n            <!-- <div class=\"form-group row\">\n          <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">All Sub Category : </label>\n          <div class=\"col-sm-9\">\n              <nb-select selected=\"\" style=\"width: 100%;\" formControlName=\"subCategory\">\n                  <nb-option value=\"\">All SubCategories List</nb-option>\n                  <nb-option value=\"1\">Fruits</nb-option>\n                  <nb-option value=\"2\">Fruits</nb-option>\n                  <nb-option value=\"0\">Fruits</nb-option>\n              </nb-select>\n              <div *ngIf=\"submited&&formGroup.get('subCategory').invalid&&formGroup.get('subCategory').errors.required\">\n                  <p class=\"text-danger\">Please Fill this field</p>\n              </div>\n          </div>\n      </div> -->\n\n            <!-- <div class=\"form-group row\" *ngIf=\"formGroup.get('subCategory').value == '0'\">\n          <label for=\"inputEmail1\" class=\"label col-sm-3 col-form-label\">New Sub Category</label>\n          <div class=\"col-sm-9\">\n              <input type=\"email\" nbInput fullWidth id=\"inputEmail1\" placeholder=\"0.0\" formControlName=\"subCategoryName\">\n\n          </div>\n      </div> -->\n\n            <div class=\"form-group row\">\n                <div class=\"offset-sm-3 col-sm-9\">\n                    <button type=\"submit\" nbButton status=\"primary\" [disabled]=\"uploading\">Add Coupons</button>\n                </div>\n            </div>\n        </form>\n    </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/allcoupons/allcoupons.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/allcoupons/allcoupons.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCouponsAllcouponsAllcouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>\n        All Coupons\n    </nb-card-header>\n\n    <nb-card-body>\n        <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table> -->\n        <table>\n            <thead>\n                <tr>\n                    <th>\n                        Id\n                    </th>\n                    <th>\n                        Discount\n                    </th>\n                    <th>\n                        Value\n                    </th>\n                    <th>\n                        Coupoun Code\n                    </th>\n                    <th>\n                        Minimum Order\n                    </th>\n                    <th>\n                        Max Amount To Be Discounted\n                    </th>\n                    <th>\n                        Actions\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let x of coupons\">\n                    <td>\n                        {{x.id}}\n                    </td>\n                    <td>\n                        {{x.discount}}\n                    </td>\n                    <td>\n                        {{x.value}}\n                    </td>\n                    <td>\n                        {{x.coupon_code}}\n                    </td>\n                    <td>\n                        {{x.min_order}}\n                    </td>\n                    <td>\n                        {{x.max_amount_to_be_reduced}}\n                    </td>\n                    <td>\n                        <i class=\"nb-trash\" style=\"font-size: 35px;\" aria-hidden=\"true\"></i>\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n    </nb-card-body>\n    <div class=\"row card-footer\">\n        <div style=\"padding-left: 16px;\">\n            <ngb-pagination [collectionSize]=\"paginator.total_count\" [boundaryLinks]=\"true\" (pageChange)=\"getCouponData($event)\" [pageSize]=\"10\"></ngb-pagination>\n        </div>\n\n    </div>\n</nb-card>";
    /***/
  },

  /***/
  "./src/app/coupons/addcoupons/addcoupons.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/coupons/addcoupons/addcoupons.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCouponsAddcouponsAddcouponsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=checkbox] {\n  transform: scale(1.5); }\n\ninput[type=checkbox] {\n  width: 10px;\n  height: 10px;\n  margin-right: 8px;\n  cursor: pointer;\n  font-size: 10px;\n  visibility: hidden; }\n\ninput[type=checkbox]:after {\n  content: \" \";\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 0px;\n  margin-right: 8px;\n  color: #3366ff;\n  width: 10px;\n  height: 10px;\n  visibility: visible;\n  border: 1px solid #1a2138;\n  padding-left: 3px; }\n\ninput[type=checkbox]:checked:after {\n  content: \"\\2713\";\n  padding: 0px;\n  font-weight: bold;\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9ucy9hZGRjb3Vwb25zL0U6XFxwcm9qZWN0LW9uZS1mb3ItYWxsXFxpbnRlcm1lZGlhdGVcXGFuZ3VsYXItamFuMS9zcmNcXGFwcFxcY291cG9uc1xcYWRkY291cG9uc1xcYWRkY291cG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFFckIsZUFBZTtFQUNmLGlCQUFpQjtFQUVqQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbnMvYWRkY291cG9ucy9hZGRjb3Vwb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiAjMzM2NmZmO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhMjEzODtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyNzEzXCI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/coupons/addcoupons/addcoupons.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/coupons/addcoupons/addcoupons.component.ts ***!
    \************************************************************/

  /*! exports provided: AddcouponsComponent */

  /***/
  function srcAppCouponsAddcouponsAddcouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcouponsComponent", function () {
      return AddcouponsComponent;
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
    /*! ../../services/product/product.service */
    "./src/app/services/product/product.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var AddcouponsComponent =
    /*#__PURE__*/
    function () {
      function AddcouponsComponent(toastrService, productService) {
        _classCallCheck(this, AddcouponsComponent);

        this.toastrService = toastrService;
        this.productService = productService;
        this.submited = false;
        this.uploading = false;
      }

      _createClass(AddcouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            couponCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            minOrder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            maxAmountToBeReduced: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "setDiscount",
        value: function setDiscount(discountValue) {
          // this.formGroup.get('discount').value = discountValue;
          if (this.formGroup.get('discount').value == discountValue) {
            this.formGroup.patchValue({
              discount: '-1'
            });
          } else {
            this.formGroup.patchValue({
              discount: discountValue
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submited = true;
          console.log(this.formGroup.getRawValue());

          if (this.formGroup.get('discount').value == '-1') {
            this.showToaster("OOPS !", "Please give discount type", "danger");
            return null;
          }

          if (this.formGroup.valid) {
            this.uploadData();
          } else {
            this.showToaster("OOPS !", "Please fill all the fields", "danger");
            return null;
          }
        }
      }, {
        key: "showToaster",
        value: function showToaster(title, body, status) {
          var config = {
            status: status,
            destroyByClick: false,
            duration: 3000,
            hasIcon: true,
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].BOTTOM_END,
            preventDuplicates: false
          };
          this.toastrService.show(body, title, config);
        }
      }, {
        key: "uploadData",
        value: function uploadData() {
          var _this3 = this;

          this.uploading = true;
          this.productService.postMethod(function (response) {
            _this3.uploading = false;

            _this3.showToaster("Success", "Successfully added.", "primary");

            console.log(response);
          }, function (error) {
            _this3.uploading = false;

            _this3.showToaster("OOPS !", "The values are not correct ." + error.error.toString(), "danger");

            console.log(error);
          }, {
            "discount": this.formGroup.get('discount').value,
            "value": this.formGroup.get('value').value,
            "coupon_code": this.formGroup.get('couponCode').value,
            "min_order": this.formGroup.get('minOrder').value,
            "max_amount_to_be_reduced": this.formGroup.get('maxAmountToBeReduced').value,
            "active": 1
          }, "product/all/coupons/3");
        }
      }]);

      return AddcouponsComponent;
    }();

    AddcouponsComponent.ctorParameters = function () {
      return [{
        type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]
      }, {
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    AddcouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-addcoupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addcoupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/addcoupons/addcoupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addcoupons.component.scss */
      "./src/app/coupons/addcoupons/addcoupons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"], _services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], AddcouponsComponent);
    /***/
  },

  /***/
  "./src/app/coupons/allcoupons/allcoupons.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/coupons/allcoupons/allcoupons.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCouponsAllcouponsAllcouponsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  border: 1px solid #f2f2f2; }\n\ntd {\n  text-align: center;\n  padding: 4px;\n  border: 1px solid #f2f2f2; }\n\nth {\n  text-align: center;\n  padding: 16px;\n  border: 1px solid #f2f2f2; }\n\ntr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9ucy9hbGxjb3Vwb25zL0U6XFxwcm9qZWN0LW9uZS1mb3ItYWxsXFxpbnRlcm1lZGlhdGVcXGFuZ3VsYXItamFuMS9zcmNcXGFwcFxcY291cG9uc1xcYWxsY291cG9uc1xcYWxsY291cG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3Vwb25zL2FsbGNvdXBvbnMvYWxsY291cG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcclxufVxyXG5cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/coupons/allcoupons/allcoupons.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/coupons/allcoupons/allcoupons.component.ts ***!
    \************************************************************/

  /*! exports provided: AllcouponsComponent */

  /***/
  function srcAppCouponsAllcouponsAllcouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllcouponsComponent", function () {
      return AllcouponsComponent;
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

    var AllcouponsComponent =
    /*#__PURE__*/
    function () {
      function AllcouponsComponent(productService) {
        _classCallCheck(this, AllcouponsComponent);

        this.productService = productService;
      }

      _createClass(AllcouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCouponData(1);
        }
      }, {
        key: "getCouponData",
        value: function getCouponData(pageNos) {
          var _this4 = this;

          this.productService.getMethod(function (response) {
            console.log(response);
            _this4.coupons = response.data;
            _this4.paginator = response.pagnigation;
          }, function (error) {}, {}, "product/all/coupons/" + pageNos);
        }
      }]);

      return AllcouponsComponent;
    }();

    AllcouponsComponent.ctorParameters = function () {
      return [{
        type: _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    AllcouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-allcoupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./allcoupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coupons/allcoupons/allcoupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./allcoupons.component.scss */
      "./src/app/coupons/allcoupons/allcoupons.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], AllcouponsComponent);
    /***/
  },

  /***/
  "./src/app/coupons/coupons-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/coupons/coupons-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CouponsRoutingModule */

  /***/
  function srcAppCouponsCouponsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsRoutingModule", function () {
      return CouponsRoutingModule;
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


    var _allcoupons_allcoupons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./allcoupons/allcoupons.component */
    "./src/app/coupons/allcoupons/allcoupons.component.ts");
    /* harmony import */


    var _addcoupons_addcoupons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./addcoupons/addcoupons.component */
    "./src/app/coupons/addcoupons/addcoupons.component.ts");

    var routes = [{
      path: '',
      component: _allcoupons_allcoupons_component__WEBPACK_IMPORTED_MODULE_3__["AllcouponsComponent"]
    }, {
      path: 'addcoupon',
      component: _addcoupons_addcoupons_component__WEBPACK_IMPORTED_MODULE_4__["AddcouponsComponent"]
    }];

    var CouponsRoutingModule = function CouponsRoutingModule() {
      _classCallCheck(this, CouponsRoutingModule);
    };

    CouponsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CouponsRoutingModule);
    /***/
  },

  /***/
  "./src/app/coupons/coupons.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/coupons/coupons.module.ts ***!
    \*******************************************/

  /*! exports provided: CouponsModule */

  /***/
  function srcAppCouponsCouponsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponsModule", function () {
      return CouponsModule;
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


    var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coupons-routing.module */
    "./src/app/coupons/coupons-routing.module.ts");
    /* harmony import */


    var _allcoupons_allcoupons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./allcoupons/allcoupons.component */
    "./src/app/coupons/allcoupons/allcoupons.component.ts");
    /* harmony import */


    var _addcoupons_addcoupons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addcoupons/addcoupons.component */
    "./src/app/coupons/addcoupons/addcoupons.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    var CouponsModule = function CouponsModule() {
      _classCallCheck(this, CouponsModule);
    };

    CouponsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_allcoupons_allcoupons_component__WEBPACK_IMPORTED_MODULE_4__["AllcouponsComponent"], _addcoupons_addcoupons_component__WEBPACK_IMPORTED_MODULE_5__["AddcouponsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _coupons_routing_module__WEBPACK_IMPORTED_MODULE_3__["CouponsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"]]
    })], CouponsModule);
    /***/
  }
}]);
//# sourceMappingURL=coupons-coupons-module-es5.js.map