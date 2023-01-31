import React , {useState} from 'react'
import PropTypes from 'prop-types'
import "./styles.css"
const NewTodo = ({ onNewTodo }) => {
    const enter_key = 13
    const escape_key = 27
    const [value, setValue] = useState("")
    const submit = () => {
        if(onNewTodo){
            onNewTodo(value)
            erase()
        }
    }
    const erase = () => {
        setValue('')
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
        <input
            className="new-todo"
            placeholder="O que você precisa fazer ?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo