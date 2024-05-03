import React from "react";
// import { GiPlayButton } from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";
import { ModalType, SectionType } from "../../types/types";
import AOS from "aos";
import { GiPlayButton } from "react-icons/gi";

import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface HeroSectionType extends ModalType, SectionType {}

const HeroSection: React.FC<HeroSectionType> = ({ bgImg, videoToggle }) => {
  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v171422739/utilities/Vector_9_uu9gsi.svg";
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="justify-center w-full flex-row mt-0 my-0 md:mt-[100px] h-suto md:h-screen items-center space-y-4 py-12 md:py-20"
      >
        <article className="flex-flex-col w-full max-w-full space-y-6">
          <div
            className="flex flex-col max-w-[750px]  w-full mx-auto items-center "
            data-aos="zoom-in-up"
          >
            <h1
              className={`${carterOne.className} text-[32px] sm:text-5xl text-center font-black `}
            >
              <span
                style={{
                  position: "relative",
                }}
                className="px-[10px] py-2"
              >
                Finding
                <img
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714747727/utilities/Vector_3_um0vqs.png"
                  className="absolute top-0 -left-5"
                  alt=""
                />
              </span>
              web design inspiration doesn’t have to be{" "}
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl1})`,
                  backgroundSize: "contain",
                  //   backgroundPosition: "center",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-4"
              >
                Hard.
              </span>
            </h1>
            <h1 className="px-4 sm:text-2xl text-[16px] font-medium text-center pt-4">
              We are building the ultimate web design inspiration platform. Join
              the waitlist, and be the first person to know when we launch.
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Link
              href="#contact-section"
              className="bg-black px-4 py-2 sm:py-4 sm:px-8 text-white rounded-lg sm:rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px]"
            >
              Join the waitlist
            </Link>
            <div
              className="bg-white  sm:p-4 sm:px-8 px-4 py-2 text-black rounded-lg sm:rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px] flex items-center space-x-3 cursor-pointer"
              onClick={videoToggle}
            >
              <GiPlayButton size={20} />
              <span>See how it works</span>
            </div>
          </div>
          {/*@todo still working here */}
          <Image
            height={20}
            width={1030}
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127396/utilities/Group_40_fkagjj.svg"
            alt="rice"
            className="w-full backdrop-brightness-75 relative"
            style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
            data-aos="zoom-in-right"
          />
        </article>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
