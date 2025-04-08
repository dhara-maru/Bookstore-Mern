// ViewUsers.jsx
import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    fetch("https://bookstore-mern-backend-1q16.onrender.com/users/all-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-4 py-2 border">{user._id}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
