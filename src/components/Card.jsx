import {
  Heart,
  Eye,
  ShieldCheck,
  BatteryFull,
  Smartphone,
} from "lucide-react";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Card = ({
  image,
  name,
  brand,
  price,
  newPrice,
  discount,
  id,
  stock,
  warranty,
  specifications,
}) => {
  const { navigate, toggleWishList } = useContext(UserContext);

  const handleQuickView = () => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
      <div className="relative bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-contain p-6 group-hover:scale-105 transition duration-500"
        />

        <button
          type="button"
          onClick={() => toggleWishList(id)}
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition cursor-pointer"
        >
          <Heart size={18} />
        </button>

        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickView}
          className="absolute text-xs bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 transition cursor-pointer"
        >
          <Eye size={17} />
          Quick View
        </button>
      </div>

      <div className="p-5">
        {brand && (
          <p className="text-sm text-[#3B82F6] font-semibold">
            {brand}
          </p>
        )}

        <h2 className="font-bold text-xl mt-1 line-clamp-2">
          {name}
        </h2>

        {specifications && (
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Smartphone size={16} />
              {specifications?.display}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BatteryFull size={16} />
              {specifications?.battery}
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-semibold">
                {specifications?.ram}
              </span>
              {" / "}
              <span className="font-semibold">
                {specifications?.storage}
              </span>
            </div>

            {warranty && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <ShieldCheck size={16} />
                {warranty}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <div>
            {discount > 0 && (
              <p className="text-sm text-gray-400 line-through">
                Rs. {Number(price).toLocaleString()}
              </p>
            )}

            <h2 className="text-2xl font-bold text-[#3B82F6]">
              Rs. {Number(newPrice).toLocaleString()}
            </h2>
          </div>

          {stock !== undefined &&
            (stock > 0 ? (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                In Stock
              </span>
            ) : (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                Out of Stock
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;