import React from 'react'
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import newsletterImg from "../assets/GetInsiderExclusives.png";


const NewsletterCTA = () => {

    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="w-full bg-[#F2EFE9] py-16 px-6"
        >
            <div className="max-w-[550px] mx-auto flex flex-col items-center text-center">

                {/* Heading */}
                <h2
                    className={`
                text-[42px]
                md:text-[50px]
                font-serif
                font-normal
                text-[#314C35]
                mb-6
                transition-all
                duration-700
                ${inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }
              `}
                >
                    Get Insider Exclusives
                </h2>

                {/* Newsletter Image */}
                <div
                    className={`
                transition-all
                duration-700
                delay-150
                ${inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                        }
              `}
                >
                    <img
                        src={newsletterImg}
                        alt="Newsletter"
                        className="
                  w-[230px]
                  md:w-[260px]
                  object-contain
                  mx-auto
                "
                    />
                </div>

                {/* Description */}
                <p
                    className={`
                mt-8
                max-w-[340px]
                text-[13px]
                leading-7
                text-[#6B6B6B]
                font-sans
                transition-all
                duration-700
                delay-300
                ${inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }
              `}
                >
                    Join our email list to gain access to a treasure trove of
                    nutrition tips, the latest on nutrition research, and delicious
                    recipes, all curated by our expert registered dietitians.
                </p>

                {/* Button */}
                <button
                    className={`
                mt-8
                flex
                items-center
                gap-2
                bg-[#193C0F]
                hover:bg-[#28511f]
                text-white
                text-[13px]
                font-medium
                px-8
                py-4
                rounded-full
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                ${inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }
              `}
                >
                    Subscribe To Our Newsletter
                    <ArrowRight size={14} />
                </button>

            </div>
        </section>
    );
}

export default NewsletterCTA;
