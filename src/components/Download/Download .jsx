import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Button from "../Button/Button";
import { footerImg } from "../../assets/images";

const Download = () => {
  return (
    <section
      className="mt-14 h-[100vh] flex items-center justify-center bg-cover bg-black/10 bg-blend-multiply"
      style={{ backgroundImage: `url(${footerImg})` }}>
      <PageContainer>
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="text-center text-white text-[40px] font-bold leading-[57px] tracking-tight">
            Download the app now.
          </p>
          <p className="text-center text-white text-2xl font-medium leading-[38px] tracking-tigh">
            Available on your favorite store. Start your premium experience now
          </p>
          <div className="flex items-start justify-between gap-4">
            <Button type={"primary"} buttonDescription={""}>
              Playstore
            </Button>
            <Button>App store</Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Download;
