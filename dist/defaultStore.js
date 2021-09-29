"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Context = exports.defaultStoreServices = exports.defaultStoreUtils = void 0;

var _storeGenerator = _interopRequireDefault(require("./storeGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialValue = {
  defaultBoolean: false,
  defaultObj: {}
};

const DefaultStoreReducer = (state, _ref) => {
  let {
    type,
    payload
  } = _ref;
  return _objectSpread(_objectSpread({}, state), {}, {
    [type]: payload
  });
};

const setDefaultBoolean = dispatch => {
  return defaultBoolean => {
    defaultStoreUtils.defaultBoolean = defaultBoolean;
    dispatch({
      type: "defaultBoolean",
      payload: defaultBoolean
    });
  };
};

const setDefaultObj = dispatch => {
  return defaultObj => {
    defaultStoreUtils.defaultObj = defaultObj;
    dispatch({
      type: "defaultObj",
      payload: defaultObj
    });
  };
};

const defaultStoreUtils = {
  defaultBoolean: initialValue.defaultBoolean,
  defaultObj: initialValue.defaultObj
};
exports.defaultStoreUtils = defaultStoreUtils;
const defaultStoreServices = {// relevant API service calls added here
};
exports.defaultStoreServices = defaultStoreServices;
const {
  Context,
  Provider
} = (0, _storeGenerator.default)(DefaultStoreReducer, {
  // actions
  setDefaultBoolean,
  setDefaultObj
}, {
  // state
  defaultBoolean: initialValue.defaultBoolean,
  defaultObj: initialValue.defaultObj
});
exports.Provider = Provider;
exports.Context = Context;