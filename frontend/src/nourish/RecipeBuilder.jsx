import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

const superfood1Options = [
  {
    name: "Avocado",
    image:
      "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Blueberries",
    image:
      "https://images.pexels.com/photos/70862/blueberries-fruit-blue-berries-70862.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Spinach",
    image:
      "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Kale",
    image:
      "https://images.pexels.com/photos/51372/kale-vegetables-green-food-51372.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Quinoa",
    image:
      "https://images.pexels.com/photos/7421208/pexels-photo-7421208.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const superfood2Options = [
  {
    name: "Chia Seeds",
    image:
      "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Flax Seeds",
    image:
      "https://images.pexels.com/photos/4198045/pexels-photo-4198045.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Almonds",
    image:
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Pumpkin Seeds",
    image:
      "https://images.pexels.com/photos/6157053/pexels-photo-6157053.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Turmeric",
    image:
      "https://images.pexels.com/photos/4198025/pexels-photo-4198025.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const cuisineOptions = [
  {
    name: "Mediterranean",
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Indian",
    image:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Asian",
    image:
      "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Mexican",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Italian",
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const mealOptions = [
  {
    name: "Breakfast",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Lunch",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Dinner",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Snacks",
    image:
      "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const SelectionCard = ({
  title,
  subtitle,
  items,
  selected,
  setSelected,
}) => {
  return (
    <div
            className="
            bg-white
            border
            border-[#E6DFD5]
            rounded-[28px]
            p-6
            h-[520px]
            shadow-[0_2px_10px_rgba(0,0,0,0.03)]
  "
>

      <div className="text-center mb-5">
        <div className="w-10 h-10 rounded-full bg-[#EEF2E8] mx-auto flex items-center justify-center">
          🌿
        </div>

        <h3 className="mt-3 text-[22px] text-[#3F4F36] font-serif">
          {title}
        </h3>

        <p className="text-xs text-gray-400 mt-1">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3 overflow-y-auto h-[360px] pr-2 custom-scroll">

        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`w-full flex items-center justify-between p-2 rounded-2xl transition-all
              ${
                selected === item.name
? "bg-[#F0F4EA] border border-[#A8BC90]"
                  : "hover:bg-gray-50"
              }`}
          >
            <div className="flex items-center gap-3">

            <img
                src={item.image}
                alt={item.name}
                className="
                w-12
                h-12
                rounded-full
                object-cover
                border
                border-[#E5E5E5]
                shrink-0
                "
            />

              <span className="text-sm text-gray-700">
                {item.name}
              </span>

            </div>

            {selected === item.name && (
              <div className="w-5 h-5 rounded-full bg-[#4D6642] text-white flex items-center justify-center">
                <Check size={12} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const RecipeBuilder = () => {
  const [superfood1, setSuperfood1] = useState("Avocado");
  const [superfood2, setSuperfood2] = useState("Chia Seeds");
  const [cuisine, setCuisine] = useState("Mediterranean");
  const [meal, setMeal] = useState("Breakfast");

  const handleGenerate = () => {
    console.log({
      superfood1,
      superfood2,
      cuisine,
      meal,
    });
  };

  return (
    <section className="bg-[#F8F6F3] py-24">

      <div className="max-w-[1450px] mx-auto px-6">

        {/* Badge */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1EEEA] text-xs uppercase tracking-[2px] text-gray-600">

            <Sparkles size={12} />

            Build Your Perfect Recipe

          </div>

          <h2 className="mt-8 text-[48px] md:text-[60px] lg:text-[64px] leading-[0.95] text-[#42533A] font-serif">

            Create Smarter Recipes
            <br />

            From What You{" "}
            <span className="italic">
              Love ♡
            </span>

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8">

            Combine two superfoods, your preferred cuisine,
            and meal timing to generate personalized healthy recipes.

          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          <SelectionCard
            title="Superfood #1"
            subtitle="Choose your first superfood"
            items={superfood1Options}
            selected={superfood1}
            setSelected={setSuperfood1}
          />

          <SelectionCard
            title="Superfood #2"
            subtitle="Choose your second superfood"
            items={superfood2Options}
            selected={superfood2}
            setSelected={setSuperfood2}
          />

          <SelectionCard
            title="Cuisine"
            subtitle="Choose your preferred cuisine"
            items={cuisineOptions}
            selected={cuisine}
            setSelected={setCuisine}
          />

          <SelectionCard
            title="Time Of Day"
            subtitle="Choose your meal time"
            items={mealOptions}
            selected={meal}
            setSelected={setMeal}
          />

        </div>

        {/* Button */}

        <div className="flex justify-center mt-12">

          <button
            onClick={handleGenerate}
            className="bg-[#4D6642] hover:bg-[#3D5234] text-white px-10 py-4 rounded-full flex items-center gap-2 transition"
          >
            <Sparkles size={16} />
            Generate Recipe
          </button>

        </div>

      </div>

    </section>
  );
};

export default RecipeBuilder;