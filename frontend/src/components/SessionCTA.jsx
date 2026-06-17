

import { ArrowRight } from "lucide-react";

const SessionCTA = () => {
  return (
    <section className="w-full bg-[#557765] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">

        {/* Text */}
        <p className="text-white text-sm md:text-base font-light mb-5">
          Book a Virtual Session
        </p>

        {/* Button */}
        <button
          className="
            group
            bg-white
            text-[#2E3E32]
            px-8
            py-3
            rounded-full
            text-sm
            font-medium
            flex
            items-center
            gap-2
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          Start Your Journey

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>
    </section>
  );
};

export default SessionCTA;