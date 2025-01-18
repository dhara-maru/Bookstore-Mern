import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully!");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

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

  // Navbar items with conditional "Dashboard" link
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    ...(user?.email === "admin@gmail.com" ? [{ link: "Dashboard", path: "/admin/dashboard" }] : []),
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];

  // Dropdown items
  const dropdownItems = [
    { link: "My Account", path: "/account" },
    { link: "My Orders", path: "/orders" },
    user
      ? { link: "Logout", action: handleLogout }
      : { link: "Login", path: "/login" },
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
            src="./src/assets/mainlogo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-12">
          {navItems.map(({ link, path }) => (
            <li key={path} className="relative">
              <Link
                className={`text-base uppercase cursor-pointer hover:text-yellow-500 ${
                  location.pathname === path ? "text-yellow-500" : "text-black"
                }`}
                to={path}
              >
                {link}
              </Link>
              {location.pathname === path && (
                <hr className="absolute bottom-[-8px] left-0 w-full border-none h-[1.5px] bg-yellow-500" />
              )}
            </li>
          ))}
        </ul>

        {/* Account Dropdown */}
        <div className="relative hidden lg:block">
          <button
            className="text-black text-base uppercase font-semibold"
            onClick={toggleDropdown}
          >
            {user ? user.email : "Account"}
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
              {dropdownItems.map(({ link, path, action }) => (
                <li key={link}>
                  {action ? (
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow-100"
                      onClick={() => {
                        action();
                        setDropdownOpen(false); // Close dropdown
                      }}
                    >
                      {link}
                    </button>
                  ) : (
                    <Link
                      to={path}
                      className="block px-4 py-2 text-sm text-black hover:bg-yellow-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bars icon for mobile */}
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
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <hr className="my-4 border-gray-300" />
          {dropdownItems.map(({ link, path, action }) => (
            <div key={link}>
              {action ? (
                <button
                  className="block w-full text-left text-sm px-4 py-2 text-black hover:text-yellow-600"
                  onClick={() => {
                    action();
                    setMenuOpen(false); // Close menu
                  }}
                >
                  {link}
                </button>
              ) : (
                <Link
                  to={path}
                  className="block text-sm cursor-pointer hover:text-yellow-600 text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
