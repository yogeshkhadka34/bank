import React from "react";
import Button from "./common/Button";

const CTA = () => {
  return (
    <div className=" mx-16 px-16 mt-10 pb-10 ">
      <div className="px-6 py-4 flex items-center justify-center bg-black-gradient-2 rounded-[20px] box-shadow">
        <div className="flex flex-col flex-2 flex-start px-10 py-10">
          <div className="">
            <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
              Let’s try our service now!{" "}
            </h2>
          </div>
          <div className=" flex-1 mt-5">
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="flex-1 flex-end ml-32 mt-5">
          <Button className="bg-secondary px-4 py-3 rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
