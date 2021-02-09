import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { usePermissions } from 'expo-permissions';

import AppProvider from './hooks/index';
import Routes from './routes';

const App: React.FC = () => {
  const [permission, askForPermission] = usePermissions('notifications');

  useEffect(() => {
    if (!permission || permission.status !== 'granted') {
      askForPermission();
    }
  }, [permission]);

  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
