import React from "react";
import Image from "next/image";
import { sectionData } from "@/models/sectionData";

/**
 * component to render tiled view section
 * @param param0 <Array<Objects>>  Contains data for tiled view section => sectionData:{ heading: string; content: string; icon: string; img: string; }[],
 * @returns <TSX>
 */
const SectionContent = ({ sectionData }: sectionData) => {
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-x-[30px] gap-y-[42px]">
      {sectionData.map((contents, index) => (
        <div
          key={index}
          className="w-full md:w-[410px] flex flex-col gap-[30px] md:last:col-start-2 md:last:flex-row md:last:col-span-2 md:last:w-full"
        >
          {contents.img !== "" && (
            <div>
              <img
                src={contents.img}
                alt={`image${index}`}
                className="h-auto w-auto "
              />
            </div>
          )}
          <div className="flex flex-col w-full">
            <h2 className="text-[18px] font-bold uppercase">
              {contents.heading}
            </h2>
            <p className="opacity-[0.7]">{contents.content}</p>
            <Image
              src={contents.icon}
              alt="icon"
              width={22}
              height={23}
              className="mt-[34px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionContent;
