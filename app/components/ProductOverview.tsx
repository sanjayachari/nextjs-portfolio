import Link from "next/link";
import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const ProductOverview = () => {
  return (
    <div className="p-4 h-full bg-[#0C0C0C] text-white " id="overview">
      <div className="text-3xl md:text-6xl font-bold text-center opacity-90 ">
        Product Overview
      </div>

      <div>
        <div className="px-1 md:px-10 text-3xl font-bold md:flex items-center justify-start">
          Careercarve <span className="md:block hidden mx-2">|</span>{" "}
          <Link
            href="https://www.careercarve.com/"
            className="underline text-blue-500 text-[30px] "
            target="_blank"
          >
            Link
          </Link>
        </div>
        <ul className="px-1 md:px-10 pb-1 md:pb-10">
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Platform Description: Careercarve is an
            MBA training and test conducting company, offering multiple products
            like Resume Digital and CEE to help students and professionals
            advance in their careers.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Product Offerings: Careercarve provides
            various tools and services such as Resume Digital and CEE, enabling
            users to enhance their profiles and improve job prospects.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Connect with MBA Instructors: Careercarve
            allows users to directly connect with experienced MBA instructors
            for guidance and career advice.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> 1v1 Meeting Booking: Users can book
            personalized 1v1 sessions with instructors for focused mentoring,
            exam preparation, or career coaching.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Personalized Learning: Tailored study
            plans and one-on-one interactions with instructors to enhance
            learning and exam success.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Career Insights: Careercarve offers
            professional mentorship with industry insights, helping students
            make informed career decisions.
          </li>
        </ul>
      </div>

      <div>
        <div className="px-1 md:px-10 text-3xl font-bold md:flex items-center justify-start">
          BOOSTOPIA <span className="md:block hidden mx-2">|</span>{" "}
          <Link
            href="https://boostopia.io"
            className="underline text-blue-500 text-[30px] "
            target="_blank"
          >
            Link
          </Link>
        </div>
        <ul className="px-1 md:px-10 pb-1 md:pb-10">
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Platform Description: Describe Boostopia
            as a platform designed for creators and influencers to monetize
            their influence through product sales and mentoring.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Emergency Call via WhatsApp: Enables users
            to make emergency calls using WhatsApp for quick response.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Creating Services: Users can create
            various services within SuperDM, including features like 1:1 video
            calls.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Sharing via LinkedIn: Facilitates sharing
            of services on LinkedIn for broader visibility and engagement.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Centralized Link Management: Provides a
            unified platform to gather and manage all service-related links
            efficiently.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Customizing Profile Pages: Allows
            customization of user profiles to showcase expertise and enhance
            personal branding.
          </li>
          <li className="flex gap-2 items-center my-5 border border-white border-opacity-30 p-2 rounded-md text-[16px] text-opacity-80 ">
            <VscDebugBreakpointLog /> Collaboration Features: Supports seamless
            collaboration among users for joint projects and initiatives.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductOverview;
