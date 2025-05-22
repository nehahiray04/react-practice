// components/UserDetail.tsx
import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserDetail: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const user = state.selectedUser;
  if (!user) return null;

  return (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg">
      <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-6 relative">
        <button
          onClick={() => dispatch({ type: 'SELECT_USER', payload: null })}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetail;
