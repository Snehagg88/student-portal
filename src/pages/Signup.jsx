import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('All fields are required');
      return;
    }
    signup(name, email, password);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-2 border rounded pr-10 dark:bg-gray-800 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-2 cursor-pointer text-sm"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? '🙈' : '👁️'}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
