webpackJsonp([2],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(130);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(344);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(data) {
  return JSON.stringify(data, null, 4);
};

function AddonInfo(_ref) {
  var version = _ref.version,
      instance = _ref.instance,
      statuses = _ref.statuses;

  return _react2.default.createElement(
    'section',
    { id: 'content', role: 'main', className: 'ac-content' },
    _react2.default.createElement(
      'div',
      { className: 'aui-page-panel main-panel' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'aui-page-panel-item' },
          _react2.default.createElement(
            'h1',
            null,
            'Everything seems to be working fine'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            null,
            'Version.json'
          ),
          _react2.default.createElement(
            'pre',
            null,
            format(version)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            null,
            'Instance info retrieved from addon back-end'
          ),
          _react2.default.createElement(
            'pre',
            null,
            format(instance)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            null,
            'Statuses retrieved directly from JIRA'
          ),
          _react2.default.createElement(
            'pre',
            null,
            format(statuses)
          )
        )
      )
    )
  );
}

AddonInfo.propTypes = {
  version: _propTypes2.default.object.isRequired,
  instance: _propTypes2.default.object.isRequired,
  statuses: _propTypes2.default.object.isRequired
};

exports.default = AddonInfo;

/***/ })

});
//# sourceMappingURL=2.3c5fbda5eb1bdf9f9dce.js.map