import React from "react";


export default function Task ({ elementTotdoList, editListItem, delListItem}) {

    function editTaskBtn(e) {
        e.target.value = 'test'
        editListItem(elementTotdoList)
    }


    function editTaskDone (e) {
        if (e.key === 'Enter') {
            editListItem(elementTotdoList, e.target.value)  
        }
    }

    function delItem() {
        delListItem(elementTotdoList)
    }

    function taskDone(e) {
        console.log(e);
    }

    return(
        <li key={elementTotdoList.id} className={elementTotdoList.status}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={taskDone}></input>
                <label>
                    <span className="description">{elementTotdoList.title}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit" onClick={editTaskBtn}></button>
                <button className="icon icon-destroy" onClick={delItem}></button>
            </div>

            {elementTotdoList.status === "editing"? 
                <input type="text" onKeyUp={editTaskDone} className="edit" ></input> : ''}
        </li>

    )
}
