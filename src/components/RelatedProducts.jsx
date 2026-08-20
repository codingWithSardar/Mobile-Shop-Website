import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import Card from "./Card";

const RelatedProducts = ({ category, id }) => {
  const { products } = useContext(UserContext);

  const relatedProducts = products.filter(
    (product) => product.category === category && product._id !== id
  );

  return (
    <div className="py-20">
      <div className="text-center mb-12 flex flex-col gap-3 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="luxury-font text-5xl tracking-wide"
        >
          Related Products
        </motion.h1>

        <div className="h-[2.5px] w-16 bg-blue-700"></div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.slice(0, 3).map((item) => (
            <Card
              key={item._id}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;