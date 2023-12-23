import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete tast-button"
              onClick={() => handleComplete(todo)}
            >
              <FaCheckCircle />
            </button>
            <button
              className="button-edit tast-button"
              onClick={() => handleEdit(todo)}
            >
              <FaEdit />
            </button>
            <button
              className="button-delete tast-button"
              onClick={() => handleDelete(todo)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
