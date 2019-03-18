"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assignment 8 - HTML / CSS / React
//
//
//
function formatthisName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Adam',
  lastName: 'Chen'
};

var element = _react.default.createElement("h1", null, "Hello, ", formatthisName(user), "!");

_reactDom.default.render(element, document.getElementById('root'));
//# sourceMappingURL=examplereact.js.map