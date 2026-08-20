import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Package } from "lucide-react";
import { motion } from "framer-motion";

const Order = () => {
  const { orders = [], navigate } = useContext(UserContext);

  const safeOrders = Array.isArray(orders) ? orders : [];

  if (safeOrders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7FAFF] px-5">
        <div className="text-center">
          <Package
            className="mx-auto text-[#3B82F6]"
            size={70}
          />

          <h1 className="text-4xl font-bold mt-6">
            No Orders Yet
          </h1>

          <p className="text-gray-500 mt-3">
            Looks like you haven't placed any orders.
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="mt-8 px-8 py-3 rounded-xl bg-[#3B82F6] text-white hover:bg-[#2563EB] transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFF] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Package
            className="mx-auto text-[#3B82F6]"
            size={42}
          />

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            My Orders
          </h1>

          <div className="w-16 h-[2.5px] bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 mt-4">
            Track all your smartphone orders.
          </p>
        </div>

        <div className="space-y-8">
          {safeOrders.map((order, orderIndex) => {
            const items = Array.isArray(order?.items)
              ? order.items
              : [];

            const shippingAddress = order?.shippingAddress || {};

            return (
              <motion.div
                key={order?._id || `order-${orderIndex}`}
                whileHover={{ y: -3 }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
                  <div>
                    <h2 className="font-bold text-xl">
                      #
                      {order?._id
                        ? String(order._id)
                            .slice(-8)
                            .toUpperCase()
                        : `ORDER-${orderIndex + 1}`}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {order?.createdAt
                        ? new Date(
                            order.createdAt
                          ).toLocaleDateString()
                        : "Date not available"}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end">
                    <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      {order?.orderStatus || "Processing"}
                    </span>

                    <p className="mt-3 text-gray-500">
                      Payment :{" "}
                      {order?.paymentMethod || "Cash on Delivery"}
                    </p>

                    <p className="text-gray-500">
                      Status :{" "}
                      {order?.paymentStatus || "Pending"}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {items.length > 0 ? (
                    items.map((item, itemIndex) => (
                      <div
                        key={
                          item?._id ||
                          item?.id ||
                          `item-${itemIndex}`
                        }
                        className="flex flex-col md:flex-row gap-6 border rounded-2xl p-5"
                      >
                        <img
                          src={
                            item?.image ||
                            item?.image_URL ||
                            "https://placehold.co/300x300?text=Phone"
                          }
                          alt={item?.name || "Product"}
                          className="w-28 h-28 rounded-xl object-contain bg-[#F7FAFF] p-2"
                        />

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold">
                            {item?.name || "Unknown Product"}
                          </h3>

                          <div className="flex flex-wrap gap-8 mt-4 text-gray-500">
                            <p>
                              Color :
                              <span className="ml-2 font-semibold">
                                {item?.color || "Default"}
                              </span>
                            </p>

                            <p>
                              Qty :
                              <span className="ml-2 font-semibold">
                                {item?.quantity || 1}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xl font-bold text-[#3B82F6]">
                            Rs.
                            {Number(
                              item?.price || 0
                            ).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="border rounded-2xl p-8 text-center">
                      <Package
                        className="mx-auto text-gray-400"
                        size={45}
                      />

                      <p className="text-gray-500 mt-3">
                        No items found for this order.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between gap-6">
                  <div>
                    <h3 className="font-bold mb-3">
                      Shipping Address
                    </h3>

                    <p>
                      {shippingAddress?.firstName || ""}{" "}
                      {shippingAddress?.lastName || ""}
                    </p>

                    <p>
                      {shippingAddress?.address ||
                        "Address not available"}
                    </p>

                    <p>
                      {shippingAddress?.city || ""}
                      {shippingAddress?.city &&
                      shippingAddress?.postalCode
                        ? ", "
                        : ""}
                      {shippingAddress?.postalCode || ""}
                    </p>

                    <p>
                      {shippingAddress?.phone || ""}
                    </p>
                  </div>

                  <div className="space-y-2 min-w-[250px]">
                    <div className="flex justify-between gap-20">
                      <span>Subtotal</span>
                      <span>
                        Rs.
                        {Number(
                          order?.subtotal || 0
                        ).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {Number(
                          order?.shippingFee || 0
                        ) === 0
                          ? "Free"
                          : `Rs.${Number(
                              order.shippingFee
                            ).toLocaleString()}`}
                      </span>
                    </div>

                    <div className="flex justify-between font-bold text-xl mt-3">
                      <span>Total</span>
                      <span>
                        Rs.
                        {Number(
                          order?.totalAmount || 0
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;