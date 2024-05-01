import Link from "next/link";
import React from "react";
import AOS from "aos";

import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Section3() {
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
      <section className="relative h-[598px]">
        <div className="relative h-full items-center bg-black grid grid-cols-8 gap-4 pl-[200px]">
          <div
            className="col-span-5 pr-[200px] relative z-10"
            data-aos="fade-up-left"
          >
            <h1 className={`${carterOne.className}  text-[30px] text-white`}>
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
            <p className="text-sm xl:text-lg text-white my-[32px] ">
              Tired of endlessly trawling through different websites searching
              for that perfect spark of inspiration for the project at hand? We
              get it. That's why we're building Webspirre.
            </p>{" "}
            <br />
            <Link
              href="/"
              className=" bg-black p-4 px-8 text-[#E4A12D] rounded-[20px] border border-[#E4A12D] font-medium text-[18px]"
            >
              Join the waitlist{" "}
            </Link>
          </div>
          <div
            data-aos="fade-up-right"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative", // Position relative to allow absolute positioning of child elements
            }}
            className="col-span-3 w-full h-full "
          ></div>
        </div>
        <img
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714214062/utilities/Frame_38_1_wzk5f9.svg"
          alt=""
          className="absolute bottom-0 z-0"
        />{" "}
      </section>
    </div>
  );
}

export default Section3;
