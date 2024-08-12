import React from "react";
// import mernStackRes from '../../public/mernStackRes.pdf'
// import '../index.css'
import { FaBell } from "react-icons/fa";
import addNotification from "react-push-notification";

const Cv = () => {
  const handleSendNotification = () => {
    addNotification({
      title: "Connect on LinkedIn",
      subtitle: "Grow your network",
      message: "Join me on LinkedIn!",
      theme: "darkblue",
      vibrate : 300,
      native: true, // when using native, your OS will handle theming.
      silent: false, // optional, Native only. Makes the notification silent.
      onClick: ()=> window.location = "https://www.linkedin.com/in/sanjayachari/?lipi=urn%3Ali%3Apage%3Acompanies_company_posts_index%3B2d9480f4-02d3-4ee9-9a84-71a6642f555a",
    });
  };
  return (
    <div className="flex items-center justify-start">
      <div>
        <a href="/sanjay_resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-80 rounded shadow-lg">
            Download CV
          </div>
        </a>
      </div>
      <button>
        <a
          href="#experience"
          className="flex items-center justify-center hover:bg-[white] hover:text-black border border-white border-opacity-20 duration-700 h-[30px] md:h-[40px] w-[110px] md:w-[140px] m-1  bg-[black] text-white opacity-80 rounded shadow-lg"
        >
          {" "}
          Experience!{" "}
        </a>
      </button>
      <div onClick={handleSendNotification}>
        <FaBell className="text-[27px] md:text-[30px] m-1" />
      </div>
    </div>
  );
};

export default Cv;
