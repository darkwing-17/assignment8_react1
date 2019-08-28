"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EditTaskForm = function EditTaskForm(props) {
  var _useState = (0, _react.useState)(props.currentTask),
      _useState2 = _slicedToArray(_useState, 2),
      task = _useState2[0],
      setTask = _useState2[1];

  (0, _react.useEffect)(function () {
    setTask(props.currentTask);
  }, [props]);

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setTask(_objectSpread({}, task, _defineProperty({}, name, value)));
  };

  return _react.default.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      props.updateTask(task.id, task);
    }
  }, _react.default.createElement("label", null, "taskname"), _react.default.createElement("input", {
    type: "text",
    name: "taskname",
    value: task.taskname,
    onChange: handleInputChange
  }), _react.default.createElement("button", null, "Update user"), _react.default.createElement("button", {
    onClick: function onClick() {
      return props.setEditing(false);
    },
    className: "button muted-button"
  }, "Cancel"));
};

var _default = EditTaskForm;
exports.default = _default;
//# sourceMappingURL=EditTaskForm.js.map