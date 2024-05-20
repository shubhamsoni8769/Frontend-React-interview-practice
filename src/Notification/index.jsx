import NotificationProvider from "./context/NotificationProvider"
import AddNotification from "./AddNotification";
import "./index.css"

const NotificationWrapper = () => {
    return (
        <NotificationProvider>
            <AddNotification />
        </NotificationProvider>
    )
}

export default NotificationWrapper