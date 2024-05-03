"use client";

import NavBar from "../components/NavBar";
import {
  ContactSection,
  FormSuccessModal,
  HeroSection,
  VideoModal,
} from "../components";
import { ErrorBoundary } from "react-error-boundary";

import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section3 from "../components/sections/Section3";
import Section2 from "../components/sections/Section2";
import Footer from "../components/Footer";
import React from "react";
import Fallback from "@/components/ErrorBoundary";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const [vModal, setVModal] = React.useState(false);
  const [isForm, setIsForm] = React.useState(false);
  const handleVideoToggle = () => {
    setVModal((prev) => {
      const newState = !prev;
      setIsForm(false);
      localStorage.removeItem("username");
      return newState;
    });
  };

  const handleFormToggle = () => setIsForm((prev) => !prev);

  const backgroundImageUrl =
    "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";

  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <main className="">
          <NavBar />

          {/* Hero Section */}
          <HeroSection
            bgImg={backgroundImageUrl}
            videoToggle={handleVideoToggle}
            toogleModal={() => {}}
          />
          <VideoModal open={vModal} toogleModal={handleVideoToggle} />
          <FormSuccessModal
            open={isForm}
            toogleModal={handleFormToggle}
            videoToggle={handleVideoToggle}
          />

          {/* Section 2 */}
          <Section2 />

          {/* section 3  */}
          <Section3 />

          {/* section 4 */}
          <Section4 />

          {/* section 5 */}
          <Section5 />

          {/* Contact Section */}
          <ContactSection
            toogleModal={handleFormToggle}
            open={isForm}
            videoToggle={handleVideoToggle}
          />
          <Footer toogleModal={() => {}} videoToggle={handleVideoToggle} />
        </main>
      </ErrorBoundary>
      <ScrollToTop smooth className="flex justify-center items-center " />
    </>
  );
}
