import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2a3a51] via-[#3a4c63] to-[#2a3a51] text-white px-6 pt-12 pb-6">


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2">ProjectTrack</h2>
          <p className="text-gray-400 text-sm leading-6">
            Your ultimate companion for managing academic projects with ease and elegance. ✨
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "Projects", "Hackathons", "Events", "Contact Us", "Feedback"].map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-white hover:pl-1 transition-all duration-300 ease-in-out"
                >
                  ➤ {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Get in Touch</h3>
          <p className="text-sm text-gray-300 mb-2">📍 College Name, City, State</p>
          <p className="text-sm text-gray-300 mb-2">📧 projecttrack@college.edu</p>
          <p className="text-sm text-gray-300">📞 +91-9876543210</p>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Subscribe</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black focus:outline-none shadow-lg focus:ring-2 ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-semibold transition-all duration-300"
            >
              Join Newsletter
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-300 hover:text-white hover:scale-125 transition-transform duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4 tracking-wide">
        &copy; {new Date().getFullYear()} <span className="text-indigo-300">ProjectTrack</span> — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
