import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Checkout = () => {
  const { cart, placeOrder } = useContext(AppContext);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = () => {
    const { cardNumber, expiry, cvv } = paymentDetails;

    // التحقق من صحة المدخلات
    if (!cardNumber || !expiry || !cvv) {
      alert('Please fill in all payment details.');
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Card number must be 16 digits.');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert('Expiry date must be in MM/YY format.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert('CVV must be 3 digits.');
      return;
    }

    // معالجة الطلب
    placeOrder();
    setSuccessMessage('Payment successful and order placed!');
    setPaymentDetails({ cardNumber: '', expiry: '', cvv: '' });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h1>
      {successMessage && (
        <p className="text-center text-green-500 font-bold mb-6">{successMessage}</p>
      )}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-300 mb-6">
            {cart.map((product, index) => (
              <li key={index} className="py-2 flex justify-between text-gray-700">
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Details</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (16 digits)"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry Date (MM/YY)"
              value={paymentDetails.expiry}
              onChange={handleInputChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV (3 digits)"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-md w-full mt-6 hover:bg-green-600 transition-colors"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
