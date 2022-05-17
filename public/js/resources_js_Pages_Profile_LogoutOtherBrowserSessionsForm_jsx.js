(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_jsx"],{

/***/ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": () => (/* binding */ _arrayLikeToArray),
/* harmony export */   "createForOfIteratorHelperLoose": () => (/* binding */ _createForOfIteratorHelperLoose),
/* harmony export */   "extends": () => (/* binding */ _extends),
/* harmony export */   "objectWithoutPropertiesLoose": () => (/* binding */ _objectWithoutPropertiesLoose),
/* harmony export */   "unsupportedIterableToArray": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.esm.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "useDescriptions": () => (/* binding */ useDescriptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");






var DescriptionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDescriptionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DescriptionContext);

  if (context === null) {
    var err = new Error('You used a <Description /> component, but it is not inside a relevant parent.');
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDescriptionContext);
    throw err;
  }

  return context;
}

function useDescriptions() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      descriptionIds = _useState[0],
      setDescriptionIds = _useState[1];

  return [// The actual id's as string or undefined
  descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined, // The provider component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return function DescriptionProvider(props) {
      var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
        setDescriptionIds(function (existing) {
          return [].concat(existing, [value]);
        });
        return function () {
          return setDescriptionIds(function (existing) {
            var clone = existing.slice();
            var idx = clone.indexOf(value);
            if (idx !== -1) clone.splice(idx, 1);
            return clone;
          });
        };
      }, []);
      var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
          register: register,
          slot: props.slot,
          name: props.name,
          props: props.props
        };
      }, [register, props.slot, props.name, props.props]);
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DescriptionContext.Provider, {
        value: contextBag
      }, props.children);
    };
  }, [setDescriptionIds])];
} // ---

var DEFAULT_DESCRIPTION_TAG = 'p';
function Description(props) {
  var context = useDescriptionContext();
  var id = "headlessui-description-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_1__.useId)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    return context.register(id);
  }, [id, context.register]);
  var passThroughProps = props;

  var propsWeControl = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__.extends)({}, context.props, {
    id: id
  });

  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_4__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_3__.extends)({}, passThroughProps, propsWeControl),
    slot: context.slot || {},
    defaultTag: DEFAULT_DESCRIPTION_TAG,
    name: context.name || 'Description'
  });
}


//# sourceMappingURL=description.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js");
/* harmony import */ var _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/bugs.esm.js */ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-focus-trap.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js");
/* harmony import */ var _hooks_use_inert_others_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-inert-others.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js");
/* harmony import */ var _internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../internal/portal-force-root.esm.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js");
/* harmony import */ var _portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../portal/portal.esm.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.esm.js");
/* harmony import */ var _description_description_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../description/description.esm.js */ "./node_modules/@headlessui/react/dist/components/description/description.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../internal/stack-context.esm.js */ "./node_modules/@headlessui/react/dist/internal/stack-context.esm.js");


















var _reducers;
var DialogStates;

(function (DialogStates) {
  DialogStates[DialogStates["Open"] = 0] = "Open";
  DialogStates[DialogStates["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));

var ActionTypes;

(function (ActionTypes) {
  ActionTypes[ActionTypes["SetTitleId"] = 0] = "SetTitleId";
})(ActionTypes || (ActionTypes = {}));

var reducers = (_reducers = {}, _reducers[ActionTypes.SetTitleId] = function (state, action) {
  if (state.titleId === action.id) return state;
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, state, {
    titleId: action.id
  });
}, _reducers);
var DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
DialogContext.displayName = 'DialogContext';

function useDialogContext(component) {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DialogContext);

  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Dialog.displayName + " /> component.");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useDialogContext);
    throw err;
  }

  return context;
}

function stateReducer(state, action) {
  return (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(action.type, reducers, state, action);
} // ---


var DEFAULT_DIALOG_TAG = 'div';
var DialogRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy | _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static;
var DialogRoot = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function Dialog(props, ref) {
  var open = props.open,
      onClose = props.onClose,
      initialFocus = props.initialFocus,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["open", "onClose", "initialFocus"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      nestedDialogCount = _useState[0],
      setNestedDialogCount = _useState[1];

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.useOpenClosed)();

  if (open === undefined && usesOpenClosedState !== null) {
    var _match;

    // Update the `open` prop based on the open closed state
    open = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(usesOpenClosedState, (_match = {}, _match[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open] = true, _match[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Closed] = false, _match));
  }

  var containers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
  var internalDialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dialogRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(internalDialogRef, ref); // Validations

  var hasOpen = props.hasOwnProperty('open') || usesOpenClosedState !== null;
  var hasOnClose = props.hasOwnProperty('onClose');

  if (!hasOpen && !hasOnClose) {
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  }

  if (!hasOpen) {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  }

  if (!hasOnClose) {
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  }

  if (typeof open !== 'boolean') {
    throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + open);
  }

  if (typeof onClose !== 'function') {
    throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + onClose);
  }

  var dialogState = open ? DialogStates.Open : DialogStates.Closed;

  var visible = function () {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_4__.State.Open;
    }

    return dialogState === DialogStates.Open;
  }();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateReducer, {
    titleId: null,
    descriptionId: null
  }),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var close = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return onClose(false);
  }, [onClose]);
  var setTitleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    return dispatch({
      type: ActionTypes.SetTitleId,
      id: id
    });
  }, [dispatch]);
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_6__.useServerHandoffComplete)();
  var enabled = ready && dialogState === DialogStates.Open;
  var hasNestedDialogs = nestedDialogCount > 1; // 1 is the current dialog

  var hasParentDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DialogContext) !== null; // If there are multiple dialogs, then you can be the root, the leaf or one
  // in between. We only care abou whether you are the top most one or not.

  var position = !hasNestedDialogs ? 'leaf' : 'parent';
  (0,_hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.useFocusTrap)(internalDialogRef, enabled ? (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(position, {
    parent: _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.RestoreFocus,
    leaf: _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.All
  }) : _hooks_use_focus_trap_esm_js__WEBPACK_IMPORTED_MODULE_7__.Features.None, {
    initialFocus: initialFocus,
    containers: containers
  });
  (0,_hooks_use_inert_others_esm_js__WEBPACK_IMPORTED_MODULE_8__.useInertOthers)(internalDialogRef, hasNestedDialogs ? enabled : false); // Handle outside click

  (0,_hooks_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_9__.useWindowEvent)('mousedown', function (event) {
    var _internalDialogRef$cu;

    var target = event.target;
    if (dialogState !== DialogStates.Open) return;
    if (hasNestedDialogs) return;
    if ((_internalDialogRef$cu = internalDialogRef.current) == null ? void 0 : _internalDialogRef$cu.contains(target)) return;
    close();
  }); // Scroll lock

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (hasParentDialog) return;
    var overflow = document.documentElement.style.overflow;
    var paddingRight = document.documentElement.style.paddingRight;
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = scrollbarWidth + "px";
    return function () {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [dialogState, hasParentDialog]); // Trigger close when the FocusTrap gets hidden

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dialogState !== DialogStates.Open) return;
    if (!internalDialogRef.current) return;
    var observer = new IntersectionObserver(function (entries) {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(entries), _step; !(_step = _iterator()).done;) {
        var entry = _step.value;

        if (entry.boundingClientRect.x === 0 && entry.boundingClientRect.y === 0 && entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          close();
        }
      }
    });
    observer.observe(internalDialogRef.current);
    return function () {
      return observer.disconnect();
    };
  }, [dialogState, internalDialogRef, close]);

  var _useDescriptions = (0,_description_description_esm_js__WEBPACK_IMPORTED_MODULE_10__.useDescriptions)(),
      describedby = _useDescriptions[0],
      DescriptionProvider = _useDescriptions[1];

  var id = "headlessui-dialog-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_11__.useId)();
  var contextBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      dialogState: dialogState,
      close: close,
      setTitleId: setTitleId
    }, state];
  }, [dialogState, state, close, setTitleId]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: dialogRef,
    id: id,
    role: 'dialog',
    'aria-modal': dialogState === DialogStates.Open ? true : undefined,
    'aria-labelledby': state.titleId,
    'aria-describedby': describedby,
    onClick: function onClick(event) {
      event.stopPropagation();
    },
    // Handle `Escape` to close
    onKeyDown: function onKeyDown(event) {
      if (event.key !== _keyboard_esm_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Escape) return;
      if (dialogState !== DialogStates.Open) return;
      if (hasNestedDialogs) return;
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackProvider, {
    type: "Dialog",
    element: internalDialogRef,
    onUpdate: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message, type, element) {
      var _match2;

      if (type !== 'Dialog') return;
      (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(message, (_match2 = {}, _match2[_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackMessage.Add] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count + 1;
        });
      }, _match2[_internal_stack_context_esm_js__WEBPACK_IMPORTED_MODULE_13__.StackMessage.Remove] = function () {
        containers.current.add(element);
        setNestedDialogCount(function (count) {
          return count - 1;
        });
      }, _match2));
    }, [])
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__.ForcePortalRoot, {
    force: true
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__.Portal, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogContext.Provider, {
    value: contextBag
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_esm_js__WEBPACK_IMPORTED_MODULE_15__.Portal.Group, {
    target: internalDialogRef
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_14__.ForcePortalRoot, {
    force: false
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(DescriptionProvider, {
    slot: slot,
    name: "Dialog.Description"
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_DIALOG_TAG,
    features: DialogRenderFeatures,
    visible: visible,
    name: 'Dialog'
  }))))))));
}); // ---

