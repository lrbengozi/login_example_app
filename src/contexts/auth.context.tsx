import React, {createContext, useContext, useState} from 'react';

type UserData = {
  name: string;
  email: string;
};

type AuthContextData = {
  signed: boolean;
  user: UserData | null;
  loading: boolean;
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  return (
    <AuthContext.Provider value={{signed: !!user, user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
