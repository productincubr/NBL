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
    icon: <ClipboardList size={34} />,
    title: "Clinical\nNutritionist",
    desc: "Science-backed nutrition expertise to address root causes and create lasting health transformations.",
    bottom: "ROOT-CAUSE\nHEALING",
  },

  {
    icon: <BookOpen size={34} />,
    title: "Author",
    desc: "Author of bestselling books on nutrition & wellness that have empowered thousands of lives.",
    bottom: "KNOWLEDGE THAT\nEMPOWERS",
  },

  {
    icon: <Mic size={34} />,
    title: "Speaker &\nPodcaster",
    desc: "International speaker and podcast host spreading science-backed wellness with clarity and impact.",
    bottom: "INSPIRING REAL\nCHANGE",
  },

  {
    icon: <FlaskConical size={34} />,
    title: "Functional\nNutrition\nExpert",
    desc: "Specialized in functional nutrition to support hormonal balance, gut health, metabolism and lifestyle challenges.",
    bottom: "PERSONALIZED\nSOLUTIONS",
  },

  {
    icon: <Zap size={34} />,
    title: "Sports\nNutrition",
    desc: "Helping individuals improve performance, recovery and energy through smart, sustainable nutrition.",
    bottom: "PERFORM.\nRECOVER. THRIVE.",
  },

  {
    icon: <Heart size={34} />,
    title: "Mother &\nWellness\nMentor",
    desc: "A mother who truly understands real-life struggles and guides you with compassion and practical wisdom.",
    bottom: "GUIDANCE WITH\nHEART",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-20 overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

          {expertiseData.map((item, index) => (

            <div
              key={index}
              className="group bg-[#faf8f4] rounded-[20px] px-8 py-10 border border-[#ece7df]
              hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 cursor-pointer
              relative overflow-hidden"
            >

              {/* TOP GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#dfe7c9]/40 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

              {/* ICON */}
              <div className="relative z-10 text-[#7b8056] mb-8 group-hover:scale-110 duration-500">

                {item.icon}

              </div>

              {/* TITLE */}
              <h2 className="relative z-10 text-[34px] leading-[1.1] whitespace-pre-line font-['Cormorant_Garamond'] text-[#4b5632] mb-8">

                {item.title}

              </h2>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-gray-500 text-[15px] leading-8 mb-14">

                {item.desc}

              </p>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-[#ebe6de] mb-8"></div>

              {/* BOTTOM TEXT */}
              <p className="relative z-10 text-[11px] tracking-[3px] text-gray-400 uppercase whitespace-pre-line">

                ✦ {item.bottom}

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