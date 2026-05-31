import React from "react";
import { Leaf, Heart, Sun, Users, BookOpen, Sparkles } from "lucide-react";

import collageImage from "../assets/gridImg.webp";
import founderImage from "../assets/PortraitImg.webp";

const FounderStorySection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-8 md:py-12 overflow-hidden">

      {/* CONTAINER (wider) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16">

        {/* TOP CARD (white box, slightly wider appearance) */}
        <div className="bg-white rounded-4xl overflow-hidden border border-[#ebe5db] shadow-sm">

          {/* CENTERED HEADER */}
          <div className="text-center pt-8 md:pt-12 lg:pt-16 px-6">
            <p className="tracking-[4px] uppercase text-[10px] md:text-[12px] font-medium text-gray-500">
              A Note From
            </p>
            <h2 className="text-3xl md:text-[40px] lg:text-[48px] leading-none mt-3.5
            font-['Cormorant_Garamond'] text-[#3b4528]">
              Nutritionist Lovneet Batra
            </h2>

            {/* DECORATION */}
            <div className="flex items-center gap-4 mt-5 justify-center">
              <div className="w-10 md:w-15 h-px bg-[#d1cbbd]"></div>
              <span className="text-[#728646] flex items-center">
                <Leaf size={16} />
              </span>
              <div className="w-10 md:w-15 h-px bg-[#d1cbbd]"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-2">

            {/* LEFT */}
            <div className="p-8 md:p-10 lg:p-16 lg:pt-8 w-full max-w-162.5 mx-auto lg:ml-auto">

              {/* QUOTE */}
              <div className="relative pl-6 md:pl-0">
                <span className="absolute left-0 inline-block -translate-x-2 md:-left-10 -top-2 md:-top-2 text-5xl md:text-[64px] text-[#cdd8b8] font-serif leading-none">
                  “
                </span>
                <p className="text-xl md:text-[26px] lg:text-[28px] leading-[1.4] text-[#5b634d]">
                  Every plan I create is deeply personalized,
                  rooted in science and designed around your
                  real life. Because true healing is personal.
                </p>
              </div>

              {/* SIGNATURE */}
              <div className="mt-8">
                <h3 className="text-[56px]
                font-['Great_Vibes',cursive] italic opacity-90
                text-[#617046] tracking-wide">
                  Lovneet
                </h3>
              </div>

              {/* EXPERIENCE BOX */}
              <div className="mt-6 bg-[#fbfbf9] max-w-120">
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-start gap-2">
                    <span className="text-[#f19090] mt-1"><Heart size={16} fill="currentColor" strokeWidth={0} /></span>
                  </p>
                  <div className="text-[#3b4528] flex items-start gap-2 max-w-2xl">
                    <span className="text-gray-400 mt-0.75"><Sun size={16} /></span>
                    <div>
                      <p className="font-semibold text-[15.5px]">14+ years of experience.</p>
                      <p className="font-semibold text-[15.5px]">Thousands of transformations.</p>
                    </div>
                  </div>
                  <p className="italic text-[#3b4528] pt-2 pl-6 font-serif text-[17px]">
                    One purpose — You.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-full flex justify-end lg:pr-16 pt-8 pb-0">
              {/* IMAGE WRAPPER WITH BACKGROUND SHAPE */}
              <div className="relative w-full max-w-105 rounded-tr-[120px] rounded-tl-4xl pt-12 px-8 flex justify-center items-end overflow-hidden">
                <img
                  src={founderImage}
                  alt="Nutritionist Lovneet Batra"
                  className="relative z-10 w-full max-w-100
                  object-cover 
                  hover:scale-105 duration-700 mx-auto"
                />
              </div>
            </div>

          </div>

        </div>

        {/* STATS BAR */}
        <div className="mt-8 bg-white rounded-4xl
        border border-[#ebe5db] shadow-[0_4px_20px_rgba(0,0,0,0.02)]
        grid grid-cols-2 lg:grid-cols-4 overflow-hidden relative z-10">

          {/* ITEM */}
          <div className="py-12 px-6 text-center lg:border-r border-[#f0ebe1]">

            <div className="mb-3 flex justify-center text-[#728646]"><Leaf size={24} /></div>

            <h3 className="mt-2 text-[28px]  
            font-['Cormorant_Garamond'] font-semibold
            text-[#3b4528]">
              15+
            </h3>

            <p className="text-[10px] tracking-[2px]
            uppercase text-gray-500 mt-2">
              Years <br />
              of Experience
            </p>

          </div>

          <div className="py-12 px-6 text-center lg:border-r border-[#f0ebe1]">

            <div className="mb-3 flex justify-center text-[#728646]"><Users size={24} /></div>

            <h3 className="mt-2 text-[28px]
            font-['Cormorant_Garamond'] font-semibold
            text-[#3b4528]">
              1000+
            </h3>

            <p className="text-[10px] tracking-[2px]
            uppercase text-gray-500 mt-2">
              Lives <br />
              Transformed
            </p>

          </div>

          <div className="py-12 px-6 text-center lg:border-r border-[#f0ebe1]">

            <div className="mb-3 flex justify-center text-[#728646]"><BookOpen size={24} /></div>

            <h3 className="mt-2 text-[24px]
            font-['Cormorant_Garamond'] font-semibold
            text-[#3b4528]">
              Evidence-Based
            </h3>

            <p className="text-[10px] tracking-[2px]
            uppercase text-gray-500 mt-3">
              Approach
            </p>

          </div>

          <div className="py-12 px-6 text-center">

            <div className="mb-3 flex justify-center text-[#f19090]"><Heart size={24} fill="currentColor" strokeWidth={0} /></div>

            <h3 className="mt-2 text-[24px]
            font-['Cormorant_Garamond'] font-semibold
            text-[#3b4528]">
              Personalized
            </h3>

            <p className="text-[10px] tracking-[2px]
            uppercase text-gray-500 mt-3">
              Wellness
            </p>

          </div>

        </div>

        {/* BOTTOM STORY SECTION */}
        <div className="mt-8 grid lg:grid-cols-2 rounded-4xl
        overflow-hidden border border-[#ebe5db]">

          {/* LEFT COLLAGE */}
          <div className="bg-[#f8f5ef] p-6">

            <img
              src={collageImage}
              alt="collage"
              className="w-full rounded-3xl
              hover:scale-[1.02] duration-700"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#efe8d9] relative overflow-hidden">

            {/* PATTERN */}
            <div className="absolute inset-0 opacity-10
            bg-[radial-gradient(#73834d_1px,transparent_1px)]
            bg-size-[24px_24px]"></div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center md:text-left">

              <h2 className="text-3xl md:text-[60px] leading-[1.1] md:leading-[0.95]
              font-['Cormorant_Garamond']
              text-[#41492f]">

                Real people. <br />

                <span className="italic">
                  Real stories.
                </span>

                <br />

                Real change.

              </h2>

              <div className="w-16 md:w-20 h-px
              bg-[#bfb6a8] mt-8 md:mt-10 mx-auto md:mx-0"></div>

              <p className="mt-8 md:mt-10 text-gray-600
              leading-8 md:leading-9 text-base md:text-[17px] max-w-full md:max-w-155">

                Every plan I create is as unique as the person
                I’m guiding. Because true wellness isn’t one-size-fits-all.

              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM QUOTE BAR */}
        <div className="mt-8 bg-[#EDE9DE] border border-[#ebe5db]
        rounded-3xl px-8 py-7 flex flex-col lg:flex-row
        items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full min-w-14
            bg-[#506b34] text-white
            flex items-center justify-center">

              <Sparkles size={24} />

            </div>

            <p className="text-gray-600 max-w-160">

              My deepest purpose is to help you feel good in your body,
              calm in your mind and confident in your choices — every single day.

            </p>

          </div>

          {/* RIGHT */}
          <h3 className="text-[23px] italic flex items-center
          font-['Cormorant_Garamond']
          text-[#4b5632]">

            One purpose. You.<Heart size={28} className="ml-2 text-[#f19090]" fill="currentColor" strokeWidth={0} />
          </h3>

        </div>

      </div>

    </section>
  );
};

export default FounderStorySection;
