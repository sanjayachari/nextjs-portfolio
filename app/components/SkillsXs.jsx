import React from "react";
// import '../globals.css'
import Marquee from "react-fast-marquee";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const SkillsXs = () => {
  return (
    <div class="bg-[#0C0C0C] text-white  p-5">
      <div className="text-[40px] font-bold opacity-80 text-center py-10 ">
        Technical skills
      </div>
     <div className="opacity-40">
     <Marquee class="text-opacity-40">
        <SiTypescript className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <SiJavascript className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaReact className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <RiNextjsLine className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <DiNodejs className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <SiExpress className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaDocker className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaAws className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />

        <FaHtml5 className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaCss3Alt className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaGitAlt className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaGithub className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
        <FaBitbucket className="md:h-[70px] h-[40px] w-[40px] md:w-[70px]  mx-6" />
      </Marquee>
     </div>
    </div>
  );
};

export default SkillsXs;
