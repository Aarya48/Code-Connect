import { motion } from "framer-motion";

function ProjectCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#111827] border-l-4 border-transparent hover:border-l-cyan-500 p-6 rounded-lg transition-all duration-300 hover:bg-[#1a202c] cursor-pointer overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-purple-600/0 group-hover:from-cyan-600/5 group-hover:to-purple-600/5 transition-all duration-500" />

      <div className="relative z-10">
        {/* Top Row: Title + Tech Count */}
        <div className="flex items-start justify-between mb-3">
          <motion.h3
            className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 flex-1"
          >
            {props.title}
          </motion.h3>
          <span className="ml-3 px-2 py-1 rounded bg-cyan-600/30 text-cyan-300 text-xs font-semibold whitespace-nowrap">
            {props.techStack.length} Tech
          </span>
        </div>

        {/* Author */}
        <p className="text-xs text-gray-400 font-medium mb-3 group-hover:text-purple-400 transition-colors">
          by {props.author}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-100 transition-colors">
          {props.description}
        </p>

        {/* Tech Stack - Inline */}
        <div className="flex flex-wrap gap-1.5">
          {props.techStack.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="px-2.5 py-1 rounded text-xs font-semibold bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-600/40 group-hover:border-cyan-400/60 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;