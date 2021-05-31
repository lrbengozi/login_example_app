import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

type UserData = {
  name: string;
  email: string;
};

type AuthContextData = {
  signed: boolean;
  user: UserData | null;
  loading: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
};

const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<UserData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@loginexample:user');
      const storageToken = await AsyncStorage.getItem('@loginexample:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);
    setUser(response.user);

    await AsyncStorage.setItem(
      '@loginexample:user',
      JSON.stringify(response.user),
    );
    await AsyncStorage.setItem('@loginexample:token', response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
