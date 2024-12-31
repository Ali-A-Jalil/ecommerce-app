import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* القسم العلوي */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-1">
              <li>About Trust</li>
              <li>Careers</li>
              <li>Trust Science</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Shop with Us</h3>
            <ul className="space-y-1">
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Your Addresses</li>
              <li>Your Lists</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-1">
              <li>Sell on Trust</li>
              <li>Advertise Your Products</li>
              <li>Fulfillment by Trust</li>
              <li>Supply to Trust</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="space-y-1">
              <li>Help</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Replacements</li>
              <li>Trust App Download</li>
            </ul>
          </div>
        </div>
      </div>

      {/* القسم الأوسط */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <div className="flex gap-4">
            <button className="border border-gray-600 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm">
              English
            </button>
            <button className="border border-gray-600 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm">
              Egypt
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Trust Store. All rights reserved.
          </p>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
            <div>
              <p>Advertising</p>
              <p>Audible</p>
            </div>
            <div>
              <p>Sell on Trust</p>
              <p>IMDb</p>
            </div>
            <div>
              <p>Web Services</p>
              <p>Alexa</p>
            </div>
            <div>
              <p>Goodreads</p>
              <p>Shopbop</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
