import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Quiz from '../screens/Quiz';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Quiz" component={Quiz} />
  </App.Navigator>
);

export default AppRoutes;
