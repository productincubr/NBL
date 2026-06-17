import React from "react";
import { Quote } from "lucide-react";

import founderImage from "../assets/PortraitLovneetBatra.webp";
import bookImage from "../assets/BookCover.webp";

import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import review3 from "../assets/review3.webp";

const RecognitionSection = () => {
  return (
    <section className="bg-[#f5f2ec] py-10 md:py-16 overflow-hidden">
      <div className="max-w-350 mx-auto px-5 lg:px-12">
        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#5d6649]">
            Featured In
          </p>
          <h2 className="mt-4 text-3xl md:text-[54px] leading-[1.2] md:leading-tight text-[#3f472d] font-['Cormorant_Garamond']">
            Recognized. Respected. Recommended.
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto px-4 md:px-0">
            Lovneet's expert insights and nutrition philosophy have been featured in leading media platforms across the country.
          </p>
        </div>

        {/* TOP 2 CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* STORY CARD */}
          <div className="bg-[#ede6da] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 group hover:-translate-y-2 hover:shadow-xl duration-500 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#5d6649]">
                Founder Story
              </p>
              <h3 className="mt-4 text-3xl sm:text-3xl md:text-[44px] lg:text-[48px] leading-tight text-[#3f472d] font-['Cormorant_Garamond']">
                A journey rooted in
                <br />
                <span className="italic">
                  purpose and care.
                </span>
              </h3>
              <div className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Lovneet Batra's journey began with a simple belief—that real healing happens when nutrition is personalized, sustainable, and built on understanding, not restriction.
                </p>
                <p>
                  From helping one person at a time to becoming a trusted name in holistic nutrition, her mission remains the same: to transform lives through science, empathy, and real food.
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={founderImage}
                alt="Lovneet Batra"
                className="rounded-3xl w-40 sm:w-48 group-hover:scale-105 duration-500 object-cover"
              />
              <div>
                <h4 className="text-[26px] md:text-[30px] text-[#3f472d] font-['Cormorant_Garamond'] leading-none">
                  Lovneet Batra
                </h4>
                <p className="mt-2 text-xs text-gray-500 uppercase tracking-[2px] font-medium mt-1">
                  Clinical Nutritionist <br className="hidden sm:block" /> & Founder
                </p>
              </div>
            </div>
          </div>

          {/* BOOK CARD */}
          <div className="bg-[#ede6da] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl duration-500 flex flex-col justify-between">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#d8e0ca] blur-3xl opacity-0 group-hover:opacity-100 duration-700 pointer-events-none"></div>
            
            <div>
              <p className="uppercase font-semibold tracking-[3px] text-xs text-[#5d6649]">
                My Book
              </p>
              <h3 className="mt-4 text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-tight text-[#3f472d] font-['Cormorant_Garamond']">
                50 desi
                <br />
                super drinks
              </h3>
              <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed max-w-[280px]">
                A practical guide to building a healthy relationship with food, your body and yourself.
              </p>
              <button className="mt-6 sm:mt-8 bg-[#23420f] text-white text-sm md:text-base px-6 py-3 md:px-8 md:py-3 rounded-[20px] md:rounded-full hover:scale-105 duration-300 w-fit">
                Explore The Book
              </button>
            </div>

            <div className="mt-8 flex justify-center lg:justify-end">
              <img
                src={bookImage}
                alt="Book cover"
                className="w-48 md:w-60 lg:w-70 group-hover:rotate-2 group-hover:scale-105 duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-6 md:mt-8">
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
              className="bg-[#f8f5ef] border border-[#ddd6ca] rounded-[24px] md:rounded-[30px] p-6 lg:p-8 hover:-translate-y-2 hover:shadow-xl duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote size={24} className="text-[#b7afa4]" />
                <p className="mt-4 md:mt-5 text-2xl lg:text-[28px] leading-tight text-[#3f472d] font-['Cormorant_Garamond']">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 md:mt-10 gap-4">
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  {item.tag}
                </p>
                <img
                  src={item.image}
                  alt="Review"
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[12px] md:rounded-2xl object-cover shrink-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-6 md:mt-8 bg-[#55603d] rounded-[24px] md:rounded-full px-6 py-6 md:px-10 md:py-6 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-8 text-center md:text-left">
          <p className="text-white text-sm md:text-base lg:text-lg max-w-sm md:max-w-none">
            Trusted by celebrities, professionals and families seeking sustainable wellness.
          </p>
          <button className="bg-white text-[#343A2A] text-sm md:text-base px-6 py-3 md:px-8 md:py-3 rounded-[20px] md:rounded-full hover:scale-105 duration-300 font-medium w-full md:w-auto shrink-0 shadow-lg">
            Begin Your Wellness Journey →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
