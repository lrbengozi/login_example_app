import React from 'react';
import {Text} from 'react-native';

import {useAuth} from '../contexts/auth.context';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import SplashScreen from '../components/SplashScreen';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
