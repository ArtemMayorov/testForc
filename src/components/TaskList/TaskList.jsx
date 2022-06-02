import React from "react";
import Task from "../Task/Task";

export default function TaskList({ totdoList, setTodoList, filter }) {
  /* Меняем/Редактируем/Делаем задачу выполненной в поле Task */
  function editListItem(elem, changeText = false, statusList = "view") {
    const idx = totdoList.findIndex((element) => {
      return element.id === elem.id;
    });
    let result = {};
    switch (statusList) {
      case "completed":
        console.log(elem);
        result = {
          ...elem,
          status: !elem.stateList ? "completed" : "view",
          stateList: !elem.stateList ? true : false,
        };
        break;
      case "view":
        result = {
          ...elem,
          status: "editing",
          stateList: !elem.stateList ? false : true,
        };
        break;
      case "editing":
        result = {
          ...elem,
          title: changeText.target.value,
          status: !elem.stateList ? "view" : "completed",
          stateList: elem.stateList ? true : false,
        };
        break;

      default:
        break;
    }

    setTodoList([
      ...totdoList.slice(0, idx),
      result,
      ...totdoList.slice(idx + 1),
    ]);
  }

  /* Удаляем поле в Task*/
  function delListItem(elem) {
    const idx = totdoList.findIndex((element) => {
      return element.id === elem.id;
    });

    setTodoList([...totdoList.slice(0, idx), ...totdoList.slice(idx + 1)]);
  }

  return (
    <ul className="todo-list">
      {totdoList.map((elem) => {
        if (filter.status === "all") {
          return (
            <Task
              key={elem.id}
              totdoList={totdoList}
              elementTotdoList={elem}
              editListItem={editListItem}
              delListItem={delListItem}
            />
          );
        }
        if (!elem.stateList && filter.status === "active") {
          return (
            <Task
              key={elem.id}
              totdoList={totdoList}
              elementTotdoList={elem}
              editListItem={editListItem}
              delListItem={delListItem}
            />
          );
        }
        if (elem.stateList && filter.status === "completed") {
          return (
            <Task
              key={elem.id}
              totdoList={totdoList}
              elementTotdoList={elem}
              editListItem={editListItem}
              delListItem={delListItem}
            />
          );
        }
      })}
      {/* {totdoList.map((elem) => {
        return (
          <Task
            key={elem.id}
            totdoList={totdoList}
            elementTotdoList={elem}
            editListItem={editListItem}
            delListItem={delListItem}
          />
        );
      })} */}
    </ul>
  );
}
