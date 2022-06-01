import React from "react";
import { useState } from 'react';

import NewTaskForm from "../NewTaskForm/NewTaskForm"
import Footer from "../Footer/Footer"
import TaskList from "../TaskList/TaskList"
import TasksFilter from "../TasksFilter/TasksFilter"




const App = () => {

    function creatTodoList (title, status = 'view') {
        let randNum = Math.floor( Math.random()*1000)
        return ({
            id: randNum,
            title: title,
            status: status,
        })
     }

    function editListItem(elem, changeText = false) {
        const idx = totdoList.findIndex((element) =>{
            return element.id ===  elem.id
        })
        const result = {
            id: elem.id, 
            title: !changeText ? elem.title : changeText, 
            status: elem.status === 'view'? 'editing': 'view'
        }
        setTodoList([
            ...totdoList.slice(0, idx),
            result,
            ...totdoList.slice(idx+1)
        ])
     }

     function delListItem(elem){
        const idx = totdoList.findIndex((element) =>{
            return element.id ===  elem.id
        })

        setTodoList([
            ...totdoList.slice(0, idx),
            ...totdoList.slice(idx+1)
        ])
     }
     
     const [totdoList, setTodoList] = useState([
        creatTodoList ('1', 'editing'),
        creatTodoList ('2'),
        creatTodoList ('3'),
        creatTodoList ('4'),
        creatTodoList ('5'),
        creatTodoList ('6'),
     ])

    return (
        <section className="todoapp">
            <NewTaskForm 
            totdoList = {totdoList}
            setTodoList = {setTodoList}
            creatTodoList = {creatTodoList}/>

            <section className="main">
            <TaskList 
            totdoList = {totdoList}
            setTodoList = {setTodoList}
            editListItem = {editListItem}
            delListItem = {delListItem}/>
            </section>
        </section>
    )
}

export default App