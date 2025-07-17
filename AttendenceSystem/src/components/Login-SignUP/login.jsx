import React, { useState } from "react";
// import { setIsLogin } from "../../helper";

function Login() {
  const [role, setRole] = useState("student");

  return (
    <div className="flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
          Login
        </h2>

        <label className="block mb-2 font-medium text-gray-700">
          Select Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        {role === "faculty" ? (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded-md"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enrollment Number"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded-md"
            />
          </>
        )}

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
