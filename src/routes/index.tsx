import React from 'react';
import {useAuth} from '../contexts/auth.context';

import {Text} from 'react-native';

const Routes: React.FC = () => {
  const {signed} = useAuth();

  return <Text>Is logged in? {JSON.stringify(signed)}</Text>;
};

export default Routes;
