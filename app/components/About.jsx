import React from "react";
import profilePic from "../../public/profilePic.jpg";
import "./about.css";
import Image from "next/image";
import ReactGA from "react-ga4";

const About = () => {
  const handleClick = (platform) => {
    ReactGA.event({
      category: "Views category",
      action: "Click",
      label: platform,
    });
  };

  return (
    <section id="about" className="md:h-[500px] bg-[#191916] w-full rounded-xl shadow-xl flex items-center justify-center">
      <div
        // initial={{ opacity: 0, scale: 0.8 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
        className="w-full h-full md:grid grid-cols-3 gap-2 mt-5"
      >
        <div className="col-span-2  flex justify-center items-center flex-col">
          <div
            className=" font-bold text-2xl md:text-3xl text-white opacity-40"
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            About Me
          </div>
          <div
            className="text-[9px] md:text-[15px] mb-2 text-white opacity-40"
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            Im specialized in Full stack stack and Im passionate about building
            Scalable websites.
          </div>

          <div className="flex justify-center items-center">
            <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
              <a
                href="#home"
                className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] border border-white border-opacity-20 bg-black text-white opacity-40 m-2 rounded-lg flex justify-center items-center"
                title={"Home"}
                onClick={() => handleClick("Home")}
              >
                Home
              </a>
            </div>
            <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
              <a
                href="#project"
                className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] border border-white border-opacity-20 bg-black text-white opacity-40 m-2 rounded-lg flex justify-center items-center"
                title={"Project"}
                onClick={() => handleClick("Project")}
              >
                Projects
              </a>
            </div>
            <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
              <a
                href="#overview"
                className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-[11px] md:text-[20px] border border-white border-opacity-20 bg-black text-white opacity-40 m-2 rounded-lg flex justify-center items-center"
                title={"Overview"}
                onClick={() => handleClick("Overview")}
              >
                Overview
              </a>
            </div>
            <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
              <a
                href="#experience"
                className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[110px] text-[11px] md:text-[20px] border border-white border-opacity-20 bg-black text-white opacity-40 m-2 rounded-lg flex justify-center items-center"
                title={"Experience"}
                onClick={() => handleClick("Experience")}
              >
                Experience
              </a>
            </div>
            <div
            // initial={{ opacity: 0, scale: 0.8 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            >
              <a
                href="#resume"
                className="hover:bg-[white] hover:text-black hover:border-white duration-700 shadow-2xl h-[60px] md:h-[100px] w-[60px] md:w-[110px] text-[11px] md:text-[20px] border border-white border-opacity-20 bg-black text-white opacity-40 m-2 rounded-lg flex justify-center items-center"
                title={"Resume"}
                onClick={() => handleClick("Resume")}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 flex justify-center items-center p-5"
          // initial={{ opacity: 0, scale: 0.8 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
        >
          {/* <div
            className="h-[270px] md:h-[350px] w-[200px] md:w-[260px] bg-[black] border border-white border-opacity-20 rounded-lg"
       
          >
            <Image
              src={profilePic}
              alt=""
              className="h-[270px] md:h-[350px] w-[200px] md:w-[260px] about rounded-lg border border-black"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
