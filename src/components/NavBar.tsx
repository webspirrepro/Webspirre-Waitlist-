"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carter_One } from "next/font/google";


const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixe top-0 w-full z-20 ">
      <nav className=" items-center  ">
        <div className=" p-4  flex justify-between items-center sm:px-[50px] bg-[#F8F7F4] border-b border-[#BBBBBB]">
          <Link href="/">
            <Image
              height={60}
              width={150}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
              alt="corebicle logo"
              className="rounded-lg cursor-pointer"
            />
          </Link>

          <div className="sm:flex hidden">
            {/* nav links */}
            <ul className=" items-center hidden lg:flex">
              <li>
                <Link
                  href="mailto:info@corebicle.com"
                  className=" hover:border hover:text-black  hover:bg-white text-white font-medium  bg-black rounded-lg py-3 p-4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                height={20}
                width={30}
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1709296171/utilities/hambuger_1_savtzt.png"
                alt="rice"
                className=""
              />
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="lg:hidden bg-[gray] bg-opacity-70">
            <div className="flex flex-col items-center mx-2">
              {/* <div className="flex items-center w-[300px] bg-white border border-[#30A2FF] rounded-md py-3 px-[20px] mb-4">
                <Image
                  height={20}
                  width={20}
                  src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/magnifier_vrq3zb.svg"
                  alt="rice"
                  className="rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Search for lodges around you..."
                  className="focus:outline-none focus:border-blue-500 pl-2 w-full"
                />
              </div> */}
              <ul className="flex flex-col items-center space-y-4 mt-10 pb-10 ">
                <li>
                  <Link
                    href="mailto:info@corebicle.com"
                    className={`${carterOne.className}  hover:text-black text-white bg-[#BB1C05] rounded-lg  py-2 px-20 sm:p-4 font-medium`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
