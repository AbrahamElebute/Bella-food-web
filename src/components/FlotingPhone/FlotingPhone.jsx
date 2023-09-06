import React from "react";
import { heroImgOne, heroImgTwo } from "../../assets/images";
import PageContainer from "../PageContainer/PageContainer";

const FlotingPhone = () => {
  return (
    <PageContainer className="flex items-center justify-center h-[50vh]">
      <img src={heroImgOne} alt="" />
      <img src={heroImgTwo} alt="" className="-translate-x-28 translate-y-9" />
    </PageContainer>
  );
};

export default FlotingPhone;
