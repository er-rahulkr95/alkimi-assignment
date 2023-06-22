// TypeScript Interface models for  section content component


export interface sectionData {
    
        sectionData:{ heading: string; content: string; icon: string; img: string; }[],
       
}

export interface contents {
    contents:{ heading: string; content: string; icon: string; img: string; }
}

export interface aboutus{
    about:string
}

export interface faqsData{
    faqs:{ id: number; query: string; desc: string;}[]
}
