'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Belonging = require('./build/Belonging.json');

var _Belonging2 = _interopRequireDefault(_Belonging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Belonging2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0JlbG9uZ2luZy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiYmVsb25naW5nIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBc0IsQUFBdEIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQ3hCO1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLG9CQUFVLEFBQXJCLEFBQXRCLFlBQXVELEFBQXZELEFBQVAsQUFDSDtBQUZEIiwiZmlsZSI6IkJlbG9uZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mYXJoYWQvRGVza3RvcC9CTE9ORyJ9