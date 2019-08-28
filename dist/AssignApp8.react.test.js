"use strict";

var _react = _interopRequireDefault(require("react"));

var _AssignApp = _interopRequireDefault(require("./AssignApp8"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

test('Test this page that it loads', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_AssignApp.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onmouseenter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onmouseleave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=AssignApp8.react.test.js.map