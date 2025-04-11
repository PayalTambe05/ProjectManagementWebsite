import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[#1f2937] p-10 rounded-3xl shadow-2xl border border-white/10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-blue-400 mb-6"
        >
          About ProjectHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-300 leading-8"
        >
          <strong className="text-white">ProjectTrack</strong> is an intuitive, organized, and interactive portal
          designed to streamline academic project management across various departments. It empowers institutions,
          faculty, and students by offering a centralized system to upload, manage, search, and explore academic
          projects.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🎯 Purpose</h3>
            <p className="text-sm text-gray-400">
              The portal helps track projects by academic year, department, project type (mini/final), and domain
              with ease — ensuring better collaboration and documentation.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🚀 Features</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>CSV Uploads by Admin</li>
              <li>Filter by Year, Type, Domain, and Department</li>
              <li>Interactive Modal with Project Details</li>
              <li>Responsive & Animated UI</li>
            </ul>
          </div>

          <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">👨‍💻 Tech Stack</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>Frontend: React + Tailwind CSS + Framer Motion</li>
              <li>Backend: Spring Boot</li>
              <li>Database: MySQL</li>
            </ul>
          </div>

          <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🌐 Vision</h3>
            <p className="text-sm text-gray-400">
              To become a go-to tool in academic institutions for managing, showcasing, and learning from student
              innovations — department-wise and project-wise.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 italic">
            Built with 💙 to organize academic brilliance, one project at a time.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
