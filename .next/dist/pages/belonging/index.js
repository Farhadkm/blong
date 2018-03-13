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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _Belonging = require('../../ethereum/Belonging');

var _Belonging2 = _interopRequireDefault(_Belonging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/farhad/Desktop/BLONG/pages/belonging/index.js?entry';


var Belonging = function (_Component) {
    (0, _inherits3.default)(Belonging, _Component);

    function Belonging() {
        (0, _classCallCheck3.default)(this, Belonging);

        return (0, _possibleConstructorReturn3.default)(this, (Belonging.__proto__ || (0, _getPrototypeOf2.default)(Belonging)).apply(this, arguments));
    }

    (0, _createClass3.default)(Belonging, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('h2', { style: { marginTop: '100px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Belonging ', this.props.belongingId), _react2.default.createElement(_semanticUiReact.Table, { celled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Name'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.props.name)), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, this.props.description)), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Creator'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, this.props.creatorAddress)), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Owner'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, this.props.ownerAddress)), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Creator time'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, this.props.createTime)), _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Own time'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.props.ownTime)))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var belonging, belongingData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                belonging = (0, _Belonging2.default)(props.query.id);
                                _context.next = 3;
                                return belonging.methods.getData().call();

                            case 3:
                                belongingData = _context.sent;
                                return _context.abrupt('return', {
                                    belongingId: props.query.id,
                                    name: belongingData[0],
                                    description: belongingData[1],
                                    ownerAddress: belongingData[2],
                                    ownTime: belongingData[3],
                                    creatorAddress: belongingData[4],
                                    createTime: belongingData[5]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Belonging;
}(_react.Component);

exports.default = Belonging;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JlbG9uZ2luZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIlRhYmxlIiwiQmVsb25naW5nQ29udHJhY3QiLCJCZWxvbmdpbmciLCJtYXJnaW5Ub3AiLCJwcm9wcyIsImJlbG9uZ2luZ0lkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRvckFkZHJlc3MiLCJvd25lckFkZHJlc3MiLCJjcmVhdGVUaW1lIiwib3duVGltZSIsImJlbG9uZ2luZyIsInF1ZXJ5IiwiaWQiLCJtZXRob2RzIiwiZ2V0RGF0YSIsImNhbGwiLCJiZWxvbmdpbmdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU8sQUFBdUI7Ozs7Ozs7OztJLEFBRXhCOzs7Ozs7Ozs7OztpQ0FnQk8sQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsUUFBSSxPQUFPLEVBQUMsV0FBWixBQUFXLEFBQVk7OEJBQXZCO2dDQUFBO0FBQUE7ZUFBNEMsbUJBQUEsQUFBSyxNQURyRCxBQUNJLEFBQXVELEFBQ3ZELDhCQUFBLEFBQUMsd0NBQU0sUUFBUDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUgxQixBQUNJLEFBRUksQUFBd0IsQUFFNUIsd0JBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxnQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUFhLEFBQUssTUFQMUIsQUFLSSxBQUVJLEFBQXdCLEFBRTVCLCtCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BYjFCLEFBU0ksQUFJSSxBQUF3QixBQUU1QixrQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLDBCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQW5CMUIsQUFlSSxBQUlJLEFBQXdCLEFBRTVCLGdDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsaUNBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BekIxQixBQXFCSSxBQUlJLEFBQXdCLEFBRTVCLDhCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSxvQkFBYSxBQUFLLE1BbkN0QyxBQUNJLEFBRUksQUFDSSxBQTJCSSxBQUlJLEFBQXdCLEFBTS9DOzs7OztpSEF4RDRCLEE7Ozs7O2lDQUNuQjtBLDRDQUFZLHlCQUFrQixNQUFBLEFBQU0sTUFBeEIsQUFBOEIsQTs7dUNBQ3BCLFVBQUEsQUFBVSxRQUFWLEFBQWtCLFVBQWxCLEFBQTRCLEE7O2lDQUFsRDtBOztpREFFVyxNQUFBLEFBQU0sTUFEaEIsQUFDc0IsQUFDekI7MENBQU0sY0FGSCxBQUVHLEFBQWMsQUFDcEI7aURBQWEsY0FIVixBQUdVLEFBQWMsQUFDM0I7a0RBQWMsY0FKWCxBQUlXLEFBQWMsQUFDNUI7NkNBQVMsY0FMTixBQUtNLEFBQWMsQUFDdkI7b0RBQWdCLGNBTmIsQUFNYSxBQUFjLEFBQzlCO2dEQUFZLGNBUFQsQUFPUyxBQUFjLEE7QUFQdkIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5ZLEEsQUE4RHhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2ZhcmhhZC9EZXNrdG9wL0JMT05HIn0=