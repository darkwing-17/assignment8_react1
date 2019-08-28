"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Clock = _interopRequireDefault(require("./Clock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskListing = function TaskListing() {
  return _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Clock"), _react.default.createElement("th", null, _react.default.createElement(_Clock.default, null)))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, "Put temp here"))));
};

var _default = TaskListing;
exports.default = _default;
//# sourceMappingURL=tasklisting.js.map