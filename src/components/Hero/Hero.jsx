import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Button from "../Button/Button";
import { hero } from "../../assets/images";
const Hero = () => {
  return (
    <div>
      <section
        className={`h-screen flex items-center justify-center bg-cover bg-no-repeat bg-black/20 bg-blend-multiply`}
        style={{ backgroundImage: `url(${hero})` }}>
        <PageContainer>
          <div className="gap-8 flex flex-col items-center justify-center">
            <p className="text-neutral-100 text-2xl font-bold leading-9 tracking-tight">
              Food app
            </p>
            <h1
              className="            
              text-white
                text-[58px]
                font-bold
                leading-[80px]
                tracking-tight
                text-center
                ">
              Why stay hungry when <br /> you can order form Bella Onojie
            </h1>
            <p
              className="
              text-neutral-100
                text-2xl
                font-medium
                leading-[38px]
                tracking-tight">
              Download the bella onoje’s food app now on
            </p>
            <div className="flex items-start justify-between gap-4">
              <Button type={"primary"} buttonDescription={""}>
                Button
              </Button>
              <Button>App store</Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
};

export default Hero;
