import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div className="mx-16 px-16 py-6 flex justify-between items-center text-white">
      {/* Left Side */}
      <div className="flex-1 mr-16 relative z-[5]">
        <img src={bill} alt="Billing" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      {/* Right Side */}
      <div className="text-white flex-1">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-start mt-5">
          <img src={apple} alt="Apple" className="mr-16" />
          <img src={google} alt="Google" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
