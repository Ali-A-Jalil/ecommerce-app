import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser } = useContext(AppContext);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!nickname) {
      alert('Please enter your nickname.');
      return;
    }
    loginUser({
      name: 'John Doe',
      nickname,
      avatar: 'https://via.placeholder.com/40',
    });
    alert('Login Successful!');
    navigate('/profile'); // إعادة التوجيه إلى صفحة الملف الشخصي
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="border p-2 rounded-md w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
