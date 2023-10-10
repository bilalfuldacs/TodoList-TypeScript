import React, { createContext, useState } from "react";
import Todo from "../models/todo";

interface TodosContextProps {
  items: Todo[];
  onAddTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextProps>({
  items: [],
  onAddTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

const TodosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => prev.concat(newTodo));
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextProps = {
    items: todos,
    onAddTodo: addHandler,
    deleteTodo: deleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosProvider, TodosContext };
