var todoAction = require('../actions/todoAction'),
    counterAction = require('../actions/counterAction');

exports.todoItemDoubleClick = [
  todoAction.setEditingTodo
];

exports.todoItemOnEnter = [
  todoAction.validateNewTodo, {
    success: [
      todoAction.cancelEditingTodo,
      todoAction.saveEditingTodo,
      todoAction.setSyncFlag,
      [
        todoAction.syncTodoInStorage, {
        success: [ todoAction.removeSyncFlag ]
      }
      ]
    ],
    error: []
  }
];

exports.todoItemOnToggleCompleted = [
    todoAction.toggleCompletedTodo
];