import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";
import { Search } from "lucide-react";

const mobileColors = [
  { name: "Black", code: "#000000" },
  { name: "White", code: "#FFFFFF" },
  { name: "Blue", code: "#3B82F6" },
  { name: "Red", code: "#EF4444" },
  { name: "Green", code: "#22C55E" },
  { name: "Gold", code: "#D4AF37" },
  { name: "Silver", code: "#C0C0C0" },
  { name: "Purple", code: "#A855F7" },
];

const Collection = () => {
  const {
    products,
    category,
    setCategory,
    search,
    setSearch,
    colors,
    setColors,
    maxPrice,
    setMaxPrice,
    sortPrice,
    setSortPrice,
    page,
    totalPages,
    setPage,
  } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[#F7FAFF] px-5 md:px-10 py-12">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        <aside className="bg-white rounded-xl shadow-md p-8 w-full lg:w-72 h-fit">
          <h2 className="text-xl font-semibold mb-5">Filters</h2>

          <hr className="mb-6" />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              Category
            </h3>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setPage(1);
                  setCategory("");
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition ${
                  category === ""
                    ? "bg-black text-white border-black"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <span>All Smartphones</span>
                <span className="text-xs">📱</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setPage(1);
                  setCategory(category === "android" ? "" : "android");
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition ${
                  category === "android"
                    ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <div className="text-left">
                  <p className="font-semibold">Android</p>
                  <p className="text-xs opacity-70">
                    Samsung, Xiaomi, OnePlus...
                  </p>
                </div>
                🤖
              </button>

              <button
                type="button"
                onClick={() => {
                  setPage(1);
                  setCategory(category === "iphone" ? "" : "iphone");
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition ${
                  category === "iphone"
                    ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <div className="text-left">
                  <p className="font-semibold">iPhone</p>
                  <p className="text-xs opacity-70">Apple Devices</p>
                </div>
                🍎
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-3">Price Range</h3>

            <input
              value={maxPrice}
              min={0}
              max={500000}
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                setPage(1);
              }}
              type="range"
              className="w-full accent-[#3B82F6]"
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Rs.0</span>
              <span>Rs.{maxPrice}</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-3">Colors</h3>

            <div className="flex gap-3 flex-wrap">
              {mobileColors.map((color) => (
                <button
                  type="button"
                  key={color.name}
                  onClick={() => {
                    setPage(1);

                    setColors((prev) =>
                      prev.includes(color.name)
                        ? prev.filter((item) => item !== color.name)
                        : [...prev, color.name]
                    );
                  }}
                  className={`w-7 h-7 rounded-full border cursor-pointer ${
                    colors.includes(color.name)
                      ? "ring-2 ring-[#3B82F6] ring-offset-2"
                      : ""
                  }`}
                  style={{
                    backgroundColor: color.code,
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <p className="text-gray-500">
              Showing {products?.length || 0} Products
            </p>

            <div className="flex items-center border bg-white rounded-lg px-3">
              <Search size={18} className="text-gray-400" />

              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search products..."
                className="outline-none px-3 py-2"
              />
            </div>

            <select
              value={sortPrice}
              onChange={(e) => {
                setSortPrice(e.target.value);
                setPage(1);
              }}
              className="border bg-white px-4 py-2 rounded-lg outline-none"
            >
              <option value="">Sort By Price</option>
              <option value="low-high">Price Low to High</option>
              <option value="high-low">Price High to Low</option>
            </select>
          </div>

          {products?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((item) => (
                <Card
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  brand={item.brand}
                  image={item.images?.[0]?.image_URL}
                  price={item.price}
                  newPrice={item.finalPrice}
                  discount={item.sale}
                  stock={item.stock}
                  warranty={item.warranty}
                  specifications={item.specifications}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
              <h2 className="text-2xl font-bold">No Products Found</h2>
              <p className="text-gray-500 mt-3">
                Try changing your filters or search query.
              </p>
            </div>
          )}
        </main>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, page - 2),
              Math.min(totalPages, page + 2)
            )
            .map((number) => (
              <button
                type="button"
                key={number}
                onClick={() => setPage(number)}
                className={`w-10 h-10 rounded-lg transition cursor-pointer ${
                  page === number
                    ? "bg-[#3B82F6] text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {number}
              </button>
            ))}

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-100 cursor-pointer"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Collection;