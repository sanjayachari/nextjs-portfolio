import React from "react";
// import mernStackRes from '../../public/mernStackRes.pdf'
// import '../index.css'

const Cv = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-40 rounded shadow-lg">
        <a href="/resume2024.pdf" target="_blank" rel="noopener noreferrer">
          <div>Download CV</div>
        </a>
      </div>
      <button className="hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-40 rounded shadow-lg">
        <a href="#contact" className=" ">
          {" "}
          Contact Me!{" "}
        </a>
      </button>
    </div>
  );
};

export default Cv;
