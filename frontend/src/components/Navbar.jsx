import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-16 py-6 bg-[#f5f1eb]">

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
      <ul className="hidden lg:flex items-center gap-10 text-[13px] tracking-[1px] text-[#2C2C2C]">
        <li className="cursor-pointer hover:text-[#6b7452]">PROGRAMS</li>
        <li className="cursor-pointer hover:text-[#6b7452]">ABOUT</li>
        <li className="cursor-pointer hover:text-[#6b7452]">RESOURCES</li>
        <li className="cursor-pointer hover:text-[#6b7452]">CONTACT</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="bg-[#6B704C] text-white px-6 py-3 rounded-full text-xs tracking-wide hover:bg-[#55603d] transition">
          BOOK CONSULTATION
        </button>

        <div className="text-3xl cursor-pointer">
          ☰
        </div>

      </div>

    </nav>
  );
};

export default Navbar;