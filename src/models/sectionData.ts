// TypeScript Interface models for  section content component

import React, { Dispatch, SetStateAction, FC } from "react";

export interface sectionData {
    
        sectionData:{ heading: string; content: string; icon: string; img: string; }[],
      
}

export interface aboutus{
    about:string
}

export interface faqsData{
    faqs:{ id: number; query: string; desc: string;}[]
}

export interface banner {
    faqsContent: { id: number; query: string; desc: string };
    showIndex: number;
    setShowIndex: Dispatch<SetStateAction<number>>;
  }