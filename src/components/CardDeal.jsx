import React from "react";
import Button from "./common/Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <div className="mx-16 px-16 py-6 mt-10 flex justify-between items-center">
      {/* Left Section */}
      <div className="text-white flex-1 mr-10">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="bg-secondary mt-10">Get Started</Button>
      </div>

      {/* Right Section */}
      <div className="text-white flex-1 ml-10">
        <img src={card} alt="Card Deal" />
      </div>
    </div>
  );
};

export default CardDeal;