var DEFAULT_OVERLAY_TAG = 'div';
var Overlay = /*#__PURE__*/(0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function Overlay(props, ref) {
  var _useDialogContext = useDialogContext([Dialog.displayName, Overlay.name].join('.')),
      _useDialogContext$ = _useDialogContext[0],
      dialogState = _useDialogContext$.dialogState,
      close = _useDialogContext$.close;

  var overlayRef = (0,_hooks_use_sync_refs_esm_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(ref);
  var id = "headlessui-dialog-overlay-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_11__.useId)();
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if ((0,_utils_bugs_esm_js__WEBPACK_IMPORTED_MODULE_16__.isDisabledReactIssue7711)(event.currentTarget)) return event.preventDefault();
    event.preventDefault();
    event.stopPropagation();
    close();
  }, [close]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    ref: overlayRef,
    id: id,
    'aria-hidden': true,
    onClick: handleClick
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    name: 'Dialog.Overlay'
  });
}); // ---

var DEFAULT_TITLE_TAG = 'h2';

function Title(props) {
  var _useDialogContext2 = useDialogContext([Dialog.displayName, Title.name].join('.')),
      _useDialogContext2$ = _useDialogContext2[0],
      dialogState = _useDialogContext2$.dialogState,
      setTitleId = _useDialogContext2$.setTitleId;

  var id = "headlessui-dialog-title-" + (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_11__.useId)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTitleId(id);
    return function () {
      return setTitleId(null);
    };
  }, [id, setTitleId]);
  var slot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      open: dialogState === DialogStates.Open
    };
  }, [dialogState]);
  var propsWeControl = {
    id: id
  };
  var passthroughProps = props;
  return (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_3__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, passthroughProps, propsWeControl),
    slot: slot,
    defaultTag: DEFAULT_TITLE_TAG,
    name: 'Dialog.Title'
  });
} // ---


var Dialog = /*#__PURE__*/Object.assign(DialogRoot, {
  Overlay: Overlay,
  Title: Title,
  Description: _description_description_esm_js__WEBPACK_IMPORTED_MODULE_10__.Description
});


//# sourceMappingURL=dialog.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ Keys)
/* harmony export */ });
// TODO: This must already exist somewhere, right? 🤔
// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
var Keys;

(function (Keys) {
  Keys["Space"] = " ";
  Keys["Enter"] = "Enter";
  Keys["Escape"] = "Escape";
  Keys["Backspace"] = "Backspace";
  Keys["ArrowLeft"] = "ArrowLeft";
  Keys["ArrowUp"] = "ArrowUp";
  Keys["ArrowRight"] = "ArrowRight";
  Keys["ArrowDown"] = "ArrowDown";
  Keys["Home"] = "Home";
  Keys["End"] = "End";
  Keys["PageUp"] = "PageUp";
  Keys["PageDown"] = "PageDown";
  Keys["Tab"] = "Tab";
})(Keys || (Keys = {}));


//# sourceMappingURL=keyboard.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.esm.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js");








function usePortalTarget() {
  var forceInRoot = (0,_internal_portal_force_root_esm_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)();
  var groupTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalGroupContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    // Group context is used, but still null
    if (!forceInRoot && groupTarget !== null) return null; // No group context is used, let's create a default portal root

    if (typeof window === 'undefined') return null;
    var existingRoot = document.getElementById('headlessui-portal-root');
    if (existingRoot) return existingRoot;
    var root = document.createElement('div');
    root.setAttribute('id', 'headlessui-portal-root');
    return document.body.appendChild(root);
  }),
      target = _useState[0],
      setTarget = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (forceInRoot) return;
    if (groupTarget === null) return;
    setTarget(groupTarget.current);
  }, [groupTarget, setTarget, forceInRoot]);
  return target;
} // ---


var DEFAULT_PORTAL_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function Portal(props) {
  var passthroughProps = props;
  var target = usePortalTarget();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return typeof window === 'undefined' ? null : document.createElement('div');
  }),
      element = _useState2[0];

  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_3__.useServerHandoffComplete)();
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(function () {
    if (!target) return;
    if (!element) return;
    target.appendChild(element);
    return function () {
      if (!target) return;
      if (!element) return;
      target.removeChild(element);

      if (target.childNodes.length <= 0) {
        var _target$parentElement;

        (_target$parentElement = target.parentElement) == null ? void 0 : _target$parentElement.removeChild(target);
      }
    };
  }, [target, element]);
  if (!ready) return null;
  return !target || !element ? null : (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    defaultTag: DEFAULT_PORTAL_TAG,
    name: 'Portal'
  }), element);
} // ---

var DEFAULT_GROUP_TAG = react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
var PortalGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function Group(props) {
  var target = props.target,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_6__.objectWithoutPropertiesLoose)(props, ["target"]);

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalGroupContext.Provider, {
    value: target
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.render)({
    props: passthroughProps,
    defaultTag: DEFAULT_GROUP_TAG,
    name: 'Popover.Group'
  }));
} // ---


