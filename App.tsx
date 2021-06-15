import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './src/routes/tab.routes';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar backgroundColor="#1C2833" />
    </NavigationContainer>
  );
};

export default App;
