import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";

const departments = [
  { name: "COMP", img: "/Comp.jpeg" },
  { name: "IT", img: "/IT.jpg" },
  { name: "ENTC", img: "/ENTC.jpeg" },
  { name: "AIDS", img: "/AI.jpeg" },
  { name: "ECE", img: "/ECE.jpeg" },
];

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white bg-gradient-to-br from-[#0b0e1c] via-[#141e30] to-[#243b55] animate-gradient-slow">
      {/* Optional: Subtle Particle Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ParticlesBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
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
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
