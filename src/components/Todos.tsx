import React, { Children, useContext } from "react";
import Todo from "../models/todo";// this todo now act as data type also not only as class but a data type also
import TodoListe from "./TodoListe";
import Classes from './Todos.module.css'
import {TodosContext} from '../store/todos-context'
//noww i put items:todo to tell items is array of object which should have id and text
const Todos:React.FC =(props) =>{//react.fc make it generic type whatever we paass props becoes like that
  const TodoContext=useContext(TodosContext);
    return (
//after context you can remmove props and this all <{items:Todo[], deleteTodo:(inputext:string)=>void}>
    <>
    <TodoListe items={TodoContext.items} deleteTodo={TodoContext.deleteTodo}/>
    
    </>
  );
}

export default Todos;
