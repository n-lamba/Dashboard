"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaCog, FaChartBar, FaTasks, FaUsers, FaDollarSign, FaStore, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'sidebar-overlay') {
      setSidebarOpen(false);
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          {/* Left side: Brand and Tagline */}
          <div className="flex items-baseline">
            <p className="text-2xl font-[BostonAngel] text-[#FF554B]">dengo</p>
            <p className="text-[#545454] text-xs ml-2">for residential</p>
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
            <div className="flex items-center space-x-2 bg-[#F3F3F3] px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-[#64EB82] rounded-full"></span>
              <span className="text-black text-m">Active</span>
            </div>

            {/* Help Button */}
            <div className="flex items-center space-x-2 bg-[#F3F3F3] px-3 py-1 rounded-full cursor-pointer">
              <div className="bg-black text-white px-1 flex items-center justify-center rounded-sm">
                <span className="text-xs">?</span>
              </div>
              <span className="text-black text-m">Help</span>
            </div>

            {/* Profile Circle */}
            <img
              className="w-7.5 h-7 bg-gray-200 rounded-full cursor-pointer"
              src={'./images/Profile.png'}
              alt="Profile"
            /> {/* Placeholder for profile image */}
          </div>
        </header>

        <div className="flex flex-grow">
          {/* Sidebar (Mobile) */}
          <div
            id="sidebar-overlay"
            className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleOutsideClick}
          >
            <nav className={`fixed left-0 top-0 bg-white border-r border-gray-300 w-screen h-full p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
              {/* Close Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline">
                  <p className="text-2xl font-[BostonAngel] text-[#FF554B]">dengo</p>
                  <p className="text-[#545454] text-xs ml-2">for residential</p>
                </div>
                <FaTimes
                  onClick={() => setSidebarOpen(false)}
                  className="text-[#000000] cursor-pointer w-5 h-5"
                />
              </div>
              <hr className="border-t border-gray-300 mb-6 mt-4" />

              {/* Menu List */}
              <ul>
                {['/', '/program', '/insights', '/activity', '/people', '/billing', '/marketplace'].map((path, index) => {
                  const Icon = [FaHome, FaCog, FaChartBar, FaTasks, FaUsers, FaDollarSign, FaStore][index];
                  const label = ['Home', 'Program', 'Insights', 'Activity', 'People', 'Billing', 'Marketplace'][index];
                  return (
                    <li
                      key={path}
                      className={`flex items-center space-x-2 py-2 px-3 ${pathname === path ? "bg-gray-200 border-l-4 border-gray-600" : ""}`}
                    >
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
                <div className="flex items-center space-x-2 bg-[#F3F3F3] px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-[#64EB82] rounded-full"></span>
                  <span className="text-black text-m">Active</span>
                </div>

                {/* Help Button */}
                <div className="flex items-center space-x-2 bg-[#F3F3F3] px-3 py-1 rounded-full cursor-pointer">
                  <div className="bg-black text-white px-1 flex items-center justify-center rounded-sm">
                    <span className="text-xs">?</span>
                  </div>
                  <span className="text-black text-m">Help</span>
                </div>

                {/* Profile Circle */}
                <img
                  className="w-7.5 h-7 bg-gray-200 rounded-full cursor-pointer"
                  src={'./images/Profile.png'}
                  alt="Profile"
                /> {/* Placeholder for profile image */}
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
                  <li
                    key={path}
                    className={`flex items-center space-x-2 py-2 px-3 ${pathname === path ? "bg-gray-200 border-l-4 border-gray-600" : ""}`}
                  >
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
          <main className={`flex-grow p-4 bg-white transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
