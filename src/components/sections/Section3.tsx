import Link from "next/link";
import React from "react";
import AOS from "aos";

import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Section3 = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714214040/utilities/Rectangle_3_ydmuae.png";

  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714216695/utilities/Vector_10_eafast.svg";

  return (
    <div className="">
      <section className="relative h-[900px] sm:h-[598px]">
        <div className="sm:relative h-[900px] sm:h-[598px] items-center bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 sm:gap-4 sm:pl-[200px]">
          <div
            className="col-span-5  sm:pr-[200px] relative z-10  pt-6 md:pt-0"
            data-aos="fade-up-left"
          >
            <h1
              className={`${carterOne.className} px-4  text-xl md:text-[32px] text-white`}
            >
              A vast collection of some of the <br /> internet’s best{" "}
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl1})`,
                  backgroundSize: "contain",
                  //   backgroundPosition: "center",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-4 text-black"
              >
                designed websites.
              </span>
            </h1>
            <p className="text-sm xl:text-lg  px-4 text-white my-[32px] ">
              Tired of endlessly trawling through different websites searching
              for that perfect spark of inspiration for the project at hand? We
              get it. That's why we're building Webspirre.
            </p>{" "}
            <br />
            <Link
              href="/"
              className="bg-black p-4 mx-4 px-8 text-[#E4A12D] rounded-[20px] border border-[#E4A12D] font-medium text-[18pxbg-black px-4 py-2 sm:py-4 sm:px-8 text-[#E4A12D] rounded-lg sm:rounded-[20px] border border-[#E4A12D] font-medium text-[14px] sm:text-[18px]"
            >
              Join the waitlist{" "}
            </Link>
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714659859/utilities/Group_38_spm24r.svg"
              alt=""
              className="mt-20 sm:hidden"
            />{" "}
          </div>
          <div
            data-aos="fade-up-right"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative", // Position relative to allow absolute positioning of child elements
            }}
            className="col-span-3 w-full h-[511px] sm:h-full "
          ></div>
        </div>
        <img
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714214062/utilities/Frame_38_1_wzk5f9.svg"
          alt=""
          className="absolute hidden sm:block bottom-0 z-0"
        />{" "}
      </section>
    </div>
  );
};

export default Section3;
