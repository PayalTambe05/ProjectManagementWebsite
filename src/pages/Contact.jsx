import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-[#1f2937] p-10 rounded-3xl shadow-2xl border border-white/10"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-blue-400 mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300 text-center mb-8"
        >
          Have questions or suggestions? Reach out to our team – we're here to help you make the most of the
          ProjectTrack Portal.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center mb-2 text-blue-300">
              <Mail className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-sm text-gray-400">projectadmin@college.edu</p>
          </motion.div>

          <motion.div
            className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center mb-2 text-blue-300">
              <Phone className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-sm text-gray-400">+91 12345 67890</p>
          </motion.div>

          <motion.div
            className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center mb-2 text-blue-300">
              <MapPin className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-sm text-gray-400">
              Pune Institute if Computer Technology, Pune, India.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="italic text-gray-400">We usually respond within 24 hours.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
