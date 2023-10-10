import React from "react";
import Todo from "../models/todo";
import Classes from './TodoItem.module.css'

const TodoListe: React.FC<{ items: Todo[], deleteTodo: (id: string) => void }> = (props) => {
  const handleDelete = (id: string) => {
    // Call the deleteTodo function with the id when an item is clicked
    props.deleteTodo(id);
  };

  return (
    <div>
      {" "}
      <ul className={Classes.todos}>
        {props.items.map((item) => (
          <li
            key={item.id} // Assuming you have an id property on your Todo model
            className={Classes.item}
            onClick={() => handleDelete(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListe;
