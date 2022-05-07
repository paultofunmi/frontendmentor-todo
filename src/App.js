import React, { useEffect, useState } from 'react'
import './App.css';

// import { useAlert } from 'react-alert'

import Header from './components/Header';
import Todos from './components/Todos';
import todoList from './data/data.json';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([...todoList]);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');      
    }
  }, []);

  useEffect(() => {
    if(theme ==='dark') {
      document.body.classList.add('dark-bg');
      document.documentElement.classList.add('dark'); 
    }else {
      document.body.classList.remove('dark-bg');
      document.documentElement.classList.remove('dark');      
    }
    localStorage.theme = theme;    
  }, [theme]);
  
  const toggleTheme = () => {  
    setTheme(theme === 'dark' ? 'light': 'dark');   
  }

  const addTodo = (val) => {          
    const newTodo = { id: todos.length + 1, text: val, checked: false };
    setTodos([...todos, newTodo]);
    // alert.success('Added Todo');
  }

  const clearCompleted = () => {

    let updatedTodos = todos.map(todo => {
       if(todo.checked) {
          todo.checked = false;
          return todo;
       }
       return todo;
    });

    setTodos(updatedTodos);
  }

  const toggleComplete = (id) => {
    let filteredTodos = todos.map(todo => {
        if(todo.id === id) {
          todo.checked = !todo.checked;
          return todo;
        }
        return todo;
    });

    setTodos(filteredTodos);
    // alert.success('Updated Todo');
  }

  const removeTodo = (id) => {

    let filteredTodos = todos.filter( todo => {
      return (todo.id !== id);
    });

    setTodos(filteredTodos);
  }

  return (
    <div className="App">       
      <Header theme={theme} toggleTheme={toggleTheme} addTodo={addTodo}/>      
      <Todos tasks={todos} remove={removeTodo} toggle={toggleComplete} clear={clearCompleted} />
    </div>
  );
}

export default App;
