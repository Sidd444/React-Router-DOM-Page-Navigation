import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="bg-black min-h-screen text-white ml-8">
      <marquee className="mt-3" direction="left">Welcome to UpskillMafia where you can learn different courses online for free. Choose from the different courses below.</marquee>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to UpskillMafia
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Learn MERN Stack</h2>
            <p className="text-gray-100 mb-4">
              Become proficient in MongoDB, Express.js, React.js, and Node.js -
              the four fundamental technologies behind modern web development.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Learning
            </button>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Master UI/UX Design</h2>
            <p className="text-gray-100 mb-4">
              Learn the principles of User Interface (UI) and User Experience
              (UX) design to create intuitive and visually appealing web
              applications.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Learning
            </button>
          </div>
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              Data Science
            </h2>
            <p className="text-gray-100 mb-4">
              Dive into the world of data science and learn how to extract
              insights from data using Python, machine learning algorithms, and
              statistical techniques.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Learning
            </button>
          </div>

          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              Artificial Intelligence
            </h2>
            <p className="text-gray-100 mb-4">
              Explore the fascinating field of artificial intelligence and
              understand how to build intelligent systems that can perform tasks
              requiring human-like intelligence.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Learning
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
