import {
    Search,
    Sparkles,
    Heart,
    Dumbbell,
    Flame,
    Shield,
    Leaf,
    Baby,
    Grid2X2,
    CheckCircle2,
  } from "lucide-react";
  
  const goals = [
    {
      icon: <Flame size={14} />,
      title: "Weight Loss",
    },
    {
      icon: <Dumbbell size={14} />,
      title: "High Protein",
    },
    {
      icon: <Shield size={14} />,
      title: "Diabetes Friendly",
    },
    {
      icon: <Leaf size={14} />,
      title: "Gut Health",
    },
    {
      icon: <Baby size={14} />,
      title: "Kids Friendly",
    },
  ];
  
  const HeroSection = () => {
    return (
      <section className="bg-[#F8F6F3] min-h-[85vh]">
  
        <div className="max-w-[1100px] mx-auto px-6 pt-14 text-center">
  
          {/* Badge */}
  
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F1EEEA] border border-[#E7E2DA]">
  
            <Sparkles size={12} />
  
            <span className="text-[11px] uppercase tracking-[2px] text-[#666]">
  
              Nutritionist-Guided Recipe Intelligence
  
            </span>
  
          </div>
  
          {/* Heading */}
  
          <h1
            className="
            mt-8
            text-[65px]
            leading-[1]
            text-[#42533A]
            font-playfair
            regular
            "
          >
            Turn the food you love
            <br />
            into food that
            <span className="italic font-playfair text-[#515B4E]">
              {" "}
              loves you back.
            </span>
  
            <Heart
              className="inline ml-3 text-[#D77B67]"
              size={40}
              strokeWidth={1.5}
            />
          </h1>
  
          {/* Description */}
  
          <p className="mt-8 text-[#6D6D6D] text-[20px] leading-9 max-w-[750px] mx-auto">
  
            Make any dish healthier with smart ingredient swaps,
            better cooking methods, and nutritionist-backed guidance
            tailored to your goals.
  
          </p>
  
          {/* Search Bar */}
  
          <div
            className="
            mt-14
            max-w-[900px]
            mx-auto
            bg-white
            rounded-full
            shadow-lg
            border
            border-[#ECE7DF]
            flex
            items-center
            overflow-hidden
            "
          >
            <div className="flex-1 flex items-center px-6">
  
              <Search
                size={18}
                className="text-gray-400"
              />
  
              <input
                type="text"
                placeholder="What would you like to make healthier?"
                className="
                w-full
                px-4
                py-5
                outline-none
                bg-transparent
                text-gray-600
                "
              />
  
            </div>
  
            <button
              className="
              bg-[#4A5D45]
              text-white
              px-8
              py-4
              rounded-full
              mr-2
              flex
              items-center
              gap-2
              hover:bg-[#3D5333]
              duration-300
              "
            >
              <Sparkles size={16} />
  
              Generate Recipe
            </button>
          </div>
  
          {/* Goal Text */}
  
          <p className="mt-10 text-[12px] text-[#7A7A7A]">
  
            Choose your goals (optional)
  
          </p>
  
          {/* Goal Chips */}
  
          <div className="mt-5 flex flex-wrap justify-center gap-3">
  
            {goals.map((goal, index) => (
              <button
                key={index}
                className="
                px-5
                py-3
                rounded-xl
                border
                border-[#E5E0D8]
                bg-white
                text-[#555]
                text-sm
                flex
                items-center
                gap-2
                hover:border-[#4D6642]
                hover:text-[#4D6642]
                duration-300
                "
              >
                {goal.icon}
  
                {goal.title}
              </button>
            ))}
          </div>
  
          {/* More Goals */}
  
          <div className="mt-4">
  
            <button
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-[#F3F0EB]
              border
              border-[#E5E0D8]
              text-sm
              text-[#555]
              "
            >
              <Grid2X2 size={15} />
  
              More Goals
            </button>
  
          </div>
  
          {/* Bottom Text */}
  
          <div className="mt-16 flex justify-center items-center gap-2">
  
            <CheckCircle2
              size={18}
              className="text-[#5F7554]"
            />
  
            <p className="text-[#4E4E4E] text-[20px] font-playfair">
  
            
            <span>  No restrictive diets.
              Just </span>
              <span className="italic font-playfair text-[#7A6259]">
                smarter 
everyday food.
               </span>
  
            </p>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default HeroSection;