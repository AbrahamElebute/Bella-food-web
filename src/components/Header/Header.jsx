import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { logo } from "../../assets/images";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky w-full top-0 left-0 bg-white flex items-center justify-between px-8 py-2">
      <img src={logo} alt="" width={130} />
      <Navbar />
    </motion.header>
  );
};

export default Header;
