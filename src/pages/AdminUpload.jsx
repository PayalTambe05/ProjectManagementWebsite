import React, { useState } from "react";
import axios from "axios";

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [projectType, setProjectType] = useState(""); // mini or final

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !department || !year || !projectType) {
      alert("Please fill in all fields and upload a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("projectType", projectType);

    try {
      const response = await axios.post("http://localhost:8080/api/projects/upload", formData);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e1c] text-white flex items-center justify-center p-6">
      <div className="bg-[#12162e] p-8 rounded-2xl shadow-md w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Admin CSV Upload</h2>

        {/* Year Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Enter Year</label>
          <input
            type="text"
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
      </div>
    </div>
  );
};

export default AdminUpload;
