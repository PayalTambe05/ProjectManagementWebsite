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
          <div className="mt-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Want to showcase your project?
              </h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                {showForm ? "Close Form" : "Add Your Project"}
              </button>
            </motion.div>

            {/* Toggleable Form Below Button */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 max-w-4xl mx-auto bg-[#1b1f3a] border border-white/10 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
                  Upload Your Project
                </h3>
                <StudentProjectUpload />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
