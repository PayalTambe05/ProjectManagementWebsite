// src/pages/AdminDashboard.js
import React, { useState } from "react";
import AdminUpload from "./AdminUpload";
import {
  Upload,
  Users,
  FileText,
  UserCheck,
  CheckCircle,
  BarChart2,
} from "lucide-react";

function AdminDashboard() {
  const [showUpload, setShowUpload] = useState(false);
  const toggleUploadForm = () => setShowUpload(!showUpload);

  const sections = [
    {
      title: "Manage Students",
      description: "View, edit or remove student records.",
      icon: <Users className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Manage Projects",
      description: "Approve, edit or delete project entries.",
      icon: <FileText className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Faculty Details",
      description: "Add or assign faculty to projects.",
      icon: <UserCheck className="w-6 h-6 text-yellow-600" />,
    },
    {
      title: "Pending Approvals",
      description: "Review newly submitted projects.",
      icon: <CheckCircle className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Analytics",
      description: "Visual insights on submissions and participation.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100 pt-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10 drop-shadow-md">
          Admin Dashboard
        </h1>

        {/* Upload Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={toggleUploadForm}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full shadow-md transition-all"
          >
            <Upload className="w-5 h-5" />
            {showUpload ? "Hide Upload Form" : "Upload Project CSV"}
          </button>
        </div>

        {/* Upload Form */}
        {showUpload && (
          <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow-md border border-gray-200 mb-10 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Upload CSV</h2>
            <AdminUpload />
          </div>
        )}

        {/* Sections Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-indigo-50 rounded-full group-hover:rotate-12 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
