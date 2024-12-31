import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { cart, favorites, user, logoutUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // إعادة التوجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
  };

  return (
    <nav className="bg-red-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* شعار الموقع وروابط الصفحات */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition">
            E-Commerce
          </Link>
          <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
          <Link to="/favorites" className="hover:text-yellow-300 transition">Favorites</Link>
          <Link to="/orders" className="hover:text-yellow-300 transition">Orders</Link>
        </div>

        {/* أيقونات السلة والمفضلة وتسجيل الدخول */}
        <div className="flex items-center gap-6">
          {/* أيقونة السلة */}
          <div className="relative cursor-pointer">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            )}
          </div>

          {/* أيقونة المفضلة */}
          <div className="relative cursor-pointer">
            <FaHeart size={24} />
            {favorites.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {favorites.length}
              </span>
            )}
          </div>

          {/* تسجيل الدخول أو معلومات المستخدم */}
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt="User"
                className="w-8 h-8 rounded-full border border-yellow-400"
              />
              <div className="text-sm">
                <p className="font-semibold">{user.nickname}</p>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500 text-xs underline"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hover:text-yellow-300 flex items-center gap-2 transition">
              <FaUserCircle size={24} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
