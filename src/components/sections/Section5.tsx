import Link from "next/link";
import React from "react";
import AOS from "aos";

import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Section5() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714387458/utilities/Rectangle_3_1_r19lpf.png";

  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714387576/utilities/Vector_12_l9kvsk.svg";

  return (
    <div className=" ">
      <section className="relative h-[900px] sm:h-[598px]">
        <div className="sm:relative h-[900px] sm:h-[598px] items-center bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 sm:gap-4 sm:pl-[200px]">
          <div
            className="col-span-8 md:col-span-5 md:pr-[200px] relative z-10 pt-6 md:pt-0"
            data-aos="fade-up-right"
          >
            <h1
              className={`${carterOne.className} pt-[50px] px-4 text-xl md:text-[32px] text-white`}
            >
              Stay ahead of the
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl1})`,
                  backgroundSize: "contain",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-2 text-black"
              >
                curve
              </span>
            </h1>
            <p className="text-[20px] text-white px-4 my-[32px] ">
              Get exclusive access to design trends and upcoming innovations in
              the web design world. Webspirre will be your one-stop shop for
              staying inspired and informed.
            </p>
            <br />
           <Link
                href="/"
                className="mx-4 bg-black px-4 py-2 sm:py-4 sm:px-8 text-white rounded-lg sm:rounded-[20px] border border-[#BBBBBB] font-medium text-[14px] sm:text-[18px]"
              >
                Join the waitlist{" "}
              </Link>
            <img
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714663022/utilities/Group_38_3_cglhqj.svg"
              alt=""
              className="sm:hidden flex mt-10 z-0"
            />
          </div>
          <div
            data-aos="fade-up-down"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            className="col-span-3 w-full h-[511px]"
          ></div>
        </div>
        <img
          data-aos="fade-up-down"
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714214062/utilities/Frame_38_1_wzk5f9.svg"
          alt=""
          className="hidden sm:flex absolute bottom-0 z-0"
        />
      </section>
    </div>
  );
}

export default Section5;
