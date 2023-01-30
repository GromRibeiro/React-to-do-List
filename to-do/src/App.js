import React, { useState } from "react";
import './App.css';

const App = () => {
    const enter_key = 13
    const escape_key = 27

    const initialTodos = [
        {
            id: '1',
            title: 'Estudar Programação',
            checked: false,
        },
        {
            id: '2',
            title: 'Sair da Edutec',
            checked: true,
        },
        {
            id: '3',
            title: 'Não aguento mais',
            checked: false,
        },
    ]

    const [todos] = useState(initialTodos)
    const [value, setValue] = useState('')
    const erase = () => {
        setValue('')
    }
    const submit = () => {
        console.log('submit', value)
        erase()
    }
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onKeyDown = (e) => {
        if(e.which === enter_key){
            submit()
        }else if (e.which === escape_key){
            erase()
        }
    }

    return(
        <section id="app" className="container">
            <header>
                <h1 className="title">To Do</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="O que você precisa fazer ?"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ul className="todo-list">
                    {
                        todos.map((todo) => (
                            <li>{todo.title}</li>
                        ))
                    }
                </ul>
            </section>
        </section>
      )
}

export default App;
