import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f1eb]">

      {/* Logo */}
      <div>
        <h2 className="text-[11px] tracking-[2px] text-gray-700">
          NUTRITION BY
        </h2>

        <h1 className="text-3xl font-serif text-[#2d2d2d]">
          LOVNEET
        </h1>

        <p className="text-[10px] text-gray-500">
          Science. Soul. Sustainable Wellness.
        </p>
      </div>

      {/* Nav Links */}
      <ul className="hidden lg:flex items-center gap-10 text-[15px] font-semibold tracking-[1px] text-[#2C2C2C]">
        <li className="cursor-pointer hover:text-[#6b7452]">PROGRAMS</li>
        <li className="cursor-pointer hover:text-[#6b7452]">ABOUT</li>
        <li className="cursor-pointer hover:text-[#6b7452]">RESOURCES</li>
        <li className="cursor-pointer hover:text-[#6b7452]">CONTACT</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4 lg:gap-5">

        <button className="hidden sm:block bg-[#1f4d1f] text-white px-6 py-3 rounded-full text-xs tracking-wide hover:bg-[#55603d] transition">
          BOOK CONSULTATION
        </button>

        <div 
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f5f1eb] shadow-lg lg:hidden z-50 flex flex-col items-center py-6 border-t border-gray-200">
          <ul className="flex flex-col items-center gap-6 text-[13px] tracking-[1px] text-[#2C2C2C] w-full">
            <li className="cursor-pointer hover:text-[#6b7452]">PROGRAMS</li>
            <li className="cursor-pointer hover:text-[#6b7452]">ABOUT</li>
            <li className="cursor-pointer hover:text-[#6b7452]">RESOURCES</li>
            <li className="cursor-pointer hover:text-[#6b7452]">CONTACT</li>
            <li className="sm:hidden mt-2">
              <button className="bg-[#1f4d1f] text-white px-6 py-3 rounded-full text-xs tracking-wide hover:bg-[#55603d] transition">
                BOOK CONSULTATION
              </button>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
