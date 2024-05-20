import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useNotification } from "./context/NotificationProvider";

const AddNotification = () => {
  const [val, setVal] = useState("");
  const dispatch = useNotification();

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const addNotification = (type) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: faker.person.fullName().toLowerCase(),
        type,
        message: val,
        title: "Successful Request",
      },
    });
  };
  return (
    <div className="input-wrapper">
      <input
        placeholder="Add notification..."
        onChange={handleChange}
        value={val}
        style={{ width: "50%" }}
        aria-label="enter notification message"
      />
      <button onClick={() => addNotification("SUCCESS")}>Success</button>
      <button onClick={() => addNotification("ERROR")}>Error</button>
    </div>
  );
};

export default AddNotification;
