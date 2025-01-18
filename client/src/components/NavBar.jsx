import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";


// Icons
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const {user} = useContext(AuthContext);

  //console.log(user);
  
const location = useLocation();

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Navbar items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 transition-all ease-in left-0 w-full z-50 ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-4 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="./src/assets/mainlogo.png" // Replace with your logo path
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-12">
  {navItems.map(({ link, path }) => (
    <li key={path} className="relative">
      <Link
        className="text-base uppercase cursor-pointer hover:text-yellow-500 text-black"
        to={path}
      >
        {link}
      </Link>
      {/* Show <hr> only if the link is active */}
      {location.pathname === path && (
  <hr className="absolute bottom-[-8px] left-0 w-full border-none h-[1.5px] bg-yellow-500" />
)}
    </li>
  ))}
</ul>
{
  user ? (
    <span className="text-base text-black font-semibold">
      {user.email}
    </span>
  ) : (
    ""
  )
}

        {/* Bars icon visible on large screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <FaXmark className="text-black h-6 w-6" />
          ) : (
            <FaBarsStaggered className="text-black h-6 w-6" />
          )}

        
        </button>

        {/* Show bars icon on large screens (for menu toggle) */}
        <button
          onClick={toggleMenu}
          className="hidden lg:block text-black focus:outline-none"
        >
          <FaBarsStaggered className="text-black h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="space-y-4 px-6 py-8">
          {navItems.map(({ link, path }) => (
            <Link
              className="block text-base uppercase cursor-pointer hover:text-yellow-600 text-black"
              to={path}
              key={path}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
