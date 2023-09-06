import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import { img1, img2, img3, logo, footerImg } from "../../assets/images";
const How = () => {
  return (
    <>
      <PageContainer className="mt-64">
        <hr className="h-4 p-4 border-t-[3px]" />
        <p
          className="text-black
                       text-[44px]
                       font-semibold
                       leading-9
                       tracking-tight
                       text-center
                       mb-14">
          How the app works
        </p>
        <div className="flex items-center justify-between">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <p className="text-orange-600 text-2xl font-bold leading-9 tracking-tight">
              Create an account
            </p>
            <p className="text-slate-800 text-[40px] font-bold leading-[57px] tracking-tight">
              Create/login to an existing <br /> account to get started
            </p>
            <p className="text-neutral-500 text-2xl font-medium leading-[38px] tracking-tight">
              An account is created with your email <br /> and a desired
              password
            </p>
          </div>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-600 text-2xl font-bold leading-9 tracking-tight">
              Explore varieties
            </p>
            <p className="text-slate-800 text-[40px] font-bold leading-[57px] tracking-tight">
              Shop for your favorites <br /> meal as e dey hot.
            </p>
            <p className="text-neutral-500 text-2xl font-medium leading-[38px] tracking-tight">
              Shop for your favorite meals or drinks <br /> and enjoy while
              doing it.
            </p>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="flex items-center justify-between">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <p className="text-orange-600 text-2xl font-bold leading-9 tracking-tight">
              Checkout
            </p>
            <p className="text-slate-800 text-[40px] font-bold leading-[57px] tracking-tight">
              When you done check out <br /> and get it delivered.
            </p>
            <p className="text-neutral-500 text-2xl font-medium leading-[38px] tracking-tight">
              When you done check out and get it <br /> delivered with ease.
            </p>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default How;