Portal.Group = Group;


//# sourceMappingURL=portal.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");
/* harmony import */ var _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.esm.js */ "./node_modules/@headlessui/react/dist/utils/render.esm.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");
/* harmony import */ var _hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-id.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js");
/* harmony import */ var _hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");
/* harmony import */ var _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.esm.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js");
/* harmony import */ var _hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-is-initial-render.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js");
/* harmony import */ var _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/transition.esm.js */ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js");












function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return classes.split(' ').filter(function (className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}

var TransitionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
TransitionContext.displayName = 'TransitionContext';
var TreeStates;

(function (TreeStates) {
  TreeStates["Visible"] = "visible";
  TreeStates["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));

function useTransitionContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

function useParentNesting() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NestingContext);

  if (context === null) {
    throw new Error('A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.');
  }

  return context;
}

var NestingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
NestingContext.displayName = 'NestingContext';

function hasChildren(bag) {
  if ('children' in bag) return hasChildren(bag.children);
  return bag.current.filter(function (_ref) {
    var state = _ref.state;
    return state === TreeStates.Visible;
  }).length > 0;
}

function useNesting(done) {
  var doneRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(done);
  var transitionableChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var mounted = (0,_hooks_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    doneRef.current = done;
  }, [done]);
  var unregister = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId, strategy) {
    var _match;

    if (strategy === void 0) {
      strategy = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;
    }

    var idx = transitionableChildren.current.findIndex(function (_ref2) {
      var id = _ref2.id;
      return id === childId;
    });
    if (idx === -1) return;
    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(strategy, (_match = {}, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount] = function () {
      transitionableChildren.current.splice(idx, 1);
    }, _match[_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden] = function () {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));

    if (!hasChildren(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (childId) {
    var child = transitionableChildren.current.find(function (_ref3) {
      var id = _ref3.id;
      return id === childId;
    });

    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }

    return function () {
      return unregister(childId, _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      children: transitionableChildren,
      register: register,
      unregister: unregister
    };
  }, [register, unregister, transitionableChildren]);
}

function noop() {}

var eventNames = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];

function ensureEventHooksExist(events) {
  var result = {};

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createForOfIteratorHelperLoose)(eventNames), _step; !(_step = _iterator()).done;) {
    var _events$name;

    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }

  return result;
}

function useEvents(events) {
  var eventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ensureEventHooksExist(events));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
} // ---


var DEFAULT_TRANSITION_CHILD_TAG = 'div';
var TransitionChildRenderFeatures = _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy;

function TransitionChild(props) {
  var _match3;

  var beforeEnter = props.beforeEnter,
      afterEnter = props.afterEnter,
      beforeLeave = props.beforeLeave,
      afterLeave = props.afterLeave,
      enter = props.enter,
      enterFrom = props.enterFrom,
      enterTo = props.enterTo,
      entered = props.entered,
      leave = props.leave,
      leaveFrom = props.leaveFrom,
      leaveTo = props.leaveTo,
      rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);

  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TreeStates.Visible),
      state = _useState[0],
      setState = _useState[1];

  var strategy = rest.unmount ? _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Unmount : _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden;

  var _useTransitionContext = useTransitionContext(),
      show = _useTransitionContext.show,
      appear = _useTransitionContext.appear;

  var _useParentNesting = useParentNesting(),
      register = _useParentNesting.register,
      unregister = _useParentNesting.unregister;

  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.useIsInitialRender)();
  var id = (0,_hooks_use_id_esm_js__WEBPACK_IMPORTED_MODULE_6__.useId)();
  var isTransitioning = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var nesting = useNesting(function () {
    // When all children have been unmounted we can only hide ourselves if and only if we are not
    // transitioning ourselves. Otherwise we would unmount before the transitions are finished.
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id);
      events.current.afterLeave();
    }
  });
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    if (!id) return;
    return register(id);
  }, [register, id]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    var _match2;

    // If we are in another mode than the Hidden mode then ignore
    if (strategy !== _utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.RenderStrategy.Hidden) return;
    if (!id) return; // Make sure that we are visible

    if (show && state !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }

    (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match2 = {}, _match2[TreeStates.Hidden] = function () {
      return unregister(id);
    }, _match2[TreeStates.Visible] = function () {
      return register(id);
    }, _match2));
  }, [state, id, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter: beforeEnter,
    afterEnter: afterEnter,
    beforeLeave: beforeLeave,
    afterLeave: afterLeave
  });
  var ready = (0,_hooks_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_8__.useServerHandoffComplete)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ready && state === TreeStates.Visible && container.current === null) {
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
    }
  }, [container, state, ready]); // Skipping initial transition

  var skip = initial && !appear;
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(function () {
    var node = container.current;
    if (!node) return;
    if (skip) return;
    isTransitioning.current = true;
    if (show) events.current.beforeEnter();
    if (!show) events.current.beforeLeave();
    return show ? (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.transition)(node, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason === _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.Reason.Finished) events.current.afterEnter();
    }) : (0,_utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.transition)(node, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function (reason) {
      isTransitioning.current = false;
      if (reason !== _utils_transition_esm_js__WEBPACK_IMPORTED_MODULE_9__.Reason.Finished) return; // When we don't have children anymore we can safely unregister from the parent and hide
      // ourselves.

      if (!hasChildren(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id);
        events.current.afterLeave();
      }
    });
  }, [events, id, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NestingContext.Provider, {
    value: nesting
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider, {
    value: (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(state, (_match3 = {}, _match3[TreeStates.Visible] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Open, _match3[TreeStates.Hidden] = _internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed, _match3))
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.extends)({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition.Child'
  })));
}

function Transition(props) {
  // @ts-expect-error
  var show = props.show,
      _props$appear = props.appear,
      appear = _props$appear === void 0 ? false : _props$appear,
      unmount = props.unmount,
      passthroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.objectWithoutPropertiesLoose)(props, ["show", "appear", "unmount"]);

  var usesOpenClosedState = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)();

  if (show === undefined && usesOpenClosedState !== null) {
    var _match4;

    show = (0,_utils_match_esm_js__WEBPACK_IMPORTED_MODULE_3__.match)(usesOpenClosedState, (_match4 = {}, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Open] = true, _match4[_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed] = false, _match4));
  }

  if (![true, false].includes(show)) {
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  }

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(show ? TreeStates.Visible : TreeStates.Hidden),
      state = _useState2[0],
      setState = _useState2[1];

  var nestingBag = useNesting(function () {
    setState(TreeStates.Hidden);
  });
  var initial = (0,_hooks_use_is_initial_render_esm_js__WEBPACK_IMPORTED_MODULE_5__.useIsInitialRender)();
  var transitionBag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      show: show,
      appear: appear || !initial
    };
  }, [show, appear, initial]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount: unmount
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NestingContext.Provider, {
    value: nestingBag
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, (0,_utils_render_esm_js__WEBPACK_IMPORTED_MODULE_2__.render)({
    props: (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_4__.extends)({}, sharedProps, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    features: TransitionChildRenderFeatures,
    visible: state === TreeStates.Visible,
    name: 'Transition'
  })));
}

Transition.Child = function Child(props) {
  var hasTransitionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext) !== null;
  var hasOpenClosedContext = (0,_internal_open_closed_esm_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition, Object.assign({}, props)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionChild, Object.assign({}, props));
};

