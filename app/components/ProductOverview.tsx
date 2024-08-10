import Link from "next/link";
import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ProductOverview = () => {
  return (
    <div className="p-4 h-full bg-[#0C0C0C] text-white text-opacity-80 " id="overview">
      <div className="text-3xl md:text-6xl font-bold text-center opacity-80 md:flex items-center justify-center">
        Product Overview <span className="md:block hidden mx-2">|</span> <Link href="https://boostopia.io" className="underline text-blue-500 text-[30px] " target="_blank">Link</Link>
      </div>
      <ul className="p-1 md:p-10">
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Platform Description: Describe Boostopia as
          a platform designed for creators and influencers to monetize their
          influence through product sales and mentoring.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Emergency Call via WhatsApp: Enables users
          to make emergency calls using WhatsApp for quick response.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Creating Services: Users can create various
          services within SuperDM, including features like 1:1 video calls.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Sharing via LinkedIn: Facilitates sharing of
          services on LinkedIn for broader visibility and engagement.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Centralized Link Management: Provides a
          unified platform to gather and manage all service-related links
          efficiently.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Customizing Profile Pages: Allows
          customization of user profiles to showcase expertise and enhance
          personal branding.
        </li>
        <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px]">
          <VscDebugBreakpointLog /> Collaboration Features: Supports seamless
          collaboration among users for joint projects and initiatives.
        </li>
      </ul>
    </div>
  );
};

export default ProductOverview;
