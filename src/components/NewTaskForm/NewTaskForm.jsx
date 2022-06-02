import React from "react";

export default function NewTaskForm({totdoList, setTodoList, creatTodoList}){
    function addTask (e) {
        if (e.key === 'Enter') {
            setTodoList([...totdoList, creatTodoList (e.target.value)])
            e.target.value = ''   
            console.log('Header ->',totdoList); 
        }
    }
    return (
        <header className="header">

            <h1>todos</h1>

            <input className="new-todo" 
            onKeyUp={addTask}
            placeholder="What needs to be done?"
            autoFocus/>
        </header>

    )
}