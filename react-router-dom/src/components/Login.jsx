import React from 'react'
import Navbar from './Navbar'

export default function Login() {
  return (
    <div >
    <Navbar />
    <marquee className="mt-2 text-white" direction="left">Welcome to UpskillMafia where you can learn different courses online for free. Choose from the different courses below.</marquee>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-white font-bold text-center mb-1">
          Welcome to UpskillMafia
        </h1>
        </div>
    <div id='login-in' className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        <form className="space-y-4">
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900"
                />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-36">
                Sign Up
            </button>
        </form>
        <div className="mt-4 text-sm text-gray-700 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
                Sign up
            </a>
            .
        </div>
        <div className="text-center mt-2 text-black">Or Log in using</div>
    </div>
    <div id='logo-2' className="flex justify-center">
        <img
            className="h-12 w-12 mr-2"
            src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png"
            alt="google-logo"
        />
        <img
            className="h-12 w-14 ml-3"
            src="https://th.bing.com/th/id/R.39a1d68aec01e3a9ce7c0ad7b9a9c6b2?rik=oQTpDpcTmfQpQg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffacebook-logo-png-image-2335-1403.png&ehk=A6gzMacsllFktQ3DwgKCwXCKBhdJNlpCydh%2bXl3VABQ%3d&risl=&pid=ImgRaw&r=0"
            alt="facebook-logo"
        />
    </div>

</div>
  )
}
