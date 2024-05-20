import { useEffect, useState, useContext } from "react";
import { NotificationContext } from "./context/NotificationProvider";
import { useNotification } from "./context/NotificationProvider";

const Notification = (props) => {
    const { type, message, title, id } = props;
    const [barWidth, setBarWidth] = useState(0);
    const dispatch = useNotification();

    const startTimer = () => {
        const timerId = setInterval(() => {
            setBarWidth((prevWidth) => {
                if (prevWidth < 100) {
                    return prevWidth + 1
                } else {
                    clearInterval(timerId);
                    handleCloseNotification()
                    return prevWidth

                }
            })
        }, 20)
    }

    const handleCloseNotification = () => {
        console.log("calling handleCloseNotification");
        setTimeout(() => {
            dispatch({
                type: "REMOVE_NOTIFICATION",
                id
            });
        }, 400);

    }

    const pauseTimer = () => {

    }

    const handleMouseLeave = () => {

    }

    useEffect(() => {
        startTimer()
    }, [])

    return (
        <div
            onMouseEnter={pauseTimer}
            onMouseLeave={handleMouseLeave}
            className={`notification-item ${type === "SUCCESS" ? 'success' : 'error'}`}
        >
            <span>{message}</span>
            <div className="bar" style={{ width: `${barWidth}%` }}></div>


        </div>
    )



}

export default Notification