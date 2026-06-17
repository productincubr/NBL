import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#F8F6F3] border-b border-[#E8E4DD]">
      <div className="max-w-[1440px] mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* LEFT LOGO */}
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

        {/* CENTER MENU */}
        <nav>
          <ul className="flex items-center gap-10 text-[15px] text-[#5A5A5A]">

            <li className="font-medium text-[#2F3B2A] relative">
              Recipe AI

              <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#4D6642] rounded-full"></span>
            </li>

            <li className="hover:text-[#2F3B2A] cursor-pointer duration-300">
              Recipes
            </li>

            <li className="hover:text-[#2F3B2A] cursor-pointer duration-300">
              Meal Plans
            </li>

            <li className="hover:text-[#2F3B2A] cursor-pointer duration-300">
              Talks
            </li>

            <li className="hover:text-[#2F3B2A] cursor-pointer duration-300">
              About Me
            </li>

          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* Language */}
          <button className="flex items-center gap-1 text-[14px] text-[#5A5A5A] hover:text-[#2F3B2A]">

            <Globe size={16} />

            EN

            <span className="text-[10px]">▼</span>

          </button>

          {/* Login */}
          <button className="text-[14px] text-[#5A5A5A] hover:text-[#2F3B2A]">
            Log in
          </button>

          {/* Signup */}
          <button className="bg-[#4A5D45] text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#3E5233] transition-all duration-300">

            Sign Up

          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;