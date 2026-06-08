import React from "react";
import { Download, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const recipes = [
    {
        title: "Classic Avocado Toast",
        image:
          "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc: "Smashed avocado on artisanal sourdough with a sprinkle of chili flakes",
        calories: "280 cal",
        tag: "Vegan",
        time: "10 mins",
      },

    {
        title: "Matcha Chia Bowl",
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200",
        desc: "Antioxidant-rich matcha blended with chia seeds, topped with fresh fruits",
        calories: "320 cal",
        tag: "Vegan",
        time: "15 mins",
    },

    {
        title: "Turmeric Tofu Scramble",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200",
        desc: "High-protein scrambled tofu with spinach, cherry tomatoes and aromatic herbs",
        calories: "290 cal",
        tag: "High Protein",
        time: "20 mins",
    },

    {
        title: "Berry Overnight Oats",
        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200",
        desc: "Rolled oats soaked in almond milk layered with berries and chia seeds",
        calories: "350 cal",
        tag: "Veg",
        time: "5 mins",
    },

    {
        title: "Mediterranean Bowl",
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200",
        desc: "Fresh vegetables, hummus and quinoa packed with nutrition",
        calories: "310 cal",
        tag: "Healthy",
        time: "25 mins",
    },
];

const RecipeCollections = () => {
    return (
        <section className="bg-[#F8F6F3] py-24">

            <div className="max-w-[1500px] mx-auto px-8">

                {/* Container */}
                <div className="bg-[#FCFAF7] rounded-[24px] border border-[#EEE9E1] p-12">

                    {/* Heading */}

                    <div className="text-center">

                        <p className="uppercase tracking-[4px] text-[11px] text-[#5A6651] font-medium">
                            Curated Collections
                        </p>

                        <h2 className="mt-6 text-[65px] leading-[0.95] text-[#46553C] font-playfair regular">

                            Most loved. Most downloaded.
                            <br />

                            <span className="italic font-playfair  ">
                                Handpicked for you.
                            </span>

                        </h2>

                        <p className="mt-8 max-w-3xl mx-auto text-[#7A7A7A] leading-8">
                            Discover expert-curated recipe collections made to support your
                            health goals and everyday lifestyle. Download your favorites and
                            enjoy wholesome meals, anytime, anywhere.
                        </p>

                    </div>

                    {/* Top Bar */}

                    <div className="flex justify-between items-center mt-14">

                        <select className="border border-[#E6E0D6] bg-white px-4 py-3 rounded-lg text-sm text-gray-600">

                            <option>Filter by goal</option>
                            <option>Weight Loss</option>
                            <option>High Protein</option>
                            <option>Gut Health</option>

                        </select>

                        <button className="text-sm text-[#46553C] hover:underline">
                            View all collections →
                        </button>

                    </div>

                    {/* Slider */}

                    <div className="relative mt-10">

                        <button
                            className="
  recipe-prev
  absolute
  left-[-28px]
  top-1/2
  -translate-y-1/2
  z-20
  w-12
  h-12
  rounded-full
  bg-white
  shadow-lg
  border
  border-[#E7E2D9]
  flex
  items-center
  justify-center
  hover:bg-[#4D6642]
  hover:text-white
  duration-300
  "
                        >
                            <FaChevronLeft size={14} />
                        </button>

                                                    <button
                                                        className="
                            recipe-next
                            absolute
                            right-[-28px]
                            top-1/2
                            -translate-y-1/2
                            z-20
                            w-12
                            h-12
                            rounded-full
                            bg-white
                            shadow-lg
                            border
                            border-[#E7E2D9]
                            flex
                            items-center
                            justify-center
                            hover:bg-[#4D6642]
                            hover:text-white
                            duration-300
                            ">
                            <FaChevronRight size={14} />
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".recipe-prev",
                                nextEl: ".recipe-next",
                            }}
                            spaceBetween={20}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {recipes.map((recipe, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border border-[#ECE7DF] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                        {/* Image */}

                                        <div className="relative">

                                            <img
                                                src={recipe.image}
                                                alt=""
                                                className="w-full h-[180px] object-cover"
                                            />

                                            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 text-xs">

                                                <Clock3 size={12} />

                                                {recipe.time}

                                            </div>

                                        </div>

                                        {/* Content */}

                                        <div className="p-5">

                                            <h3 className="text-[18px] lg:text-[20px] leading-7 text-[#303030] font-serif min-h-[56px]">

                                                {recipe.title}

                                            </h3>

                                            <p className="mt-3 text-[13px] text-gray-500 leading-6 min-h-[72px]">
                                                {recipe.desc}
                                            </p>

                                            <div className="flex gap-4 mt-4 text-xs text-gray-500">

                                                <span>{recipe.calories}</span>

                                                <span>{recipe.tag}</span>

                                            </div>

                                            <button className="mt-5 w-full bg-[#F3F3F3] py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#EAEAEA] transition">

                                                <Download size={15} />

                                                Download PDF

                                            </button>

                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    {/* Bottom Note */}

                    <div className="flex justify-center items-center gap-3 mt-12 text-[#7A7A7A] text-sm">

                        <Download size={16} />

                        <span>
                            All recipes can be downloaded as a PDF and saved for offline use.
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RecipeCollections;