"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { useRouter } from "next/navigation";
import Banner from "../Banner/Banner";

/**
 * Component to show Nav Bar on each page along with navigation menu for mobile view to go to several pages
 * 
 * @returns <TSX>
 */

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const router = useRouter();
  const handleOpenMenu = () => setToggleMenu(!toggleMenu);
  const handleCloseMenu = () => setToggleMenu(!toggleMenu);
  const handleGoToPage = (page: string) => {
    setToggleMenu(!toggleMenu);
    router.push(page);
  };
  return (
    <nav className="text-white flex flex-col">
      <div className="h-[50px] w-full flex items-center justify-between px-9">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="company-logo" width={34} height={21} />
          <p>Lorem</p>
        </div>
        {!toggleMenu ? (
          <div className="md:hidden" onClick={() => handleOpenMenu()}>
            <img src="/menu.svg" alt="menu icon" />
          </div>
        ) : (
          <div className="md:hidden" onClick={() => handleCloseMenu()}>
            <img src="/x-close.svg" alt="menu icon" />
          </div>
        )}
      </div>

      {toggleMenu && (
        <div className="w-full h-[95vh] flex flex-col justify-center relative">
          <ul className="flex flex-col justify-center">
            <li className="p-4">
              <div onClick={() => handleGoToPage("/")}>Home</div>
            </li>
            <li className="p-4">
              <div onClick={() => handleGoToPage("/about")}>About Us</div>
            </li>
            <li className="p-4">
              <div onClick={() => handleGoToPage("/product")}>Products</div>
            </li>
            <li className="p-4">
              <div onClick={() => handleGoToPage("/services")}>Services</div>
            </li>
            <li className="p-4">
              <div onClick={() => handleGoToPage("/contactus")}>Contact Us</div>
            </li>
          </ul>
          <div className="absolute bottom-0">
            <Banner />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
