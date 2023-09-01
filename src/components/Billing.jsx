import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div className="container section mt-4 flex flex-col gap-6 md:gap-12 md:flex-row justify-center items-center md:justify-start ">
      {/* Left Side */}
      <div className="flex-1 relative md:h-full md:w-full ">
        <img
          src={bill}
          alt="Billing"
          className="object-scaledown md:inset-0 md:object-contain"
        />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      {/* Right Side */}
      <div className="flex-1 mt-8 sm:mt-0">
        <h2 className="heading ">
          Easily control your <br /> billing & invoicing
        </h2>
        <p className="paragraph mt-4">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-start mt-8">
          <img src={apple} alt="Apple" className="mr-16" />
          <img src={google} alt="Google" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
