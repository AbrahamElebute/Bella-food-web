import React from "react";

const Button = ({ type, children, action, link, buttonDescription }) => {
  let typeClassName = "bg-transparent";

  switch (type) {
    case "primary":
      typeClassName = "border-none  text-white bg-[#FA4A0C]";
      break;

    default:
      break;
  }
  return (
    <button
      aria-label={buttonDescription ? buttonDescription : "button"}
      className={`
      w-[200px] py-2 border border-white rounded-[300px] text-white
      text-xl
      font-medium
      leading-9
      tracking-tight ${typeClassName}`}>
      {children}
    </button>
  );
};

export default Button;
