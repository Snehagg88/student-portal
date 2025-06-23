import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState({
    email: 'student@example.com',
    password: '123456',
    name: 'Sneha Garg',
  });

  const navigate = useNavigate();

  const login = (email, password) => {
    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      setUser({ name: registeredUser.name, email });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000); // Success animation delay
      return { success: true };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  };

  const signup = (name, email, password) => {
    setRegisteredUser({ name, email, password });
    alert('Signup successful! Please login.');
    navigate('/login');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
