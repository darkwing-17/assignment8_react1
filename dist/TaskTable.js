"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var TaskTable = function TaskTable(props) {
  return _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Taskname"), _react.default.createElement("th", null, "Actions"))), _react.default.createElement("tbody", null, props.tasks.length > 0 ? props.tasks.map(function (task) {
    return _react.default.createElement("tr", {
      key: task.id
    }, _react.default.createElement("td", null, task.taskname), _react.default.createElement("td", null, _react.default.createElement("button", {
      onClick: function onClick() {
        return props.editRow(task);
      },
      className: "button muted-button"
    }, "edit"), _react.default.createElement("button", {
      onClick: function onClick() {
        return props.deleteTask(task.id);
      },
      className: "button muted-button"
    }, "delete ")));
  }) : _react.default.createElement("tr", null, _react.default.createElement("td", {
    colSpan: 3
  }, "no tasks"))));
};

var _default = TaskTable;
exports.default = _default;
//# sourceMappingURL=TaskTable.js.map