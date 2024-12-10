import React from "react";
import Link from "next/link";
import { Heart, Search } from "lucide-react";

const Header = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#F5F5F5] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <img
          src="icon.svg"
          alt="icon"
          width={24}
          height={24}
          className="bg-gray-100"
        />

        <ul className="flex space-x-6 py-3 text-black">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/store" className="leading-[14px]">
              Find a Store
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/contact-us" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/join-us" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="/login" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <img
            src="nike_logo.png"
            alt="Nike Logo"
            className="md:w-[78px] sm:w-[60px] w-[30px]"
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 items-center justify-center flex-grow text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <div className="flex space-x-6 justify-center">
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              New & Featured
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              Men
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              Women
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              Kids
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              Sale
            </Link>
            <Link href="#" className="hover:text-black whitespace-nowrap gap-4">
              SNKRS
            </Link>
          </div>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-5 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F5F5F5] border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none w-64"
            />
          </div>
          <div className="flex items-center gap-5">
            <Heart className="text-gray-700 w-4 h-4 cursor-pointer hover:text-black" />
            <Link href="/cart">
              <img
                src="icons/shoppingcart.png"
                alt="cart"
                className="text-gray-700 w-4 h-4 cursor-pointer hover:text-black"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F5F5F5] border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline none w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
