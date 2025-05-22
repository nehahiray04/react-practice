import React from 'react';
import UserList from './components/UserList';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
};

export default App;