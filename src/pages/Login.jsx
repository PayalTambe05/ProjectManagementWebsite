import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
        role,
      });

      alert("Login successful!");

      // Save user info to localStorage if needed
      localStorage.setItem("user", JSON.stringify(response.data));

      // Route based on role
      if (role === "admin") navigate("/admin");
      else navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials or role.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e1c] flex justify-center items-center text-white">
      <div className="bg-[#12162e] p-8 rounded-lg w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Login</h2>

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
          className="w-full mb-6 p-2 bg-[#1d223c] rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Login as Student</option>
          <option value="admin">Login as Admin</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
