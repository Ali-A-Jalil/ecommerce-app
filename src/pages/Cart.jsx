import React from 'react';
import { useQuery } from '@tanstack/react-query';

// دالة لجلب بيانات السلة
const fetchCartItems = async () => {
  const response = await fetch('/api/cart');
  if (!response.ok) {
    throw new Error('Failed to fetch cart items');
  }
  return response.json();
};

const Cart = () => {
  const { data: cartItems = [], isLoading, error } = useQuery({
    queryKey: ['cart'], // 
    queryFn: fetchCartItems, // 
    staleTime: 5 * 60 * 1000, // 
    refetchInterval: 10 * 60 * 1000, // 
  });

  if (isLoading) return <div>Loading cart items...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
