import React, {createContext, useContext, useState, ReactNode} from 'react';
import api from '../services/api';
import {useNavigationStackTyped} from '../hooks/navigation';

// type para definir o formato do usuário
type User = {
  name: string;
  email: string;
  id: string;
};

// type para definir o formato do contexto
type AuthContextUser = {
  user: User | null;
  signUp: (form: Form) => void;
  loadingAuth: boolean;
};

// type para definir o formato do provider
type AuthProviderProps = {
  children: ReactNode;
};

type Form = {
  name: string;
  email: string;
  password: string;
};

// createContext recebe um valor inicial que deve seguir o formato do AuthContextUser
export const AuthContext = createContext<AuthContextUser>({
  user: null,
  signUp: async (form: Form) => {},
  loadingAuth: false,
});

// hook para facilitar o uso do contexto
export const useAuth = () => useContext(AuthContext);

// componente que irá prover o contexto para os componentes filhos
export default function AuthProvider({children}: AuthProviderProps) {
  const navigation = useNavigationStackTyped();
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signUp(form: Form) {
    setLoadingAuth(true);

    if (form.email === '' || form.password === '' || !form.name) {
      setLoadingAuth(false);
      return;
    }

    try {
      const response = await api.post('/users', form);

      navigation.goBack();
    } catch (error) {
      console.log('Aconteceu algum erro', error);
    } finally {
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{user, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
}
