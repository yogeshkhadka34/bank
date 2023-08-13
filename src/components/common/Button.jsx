import React from "react";
import clsxm from "../../utils/clsxm";

const Button = ({ className, children }) => {
  return (
    <div>
      <button
        className={clsxm([
          "rounded-sm px-3 py-1 text-primary font-normal font-poppins",
          className,
        ])}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
