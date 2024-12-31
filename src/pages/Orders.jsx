import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Orders = () => {
  const { orders } = useContext(AppContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You haven't placed any orders yet!</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="border-b pb-4 mb-4">
                <h2 className="text-lg font-semibold">{order.name}</h2>
                <p>Price: ${order.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
