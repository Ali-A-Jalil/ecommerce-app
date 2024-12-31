import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaSearch } from 'react-icons/fa';

// دالة لجلب المنتجات من API
const fetchProducts = async () => {
  const response = await fetch('/data/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products;
};

const Products = () => {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
  

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // تصفية وفرز المنتجات
  const filteredProducts = products
    .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'low-to-high') return a.price - b.price;
      if (sortOption === 'high-to-low') return b.price - a.price;
      return 0;
    });

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Products</h1>

      {/* شريط البحث والفرز */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* البحث */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border p-2 rounded-md shadow-md"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

        {/* الفرز */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded-md shadow-md"
        >
          <option value="default">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* قائمة الفئات */}
      <div className="flex gap-4 mb-6">
        {['All', 'Beauty', 'Clothing', 'Accessories'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No products found!</p>
        )}
      </div>
    </div>
  );
};

export default Products;
