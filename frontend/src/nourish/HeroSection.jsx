import { useState, useRef } from "react";
import {
  Search, Sparkles, Heart, Dumbbell, Flame,
  Shield, Leaf, Baby, Grid2X2, ChevronDown, ChevronUp,
} from "lucide-react";
import { generateHealthyRecipe, generateRecipeImage } from "../services/gemini";

const goals = [
  { icon: <Flame size={14} />, title: "Weight Loss" },
  { icon: <Dumbbell size={14} />, title: "High Protein" },
  { icon: <Shield size={14} />, title: "Diabetes Friendly" },
  { icon: <Leaf size={14} />, title: "Gut Health" },
  { icon: <Baby size={14} />, title: "Kids Friendly" },
];

const HeroSection = () => {
  const [dish, setDish] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((item) => item !== goal) : [...prev, goal]
    );
  };

  const handleGenerateRecipe = async () => {
    if (!dish.trim()) {
      setErrorMsg("Please enter a dish name");
      return;
    }

    try {
      setLoading(true);
      setImageLoading(true);
      setRecipe("");
      setRecipeImage(null);
      setErrorMsg("");
      setExpanded(false);

      const [imageResult, recipeResult] = await Promise.allSettled([
        generateRecipeImage(dish),
        generateHealthyRecipe(dish, selectedGoals),
      ]);

      if (imageResult.status === "fulfilled") {
        setRecipeImage(imageResult.value);
      }
      setImageLoading(false);

      if (recipeResult.status === "fulfilled") {
        setRecipe(recipeResult.value);
      } else {
        throw new Error(recipeResult.reason?.message || "Recipe generation failed");
      }
    } catch (error) {
      console.error("Recipe generation error:", error);
      setErrorMsg("Please try again.");
    } finally {
      setLoading(false);
      setImageLoading(false);
    }
  };

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
        <h1 className="mt-8 text-[65px] leading-[1] text-[#42533A] font-playfair regular">
          Turn the food you love
          <br />
          into food that
          <span className="italic font-playfair text-[#515B4E]"> loves you back.</span>
          <Heart className="inline ml-3 text-[#D77B67]" size={40} strokeWidth={1.5} />
        </h1>

        {/* Description */}
        <p className="mt-8 text-[#6D6D6D] text-[20px] leading-9 max-w-[750px] mx-auto">
          Make any dish healthier with smart ingredient swaps, better cooking methods,
          and nutritionist-backed guidance tailored to your goals.
        </p>

        {/* Search Bar */}
        <div className="mt-14 max-w-[900px] mx-auto bg-white rounded-full shadow-lg border border-[#ECE7DF] flex items-center overflow-hidden">
          <div className="flex-1 flex items-center px-6">
            <Search size={18} className="text-gray-400" />
            <input
              value={dish}
              onChange={(e) => { setDish(e.target.value); setErrorMsg(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleGenerateRecipe()}
              type="text"
              placeholder="What would you like to make healthier?"
              className="w-full px-4 py-5 outline-none bg-transparent text-gray-600 placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleGenerateRecipe}
            disabled={loading}
            className="bg-[#4A5D45] text-white px-8 py-4 rounded-full mr-2 flex items-center gap-2 hover:bg-[#3D5333] duration-300 disabled:opacity-60"
          >
            <Sparkles size={16} />
            {loading ? "Generating..." : "Generate Recipe"}
          </button>
        </div>

        {/* Error */}
        {errorMsg && (
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Goal Text */}
        <p className="mt-10 text-[12px] text-[#7A7A7A]">Choose your goals (optional)</p>

        {/* Goal Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-3">
          {goals.map((goal, index) => {
            const active = selectedGoals.includes(goal.title);
            return (
              <button
                key={index}
                onClick={() => toggleGoal(goal.title)}
                className={`px-5 py-3 rounded-xl border text-sm flex items-center gap-2 duration-300
                  ${active
                    ? "bg-[#4D6642] text-white border-[#4D6642]"
                    : "bg-white text-[#555] border-[#E5E0D8] hover:border-[#4D6642] hover:text-[#4D6642]"
                  }`}
              >
                {goal.icon}
                {goal.title}
              </button>
            );
          })}
        </div>

        {/* More Goals */}
        <div className="mt-4">
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F3F0EB] border border-[#E5E0D8] text-sm text-[#555]">
            <Grid2X2 size={15} />
            More Goals
          </button>
        </div>

        {/* ── Loading Skeleton ── */}
        {loading && (
          <div className="max-w-5xl mx-auto mt-12 mb-16">
            <div className="bg-white rounded-3xl shadow-xl border border-[#E7E2DA] overflow-hidden">
              <div className="flex flex-col md:flex-row gap-0">

                {/* Left — image skeleton */}
                <div className="md:w-[340px] shrink-0 h-[320px] md:h-auto bg-[#F1EEEA] flex flex-col items-center justify-center gap-3">
                  {imageLoading ? (
                    <>
                      <div className="w-9 h-9 border-4 border-[#4A5D45] border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs text-[#999]">Loading image...</p>
                    </>
                  ) : recipeImage ? (
                    <img src={recipeImage} alt="food" className="w-full h-full object-cover" />
                  ) : null}
                </div>

                {/* Right — text skeleton */}
                <div className="flex-1 p-8 animate-pulse space-y-4">
                  <div className="h-7 bg-[#E7E2DA] rounded-full w-40" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-full mt-6" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-5/6" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-4/6" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-full mt-4" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-3/4" />
                  <div className="h-3 bg-[#F1EEEA] rounded-full w-5/6" />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ── Recipe Result — Left image + Right content ── */}
        {recipe && !loading && (
          <div className="max-w-4xl mx-auto mt-12 mb-16 text-left">
            <div className="bg-white rounded-2xl shadow-lg border border-[#E7E2DA] overflow-hidden">
              <div className="flex flex-col md:flex-row">

                {/* LEFT — Small Image */}
                <div className="md:w-[180px] shrink-0">
                  {recipeImage ? (
                    <img
                      src={recipeImage}
                      alt={`Healthy ${dish}`}
                      className="w-full h-[180px] md:h-full object-cover"
                      onError={(e) => { e.target.parentElement.style.display = "none"; }}
                    />
                  ) : (
                    <div className="w-full h-[180px] md:h-full bg-[#F1EEEA] flex items-center justify-center">
                      <p className="text-[#bbb] text-xs">No image</p>
                    </div>
                  )}
                </div>

                {/* RIGHT — Content */}
                <div className="flex-1 flex flex-col min-w-0">

                  {/* Title bar */}
                  <div className="px-6 pt-5 pb-3 border-b border-[#F1EEEA]">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      {selectedGoals.map((g) => (
                        <span key={g} className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#EEF3EC] text-[#4D6642] rounded-full font-medium">
                          {g}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-serif text-[#42533A] capitalize">
                      Healthy {dish}
                    </h2>
                  </div>

                  {/* Collapsible content */}
                  <div className="relative flex-1">
                    <div
                      className={`px-6 py-4 overflow-hidden transition-all duration-500 ${expanded ? "max-h-[2000px]" : "max-h-[200px]"
                        }`}
                    >
                      <div
                        className="
                  prose prose-xs max-w-none
                  prose-headings:text-[#42533A] prose-headings:font-serif
                  prose-headings:text-sm prose-headings:font-semibold
                  prose-headings:mt-4 prose-headings:mb-1
                  prose-p:text-[#777] prose-p:text-xs prose-p:leading-relaxed prose-p:my-1
                  prose-li:text-[#777] prose-li:text-xs
                  prose-ul:my-1 prose-ol:my-1
                  prose-ul:space-y-0.5 prose-ol:space-y-0.5
                  prose-strong:text-[#555] prose-strong:font-semibold
                "
                        dangerouslySetInnerHTML={{ __html: recipe }}
                      />
                    </div>

                    {/* Fade overlay */}
                    {!expanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  {/* View More / Less */}
                  <div className="px-6 pb-5 pt-1">
                    <button
                      onClick={() => setExpanded((prev) => !prev)}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#4A5D45] hover:text-[#3D5333] duration-200 border border-[#C8D9C4] px-4 py-2 rounded-full hover:bg-[#EEF3EC]"
                    >
                      {expanded ? (
                        <><ChevronUp size={12} /> View Less</>
                      ) : (
                        <><ChevronDown size={12} /> View Full Recipe</>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default HeroSection;