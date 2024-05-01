import Link from "next/link";
import React from "react";
import AOS from "aos";

import { Carter_One } from "next/font/google";

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Section4() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714386226/utilities/Rectangle_4_nz9xjk.png";

  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714386443/utilities/Vector_11_ob6emq.svg";
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="">
      <section className="relative h-[598px]">
        <div className="relative h-full items-center bg-[#E4A12D] grid grid-cols-8 gap-4 ">
          <div
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative", // Position relative to allow absolute positioning of child elements
            }}
            className="col-span-3 w-full h-full "
          ></div>
          <div
            className="col-span-5 pl-[200px] relative z-10"
            data-aos="fade-up-left"
          >
            <div className="w-[568px]">
              <h1
                className={`${carterOne.className} text-[32px] text-[#242B36]`}
              >
                Powerful filtering tools to pinpoint <br /> exactly what you're{" "}
                <span
                  style={{
                    backgroundImage: `url(${backgroundImageUrl1})`,
                    backgroundSize: "contain",
                    //   backgroundPosition: "center",
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="px-4 text-[#E4A12D]"
                >
                  looking for
                </span>
              </h1>
              <p className="text-[20px] text-[#242B36] my-[32px] ">
                Search by industry, design style, page type, functionality, and
                more. Discover hidden gems you might have missed otherwise.
              </p>{" "}
              <br />
              <Link
                href="/"
                className=" bg-[#E4A12D] p-4 px-8 text-[#242B36] rounded-[20px] border border-[#242B36] font-medium text-[18px]"
              >
                Join the waitlist{" "}
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714387127/utilities/Group_39_rfdyyy.svg"
          alt=""
          className="absolute bottom-0 right-0 z-0"
          data-aos="fade-up-right"
        />{" "}
      </section>
    </div>
  );
}

export default Section4;
