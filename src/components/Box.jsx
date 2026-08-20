import React, { useContext } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../context/UserContext";

const Box = ({ image, title, subtitle, category }) => {
  const { setCategory, navigate } = useContext(UserContext);

  const handleExplore = () => {
    setCategory(category);
    navigate("/collection");
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-2xl overflow-hidden"
    >
      <img
        src={image}
        alt={subtitle}
        className="h-[55vh] md:h-[70vh] w-full object-cover transition"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      <div className="absolute bottom-6 left-6 space-y-3">
        <h1 className="text-white text-sm md:text-lg font-semibold tracking-widest uppercase">
          {title}
        </h1>

        <p className="text-4xl md:text-5xl font-bold text-white">
          {subtitle}
        </p>

        <button
          type="button"
          onClick={handleExplore}
          className="border cursor-pointer border-white px-8 py-3 text-white font-semibold hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition duration-300 rounded-lg"
        >
          Explore
        </button>
      </div>
    </motion.div>
  );
};

export default Box;