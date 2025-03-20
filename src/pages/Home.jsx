import React from "react";
import { Link } from "react-router-dom";

const departments = [
  { name: "COMP", img: "/Comp.jpeg" },
  { name: "IT", img: "/IT.jpg" },
  { name: "ENTC", img: "/ENTC.jpeg" },
  { name: "AIDS", img: "/AI.jpeg" },
  { name: "ECE", img: "/ECE.jpeg" },
];

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans bg-[#0b0e1c]">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-float"
        style={{
          backgroundImage: `url("/HomePage.jpeg")`,
          filter: "brightness(0.3) blur(1px)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-white drop-shadow tracking-wide">
            Project Management Hub
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Choose your department to explore projects
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {departments.map((dept) => (
            <Link to={`/projects?dept=${dept.name}`} key={dept.name}>
              <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#12162e]/60 backdrop-blur-md border border-white/10 transition duration-500 transform hover:scale-105">
                {/* Glow border on hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl blur-sm bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"></div>

                {/* Card Image */}
                <img
                  src={dept.img}
                  alt={dept.name}
                  className="relative z-10 w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black opacity-40 group-hover:opacity-20 transition duration-500 rounded-2xl"></div>

                {/* Department Name */}
                <div className="relative z-20 p-4 text-center text-white font-semibold text-xl tracking-wide">
                  {dept.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
