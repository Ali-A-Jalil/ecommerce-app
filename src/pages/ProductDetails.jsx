import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FaStar, FaCartPlus, FaHeart } from 'react-icons/fa';

// دالة لجلب المنتج بناءً على ID
const fetchProductById = async (id) => {
  const response = await fetch(`/data/products.json/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id], // 
    queryFn: () => fetchProductById(id), //
    staleTime: 5 * 60 * 1000, // 
    refetchInterval: 10 * 60 * 1000, // 
  });
  const renderStars = (rating) => (
    Array(5)
      .fill()
      .map((_, index) => (
        <FaStar
          key={index}
          className={`text-xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      ))
  );

  if (isLoading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            {renderStars(product.rating || 0)}
            <span className="text-gray-500 text-sm">({product.rating || 0} stars)</span>
          </div>
          <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
