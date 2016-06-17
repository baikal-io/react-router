'use strict';

exports.__esModule = true;

var _history = require('history');

var _useRouterHistory = require('./useRouterHistory');

var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserHistory = (0, _useRouterHistory2.default)(_history.createHistory)({
  basename: '/negotiations'
});

exports.default = browserHistory;
module.exports = exports['default'];