import "../styles.css";
import logo from "../assets/images/logo.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import menuOpen from "../assets/images/icon-menu.svg";
//React Hooks
import { useEffect, useState } from "react";

function NAVBAR() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleOpenMenuClick = () => {
    setMenuIsActive(true);
  };

  const handleCloseMenuCLick = () => {
    setMenuIsActive(false);
  };

  return (
    <nav className="flex justify-between lg:items-center">
      <a href="#">
        <img
          src={logo}
          alt="Web news logo"
          className="w-[46.98px] lg:w-[64.09px] pt-[28px] pl-[16px] lg:pt-[0px] lg:pl-0 lg:mt-[0px] lg:ml-[0px]"
        />
      </a>
      <ul
        className={` ${
          menuIsActive ? "right-[0px] " : ""}  text-darkGrayishBlue capitalize flex lg:justify-between lg:w-[431px] lg:flex-row lg:space-y-[0px] lg:py-[0px] lg:h-0 flex-col space-y-[24px] lg:px-[0px] px-[53px] py-[27.3px] w-[70%] fixed right-[-70%]  lg:static bg-offWhite h-screen z-50 md:z-0  transition-all ease-in-out duration-300 `}
      >
        <li>
          <img
            src={menuClose}
            onClick={handleCloseMenuCLick}
            alt="Menu close button"
            className={`w-[30.41px] float-right mr-0 mb-[100px] cursor-pointer hover:rotate-90 transition-all ease-linear duration-200 lg:hidden`}
          />
        </li>
        <li className="hover:text-primarySoftRed">
          <a href="#" className="">
            home
          </a>
        </li>
        <li className="hover:text-primarySoftRed">
          <a href="#">new</a>
        </li>
        <li className="hover:text-primarySoftRed">
          <a href="#">popular</a>
        </li>
        <li className="hover:text-primarySoftRed">
          <a href="#">trending</a>
        </li>
        <li className="hover:text-primarySoftRed">
          <a href="#">categories</a>
        </li>
      </ul>
      <img
        src={menuOpen}
        alt="Menu Open icon"
        onClick={handleOpenMenuClick}
        className={
          menuIsActive
            ? "hidden"
            : "lg:hidden w-[40px] h-[17px]  mt-[28px] mr-[16px] cursor-pointer"
        }
      />
    </nav>
  );
}

export default NAVBAR;
