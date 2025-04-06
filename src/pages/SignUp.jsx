import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [adminKey, setAdminKey] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
        role,
        adminKey: role === "admin" ? adminKey : null,
      });
  
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response && error.response.status === 401) {
        alert("Invalid admin key!");
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-[#0b0e1c] flex justify-center items-center text-white">
      <div className="bg-[#12162e] p-8 rounded-lg w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Signup</h2>

        <input
          className="w-full mb-4 p-2 bg-[#1d223c] rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 bg-[#1d223c] rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full mb-4 p-2 bg-[#1d223c] rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Signup as Student</option>
          <option value="admin">Signup as Admin</option>
        </select>

        {role === "admin" && (
          <input
            className="w-full mb-4 p-2 bg-[#1d223c] rounded"
            type="text"
            placeholder="Enter Admin Secret Key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
          />
        )}

        <button
          onClick={handleSignup}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
