import React from "react";
import Cv from "./Cv";
import data from "./data.json";
// import profPic from "../../public/profPic.jpg";
import pro from "../../public/person.webp";
import Image from "next/image";
import "./header.css";
// import bgV from '/bgV.mp4'


const Header = () => {
  return (
    <>
    <div className="main" id="home">
    <div className="overlay"></div>
    {/* <video src={bgV} autoPlay loop muted /> */}



    
    
    <div className=" flex flex-col justify-center items-center h-[750px] text-center md:h-[750px] content text-gray-300">
      {
        <div className=" fo">
        <div className="flex justify-center items-center h-full ">

          <Image
            // src={profPic}
            src={pro}
            alt="profilepicture"
            className="opacity-50 mt-5 h-[200px] bg-red-500 md:h-[250px] w-[200px] md:w-[250px] image shadow-2xl border border-[#9B3922]"
          />
        </div>

        </div>
      }

      <div className=" m-3 fo">
        <div className="flex h-full  flex-col justify-center items-center ">

        <h1 className="ms-0 mt-3 md:mt-2 text-[17px] md:text-2xl text-start text-white opacity-40">{data[0].intro}</h1>
        <h1 className="text-3xl md:text-6xl  m-1 font-bold text-white opacity-40">{data[0].name}</h1>
        <h1 className="text-[20px] md:text-2xl m-1 shadow-lg text-white opacity-40">{data[0].role}</h1>
        <Cv />

      </div>
      </div>
    </div>
    </div>

    </>
  );
};

export default Header;
