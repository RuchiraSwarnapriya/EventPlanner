import {showMessage} from 'react-native-flash-message';

const showNotification = (message: any) => {
  showMessage({
    message: message.notification?.title || 'New Notification',
    description: message.notification?.body || '',
    type: 'default',
    duration: 3000,
    position: 'top',
  });
};

export default showNotification;
