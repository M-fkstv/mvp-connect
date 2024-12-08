import { createContext, useContext, useState } from 'react';

export const NotificationContext = createContext('');

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState('');

  const addNotification = (message) => {
    setNotification(message);
    // setTimeout(() => {
    //   setNotification('');
    // }, 5000); // Уведомление исчезает через 5 секунд
  };

  return (
    <NotificationContext.Provider value={{ notification, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
