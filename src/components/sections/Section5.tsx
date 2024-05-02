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
    <div className="container ">
      <section className="relative md:h-[598px]">
        <div className="relative h-full items-center bg-black grid md:grid-cols-8 gap-4 md:pl-[200px] px-4 md:px-0">
          <div
            className="col-span-8 md:col-span-5 md:pr-[200px] relative z-10"
            data-aos="fade-up-right"
          >
            <h1
              className={`${carterOne.className} text-xl md:text-[32px] text-white`}
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
            <p className="text-[20px] text-white my-[32px] ">
              Get exclusive access to design trends and upcoming innovations in
              the web design world. Webspirre will be your one-stop shop for
              staying inspired and informed.
            </p>
            <br />
            <Link
              href="/"
              className="bg-black py-2 md:p-4 px-6 md:px-8 text-[#E4A12D] rounded-[20px] border border-[#E4A12D] font-medium text-xs md:text-[18px]"
            >
              Join the waitlist
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            className="col-span-3 w-full h-full"
          ></div>
        </div>
        <img
          data-aos="fade-up-down"
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714214062/utilities/Frame_38_1_wzk5f9.svg"
          alt=""
          className="absolute bottom-0 z-0"
        />
      </section>
    </div>
  );
}

export default Section5;
