import React, { useContext } from "react";
import { Heart } from "lucide-react";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";

const Wishlist = () => {
  const {
    navigate,
    wishListProducts,
    clearWishlist,
  } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-16 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
            <Heart className="w-7 h-7 text-blue-700 fill-blue-700" />
          </div>

          <h1 className="luxury-font text-5xl text-gray-900">
            My Wishlist
          </h1>

          <div className="w-20 h-[2.5px] bg-blue-700 my-4"></div>

          <p className="text-gray-500 max-w-xl">
            Keep track of your favorite luxury pieces and discover timeless
            styles whenever you're ready.
          </p>
        </div>

        {wishListProducts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md py-24 px-8 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Heart className="w-12 h-12 text-blue-700" />
            </div>

            <h2 className="text-3xl luxury-font mt-8">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-4 max-w-md text-center">
              Save your favorite products and they'll appear here for easy
              access anytime.
            </p>

            <button
              onClick={() => {
                scrollTo(0, 0);
                navigate("/collection");
              }}
              className="mt-8 cursor-pointer bg-blue-700 hover:bg-[#c89f2f] text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500">
                {wishListProducts.length} Saved Items
              </p>

              <button
                onClick={clearWishlist}
                className="text-sm cursor-pointer text-[#D4AF37] font-semibold hover:underline"
              >
                Clear Wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishListProducts.map((item) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;