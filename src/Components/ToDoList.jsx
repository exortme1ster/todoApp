import React from 'react'
import {useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'


const ToDoList = () => {
    const [toDoList, setToDoList] = useState([])
    
    const addToDoList = (toDo) => {
        if(!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }
        const newToDos = [toDo, ...toDoList]
        setToDoList(newToDos)
    }

    const updateToDo = (ToDoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setToDoList(prev => prev.map((item) => (item.id === ToDoId ? newValue : item)))

    }

    const removeToDo = (id) => {
        const removeArr = [...toDoList].filter((todo) => todo.id !== id)

        setToDoList(removeArr);
    }

    const completeToDo = (id) => {
        let updatedToDos = toDoList.map(toDo => {
            if(toDo.id === id) {
                toDo.isComplete = !toDo.isComplete
            }
            return toDo;
        })
        setToDoList(updatedToDos)
    }

    return (
    <div className="todo-app">
        <h1>What's your plan for May?</h1>
        <ToDoForm onSubmit={addToDoList}/>
        <ToDo ToDoList = {toDoList} completeToDo={completeToDo} 
        removeToDo={removeToDo} updateToDo={updateToDo}/>
    </div>
  )
}

export default ToDoList