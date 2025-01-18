import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/login";

  const clearCartOnLogout = () => {
    localStorage.removeItem('userId');  // Remove the userId from localStorage when logging out
  };

  const handleLogout = () => {
    logOut().then(() => {
      clearCartOnLogout();  // Call function to clear cart on logout
      alert("Logged out successfully!");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error('Error during logout:', error);
    });
  };

  return (
    <div>
      <button onClick={handleLogout} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
        Logout
      </button>
    </div>
  );
};

export default Logout;
