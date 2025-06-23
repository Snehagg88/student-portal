import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to the HTML root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-10 dark:bg-gray-900 shadow-md">
      {/* Logo + App Name */}
      <div className="flex items-center space-x-2">
        <img src="/logo1.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="font-bold text-lg">Student Portal</span>
      </div>

      {/* Navigation Links + Toggle + Auth Buttons */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full transition duration-300 hover:scale-105 shadow"
        >
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Navigation */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline font-semibold' : 'hover:underline'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? 'underline font-semibold' : 'hover:underline'
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'underline font-semibold' : 'hover:underline'
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold underline' : 'hover:text-yellow-300'
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive ? 'underline font-semibold' : 'hover:underline'
          }
        >
          Schedule
        </NavLink>

        {/* Auth Buttons */}
        {!user ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <span className="font-semibold">{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
