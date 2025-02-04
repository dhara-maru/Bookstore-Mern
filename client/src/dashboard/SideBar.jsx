// SideBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen text-black">
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link to="/admin/dashboard" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">dashboard</span>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/upload" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">upload</span>
                <span className="ml-3">Upload a Book</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/upload-product" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">checkroom</span>
                <span className="ml-3">Upload Product</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/edit-book" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">edit</span>
                <span className="ml-3">Edit Book</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/delete-book" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">delete</span>
                <span className="ml-3">Delete Book</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/edit-product" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">edit</span>
                <span className="ml-3">Edit Product</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/delete-product" className="flex items-center px-4 py-2 text-black hover:bg-yellow-300">
                <span className="material-icons">delete</span>
                <span className="ml-3">Delete Product</span>
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
