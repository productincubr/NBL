import React from "react";
import { ArrowRight, Leaf } from "lucide-react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const programs = [
  {
    tag: "BEST SELLER",
    number: "01",
    title: "Clinical\nNutrition Plans",
    desc: "Personalized nutrition for lasting health, prevention and everyday well-being.",
    image: img1,
  },

  {
    tag: "MOST LOVED",
    number: "02",
    title: "Women & Mother\nCare",
    desc: "Support for every stage of womanhood, pregnancy, postpartum and beyond.",
    image: img2,
  },

  {
    tag: "TOTAL WELLNESS",
    number: "03",
    title: "Child Nutrition",
    desc: "Healthy eating habits, better immunity and balanced growth for your little ones.",
    image: img3,
  },

  {
    tag: "WEIGHT WELLNESS",
    number: "04",
    title: "Healthy\nWeight Loss",
    desc: "Sustainable weight loss that fits your life, not restrictive diets.",
    image: img4,
  },

  {
    tag: "INNER GLOW",
    number: "05",
    title: "Skin, Hair &\nAnti-Aging",
    desc: "Nourish from within for healthy skin, strong hair and natural radiance.",
    image: img5,
  },

  {
    tag: "TOTAL WELLNESS",
    number: "06",
    title: "Immunity &\nLifestyle Reset",
    desc: "Reset your body and mind with better immunity, energy and daily balance.",
    image: img6,
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full bg-[#F9F7F2] py-28 overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-362.5 mx-auto px-6 lg:px-20">

        {/* TOP CONTENT */}
        <div className="text-center max-w-5xl mx-auto">

          <p className="tracking-[4px] uppercase text-[12px] text-gray-500 font-bold mb-5">

            Personalized Wellness Programs

          </p>

          {/* DECORATION */}
          <div className="flex justify-center mb-5">
          <span className="text-[#6b7b45] flex items-center justify-center">
            <Leaf size={18} />
          </span>
          </div>

          <h1 className="text-[75px] leading-[0.95] font-['Cormorant_Garamond'] text-[#3f472d]">

            Care designed <br />

            around your{" "}
            <span className="italic">
              real life.
            </span>

          </h1>

          <p className="mt-10 text-gray-500 text-[18px] leading-loose max-w-4xl mx-auto">

            No two bodies, routines or journeys are the same.
            Your plan is thoughtfully crafted around your lifestyle,
            hormones, habits and stress levels—rooted in science and
            designed for long-term healing.

          </p>

        </div>

        {/* PROGRAMS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

          {programs.map((item, index) => (

            <div
              key={index}
              className="group bg-[#F2EDE4] rounded-[30px] border border-[#ece5db]
              hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
              transition-all duration-700 cursor-pointer relative flex flex-col justify-between overflow-hidden"
            >

              {/* CARD CONTENT */}
              <div className="p-8 flex-1">

                {/* TAG */}
                <span className="inline-block bg-[#5e6c3c] text-white text-[10px]
                tracking-[2px] px-4 py-2 rounded-full mb-6">
                  {item.tag}
                </span>

                {/* NUMBER */}
                <p className="text-[#8c947f] text-[13px] mb-2 font-medium">
                  {item.number}
                </p>

                {/* TITLE */}
                <h2 className="text-[34px] leading-[1.05] whitespace-pre-line
                font-['Cormorant_Garamond'] text-[#3f472d] mb-4">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-[#646e52] text-[15px] leading-6 mb-8">
                  {item.desc}
                </p>

                {/* LINK */}
                <button className="flex items-center gap-2 text-[11px] tracking-[4px] uppercase text-[#3f472d] font-semibold
                hover:tracking-[5px] transition-all duration-500">
                  SEE PROGRAM <ArrowRight size={14} />
                </button>

              </div>

              {/* IMAGE */}
              <div className="px-6 pb-6">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-45 object-cover group-hover:scale-105 duration-700"
                  />
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute top-10 right-0 w-40 h-40 bg-[#dfe7c7]
              rounded-full blur-3xl opacity-0 group-hover:opacity-70 duration-700 pointer-events-none"></div>

            </div>

          ))}

        </div>

        {/* BOTTOM CTA BOX */}
        <div className="mt-16 bg-[#f8f5ef] border border-[#ebe5db]
        rounded-[30px] px-8 py-8 flex flex-col lg:flex-row items-center
        justify-between gap-8">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-[#dfe7c7]
            flex items-center justify-center text-[#5d6d3f] text-2xl">

              ❦

            </div>

            <div>

              <h3 className="text-[28px] font-['Cormorant_Garamond']
              text-[#3f472d]">

                Not sure where to begin?

              </h3>

              <p className="text-gray-500 mt-2">

                Start with a personalized consultation and
                we’ll guide you to the right plan.

              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">

            {/* AVATARS */}
            <div className="flex -space-x-4">

              <img
                src={img1}
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
              />

              <img
                src={img2}
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
              />

              <img
                src={img3}
                className="w-12 h-12 rounded-full border-4 border-white object-cover"
              />

            </div>

            <div>

              <h4 className="text-[#3f472d] font-semibold">
                25K+ women transformed
              </h4>

              <p className="text-gray-500 text-sm">
                their health
              </p>

            </div>

          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">

          <button className="bg-[#193C0F] hover:bg-[#14290d]
          text-white px-10 py-5 rounded-full tracking-wide
          shadow-xl hover:scale-105 duration-500">

            Help Me Choose My Plan

          </button>

        </div>

      </div>

    </section>
  );
};

export default ProgramsSection;