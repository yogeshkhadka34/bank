import React from "react";
import clsxm from "../../utils/clsxm";

const Button = ({ className, children }) => {
  return (
    <div>
      <button
        className={clsxm([
          className,
          "rounded-sm px-3 py-1 text-primary font-normal font-poppins",
        ])}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
