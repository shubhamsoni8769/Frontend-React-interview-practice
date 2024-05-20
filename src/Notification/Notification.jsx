import { useEffect, useRef, useState } from "react";
import { useNotification } from "./context/NotificationProvider";

const Notification = ({ type, message, id }) => {
  const [barWidth, setBarWidth] = useState(0);
  const dispatch = useNotification();
  const timerId = useRef(null);
  const startTimer = () => {
    timerId.current = setInterval(() => {
      setBarWidth((prevWidth) => {
        if (prevWidth < 100) {
          return prevWidth + 1;
        } else {
          clearInterval(timerId);
          handleCloseNotification();
          return prevWidth;
        }
      });
    }, 50);
  };

  const handleCloseNotification = () => {
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id,
      });
    }, 400);
  };

  const pauseTimer = () => {
    clearInterval(timerId.current);
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={pauseTimer}
      onMouseLeave={handleMouseLeave}
      className={`notification-item ${
        type === "SUCCESS" ? "success" : "error"
      }`}
    >
      <span>{message}</span>
      <div className="bar" style={{ width: `${barWidth}%` }}></div>
    </div>
  );
};

export default Notification;
