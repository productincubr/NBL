import React from "react";

import {
  ClipboardList,
  BookOpen,
  Mic,
  FlaskConical,
  Zap,
  Heart,
} from "lucide-react";

const expertiseData = [
  {
    icon: <ClipboardList size={30} />,
    title: "Clinical Nutritionist",
    desc: "Science-backed nutrition expertise for root-cause healing and lasting health transformations.",
    bottom: "ROOT-CAUSE HEALING",
  },

  {
    icon: <BookOpen size={30} />,
    title: "Author",
    desc: "Author of bestselling books on nutrition and wellness that have empowered thousands of lives.",
    bottom: "KNOWLEDGE THAT EMPOWERS",
  },

  {
    icon: <Mic size={30} />,
    title: "Speaker & Podcaster",
    desc: "International speaker and podcast host sharing science-backed wellness with clarity and impact.",
    bottom: "INSPIRING REAL CHANGE",
  },

  {
    icon: <FlaskConical size={30} />,
    title: "Functional Nutrition Expert",
    desc: "Specialized in functional nutrition for hormonal balance, gut health, metabolism and lifestyle support.",
    bottom: "PERSONALIZED SOLUTIONS",
  },

  {
    icon: <Zap size={30} />,
    title: "Sports Nutrition",
    desc: "Helping individuals improve performance, recovery and energy through smart, sustainable nutrition.",
    bottom: "PERFORM. RECOVER. THRIVE.",
  },

  {
    icon: <Heart size={30} />,
    title: "Mother & Wellness Mentor",
    desc: "A mother who understands real-life struggles and guides you with compassion and practical wisdom.",
    bottom: "GUIDANCE WITH HEART",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-8 md:py-12 overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-400 mx-auto px-6 lg:px-10 xl:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 items-stretch text-center">

          {expertiseData.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-[20px] px-8 py-10 border border-[#ece7df]
              hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer
              relative overflow-hidden flex flex-col h-full min-h-85 "
            >

              {/* TOP GLOW EFFECT */}
              <div className="absolute inset-0 bg-linear-to-b from-[#dfe7c9]/40 to-transparent opacity-0 group-hover:opacity-100 duration-500 "></div>

              {/* ICON */}
              <div className="relative z-10 text-[#7b8056] mb-6 group-hover:scale-110 duration-500 flex justify-center ">

                {item.icon}

              </div>

              {/* TITLE */}
              <h2 className="relative z-10 text-[22px] leading-[1.05] font-['Cormorant_Garamond'] text-[#4b5632] mb-5 min-h-14">

                {item.title}

              </h2>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-gray-500 text-[13px] leading-7 mb-8 flex-1">

                {item.desc}

              </p>

              {/* DIVIDER */}
              <div className="w-full h-px bg-[#ebe6de] mb-6"></div>

              {/* BOTTOM TEXT */}
              <p className="relative z-10 text-[8px] tracking-[3px] text-gray-400 uppercase leading-5">

                {item.bottom}

              </p>

              {/* HOVER CIRCLE */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#dce4c7] rounded-full blur-3xl opacity-0 group-hover:opacity-60 duration-700"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ExpertiseSection;
