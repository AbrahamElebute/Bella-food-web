import React from "react";
import { logo, facebook, twitter, instagram } from "../../assets/images";
import PageContainer from "../PageContainer/PageContainer";
const Footer = () => {
  return (
    <PageContainer className="pt-8">
      <footer className="flex items-center justify-between">
        <img src={logo} alt="" width={100} />
        <div className="flex items-center justify-between gap-5">
          <img src={facebook} alt="" width={30} />
          <img src={twitter} alt="" width={30} />
          <img src={instagram} alt="" width={30} />
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </footer>
    </PageContainer>
  );
};

export default Footer;
