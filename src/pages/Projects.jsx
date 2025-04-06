import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get("dept") || "COMP";

  const [projects, setProjects] = useState([]);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/projects/filter", {
        params: {
          department,
          year,
          type,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [department, year, type]);

  return (
    <div className="p-6 bg-[#0b0e1c] min-h-screen text-white font-sans">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">
          Projects for {department} Department
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 rounded bg-white text-black"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 rounded bg-white text-black"
          >
            <option value="">All Types</option>
            <option value="mini">Mini Project</option>
            <option value="final">Final Year</option>
          </select>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1d2e] p-4 rounded-xl shadow-md border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-1">{project.projectName}</h3>
            <p className="text-sm mb-1">
              <strong>Year:</strong> {project.year}
            </p>
            <p className="text-sm mb-1">
              <strong>Type:</strong> {project.projectType}
            </p>
            <p className="text-sm mb-1">
              <strong>Domain:</strong> {project.domain}
            </p>
            <p className="text-sm mt-2 text-gray-300">{project.synopsis}</p>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-10 text-center text-gray-400">
          No projects found for selected filters.
        </p>
      )}
    </div>
  );
};

export default Projects;