Transition.Root = Transition;


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.esm.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reason": () => (/* binding */ Reason),
/* harmony export */   "transition": () => (/* binding */ transition)
/* harmony export */ });
/* harmony import */ var _utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/disposables.esm.js */ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js");
/* harmony import */ var _utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/once.esm.js */ "./node_modules/@headlessui/react/dist/utils/once.esm.js");



function addClasses(node) {
  var _node$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  node && classes.length > 0 && (_node$classList = node.classList).add.apply(_node$classList, classes);
}

function removeClasses(node) {
  var _node$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  node && classes.length > 0 && (_node$classList2 = node.classList).remove.apply(_node$classList2, classes);
}

var Reason;

(function (Reason) {
  Reason["Finished"] = "finished";
  Reason["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));

function waitForTransition(node, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();
  if (!node) return d.dispose; // Safari returns a comma separated list of values, so let's sort them and take the highest value.

  var _getComputedStyle = getComputedStyle(node),
      transitionDuration = _getComputedStyle.transitionDuration,
      transitionDelay = _getComputedStyle.transitionDelay;

  var _map = [transitionDuration, transitionDelay].map(function (value) {
    var _value$split$filter$m = value.split(',') // Remove falsy we can't work with
    .filter(Boolean) // Values are returned as `0.3s` or `75ms`
    .map(function (v) {
      return v.includes('ms') ? parseFloat(v) : parseFloat(v) * 1000;
    }).sort(function (a, z) {
      return z - a;
    }),
        _value$split$filter$m2 = _value$split$filter$m[0],
        resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;

    return resolvedValue;
  }),
      durationMs = _map[0],
      delaysMs = _map[1]; // Waiting for the transition to end. We could use the `transitionend` event, however when no
  // actual transition/duration is defined then the `transitionend` event is not fired.
  //
  // TODO: Downside is, when you slow down transitions via devtools this timeout is still using the
  // full 100% speed instead of the 25% or 10%.


  if (durationMs !== 0) {
    d.setTimeout(function () {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    // No transition is happening, so we should cleanup already. Otherwise we have to wait until we
    // get disposed.
    done(Reason.Finished);
  } // If we get disposed before the timeout runs we should cleanup anyway


  d.add(function () {
    return done(Reason.Cancelled);
  });
  return d.dispose;
}

function transition(node, base, from, to, entered, done) {
  var d = (0,_utils_disposables_esm_js__WEBPACK_IMPORTED_MODULE_0__.disposables)();

  var _done = done !== undefined ? (0,_utils_once_esm_js__WEBPACK_IMPORTED_MODULE_1__.once)(done) : function () {};

  removeClasses.apply(void 0, [node].concat(entered));
  addClasses.apply(void 0, [node].concat(base, from));
  d.nextFrame(function () {
    removeClasses.apply(void 0, [node].concat(from));
    addClasses.apply(void 0, [node].concat(to));
    d.add(waitForTransition(node, function (reason) {
      removeClasses.apply(void 0, [node].concat(to, base));
      addClasses.apply(void 0, [node].concat(entered));
      return _done(reason);
    }));
  }); // Once we get disposed, we should ensure that we cleanup after ourselves. In case of an unmount,
  // the node itself will be nullified and will be a no-op. In case of a full transition the classes
  // are already removed which is also a no-op. However if you go from enter -> leave mid-transition
  // then we have some leftovers that should be cleaned.

  d.add(function () {
    return removeClasses.apply(void 0, [node].concat(base, from, to, entered));
  }); // When we get disposed early, than we should also call the done method but switch the reason.

  d.add(function () {
    return _done(Reason.Cancelled);
  });
  return d.dispose;
}


//# sourceMappingURL=transition.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-focus-trap.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ Features),
/* harmony export */   "useFocusTrap": () => (/* binding */ useFocusTrap)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_keyboard_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/keyboard.esm.js */ "./node_modules/@headlessui/react/dist/components/keyboard.esm.js");
/* harmony import */ var _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/focus-management.esm.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js");
/* harmony import */ var _use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-window-event.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js");
/* harmony import */ var _use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-mounted.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js");







var Features;

(function (Features) {
  /** No features enabled for the `useFocusTrap` hook. */
  Features[Features["None"] = 1] = "None";
  /** Ensure that we move focus initially into the container. */

  Features[Features["InitialFocus"] = 2] = "InitialFocus";
  /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */

  Features[Features["TabLock"] = 4] = "TabLock";
  /** Ensure that programmatically moving focus outside of the container is disallowed. */

  Features[Features["FocusLock"] = 8] = "FocusLock";
  /** Ensure that we restore the focus when unmounting the component that uses this `useFocusTrap` hook. */

  Features[Features["RestoreFocus"] = 16] = "RestoreFocus";
  /** Enable all features. */

  Features[Features["All"] = 30] = "All";
})(Features || (Features = {}));

function useFocusTrap(container, features, _temp) {
  if (features === void 0) {
    features = Features.All;
  }

  var _ref = _temp === void 0 ? {} : _temp,
      initialFocus = _ref.initialFocus,
      containers = _ref.containers;

  var restoreElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof window !== 'undefined' ? document.activeElement : null);
  var previousActiveElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var mounted = (0,_use_is_mounted_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)();
  var featuresRestoreFocus = Boolean(features & Features.RestoreFocus);
  var featuresInitialFocus = Boolean(features & Features.InitialFocus); // Capture the currently focused element, before we enable the focus trap.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    restoreElement.current = document.activeElement;
  }, [featuresRestoreFocus]); // Restore the focus when we unmount the component.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresRestoreFocus) return;
    return function () {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(restoreElement.current);
      restoreElement.current = null;
    };
  }, [featuresRestoreFocus]); // Handle initial focus

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!featuresInitialFocus) return;
    if (!container.current) return;
    var activeElement = document.activeElement;

    if (initialFocus == null ? void 0 : initialFocus.current) {
      if ((initialFocus == null ? void 0 : initialFocus.current) === activeElement) {
        previousActiveElement.current = activeElement;
        return; // Initial focus ref is already the active element
      }
    } else if (container.current.contains(activeElement)) {
      previousActiveElement.current = activeElement;
      return; // Already focused within Dialog
    } // Try to focus the initialFocus ref


    if (initialFocus == null ? void 0 : initialFocus.current) {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(initialFocus.current);
    } else {
      if ((0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusIn)(container.current, _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First) === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.FocusResult.Error) {
        throw new Error('There are no focusable elements inside the <FocusTrap />');
      }
    }

    previousActiveElement.current = document.activeElement;
  }, [container, initialFocus, featuresInitialFocus]); // Handle `Tab` & `Shift+Tab` keyboard events

  (0,_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)('keydown', function (event) {
    if (!(features & Features.TabLock)) return;
    if (!container.current) return;
    if (event.key !== _components_keyboard_esm_js__WEBPACK_IMPORTED_MODULE_4__.Keys.Tab) return;
    event.preventDefault();

    if ((0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusIn)(container.current, (event.shiftKey ? _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous : _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next) | _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.Focus.WrapAround) === _utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.FocusResult.Success) {
      previousActiveElement.current = document.activeElement;
    }
  }); // Prevent programmatically escaping the container

  (0,_use_window_event_esm_js__WEBPACK_IMPORTED_MODULE_3__.useWindowEvent)('focus', function (event) {
    if (!(features & Features.FocusLock)) return;
    var allContainers = new Set(containers == null ? void 0 : containers.current);
    allContainers.add(container);
    if (!allContainers.size) return;
    var previous = previousActiveElement.current;
    if (!previous) return;
    if (!mounted.current) return;
    var toElement = event.target;

    if (toElement && toElement instanceof HTMLElement) {
      if (!contains(allContainers, toElement)) {
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(previous);
      } else {
        previousActiveElement.current = toElement;
        (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(toElement);
      }
    } else {
      (0,_utils_focus_management_esm_js__WEBPACK_IMPORTED_MODULE_2__.focusElement)(previousActiveElement.current);
    }
  }, true);
}

