import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-4 gap-14 my-10 mt-40 text-sm px-4 md:px-12">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} className="mb-5 w-32" alt="Logo" />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="w-full md:w-2/3 text-gray-600">
            Step into a world of endless adventure with our wide collection of comic books! Explore
            legendary stories, rare editions, and exclusive merchandise—whether you're a fan of DC, Marvel, or indie comics,
            we've got something for everyone.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-medium mb-5">QUICK LINKS</p>
          <ul className="flex flex-col gap-1 text-gray-600">
          <li>
              <Link to="/shop" className="hover:text-yellow-500">Shop</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-500">Blogs</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 45889 43576</li>
            <li>comicsstore@shop.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <hr />
        <p className="py-5 text-sm text-gray-600">Copyright 2025 | Created by Dhara M.</p>
      </div>
    </>
  );
}

export default Footer;
