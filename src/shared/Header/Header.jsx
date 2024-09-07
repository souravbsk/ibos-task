import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo/Logo.png";
import { BsBucket } from "react-icons/bs";
import { CartContext } from "../../Providers/CartProvider";
import { AuthContext } from "../../Providers/AuthProviders";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const cartInfo = useContext(CartContext);

  const userName = user?.displayName?.split(" ")[0];

  const handleLogOut = () => {
    LogOut();
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <nav className="max-w-screen-xl mx-auto grid grid-cols-3 items-center py-4 px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex justify-start">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Menu Section - Hidden in Mobile, Shown in Desktop */}
        <div className="hidden md:flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* User Section */}
        <div className="flex md:col-span-1 col-span-2 justify-end items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <BsBucket className="text-3xl text-gray-700" />
            <span className="absolute -bottom-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
              {cartInfo?.productLength}
            </span>
          </Link>

          {/* User and Logout/Sign In */}
          {user ? (
            <div className="flex items-center gap-4">
              {user?.photoURL ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="px-4 py-2 bg-blue-600 hover:text-black text-white rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <p className="hidden md:block text-gray-700">Hi, {userName}</p>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 text-2xl rounded-md">
              <FiLogIn />

              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowNav(!showNav)}
            className="md:hidden text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showNav && (
          <div className="col-span-3 md:hidden bg-white shadow-md mt-2 rounded-md">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <Link
                  to="/"
                  className="text-lg text-gray-700 hover:text-blue-500"
                  onClick={() => setShowNav(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-lg text-gray-700 hover:text-blue-500"
                  onClick={() => setShowNav(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-lg text-gray-700 hover:text-blue-500"
                  onClick={() => setShowNav(false)}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-lg text-gray-700 hover:text-blue-500"
                  onClick={() => setShowNav(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