function contains(containers, element) {
  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createForOfIteratorHelperLoose)(containers), _step; !(_step = _iterator()).done;) {
    var _container$current;

    var container = _step.value;
    if ((_container$current = container.current) == null ? void 0 : _container$current.contains(element)) return true;
  }

  return false;
}


//# sourceMappingURL=use-focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");
/* harmony import */ var _use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js");




// didn't take care of the Suspense case. To fix this we used the approach the @reach-ui/auto-id
// uses.
//
// Credits: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx

var id = 0;

function generateId() {
  return ++id;
}

function useId() {
  var ready = (0,_use_server_handoff_complete_esm_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ready ? generateId : null),
      id = _useState[0],
      setId = _useState[1];

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(function () {
    if (id === null) setId(generateId());
  }, [id]);
  return id != null ? '' + id : undefined;
}


//# sourceMappingURL=use-id.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInertOthers": () => (/* binding */ useInertOthers)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



var interactables = /*#__PURE__*/new Set();
var originals = /*#__PURE__*/new Map();

function inert(element) {
  element.setAttribute('aria-hidden', 'true'); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = true;
}

function restore(element) {
  var original = originals.get(element);
  if (!original) return;
  if (original['aria-hidden'] === null) element.removeAttribute('aria-hidden');else element.setAttribute('aria-hidden', original['aria-hidden']); // @ts-expect-error `inert` does not exist on HTMLElement (yet!)

  element.inert = original.inert;
}

function useInertOthers(container, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }

  (0,_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_0__.useIsoMorphicEffect)(function () {
    if (!enabled) return;
    if (!container.current) return;
    var element = container.current; // Mark myself as an interactable element

    interactables.add(element); // Restore elements that now contain an interactable child

    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(originals.keys()), _step; !(_step = _iterator()).done;) {
      var original = _step.value;

      if (original.contains(element)) {
        restore(original);
        originals["delete"](original);
      }
    } // Collect direct children of the body


    document.querySelectorAll('body > *').forEach(function (child) {
      if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
      // Skip the interactables, and the parents of the interactables

      for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(interactables), _step2; !(_step2 = _iterator2()).done;) {
        var interactable = _step2.value;
        if (child.contains(interactable)) return;
      } // Keep track of the elements


      if (interactables.size === 1) {
        originals.set(child, {
          'aria-hidden': child.getAttribute('aria-hidden'),
          // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
          inert: child.inert
        }); // Mutate the element

        inert(child);
      }
    });
    return function () {
      // Inert is disabled on the current element
      interactables["delete"](element); // We still have interactable elements, therefore this one and its parent
      // will become inert as well.

      if (interactables.size > 0) {
        // Collect direct children of the body
        document.querySelectorAll('body > *').forEach(function (child) {
          if (!(child instanceof HTMLElement)) return; // Skip non-HTMLElements
          // Skip already inert parents

          if (originals.has(child)) return; // Skip the interactables, and the parents of the interactables

          for (var _iterator3 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(interactables), _step3; !(_step3 = _iterator3()).done;) {
            var interactable = _step3.value;
            if (child.contains(interactable)) return;
          }

          originals.set(child, {
            'aria-hidden': child.getAttribute('aria-hidden'),
            // @ts-expect-error `inert` does not exist on HTMLElement (yet!)
            inert: child.inert
          }); // Mutate the element

          inert(child);
        });
      } else {
        for (var _iterator4 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(originals.keys()), _step4; !(_step4 = _iterator4()).done;) {
          var _element = _step4.value;
          // Restore
          restore(_element); // Cleanup

          originals["delete"](_element);
        }
      }
    };
  }, [enabled]);
}


//# sourceMappingURL=use-inert-others.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-initial-render.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsInitialRender": () => (/* binding */ useIsInitialRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsInitialRender() {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}


//# sourceMappingURL=use-is-initial-render.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMounted": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}


//# sourceMappingURL=use-is-mounted.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": () => (/* binding */ useIsoMorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var useIsoMorphicEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-iso-morphic-effect.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": () => (/* binding */ useServerHandoffComplete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(state.serverHandoffComplete),
      serverHandoffComplete = _useState[0],
      setServerHandoffComplete = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (serverHandoffComplete === true) return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (state.serverHandoffComplete === false) state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}


//# sourceMappingURL=use-server-handoff-complete.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSyncRefs": () => (/* binding */ useSyncRefs)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    cache.current = refs;
  }, [refs]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(cache.current), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      if (ref == null) continue;
      if (typeof ref === 'function') ref(value);else ref.current = value;
    }
  }, [cache]);
}


//# sourceMappingURL=use-sync-refs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowEvent": () => (/* binding */ useWindowEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useWindowEvent(type, listener, options) {
  var listenerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(listener);
  listenerRef.current = listener;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handler(event) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return function () {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}


//# sourceMappingURL=use-window-event.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": () => (/* binding */ OpenClosedProvider),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "useOpenClosed": () => (/* binding */ useOpenClosed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
Context.displayName = 'OpenClosedContext';
var State;

(function (State) {
  State[State["Open"] = 0] = "Open";
  State[State["Closed"] = 1] = "Closed";
})(State || (State = {}));

function useOpenClosed() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: value
  }, children);
}


//# sourceMappingURL=open-closed.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePortalRoot": () => (/* binding */ ForcePortalRoot),
/* harmony export */   "usePortalRoot": () => (/* binding */ usePortalRoot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var ForcePortalRootContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function usePortalRoot() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ForcePortalRootContext);
}
function ForcePortalRoot(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ForcePortalRootContext.Provider, {
    value: props.force
  }, props.children);
}


//# sourceMappingURL=portal-force-root.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/stack-context.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/stack-context.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackMessage": () => (/* binding */ StackMessage),
/* harmony export */   "StackProvider": () => (/* binding */ StackProvider),
/* harmony export */   "useStackContext": () => (/* binding */ useStackContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.esm.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.esm.js");



var StackContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
StackContext.displayName = 'StackContext';
var StackMessage;

(function (StackMessage) {
  StackMessage[StackMessage["Add"] = 0] = "Add";
  StackMessage[StackMessage["Remove"] = 1] = "Remove";
})(StackMessage || (StackMessage = {}));

function useStackContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StackContext);
}
function StackProvider(_ref) {
  var children = _ref.children,
      onUpdate = _ref.onUpdate,
      type = _ref.type,
      element = _ref.element;
  var parentUpdate = useStackContext();
  var notify = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Notify our layer
    onUpdate == null ? void 0 : onUpdate.apply(void 0, args); // Notify the parent

    parentUpdate.apply(void 0, args);
  }, [parentUpdate, onUpdate]);
  (0,_hooks_use_iso_morphic_effect_esm_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(function () {
    notify(StackMessage.Add, type, element);
    return function () {
      return notify(StackMessage.Remove, type, element);
    };
  }, [notify, type, element]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StackContext.Provider, {
    value: notify
  }, children);
}


