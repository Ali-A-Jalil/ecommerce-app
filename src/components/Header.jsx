import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="p-4 bg-green-500 text-white shadow-md flex justify-between items-center">
      {/* شعار الموقع */}
      <Link
        to="/"
        className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition"
      >
        E-Commerce
      </Link>

      {/* زر التحكم في الوضع */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition"
      >
        {darkMode ? (
          <>
            <FaSun size={18} className="text-gray-900" />
            Light Mode
          </>
        ) : (
          <>
            <FaMoon size={18} className="text-gray-900" />
            Dark Mode
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
