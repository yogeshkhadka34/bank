import React from "react";
import { features } from "../constants";
import Button from "./common/Button";

const Features = () => {
  return (
    <div className=" py-6 flex flex-col items-start lg:justify-between lg:items-center container lg:flex-row">
      {/* Left Section */}
      <div className="text-white flex-1">
        <h2 className="heading mt-16">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="paragraph mt-4">
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
      <div className="w-[64px] h-[64px] p-2 bg-dimBlue rounded-full flex mx-10  justify-center items-center">
        <img
          src={icon}
          alt={title}
          className=" min-w-[50%] min-h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-col mx-4">
        <h1 className="font-poppins text-[18px] text-white font-semibold">
          {title}
        </h1>
        <p className="paragraph">{content}</p>
      </div>
    </div>
  );
};

export default Features;
