(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_UpdatePasswordForm_jsx"],{

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

/***/ "./resources/js/Jetstream/FormSection.jsx":
/*!************************************************!*\
  !*** ./resources/js/Jetstream/FormSection.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jetstream_SectionTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/SectionTitle */ "./resources/js/Jetstream/SectionTitle.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var FormSection = function FormSection(_ref) {
  var title = _ref.title,
      aside = _ref.aside,
      description = _ref.description,
      onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, ["title", "aside", "description", "onSubmit"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "md:grid md:grid-cols-3 md:gap-6 ".concat(props.className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Jetstream_SectionTitle__WEBPACK_IMPORTED_MODULE_0__.default, {
      title: title,
      aside: aside,
      description: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-5 md:mt-0 md:col-span-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "px-4 py-5 bg-white sm:p-6 shadow ".concat(props.actions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "grid grid-cols-6 gap-6",
            children: props.children
          })
        }), props.actions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md",
          children: props.actions
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSection);

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

/***/ "./resources/js/Jetstream/Label.jsx":
/*!******************************************!*\
  !*** ./resources/js/Jetstream/Label.jsx ***!
  \******************************************/
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

var Label = function Label(_ref) {
  var value = _ref.value,
      props = _objectWithoutProperties(_ref, ["value"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", _objectSpread(_objectSpread({}, props), {}, {
    className: "block font-medium text-sm text-gray-700 ".concat(props.className),
    children: value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      children: [" ", value, " "]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      children: [" ", props.children, " "]
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

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

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.jsx");
/* harmony import */ var _Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Label */ "./resources/js/Jetstream/Label.jsx");
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.jsx");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.jsx");
/* harmony import */ var _Jetstream_FormSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Jetstream/FormSection */ "./resources/js/Jetstream/FormSection.jsx");
/* harmony import */ var _Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Jetstream/ActionMessage */ "./resources/js/Jetstream/ActionMessage.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var UpdatePasswordForm = function UpdatePasswordForm(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.useForm)({
    current_password: '',
    password: '',
    password_confirmation: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      errors = _useForm.errors,
      put = _useForm.put,
      processing = _useForm.processing,
      recentlySuccessful = _useForm.recentlySuccessful,
      reset = _useForm.reset;

  var currentPasswordRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.createRef)();
  var newPasswordRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.createRef)();

  var updatePassword = function updatePassword() {
    return put(route('user-password.update'), {
      errorBag: 'updatePassword',
      preserveScroll: true,
      onSuccess: function onSuccess() {
        return reset();
      }
    });
  };

  var actions = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_ActionMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
      on: recentlySuccessful,
      className: "mr-3",
      children: "Saved."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
      onClick: updatePassword,
      className: "".concat(processing && 'opacity-25'),
      type: 'button',
      disabled: processing,
      children: "Save"
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Jetstream_FormSection__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, props), {}, {
    title: 'Update Password',
    description: 'Ensure your account is using a long, random password to stay secure.',
    actions: actions,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__.default, {
        htmlFor: "current_password",
        value: "Current Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__.default, {
        ref: currentPasswordRef,
        id: "current_password",
        type: "password",
        callback: function callback(value) {
          return setData("current_password", value);
        },
        className: "mt-1 block w-full",
        value: data.current_password,
        autoComplete: "current-password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__.default, {
        error: errors.current_password,
        className: "mt-2"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__.default, {
        htmlFor: "password",
        value: "New Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__.default, {
        ref: newPasswordRef,
        id: "password",
        type: "password",
        callback: function callback(value) {
          return setData("password", value);
        },
        className: "mt-1 block w-full",
        value: data.password,
        autoComplete: "new-password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__.default, {
        error: errors.password,
        className: "mt-2"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "col-span-6 sm:col-span-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__.default, {
        htmlFor: "password_confirmation",
        value: "Confirm Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__.default, {
        id: "password_confirmation",
        type: "password",
        callback: function callback(value) {
          return setData("password_confirmation", value);
        },
        className: "mt-1 block w-full",
        value: data.password_confirmation,
        autoComplete: "new-password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__.default, {
        error: errors.password_confirmation,
        className: "mt-2"
      })]
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdatePasswordForm);

/***/ })

}]);