"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "@/../public/Home/Logo.png";
import { useRouter } from "next/navigation";

// Import statements...

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full z-50 fixed flex flex-col">
      <div className="bg-[#2E3362] w-[100vw] h-auto lg:aspect-[1920/80] aspect-[360/50] flex justify-between items-center lg:px-[5.2vw] px-[7.77vw] relative">
        {/* Logo */}
        <Link href="/ManageProp">
          <p className="text-white font-bold text-[12px] lg:text-[25px]">TST</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-row">
          <ul className="hidden lg:flex gap-[3vw]">
            <li className="p-4">
              <Link
                href="/login"
                className="text-poppins hover:opacity-70 font-semibold text-[18px] lg:text-[14px]  md:text-[14px] sm:text-[12px] text-white bg-red-600 px-4 py-2 rounded-3xl"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="lg:hidden z-40 ml-4">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu style={{ color: "white" }} size={20} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-[#2E3362] text-center text-white`}
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <button className="hover:opacity-70 text-poppins">Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
