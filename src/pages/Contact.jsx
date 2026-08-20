import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const details = [
    {
      icon: <Mail />,
      title: "Email",
      text: "support@mobilehub.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      text: "+92 300 1234567",
    },
    {
      icon: <MapPin />,
      title: "Location",
      text: "Rawalpindi, Pakistan",
    },
  ];

  return (
    <div className="bg-[#F7FAFF] min-h-screen text-black">
      <section className="py-24 px-5 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="tracking-[5px] text-sm font-semibold"
        >
          CONTACT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mt-5 text-[#3B82F6]"
        >
          Let's Connect
        </motion.h1>

        <p className="max-w-2xl mx-auto text-gray-500 mt-6">
          Have questions about a product, order, or warranty? Our team is
          here to help you out.
        </p>
      </section>

      <section className="px-5 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white shadow-xl p-10 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Send Message
            </h2>

            <div className="flex flex-col gap-6">
              <input
                placeholder="Your Name"
                className="border-b border-gray-300 py-4 outline-none focus:border-[#3B82F6]"
              />

              <input
                placeholder="Email Address"
                className="border-b border-gray-300 py-4 outline-none focus:border-[#3B82F6]"
              />

              <input
                placeholder="Subject"
                className="border-b border-gray-300 py-4 outline-none focus:border-[#3B82F6]"
              />

              <textarea
                rows="5"
                placeholder="Write your message"
                className="border-b border-gray-300 py-4 outline-none resize-none focus:border-[#3B82F6]"
              />

              <button className="mt-4 bg-black text-white py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#3B82F6] transition cursor-pointer">
                Submit Inquiry
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Customer Support
            </h2>

            <div className="h-[2.5px] w-16 bg-[#3B82F6] my-6 rounded-full"></div>

            <p className="text-gray-600 leading-8 mb-10">
              Whether you need help choosing a device, tracking an order, or
              understanding your warranty, our team is here to make it
              simple.
            </p>

            <div className="space-y-6">
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          We're Here To Help
        </h2>

        <p className="text-gray-500 mt-4">
          Genuine products. Real support. Every time.
        </p>
      </section>
    </div>
  );
};

export default Contact;