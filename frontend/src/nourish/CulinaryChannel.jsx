import { Sparkles, Heart, ShieldCheck, Users } from "lucide-react";
import doctorImg from "../assets/Subtract.png";

const CulinaryChannel = () => {
  return (
    <section className="w-full bg-[#F8F6F3] overflow-hidden">
      <div className="w-full">

        {/* TOP SECTION */}
        <div className="bg-[#F8F6F3] text-center pt-16 relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F1EEEA] rounded-sm mb-6">
            <Sparkles size={11} className="text-[#5E5E5E]" />
            <span className="text-[11px] uppercase tracking-[2.5px] text-[#5E5E5E] font-sans">
              Building Something Special
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
            text-[#2A1F14]
            font-playfair
            regular
            leading-[1.05]
            px-5
            text-[48px]
            md:text-[62px]
            lg:text-[80px]
            "
          >
            Health-Inspired
            <br />
            Culinary Channel{" "}
            <span className="text-[#D88773]">♡</span>
          </h2>

          {/* White Curved Card */}
          <div
            className="
            inline-block
            bg-[#fff5f0]
            rounded-b-[60px]
            px-10
            md:px-12
            pt-3
            pb-8
            min-w-[330px]
            mt-10
            mb-[-60px]
            "
          >
            <p className="italic text-[#6B5B53] text-[26px] md:text-[40px] font-playfair ">
              will be here soon.
            </p>

            <p className="italic text-[#D88773] text-[25px] md:text-[30px] font-playfair mt-2">
              Follow us
            </p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="
          relative
          z-[1]
          mt-[-50px]
          w-full
          w-full
          mx-auto
          "
        >
          <img
            src={doctorImg}
            alt="Doctors and Chefs"
            className="w-full block object-cover object-center"
          />
        </div>

        {/* NEWSLETTER SECTION */}
        <div
          className="
          bg-[#E9DED1]
          rounded-b-[32px]
          px-6
          md:px-10
          py-10
          w-full
          mx-auto
          "
        >
          <div className="text-center">

            <p
              className="
              text-[#5D534B]
              max-w-[480px]
              mx-auto
              mb-6
              leading-8
              text-[14px]
              md:text-[16px]
              "
            >
              Nutritionists and chefs, working together
              <br />
              to create a channel that nourishes you inside and out.
            </p>

            <div
              className="
              flex
              flex-col
              md:flex-row
              justify-center
              gap-3
              "
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                bg-white
                rounded-full
                px-6
                py-3
                md:w-[260px]
                outline-none
                border-none
                text-sm
                "
              />

              <button
                className="
                bg-[#4D6642]
                hover:bg-[#394E30]
                text-white
                px-6
                py-3
                rounded-full
                flex
                items-center
                justify-center
                gap-2
                text-sm
                transition-all
                duration-300
                "
              >
                <Sparkles size={13} />
                Generate Recipe
              </button>
            </div>
          </div>

          {/* FEATURES */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            mt-8
            border-t
            border-[#D8CABB]
            max-w-[700px]
            mx-auto
            "
          >
            {/* Feature 1 */}
            <div className="text-center py-7">
              <div className="flex justify-center">
                <ShieldCheck
                  size={22}
                  className="text-[#6B7C5D]"
                />
              </div>

              <p className="mt-3 text-[12px] text-[#4B4B4B] leading-7">
                Science-backed nutrition
                <br />
                you can trust
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center py-7 md:border-x border-[#D8CABB]">
              <div className="flex justify-center">
                <Heart
                  size={22}
                  className="text-[#6B7C5D]"
                />
              </div>

              <p className="mt-3 text-[12px] text-[#4B4B4B] leading-7">
                Recipes that heal
                <br />
                and satisfy
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center py-7">
              <div className="flex justify-center">
                <Users
                  size={22}
                  className="text-[#6B7C5D]"
                />
              </div>

              <p className="mt-3 text-[12px] text-[#4B4B4B] leading-7">
                A community that
                <br />
                supports your journey
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CulinaryChannel;