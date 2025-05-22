import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { User } from '../models/User';

interface State {
  users: User[];
  selectedUser: User | null;
}

const initialState: State = {
  users: [],
  selectedUser: null,
};

type Action =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'SELECT_USER'; payload: User | null };

function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
}

const UserContext = createContext<any>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}