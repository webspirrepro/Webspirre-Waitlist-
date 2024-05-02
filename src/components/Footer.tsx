import { ModalType } from "@/types/types";
import Link from "next/link";
import React from "react";

const Footer: React.FC<ModalType> = ({ videoToggle }) => {
  return (
    <div className=" bottom-0 sm:px-[100px] px-4 py-4 flex flex-col sm:flex-row sm:justify-between w-full bg-black">
      <div className=" flex justify-between sm:justify-start gap-8">
        {/* logo */}
        <img
          src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491812/utilities/logo_vxvylb.svg"
          alt=""
        />

        {/* social media */}
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491814/utilities/image_13_ppqlww.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491812/utilities/image_14_dr70qa.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491812/utilities/image_15_f6gee8.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491812/utilities/image_16_mekc4o.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-between sm:justify-end gap-2 sm:gap-4">
        <span
          className="bg-black border-2 border-white flex gap-2 sm:p-4 p-2 px-4 sm:px-8 text-white  rounded-lg justify-between sm:justify-start sm:font-medium text-[12px] sm:text-[16px] cursor-pointer"
          onClick={videoToggle}
        >
          <img
            src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714491812/utilities/play_icon_xomang.svg"
            alt=""
          />
          See how it works{" "}
        </span>
        <Link
          href="mailto:info@corebicle.com"
          className="bg-[#FAB843] text-black  p-2 sm:p-4 sm:px-8 px-4  rounded-lg font-medium text-[12px] sm:text-[16px]"
        >
          Contact Us{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
