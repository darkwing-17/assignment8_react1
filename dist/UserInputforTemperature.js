"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInputforTemperature = function UserInputforTemperature(props) {
  return _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "City"))), _react.default.createElement("tbody", null, props.city.length > 0 ? props.city.map(function (city) {
    return _react.default.createElement("tr", {
      key: city.id
    }, _react.default.createElement("td", null, city.cityname), _react.default.createElement("td", null, _react.default.createElement("button", {
      className: "button muted-button"
    }, "Enter city")));
  }) : _react.default.createElement("tr", null, _react.default.createElement("td", null, "No city entered"))));
};

var _default = UserInputforTemperature;
exports.default = _default;
//# sourceMappingURL=UserInputforTemperature.js.map