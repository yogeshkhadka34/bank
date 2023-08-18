import React from "react";
import Button from "./common/Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <div className="py-6 mt-10 flex flex-col md:flex-row justify-between items-center container">
      {/* Left Section */}
      <div className="text-white flex-1 mr-10">
        <h2 className="text-[32px] font-poppins font-semibold lg:text-[72px] md:text-[60px] sm:text-[52px] text-white lg:leading-[100.8px] leading-[50px] md:leading-[75px] mt-16">
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
      <div className="text-white flex-1 md:ml-10 flex justify-center items-center">
        <img
          src={card}
          alt="Card Deal"
          className="w-[80%] h-[80%] mt-16 md:mt-4"
        />
      </div>
    </div>
  );
};

export default CardDeal;
