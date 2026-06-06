
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full px-8 md:px-12 py-5 flex items-center justify-between text-white bg-black/20 backdrop-blur-md border-b border-purple-500/20 fixed top-0 z-50">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
          CodeConnect
        </h1>
      </motion.div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-gray-300">
        {["Home", "Community", "Projects", "About"].map((link) => (
          <motion.a
            key={link}
            href="/"
            className="relative font-medium text-sm"
            whileHover={{ color: "#06B6D4" }}
            transition={{ duration: 0.2 }}
          >
            {link}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold text-sm md:text-base"
      >

        <Link to="/register">
  Get Started
</Link>
      </motion.button>
    </nav>
  );
}

export default Navbar;