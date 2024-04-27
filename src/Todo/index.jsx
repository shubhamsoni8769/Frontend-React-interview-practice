import { useState } from "react";
import { Search } from "./Search";
import { TodoItems } from "./TodoItems";

export const ToDo = () => {
  const [todoItems, setToDoItem] = useState([]);
  const addItem = (item) => {
    console.log("add item called");
    setToDoItem((prevItem) => {
      return [
        ...prevItem,
        {
          id: Date.now(),
          label: item,
          completed: false,
        },
      ];
    });
  };

  const deleteItem = (deletedItem) => {
    const updatedItem = todoItems.filter((item) => {
      return item.id !== deletedItem.id;
    });
    setToDoItem(updatedItem);
  };

  const updateItem = (id, text) => {
    const updatedArr = todoItems.map((item) => {
      if (item.id === id) {
        item.label = text;
      }
      return item;
    });
    setToDoItem(updatedArr);
  };
  const updatestatus = (id) => {
    const updatedArr = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setToDoItem(updatedArr);
  };

  return (
    <>
    <div style={{width:"100%", height:"100vh",margin:"0 auto", maxWidth: "300px"}}>
      <h1>TODO</h1>
      <div className="search_container">
        <Search addItem={addItem} />
      </div>
      <div>
        {todoItems?.length > 0 &&
          todoItems.map((item, index) => {
            return (
              <TodoItems
                key={item.id}
                item={item}
                updatestatus={updatestatus}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            );
          })}
      </div>
      </div>
    </>
  );
};
