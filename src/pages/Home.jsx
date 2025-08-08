import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import StudentProjectUpload from "./StudentProjectUpload";
import { motion } from "framer-motion";

const departments = [
  { name: "COMP", img: "/Comp.jpeg" },
  { name: "IT", img: "/IT.jpg" },
  { name: "ENTC", img: "/ENTC.jpeg" },
  { name: "AIDS", img: "/AI.jpeg" },
  { name: "ECE", img: "/ECE.jpeg" },
];

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-gradient-to-br from-[#0b0e1c] via-[#141e30] to-[#243b55]">
      <div className="absolute inset-0 z-0 opacity-20">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-xl">
            Project Management Hub
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Choose your department to explore student innovations
          </p>
        </motion.div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto mb-20">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.07 }}
            >
              <Link to={`/projects?dept=${dept.name}`}>
                <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-[#1b1f3a]/70 border border-white/10 hover:border-cyan-400 hover:shadow-2xl transition duration-500">
                  <img
                    src={dept.img}
                    alt={dept.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
                  <div className="p-4 text-center font-semibold text-xl z-10 relative">
                    {dept.name}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Student Upload Section */}
        {user?.role === "student" && (
          <div className="mt-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-extrabold text-white tracking-wide mb-4">
                Showcase Your Innovation
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Have a cool project? Share it with your peers and get noticed by faculty, recruiters, and tech enthusiasts. Inspire and be inspired.
              </p>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f2937] text-cyan-300 border border-cyan-500 rounded-xl shadow-md hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out hover:shadow-cyan-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                {showForm ? "Close Form" : "Add Your Project"}
              </button>
            </motion.div>

            {/* Toggleable Upload Form */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-14 mx-auto max-w-5xl px-6"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    📤 Upload Your Project Details
                  </h3>
                  <p className="text-gray-300 text-center mb-8">
                    Fill out the form below with accurate details. Your project will be reviewed and added to the public list.
                  </p>

                  {/* Upload Form Component */}
                  <StudentProjectUpload />
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Resources Section - Visible for everyone */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Project Resources</h2>
            <p className="text-gray-300">Helpful links to explore project ideas, tools, and templates</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {/* Resource Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1b1f3a] border border-white/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">IEEE Project Ideas</h3>
              <p className="text-gray-300 text-sm mb-4">Explore innovative IEEE-based project topics for engineering students.</p>
              <a
                href="https://ieeexplore.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1b1f3a] border border-white/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">GitHub Student Pack</h3>
              <p className="text-gray-300 text-sm mb-4">Free developer tools and learning resources for students.</p>
              <a
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1b1f3a] border border-white/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Spring Boot Guide</h3>
              <p className="text-gray-300 text-sm mb-4">Step-by-step tutorials to build backend applications with Spring Boot.</p>
              <a
                href="https://spring.io/guides/gs/spring-boot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>

            {/* Additional Resource Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1b1f3a] border border-white/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Google Cloud Platform for Students</h3>
              <p className="text-gray-300 text-sm mb-4">Access to free credits and tools for cloud development and deployment.</p>
              <a
                href="https://cloud.google.com/blog/topics/education/announcing-google-cloud-for-students"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1b1f3a] border border-white/10 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Project Management Templates</h3>
              <p className="text-gray-300 text-sm mb-4">Free templates to help you organize and manage your project from start to finish.</p>
              <a
                href="https://www.smartsheet.com/project-management-templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit Site →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
