import React from 'react';
import {Text} from 'react-native';

import {useAuth} from '../contexts/auth.context';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const {signed} = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
