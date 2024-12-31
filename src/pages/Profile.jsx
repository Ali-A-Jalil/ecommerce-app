import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { user, logoutUser } = useContext(AppContext);

  if (!user) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">You are not logged in!</h1>
        <p>Please log in to access your profile.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Nickname:</strong> {user.nickname}</p>
        <button
          onClick={logoutUser}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
