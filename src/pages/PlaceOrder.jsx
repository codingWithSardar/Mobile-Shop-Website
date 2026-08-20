import React, { useContext, useMemo, useState } from "react";
import { CreditCard, MapPin, Truck } from "lucide-react";
import { UserContext } from "../context/UserContext";

const PlaceOrder = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const { placeOrder, cartItems } = useContext(UserContext);

  const handleChange = (e) => {
    setAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    placeOrder(address, paymentMethod);
  };

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
    <div className="min-h-screen bg-[#F7FAFF] py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Secure Checkout
          </h1>

          <div className="w-20 h-[2.5px] bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-5">
            Complete your purchase securely.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#3B82F6]" />
                <h2 className="text-2xl font-bold">
                  Shipping Address
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="firstName"
                  value={address.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <input
                  name="lastName"
                  value={address.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <input
                  type="email"
                  name="email"
                  value={address.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <input
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <input
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <input
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="border rounded-xl h-14 px-4 outline-none focus:border-[#3B82F6]"
                />

                <textarea
                  rows={4}
                  name="address"
                  value={address.address}
                  onChange={handleChange}
                  placeholder="Complete Address"
                  className="md:col-span-2 border rounded-xl p-4 outline-none focus:border-[#3B82F6]"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-[#3B82F6]" />
                <h2 className="text-2xl font-bold">
                  Payment Method
                </h2>
              </div>

              <label className="border rounded-xl p-5 flex justify-between items-center cursor-pointer">
                <span>Cash On Delivery</span>

                <input
                  type="radio"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                  className="accent-[#3B82F6]"
                />
              </label>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow p-8 sticky top-28">
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
                    {shipping === 0 ? "Free" : `Rs.${shipping}`}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>Rs.{total}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className="mt-8 w-full h-14 rounded-xl bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                <Truck size={18} />
                <span>
                  Estimated Delivery: 3-5 Business Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;