import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
        role,
      });

      const { user, redirect } = response.data;

      if (!user || !redirect) {
        throw new Error("Invalid server response.");
      }

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");

      // Navigate then reload to refresh navbar state
      navigate(redirect);
      setTimeout(() => window.location.reload(), 100); // slight delay to ensure smooth redirect
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed. Please check email, password, and role.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e1c] flex justify-center items-center text-white">
      <div className="bg-[#12162e] p-8 rounded-lg w-full max-w-md border border-white/10 shadow-lg">
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
          className={`w-full py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