//# sourceMappingURL=stack-context.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": () => (/* binding */ isDisabledReactIssue7711)
/* harmony export */ });
// See: https://github.com/facebook/react/issues/7711
// See: https://github.com/facebook/react/pull/20612
// See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-disabled (2.)
function isDisabledReactIssue7711(element) {
  var _ref, _parent;

  var parent = element.parentElement;
  var legend = null;

  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement) legend = parent;
    parent = parent.parentElement;
  }

  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute('disabled')) === '') != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend)) return false;
  return isParentDisabled;
}

function isFirstLegend(element) {
  if (!element) return false;
  var previous = element.previousElementSibling;

  while (previous !== null) {
    if (previous instanceof HTMLLegendElement) return false;
    previous = previous.previousElementSibling;
  }

  return true;
}


//# sourceMappingURL=bugs.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disposables": () => (/* binding */ disposables)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");


function disposables() {
  var disposables = [];
  var api = {
    requestAnimationFrame: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function () {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      api.requestAnimationFrame(function () {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function () {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function () {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createForOfIteratorHelperLoose)(disposables.splice(0)), _step; !(_step = _iterator()).done;) {
        var dispose = _step.value;
        dispose();
      }
    }
  };
  return api;
}


//# sourceMappingURL=disposables.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Focus": () => (/* binding */ Focus),
/* harmony export */   "FocusResult": () => (/* binding */ FocusResult),
/* harmony export */   "FocusableMode": () => (/* binding */ FocusableMode),
/* harmony export */   "focusElement": () => (/* binding */ focusElement),
/* harmony export */   "focusIn": () => (/* binding */ focusIn),
/* harmony export */   "getFocusableElements": () => (/* binding */ getFocusableElements),
/* harmony export */   "isFocusableElement": () => (/* binding */ isFocusableElement)
/* harmony export */ });
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");


//  - https://stackoverflow.com/a/30753870

var focusableSelector = /*#__PURE__*/['[contentEditable=true]', '[tabindex]', 'a[href]', 'area[href]', 'button:not([disabled])', 'iframe', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])'].map( false ? // TODO: Remove this once JSDOM fixes the issue where an element that is
// "hidden" can be the document.activeElement, because this is not possible
// in real browsers.
// TODO: Remove this once JSDOM fixes the issue where an element that is
0 : function (selector) {
  return selector + ":not([tabindex='-1'])";
}).join(',');
var Focus;

(function (Focus) {
  /** Focus the first non-disabled element */
  Focus[Focus["First"] = 1] = "First";
  /** Focus the previous non-disabled element */

  Focus[Focus["Previous"] = 2] = "Previous";
  /** Focus the next non-disabled element */

  Focus[Focus["Next"] = 4] = "Next";
  /** Focus the last non-disabled element */

  Focus[Focus["Last"] = 8] = "Last";
  /** Wrap tab around */

  Focus[Focus["WrapAround"] = 16] = "WrapAround";
  /** Prevent scrolling the focusable elements into view */

  Focus[Focus["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));

var FocusResult;

(function (FocusResult) {
  /** Something went wrong while trying to focus. */
  FocusResult[FocusResult["Error"] = 0] = "Error";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */

  FocusResult[FocusResult["Overflow"] = 1] = "Overflow";
  /** Focus was successful. */

  FocusResult[FocusResult["Success"] = 2] = "Success";
  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */

  FocusResult[FocusResult["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));

var Direction;

(function (Direction) {
  Direction[Direction["Previous"] = -1] = "Previous";
  Direction[Direction["Next"] = 1] = "Next";
})(Direction || (Direction = {}));

function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }

  if (container == null) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;

(function (FocusableMode) {
  /** The element itself must be focusable. */
  FocusableMode[FocusableMode["Strict"] = 0] = "Strict";
  /** The element should be inside of a focusable element. */

  FocusableMode[FocusableMode["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));

function isFocusableElement(element, mode) {
  var _match;

  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }

  if (element === document.body) return false;
  return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_0__.match)(mode, (_match = {}, _match[FocusableMode.Strict] = function () {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function () {
    var next = element;

    while (next !== null) {
      if (next.matches(focusableSelector)) return true;
      next = next.parentElement;
    }

    return false;
  }, _match));
}
function focusElement(element) {
  element == null ? void 0 : element.focus({
    preventScroll: true
  });
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container : getFocusableElements(container);
  var active = document.activeElement;

  var direction = function () {
    if (focus & (Focus.First | Focus.Next)) return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last)) return Direction.Previous;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var startIndex = function () {
    if (focus & Focus.First) return 0;
    if (focus & Focus.Previous) return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next) return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last) return elements.length - 1;
    throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last');
  }();

  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = undefined;

  do {
    var _next;

    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;
    var nextIdx = startIndex + offset;

    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx]; // Try the focus the next element, might not work if it is "hidden" to the user.

    (_next = next) == null ? void 0 : _next.focus(focusOptions); // Try the next one in line

    offset += direction;
  } while (next !== document.activeElement); // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.


  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');
  return FocusResult.Success;
}


//# sourceMappingURL=focus-management.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": () => (/* binding */ match)
/* harmony export */ });
function match(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return typeof returnValue === 'function' ? returnValue.apply(void 0, args) : returnValue;
  }

  var error = new Error("Tried to handle \"" + value + "\" but there is no handler defined. Only defined handlers are: " + Object.keys(lookup).map(function (key) {
    return "\"" + key + "\"";
  }).join(', ') + ".");
  if (Error.captureStackTrace) Error.captureStackTrace(error, match);
  throw error;
}


//# sourceMappingURL=match.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "once": () => (/* binding */ once)
/* harmony export */ });
function once(cb) {
  var state = {
    called: false
  };
  return function () {
    if (state.called) return;
    state.called = true;
    return cb.apply(void 0, arguments);
  };
}


//# sourceMappingURL=once.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ Features),
/* harmony export */   "RenderStrategy": () => (/* binding */ RenderStrategy),
/* harmony export */   "forwardRefWithAs": () => (/* binding */ forwardRefWithAs),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/@headlessui/react/dist/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _match_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.esm.js */ "./node_modules/@headlessui/react/dist/utils/match.esm.js");




var Features;

(function (Features) {
  /** No features at all */
  Features[Features["None"] = 0] = "None";
  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */

  Features[Features["RenderStrategy"] = 1] = "RenderStrategy";
  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */

  Features[Features["Static"] = 2] = "Static";
})(Features || (Features = {}));

var RenderStrategy;

