import React, { useContext } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { UserContext } from "../context/UserContext";

const Featured = () => {
  const { products } = useContext(UserContext);

  const featured = products?.filter((product) => product?.featured) || [];

  return (
    <section
      id="featured-products"
      className="py-20 px-5 md:px-10 bg-white"
    >
      <div className="text-center mb-12 flex flex-col gap-3 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-black"
        >
          Featured Phones
        </motion.h1>

        <div className="h-[2.5px] w-16 bg-[#3B82F6] rounded-full" />
      </div>

      {featured.length > 0 ? (
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto scrollbar-hide pb-5">
          {featured.slice(0, 8).map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-[320px]"
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
          No featured products available.
        </div>
      )}
    </section>
  );
};

export default Featured;