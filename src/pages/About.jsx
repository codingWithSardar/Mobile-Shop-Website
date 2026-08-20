import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { assets } from "../assets/assets";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { navigate } = useContext(UserContext);

  const values = [
    {
      icon: <BadgeCheck size={32} />,
      title: "100% Genuine Products",
      desc: "Every smartphone we sell is sourced directly from authorized dealers, with zero tolerance for fakes or refurbished tricks.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Official Warranty",
      desc: "All our devices come with manufacturer-backed warranty and verified after-sales support you can rely on.",
    },
    {
      icon: <Truck size={32} />,
      title: "Fast & Secure Delivery",
      desc: "Our commitment is to get your device to your doorstep quickly, safely, and with complete peace of mind.",
    },
  ];

  return (
    <div className="bg-[#F7FAFF] min-h-screen px-5 md:px-10 py-12">
      <section
        className="h-[70vh] bg-cover bg-center relative flex items-center justify-center rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${assets.about})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-5 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Our Story
          </motion.h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-200">
            Bringing genuine smartphones, trusted service, and fast delivery
            to customers across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={assets.w1}
            className="w-full h-125 object-cover rounded-3xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Built On Trust
            </h2>

            <div className="h-[2.5px] bg-[#3B82F6] w-16 rounded-full"></div>

            <p className="text-gray-600 leading-7">
              We started with a simple idea — buying a smartphone should be
              easy, transparent, and stress-free.
            </p>

            <p className="text-gray-600 leading-7">
              From the latest iPhones to the best Android flagships, we
              curate every product ourselves and stand behind it with real
              warranty and real support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose Us
          </h2>

          <div className="h-[2.5px] w-16 bg-[#3B82F6] mx-auto mt-4 mb-14 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="flex flex-col items-center text-center bg-[#F7FAFF] rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
              >
                <div className="text-[#3B82F6] bg-[#3B82F6]/10 p-4 rounded-full mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-500 mt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Your Next Phone Is Waiting
        </h2>

        <p className="text-gray-600 mt-4">
          Explore our full range of genuine, warranty-backed smartphones.
        </p>

        <button
          onClick={() => {
            navigate("/collection");
            scrollTo(0, 0);
          }}
          className="cursor-pointer mt-8 bg-[#3B82F6] hover:bg-[#2563EB] transition rounded-lg px-10 py-3 text-white font-semibold"
        >
          Explore Collection
        </button>
      </section>
    </div>
  );
};

export default About;