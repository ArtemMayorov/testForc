import React from "react";
import Task from "../Task/Task";



export default function TaskList ({totdoList, editListItem,delListItem}) {
    console.log("TaskList ->",totdoList)



    return (
    <ul  className="todo-list">     
        {totdoList.map((elem) => {
            return (      
                <Task 
                key = {elem.id}  
                totdoList = {totdoList}                                   
                elementTotdoList = {elem}
                editListItem={editListItem}
                delListItem ={delListItem}/>
            )
        })}
    </ul>  
 

         
    )
}