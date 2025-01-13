import React from "react";
import { HiArrowSmRight, HiSupport, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-4 text-center text-xl font-bold bg-gray-900">
        My Dashboard
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-2 mt-4">
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiChartPie className="mr-3 text-lg" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiViewBoards className="mr-3 text-lg" />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiInbox className="mr-3 text-lg" />
              Inbox
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiUser className="mr-3 text-lg" />
              Users
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiShoppingBag className="mr-3 text-lg" />
              Products
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiArrowSmRight className="mr-3 text-lg" />
              Sign In
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiTable className="mr-3 text-lg" />
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-700 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiChartPie className="mr-3 text-lg" />
              Upgrade to Pro
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiViewBoards className="mr-3 text-lg" />
              Documentation
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-700">
              <HiSupport className="mr-3 text-lg" />
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
