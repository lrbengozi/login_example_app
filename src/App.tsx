import React from 'react';
import {Text} from 'react-native';

import {AuthProvider} from './contexts/auth.context';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
