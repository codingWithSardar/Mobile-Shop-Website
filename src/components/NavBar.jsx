import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Phones", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  const {
    wishListProducts,
    totalCount,
    navigate,
    logout,
  } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#FFFFF0]/90 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/10">
        <div className="flex items-center justify-between px-4 py-4 md:px-7 lg:px-10">
          <div className="flex items-center lg:gap-20 md:gap-14">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold text-blue-700 tracking-tight whitespace-nowrap"
            >
              MOBILE <span className="text-black">HUB</span>
            </Link>

            <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              {navLinks.map((item) => (
                <li
                  key={item.path}
                  className="cursor-pointer flex flex-col gap-1 items-center"
                >
                  <Link
                    to={item.path}
                    className={`transition-colors hover:text-blue-700 ${
                      location.pathname === item.path
                        ? "text-blue-700"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  {location.pathname === item.path && (
                    <hr className="h-[2.5px] w-2/3 border-none bg-blue-700 rounded-full" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5 md:gap-8">
            <Link
              to="/wishlist"
              className="relative text-gray-700 hover:text-blue-700 transition-colors"
            >
              <Heart size={22} />

              {wishListProducts.length > 0 && (
                <p className="absolute h-3 w-3 rounded-full bg-red-600 -top-1 -right-1 ring-2 ring-[#FFFFF0]" />
              )}
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-700 transition-colors"
            >
              <ShoppingCart size={22} />

              {totalCount > 0 && (
                <p className="absolute bg-blue-700 text-white font-semibold h-5 w-5 rounded-full flex items-center justify-center -top-2 -right-2 text-xs">
                  {totalCount}
                </p>
              )}
            </Link>

            <div className="relative group">
              <User
                size={24}
                className="cursor-pointer text-gray-700 hover:text-blue-700 transition-colors"
              />

              <div className="absolute right-0 top-9 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-2">
                  <p
                    onClick={() => navigate("/order")}
                    className="px-4 py-3 hover:bg-[#FFFFF0] cursor-pointer text-sm"
                  >
                    My Orders
                  </p>

                  <p
                    onClick={() => {
                      scrollTo(0, 0);
                      navigate("/about");
                    }}
                    className="px-4 py-3 hover:bg-[#FFFFF0] cursor-pointer text-sm"
                  >
                    About Us
                  </p>

                  <p
                    onClick={logout}
                    className="px-4 py-3 text-red-500 hover:bg-red-50 cursor-pointer text-sm"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-700 cursor-pointer"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <h2 className="text-xl font-bold text-blue-700">
              MOBILE <span className="text-black">HUB</span>
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg transition font-medium ${
                  location.pathname === item.path
                    ? "bg-blue-700 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <hr className="my-4" />

            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <Heart size={18} />
                Wishlist
              </span>

              <span className="bg-blue-700 text-white font-semibold px-2 rounded-full text-xs">
                {wishListProducts.length}
              </span>
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </span>

              <span className="bg-blue-700 text-white font-semibold px-2 rounded-full text-xs">
                {totalCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;