import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get("dept") || "COMP";

  const [projects, setProjects] = useState([]);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const cleanParams = {
        department: department || null,
        year: year || null,
        type: type || null,
        domain: domain || null,
      };

      const response = await axios.get("http://localhost:8080/projects/filter", {
        params: cleanParams,
      });

      setProjects(response.data);
    } catch (error) {
      console.error("❌ Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [department, year, type, domain]);

  return (
    <div className="pt-20 px-6 bg-gradient-to-b from-[#0b0e1c] via-[#111428] to-[#0b0e1c] min-h-screen text-white font-poppins">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-center text-blue-300 glow">
          Projects for {department} Department
        </h2>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center items-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          {
            label: "All Years",
            value: year,
            set: setYear,
            options: ["2020", "2021", "2022", "2023", "2024"],
          },
          {
            label: "All Domains",
            value: domain,
            set: setDomain,
            options: [
              "Machine Learning",
              "IoT",
              "App Development",
              "Embedded Systems",
              "AI",
              "Industrial Automation",
              "Cybersecurity",
              "EdTech",
              "Web Development",
              "MusicTech",
            ],
          },
          {
            label: "All Types",
            value: type,
            set: setType,
            options: ["Mini", "Final"],
          },
        ].map(({ label, value, set, options }, i) => (
          <select
            key={i}
            value={value}
            onChange={(e) => set(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white/90 text-black shadow-xl hover:shadow-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="">{label}</option>
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-[#1a1d2e] to-[#2b2f44] p-6 rounded-2xl shadow-md border border-white/10 cursor-pointer hover:shadow-blue-500/30 transition"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold text-blue-400 text-center tracking-wide">
              {project.projectName}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 text-center text-gray-400 text-lg animate-pulse"
        >
          No projects found for selected filters.
        </motion.p>
      )}

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1f2235] text-white p-6 rounded-2xl w-[90%] max-w-md shadow-2xl border border-blue-500 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-white text-lg font-bold hover:text-red-400 transition"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4 text-blue-300 tracking-wide">
                {selectedProject.projectName}
              </h2>
              <p className="mb-2">
                <strong>Type:</strong> {selectedProject.projectType}
              </p>
              <p className="mb-2">
                <strong>Academic Year:</strong> {selectedProject.year}
              </p>
              <p className="mb-2">
                <strong>Domain:</strong> {selectedProject.domain}
              </p>
              <p className="text-sm mt-2 text-gray-300">
                <strong>Synopsis:</strong> {selectedProject.synopsis}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
