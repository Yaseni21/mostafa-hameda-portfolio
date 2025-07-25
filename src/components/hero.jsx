import React from "react";
import profileImage from "../assets/my_image.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-24 py-20 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-8 rounded-2xl border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition duration-300">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Mostafa Hameda
          </h1>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            Flutter Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            a cross-platform mobile and web developer with a passion for elegant
            interfaces and robust solutions.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-full border-4 border-gray-700 p-1 bg-gradient-to-br from-[#1a1a1a] to-[#111111] shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition duration-300">
          <img
            src={profileImage}
            alt="Mostafa Hameda"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
