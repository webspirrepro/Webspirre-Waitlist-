import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carter_One } from "next/font/google";
import AOS from "aos";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714211870/utilities/Vector_8_kgqjio.svg";

  return (
    <div>
      <section className="h-[779px] sm:mt-[170px] px-5 xl:px-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          <div className="col-span-4 flex-row" data-aos="fade-left">
            <h1
              className={` ${carterOne.className} text-[24px] sm:text-[30px]`}
            >
              Webspirre has everything you <br /> need to ignite youre{" "}
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "contain",
                  //   backgroundPosition: "center",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-4"
              >
                {" "}
                creative fire.{" "}
              </span>
            </h1>
            <p className="text-sm xl:text-lg my-[30px]">
              Tired of endlessly trawling through different websites searching
              for that perfect spark of inspiration for the project at hand? We
              get it. That's why we're building Webspirre.
            </p>{" "}
            <br />
            <div className="pb-[30px]">
              <Link
                href="/"
                className="bg-black  px-4 py-2 sm:py-4 sm:px-8 text-white rounded-lg sm:rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px]"
              >
                Join the waitlist{" "}
              </Link>
            </div>
          </div>
          <div
            className="col-span-4 justify-center items-center flex mt-8 md:mt-0"
            data-aos="fade-right"
          >
            {" "}
            <Image
              height={20}
              width={430}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127895/utilities/Rectangle_1_xva0pc.svg"
              alt="rice"
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
