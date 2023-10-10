import React, { useRef, useState, FormEvent } from 'react';
import { Children, useContext } from "react";
import Classes from './NewTodo.module.css'
import {TodosContext} from '../store/todos-context'
const NewTodo: React.FC=()=> {// after context you can remove props and everything from here also
  // State to manage the user's input
  const [userText, setUserText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const TodoContext=useContext(TodosContext);
  // Function to handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Access the textarea value using the ref
    const inputValue = inputRef.current?.value || '';

    if(inputValue.trim().length===0){
        return;
    }
    // Do whatever you need with the input value
    console.log('User text submitted:', inputValue);
    TodoContext.onAddTodo(inputValue);
    // Optionally, you can clear the input
    setUserText('');
  };

  return (
    <form onSubmit={handleSubmit}className={Classes.form}>
      <label htmlFor="userText">Your Text:</label>
      <input 
      type='text'
        id="userText"
        name="userText"
        ref={inputRef}
        placeholder="Type your text here..."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      ></input>

      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewTodo;
