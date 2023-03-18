import React, { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const data = [
  {
    id: 1,
    title: "Setup development environment",
    completed: false,
  },
  {
    id: 2,
    title: "Develop website and add content",
    completed: false,
  },
  {
    id: 3,
    title: "Deploy to live server",
    completed: false,
  },
];

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  function getInitialTodos() {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  }

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </>
  );
};

export default TodosLogic;
