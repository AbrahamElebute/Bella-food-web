import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className={`px-[10%] min-[1921px]:px-[80px] w-full  ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
