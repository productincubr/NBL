import React from "react";
import {
  MessageCircle,
  ClipboardCheck,
  HeartHandshake,
  Users,
  BookOpen,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "1",
    icon: <MessageCircle size={26} />,
    title: "Discovery Call",
    desc: "We begin by understanding your lifestyle, habits, health history and goals in depth.",
  },

  {
    id: "2",
    icon: <ClipboardCheck size={26} />,
    title: "Personalized Protocol",
    desc: "A custom nutrition, hormone support and wellness strategy designed just for you.",
  },

  {
    id: "3",
    icon: <HeartHandshake size={26} />,
    title: "Guided Transformation",
    desc: "Ongoing expert guidance, accountability and support for real, lasting change.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-[#f5f2ec] py-10 md:py-16 pb-0 overflow-hidden">

      {/* TOP CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* SMALL TITLE */}
        <div className="text-center">

          <p className="tracking-[4px] uppercase text-[12px] md:text-[13px] text-gray-500 mb-4 md:mb-5">

            The Process

          </p>

          {/* DECORATION */}
          <div className="flex justify-center items-center gap-3 mb-6 md:mb-8">

            <div className="w-12 h-[1px] bg-[#d8d3cb]"></div>

            <span className="text-[#d2a34d] text-sm">
              ▼
            </span>

            <div className="w-12 h-[1px] bg-[#d8d3cb]"></div>

          </div>

          {/* HEADING */}
          <h1 className="text-3xl md:text-[60px] leading-[1.2] md:leading-[1.1] text-[#3d452f]
          font-['Cormorant_Garamond'] mt-2 md:mt-0">

            Your path for your{" "}

            <span className="italic">
              renewal.
            </span>

          </h1>

        </div>

        {/* STEPS */}
        <div className="relative mt-12 md:mt-20">

          {/* CENTER LINE */}
          <div className="hidden lg:block absolute top-10 left-1/2
          -translate-x-1/2 w-[70%] h-[1px] border-t border-dashed border-[#d8d3cb]"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

            {steps.map((item, index) => (

              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >

                {/* ICON */}
                <div className="relative">

                  <div className="w-24 h-24 rounded-full bg-white shadow-lg
                  flex items-center justify-center text-[#6f7c50]
                  group-hover:scale-110 duration-500">

                    {item.icon}

                  </div>

                  {/* NUMBER */}
                  <div className="absolute bottom-0 right-0
                  w-8 h-8 rounded-full bg-[#202a14]
                  text-white text-sm flex items-center justify-center">

                    {item.id}

                  </div>

                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[36px] leading-none
                font-['Cormorant_Garamond'] text-[#3d452f]">

                  {item.title}

                </h3>

                {/* DESC */}
                <p className="mt-5 text-gray-500 leading-8
                max-w-[320px] text-[15px]">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* GREEN PREMIUM CARD */}
        <div className="mt-24 relative overflow-hidden rounded-[34px]
        px-10 lg:px-16 py-10 lg:py-[55px]">

          {/* BACKGROUND GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#193C0F] to-[#676957]"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col gap-12">

            <div className="flex flex-col xl:flex-row items-start justify-between gap-10 xl:gap-12">

              {/* LEFT */}
              <div className="flex-1 flex flex-col items-start lg:pr-6 w-full pt-0">
                <h2 className="text-white text-3xl md:text-[44px] lg:text-[50px] xl:text-[42px] leading-[1.2] md:leading-[1.1]
                font-['Cormorant_Garamond'] tracking-wide">
                  <span className="block whitespace-nowrap">Trusted by thousands</span>
                  <span className="block whitespace-nowrap">seeking sustainable</span>
                  <span className="block whitespace-nowrap">healing.</span>
                </h2>
                <div className="w-16 h-[1px] bg-white/40 mt-8"></div>
              </div>

              {/* RIGHT OF TOP TWO */}
              <div className="flex-[1.2] flex flex-col items-center xl:items-start gap-10 w-full pt-0">
                <div className="flex flex-col md:flex-row justify-center xl:justify-start gap-12 lg:gap-16 w-full">
                  <div className="text-center">
                    <Users size={24} className="mx-auto text-white/80" strokeWidth={1.2} />
                    <h3 className="text-white text-[35px] mt-4
                    font-['Cormorant_Garamond'] leading-none">
                      1000+
                    </h3>
                    <p className="text-white/60 text-[10px]
                    tracking-[2px] uppercase mt-3 leading-[1.6]">
                      Transformations <br />
                      and Counting
                    </p>
                  </div>

                  <div className="text-center">
                    <BookOpen size={24} className="mx-auto text-white/80" strokeWidth={1.2} />
                    <h3 className="text-white text-[35px] mt-4
                    font-['Cormorant_Garamond'] leading-none">
                      14+
                    </h3>
                    <p className="text-white/60 text-[10px]
                    tracking-[2px] uppercase mt-3 leading-[1.6]">
                      Years <br />
                      of Experience
                    </p>
                  </div>

                  <div className="text-center md:max-w-[220px]">
                    <FlaskConical size={24} className="mx-auto text-white/80" strokeWidth={1.2} />
                    <h3 className="text-white text-[32px] mt-4
                    font-['Cormorant_Garamond'] leading-none">
                      Science-backed Care
                    </h3>
                    <p className="text-white/60 text-[10px]
                    tracking-[2px] uppercase mt-3 leading-[1.6]">
                      Rooted in Evidence <br />
                      and Expertise
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTTOM CENTER CTA */}
            <div className="flex flex-col items-center gap-3 w-full pt-2">
              <button className="bg-white hover:bg-gray-50
              text-[#1d2d11] font-medium px-7 py-3.5 rounded-full
              text-[14px] shadow-lg hover:scale-105
              transition-transform duration-300 flex items-center gap-3">
                Book Your Consultation <ArrowRight size={17} strokeWidth={2} />
              </button>

              <p className="text-white/60 text-[12px] text-center leading-relaxed mt-1">
                Personal care. Real results. <br />
                A better you, for life.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;
