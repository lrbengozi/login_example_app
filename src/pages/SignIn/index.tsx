import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {useAuth} from '../../contexts/auth.context';

const styles = StyleSheet.create({
  boxCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#e46400',
  },
  loginForm: {
    padding: 10,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    margin: 2.5,
  },
  loginButton: {
    alignItems: 'center',
    margin: 2.5,
    padding: 10,
    backgroundColor: '#e46400',
    borderRadius: 5,
  },
});

const SignIn: React.FC = () => {
  const {signIn} = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doLogin = () => {
    signIn(email, password);
  };

  return (
    <View style={styles.boxCenter}>
      <Text style={styles.title}>LoginAPP</Text>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="E-mail"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={doLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
