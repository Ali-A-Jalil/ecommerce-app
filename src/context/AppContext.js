import React, { createContext, useState } from 'react';

// إنشاء السياق
export const AppContext = createContext();

// إنشاء المزود
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart!`);
  };
  

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]);
    alert('Order placed successfully!');
  };

  const loginUser = (userInfo) => {
    setUser(userInfo);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        favorites,
        orders,
        user,
        addToCart,
        addToFavorites,
        placeOrder,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
