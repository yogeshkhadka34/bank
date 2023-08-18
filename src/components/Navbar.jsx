import clsxm from "../utils/clsxm";
import styles from "../style";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className=" flex justify-between py-4 relative container mt-8 sm:mt-4 ml-4 sm:ml-0">
        {/* Logo */}
        <div>
          <div
            className={clsxm([
              "w-[124px] h-[32px] xl:w-[186px] xl:h-[48px]",
              styles.flexStart,
            ])}
          >
            <img src={logo} alt="hoobank" />
          </div>
        </div>
        {/* Navbar Menu */}
        <div
          className={clsxm([
            styles.marginX,
            "text-white cursor-pointer text-[16px]  font-poppins font-medium  flex-end",
          ])}
        >
          {/* Large screen menu items */}
          <div>
            <div className="hidden sm:flex ">
              <ul className="list-none flex justify-end items-start ">
                {navLinks.map((link, index) => (
                  <li
                    key={link.id}
                    id={link.title}
                    className={clsxm([
                      styles.flexCenter,
                      " hover:text-secondary xl:text-[20px]",
                      index === link.length - 1 ? "mr-5" : "mr-10",
                    ])}
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="flex  h-[20px] w-[20px] shrink-0 mr-10  ss:mr-24  ss:h-[24px] ss:w-[24px] sm:hidden"
              onClick={() => setToggle((prev) => !prev)}
            >
              {isToggle ? (
                <img src={close} alt="CLose" className="w-full h-full" />
              ) : (
                <img src={menu} alt="Toggle Menu" className="w-full h-full" />
              )}{" "}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex  bg-[red]">
            {/* Mobile Options */}
            {isToggle && (
              <div
                className={clsxm([
                  " text-white cursor-pointer text-[16px] top-16 right-12 bg-black-gradient rounded-xl",
                  "absolute px-24 py-5 mx-auto sm:mr-20 ss:px-28 sm:px-32 z-[999]",
                ])}
              >
                <ul className="flex flex-col flex-start mb-4">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.id}
                      id={link.title}
                      className={clsxm([
                        styles.flexCenter,
                        "py-1  hover:text-secondary",
                      ])}
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
