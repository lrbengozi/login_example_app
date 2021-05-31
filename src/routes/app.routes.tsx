import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainApp from '../pages/MainApp';
import {useAuth} from '../contexts/auth.context';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const {signOut} = useAuth();
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerRight: () => (
            <Button onPress={() => signOut()} title="LOUGOUT" color="#111" />
          ),
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
