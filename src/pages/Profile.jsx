// src/pages/Profile.jsx
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <h2 className="text-2xl font-bold">Please login to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-md mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">👤 Profile</h2>
        <p className="text-lg mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-sm mt-6 italic">This is your personal profile page.</p>
      </div>
    </div>
  );
}
