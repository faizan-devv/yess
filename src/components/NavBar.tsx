"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-9 px-[70px]">
      <div className="flex justify-between items-end">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120} // Specify width
            height={63} // Specify height
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center rounded-[100px] space-x-8 border border-[#3D3D3D] py-[12px] px-[51px]">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="text-white flex  items-center">
              Services <Image
            src="/images/down-white-arrow.svg"
            alt="Logo"
            width={20} 
            height={20}
            priority
          />
            </button>
            <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg hidden group-hover:block">
              <div className="py-2">
                <Link
                  href="/service1"
                  className="block px-4 py-2 hover:bg-slate-700"
                >
                  Service 1
                </Link>
                <Link
                  href="/service2"
                  className="block px-4 py-2 hover:bg-slate-700"
                >
                  Service 2
                </Link>
                <Link
                  href="/service3"
                  className="block px-4 py-2 hover:bg-slate-700"
                >
                  Service 3
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="text-white mr-[51px]"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="text-white"
          >
            FAQ
          </Link>
        </div>
        <div className="hidden md:flex self-center">
          <Button variant="outlined">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-slate-800">
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            FAQ
          </Link>
          <Button variant="outlined">Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
