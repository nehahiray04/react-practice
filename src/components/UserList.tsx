import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import type { User } from '../models/User';
import UserDetail from '../components/UserDetail';
import UserTable from '../components/UserTable'; // ✅ Import UserTable

const UserList: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

  return (
    <div className="relative max-w-4xl mx-auto p-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 text-center">User Directory</h1>

      {/* Search Input */}
      <input
        type="text"
        className="mb-4 p-2 w-full border rounded"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Conditional Rendering */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <UserTable users={filteredUsers} /> // ✅ Use UserTable here
      )}

      {/* User Detail Popup */}
      <UserDetail />
    </div>
  );
};

export default UserList;
