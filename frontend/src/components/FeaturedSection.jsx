import React from "react";

import vogue from "../assets/vogue.png";
import financial from "../assets/financial.png";
import business from "../assets/business.png";
import weekend from "../assets/weekend.png";
import readers from "../assets/readers.png";
import economic from "../assets/economic.png";


const FeaturedSection = () => {

  const logoBoxClass = "flex h-9 w-28 sm:h-10 sm:w-32 md:h-11 md:w-36 items-center justify-center shrink-0";

  const logos = [
    vogue,
    financial,
    business,
    weekend,
    readers,
    economic,
  ];

  return (
    <section className="w-full overflow-hidden pt-12">

      {/* TOP MOVING LOGOS BAR */}
      <div className="bg-[#193C0F] py-6 overflow-hidden">

        <div className="max-w-6xl mx-auto flex items-center gap-6 px-6">

          {/* Static label on the left with inline arrow */}
          <div className="text-white font-medium whitespace-nowrap flex items-center gap-3">
            <span>As featured in</span>
            <span className="text-white leading-none text-2xl" aria-hidden="true">→</span>
          </div>

          {/* Scrolling logos to the right of the label */}
          <div className="flex-1 overflow-hidden">
            <div className="marquee-track animate-marquee">

              <div className="marquee-group">
                {logos.map((logo, index) => (
                  <div key={`first-${index}`} className={logoBoxClass}>
                    <img
                      src={logo}
                      alt="brand"
                      className="h-full w-full object-contain opacity-100 drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>

              <div className="marquee-group" aria-hidden="true">
                {logos.map((logo, index) => (
                  <div key={`second-${index}`} className={logoBoxClass}>
                    <img
                      src={logo}
                      alt="brand"
                      className="h-full w-full object-contain opacity-100 drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative bg-[#dce3c2] py-24 px-6 text-center overflow-hidden">

        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.webp')]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <h1 className="text-[70px] leading-[1.1] font-serif text-[#313131]">

            Expertise that nourishes <br />

            <span className="italic text-[#4d4d4d]">
              real change.
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-700 max-w-3xl mx-auto leading-[1.8]">

            A unique blend of clinical science, holistic wisdom and real-life
            understanding to help you heal your relationship with food and yourself.

          </p>

        </div>

      </div>

    </section>
  );
};

export default FeaturedSection;
