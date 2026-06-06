import { motion } from "framer-motion";

function FeatureCard(props) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)" }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm p-7 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300" />

      {/* Glow Effect */}
      <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
          <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {props.title}
          </h2>
        </div>

        <p className="text-gray-300 group-hover:text-gray-100 transition-all duration-300 text-sm leading-relaxed">
          {props.description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;