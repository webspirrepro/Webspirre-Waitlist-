import React from 'react'

function FormSection() {
   const backgroundImageUrl =
     "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1714388591/utilities/Component_11_l7n72h.svg";

  return (
    <div
      className="h-screen flex justify-center "
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // Position relative to allow absolute positioning of child elements
      }}
    >
      <div>
        <h1>Don’t miss out!</h1>

        <p>
           Enter your email address below to be among the first to access
          Webspirre and unlock a universe of web design inspiration.
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default FormSection
