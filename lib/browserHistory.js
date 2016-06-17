'use strict';

exports.__esModule = true;

var _history = require('history');

var _history2 = _interopRequireDefault(_history);

var _useRouterHistory = require('./useRouterHistory');

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _useRouterHistory2.default)(_history2.default.createHistory)({
  basename: '/negotiations'
});
module.exports = exports['default'];