(function (RenderStrategy) {
  RenderStrategy[RenderStrategy["Unmount"] = 0] = "Unmount";
  RenderStrategy[RenderStrategy["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));

function render(_ref) {
  var props = _ref.props,
      slot = _ref.slot,
      defaultTag = _ref.defaultTag,
      features = _ref.features,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      name = _ref.name;
  // Visible always render
  if (visible) return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;

  if (featureFlags & Features.Static) {
    var _props$static = props["static"],
        isStatic = _props$static === void 0 ? false : _props$static,
        rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["static"]); // When the `static` prop is passed as `true`, then the user is in control, thus we don't care about anything else


    if (isStatic) return _render(rest, slot, defaultTag, name);
  }

  if (featureFlags & Features.RenderStrategy) {
    var _match;

    var _props$unmount = props.unmount,
        unmount = _props$unmount === void 0 ? true : _props$unmount,
        _rest = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["unmount"]);

    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return (0,_match_esm_js__WEBPACK_IMPORTED_MODULE_2__.match)(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function () {
      return null;
    }, _match[RenderStrategy.Hidden] = function () {
      return _render((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.extends)({}, _rest, {
        hidden: true,
        style: {
          display: 'none'
        }
      }), slot, defaultTag, name);
    }, _match));
  } // No features enabled, just render


  return _render(props, slot, defaultTag, name);
}

function _render(props, slot, tag, name) {
  var _ref2;

  if (slot === void 0) {
    slot = {};
  }

  var _omit = omit(props, ['unmount', 'static']),
      _omit$as = _omit.as,
      Component = _omit$as === void 0 ? tag : _omit$as,
      children = _omit.children,
      _omit$refName = _omit.refName,
      refName = _omit$refName === void 0 ? 'ref' : _omit$refName,
      passThroughProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(_omit, ["as", "children", "refName"]); // This allows us to use `<HeadlessUIComponent as={MyComponent} refName="innerRef" />`


  var refRelatedProps = props.ref !== undefined ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === 'function' ? children(slot) : children; // Allow for className to be a function with the slot as the contents

  if (passThroughProps.className && typeof passThroughProps.className === 'function') {
    passThroughProps.className = passThroughProps.className(slot);
  }

  if (Component === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', '', "The current component <" + name + " /> is rendering a \"Fragment\".", "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function (line) {
          return "  - " + line;
        }).join('\n'), '', 'You can apply a few solutions:', ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', 'Render a single element as the child so that we can forward the props onto that element.'].map(function (line) {
          return "  - " + line;
        }).join('\n')].join('\n'));
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(resolvedChildren, Object.assign({}, // Filter out undefined values so that they don't override the existing values
      mergeEventFunctions(compact(omit(passThroughProps, ['ref'])), resolvedChildren.props, ['onClick']), refRelatedProps));
    }
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, Object.assign({}, omit(passThroughProps, ['ref']), Component !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment && refRelatedProps), resolvedChildren);
}
/**
 * We can use this function for the following useCase:
 *
 * <Menu.Item> <button onClick={console.log} /> </Menu.Item>
 *
 * Our `Menu.Item` will have an internal `onClick`, if you passthrough an `onClick` to the actual
 * `Menu.Item` component we will call it correctly. However, when we have an `onClick` on the actual
 * first child, that one should _also_ be called (but before this implementation, it was just
 * overriding the `onClick`). But it is only when we *render* that we have access to the existing
 * props of this component.
 *
 * It's a bit hacky, and not that clean, but it is something internal and we have tests to rely on
 * so that we can refactor this later (if needed).
 */


function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);

  var _loop = function _loop() {
    var func = _step.value;

    if (passThroughProps[func] !== undefined && existingProps[func] !== undefined) {
      var _Object$assign;

      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function (event) {
        // Props we control
        if (!event.defaultPrevented) passThroughProps[func](event); // Existing props on the component

        if (!event.defaultPrevented) existingProps[func](event);
      }, _Object$assign));
    }
  };

  for (var _iterator = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(functionsToMerge), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return clone;
}
/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */


function forwardRefWithAs(component) {
  var _component$displayNam;

  return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}

function compact(object) {
  var clone = Object.assign({}, object);

  for (var key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }

  return clone;
}

function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }

  var clone = Object.assign({}, object);

  for (var _iterator2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createForOfIteratorHelperLoose)(keysToOmit), _step2; !(_step2 = _iterator2()).done;) {
    var key = _step2.value;
    if (key in clone) delete clone[key];
  }

  return clone;
}


//# sourceMappingURL=render.esm.js.map


/***/ }),

/***/ "./resources/js/Icons/index.js":
/*!*************************************!*\
  !*** ./resources/js/Icons/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookOpenIcon": () => (/* binding */ BookOpenIcon),
/* harmony export */   "CameraIcon": () => (/* binding */ CameraIcon),
/* harmony export */   "AnnotationIcon": () => (/* binding */ AnnotationIcon),
/* harmony export */   "GlobeIcon": () => (/* binding */ GlobeIcon),
/* harmony export */   "ShoppingBagIcon": () => (/* binding */ ShoppingBagIcon),
/* harmony export */   "HeartIcon": () => (/* binding */ HeartIcon),
/* harmony export */   "ArrowRightIcon": () => (/* binding */ ArrowRightIcon),
/* harmony export */   "PhotographIcon": () => (/* binding */ PhotographIcon),
/* harmony export */   "DesktopComputerIcon": () => (/* binding */ DesktopComputerIcon),
/* harmony export */   "DeviceMobileIcon": () => (/* binding */ DeviceMobileIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var BookOpenIcon = function BookOpenIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    })
  }));
};
var CameraIcon = function CameraIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    })]
  }));
};
var AnnotationIcon = function AnnotationIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    })
  }));
};
var GlobeIcon = function GlobeIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  }));
};
var ShoppingBagIcon = function ShoppingBagIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    })
  }));
};
var HeartIcon = function HeartIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    })
  }));
};
var ArrowRightIcon = function ArrowRightIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14 5l7 7m0 0l-7 7m7-7H3"
    })
  }));
};
var PhotographIcon = function PhotographIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    })
  }));
};
var DesktopComputerIcon = function DesktopComputerIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    })
  }));
};
var DeviceMobileIcon = function DeviceMobileIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpread(_objectSpread({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    })
  }));
};

/***/ }),

/***/ "./resources/js/Jetstream/ActionMessage.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Jetstream/ActionMessage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ActionMessage = function ActionMessage(_ref) {
  var on = _ref.on,
      props = _objectWithoutProperties(_ref, ["on"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, _objectSpread(_objectSpread({}, props), {}, {
    as: 'div',
    show: on,
    leave: "transition ease-in duration-300",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
    className: "text-sm text-gray-600 ".concat(props.className),
    children: props.children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMessage);

/***/ }),

/***/ "./resources/js/Jetstream/ActionSection.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Jetstream/ActionSection.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Jetstream_SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/SectionTitle */ "./resources/js/Jetstream/SectionTitle.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ActionSection = function ActionSection(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "md:grid md:grid-cols-3 md:gap-6 ".concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Jetstream_SectionTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: title,
      description: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "mt-5 md:mt-0 md:col-span-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg",
        children: children
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionSection);

/***/ }),

