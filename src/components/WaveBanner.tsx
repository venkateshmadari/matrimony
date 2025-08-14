import React from "react";
import { MdArrowForward } from "react-icons/md";

const WaveBanner = () => {
  return (
    <div className="relative w-full lg:-mt-[40vh] xl:-mt-[55vh] 2xl:-mt-[83vh] z-10">
      {/* SVG wave container - maintains aspect ratio */}
      <div
        className="relative w-full"
        style={{ height: "0", paddingBottom: `${(324 / 375) * 100}%` }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 375 324"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M375 245.584L375 -81.5792H334.316C338.562 -97.9623 307.783 -100.06 291.863 -99.0612C292.748 -104.556 283.904 -126.033 239.682 -131.028C204.304 -135.024 189.564 -150.675 186.616 -158.001C183.078 -150.675 166.451 -135.024 128.243 -131.028C90.0356 -127.032 81.0734 -108.052 81.3682 -99.0612C38.0309 -104.556 38.0309 -84.0766 38.9153 -83.5771C39.6229 -83.1775 13.2668 -82.0786 0.000244141 -81.5792L0.000244141 245.085L38.9153 248.581C36.0851 266.563 64.2691 267.062 78.7149 265.064C75.7668 274.388 80.8375 294.434 124.705 300.028C168.573 305.623 184.257 321.007 186.616 327.999C188.09 321.506 202.359 306.821 247.642 300.028C292.925 293.235 297.76 273.888 294.517 265.064C329.187 271.058 337.264 256.573 336.97 248.581L375 245.584Z"
            fill="#FFF7E7"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* Content container - positioned over the SVG */}
      <div className="absolute inset-2 2xl:mt-[72vh] md:mt-[-10vh] -mt-[2vh] lg:mt-[35vh] flex flex-col items-center justify-center text-center px-4">
        <p className="md:text-sm text-xs uppercase tracking-widest select-none font-medium md:mb-4 mb-2 text-black">
          welcome to mata
        </p>
        <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-extralight  capitalize md:mb-3  select-none text-primary font-caslon">
          Remarkable
          <br />
          Weddings
          <br />
          Feasts
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-lg xl:text-xl max-w-md sm:max-w-lg select-none md:max-w-3xl italic tracking-normal md:mt-3 my-2 text-gray-800">
          Remarkable Weddings & Catering specializes in creating bespoke
          culinary experiences for your special day. From intimate elopements to
          grand receptions, our team crafts personalized menus that reflect your
          love.
        </p>
        <button className="md:py-3 py-2 md:px-4 px-3 md:text-base text-sm md:mt-7 bg-primary text-white transition duration-200 cursor-pointer  font-medium uppercase rounded-full inline-flex gap-2 items-center ">
          get in touch <MdArrowForward />
        </button>
        {/* <button className="py-3 md:mt-7 border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-200 cursor-pointer  font-medium uppercase rounded-full inline-flex gap-2 items-center px-4">
          get in touch <MdArrowForward />
        </button> */}
      </div>
    </div>
  );
};

export default WaveBanner;
