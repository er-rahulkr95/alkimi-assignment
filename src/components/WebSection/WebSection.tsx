
import { webSection } from "@/models/webSection";
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
const WebSection = ({ sectionType, data }: webSection) => {
  switch (sectionType) {
    case "section":
      return (
        <>
          <div className="text-white w-full">
            <SectionContent sectionData={data} />
          </div>
        </>
      );

    case "aboutUs":
      return (
        <>
          <AboutUs about={data} />
        </>
      );
    case "faqs":
      return (
        <>
          <div className="text-white w-full">
            <Faq faqs={data} />
          </div>
        </>
      );

    default:
      return <></>;
  }
};

export default WebSection;
