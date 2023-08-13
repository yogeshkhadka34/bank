import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="py-6 px-16 xl:py-2">
      <div className="flex flex-start justify-between mx-16">
        {stats.map((stat) => (
          <div key={stat.id} className="flex justify-center items-center mr-10">
            <h1 className="text-white text-[24px] font-poppins font-semibold">
              {stat.value}
            </h1>
            <p className="text-gradient  text-[12px] font-poppins font-semibold p-5 uppercase">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
