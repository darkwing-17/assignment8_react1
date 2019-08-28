"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TaskTable = _interopRequireDefault(require("./TaskTable"));

var _AddTaskForm = _interopRequireDefault(require("./AddTaskForm"));

var _EditTaskForm = _interopRequireDefault(require("./EditTaskForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TaskListing = function TaskListing() {
  var tasksData = [];
  var initialFormState = {
    id: null,
    taskname: ''
  };

  var _useState = (0, _react.useState)(tasksData),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = (0, _react.useState)(initialFormState),
      _useState6 = _slicedToArray(_useState5, 2),
      currentTask = _useState6[0],
      setCurrentTask = _useState6[1];

  var addTask = function addTask(task) {
    task.id = tasks.length + 1;
    setTasks([].concat(_toConsumableArray(tasks), [task]));
  };

  var deleteTask = function deleteTask(id) {
    setEditing(false);
    setTasks(tasks.filter(function (task) {
      return task.id !== id;
    }));
  };

  var updateTask = function updateTask(id, updatedTask) {
    setEditing(false);
    setTasks(tasks.map(function (task) {
      return task.id === id ? updatedTask : task;
    }));
  };

  var editRow = function editRow(task) {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      taskname: task.taskname
    });
  };

  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "flex-row"
  }, _react.default.createElement("div", {
    className: "flex-large"
  }, editing ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, "edit task"), _react.default.createElement(_EditTaskForm.default, {
    editing: editing,
    setEditing: setEditing,
    currentTask: currentTask,
    updateTask: updateTask
  })) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, "add task"), _react.default.createElement(_AddTaskForm.default, {
    addTask: addTask
  }))), _react.default.createElement("div", {
    className: "flex-large"
  }, _react.default.createElement("h2", null, "view tasks"), _react.default.createElement(_TaskTable.default, {
    tasks: tasks,
    editRow: editRow,
    deleteTask: deleteTask
  }))));
};

var _default = TaskListing;
exports.default = _default;
//# sourceMappingURL=TaskListing.js.map