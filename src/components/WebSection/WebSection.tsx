import { websection } from "@/models/websection";
import React from "react";
import SectionContent from "../SectionContent/SectionContent";
import AboutUs from "../AboutUs/AboutUs";
import Faq from "../Faq/Faq";

/**
 * component to pass data to the different section stype and render the component
 * @param param0 <string> sectionType =>  to choose which section to render and pass the data to that component
 * @param param1 <Object> data => different section data 
 *  data:{
        section1:{ heading: string; content: string; icon: string; img: string; }[],
        about:string,
        section2:{ heading: string; content: string; icon: string; img: string; }[],
        faq: { id: number; query: string; desc: string;}[],
 * @returns <TSX>
 */
const WebSection = ({ sectionType, data }: websection) => {
  switch (sectionType) {
    case "section1":
      return (
        <>
          <div className="text-white w-full">
            <SectionContent sectionData={data.section1} />
          </div>
        </>
      );

    case "aboutUs":
      return (
        <>
          <AboutUs about={data.about} />
        </>
      );
    case "section2":
      return (
        <>
          <div className="text-white w-full">
            <SectionContent sectionData={data.section2} />
          </div>
        </>
      );

    case "faqs":
      return (
        <>
          <div className="text-white w-full">
            <Faq faqs={data.faq} />
          </div>
        </>
      );
  }
};

export default WebSection;
