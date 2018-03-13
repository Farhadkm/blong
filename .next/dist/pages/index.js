'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/farhad/Desktop/BLONG/pages/index.js?entry';


var HomeComponent = function (_Component) {
    (0, _inherits3.default)(HomeComponent, _Component);

    function HomeComponent() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, HomeComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HomeComponent.__proto__ || (0, _getPrototypeOf2.default)(HomeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchAddress: ''
        }, _this.onSearch = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            event.preventDefault();
                            _context.next = 3;
                            return _routes.Router.push('/belonging/' + _this.state.searchAddress);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(HomeComponent, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { style: { marginTop: "150px" }, src: '../static/Blong.jpeg', size: 'medium', centered: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSearch, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Input, {
                style: { marginTop: '50px', marginLeft: '15%', marginRight: '15%' },
                value: this.state.searchAddress,
                onChange: function onChange(event) {
                    return _this3.setState({ searchAddress: event.target.value });
                },
                action: { icon: 'search' },
                placeholder: 'Search...', fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, { style: { marginTop: '50px', marginLeft: '40%' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_routes.Link, { route: '/mybelongings', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'My Belongings')), _react2.default.createElement(_routes.Link, { route: '/belonging/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Add Belonging')))));
        }
    }]);

    return HomeComponent;
}(_react.Component);

exports.default = HomeComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkdyaWQiLCJGb3JtIiwiTGF5b3V0IiwiUm91dGVyIiwiTGluayIsIkhvbWVDb21wb25lbnQiLCJzdGF0ZSIsInNlYXJjaEFkZHJlc3MiLCJvblNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQU8sQUFBUSxBQUFNOztBQUNyQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFRLEFBQVk7Ozs7Ozs7SUFPdkIsQTs7Ozs7Ozs7Ozs7Ozs7OzhOQUVGLEE7MkJBQVEsQUFDVyxBO0FBRFgsQUFDSixpQkFHSixBLG9GQUFXLG1CQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNQO2tDQURPLEFBQ1AsQUFBTTs0Q0FEQzttQ0FFRCxlQUFBLEFBQU8scUJBQW1CLE1BQUEsQUFBSyxNQUY5QixBQUVELEFBQXFDOzs2QkFGcEM7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QTs7Ozs7aUNBS0Y7eUJBRUw7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx3Q0FBTSxPQUFPLEVBQUUsV0FBaEIsQUFBYyxBQUFhLFdBQVcsS0FBdEMsQUFBMkMsd0JBQXdCLE1BQW5FLEFBQXdFLFVBQVMsVUFBakY7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzt1QkFDVSxFQUFFLFdBQUYsQUFBYSxRQUFRLFlBQXJCLEFBQWlDLE9BQU8sYUFEbkQsQUFDVyxBQUFxRCxBQUM1RDt1QkFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFIbkUsQUFJSTt3QkFBUSxFQUFFLE1BSmQsQUFJWSxBQUFRLEFBQ2hCOzZCQUxKLEFBS2dCLGFBQVksT0FMNUI7OEJBQUE7Z0NBSFIsQUFFSSxBQUNJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxPQUFJLE9BQU8sRUFBRSxXQUFGLEFBQWEsUUFBUSxZQUF0QyxBQUFpQixBQUFpQzs4QkFBbEQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFhOzhCQUFiO2dDQUFBLEFBQThCO0FBQTlCOytCQUE4QixBQUFDLHlDQUFPLFNBQVIsQUFBZ0I7OEJBQWhCO2dDQUFBO0FBQUE7ZUFEbEMsQUFDSSxBQUE4QixBQUM5QixtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBYTs4QkFBYjtnQ0FBQSxBQUErQjtBQUEvQjsrQkFBK0IsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCOzhCQUFoQjtnQ0FBQTtBQUFBO2VBZC9DLEFBQ0ksQUFVSSxBQUNJLEFBRUksQUFBK0IsQUFLbEQ7Ozs7O0FBaEN1QixBLEFBbUM1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9mYXJoYWQvRGVza3RvcC9CTE9ORyJ9