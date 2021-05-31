import React from 'react';
import {Text} from 'react-native';

import {AuthProvider} from './contexts/auth.context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
