import React from "react";

import mainImage from "../assets/nutritionistImg.png";
import videoThumb from "../assets/videoImg.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP HEADING */}
      <div className="text-center mb-20">

        <p className="tracking-[4px] text-sm text-gray-500 uppercase mb-4">
          A NOTE FROM
        </p>

        <h2 className="text-[60px] leading-none font-serif text-[#4b5632]">
          Nutritionist Lovneet Batra
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-6">

          <div className="w-20 h-[1px] bg-gray-300"></div>

          <span className="text-[#6b7b45] text-xl">
            ❦
          </span>

          <div className="w-20 h-[1px] bg-gray-300"></div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Main Image */}
          <div className="rounded-t-[220px] overflow-hidden max-w-[500px] ">
            <img
              src={mainImage}
              alt="Nutritionist"
              className="w-full h-full object-cover hover:scale-105 duration-700"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute bottom-10 left-0 bg-[#3D452B] w-[300px] p-8 rounded-[24px] shadow-2xl backdrop-blur-md hover:-translate-y-2 duration-500">

            <span className="text-4xl text-[#9acd32]">❝</span>

            <p className="text-white text-[15px] leading-8 mt-5">

              Nutrition is not about perfection.
              It's about progress, balance and becoming
              the healthiest version of you.

            </p>

            <div className="mt-6 text-right text-[#9acd32] text-xl">
              ❦
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h1 className="text-[72px] leading-[1.1] font-serif text-[#4b5632]">

            Food can heal. <br />

            <span className="italic">
              So can choices.
            </span>

          </h1>

          <p className="mt-8 text-gray-600 text-[20px] leading-[2] max-w-[650px]">

            My mission is simple – to help you build a positive,
            balanced relationship with food that feels nourishing
            rather than restrictive. I believe in realistic wellness
            that fits your real life, not a perfect version of it.

          </p>

          {/* VIDEO CARD */}
          <div className="relative mt-10 w-full max-w-[370px]">

            <div className="bg-[#ebe7df] rounded-[16px] p-4 shadow-xl">

              <div className="relative rounded-[12px] overflow-hidden">

                <img
                  src={videoThumb}
                  alt="video"
                  className="w-full h-[220px] object-cover group-hover:scale-105 duration-700"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-[#556b2f] flex items-center justify-center text-white text-2xl shadow-2xl group-hover:scale-110 duration-300">

                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                    </svg>

                  </div>

                </div>

              </div>

              {/* CAPTION BUTTON */}
              <button className="mt-4 w-full flex items-center gap-3 bg-[#e6e3db] text-[#556b2f] rounded-md py-3 px-4 text-sm font-medium">

                <span className="w-7 h-7 bg-[#556b2f] text-white rounded-full flex items-center justify-center text-[12px]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </span>

                WATCH LOVNEET'S WELLNESS PHILOSOPHY

              </button>

            </div>

          </div>

          {/* SIGNATURE */}
          <div className="mt-12">

            <h3 className="text-[56px] font-serif italic text-[#4b5632]">
              Lovneet Batra ♥
            </h3>

            <p className="mt-3 tracking-[3px] uppercase text-[12px] text-gray-600 leading-6">

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