"use client";

import React, { FC } from "react";
import { banner } from "@/models/sectionData";

/**
 * component for faq accordion
 *
 * @param param0 <object>  faqsContent =>{ id: number; query: string; desc: string }
 * @param param2 <number>     state Variable holding index clicked accordion
 * @param param3 <function>   setter function to update State variable
 * @returns <TSX>
 */
const Accordion: FC<banner> = ({ faqsContent, showIndex, setShowIndex }) => {
  let handleShow = (id: number) => {
    if (showIndex !== id) {
      setShowIndex(id);
    } else {
      setShowIndex(-1);
    }
  };
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <div
        className="relative z-20 flex justify-between items-center"
        onClick={() => handleShow(faqsContent.id)}
      >
        {showIndex === faqsContent.id && (
          <img
            src="/bannerimg.png"
            className="h-[46px] w-full  -z-20 absolute object-cover "
            alt="faq selected backround"
          />
        )}
        <p className="pl-2 md:pl-8">{faqsContent.query}</p>
        {showIndex !== faqsContent.id ? (
          <img
            src="/minusSign.svg"
            alt="Click to expand"
            className="pr-2 md:pr-8"
          />
        ) : (
          <img
            src="/plusSign.svg"
            alt="Click to Collapse"
            className="pr-2 md:pr-8"
          />
        )}
      </div>
      <div>
        {showIndex === faqsContent.id && (
          <p className=" pl-2 md:pl-8">{faqsContent.desc}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
