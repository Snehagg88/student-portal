export default function Home() {
  return (
    <div className="p-6 text-center min-h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-start">
      
      {/* Gradient Welcome Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-14 rounded-xl shadow-lg mb-10">
        <h1 className="text-4xl font-bold mb-2">🎓 Welcome to Student Portal</h1>
        <p className="text-lg">Manage your academic details in one place.</p>
      </div>

      {/* Feature Cards: 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 w-64 mx-auto">
          <h2 className="font-semibold text-xl">🔐 Secure Login</h2>
          <p className="text-sm mt-2">Login to access your personalized dashboard and stay updated.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 w-64 mx-auto">
          <h2 className="font-semibold text-xl">🧑‍🎓 Explore Users</h2>
          <p className="text-sm mt-2">Browse through user information with powerful filtering and sorting.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 w-64 mx-auto">
          <h2 className="font-semibold text-xl">📊 Dashboard</h2>
          <p className="text-sm mt-2">Visualize your academic journey with detailed semester-wise stats.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 w-64 mx-auto">
          <h2 className="font-semibold text-xl">📄 Download Report</h2>
          <p className="text-sm mt-2">Generate and download your semester-wise academic reports in PDF.</p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Students Say 💬</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="italic text-sm">
              “This portal has made it incredibly easy to track my academic progress and download reports. I love the clean design and dark mode!”
            </p>
            <p className="mt-4 font-semibold">— Surbhi, B.Tech CSE</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="italic text-sm">
              “A well-organized and student-friendly portal. The dashboard and schedule section are my favorite!”
            </p>
            <p className="mt-4 font-semibold">— Sunita, B.Tech IT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
