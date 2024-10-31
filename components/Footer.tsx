import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 lg:pt-32" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Get SolTok and Join the{" "}
          <span className="text-purple"> Solana Revolution</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center lg:max-w-4xl">
          Ready to experience the ultimate Solana social platform? Download
          SolTok now and stay connected, informed, and in control of your
          digital assets—all in one place.
        </p>

        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 my-4">
          Download the App
        </p>
        <div className="flex gap-8">
          <a>
            <img src="/playstore.png" className="w-12" />
          </a>

          <a>
            <img src="/app-store.png" className="w-12" />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 SOLTOK
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
