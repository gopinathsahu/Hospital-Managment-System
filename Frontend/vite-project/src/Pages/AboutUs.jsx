import React from "react";
import Hero from "../Component/Hero";
import Biography from "../Component/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;