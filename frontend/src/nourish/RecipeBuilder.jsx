import { useState } from "react";
import { Sparkles, Check, Clock, Flame, Leaf, ChefHat, X } from "lucide-react";
import { generateHealthyRecipe } from "../services/gemini";

// ─── Data ────────────────────────────────────────────────────────────────────

const superfood1Options = [
  { name: "Avocado",     image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=120&q=80" },
  { name: "Blueberries", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=120&q=80" },
  { name: "Spinach",     image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=120&q=80" },
  { name: "Kale",        image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=120&q=80" },
  { name: "Quinoa",      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&q=80" },
];

const superfood2Options = [
  { name: "Chia Seeds",    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=120&q=80" },
  { name: "Flax Seeds",    image: "https://images.unsplash.com/photo-1611171711912-e3f5c5e60485?w=120&q=80" },
  { name: "Almonds",       image: "https://images.unsplash.com/photo-1574570068036-bd1e3e6a7b31?w=120&q=80" },
  { name: "Pumpkin Seeds", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=120&q=80" },
  { name: "Turmeric",      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?w=120&q=80" },
];

const cuisineOptions = [
  { name: "Mediterranean", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&q=80" },
  { name: "Indian",        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=120&q=80" },
  { name: "Asian",         image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=120&q=80" },
  { name: "Mexican",       image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=120&q=80" },
  { name: "Italian",       image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=120&q=80" },
];

const mealOptions = [
  { name: "Breakfast", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=120&q=80" },
  { name: "Lunch",     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=80" },
  { name: "Dinner",    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=120&q=80" },
  { name: "Snacks",    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=120&q=80" },
];

// ─── SelectionCard ───────────────────────────────────────────────────────────

const SelectionCard = ({ title, subtitle, items, selected, setSelected }) => (
  <div className="bg-white border border-[#E6DFD5] rounded-[28px] p-6 h-[520px] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
    <div className="text-center mb-5">
      <div className="w-10 h-10 rounded-full bg-[#EEF2E8] mx-auto flex items-center justify-center">
        🌿
      </div>
      <h3 className="mt-3 text-[22px] text-[#3F4F36] font-serif">{title}</h3>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>

    <div className="space-y-3 overflow-y-auto h-[360px] pr-1">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => setSelected(item.name)}
          className={`w-full flex items-center justify-between p-2 rounded-2xl transition-all
            ${selected === item.name
              ? "bg-[#F0F4EA] border border-[#A8BC90]"
              : "hover:bg-gray-50 border border-transparent"
            }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover border border-[#E5E5E5] shrink-0"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=EEF2E8&color=4D6642&size=48`;
              }}
            />
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
          {selected === item.name && (
            <div className="w-5 h-5 rounded-full bg-[#4D6642] text-white flex items-center justify-center shrink-0">
              <Check size={12} />
            </div>
          )}
        </button>
      ))}
    </div>
  </div>
);

// ─── Recipe Output ────────────────────────────────────────────────────────────

const RecipeOutput = ({ recipe, selections, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="bg-white rounded-[32px] shadow-xl border border-[#E6DFD5] overflow-hidden">

        {/* Header Banner */}
        <div className="bg-[#4D6642] px-10 py-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition"
          >
            <X size={20} />
          </button>
          <div className="flex flex-wrap gap-3 mb-4">
            {[selections.superfood1, selections.superfood2, selections.cuisine, selections.meal].map((tag) => (
              <span key={tag} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-serif text-white leading-tight">
            {selections.superfood1} & {selections.superfood2}
            <br />
            <span className="text-white/80 text-2xl">
              {selections.cuisine} {selections.meal} Recipe
            </span>
          </h3>
          <div className="flex gap-5 mt-5 text-white/70 text-sm">
            <span className="flex items-center gap-1.5"><Clock size={14} /> 25–30 min</span>
            <span className="flex items-center gap-1.5"><Flame size={14} /> Healthy</span>
            <span className="flex items-center gap-1.5"><Leaf size={14} /> Nutritious</span>
            <span className="flex items-center gap-1.5"><ChefHat size={14} /> Easy</span>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="p-8 md:p-12">
          <div
            className="
              prose prose-lg max-w-none
              prose-headings:text-[#42533A] prose-headings:font-serif
              prose-p:text-[#555] prose-li:text-[#555]
              prose-ul:space-y-2 prose-ol:space-y-2
              prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
              prose-strong:text-[#42533A]
            "
            dangerouslySetInnerHTML={{ __html: recipe }}
          />
        </div>

      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const RecipeBuilder = () => {
  const [superfood1, setSuperfood1] = useState("Avocado");
  const [superfood2, setSuperfood2] = useState("Chia Seeds");
  const [cuisine, setCuisine] = useState("Mediterranean");
  const [meal, setMeal] = useState("Breakfast");

  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setRecipe("");
      setErrorMsg("");

      const dish = `${superfood1} and ${superfood2} ${cuisine} ${meal}`;
      const result = await generateHealthyRecipe(dish, [cuisine, meal]);
      setRecipe(result);

      // Scroll to result
      setTimeout(() => {
        document.getElementById("recipe-output")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (error) {
      console.error("Recipe error:", error);
      setErrorMsg("Recipe generate karne mein error aaya. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8F6F3] py-24">
      <div className="max-w-[1450px] mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1EEEA] text-xs uppercase tracking-[2px] text-gray-600">
            <Sparkles size={12} />
            Build Your Perfect Recipe
          </div>
          <h2 className="mt-8 text-[48px] md:text-[60px] lg:text-[64px] leading-[0.95] text-[#42533A] font-serif">
            Create Smarter Recipes
            <br />
            From What You <span className="italic">Love ♡</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8">
            Combine two superfoods, your preferred cuisine,
            and meal timing to generate personalized healthy recipes.
          </p>
        </div>

        {/* Selection Cards */}
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

        {/* Summary Bar */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white border border-[#E6DFD5] rounded-2xl px-6 py-3 flex flex-wrap gap-2 items-center text-sm text-gray-500">
            <span>Your selection:</span>
            {[superfood1, superfood2, cuisine, meal].map((item) => (
              <span key={item} className="bg-[#EEF2E8] text-[#4D6642] px-3 py-1 rounded-full text-xs font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Error */}
        {errorMsg && (
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
              ⚠️ {errorMsg}
            </div>
          </div>
        )}

        {/* Generate Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-[#4D6642] hover:bg-[#3D5234] disabled:opacity-60 text-white px-10 py-4 rounded-full flex items-center gap-2 transition text-base"
          >
            <Sparkles size={16} />
            {loading ? "Generating Recipe..." : "Generate Recipe"}
          </button>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-[32px] border border-[#E6DFD5] overflow-hidden animate-pulse">
              <div className="bg-[#EEF2E8] h-48 w-full" />
              <div className="p-10 space-y-4">
                <div className="h-6 bg-[#F1EEEA] rounded-full w-2/3" />
                <div className="h-4 bg-[#F1EEEA] rounded-full w-full" />
                <div className="h-4 bg-[#F1EEEA] rounded-full w-5/6" />
                <div className="h-4 bg-[#F1EEEA] rounded-full w-4/6" />
                <div className="h-4 bg-[#F1EEEA] rounded-full w-3/4" />
              </div>
            </div>
          </div>
        )}

        {/* Recipe Output */}
        <div id="recipe-output">
          {recipe && !loading && (
            <RecipeOutput
              recipe={recipe}
              selections={{ superfood1, superfood2, cuisine, meal }}
              onClose={() => setRecipe("")}
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default RecipeBuilder;