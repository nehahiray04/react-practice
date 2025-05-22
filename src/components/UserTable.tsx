import React from 'react';
import type { User } from '../models/User';
import { useUserContext } from '../context/UserContext';

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const { dispatch } = useUserContext();

  return (
    <div className="overflow-x-auto shadow rounded-lg border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 border-r border-gray-300">Name</th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 border-r border-gray-300">Email</th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Company</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => dispatch({ type: 'SELECT_USER', payload: user })}
              className="hover:bg-gray-50 cursor-pointer transition duration-150"
            >
              <td className="px-6 py-4 border-r border-gray-200 text-sm text-gray-800">{user.name}</td>
              <td className="px-6 py-4 border-r border-gray-200 text-sm text-blue-600">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
