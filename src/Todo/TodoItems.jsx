import React, { useState } from "react";
import styles from "./Todo.module.css";

export const TodoItems = ({ item, deleteItem, updateItem, updatestatus }) => {
  const [isEdit, setisEdit] = useState(false);
  const [editText, setEditText] = useState(item.label);

  const handleDoubleClick = () => {
    setisEdit(true);
  };

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.circle} onClick={() => updatestatus(item.id)}>
          {item.completed ? <span>&#10003;</span> : ""}
        </div>
        <div
          className={item.completed ? styles.strike : ""}
          onDoubleClick={handleDoubleClick}
        >
          {isEdit ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={(e) => {
                  setisEdit(false);
                  updateItem(item.id, editText);
                }}
              />
            </>
          ) : (
            item.label
          )}
        </div>
        <div className={styles.closeIcon} onClick={() => deleteItem(item)}>
          X{" "}
        </div>
      </div>
    </div>
  );
};
