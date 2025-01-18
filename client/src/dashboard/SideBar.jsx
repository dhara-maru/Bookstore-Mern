import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen text-black">
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center px-4 py-2 text-black hover:bg-yellow-300"
              >
                <span className="material-icons">dashboard</span>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/upload"
                className="flex items-center px-4 py-2 text-black hover:bg-yellow-300"
              >
                <span className="material-icons">upload</span>
                <span className="ml-3">Upload a Book</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/upload-product"
                className="flex items-center px-4 py-2 text-black hover:bg-yellow-300"
              >
                <span className="material-icons">checkroom</span>
                <span className="ml-3">Upload Product</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dashboard/manage"
                className="flex items-center px-4 py-2 text-black hover:bg-yellow-300"
              >
                <span className="material-icons">inbox</span>
                <span className="ml-3">Manage Books & Products</span>
              </Link>
            </li>
          
  

            <li>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-black hover:bg-yellow-300"
              >
                <span className="material-icons">person_add</span>
                <span className="ml-3">Sign In</span>
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>

      {/* Main Content
      <div className="flex-1 p-4">
       
      </div> */}
    </div>
  );
};

export default SideBar;
