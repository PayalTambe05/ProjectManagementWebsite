import React, { useState } from "react";
import axios from "axios";

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [projectType, setProjectType] = useState(""); // mini or final
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !department || !year || !projectType) {
      setError("Please fill in all fields and upload a CSV file.");
      setMessage("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("type", projectType);

    try {
      const response = await axios.post(
        "http://localhost:8080/projects/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data || "CSV Uploaded Successfully!");
      setError("");
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e1c] text-white flex items-center justify-center p-6">
      <div className="bg-[#12162e] p-8 rounded-2xl shadow-md w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">
          Admin CSV Upload
        </h2>

        {/* Year Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Enter Year</label>
          <input
            type="number"
            min="2000"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2023"
            className="w-full p-2 rounded bg-[#1d223c] text-white focus:outline-none"
          />
        </div>

        {/* Department Select */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Select Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 rounded bg-[#1d223c] text-white"
          >
            <option value="">--Choose--</option>
            <option value="COMP">COMP</option>
            <option value="IT">IT</option>
            <option value="ENTC">ENTC</option>
            <option value="AIDS">AIDS</option>
            <option value="ECE">ECE</option>
          </select>
        </div>

        {/* Project Type */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-2 rounded bg-[#1d223c] text-white"
          >
            <option value="">--Choose--</option>
            <option value="mini">Mini Project</option>
            <option value="final">Final Year Project</option>
          </select>
        </div>

        {/* CSV File Upload */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Upload CSV File</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="w-full text-white"
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded font-semibold transition"
        >
          Upload
        </button>

        {/* Message Display */}
        {message && (
          <p className="mt-4 text-green-400 text-center font-medium">{message}</p>
        )}
        {error && (
          <p className="mt-4 text-red-400 text-center font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AdminUpload;
