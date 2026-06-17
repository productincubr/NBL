import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How do I know which nutrition plan is right for me?",
    answer:
      "Every body is different. That's why we carefully assess your lifestyle, goals, and nutritional needs before recommending a personalized plan tailored to your wellbeing journey.",
  },

  {
    question:
      "Are consultations personalized for individual health goals?",
    answer:
      "Yes. Every consultation is tailored according to your health goals, lifestyle, medical history and wellness requirements.",
  },

  {
    question: "Can I book sessions online?",
    answer:
      "Absolutely. You can easily book your consultation online from anywhere and receive expert guidance virtually.",
  },

  {
    question: "What happens during the first consultation?",
    answer:
      "During the first consultation we assess your current health status, eating habits, lifestyle and wellness goals to create a personalized plan.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f2ec] py-12 md:py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-center text-4xl md:text-[64px] leading-tight md:leading-none font-['Cormorant_Garamond'] text-[#3f472d] mb-12 md:mb-16">

          Frequently Ask Questions

        </h2>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-[#f8f5ef]
                rounded-[20px]
                border
                border-[#d9d4ca]
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                overflow-hidden
              "
            >
              {/* Question */}

              <button
                onClick={() => handleToggle(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-8
                  py-7
                  text-left
                "
              >
                <h3
                  className="
                    text-[28px]
                    text-[#2e2e50]
                    font-['Cormorant_Garamond']
                  "
                >
                  {faq.question}
                </h3>

                <div
                  className="
                    min-w-10.5
                    min-h-10.5
                    rounded-full
                    bg-[#1d4a13]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  {activeIndex === index ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </div>
              </button>

              {/* Answer */}

              <div
                className={`
                  transition-all
                  duration-500
                  overflow-hidden
                  ${
                    activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-8 pb-8">

                  <p className="text-gray-500 leading-8 text-[16px]">

                    {faq.answer}

                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default FaqSection;
