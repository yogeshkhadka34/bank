import React from "react";
import { discount, robot, arrowUp } from "../assets";
import clsxm from "../utils/clsxm";
import styles from "../style";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-start items-start container md:flex-row  py-4 md:py-[unset]">
      <div className="flex flex-1 flex-col flex-start  justify-between md:self-center">
        <Discount />
        <HeroText />
      </div>
      {/* Hero Image */}
      <div className="flex-1 relative md:-mr-[18%] lg:-mr-[10%]">
        <div className="max-w-[25rem] ss:max-w-[30rem] sm:max-w-[40rem]  md:w-full">
          <img
            src={robot}
            alt="robot"
            className=" w-full aspect-square object-scale-down"
          />
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        <div className="my-6 flex justify-around ss:hidden">
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

// Discount Section
const Discount = () => {
  return (
    <p className="text-white flex bg-discount-gradient font-poppins w-[360px] px-4 items-center rounded-lg">
      <img src={discount} alt="Discount" className="h-[32] w-[32]" />
      20% &nbsp;
      <span className="text-dimWhite">Discount for</span>&nbsp;1 Month
      <span className="text-dimWhite">&nbsp;Account</span>
    </p>
  );
};

// Hero text component
const HeroText = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between mt-5">
        <h1 className=" heading_hero ">
          The Next <br className="hidden xs:block" />
          <span className="text-gradient ">Generation</span>
        </h1>
        <div className="mr-10 sm:mr-0 hidden ss:flex">
          <GetStarted />
        </div>
      </div>
      <div>
        <h1 className="heading_hero ">Payment Method.</h1>
        <p className="paragraph_hero ">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </div>
  );
};

// Get Started section
const GetStarted = () => {
  return (
    <div className="h-[120px] w-[120px] rounded-full p-[2px] bg-blue-gradient">
      <div className="w-[100%] h-[100%] rounded-full z-10 bg-primary flex flex-col justify-center items-center">
        <div className="flex text-gradient">
          <p className="text-gradient font-semibold font-poppins">Get</p>
          <img src={arrowUp} alt="arrow" className="h-[28px] w-[28px] p-1" />
        </div>

        <p className="text-gradient font-semibold font-poppins">Started</p>
      </div>
    </div>
  );
};

export default HeroSection;
