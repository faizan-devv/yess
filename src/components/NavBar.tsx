"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="pt-[37px] px-[70px]">
      <div className="flex justify-between items-end">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120}
            height={63}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center rounded-[100px] space-x-8 border border-[#3D3D3D] py-[12px] px-[51px]">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
         
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-white mr-[51px] cursor-pointer"
          >
            Services
          </a>
          {/* <div className="relative group">
            <button className="text-white flex items-center">
            </button>
          </div> */}

          <Link href="/about-us" className="text-white mr-[51px]">
            About Us
          </Link>
          <Link href="/landscape" className="text-white  mr-[51px]">
          Smart Solutions
          </Link>
          <a
            href="#clients"
            onClick={(e) => scrollToSection(e, 'clients')}
            className="text-white cursor-pointer"
          >
            Partners & Clients
          </a>
        </div>
        <div className="hidden lg:flex">
          <Button variant="outlined">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white self-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {!!isOpen && (
        <div className="lg:hidden mt-4 bg-slate-800">
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Home
          </Link>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="block px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"
          >
            Services
          </a>
          <a
            href="#clients"
            onClick={(e) => scrollToSection(e, 'clients')}
            className="block px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"
          >
            Partners & Clients
          </a>
          <Link
            href="/about-us"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            About Us
          </Link>
          <Button variant="outlined">Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;