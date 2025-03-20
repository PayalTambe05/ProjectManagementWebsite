import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// dummy data
const allProjects = [
  { title: "ML-based Disease Detector", year: "Final", domain: "ML", dept: "COMP" },
  { title: "Online Voting App", year: "Mini", domain: "App", dept: "IT" },
  { title: "Smart Embedded Car", year: "Final", domain: "Embedded", dept: "ENTC" },
  // Add more dummy projects
];

const getQuery = (search) => Object.fromEntries(new URLSearchParams(search));

function Projects() {
  const { search } = useLocation();
  const query = getQuery(search);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const [filters, setFilters] = useState({
    year: "",
    domain: "",
    dept: query.dept || "",
  });

  useEffect(() => {
    const filtered = allProjects.filter((p) =>
      (!filters.year || p.year === filters.year) &&
      (!filters.domain || p.domain === filters.domain) &&
      (!filters.dept || p.dept === filters.dept)
    );
    setFilteredProjects(filtered);
  }, [filters]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select onChange={(e) => setFilters({ ...filters, year: e.target.value })} className="p-2 rounded border">
          <option value="">All Years</option>
          <option value="Mini">Mini Project</option>
          <option value="Final">Final Year Project</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, domain: e.target.value })} className="p-2 rounded border">
          <option value="">All Domains</option>
          <option value="App">App</option>
          <option value="Web">Web</option>
          <option value="Embedded">Embedded</option>
          <option value="ML">ML</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, dept: e.target.value })} className="p-2 rounded border">
          <option value="">All Departments</option>
          <option value="COMP">COMP</option>
          <option value="IT">IT</option>
          <option value="ENTC">ENTC</option>
          <option value="AIDS">AIDS</option>
          <option value="ECE">ECE</option>
        </select>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm text-gray-600">Dept: {project.dept}</p>
            <p className="text-sm text-gray-600">Year: {project.year}</p>
            <p className="text-sm text-gray-600">Domain: {project.domain}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
