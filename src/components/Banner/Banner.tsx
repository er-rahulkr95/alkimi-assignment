import React from "react";
import bannerStyle from "./Banner.module.css";

/**
 * Component to show marquee banner running infintely
 * @returns <TSX>
 */

const Banner = () => {
  return (
    <div className="w-[100vw] h-[46px] relative flex items-center">
      <img
        src="/bannerimg.png"
        className="h-[46px] w-[100vw] absolute object-cover"
        alt="banner backround"
      />

      <div className="z-10 w-full flex gap-8 overflow-hidden">
        <div className={`${bannerStyle.banner}`}>
          <ul className={`${bannerStyle.bannerContent}`}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>

          <ul className={`${bannerStyle.bannerContent}`}>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
