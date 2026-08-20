import React, { useContext, useMemo } from "react";
import { Trash2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const {
    navigate,
    cartItems,
    updateCartQuantity,
    removeFromCart,
  } = useContext(UserContext);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, product) => {
      return (
        total +
        Object.values(product.cart || {}).reduce(
          (sum, quantity) => sum + product.finalPrice * quantity,
          0,
        )
      );
    }, 0);
  }, [cartItems]);

  const shipping = subtotal > 5000 ? 0 : subtotal > 0 ? 300 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F7FAFF] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <ShoppingBag className="mx-auto text-[#3B82F6]" size={42} />

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            Shopping Cart
          </h1>

          <div className="w-16 h-[2.5px] bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4">
            Review your selected smartphones and accessories.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <ShoppingBag
              size={50}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold mt-5">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <button
              onClick={() => navigate("/collection")}
              className="mt-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-7 py-3 rounded-xl font-semibold cursor-pointer transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((product) =>
                Object.entries(product.cart || {}).map(
                  ([color, quantity]) => (
                    <motion.div
                      whileHover={{ y: -3 }}
                      key={`${product._id}-${color}`}
                      className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row gap-6"
                    >
                      <img
                        src={product.images?.[0]?.image_URL}
                        alt={product.name}
                        className="w-36 h-36 object-contain bg-[#F7FAFF] rounded-xl p-3"
                      />

                      <div className="flex-1">
                        <h2 className="text-2xl font-bold">
                          {product.name}
                        </h2>

                        <div className="flex gap-8 mt-4 text-gray-500">
                          <p>
                            Color :
                            <span className="font-semibold ml-2">
                              {color}
                            </span>
                          </p>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                          <button
                            onClick={() =>
                              quantity > 1 &&
                              updateCartQuantity(
                                product._id,
                                color,
                                quantity - 1,
                              )
                            }
                            className="w-9 h-9 rounded-full border cursor-pointer"
                          >
                            -
                          </button>

                          <span className="font-semibold">
                            {quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateCartQuantity(
                                product._id,
                                color,
                                quantity + 1,
                              )
                            }
                            className="w-9 h-9 rounded-full border cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <div>
                          <p className="text-xl font-bold text-[#3B82F6]">
                            Rs.{product.finalPrice * quantity}
                          </p>

                          {product.sale > 0 && (
                            <p className="text-gray-400 line-through">
                              Rs.{product.price * quantity}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(product._id, color)
                          }
                          className="text-red-500 cursor-pointer hover:text-red-700"
                        >
                          <Trash2 />
                        </button>
                      </div>
                    </motion.div>
                  ),
                ),
              )}
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-28">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs.{subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>
                      {shipping === 0
                        ? "Free"
                        : `Rs.${shipping}`}
                    </span>
                  </div>

                  <hr />

                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>Rs.{total}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/placeOrder")}
                  className="mt-8 w-full bg-[#3B82F6] cursor-pointer hover:bg-[#2563EB] transition text-white h-14 rounded-xl font-semibold"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;