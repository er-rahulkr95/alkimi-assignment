// TypeScript Interface model for  web section  component

export interface websection {
    sectionType: string;
    data:{
        section1:{ heading: string; content: string; icon: string; img: string; }[],
        about:string,
        section2:{ heading: string; content: string; icon: string; img: string; }[],
        faq: { id: number; query: string; desc: string;}[],
    }
   
}