import React from "react";

import vogue from "../assets/vogue.png";
import financial from "../assets/financial.png";
import business from "../assets/business.png";
import weekend from "../assets/weekend.png";
import readers from "../assets/readers.png";
import economic from "../assets/economic.png";
import ass from '../assets/ass.png';

const FeaturedSection = () => {

  const logos = [
    vogue,
    financial,
    business,
    weekend,
    readers,
    economic,
    ass
  ];

  return (
    <section className="w-full overflow-hidden pt-12">

      {/* TOP MOVING LOGOS BAR */}
      <div className="bg-[#193C0F] py-10 overflow-hidden">

        <div className="marquee-track animate-marquee">

          <div className="marquee-group">
            {logos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo}
                alt="brand"
                className="h-8 object-contain opacity-95 shrink-0"
              />
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo}
                alt="brand"
                className="h-8 object-contain opacity-95 shrink-0"
              />
            ))}
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative bg-[#dce3c2] py-24 px-6 text-center overflow-hidden">

        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

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