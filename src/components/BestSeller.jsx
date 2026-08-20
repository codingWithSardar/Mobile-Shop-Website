import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import Card from "./Card";

const BestSeller = () => {
  const { products } = useContext(UserContext);

  const bestSeller = products?.filter((product) => product?.bestSeller) || [];

  return (
    <section className="py-20 px-5 md:px-10 bg-[#F7FAFF]">
      <div className="text-center mb-12 flex flex-col gap-3 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-black"
        >
          Best Sellers
        </motion.h1>

        <div className="h-[2.5px] w-16 bg-[#3B82F6] rounded-full" />
      </div>

      {bestSeller.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bestSeller.slice(0, 8).map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card
                id={item._id}
                image={item.images?.[0]?.image_URL}
                name={item.name}
                brand={item.brand}
                price={item.price}
                newPrice={item.finalPrice}
                discount={item.sale}
                stock={item.stock}
                warranty={item.warranty}
                specifications={item.specifications}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No best selling products available.
        </div>
      )}
    </section>
  );
};

export default BestSeller;