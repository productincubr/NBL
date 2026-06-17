import React from "react";
import heroImage from "../assets/heroImg.webp";
import { LuArrowRight, LuHeart, LuStar, LuUser } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#f5f1eb] px-6 md:px-16 py-6 flex flex-col lg:flex-row items-center justify-between gap-16 mt-16 md:mt-0">

      {/* LEFT CONTENT */}
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">

        <p className="text-[10px] md:text-[12px] tracking-[4px] text-gray-500 mb-6 md:mb-8">
          CLINICAL NUTRITIONIST • AUTHOR • MOTHER
        </p>

        <h1 className="text-4xl md:text-[60px] leading-[1.2] md:leading-[1.1] font-serif text-[#2d2d2d] mb-6 md:mb-8">

          Heal your <br />
          relationship <br />

          <span className="italic text-[#6B704C]">
            with food.
          </span>

        </h1>

        <p className="text-base md:text-[20px] text-gray-600 leading-[1.7] max-w-[650px] mb-8 md:mb-8 px-4 md:px-0">
          Science-backed nutrition rooted in Indian wisdom
          to help you feel better, inside out.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-5 mb-12 md:mb-14 w-full sm:w-auto">

          <button className="inline-flex justify-center items-center gap-2 bg-[#1f4d1f] hover:bg-[#193C0F] text-white px-8 py-3 rounded-full tracking-wide text-sm transition w-full sm:w-auto">
            BOOK CONSULTATION
            <LuArrowRight className="text-base" />
          </button>

          <button className="inline-flex justify-center items-center gap-2 border border-gray-400 px-8 py-3 rounded-full tracking-wide text-sm hover:bg-gray-100 transition w-full sm:w-auto">
            EXPLORE PROGRAMS
            <LuArrowRight className="text-base" />
          </button>

        </div>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between">

          <div className="flex flex-1 items-center justify-center flex-col sm:border-r border-gray-300 sm:pr-6">
            <LuUser className="text-[22px] text-[#7a7a7a] mb-3" />

            <h2 className="text-3xl font-serif text-[#2d2d2d] leading-none">
              10K+
            </h2>

            <p className="text-[10px] tracking-[2px] text-gray-500 mt-3 text-center">
              CLIENTS TRANSFORMED
            </p>
          </div>

          <div className="flex flex-1 justify-center flex-col items-center sm:border-r border-gray-300 sm:px-6">
            <LuStar className="text-[22px] text-[#7a7a7a] mb-3" />

            <h2 className="text-3xl font-serif text-[#2d2d2d] leading-none">
              14+
            </h2>

            <p className="text-[10px] tracking-[2px] text-gray-500 mt-3 text-center">
              YEARS OF EXPERIENCE
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center sm:pl-6">
            <LuHeart className="text-[22px] text-[#7a7a7a] mb-3" />

            <h2 className="text-3xl font-serif text-[#2d2d2d] leading-none">
              100%
            </h2>

            <p className="text-[10px] tracking-[2px] text-center text-gray-500 mt-3">
              HOLISTIC & INDIVIDUALIZED CARE
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center">

        <img
          src={heroImage}
          alt="Nutritionist"
          className="w-full max-w-[490px] rounded-[40px] object-cover"
        />

      </div>

    </section>
  );
};

export default HeroSection;
