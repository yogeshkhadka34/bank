import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="container">
      <div className="flex flex-col flex-start items-start md:justify-between md:flex-row">
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
