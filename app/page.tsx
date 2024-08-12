"use client";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Experience from "./components/Experience";
import SkillsXs from "./components/SkillsXs";
import "./components/header.css";
import ProductOverview from "./components/ProductOverview";
// import Contact from './components/Contact';
import AnimatedCursor from "react-animated-cursor";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Home() {
  const TRACKING_ID = "G-ZT4DGR7LPY";
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home page" });
  }, []);

  return (
    <main className="fo h-full w-full">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        //  outerAlpha={0}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}

        //  innerStyle={{
        //    backgroundColor: 'var(--cursor-color)'
        //  }}
      />
      <Header />
      <SkillsXs/>
      <div className="bg-[#0C0C0C] md:p-5 p-0">
        <About />
      </div>
      <Experience />
      <ProductOverview />
      <div className="bg-[#0C0C0C] md:p-5 p-0">
      <Project />
      </div>
      {/* <Contact/> */}
      <Resume />
    </main>
  );
}
