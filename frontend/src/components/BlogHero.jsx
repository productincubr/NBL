import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

// Replace with your actual imports
const img1 =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=85";

const img2 =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=85";

const img3 =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85";

const images = [
  {
    src: img1,
    alt: "Fresh vegetables",
  },
  {
    src: img2,
    alt: "Doctor",
  },
  {
    src: img3,
    alt: "Salad",
  },
];

const BlogHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#F2EFE9] min-h-screen">

      {/* Breadcrumb */}

      <div className="px-8 pt-6">

        <div className="flex items-center gap-1 text-[15px] text-[#666] font-sans">

          <a
            href="/"
            className="underline underline-offset-2 hover:text-black transition"
          >
            Home
          </a>

          <ChevronRight
            size={13}
            className="text-[#999]"
          />

          <span>Blog</span>

        </div>

      </div>

      {/* Hero Content */}

      <div className="flex flex-col items-center pt-20 pb-20">

        {/* Images */}

        <div className="flex items-center justify-center gap-5">

          {images.map((img, index) => {

            const isMiddle = index === 1;

            return (
              <div
                key={index}
                className={`
                overflow-hidden
                rounded-[22px]
                border-[3px]
                border-[#165B5B]
                shadow-lg
                transition-all
                duration-700
                ${
                  isMiddle
                    ? "w-[220px] h-[270px]"
                    : "w-[190px] h-[245px]"
                }
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  hover:scale-105
                  duration-500
                  "
                />
              </div>
            );
          })}

        </div>

        {/* Heading */}

        <h1
          className={`
          mt-12
          text-center
          text-[#47624E]
          font-playfair
          regular
          text-[40px]
          md:text-[56px]
          transition-all
          duration-700
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }
          `}
        >
          Lovneet Health Blog
        </h1>

      </div>

    </section>
  );
};

export default BlogHero;