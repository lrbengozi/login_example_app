import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainApp from '../pages/MainApp';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="MainApp" component={MainApp} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
