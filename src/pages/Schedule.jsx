import React from 'react';

const scheduleData = [
  { day: 'Monday', subject: 'COA', time: '9:00 AM - 10:00 AM' },
  { day: 'Monday', subject: 'DAA', time: '11:00 AM - 12:00 PM' },
  { day: 'Monday', subject: 'OM', time: '2:00 PM - 3:00 PM' },
  { day: 'Tuesday', subject: 'OOPS', time: '1:00 PM - 2:00 PM' },
  { day: 'Tuesday', subject: 'DM', time: '12:00 PM - 1:00 PM' },
  { day: 'Wednesday', subject: 'DAA', time: '9:00 AM - 10:00 AM' },
  { day: 'Wednesday', subject: 'OM', time: '11:00 AM - 12:00 PM' },
  { day: 'Thursday', subject: 'COA', time: '10:00 AM - 11:00 AM' },
  { day: 'Thursday', subject: 'OOPS', time: '2:00 PM - 3:00 PM' },
  { day: 'Friday', subject: 'OS', time: '9:00 AM - 10:00 AM' },
  { day: 'Friday', subject: 'DM', time: '11:00 AM - 12:00 PM' },
];

// Color for each weekday
const dayColors = {
  Monday: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  Tuesday: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Wednesday: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  Thursday: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  Friday: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function Schedule() {
  return (
    <div className="p-6 min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">📅 Weekly Class Schedule</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Mon-Wed */}
        <div className="space-y-6">
          {days.slice(0, 3).map((day) => {
            const entries = scheduleData.filter((entry) => entry.day === day);
            return (
              <div key={day}>
                <h2 className={`text-xl font-semibold mb-2 px-4 py-2 rounded ${dayColors[day]}`}>
                  {day}
                </h2>
                <table className="w-full border dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800 text-sm text-black dark:text-white">
                      <th className="py-2 px-4">Time</th>
                      <th className="py-2 px-4">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry, i) => (
                      <tr key={i} className="border-t dark:border-gray-700 text-sm">
                        <td className="py-2 px-4 text-center">{entry.time}</td>
                        <td className="py-2 px-4 text-center">{entry.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>

        {/* Right: Thu-Fri */}
        <div className="space-y-6">
          {days.slice(3).map((day) => {
            const entries = scheduleData.filter((entry) => entry.day === day);
            return (
              <div key={day}>
                <h2 className={`text-xl font-semibold mb-2 px-4 py-2 rounded ${dayColors[day]}`}>
                  {day}
                </h2>
                <table className="w-full border dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800 text-sm text-black dark:text-white">
                      <th className="py-2 px-4">Time</th>
                      <th className="py-2 px-4">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry, i) => (
                      <tr key={i} className="border-t dark:border-gray-700 text-sm">
                        <td className="py-2 px-4 text-center">{entry.time}</td>
                        <td className="py-2 px-4 text-center">{entry.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
