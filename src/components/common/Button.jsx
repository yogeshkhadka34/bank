import React from "react";
import clsxm from "../../utils/clsxm";

const Button = ({ className, children }) => {
  return (
    <div>
      <button
        className={clsxm([
          "rounded-sm px-3 py-1 text-primary font-normal font-poppins text-[0.8rem] lg:text-[1rem]",
          className,
        ])}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
