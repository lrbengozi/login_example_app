import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {useAuth} from '../../contexts/auth.context';

const styles = StyleSheet.create({
  boxCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e46400',
  },
});

const MainApp: React.FC = () => {
  const {user} = useAuth();
  return (
    <View style={styles.boxCenter}>
      <Text style={styles.title}>Olá, {user?.name}</Text>
    </View>
  );
};

export default MainApp;
