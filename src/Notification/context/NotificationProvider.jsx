import { useContext, useReducer } from "react";
import Notification from "../Notification";
import { createContext } from "react";

export const NotificationContext = createContext([]);

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, action.payload];
      case "REMOVE_NOTIFICATION":
        return state.filter((e) => e.id !== action.id);
      default:
        return state;
    }
  }, []);
  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-wrapper">
        {state.map((notification) => {
          return <Notification key={notification.id} {...notification} />;
        })}
      </div>

      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "NotificationContext must be used within a NotificationProvider"
    );
  }

  return context;
};

export default NotificationProvider;
