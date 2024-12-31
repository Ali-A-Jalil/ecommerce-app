import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// الصور للخلفية
const backgroundImages = [
  "/assets/one.jpg", // 
  "/assets/two.jpg",
  "/assets/three.jpg",
  "/assets/four.avif",
];

// بيانات المنتجات
const categories = [
  {
    category: "Kids Clothing",
    products: [
      { id: 1, name: "Kids T-Shirt", image: "https://via.placeholder.com/150", price: 15 },
      { id: 2, name: "Kids Jeans", image: "https://via.placeholder.com/150", price: 25 },
    ],
  },
  {
    category: "Women Clothing",
    products: [
      { id: 3, name: "Dress", image: "https://via.placeholder.com/150", price: 50 },
      { id: 4, name: "Blouse", image: "https://via.placeholder.com/150", price: 35 },
    ],
  },
  {
    category: "Perfumes",
    products: [
      { id: 5, name: "Chanel No. 5", image: "https://via.placeholder.com/150", price: 100 },
      { id: 6, name: "Dior Sauvage", image: "https://via.placeholder.com/150", price: 120 },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  // إعدادات السلايدر الخاص بالخلفية
  const backgroundSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // إخفاء الأسهم
  };

  // إعدادات السلايدر الخاص بالمنتجات
  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      {/* سلايدر الخلفية */}
      <div className="background-slider">
        <Slider {...backgroundSliderSettings}>
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="background-slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </Slider>
      </div>

      {/* النص العلوي */}
      <h1 className="text-3xl font-bold mb-6 text-center text-white relative z-10">
        Welcome to Trust Store
      </h1>

      {/* سلايدر المنتجات */}
      {categories.map((category, index) => (
        <div key={index} className="mb-8 relative z-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">{category.category}</h2>
          <Slider {...productSliderSettings}>
            {category.products.map((product) => (
              <div
                key={product.id}
                className="p-4 border rounded-md shadow-md bg-white hover:scale-105 transition-transform"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-green-500 font-semibold">${product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Home;
