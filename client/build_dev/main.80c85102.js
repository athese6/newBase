webpackJsonp([1],{

/***/ "./config/polyfills.js":
/*!*****************************!*\
  !*** ./config/polyfills.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
    // Rejection tracking prevents a common issue where React gets into an
    // inconsistent state due to an error, but it gets swallowed by a Promise,
    // and the user has no idea what causes React's erratic future behavior.
    __webpack_require__(/*! promise/lib/rejection-tracking */ "./node_modules/promise/lib/rejection-tracking.js").enable();
    window.Promise = __webpack_require__(/*! promise/lib/es6-extensions.js */ "./node_modules/promise/lib/es6-extensions.js");
}

// fetch() polyfill for making API calls.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
    require('raf').polyfill(global);
}


/***/ }),

/***/ "./node_modules/materialize-css/dist/css/materialize.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/materialize-css/dist/css/materialize.min.css ***!
  \*******************************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_appReducer__ = __webpack_require__(/*! ./store/appReducer */ "./src/store/appReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobind_decorator__ = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobind_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_autobind_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_styled_components__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App_css__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__App_css__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/Henry/workspace/xoxo2/client/src/App.js',
    _this = this,
    _desc,
    _value,
    _class;

var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






// import logo from './logo.svg';



var Button = __WEBPACK_IMPORTED_MODULE_6_styled_components__["a" /* default */].button.attrs({
    className: function className(props) {
        return props.className;
    }
})(_templateObject);

var AsyncComponent = __WEBPACK_IMPORTED_MODULE_2_react_loadable___default()({
    loader: function loader() {
        return __webpack_require__.e/* import() */(0/*! myNamedChunk */).then(__webpack_require__.bind(null, /*! ./SomeComponent */ "./src/SomeComponent.js"));
    },
    loading: function loading() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                },
                __self: _this
            },
            'loading...'
        );
    },
    modules: ['myNamedChunk']
});

var App = (_class = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref,
            _this3 = this;

        var _temp, _this2, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
            response: ''
        }, _this2.callApi = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var response, body;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return fetch('/api/hello');

                        case 2:
                            response = _context.sent;
                            _context.next = 5;
                            return response.json();

                        case 5:
                            body = _context.sent;

                            if (!(response.status !== 200)) {
                                _context.next = 8;
                                break;
                            }

                            throw Error(body.message);

                        case 8:
                            return _context.abrupt('return', body);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this3);
        })), _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            this.callApi().then(function (res) {
                return _this4.setState({ response: res.express });
            }).catch(function (err) {
                return console.log(err);
            });
            if (!this.props.message) {
                this.props.updateMessage("Hi, I'm from client!");
            }
        }
    }, {
        key: 'test',
        value: function test(event) {
            console.log("teasfsfsf");
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'App', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'header',
                    { className: 'App-header', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: './logo.svg', className: 'App-logo', alt: 'logo', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        { className: 'App-title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            },
                            __self: this
                        },
                        'Welcome to React'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { className: 'App-intro', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        },
                        __self: this
                    },
                    'To get started, edit ',
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'code',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            },
                            __self: this
                        },
                        'src/App.js'
                    ),
                    ' and save to reload.'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { className: 'App-intro', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        },
                        __self: this
                    },
                    this.state.response
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { className: 'App-intro', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        },
                        __self: this
                    },
                    "web" + ": " + "development"
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'App-intro', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AsyncComponent, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        },
                        'Redux: ',
                        this.props.message
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    Button,
                    { className: "waves-effect waves-light btn", onClick: this.test, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        },
                        __self: this
                    },
                    "버튼"
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), (_applyDecoratedDescriptor(_class.prototype, 'test', [__WEBPACK_IMPORTED_MODULE_5_autobind_decorator___default.a], Object.getOwnPropertyDescriptor(_class.prototype, 'test'), _class.prototype)), _class);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(function (_ref3) {
    var app = _ref3.app;
    return {
        message: app.message
    };
}, function (dispatch) {
    return {
        updateMessage: function updateMessage(messageText) {
            return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_appReducer__["b" /* setMessage */])(messageText));
        }
    };
})(App));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css_dist_js_materialize_min_js__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min.js */ "./node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_materialize_css_dist_js_materialize_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_materialize_css_dist_js_materialize_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css_dist_css_materialize_min_css__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ "./node_modules/materialize-css/dist/css/materialize.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css_dist_css_materialize_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_materialize_css_dist_css_materialize_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_css__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_configureStore__ = __webpack_require__(/*! ./store/configureStore */ "./src/store/configureStore.js");
var _jsxFileName = '/Users/Henry/workspace/xoxo2/client/src/index.js';


// import Loadable from 'react-loadable';







// import registerServiceWorker from './registerServiceWorker';

var store = Object(__WEBPACK_IMPORTED_MODULE_7__store_configureStore__["a" /* default */])(window.__REDUX_STATE__ || {});

var AppBundle = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
    { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        },
        __self: this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__App__["a" /* default */], {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        },
        __self: this
    })
);

// window.onload = () => {
//     Loadable.preloadReady().then(() => {
//         // ReactDOM.hydrate(  this is for ssr
//         ReactDOM.render(
//             AppBundle,
//             document.getElementById('root')
//         );
//     });
// };

var root = document.querySelector('#root');
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(AppBundle, root);

// registerServiceWorker();

/***/ }),

/***/ "./src/store/appReducer.js":
/*!*********************************!*\
  !*** ./src/store/appReducer.js ***!
  \*********************************/
/*! exports provided: appReducer, setMessage, setAsyncMessage */
/*! exports used: appReducer, setMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setMessage; });
/* unused harmony export setAsyncMessage */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    message: null
};

var appReducer = function appReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_MESSAGE':
            return _extends({}, state, {
                message: action.message
            });
        default:
            return state;
    }
};

var setMessage = function setMessage(messageText) {
    return { type: 'SET_MESSAGE', message: messageText };
};

var setAsyncMessage = function setAsyncMessage(messageText) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                return resolve();
            }, 2000);
        }).then(function () {
            return dispatch(setMessage(messageText));
        });
    };
};

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appReducer__ = __webpack_require__(/*! ./appReducer */ "./src/store/appReducer.js");





var middleWare = [];

middleWare.push(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a);

var loggerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_logger__["createLogger"])({
    predicate: function predicate() {
        return "development" === 'development';
    }
});
middleWare.push(loggerMiddleware);

// if you're also using redux-thunk, add it as a middleware
var createStoreWithMiddleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */].apply(undefined, middleWare))(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* createStore */]);

var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
    app: __WEBPACK_IMPORTED_MODULE_3__appReducer__["a" /* appReducer */]
});

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return createStoreWithMiddleware(rootReducer, initialState);
};

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./config/polyfills.js ./src/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Henry/workspace/xoxo2/client/config/polyfills.js */"./config/polyfills.js");
module.exports = __webpack_require__(/*! /Users/Henry/workspace/xoxo2/client/src/index.js */"./src/index.js");


/***/ })

},[0]);
//# sourceMappingURL=main.80c85102.js.map