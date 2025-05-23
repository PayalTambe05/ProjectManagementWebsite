import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ExploreProjects = () => {
  const [studentProjects, setStudentProjects] = useState([]);
  const [department, setDepartment] = useState("");
  const [domain, setDomain] = useState("");

  const fetchStudentProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/student-projects", {
        params: {
          department: department || null,
          domain: domain || null,
        },
      });
      setStudentProjects(response.data);
    } catch (error) {
      console.error("Error fetching student projects:", error);
    }
  };

  useEffect(() => {
    fetchStudentProjects();
  }, [department, domain]);

  return (
    <div className="pt-20 px-6 bg-gradient-to-b from-[#0b0e1c] via-[#111428] to-[#0b0e1c] min-h-screen text-white font-poppins">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Explore Student Projects
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white/90 text-black"
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
          className="px-4 py-2 rounded-xl bg-white/90 text-black"
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

      {/* Student Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#1a1d2e] p-6 rounded-2xl shadow-lg border border-yellow-400/20 hover:shadow-yellow-400/30"
          >
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-1"><strong>Dept:</strong> {project.studentDept}</p>
            <p className="text-gray-300 text-sm mb-1"><strong>Domain:</strong> {project.domain}</p>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-3 inline-block hover:underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {studentProjects.length === 0 && (
        <p className="text-center text-gray-400 mt-16 animate-pulse">
          No student projects found for the selected filters.
        </p>
      )}
    </div>
  );
};

export default ExploreProjects;
