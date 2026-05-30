import React from "react";
import {
  Leaf,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B3100] text-[#e8e3d7]">

      <div className="max-w-362.5 mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20">

        {/* TOP SECTION */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr_1.2fr] xl:gap-10">

          {/* LEFT LOGO AREA */}

          <div>

            <Leaf size={36} className="text-[#b79c63] mb-5" />

            <p className="text-[10px] sm:text-xs tracking-[4px] uppercase text-[#c8bfae]">
              Nutrition By
            </p>

            <h2 className="text-[44px] sm:text-[52px] lg:text-[58px] leading-none mt-2 font-['Cormorant_Garamond']">
              LOVNEET
            </h2>

            <p className="mt-8 text-[20px] sm:text-[22px] lg:text-[24px] italic leading-relaxed text-[#d9d2c5] max-w-85">
              Personalized nutrition rooted in science,
              empathy and real-life healing.
            </p>

            <div className="flex gap-3 mt-7 text-[#b79c63] text-xl">
              ❦ ❦
            </div>

            <p className="mt-6 text-sm sm:text-[15px] text-[#c9c1b3] leading-7 max-w-70">
              Nourish your body without fear,
              pressure or restriction.
            </p>

          </div>

          {/* EXPLORE */}

          <div className="xl:border-l xl:border-[#2f5528] xl:pl-8">

            <h3 className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#c8b07c] mb-6 sm:mb-8">
              Explore
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-[#d9d2c5]">
              <li>Home</li>
              <li>About</li>
              <li>Programs</li>
              <li>Success Stories</li>
              <li>Consultation</li>
            </ul>

          </div>

          {/* PROGRAMS */}

          <div>

            <h3 className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#c8b07c] mb-6 sm:mb-8">
              Programs
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-[#d9d2c5]">
              <li>PCOS & Hormonal Health</li>
              <li>Weight Wellness</li>
              <li>Gut Health</li>
              <li>Mother & Child Nutrition</li>
              <li>Skin, Hair & Anti-Aging</li>
            </ul>

          </div>

          {/* RESOURCES */}

          <div>

            <h3 className="uppercase tracking-[4px] text-[10px] sm:text-xs text-[#c8b07c] mb-6 sm:mb-8">
              Resources
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-[#d9d2c5]">
              <li>Blog</li>
              <li>Nutrition Reels</li>
              <li>Podcast</li>
              <li>Media Features</li>
              <li>Books</li>
            </ul>

          </div>

          {/* CTA */}

          <div>

            <h2 className="text-[38px] sm:text-[44px] lg:text-[48px] leading-none font-['Cormorant_Garamond']">

              Begin with{" "}
              <span className="italic">
                clarity
              </span>

            </h2>

            <div className="w-16 h-px bg-[#7d8f68] mt-5"></div>

            <p className="mt-6 text-sm sm:text-[15px] text-[#d9d2c5] leading-7 max-w-[320px]">
              Book a personalized consultation and
              take the first calm step toward
              sustainable wellness.
            </p>

            <button className="mt-8 bg-[#efe6d6] text-[#233816] px-7 sm:px-9 py-4 rounded-full flex items-center gap-3 hover:scale-105 duration-300 text-sm sm:text-[15px]">

              Book Consultation

              <ArrowRight size={18} />

            </button>

            <div className="border-t border-[#2f5528] mt-10 pt-6 sm:pt-8">

              <div className="flex items-center gap-3 text-[#d9d2c5] text-sm sm:text-[15px] break-all">

                <Mail size={16} />

                hello@nutritionbylovneet.com

              </div>

            </div>

          </div>

        </div>

        {/* MIDDLE SECTION */}

        <div className="border-t border-[#2f5528] mt-14 lg:mt-16 pt-10 lg:pt-14">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">

            {/* SOCIAL */}

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm tracking-[3px] uppercase">

              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full border border-[#2f5528] flex items-center justify-center text-[#e8e3d7] hover:bg-[#efe6d6] hover:text-[#233816] transition">
                <FaInstagram size={16} />
              </a>

              <a href="#" aria-label="YouTube" className="h-11 w-11 rounded-full border border-[#2f5528] flex items-center justify-center text-[#e8e3d7] hover:bg-[#efe6d6] hover:text-[#233816] transition">
                <FaYoutube size={16} />
              </a>

              <a href="#" aria-label="LinkedIn" className="h-11 w-11 rounded-full border border-[#2f5528] flex items-center justify-center text-[#e8e3d7] hover:bg-[#efe6d6] hover:text-[#233816] transition">
                <FaLinkedinIn size={15} />
              </a>

              <a href="#" aria-label="Spotify" className="h-11 w-11 rounded-full border border-[#2f5528] flex items-center justify-center text-[#e8e3d7] hover:bg-[#efe6d6] hover:text-[#233816] transition">
                <FaSpotify size={16} />
              </a>

              <a href="#" aria-label="X" className="h-11 w-11 rounded-full border border-[#2f5528] flex items-center justify-center text-[#e8e3d7] hover:bg-[#efe6d6] hover:text-[#233816] transition">
                <FaXTwitter size={16} />
              </a>

            </div>

            {/* NEWSLETTER */}

            <div className="text-center lg:border-x border-[#2f5528] px-0 lg:px-10">

              <p className="italic text-[#d9d2c5] leading-7 text-sm sm:text-[15px]">
                Stay nourished with wellness notes
                and practical guidance.
              </p>

              <div className="mt-5 sm:mt-6 flex items-center border border-[#536948] rounded-full overflow-hidden max-w-107.5 mx-auto">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 sm:px-5 py-4 outline-none text-white text-sm sm:text-[15px] placeholder:text-[#b9c1ad] min-w-0"
                />

                <button className="bg-[#6e7f54] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mr-2 shrink-0">

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

            {/* POLICIES */}

            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-5 uppercase tracking-[3px] text-[10px] sm:text-sm">

              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms</span>
              <span>•</span>
              <span>Disclaimer</span>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="text-center mt-12 lg:mt-16 text-[10px] sm:text-xs tracking-[4px] sm:tracking-[5px] text-[#8d927f] uppercase">

          © 2026 Nutrition By Lovneet. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;
