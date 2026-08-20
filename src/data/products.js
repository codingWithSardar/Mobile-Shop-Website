const products = [
  {
    _id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 449999,
    finalPrice: 419999,
    sale: 7,
    stock: 12,
    warranty: "1 Year Official Warranty",
    category: "iphone",
    colors: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
    featured: true,
    bestSeller: true,
    description:
      "iPhone 15 Pro Max with A17 Pro chip, titanium design and a professional camera system.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1592286927505-1def25115558?w=1000",
      },
    ],
    specifications: {
      display: "6.7 inch",
      battery: "4441 mAh",
      ram: "8GB",
      storage: "256GB",
    },
  },

  {
    _id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 399999,
    finalPrice: 374999,
    sale: 6,
    stock: 9,
    warranty: "1 Year Official Warranty",
    category: "iphone",
    colors: ["Desert Titanium", "Natural Titanium", "Black Titanium"],
    featured: true,
    bestSeller: true,
    description:
      "iPhone 16 Pro with A18 Pro performance, titanium construction and advanced photography features.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1592286927505-1def25115558?w=1000",
      },
    ],
    specifications: {
      display: "6.3 inch",
      battery: "3582 mAh",
      ram: "8GB",
      storage: "256GB",
    },
  },

  {
    _id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    price: 499999,
    finalPrice: 469999,
    sale: 6,
    stock: 7,
    warranty: "1 Year Official Warranty",
    category: "iphone",
    colors: ["Desert Titanium", "White Titanium", "Black Titanium"],
    featured: true,
    bestSeller: true,
    description:
      "The ultimate iPhone experience with A18 Pro chip, large display and exceptional camera performance.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=1000",
      },
    ],
    specifications: {
      display: "6.9 inch",
      battery: "4685 mAh",
      ram: "8GB",
      storage: "512GB",
    },
  },

  {
    _id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: 299999,
    finalPrice: 274999,
    sale: 8,
    stock: 15,
    warranty: "1 Year Official Warranty",
    category: "iphone",
    colors: ["Black", "Blue", "Green", "Pink"],
    featured: true,
    bestSeller: false,
    description:
      "iPhone 15 featuring a beautiful Super Retina display, A16 Bionic chip and advanced dual cameras.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000",
      },
    ],
    specifications: {
      display: "6.1 inch",
      battery: "3349 mAh",
      ram: "6GB",
      storage: "128GB",
    },
  },

  {
    _id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 279999,
    finalPrice: 249999,
    sale: 11,
    stock: 8,
    warranty: "1 Year Official Warranty",
    category: "iphone",
    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    featured: false,
    bestSeller: true,
    description:
      "iPhone 14 Pro with Dynamic Island, A16 Bionic chip and a powerful Pro camera system.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=1000",
      },
    ],
    specifications: {
      display: "6.1 inch",
      battery: "3200 mAh",
      ram: "6GB",
      storage: "256GB",
    },
  },

  {
    _id: "iphone-13",
    name: "iPhone 13",
    brand: "Apple",
    price: 219999,
    finalPrice: 199999,
    sale: 9,
    stock: 18,
    warranty: "1 Year Warranty",
    category: "iphone",
    colors: ["Midnight", "Blue", "Pink", "Starlight"],
    featured: false,
    bestSeller: false,
    description:
      "iPhone 13 delivers smooth performance, excellent cameras and long-lasting battery life.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1000",
      },
    ],
    specifications: {
      display: "6.1 inch",
      battery: "3227 mAh",
      ram: "4GB",
      storage: "128GB",
    },
  },

  {
    _id: "samsung-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    price: 449999,
    finalPrice: 419999,
    sale: 7,
    stock: 10,
    warranty: "1 Year Official Warranty",
    category: "android",
    colors: ["Titanium Black", "Titanium Gray", "Titanium Blue"],
    featured: true,
    bestSeller: true,
    description:
      "Galaxy S25 Ultra combines powerful performance, Galaxy AI, S Pen functionality and an advanced camera system.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1000",
      },
    ],
    specifications: {
      display: "6.9 inch",
      battery: "5000 mAh",
      ram: "12GB",
      storage: "512GB",
    },
  },

  {
    _id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 399999,
    finalPrice: 369999,
    sale: 8,
    stock: 8,
    warranty: "1 Year Official Warranty",
    category: "android",
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],
    featured: true,
    bestSeller: true,
    description:
      "Galaxy S24 Ultra features a titanium frame, Snapdragon performance, S Pen and powerful AI capabilities.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=1000",
      },
    ],
    specifications: {
      display: "6.8 inch",
      battery: "5000 mAh",
      ram: "12GB",
      storage: "256GB",
    },
  },

  {
    _id: "google-pixel-9-pro",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: 299999,
    finalPrice: 274999,
    sale: 8,
    stock: 11,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Obsidian", "Porcelain", "Hazel"],
    featured: true,
    bestSeller: true,
    description:
      "Pixel 9 Pro delivers Google's best camera experience with powerful AI and a clean Android interface.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
      },
    ],
    specifications: {
      display: "6.3 inch",
      battery: "4700 mAh",
      ram: "16GB",
      storage: "256GB",
    },
  },

  {
    _id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 249999,
    finalPrice: 229999,
    sale: 8,
    stock: 14,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Black", "Blue", "White"],
    featured: true,
    bestSeller: true,
    description:
      "OnePlus 13 delivers flagship performance with a high-refresh-rate display and ultra-fast charging.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1000",
      },
    ],
    specifications: {
      display: "6.82 inch",
      battery: "6000 mAh",
      ram: "12GB",
      storage: "256GB",
    },
  },

  {
    _id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    price: 319999,
    finalPrice: 294999,
    sale: 8,
    stock: 6,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Black", "White", "Silver"],
    featured: true,
    bestSeller: false,
    description:
      "Xiaomi 15 Ultra combines flagship Snapdragon performance with a premium Leica camera system.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
      },
    ],
    specifications: {
      display: "6.73 inch",
      battery: "5410 mAh",
      ram: "16GB",
      storage: "512GB",
    },
  },

  {
    _id: "nothing-phone-3",
    name: "Nothing Phone 3",
    brand: "Nothing",
    price: 189999,
    finalPrice: 174999,
    sale: 8,
    stock: 13,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Black", "White"],
    featured: false,
    bestSeller: false,
    description:
      "Nothing Phone 3 features a unique transparent-inspired design, smooth performance and a clean software experience.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=1000",
      },
    ],
    specifications: {
      display: "6.7 inch",
      battery: "5000 mAh",
      ram: "12GB",
      storage: "256GB",
    },
  },

  {
    _id: "samsung-galaxy-z-fold-6",
    name: "Samsung Galaxy Z Fold 6",
    brand: "Samsung",
    price: 499999,
    finalPrice: 459999,
    sale: 8,
    stock: 5,
    warranty: "1 Year Official Warranty",
    category: "android",
    colors: ["Silver", "Navy", "Pink"],
    featured: true,
    bestSeller: false,
    description:
      "Galaxy Z Fold 6 brings a premium foldable design, multitasking experience and flagship Galaxy performance.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1000",
      },
    ],
    specifications: {
      display: "7.6 inch",
      battery: "4400 mAh",
      ram: "12GB",
      storage: "512GB",
    },
  },

  {
    _id: "oppo-find-x8-pro",
    name: "OPPO Find X8 Pro",
    brand: "OPPO",
    price: 279999,
    finalPrice: 259999,
    sale: 7,
    stock: 9,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Space Black", "Pearl White"],
    featured: false,
    bestSeller: false,
    description:
      "OPPO Find X8 Pro combines premium design, powerful performance and an advanced Hasselblad camera system.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
      },
    ],
    specifications: {
      display: "6.78 inch",
      battery: "5910 mAh",
      ram: "16GB",
      storage: "512GB",
    },
  },

  {
    _id: "vivo-x200-pro",
    name: "Vivo X200 Pro",
    brand: "Vivo",
    price: 299999,
    finalPrice: 279999,
    sale: 7,
    stock: 8,
    warranty: "1 Year Warranty",
    category: "android",
    colors: ["Titanium Gray", "Black"],
    featured: false,
    bestSeller: true,
    description:
      "Vivo X200 Pro offers flagship performance, exceptional portrait photography and a large high-quality display.",
    images: [
      {
        image_URL:
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000",
      },
    ],
    specifications: {
      display: "6.78 inch",
      battery: "6000 mAh",
      ram: "16GB",
      storage: "512GB",
    },
  },
];

export default products;
