import React from 'react';
import type { User } from '../models/User';
import { useUserContext } from '../context/UserContext';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  const { dispatch } = useUserContext();
  return (
    <div
      className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
      onClick={() => dispatch({ type: 'SELECT_USER', payload: user })}
    >
      <h3 className="font-bold">{user.name}</h3>
      <p>{user.email}</p>
      <p className="text-sm text-gray-500">{user.company.name}</p>
    </div>
  );
};

export default UserCard;