/***/ "./resources/js/Jetstream/Button.jsx":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Button.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'submit' : _ref$type,
      props = _objectWithoutProperties(_ref, ["type"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    className: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ".concat(props.className),
    children: props.children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./resources/js/Jetstream/DialogModal.jsx":
/*!************************************************!*\
  !*** ./resources/js/Jetstream/DialogModal.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jetstream_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/Modal */ "./resources/js/Jetstream/Modal.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var DialogModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (_ref, focusRef) {
  var show = _ref.show,
      title = _ref.title,
      content = _ref.content,
      footer = _ref.footer,
      width = _ref.width,
      onClose = _ref.onClose,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? false : _ref$closeable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Jetstream_Modal__WEBPACK_IMPORTED_MODULE_0__.default, {
    open: show,
    width: width,
    closeable: closeable,
    onClose: onClose,
    ref: focusRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "px-6 py-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text-lg",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-4",
        children: content
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "px-6 py-4 bg-gray-100 text-right",
      children: footer
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogModal);

/***/ }),

/***/ "./resources/js/Jetstream/Input.jsx":
/*!******************************************!*\
  !*** ./resources/js/Jetstream/Input.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var callback = _ref.callback,
      props = _objectWithoutProperties(_ref, ["callback"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread(_objectSpread({}, props), {}, {
      ref: ref,
      onChange: function onChange(event) {
        return callback(event.target.value);
      },
      className: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ".concat(props.className)
    }))
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./resources/js/Jetstream/InputError.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Jetstream/InputError.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var InputError = function InputError(_ref) {
  var _ref$error = _ref.error,
      message = _ref$error === void 0 ? [] : _ref$error;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text-xs text-red-600 mt-0.5",
        children: [" ", message, " "]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputError);

/***/ }),

/***/ "./resources/js/Jetstream/Modal.jsx":
/*!******************************************!*\
  !*** ./resources/js/Jetstream/Modal.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Modal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, focusRef) {
  var _ref$open = _ref.open,
      open = _ref$open === void 0 ? true : _ref$open,
      onClose = _ref.onClose,
      children = _ref.children,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? false : _ref$closeable,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'sm:max-w-lg' : _ref$width;

  var handleClose = function handleClose() {
    if (!closeable) return null;
    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
      as: "div",
      "static": true,
      className: "fixed z-20 inset-0 overflow-y-auto",
      open: open,
      initialFocus: focusRef,
      onClose: handleClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
          as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          enter: "ease-out duration-200",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Overlay, {
            className: "fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity backdrop-filter backdrop-blur-md"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "hidden sm:inline-block sm:align-middle sm:h-screen",
          "aria-hidden": "true",
          children: "\u200B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
          as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          enter: "ease-out duration-200",
          enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          enterTo: "opacity-100 translate-y-0 sm:scale-100",
          leave: "ease-in duration-100",
          leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
          leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ".concat(width, " sm:w-full"),
            children: children
          })
        })]
      })
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/Jetstream/SecondaryButton.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Jetstream/SecondaryButton.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SecondaryButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, focusRef) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", _objectSpread(_objectSpread({}, props), {}, {
    ref: focusRef,
    type: type,
    className: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition ".concat(props.className),
    children: props.children
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondaryButton);

/***/ }),

/***/ "./resources/js/Jetstream/SectionTitle.jsx":
/*!*************************************************!*\
  !*** ./resources/js/Jetstream/SectionTitle.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title,
      description = _ref.description,
      aside = _ref.aside;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "md:col-span-1 flex justify-between",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "px-4 sm:px-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: "text-lg font-medium text-gray-900",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "mt-1 text-sm text-gray-600",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "px-4 sm:px-0",
      children: aside
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

/***/ }),

/***/ "./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/ActionSection */ "./resources/js/Jetstream/ActionSection.jsx");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Icons */ "./resources/js/Icons/index.js");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.jsx");
/* harmony import */ var _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/ActionMessage */ "./resources/js/Jetstream/ActionMessage.jsx");
/* harmony import */ var _Jetstream_DialogModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Jetstream/DialogModal */ "./resources/js/Jetstream/DialogModal.jsx");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.jsx");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.jsx");
/* harmony import */ var _Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Jetstream/SecondaryButton */ "./resources/js/Jetstream/SecondaryButton.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var LogoutOtherBrowserSessionsForm = function LogoutOtherBrowserSessionsForm(_ref) {
  var sessions = _ref.sessions;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__.useForm)({
    password: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      errors = _useForm.errors,
      post = _useForm["delete"],
      processing = _useForm.processing,
      recentlySuccessful = _useForm.recentlySuccessful,
      reset = _useForm.reset,
      clearErrors = _useForm.clearErrors;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      confirmingLogout = _useState2[0],
      setConfirmingLogout = _useState2[1];

  var passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var confirmLogout = function confirmLogout() {
    setConfirmingLogout(true);
  };

  var handleClose = function handleClose() {
    setConfirmingLogout(false);
    clearErrors();
    reset();
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    post(route('other-browser-sessions.destroy'), {
      preserveScroll: true,
      onSuccess: function onSuccess() {
        return handleClose();
      },
      onError: function onError() {
        return passwordRef.current.focus();
      },
      onFinish: function onFinish() {
        return reset();
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Jetstream_ActionSection__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Browser Sessions",
    description: "Manage and log out your active sessions on other browsers and devices.",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "max-w-xl text-sm text-gray-600",
      children: "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."
    }), sessions.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "mt-5 space-y-6",
      children: sessions.map(function (session, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            children: session.agent.is_desktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.DesktopComputerIcon, {
              className: "w-8 h-8 text-gray-500"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_2__.DeviceMobileIcon, {
              className: "w-8 h-8 text-gray-500"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "ml-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "text-sm text-gray-600",
              children: [session.agent.platform, " - ", session.agent.browser]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "text-xs text-gray-500",
                children: ["".concat(session.ip_address, " - "), session.is_current_device ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-green-500 font-semibold",
                  children: "This device"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
                  children: ["Last active ", session.last_active]
                })]
              })
            })]
          })]
        }, index);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "flex items-center mt-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: confirmLogout,
        children: "Log Out Other Browser Sessions"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_4__.default, {
        on: recentlySuccessful,
        className: "ml-3",
        children: "Done."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_DialogModal__WEBPACK_IMPORTED_MODULE_5__.default, {
      onClose: handleClose,
      closeable: true,
      show: confirmingLogout,
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: "Log Out Other Browser Sessions"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-sm",
          children: "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_Input__WEBPACK_IMPORTED_MODULE_6__.default, {
              callback: function callback(value) {
                return setData("password", value);
              },
              type: "password",
              value: data.password,
              className: "mt-1 block w-3/4",
              placeholder: "Password",
              ref: passwordRef
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_InputError__WEBPACK_IMPORTED_MODULE_7__.default, {
            error: errors.password,
            className: "mt-2"
          })]
        })]
      }),
      footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__.default, {
          onClick: handleClose,
          className: "".concat(processing && 'opacity-25'),
          type: 'button',
          disabled: processing,
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Jetstream_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: handleSubmit,
          className: "ml-2 ".concat(processing && 'opacity-25'),
          type: 'button',
          disabled: processing,
          children: "Log Out Other Browser Sessions"
        })]
      }),
      width: 'sm:max-w-2xl'
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutOtherBrowserSessionsForm);

/***/ })

}]);