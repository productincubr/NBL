import React from "react";
import { Leaf } from "lucide-react";

import mainImage from "../assets/nutritionistImg.webp";
import videoThumb from "../assets/videoImg.webp";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-16 md:py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP HEADING */}
      <div className="text-center mb-12 md:mb-20">

        <p className="tracking-[4px] text-xs md:text-sm text-gray-500 uppercase mb-4">
          A NOTE FROM
        </p>

        <h2 className="text-4xl md:text-[60px] leading-[1.2] md:leading-none font-serif text-[#4b5632]">
          Nutritionist Lovneet Batra
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-6">

          <div className="w-16 md:w-20 h-px bg-gray-300"></div>

          <span className="text-[#6b7b45] flex items-center justify-center">
            <Leaf size={18} />
          </span>

          <div className="w-16 md:w-20 h-px bg-gray-300"></div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center pb-12 md:pb-0">

          {/* Main Image */}
          <div className="rounded-t-[100px] md:rounded-t-[220px] overflow-hidden max-w-[280px] sm:max-w-[400px] md:max-w-125 w-full">
            <img
              src={mainImage}
              alt="Nutritionist"
              className="w-full h-full object-cover hover:scale-105 duration-700"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 sm:bottom-0 md:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-4 lg:-left-10 bg-[#3D452B] w-[90%] sm:w-[80%] md:w-75 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-md hover:-translate-y-2 duration-500">

            <span className="text-3xl md:text-4xl text-[#9acd32]">❝</span>

            <p className="text-white text-sm md:text-[15px] leading-7 md:leading-8 mt-3 md:mt-5">

              Nutrition is not about perfection.
              It's about progress, balance and becoming
              the healthiest version of you.

            </p>

            <div className="mt-4 md:mt-6 text-right text-[#9acd32] text-xl">
              ❦
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left mt-8 md:mt-0">

          <h1 className="text-4xl md:text-[72px] leading-[1.2] md:leading-[1.1] font-serif text-[#4b5632]">

            Food can heal. <br />

            <span className="italic">
              So can choices.
            </span>

          </h1>

          <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-[20px] leading-relaxed md:leading-loose max-w-full md:max-w-162.5 text-center md:text-left">

            My mission is simple – to help you build a positive,
            balanced relationship with food that feels nourishing
            rather than restrictive. I believe in realistic wellness
            that fits your real life, not a perfect version of it.

          </p>

          {/* VIDEO CARD */}
          <div className="relative mt-8 md:mt-10 w-full max-w-full md:max-w-92.5 mx-auto md:mx-0">

            <div className="bg-[#ebe7df] rounded-2xl p-4 shadow-xl">

              <div className="relative rounded-xl overflow-hidden">

                <img
                  src={videoThumb}
                  alt="video"
                  className="w-full h-48 md:h-55 object-cover group-hover:scale-105 duration-700"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#556b2f] flex items-center justify-center text-white text-xl md:text-2xl shadow-2xl group-hover:scale-110 duration-300">

                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                    </svg>

                  </div>

                </div>

              </div>

              {/* CAPTION BUTTON */}
              <button className="mt-4 w-full flex items-center justify-center md:justify-start gap-3 bg-[#e6e3db] text-[#556b2f] rounded-md py-3 px-4 text-xs md:text-sm font-medium">

                <span className="w-6 h-6 md:w-7 md:h-7 bg-[#556b2f] text-white rounded-full flex items-center justify-center text-[10px] md:text-[12px] flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </span>

                <span className="text-left">WATCH LOVNEET'S PHILOSOPHY</span>

              </button>

            </div>

          </div>

          {/* SIGNATURE */}
          <div className="mt-10 md:mt-12 text-center md:text-left">

            <h3 className="text-4xl md:text-[56px] font-serif italic text-[#4b5632]">
              Lovneet Batra ♥
            </h3>

            <p className="mt-2 md:mt-3 tracking-[2px] md:tracking-[3px] uppercase text-[10px] md:text-[12px] text-gray-600 leading-5 md:leading-6">

              Clinical Nutritionist <br />
              Speaker • Author • Wellness Mentor

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
