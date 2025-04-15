import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [department, setDepartment] = useState("");
  const [domain, setDomain] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/student-projects", {
        params: {
          department: department || null,
          domain: domain || null,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching student projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [department, domain]);

  return (
    <div className="pt-20 px-6 bg-gradient-to-b from-[#0b0e1c] via-[#111428] to-[#0b0e1c] min-h-screen text-white font-poppins">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        All Student Projects
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Departments</option>
          <option value="COMP">COMP</option>
          <option value="IT">IT</option>
          <option value="ENTC">ENTC</option>
          <option value="AIDS">AIDS</option>
          <option value="ECE">ECE</option>
        </select>

        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Domains</option>
          <option value="AI">AI</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="IoT">IoT</option>
          <option value="Web Development">Web Development</option>
          <option value="Embedded Systems">Embedded Systems</option>
        </select>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#1a1d2e] p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-blue-500/30"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.projectName}
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              <strong>Dept:</strong> {project.department}
            </p>
            <p className="text-gray-300 text-sm mb-1">
              <strong>Domain:</strong> {project.domain}
            </p>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {project.synopsis}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <p className="text-center text-gray-400 mt-16 animate-pulse">
          No student projects found for the selected filters.
        </p>
      )}
    </div>
  );
};

export default AllProjects;