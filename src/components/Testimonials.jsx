import React from "react";
import { quotes, airbnb, dropbox, binance, coinbase } from "../assets";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <div className="container  mt-10 ">
      {/* Top Section */}
      <div className="flex justify-start flex-col items-start pl-8">
        <h2 className="heading mt-16  ">
          What People are <br className="block md:hidden" /> saying about us
        </h2>
        <p className="paragraph mt-4">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center text-white">
        {/* Cards Section */}
        <div className="flex flex-start flex-col md:flex-row justify-between items-center mt-16">
          {feedback.map((list) => (
            <TestimonialsCard key={list.id} {...list} />
          ))}
        </div>
        {/* Logos Section */}
        <div className="flex flex-start flex-wrap gap-8 md:gap-16 xl:gap-28 md:flex-row justify-around items-center align-baseline mb-4">
          <img src={airbnb} alt="Airbnb" className="brand_image" />
          <img src={binance} alt="Binance" className="brand_image " />
          <img src={coinbase} alt="Coinbase" className="brand_image" />
          <img src={dropbox} alt="Dropbox" className="brand_image" />
        </div>
      </div>
    </div>
  );
};

const TestimonialsCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col items-start px-10 py-12 max-w-[30rem] feedback-card mb-10 rounded-[20px] ">
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
        <p className="paragraph mt-4">{content}</p>
      </div>

      {/* // person Details */}
      <div className="flex items-center mt-8">
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
          <h4 className="font-poppins font-semibold text-[1rem] leading-[1.6] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[0.9rem] leading-[1.6] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
