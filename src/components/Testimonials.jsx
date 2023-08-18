import React from "react";
import { quotes, airbnb, dropbox, binance, coinbase } from "../assets";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <div className=" container flex flex-col flex-start mt-10  text-white">
      {/* Top Section */}
      <div className="flex flex-start flex-col md:flex-row  items-center">
        <div className=" flex-1">
          <h2 className="text-[32px] font-poppins font-semibold lg:text-[72px] md:text-[60px] sm:text-[52px] text-white lg:leading-[100.8px] leading-[50px] md:leading-[75px] mt-16">
            What People are <br className="sm:block hidden" /> saying about us
          </h2>
        </div>
        <div className=" flex-1 flex-start">
          <p className="font-poppins font-normal  max-w-[360px] mt-4 text-dimWhite text-[18px] leading-[30.8px] text-left md:max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-start flex-col md:flex-row justify-between items-center mt-16">
        {feedback.map((list) => (
          <TestimonialsCard key={list.id} {...list} />
        ))}
      </div>
      {/* Logos Section */}
      <div className="flex flex-start flex-col flex-nowrap md:flex-row justify-around items-center align-baseline mb-10">
        <img src={airbnb} alt="Airbnb" className="w-[192px] h-[38px] my-4" />
        <img src={binance} alt="Binance" className="w-[192px] h-[38px] my-4 " />
        <img
          src={coinbase}
          alt="Coinbase"
          className="w-[192px] h-[38px] my-4"
        />
        <img src={dropbox} alt="Dropbox" className="w-[192px] h-[38px] my-4" />
      </div>
    </div>
  );
};

const TestimonialsCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col items-start px-10 py-12 max-w-[370px] feedback-card mb-10 rounded-[20px] ">
      {/* // Image */}
      <div>
        <img
          src={quotes}
          alt="Quotes"
          className="w-[42.6px] h-[27.6px] object-contain"
        />
      </div>
      {/* // Contents */}
      <div>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          {content}
        </p>
      </div>

      {/* // person Details */}
      <div className="flex items-center">
        {/* Image */}
        <div>
          <img
            src={img}
            alt={name}
            className="w-[48px] h-[48px] rounded-full"
          />
        </div>
        {/* Name and Postion */}
        <div className="ml-4 ">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
