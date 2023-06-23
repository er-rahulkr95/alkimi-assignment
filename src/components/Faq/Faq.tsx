"use client";
import { faqsData } from "@/models/sectionData";
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";

/**
 * Component to show faqs 
 * @param param0 <Array<Object>>  Array of objects containing faqs Data=> faqs:{ id: number; query: string; desc: string;}[]
}
 * @returns <TSX>
 */

const Faq = ({ faqs }: faqsData) => {
  const [showIndex, setShowIndex] = useState<number>(1);
  return (
    <div className="flex flex-col justify-center gap-[3rem]">
      {faqs.map((faqsItem) => (
        <Accordion
          key={faqsItem.id}
          faqsContent={faqsItem}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
        />
      ))}
    </div>
  );
};

export default Faq;
