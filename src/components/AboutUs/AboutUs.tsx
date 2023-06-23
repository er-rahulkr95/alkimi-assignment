import { aboutus } from "@/models/sectionData";
import React from "react";

/**
 * component to show About Us section
 * @param param0 <string> About us props
 * @returns TSX
 */
const AboutUs = ({ about }: aboutus) => {
  return (
    <div className="relative  h-[662px] flex items-center">
      <div className=" md:max-w-[1290px] md:m-auto flex flex-col gap-[60px] md:gap-[140px] md:flex-row">
        <div className="flex flex-col w-full md:w-[575px] gap-5">
          <h1 className="text-white font-extrabold text-[40px] md:text-[120px] leading-[100%]">
            About Us
          </h1>
          <span className="hover:text-pink-500 w-min">
            <a href="https://www.instagram.com/" target="_blank">
              Instagram
            </a>
          </span>
          <span className="hover:text-blue-500 w-min">
            <a href="https://in.linkedin.com/" target="_blank">
              LinkedIn
            </a>
          </span>
        </div>
        <div className="w-full md:w-[575px] ">
          <p className="opacity-[0.7] group-hover:text-orange-700 group-hover:opacity-[1]">
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
