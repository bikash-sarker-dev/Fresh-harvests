"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaCog, FaHome, FaTimes, FaUser } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform 
        transition-transform duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className=" mb-6 hidden md:block">
            <Image
              src={"/assets/logo.png"}
              width={200}
              height={50}
              alt="logo"
            />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-gray-700 hover:text-fh-primary cursor-pointer">
              <Link
                href={"/user-dashboard"}
                className="flex items-center gap-2"
              >
                <FaHome /> Dashboard Home
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-fh-primary cursor-pointer">
              <Link
                href={"/user-dashboard/product-add"}
                className="flex items-center gap-2"
              >
                <RiFileAddFill />
                Add Product
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <Link
                href={"/user-dashboard/profile"}
                className="flex items-center gap-2"
              >
                <FaUser /> Profile
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <Link
                href={"/user-dashboard/settings"}
                className="flex items-center gap-2"
              >
                <FaCog /> Settings
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <Link href={"/"} className="flex items-center gap-2">
                <FaHome /> Go To website Home
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars className="text-xl" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
