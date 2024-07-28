import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Experience = () => {
  return (
    <div className="bg-[#0C0C0C] text-white h-full w-full p-4" id="experience">
      <div className="text-3xl md:text-6xl font-bold text-center opacity-40 flex items-center justify-center">
        Work Experience
      </div>
      <div className="md:grid grid-cols-2 h-full py-10">
        <div className="grid cols-span-1 border-r border-white h-full border-opacity-10 p-2 md:p-10">
          <ul className=" opacity-50">
            <div className="px-4 ">
              <span className="text-[20px] ">Argon Quber Pvt Ltd | </span>
              <span className="text-[16px]">07/2023 - 07/2024</span>
            </div>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Implemented authentication of Google,
              LinkedIn, GitHub, and Twitter.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Utilized JWT for secure authentication
              and implemented secure routing for the app.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Potential risk of Cross-Site Request
              Forgery (CSRF) attacks. Implemented CSRF protection.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Implemented PhonePe and Stripe payment
              gateways.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Developed a WhatsApp webhook for sending
              messages using Meta Graph API.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Implemented the S3 API for uploading
              images into AWS.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Integrated LinkedIn post API. uploading
              post from our website.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Converted the entire React app into a
              Next.js app within 3 days.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Optimized SEO from 43&#37; to 78&#37;
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Took over design activities when the
              designers work was insufficient.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Responsible for production hosting setup
              and updates on the production server.
            </li>
          </ul>
        </div>
        <div className="grid cols-span-1 border-l border-white h-full border-opacity-10 p-2 md:p-10">
          <ul className=" opacity-50">
            <div className="px-4 ">
              <span className="text-[20px] ">Key Problems Solved : </span>
            </div>

            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Problem : Inconsistent access to the
              website through different domain formats (HTTP, www.domain.io).
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Solution : Configured AWS Load Balancer
              to redirect all traffic to the primary domain.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Outcome : access and improved user exp.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Problem: Backend nodejs server was
              crashing with Docker.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Solution: Implemented PM2 for hosting.
            </li>
            <li className="flex gap-2 items-center">
              <VscDebugBreakpointLog /> Outcome: Prevented server crashes and
              ensured stable performance.
            </li>
            {/* <li className='flex gap-2 items-center'><VscDebugBreakpointLog/> Responsible</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
