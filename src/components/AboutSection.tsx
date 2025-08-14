import React from "react";
import { MdArrowForward } from "react-icons/md";

const AboutSection = () => {
  return (
    <main
      className="max-w-7xl mx-auto flex flex-col items-center md:items-start my-6"
      id="about"
    >
      <h1 className="md:text-6xl text-4xl font-caslon font-extralight capitalize text-primary md:text-left text-center md:mb-0 mb-3">
        Sharing our story
        <span className="block mt-4">with you</span>
      </h1>

      <div className="flex items-center justify-end md:w-full w-[90%] md:mt-5">
        <div className="flex items-center justify-center gap-2">
          <div className="md:h-20 md:w-20 w-40 h-40 flex items-center justify-center">
            <svg
              viewBox="0 0 75 75"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.7725 38.1035C57.9016 38.0973 74.1008 37.833 74.1008 37.5079C74.1008 37.1878 58.3991 36.9267 38.7043 36.9128C48.417 27.1776 55.9586 19.3752 55.7994 19.2161C55.6377 19.0544 47.5927 26.8355 37.6459 36.7671C37.6396 16.6467 37.3754 0.45752 37.0504 0.45752C36.7253 0.45752 36.461 16.657 36.4548 36.7863C26.4992 26.8456 18.4439 19.0543 18.2822 19.2161C18.123 19.3753 25.6646 27.1777 35.3773 36.9128C15.6914 36.9269 0 37.188 0 37.5079C0 37.8329 16.1889 38.0971 36.309 38.1035C26.1513 48.2685 18.118 56.569 18.2822 56.7333C18.444 56.895 26.4995 49.1036 36.4553 39.1627C36.4692 58.8571 36.7303 74.5583 37.0504 74.5583C37.3703 74.5583 37.6314 58.8673 37.6455 39.1819C47.5924 49.1136 55.6377 56.895 55.7994 56.7333C55.9636 56.5691 47.9302 48.2685 37.7725 38.1035Z"
                fill="#8e0700"
                stroke="#8e0700"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.7725 38.1035C57.9016 38.0973 74.1008 37.833 74.1008 37.5079C74.1008 37.1878 58.3991 36.9267 38.7043 36.9128C48.417 27.1776 55.9586 19.3752 55.7994 19.2161C55.6377 19.0544 47.5927 26.8355 37.6459 36.7671C37.6396 16.6467 37.3754 0.45752 37.0504 0.45752C36.7253 0.45752 36.461 16.657 36.4548 36.7863C26.4992 26.8456 18.4439 19.0543 18.2822 19.2161C18.123 19.3753 25.6646 27.1777 35.3773 36.9128C15.6914 36.9269 0 37.188 0 37.5079C0 37.8329 16.1889 38.0971 36.309 38.1035C26.1513 48.2685 18.118 56.569 18.2822 56.7333C18.444 56.895 26.4995 49.1036 36.4553 39.1627C36.4692 58.8571 36.7303 74.5583 37.0504 74.5583C37.3703 74.5583 37.6314 58.8673 37.6455 39.1819C47.5924 49.1136 55.6377 56.895 55.7994 56.7333C55.9636 56.5691 47.9302 48.2685 37.7725 38.1035Z"
                fill="#8e0700"
                stroke="#8e0700"
              ></path>
            </svg>
          </div>
          <div className="max-w-xl">
            <p className="text-gray-800 md:font-medium">
              We are passionate creators driven to make a difference. Our
              journey is built on trust, innovation, and vision.
            </p>
            <button className="py-2 px-3.5 mt-3 md:text-sm text-xs bg-gray-800 text-white transition duration-200 cursor-pointer  font-medium uppercase rounded-full inline-flex gap-2 items-center ">
              get in touch <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
