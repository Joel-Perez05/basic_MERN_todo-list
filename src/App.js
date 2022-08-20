import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';
import Display from './components/Display';

function App() {
  const [createTodo, setCreateTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <Todo 
        createTodo = {createTodo} 
        setCreateTodo = {setCreateTodo} 
        allTodos = {allTodos}
        setAllTodos = {setAllTodos}
      />
      <hr/>
      <Display 
        allTodos = {allTodos} 
        setAllTodos = {setAllTodos}
      />
    </div>
  );
}

export default App;