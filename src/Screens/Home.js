import React, { useRef } from "react";
import Navbar from "../components/Navbars";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Technologies from "../components/Technologies";
import Contacts from "../components/Contacts";

function Home() {
  const ref = useRef(null);
  return (
    <div>
      <Navbar isFromHome={true} />
      <Hero />
      <Project isFromHome={true} />
      <Blog isfromHome={true} />
      <Technologies />
      <Contacts />
    </div>
  );
}

export default Home;
