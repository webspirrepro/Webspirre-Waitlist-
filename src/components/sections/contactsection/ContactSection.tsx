import React from "react";
import ContactForm from "./ContactForm";
import { Carter_One, Poppins } from "next/font/google";
import cx from "classnames";
import { ModalType } from "@/types/types";
const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ContactSection: React.FC<ModalType> = ({
  toogleModal,
  open,
  videoToggle,
}) => {
  const backgroundImageUrl1 =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714212739/utilities/Vector_9_uu9gsi.svg";
  const bgImg =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714388591/utilities/Component_11_l7n72h.svg";

  // crypto.randomUUID

  return (
    <>
      <div
        id="contact-section"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative", // Position relative to allow absolute positioning of child elements
        }}
        className="justify-center w-full flex-row h- items-center space-y-4 pt-20"
      >
        <section className="py-20 md:py-0 md:pt-20 w-full">
          <div className="text-center mx-auto max-w-[80%] md:max-w-5xl">
            <h1
              className={`${carterOne.className} text-xl md:text-6xl text-center `}
            >
              <span
                style={{
                  backgroundImage: `url(${backgroundImageUrl1})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                }}
                className="px-4 md:px-8"
              >
                Don't
              </span>{" "}
              miss out!
            </h1>
            <p
              className={cx(
                poppins.className,
                "text-xs md:text-2xl font-medium md:font-bold mt-4 md:mt-8"
              )}
            >
               Enter your email address below to be among the first to access
              Webspirre and unlock a universe of web design inspiration.
            </p>
          </div>
          <div className="mt-4 md:mt-10 mx-0 md:mx-auto md:max-w-[70%] w-full relative hidden md:block">
            <ContactForm
              toogleModal={toogleModal}
              open={open}
              videoToggle={videoToggle}
            />
          </div>
        </section>
      </div>
      <div className="mt-4 md:mt-10 mx-0 md:mx-auto md:max-w-[70%] w-full relative block md:hidden">
        <ContactForm
          toogleModal={toogleModal}
          open={open}
          videoToggle={videoToggle}
        />
      </div>
    </>
  );
};

export default ContactSection;
