import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import {TodosContext} from './store/todos-context'
import { TodosProvider } from './store/todos-context';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
function App() {
  
  return (
    <TodosProvider >
      <NewTodo />
<Todos/>
    </TodosProvider>
  );
}

export default App;
