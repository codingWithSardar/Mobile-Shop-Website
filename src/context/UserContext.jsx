import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import allProducts from "../data/products";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [colors, setColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortPrice, setSortPrice] = useState("");
  const [brand, setBrand] = useState("");

  const [user, setUser] = useState(null);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [orders, setOrders] = useState([]);

  const fetchData = () => {
    let filteredProducts = [...allProducts];

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (brand) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.brand?.toLowerCase() === brand.toLowerCase()
      );
    }

    if (search) {
      const searchText = search.toLowerCase();

      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchText) ||
          product.brand?.toLowerCase().includes(searchText) ||
          product.category?.toLowerCase().includes(searchText)
      );
    }

    if (colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors?.some((color) => colors.includes(color))
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.finalPrice <= maxPrice
    );

    if (sortPrice === "low-high") {
      filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);
    }

    if (sortPrice === "high-low") {
      filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);
    }

    const productsPerPage = 12;

    const calculatedTotalPages = Math.max(
      1,
      Math.ceil(filteredProducts.length / productsPerPage)
    );

    setTotalPages(calculatedTotalPages);

    const currentPage = Math.min(page, calculatedTotalPages);

    const startIndex = (currentPage - 1) * productsPerPage;

    setProducts(
      filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage
      )
    );
  };

  const getCurrentUser = () => {
    try {
      const savedUser = localStorage.getItem("mobileShopUser");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  const loginUser = (userData) => {
    localStorage.setItem(
      "mobileShopUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("mobileShopUser");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/register");
  };

  const wishProducts = () => {
    try {
      const savedWishlist =
        JSON.parse(
          localStorage.getItem("mobileShopWishlist")
        ) || [];

      const wishlistProducts = allProducts.filter((product) =>
        savedWishlist.includes(product._id)
      );

      setWishListProducts(wishlistProducts);
    } catch {
      setWishListProducts([]);
    }
  };

  const toggleWishList = (id) => {
    let wishlist =
      JSON.parse(
        localStorage.getItem("mobileShopWishlist")
      ) || [];

    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(
        (productId) => productId !== id
      );

      toast.success("Removed from wishlist");
    } else {
      wishlist.push(id);
      toast.success("Added to wishlist");
    }

    localStorage.setItem(
      "mobileShopWishlist",
      JSON.stringify(wishlist)
    );

    wishProducts();
  };

  const clearWishlist = () => {
    if (
      !window.confirm(
        "Are you sure you want to clear your wishlist?"
      )
    ) {
      return;
    }

    localStorage.removeItem("mobileShopWishlist");
    setWishListProducts([]);
    toast.success("Wishlist cleared");
  };

  const getSavedCart = () => {
    try {
      const savedCart =
        JSON.parse(
          localStorage.getItem("mobileShopCart")
        ) || [];

      return Array.isArray(savedCart) ? savedCart : [];
    } catch {
      return [];
    }
  };

  const fetchCartData = () => {
    const savedCart = getSavedCart();

    const populatedCart = savedCart
      .map((cartItem) => {
        const product = allProducts.find(
          (item) => item._id === cartItem.productId
        );

        if (!product) return null;

        return {
          ...product,
          cart: {
            [cartItem.color || "Default"]:
              cartItem.quantity,
          },
        };
      })
      .filter(Boolean);

    setCartItems(populatedCart);

    setTotalCount(
      savedCart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      )
    );
  };

  const getCartCount = () => {
    const savedCart = getSavedCart();

    const count = savedCart.reduce(
      (total, item) =>
        total + Number(item.quantity || 0),
      0
    );

    setTotalCount(count);
  };

  const addToCart = (
    id,
    color = "",
    quantity = 1
  ) => {
    const product = allProducts.find(
      (item) => item._id === id
    );

    if (!product) {
      toast.error("Product not found");
      return;
    }

    let cart = getSavedCart();

    const existingItem = cart.find(
      (item) =>
        item.productId === id &&
        item.color === color
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId: id,
        color,
        quantity,
      });
    }

    localStorage.setItem(
      "mobileShopCart",
      JSON.stringify(cart)
    );

    fetchCartData();

    toast.success("Product added to cart");
  };

  const removeFromCart = (
    productId,
    color = ""
  ) => {
    let cart = getSavedCart();

    cart = cart.filter(
      (item) =>
        !(
          item.productId === productId &&
          item.color === color
        )
    );

    localStorage.setItem(
      "mobileShopCart",
      JSON.stringify(cart)
    );

    fetchCartData();

    toast.success("Product removed from cart");
  };

  const updateCartQuantity = (
    productId,
    color = "",
    quantity = 1
  ) => {
    let cart = getSavedCart();

    const item = cart.find(
      (cartItem) =>
        cartItem.productId === productId &&
        cartItem.color === color
    );

    if (item) {
      item.quantity = Math.max(1, Number(quantity));
    }

    localStorage.setItem(
      "mobileShopCart",
      JSON.stringify(cart)
    );

    fetchCartData();
  };

  const placeOrder = (
    shippingAddress,
    paymentMethod
  ) => {
    const cart = getSavedCart();

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderItems = cart
      .map((cartItem) => {
        const product = allProducts.find(
          (item) => item._id === cartItem.productId
        );

        if (!product) return null;

        return {
          _id: product._id,
          name: product.name,
          image:
            product.images?.[0]?.image_URL || "",
          price: product.finalPrice,
          quantity: cartItem.quantity,
          color: cartItem.color || "Default",
        };
      })
      .filter(Boolean);

    const subtotal = orderItems.reduce(
      (total, item) =>
        total +
        Number(item.price) *
          Number(item.quantity),
      0
    );

    const shippingFee =
      subtotal > 5000 ? 0 : subtotal > 0 ? 300 : 0;

    const totalAmount = subtotal + shippingFee;

    const newOrder = {
      _id: Date.now().toString(),
      user,
      items: orderItems,
      shippingAddress,
      paymentMethod,
      subtotal,
      shippingFee,
      totalAmount,
      orderStatus: "Processing",
      paymentStatus:
        paymentMethod === "Cash on Delivery"
          ? "Pending"
          : "Paid",
      createdAt: new Date().toISOString(),
    };

    const savedOrders =
      JSON.parse(
        localStorage.getItem("mobileShopOrders")
      ) || [];

    savedOrders.unshift(newOrder);

    localStorage.setItem(
      "mobileShopOrders",
      JSON.stringify(savedOrders)
    );

    localStorage.removeItem("mobileShopCart");

    setCartItems([]);
    setTotalCount(0);
    setOrders(savedOrders);

    toast.success("Order placed successfully");

    navigate("/order");
  };

  const getMyOrders = () => {
    try {
      const savedOrders =
        JSON.parse(
          localStorage.getItem("mobileShopOrders")
        ) || [];

      setOrders(
        Array.isArray(savedOrders)
          ? savedOrders
          : []
      );
    } catch {
      setOrders([]);
    }
  };

  useEffect(() => {
    getCurrentUser();
    fetchCartData();
    wishProducts();
    getMyOrders();
  }, []);

  useEffect(() => {
    fetchData();
  }, [
    category,
    search,
    colors,
    maxPrice,
    sortPrice,
    brand,
    page,
  ]);

  const value = {
    fetchData,
    navigate,
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
    brand,
    setBrand,
    page,
    setPage,
    totalPages,
    user,
    setUser,
    loginUser,
    logout,
    toggleWishList,
    wishProducts,
    wishListProducts,
    setWishListProducts,
    clearWishlist,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    fetchCartData,
    getCartCount,
    totalCount,
    orders,
    placeOrder,
    getMyOrders,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;