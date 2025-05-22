import React, { useState } from 'react';
import type { User } from '../models/User';
import { useUserContext } from '../context/UserContext';
import { Eye } from 'lucide-react'; // 👁️ Eye icon

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const { dispatch } = useUserContext();

  const [sortKey, setSortKey] = useState<keyof User | 'company'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof User | 'company') => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const valA = sortKey === 'company' ? a.company.name.toLowerCase() : String(a[sortKey]).toLowerCase();
    const valB = sortKey === 'company' ? b.company.name.toLowerCase() : String(b[sortKey]).toLowerCase();

    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const renderSortIcon = (key: keyof User | 'company') => {
    if (key !== sortKey) return null;
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="overflow-x-auto max-h-[400px] overflow-y-auto shadow rounded-lg border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-r border-gray-300">No.</th>
            <th
              className="cursor-pointer text-left px-6 py-3 text-sm font-semibold text-gray-700 border-r border-gray-300"
              onClick={() => handleSort('name')}
            >
              Name {renderSortIcon('name')}
            </th>
            <th
              className="cursor-pointer text-left px-6 py-3 text-sm font-semibold text-gray-700 border-r border-gray-300"
              onClick={() => handleSort('email')}
            >
              Email {renderSortIcon('email')}
            </th>
            <th
              className="cursor-pointer text-left px-6 py-3 text-sm font-semibold text-gray-700"
              onClick={() => handleSort('company')}
            >
              Company {renderSortIcon('company')}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedUsers.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-4 border-r border-gray-200 text-sm text-gray-800">{index + 1}</td>
              <td className="px-6 py-4 border-r border-gray-200 text-sm text-gray-800 flex items-center gap-2">
                <button
                  onClick={() => dispatch({ type: 'SELECT_USER', payload: user })}
                  className="p-1 text-blue-600 hover:text-blue-800"
                  title="View Details"
                >
                  <Eye size={16} />
                </button>
                <span>{user.name}</span>
              </td>
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
