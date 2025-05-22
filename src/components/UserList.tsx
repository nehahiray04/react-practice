import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import type { User } from '../models/User';
import UserDetail from '../components/UserDetail'; // ⬅️ import here

const UserList: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_USERS', payload: data });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, [dispatch]);

  const filteredUsers = state.users.filter((u: User) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (user: User) => {
    dispatch({ type: 'SELECT_USER', payload: user });
  };

  return (
    <div className="relative max-w-4xl mx-auto p-4">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-4 text-center">User Directory</h1>
      <input
        type="text"
        className="mb-4 p-2 w-full border rounded"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto max-h-[400px] overflow-y-auto border border-gray-300 rounded">
        <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Company</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user: User) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleRowClick(user)}
                >
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔥 Show popup here using the extracted component */}
      <UserDetail />
    </div>
  );
};

export default UserList;
