import React from 'react';
import Navbar from './Navbar';

export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <marquee className="mt-3" direction="left">Welcome to UpskillMafia where you can learn different courses online for free. Choose from the different courses below.</marquee>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Courses in Progress</h2>
            <ul>
              <li className="flex items-center mb-2">
                <span className="mr-2 text-green-500">&#x25cf;</span>
                MERN Stack
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">&#x25cf;</span>
                UI/UX Design
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Courses Not Started</h2>
            <ul>
              <li><span className="mr-2 text-yellow-500">&#x25cf;</span>Data Science</li>
              <li><span className="mr-2 text-yellow-500">&#x25cf;</span>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View All Courses</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Hackathon</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Internships</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Scoreboard</button>
        </div>
        <div className="mt-8 text-center">
          <p>MERN Stack Score: <span className="font-semibold text-green-500">1800 exp</span></p>
          <p>UI/UX Score: <span className="font-semibold text-green-500">100 exp</span></p>
        </div>
      </div>
    </div>
  );
}
