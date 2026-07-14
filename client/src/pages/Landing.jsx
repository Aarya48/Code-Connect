import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
const featuredProjects = [
  {
    title: "Nebula OS",
    author: "Aarya Tiwari",
    description:
      "A browser-based operating system featuring file management, projects, and cloud workspace capabilities.",
    techStack: ["React", "Node.js", "MongoDB"],
  },

  {
    title: "CodeConnect",
    author: "Aarya Tiwari",
    description:
      "A developer networking platform to showcase projects, discover talent, and collaborate on ideas.",
    techStack: ["React", "Express", "MongoDB"],
  },

  {
    title: "FinTrack AI",
    author: "Aditya Rao",
    description:
      "An AI-powered personal finance assistant that analyzes spending patterns and suggests savings goals.",
    techStack: ["Next.js", "Python", "OpenAI"],
  },

  {
    title: "MedSync",
    author: "Riya Kapoor",
    description:
      "A healthcare platform for appointment booking, medical records, and doctor-patient communication.",
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
];

function ReadMore({ expandedContent }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

 
  useEffect(() => {
    if (open && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [open]);

  const paragraphs = String(expandedContent)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="mt-3 text-left">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-transparent border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/8 hover:text-white transition-all"
        >
          Read more
        </button>
      )}

      {open && (
        <motion.div
          ref={containerRef}
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.35 }}
          className="mt-3 text-gray-300 text-sm"
        >
          {paragraphs.map((para, idx) => (
            <p key={idx} className="mb-3 leading-relaxed text-sm md:text-base">
              {para}
            </p>
          ))}

          <div className="mt-2">
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            >
              Read less
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
function Landing() {
 
 return (
  <div className="min-h-screen bg-[#0B1020] text-white overflow-hidden">
    <Navbar />

    {/* Hero Section */}
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-12">
      {/* Purple Glow */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Stars with Twinkle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(160)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70 twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["#FFFFFF", "#8B5CF6", "#06B6D4"][Math.floor(Math.random() * 3)],
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs md:text-sm font-medium"
      >
        🚀 Developer Collaboration Platform
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative"
      >
        <motion.h1
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight"
        >
          CodeConnect
        </motion.h1>
      </motion.div>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-xl md:text-2xl font-semibold text-white"
      >
        Connect. Build. Collaborate.
      </motion.h2>

      {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-4 max-w-3xl md:max-w-4xl text-gray-400 text-base md:text-lg leading-relaxed mx-auto"
          >
            <p>
              Showcase your projects, discover talented developers, and build the next big thing together.
            </p>

            <ReadMore expandedContent={
    `CodeConnect is a developer collaboration platform designed
    to bring builders, creators, and innovators together.

    Whether you're a frontend developer, backend engineer,
    UI/UX designer, AI enthusiast, or startup founder,
    CodeConnect helps you showcase your work, discover
    talented people, and collaborate on meaningful projects.

    Our mission is to create a space where ideas can turn
    into products, side projects can become startups, and
    developers can grow through teamwork and innovation.

    With project showcases, developer profiles, collaboration
    opportunities, and a growing community of builders,
    CodeConnect aims to become the ultimate hub for students,
    developers, freelancers, and entrepreneurs.

    Connect with people who share your passion.
    Build projects that matter.
    Collaborate to create the future.`
            } />
          </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold"
        >
          Explore Developers
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
        >
          View Projects
        </motion.button>
      </motion.div>

    </div>

    {/* Features Section */}
    <div className="max-w-6xl mx-auto px-6 py-12 -mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why CodeConnect?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <FeatureCard
          title="Connect"
          description="Find talented developers and grow your network."
        />

        <FeatureCard
          title="Build"
          description="Work together on exciting projects and startups."
        />

        <FeatureCard
          title="Showcase"
          description="Display your projects and technical skills."
        />

        <FeatureCard
          title="Collaborate"
          description="Discover opportunities and build with teams."
        />

      </div>

    </div>

    {/* Featured Projects */}
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Featured Projects
      </h2>

      <div className="flex gap-6 overflow-x-auto px-2 py-4 snap-x">
        {featuredProjects.map((project) => (
          <div key={project.title} className="min-w-[300px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 snap-start">
            <ProjectCard
              title={project.title}
              author={project.author}
              description={project.description}
              techStack={project.techStack}
            />
          </div>
        ))}
      </div>

    </div>

    <Footer />

  </div>
);
}

export default Landing;