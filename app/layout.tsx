"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaCog, FaChartBar, FaTasks, FaUsers, FaDollarSign, FaStore, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'sidebar-overlay') {
      setSidebarOpen(false);
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          {/* Left side: Brand and Tagline */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-red-600">dengo</h1>
            <p className="text-black text-xs">for residential</p>
          </div>

          {/* Right side: Hamburger Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <FaBars
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 cursor-pointer w-6 h-6"
            />
          </div>

          {/* Right side: Status, Help, and Profile (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Active Status with Green Dot */}
            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-black">Active</span>
            </div>

            {/* Help Button */}
            <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full cursor-pointer">
              <div className="bg-black text-white px-1 flex items-center justify-center rounded-sm">
                <span className="text-xs">?</span>
              </div>
              <span className="text-black"> Help</span>
            </div>

            {/* Profile Circle */}
            <div className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"></div> {/* Placeholder for profile image */}
          </div>
        </header>

        <div className="flex flex-grow">
          {/* Sidebar (Mobile) */}
          <div
            id="sidebar-overlay"
            className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleOutsideClick}
          >
            <nav className={`fixed left-0 top-0 bg-white border-r border-gray-300 w-64 h-full pl-4  transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
              {/* Close Button */}
              <div className="flex items-center"> 
              <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-red-600">dengo</h1>
            <p className="text-black text-xs">for residential</p>
          </div>
              <div className="flex justify-end  pt-2 space-x-2">
                <FaTimes
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-600 cursor-pointer w-6 h-6"
                />
              </div>
              </div>
              {/* Menu List */}
              <ul>
                {['/', '/program', '/insights', '/activity', '/people', '/billing', '/marketplace'].map((path, index) => {
                  const Icon = [FaHome, FaCog, FaChartBar, FaTasks, FaUsers, FaDollarSign, FaStore][index];
                  const label = ['Home', 'Program', 'Insights', 'Activity', 'People', 'Billing', 'Marketplace'][index];
                  return (
                    <li key={path} className={`flex items-center space-x-2 py-2 px-3 ${pathname === path ? "bg-gray-200 border-l-4 border-gray-600" : ""}`}>
                      <Icon className="w-8 h-8 p-2 text-black" />
                      <Link href={path} className={pathname === path ? "text-black font-bold" : "text-gray-600"}>
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* Help, Active Status, and Profile */}
              <div className="mt-10 flex flex-col items-start space-y-2">
                {/* Active Status with Green Dot */}
                <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 mb-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-black">Active</span>
                </div>

                {/* Help Button */}
                <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 mb-2 rounded-full cursor-pointer">
                  <div className="bg-black text-white px-1 flex items-center justify-center rounded-sm">
                    <span className="text-xs">?</span>
                  </div>
                  <span className="text-black"> Help</span>
                </div>

                {/* Profile Circle */}
                <div className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"></div> {/* Placeholder for profile image */}
              </div>
            </nav>
          </div>

          {/* Sidebar (Desktop) */}
          <nav className="hidden lg:block bg-white border-r border-gray-300 w-64 pl-4">
            <ul>
              {['/', '/program', '/insights', '/activity', '/people', '/billing', '/marketplace'].map((path, index) => {
                const Icon = [FaHome, FaCog, FaChartBar, FaTasks, FaUsers, FaDollarSign, FaStore][index];
                const label = ['Home', 'Program', 'Insights', 'Activity', 'People', 'Billing', 'Marketplace'][index];
                return (
                  <li key={path} className={`flex items-center space-x-2 py-2 px-3 ${pathname === path ? "bg-gray-200 border-l-4 border-gray-600" : ""}`}>
                    <Icon className="w-8 h-8 p-2 text-black" />
                    <Link href={path} className={pathname === path ? "text-black font-bold" : "text-gray-600"}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Main Content Area */}
          <main className={`flex-grow p-6 bg-white transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
