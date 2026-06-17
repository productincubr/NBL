import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

/* ==============================
   CATEGORIES
================================= */
const categories = [
  "Featured",
  "Diabetes and Pre-Diabetes",
  "Dietitian Spotlight",
  "For Providers",
  "General Health",
  "Gut Health",
  "Health",
  "Lifestyle",
  "Mental Health",
  "Nutrition",
  "Patient Stories",
  "Recipes",
  "Webinars",
  "Weight Management",
];

/* ==============================
   POSTS DATA
================================= */
const posts = [
    {
        id: 1,
        title: "Dietitian Spotlight:\nJessica Davis, RD, LDN",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        tag: "Dietitian Spotlight",
      },
      {
        id: 2,
        title: "Deep Dive: Nutrition For\nHormonal Diseases",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        tag: "Nutrition",
      },
      {
        id: 3,
        title: "Collaborative Care:\nPatients to a Dietitian",
        img: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
        tag: "For Providers",
      },
      {
        id: 4,
        title: "Beyond Ozempic",
        img: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
        tag: "Health",
      },
      {
        id: 5,
        title: "Shop Like a Dietitian",
        img: "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",
        tag: "Nutrition",
      },
      {
        id: 6,
        title: "The Ultimate Guide",
        img: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
        tag: "General Health",
      },
      {
        id: 7,
        title: "GLP-1 Medications:\nWhat to Eat While",
        img: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
        tag: "Diabetes and Pre-Diabetes",
      },
      {
        id: 8,
        title: "How a SIBO Nutritionist\nCan Help Heal Your Gut",
        img: "https://images.pexels.com/photos/5938368/pexels-photo-5938368.jpeg",
        tag: "Gut Health",
      },
      {
        id: 9,
        title: "Deep Dive: Carbohydrates",
        img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        tag: "Nutrition",
      },
      {
        id: 10,
        title: "What Does a Certified\nNutrition Support",
        img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
        tag: "Dietitian Spotlight",
      },
      {
        id: 11,
        title: "How to Lower Cholesterol\nwith Diet",
        img: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
        tag: "Health",
      },
      {
        id: 12,
        title: "Protein: How Much Do You\nReally Need?",
        img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
        tag: "Nutrition",
      }
];

/* ==============================
   ANIMATION HOOK
================================= */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/* ==============================
   CATEGORY PILL
================================= */
function Pill({ cat, active, onClick }) {
  const isActive = active === cat;

  return (
    <button
      onClick={() => onClick(cat)}
      className={`
        px-4 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap
        transition-all duration-300 border cursor-pointer
        ${isActive
          ? "bg-[#2D6A4F] text-white border-[#2D6A4F]"
          : "bg-transparent text-[#444] border-[#C0B9B0] hover:bg-black/5"
        }
      `}
    >
      {cat}
    </button>
  );
}

/* ==============================
   BLOG CARD
================================= */
function BlogCard({ post, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.55s ease ${(index % 3) * 0.1}s, transform 0.55s ease ${(index % 3) * 0.1}s`,
      }}
    >
      {/* Card wrapper with layered teal shadow */}
      <div className="relative w-full">

        {/* Back shadow layer — dark teal offset */}
        <div
          className="absolute rounded-[14px] bg-[#1C4F4F] z-0 w-full h-full"
          style={{
            top: 8,
            right: -6,
            transition: "transform 0.3s ease",
            transform: hovered ? "translate(3px, 3px)" : "translate(0, 0)",
          }}
        />

        {/* Main image card */}
        <div
          className="relative z-10 w-full overflow-hidden rounded-[14px] border-[2.5px] border-[#1C4F4F]"
          style={{
            aspectRatio: "3 / 3.2",
            boxShadow: hovered
              ? "0 16px 36px rgba(28,79,79,0.22)"
              : "0 4px 14px rgba(0,0,0,0.10)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover object-top block"
            style={{
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <p
        className="mt-3.5 text-[13px] text-center text-[#2B2B2B] leading-[1.55] px-1.5"
        style={{
          fontFamily: "Georgia, serif",
          whiteSpace: "pre-line",
        }}
      >
        {post.title}
      </p>
    </div>
  );
}

/* ==============================
   MAIN EXPORT
================================= */
export default function BlogFilter() {
  const [active, setActive] = useState("Featured");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = posts.filter((p) => {
    const matchCat = active === "Featured" || p.tag === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const row1 = categories.slice(0, 6);
  const row2 = categories.slice(6);

  return (
    <section
      className="w-full pb-16"
      style={{ background: "#F2EFE9", fontFamily: "Georgia, serif" }}
    >

      {/* ══ FILTER BAR ══ */}
      <div className="w-full bg-[#F2EFE9] pt-2 pb-4 border-b border-[#E3DED5] sticky top-0 z-20">

        {/* Row 1: search icon + first 6 pills */}
        <div className="flex items-center justify-center gap-2 flex-nowrap mb-2 px-4">

          {/* Search icon button */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="flex items-center justify-center p-1.5 rounded-full bg-transparent border-none cursor-pointer flex-shrink-0"
          >
            <Search size={16} color="#555" strokeWidth={1.8} />
          </button>

          {/* Sliding search input */}
          <div
            className="overflow-hidden flex-shrink-0"
            style={{
              maxWidth: searchOpen ? 200 : 0,
              transition: "max-width 0.35s ease",
            }}
          >
            <input
              autoFocus={searchOpen}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="bg-transparent outline-none text-[13px] text-[#333] border-b border-[#aaa] px-1.5 py-0.5 w-[190px]"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>

          {/* Row 1 pills */}
          {row1.map((cat) => (
            <Pill key={cat} cat={cat} active={active} onClick={setActive} />
          ))}
        </div>

        {/* Row 2 pills */}
        <div className="flex items-center justify-center gap-2 flex-nowrap px-4">
          {row2.map((cat) => (
            <Pill key={cat} cat={cat} active={active} onClick={setActive} />
          ))}
        </div>
      </div>

      {/* ══ BLOG GRID ══ */}
      <div className="max-w-[900px] mx-auto px-6 pt-10">

        {filtered.length === 0 ? (
          <p
            className="text-center text-[#999] text-sm mt-10"
            style={{ fontFamily: "sans-serif" }}
          >
            No posts found.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-x-7 gap-y-12">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Older Posts */}
        <div className="text-center mt-14">
          <button
            className="bg-transparent border-none cursor-pointer text-[14px] text-[#333] inline-flex items-center gap-1 border-b border-[#555] pb-0.5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Older Posts →
          </button>
        </div>
      </div>
    </section>
  );
}