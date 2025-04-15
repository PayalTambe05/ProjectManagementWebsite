// src/pages/StudentProjectUpload.jsx
import React, { useState } from "react";
import axios from "axios";

function StudentProjectUpload() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    projectName: "",
    domain: "",
    synopsis: "",
    githubLink: "",
    department: "",
    projectType: "",
    image: null,
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "document") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:8080/student-projects/upload", data);
      alert("✅ Project uploaded successfully!");
    } catch (err) {
      alert("❌ Upload failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0e1c] via-[#141e30] to-[#243b55] flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#1b1f3a] border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Upload Your Project</h2>
        <div className="h-[500px] overflow-y-auto pr-2 custom-scroll">
          <div className="grid grid-cols-1 gap-5">
            {[
              { name: "studentName", label: "Student Name" },
              { name: "email", label: "Email" },
              { name: "projectName", label: "Project Name" },
              { name: "domain", label: "Domain" },
              { name: "synopsis", label: "Synopsis" },
              { name: "githubLink", label: "GitHub Link" },
              { name: "department", label: "Department" },
              
            ].map(({ name, label }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label}`}
                  className="w-full px-4 py-2 rounded-lg bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Project Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Project Document (.pdf, .docx)
              </label>
              <input
                type="file"
                name="document"
                accept=".pdf,.docx"
                onChange={handleChange}
                className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Submit Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProjectUpload;
