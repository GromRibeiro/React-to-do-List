import React, { useState } from "react";
import NewTodo from './components/NewTodo'
import TodoList from './components/NewList'
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([])
    const onNewTodo = (value) => {
        setTodos([...todos,{
            id: new Date().getTime(),
            title: value,
            checked: false
        }])
    }
    const onToggle = (todo) => {
        setTodos(todos.map((obj) => (obj.id === todo.id ? {...obj, checked: !todo.checked} : obj)))
    }
    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id))
    }
    return(
        <section id="app" className="container">
            <header>
                <h1 className="title">To Do</h1>
            </header>
            <section className="main">
                <NewTodo onNewTodo={onNewTodo}/>
                <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
            </section>
        </section>
      )
}

export default App;
