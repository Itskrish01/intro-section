import React from "react";
import { motion } from "framer-motion";

export const Section = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="max-w-[76rem] md:text-left text-center mx-auto mt-14 mb-20 flex md:flex-row flex-col-reverse items-center gap-5 sm:gap-10"
    >
      <div className="md:p-16 px-3">
        <h1 className="text-[2.5rem] mt-5 md:mr-10 sm:mt-0 sm:leading-[5rem] md:text-[5rem] font-bold">
          Make remote work
        </h1>
        <p className="text-[18px] md:mr-20 text-gray-500 mt-5 sm:mt-10 leading-[1.6] tracking-[0.01em] max-md:mx-auto">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="text-[18px] mt-10 font-bold bg-[#141414] text-white border-[#141414] border rounded-2xl py-3.5 px-7 cursor-pointer transition">
          Learn more
        </button>
        <div className="sm:mt-28 mt-20 grid grid-cols-4 place-items-center gap-5 items-center">
          <div>
            <img src="/images/client-databiz.svg" alt="hero-image" />
          </div>
          <div>
            <img src="/images/client-audiophile.svg" alt="hero-image" />
          </div>
          <div>
            <img src="/images/client-maker.svg" alt="hero-image" />
          </div>
          <div>
            <img src="/images/client-meet.svg" alt="hero-image" />
          </div>
        </div>
      </div>
      <img
        src="/images/image-hero-desktop.png"
        alt="hero-image"
        className="md:block hidden ml-auto max-md:mx-auto"
        style={{}}
        width={480}
        height={640}
      />
      <img
        src="/images/image-hero-mobile.png"
        alt="hero-image"
        className="md:hidden block ml-auto max-md:mx-auto"
        width={480}
        height={640}
      />
    </motion.div>
  );
};
