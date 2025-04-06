// src/pages/AdminDashboard.js
import React, { useState } from "react";
import AdminUpload from "./AdminUpload";

function AdminDashboard() {
  const [showUpload, setShowUpload] = useState(false);

  const toggleUploadForm = () => setShowUpload(!showUpload);

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">Admin Dashboard</h1>

      {/* CSV Upload Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <button
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
          onClick={toggleUploadForm}
        >
          {showUpload ? "Hide Upload Form" : "Upload Project CSV"}
        </button>

        {showUpload && (
          <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload CSV</h2>
            <AdminUpload />
          </div>
        )}
      </div>

      {/* Other Dashboard Sections */}
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Students Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Manage Students</h3>
          <p className="text-sm text-gray-600">View, edit or remove student records.</p>
          {/* You can add a button or table here later */}
        </div>

        {/* Project Management */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Manage Projects</h3>
          <p className="text-sm text-gray-600">Approve, edit or delete project entries.</p>
        </div>

        {/* Faculty Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Faculty Details</h3>
          <p className="text-sm text-gray-600">Add or assign faculty to projects.</p>
        </div>

        {/* Approvals */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Pending Approvals</h3>
          <p className="text-sm text-gray-600">Review and approve newly submitted projects.</p>
        </div>

        {/* Analytics (optional future section) */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">Dashboard Analytics</h3>
          <p className="text-sm text-gray-600">Visual insights about project submissions, participation, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
