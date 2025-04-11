import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaUserShield,
  FaProjectDiagram,
  FaLock,
  FaBuilding,
  FaUserCog,
  FaSignOutAlt,
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaPhoneAlt,
  FaIdCard,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEditClick = () => {
    setError("");
    setSuccessMessage("");
    setEditMode(true);
  };

  const handleCancel = () => {
    setError("");
    setSuccessMessage("");
    setEditMode(false);
  };

  const handleSave = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      setSuccessMessage("");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
    setEditMode(false);
    setError("");
    setSuccessMessage("Profile updated successfully!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <p className="text-lg font-medium animate-pulse">Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-24"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white bg-opacity-5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 space-y-8"
      >
        <div className="flex justify-between items-center border-b border-gray-600 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-lg">My Profile</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-all font-medium"
          >
            <FaSignOutAlt className="text-lg" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileField icon={<FaUser />} label="Name" value={formData.name} editable={editMode} name="name" onChange={handleChange} />
          <ProfileField icon={<FaEnvelope />} label="Email" value={formData.email} editable={false} />
          <ProfileField icon={<FaLock />} label="Role" value={formData.role} editable={false} />

          {user.role === "student" ? (
            <>
              <ProfileField icon={<FaBuilding />} label="Department" value={formData.department} editable={editMode} name="department" onChange={handleChange} />
              <ProfileField icon={<FaCalendarAlt />} label="Academic Year" value={formData.academicYear} editable={editMode} name="academicYear" onChange={handleChange} />
              <ProfileField icon={<FaIdCard />} label="Roll Number" value={formData.rollNumber} editable={editMode} name="rollNumber" onChange={handleChange} />
              <ProfileField icon={<FaPhoneAlt />} label="Mobile Number" value={formData.mobileNumber} editable={editMode} name="mobileNumber" onChange={handleChange} />
            </>
          ) : (
            <>
              <ProfileField icon={<FaUserShield />} label="Admin ID" value={formData.adminId} editable={editMode} name="adminId" onChange={handleChange} />
              <ProfileField icon={<FaPhoneAlt />} label="Mobile Number" value={formData.mobileNumber} editable={editMode} name="mobileNumber" onChange={handleChange} />
            </>
          )}

          <ProfileField icon={<FaProjectDiagram />} label="Total Projects" value={user.totalProjects || 0} editable={false} />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-400 font-medium pt-2 text-sm">
            <FaExclamationCircle /> {error}
          </div>
        )}

        {successMessage && (
          <div className="flex items-center gap-2 text-green-400 font-medium pt-2 text-sm">
            <FaCheckCircle /> {successMessage}
          </div>
        )}

        {!editMode ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEditClick}
            className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 transition font-semibold flex items-center gap-2 shadow-lg"
          >
            <FaEdit /> Edit Profile
          </motion.button>
        ) : (
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSave}
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 transition font-semibold flex items-center gap-2 shadow-lg"
            >
              <FaSave /> Save Changes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCancel}
              className="px-6 py-3 rounded-full bg-gray-600 hover:bg-gray-500 transition font-semibold flex items-center gap-2 shadow-lg"
            >
              <FaTimes /> Cancel
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProfileField = ({ icon, label, value, editable, name, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-start gap-4 text-base"
  >
    <div className="text-cyan-300 text-xl drop-shadow-lg mt-2">{icon}</div>
    <div className="flex flex-col w-full">
      <label className="text-xs text-gray-300 font-semibold tracking-wide uppercase">{label}</label>
      {editable ? (
        <input
          type="text"
          name={name}
          value={value || ""}
          onChange={onChange}
          className="mt-1 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      ) : (
        <p className="text-white font-medium mt-1 px-1 text-sm">{value || "-"}</p>
      )}
    </div>
  </motion.div>
);

export default UserProfile;