import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminUpload from "./pages/AdminUpload";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import StudentProjectUpload from "./pages/StudentProjectUpload";
import AllProjects from "./pages/AllProjects";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adminupload" element={<AdminUpload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/studentprojectupload" element={<StudentProjectUpload />} />
            <Route path="/all-projects" element={<AllProjects />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
