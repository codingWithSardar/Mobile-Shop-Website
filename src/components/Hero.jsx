import React, { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { UserContext } from "../context/UserContext";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  const { navigate } = useContext(UserContext);

  return (
    <div
      className="relative h-[92vh] w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
style={{
  backgroundImage: `url(${assets.bg})`
}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"></div>

      {/* Ambient glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl w-full px-6 lg:px-16"
      >
        <div className="max-w-2xl">

          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-[#3B82F6]/40 text-[#60A5FA] px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
            Welcome to Mobile Hub
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
          >
            Discover Your
            <span className="block bg-gradient-to-r from-[#93C5FD] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
              Next Smartphone
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-300 text-lg leading-8 max-w-xl"
          >
            Explore the latest Android and iPhone devices with official
            warranty, genuine accessories, secure payments, and fast
            nationwide delivery.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10">

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/collection")}
              className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] text-white font-semibold px-8 py-4 rounded-lg transition-shadow cursor-pointer"
            >
              Shop Phones
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("featured-products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white/70 text-white px-8 py-4 rounded-lg backdrop-blur-sm cursor-pointer transition-colors"
            >
              Featured Phones
            </motion.button>

          </motion.div>

        
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;