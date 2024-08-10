// import React from "react";
// import Cv from "./Cv";
// import data from "./data.json";
// // import profPic from "../../public/profPic.jpg";
// import pro from "../../public/person.webp";
// import Image from "next/image";
// import "./header.css";
// // import bgV from '/bgV.mp4'

// const Header = () => {
//   return (
//     <>
//     <div className="main" id="home">
//     <div className="overlay"></div>
//     {/* <video src={bgV} autoPlay loop muted /> */}

//     <div className=" flex flex-col justify-center items-center h-[750px] text-center md:h-[750px] content text-gray-300">
//       {
//         <div className=" fo">
//         <div className="flex justify-center items-center h-full ">

//           <Image
//             // src={profPic}
//             src={pro}
//             alt="profilepicture"
//             className="opacity-50 mt-5 h-[200px] bg-red-500 md:h-[250px] w-[200px] md:w-[250px] image shadow-2xl border border-[#9B3922]"
//           />
//         </div>

//         </div>
//       }

//       <div className=" m-3 fo">
//         <div className="flex h-full  flex-col justify-center items-center ">

//         <h1 className="ms-0 mt-3 md:mt-2 text-[17px] md:text-2xl text-start text-white opacity-40">{data[0].intro}</h1>
//         <h1 className="text-3xl md:text-6xl  m-1 font-bold text-white opacity-40">{data[0].name}</h1>
//         <h1 className="text-[20px] md:text-2xl m-1 shadow-lg text-white opacity-40">{data[0].role}</h1>
//         <Cv />

//       </div>
//       </div>
//     </div>
//     </div>

//     </>
//   );
// };

// export default Header;

"use client";
import React, { useState } from "react";
import { FaTicket } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import "./header.css";
import { CiSquareRemove } from "react-icons/ci";
import Image from "next/image";
import data from "./data.json";
import Cv from "./Cv";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <section id="home" className="h-screen  flex items-center justify-center bg-gradient-to-t from-[#0C0C0C] to-[#6e6666] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-full ">
        {showAlert ? (
          <div className=" px-2 flex items-center justify-between text-white btn-shine ">
            <div className="h-[50px] w-full p-2 flex items-center md:justify-center md:text-[16px] text-[13px]">
              hello
            </div>
            <div className=" flex items-center justify-center text-white  text-[20px] cursor-pointer">
              <CiSquareRemove onClick={() => setShowAlert(false)} />
            </div>
          </div>
        ) : 
        <div className="p-4 w-full fixed top-0 left-0 z-30">

        <div className="rgbColor flex items-center justify-between py-4 bg-[#191916] bg-opacity-50 px-6 w-full rounded-3xl  md:text-2xl font-bold text-white opacity-90 shadow-2xl backdrop-blur-xl"> 
          <Link href={'#home'} className="flex gap-2 items-center ">
            <Image src={'/logo.png'} height={30} width={30} ></Image>
          PORTFOLIO
          </Link>
          <Link href={'#about'}>
            <IoPersonOutline/>
          </Link>
           </div>
        </div>
    }
      </div>

      <div className="h-[300px] flex md:justify-start justify-center items-center md:px-[100px] w-full ">
        <div className="flex justify-start flex-col">
          <h1 className="ms-0 mt-3 md:mt-2 text-[17px] md:text-2xl text-start text-white opacity-80">
            {data[0].intro}
          </h1>
          <h1 className="text-3xl md:text-6xl  m-1 font-bold text-white opacity-80">
            {data[0].name}
          </h1>
          <h1 className="text-[20px] md:text-2xl m-1 shadow-lg text-white opacity-80">
            {data[0].role}
          </h1>
          <Cv />
        </div>
        <div className="flex gap-3">
      
        </div>
      </div>
    </section>
  );
};

export default Header;
