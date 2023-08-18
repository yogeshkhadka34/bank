import React from "react";
import { features } from "../constants";
import Button from "./common/Button";

const Features = () => {
  return (
    <div className=" py-6 flex flex-col items-start md:justify-between md:items-center container md:flex-row">
      {/* Left Section */}
      <div className="text-white flex-1">
        <h2 className="text-[32px] font-poppins font-semibold lg:text-[72px] md:text-[60px] sm:text-[52px] text-white lg:leading-[100.8px] leading-[50px] md:leading-[75px] mt-16">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="bg-secondary mt-10">Get Started</Button>
      </div>

      {/* Right Section */}
      <div className="text-white flex-1 ">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className="flex mx-2 feature-card py-6 rounded-lg my-6 ">
      <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex mx-10  justify-center items-center">
        <img
          src={icon}
          alt={title}
          className=" w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-col mx-4">
        <h1 className="font-poppins text-[18px] text-white font-semibold">
          {title}
        </h1>
        <p className="font-poppins text-[18px] text-dimWhite font-normal">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Features;
