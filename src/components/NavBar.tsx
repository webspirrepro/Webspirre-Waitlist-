"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";





function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <div className="fixe top-0 w-full sm:px-[50px] py-[8px] bg-[#F8F7F4] border-b border-[#BBBBBB] z-20 ">
      <nav className=" items-center">
        <div className=" p-4  flex justify-between items-center ">
          <Link href="/">
            <Image
              height={60}
              width={150}
              src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg"
              alt="corebicle logo"
              className="rounded-lg cursor-pointer"
            />
          </Link>

          <div className="">
            {/* nav links */}
            <ul className=" items-center ">
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
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
