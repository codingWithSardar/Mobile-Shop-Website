import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Loader2,
  Smartphone,
  BatteryFull,
} from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";
import allProducts from "../data/products";

const Product = () => {
  const { id } = useParams();
  const { toggleWishList, addToCart } = useContext(UserContext);

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = allProducts.find((item) => item._id === id);

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images?.[0]?.image_URL || "");
      setSelectedColor(foundProduct.colors?.[0] || "");
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <Loader2 size={50} className="animate-spin" />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product._id, selectedColor, quantity);
  };

  return (
    <div className="bg-[#F7FAFF] min-h-screen py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col lg:flex-row gap-5 lg:w-1/2">
          <div className="flex lg:flex-col gap-4 overflow-auto">
            {product.images?.map((item, index) => (
              <img
                key={index}
                src={item.image_URL}
                onClick={() => setMainImage(item.image_URL)}
                className={`w-20 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === item.image_URL
                    ? "border-[#3B82F6]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={mainImage}
              className="w-full h-150 object-contain bg-white rounded-xl p-6"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="uppercase tracking-[3px] text-[#3B82F6] font-semibold">
            {product.brand}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-5">
            <div className="flex text-[#3B82F6]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#3B82F6" />
              ))}
            </div>

            <span className="text-gray-500">(120 Reviews)</span>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <h2 className="text-4xl font-bold text-[#3B82F6]">
              Rs. {product.finalPrice}
            </h2>

            {product.sale > 0 && (
              <>
                <p className="text-xl line-through text-gray-400">
                  Rs. {product.price}
                </p>

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.sale}% OFF
                </span>
              </>
            )}
          </div>

          {product.stock !== undefined &&
            (product.stock > 0 ? (
              <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                In Stock
              </span>
            ) : (
              <span className="inline-block mt-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                Out of Stock
              </span>
            ))}

          <p className="mt-8 text-gray-600 leading-8">
            {product.description}
          </p>

          {product.specifications && (
            <div className="mt-10 grid grid-cols-2 gap-4">
              {product.specifications.display && (
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                  <Smartphone className="text-[#3B82F6]" size={20} />
                  <div>
                    <p className="text-xs text-gray-400">Display</p>
                    <p className="font-semibold text-sm">
                      {product.specifications.display}
                    </p>
                  </div>
                </div>
              )}

              {product.specifications.battery && (
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                  <BatteryFull className="text-[#3B82F6]" size={20} />
                  <div>
                    <p className="text-xs text-gray-400">Battery</p>
                    <p className="font-semibold text-sm">
                      {product.specifications.battery}
                    </p>
                  </div>
                </div>
              )}

              {product.specifications.ram && (
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-400">RAM</p>
                  <p className="font-semibold text-sm">
                    {product.specifications.ram}
                  </p>
                </div>
              )}

              {product.specifications.storage && (
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-400">Storage</p>
                  <p className="font-semibold text-sm">
                    {product.specifications.storage}
                  </p>
                </div>
              )}
            </div>
          )}

          {product.colors?.length > 0 && (
            <div className="mt-10">
              <h3 className="font-semibold mb-4">Available Colors</h3>

              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 rounded-lg border transition cursor-pointer ${
                      selectedColor === color
                        ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                        : "bg-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <h3 className="font-semibold mb-4">Quantity</h3>

            <div className="flex items-center border rounded-lg w-fit overflow-hidden bg-white">
              <button
                onClick={() =>
                  quantity > 1 && setQuantity((prev) => prev - 1)
                }
                className="w-12 h-12 text-xl cursor-pointer"
              >
                -
              </button>

              <div className="w-14 flex justify-center">{quantity}</div>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-12 h-12 text-xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              className="flex-1 h-14 bg-[#3B82F6] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#2563EB] transition cursor-pointer"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            <button
              onClick={() => toggleWishList(product._id)}
              className="h-14 cursor-pointer w-14 rounded-xl border bg-white flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <Heart />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm">
              <Truck className="text-[#3B82F6]" />
              <p className="font-semibold mt-3">Fast Delivery</p>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm">
              <RotateCcw className="text-[#3B82F6]" />
              <p className="font-semibold mt-3">Easy Returns</p>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm">
              <ShieldCheck className="text-[#3B82F6]" />
              <p className="font-semibold mt-3">
                {product.warranty || "Official Warranty"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts category={product.category} id={product._id} />
    </div>
  );
};

export default Product;