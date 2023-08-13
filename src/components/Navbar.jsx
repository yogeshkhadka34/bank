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
      <div className="bg-primary w-full flex justify-between py-4 relative">
        {/* Logo */}
        <div className={clsxm([styles.marginX, styles.paddingX])}>
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
            "text-white cursor-pointer text-[16px] hidden font-poppins font-medium md:flex",
          ])}
        >
          <ul className="flex justify-evenly">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                id={link.title}
                className={clsxm([
                  styles.flexCenter,
                  " hover:text-secondary xl:text-[20px]",
                  index === link.length - 1 ? "mr-0" : "mr-10",
                ])}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <button
          className="h-[20px] w-[20px] shrink-0 mr-10 mt-2 sm:mr-24 md:hidden sm:h-[24px] sm:w-[24px]"
          onClick={() => setToggle((prev) => !prev)}
        >
          {isToggle ? (
            <img src={close} alt="CLose" className="w-full h-full" />
          ) : (
            <img src={menu} alt="Toggle Menu" className="w-full h-full" />
          )}{" "}
        </button>
        {/* Mobile Options */}
        {isToggle && (
          <div
            className={clsxm([
              "text-white cursor-pointer text-[16px] top-16 right-12 bg-primary absolute px-24  sm:mr-20 ss:px-28 sm:px-32",
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
    </>
  );
};

export default Navbar;
