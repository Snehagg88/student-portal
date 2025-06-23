import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Fetch data once
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  // Apply search and sort together
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'website') {
        return a.website.localeCompare(b.website);
      }
      return 0;
    });

    setFilteredUsers(sorted);
  }, [search, sortBy, users]);

  if (loading) return <p className="p-4">Loading users...</p>;
  if (error) return <p className="text-red-600 p-4">{error}</p>;

  return (
    <div className="p-4 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* Search + Sort Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-full md:w-1/2 dark:bg-gray-800"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded dark:bg-gray-800"
        >
          <option value="name">Sort by Name</option>
          <option value="website">Sort by Website</option>
        </select>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="bg-white shadow-lg hover:shadow-2xl p-4 rounded border dark:bg-gray-800 dark:text-white transition transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>Email: <a href={`mailto:${user.email}`} className="text-blue-600 dark:text-blue-400">{user.email}</a></p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400">{user.website}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
