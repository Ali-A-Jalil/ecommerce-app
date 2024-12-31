import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No favorite items yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md bg-white">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
