import React from "react";
import Button from "./common/Button";

const CTA = () => {
  return (
    <div className="  my-6 container ">
      <div className="pt-4 pb-8 flex flex-col md:flex-row items-center justify-center md:justify-start bg-black-gradient-2 rounded-[20px] box-shadow">
        <div className="flex flex-col items-center md:items-start flex-[0.6] px-10 py-10">
          <div>
            <h2 className="font-poppins font-semibold  text-[1.6rem] md:text-[2rem] text-white leading-[1.6] text-center">
              Let’s try our service now!{" "}
            </h2>
          </div>
          <div className=" flex-1 flex items-center justify-center mt-4">
            <p className="font-poppins font-normal text-center md:text-left text-dimWhite text-[0.9rem] md:text-[1.1rem] leading-[1.6]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="flex flex-[0.4] justify-center">
          <Button className="bg-secondary px-4 py-3 rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
