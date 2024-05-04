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
    <div className="w-full sm:800">
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="justify-center w-full flex-row  items-center space-y-4 pt-[50px] px-4 sm:pt-[100px] mb-[50px] sm:mb-[150px]"
      >
        <article className="flex-flex-col w-full max-w-full space-y-6">
          <div
            className="flex flex-col max-w-[750px]  w-full mx-auto items-center "
            data-aos="zoom-in-up"
          >
            <h1
              className={`${carterOne.className}  text-[32px] sm:text-5xl text-center font-black leading-[50px] sm:leading-[75px]`}
            >
               
              <span
                style={{
                  position: "relative",
                }}
                className="px-[10px] py-2 "
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

          <div className="flex items-center justify-center  gap-4 pt-[10] sm:pt-[16px] pd-[10px] sm:pb-[72px]">
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

          <div className="relative ">
            <Image
              height={20}
              width={1030}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714127396/utilities/Group_40_fkagjj.svg"
              alt="rice"
              className="w-full relative"
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                zIndex: 1,
              }}
              data-aos="zoom-in-right"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
              style={{ zIndex: 2 }}
            />
          </div>
        </article>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
