import React from "react";
// import mernStackRes from '../../public/mernStackRes.pdf'
// import '../index.css'

const Cv = () => {
  return (
    <div className="flex items-center justify-start">
      <div
       >
        <a href="/sanjay_resume.pdf" target="_blank" rel="noopener noreferrer">
          <div
                 className="flex items-center justify-center hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-80 rounded shadow-lg"

          >Download CV</div>
        </a>
      </div>
      <button>
        <a href="#experience"        
                 className="flex items-center justify-center hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-80 rounded shadow-lg"
                 >

          {" "}
          Experience!{" "}
        </a>
      </button>
    </div>
  );
};

export default Cv;
