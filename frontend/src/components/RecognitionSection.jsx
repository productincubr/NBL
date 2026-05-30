import React from "react";
import { Quote } from "lucide-react";


import founderImage from "../assets/PortraitLovneetBatra.png";
import bookImage from "../assets/bookCover.png";

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const RecognitionSection = () => {
  return (
    <section className="bg-[#f5f2ec] py-24">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* HEADING */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-xs text-[#5d6649]">
            Featured In
          </p>

          <h2 className="mt-4 text-[58px] leading-none text-[#3f472d] font-['Cormorant_Garamond']">

            Recognized. Respected. Recommended.

          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Lovneet's expert insights and nutrition philosophy have been featured in leading media platforms across the country.
          </p>

        </div>

        {/* TOP 2 CARDS */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* STORY CARD */}

          <div className="bg-[#ede6da] rounded-[40px] p-10 group hover:-translate-y-2 hover:shadow-xl duration-500">

            <p className="text-xs tracking-[3px] uppercase text-[#5d6649]">
              Founder Story
            </p>

            <h3 className="mt-4 text-[55px] leading-none text-[#3f472d] font-['Cormorant_Garamond']">
              A journey rooted in
              <br />
              <span className="italic">
                purpose and care.
              </span>
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Lovneet Batra's journey began with a simple belief that real healing happens when nutrition is personalized, sustainable, and built on understanding.
            </p>

            <img
              src={founderImage}
              alt=""
              className="mt-8 rounded-[24px] w-[220px] group-hover:scale-105 duration-500"
            />

            <h4 className="mt-4 text-[30px] text-[#3f472d] font-['Cormorant_Garamond']">
              Lovneet Batra
            </h4>

            <p className="text-xs text-gray-500 uppercase tracking-[2px]">
              Clinical Nutritionist & Founder
            </p>

          </div>

          {/* BOOK CARD */}

          <div className="bg-[#ede6da] rounded-[40px] p-10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl duration-500">

            <div className="absolute -right-20 -top-20 w-60 h-60 bg-green-100 blur-3xl opacity-0 group-hover:opacity-100 duration-700"></div>

            <p className="uppercase tracking-[3px] text-xs text-[#5d6649]">
              My Book
            </p>

            <h3 className="mt-4 text-[50px] leading-none text-[#3f472d] font-['Cormorant_Garamond']">
              50 desi
              <br />
              super
              <br />
              drinks
            </h3>

            <img
              src={bookImage}
              alt=""
              className="mt-8 w-[280px] mx-auto group-hover:rotate-2 group-hover:scale-105 duration-500"
            />

            <p className="mt-6 text-gray-600">
              A practical guide to building a healthy relationship with food, your body and yourself.
            </p>

            <button className="mt-6 bg-[#23420f] text-white px-8 py-3 rounded-full hover:scale-105 duration-300">
              Explore The Book
            </button>

          </div>

        </div>

        {/* TESTIMONIALS */}

        <div className="grid lg:grid-cols-3 gap-5 mt-8">

          {[
            {
              image: review1,
              quote:
                "Her guidance made healthy eating feel simple, personal and sustainable.",
              tag: "Lifestyle Transformation",
            },
            {
              image: review2,
              quote:
                "I felt supported without feeling restricted.",
              tag: "Weight Wellness Journey",
            },
            {
              image: review3,
              quote:
                "Our food habits changed without stress or confusion.",
              tag: "Family Nutrition Journey",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f5ef] border border-[#ddd6ca] rounded-[20px] p-6 hover:-translate-y-2 hover:shadow-xl duration-500"
            >

              <Quote size={24} className="text-[#b7afa4]" />

              <p className="mt-5 text-[28px] leading-[1.3] text-[#3f472d] font-['Cormorant_Garamond']">

                "{item.quote}"

              </p>

              <div className="flex items-center justify-between mt-8">

                <p className="text-sm text-gray-500">
                  {item.tag}
                </p>

                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-24 rounded-xl object-cover"
                />

              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className="mt-8 bg-[#55603d] rounded-full px-8 py-4 flex flex-col lg:flex-row justify-between items-center gap-5">

          <p className="text-white">
            Trusted by celebrities, professionals and families seeking sustainable wellness.
          </p>

          <button className="bg-white text-[#343A2A] px-8 py-3 rounded-full hover:scale-105 duration-300">

            Begin Your Wellness Journey →

          </button>

        </div>

      </div>

    </section>
  );
};

export default RecognitionSection;