import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const SplashScreen: React.FC = () => {
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      backgroundColor: '#e46400',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default SplashScreen;
