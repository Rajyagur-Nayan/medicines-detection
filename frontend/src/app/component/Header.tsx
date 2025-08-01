"use client";
// src/components/layout/header.tsx
import { Button } from "@/components/ui/button";
import {
  Menu,
  User,
  Tablet,
  X,
  Circle,
  Bell,
  Moon,
  ChevronRight,
} from "lucide-react"; // Import all necessary icons
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; // Import useState hook
import { LoginDialog } from "./auth/Login";
import { RegisterDialog } from "./auth/Register";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false); // State to manage profile dialog visibility, set to true to open by default
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex h-16 items-center justify-between px-4 lg:px-8 border-b border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Placeholder for actual logo image */}
        <Tablet className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold text-blue-700">MediLink</span>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-6">
        <Link // Changed from Link to a
          href="/"
          className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          Home
        </Link>
        <a // Changed from Link to a
          href="#"
          className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          Good Times
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          Scan Now
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
        >
          Help
        </a>
      </nav>

      {/* Search Input and User/Menu Icons */}
      <div className="flex items-center gap-4">
        <Button
          className="bg-blue-600 hover:bg-blue-500 cursor-pointer text-white px-8 py-3 rounded-md text-base font-semibold transition-colors duration-300"
          onClick={() => setIsLoginDialogOpen(true)}
        >
          Login
        </Button>
        {isLoginDialogOpen && (
          <LoginDialog onClose={() => setIsLoginDialogOpen(false)} />
        )}
        <Button
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-3 rounded-md text-base font-semibold transition-colors duration-300"
          onClick={() => setIsRegisterDialogOpen(true)}
        >
          Register
        </Button>
        {isRegisterDialogOpen && (
          <RegisterDialog onClose={() => setIsRegisterDialogOpen(false)} />
        )}

        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex cursor-pointer"
          onClick={() => setIsProfileDialogOpen(true)}
        >
          <User className="h-5 w-5 text-gray-600 hover:text-blue-600" />
          <span className="sr-only">User</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu} // Add onClick handler
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-600 cursor-pointer" /> // Show close icon when menu is open
          ) : (
            <Menu className="h-5 w-5 text-gray-600 cursor-pointer" /> // Show menu icon when menu is closed
          )}
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Toggle menu"}
          </span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden z-50">
          <nav className="flex flex-col items-center py-4 gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 text-base font-medium transition-colors"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Home
            </Link>
            <Link // Changed from Link to a
              href="#"
              className="text-gray-700 hover:text-blue-600 text-base font-medium transition-colors"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Good Times
            </Link>
            <Link // Changed from Link to a
              href="#"
              className="text-blue-600 font-semibold text-base"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Scan Now
            </Link>
            <Link // Changed from Link to a
              href="#"
              className="text-gray-700 hover:text-blue-600 text-base font-medium transition-colors"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Help
            </Link>

            <Button
              variant="ghost"
              className="w-full text-gray-700 hover:text-blue-600"
              onClick={() => {
                setIsProfileDialogOpen(true);
                setIsMobileMenuOpen(false); // Close mobile menu when opening dialog
              }}
            >
              <User className="h-5 w-5 mr-2" />
              User Profile
            </Button>
          </nav>
        </div>
      )}

      {/* Profile Dialog */}
      {isProfileDialogOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100]">
          {" "}
          {/* Overlay with blur */}
          <div className="bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden w-11/12 max-w-md mx-auto my-auto">
            {" "}
            {/* Dialog container */}
            {/* Dialog Header */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                onClick={() => setIsProfileDialogOpen(false)}
              >
                <X className="h-5 w-5 text-gray-600 hover:text-red-500 " />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            {/* User Info Section */}
            <div className="p-6 flex flex-col items-center gap-3">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-400">
                {/* Placeholder for actual user image */}
                <Image // Changed from Image to img
                  src="/img2.png"
                  alt="User Avatar"
                  fill
                  className="w-full h-full object-cover rounded-full" // Removed layout and objectFit props
                />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-800">
                  David Robinson
                </p>
                <p className="text-gray-500 text-sm">Joined 1 year ago</p>
              </div>
            </div>
            {/* Profile Options Section */}
            <div className="px-6 py-3">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Profile
              </h3>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Circle className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Manage user</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
            {/* Settings Options Section */}
            <div className="px-6 py-3 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Settings
              </h3>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Bell className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Notifications</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 mt-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Moon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Dark Mode</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
            {/* Sign Out Button */}
            <div className="p-6 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full cursor-pointer border-red-400 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
