import React from "react";
import {
  Tv,
  Mic,
  UtensilsCrossed,
  UserRound,
  Leaf,
} from "lucide-react";

const resources = [
  {
    icon: <Tv size={22} />,
    title: "Nutrition Reels",
    desc: "Quick tips for a healthier you.",
  },
  {
    icon: <Mic size={22} />,
    title: "Podcast Conversations",
    desc: "Real conversations on health and healing.",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Recipes & Guides",
    desc: "Nourishing ideas for everyday life.",
  },
  {
    icon: <UserRound size={22} />,
    title: "PCOS & Hormonal Health",
    desc: "Education for women's wellness.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Gut Health Education",
    desc: "Simple science-backed guidance.",
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white from-0% to-[#EDE9DE] to-100%">

      <div className="max-w-350 mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-xs font-bold text-[#3D442E]">
            Learn • Nourish • Grow
          </p>

          <h2 className="mt-4 text-[60px] leading-none text-[#3f472d] font-['Cormorant_Garamond']">

            Wellness knowledge you can use every day.

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500">
            Simple, practical guidance for food, hormones, gut health,
            family nutrition, and everyday habits.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5 mt-16">

          {resources.map((item, index) => (

            <div
              key={index}
              className="
                group
                bg-[#F6F3E9]
                border
                border-[#d8d2c7]
                rounded-[18px]
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-500
                cursor-pointer
              "
            >

              {/* Icon Circle */}
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#d8d2c7]
                  flex
                  items-center
                  justify-center
                  mx-auto
                  text-[#55603d]
                  group-hover:bg-[#55603d]
                  group-hover:text-white
                  duration-500
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-8
                  text-[30px]
                  leading-tight
                  text-[#3f472d]
                  font-['Cormorant_Garamond']
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-500 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">

          <button
            className="
              bg-[#1f4a13]
              text-white
              px-10
              py-4
              rounded-full
              hover:bg-[#16370d]
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            Explore All Resources →
          </button>

        </div>

      </div>

    </section>
  );
};

export default ResourcesSection;
