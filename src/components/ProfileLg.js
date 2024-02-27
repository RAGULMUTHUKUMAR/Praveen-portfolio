import React from "react";
import Typed from "react-typed";
import { FaDownload, FaGithub, FaTwitter } from "react-icons/fa6"; // Correct the import path
import profileImg from "../components/WhatsApp Image 2024-02-27 at 21.12.44_f2082f50.jpg";
import pdf2 from "./PRAVEENKUMAR RESUME.pdf";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const ProfileLg = () => {
  return (
    <div className="fixed top-0 right-0">
      <div className=" p-8 w-[450px] h-[100vh] text-center flex flex-col items-center  gap-5 bg-[#241F21] text-white ">
        <img
          className="border-8 border-[#4d2d29] rounded-full w-[150px]"
          src={profileImg}
          alt="img"
        />
        <h1 className="text-2xl font-bold">Praveenkumar R</h1>
        <Typed
          strings={["Front-End Developer", "Python Developer"   ]}
          typeSpeed={50}
          backSpeed={25}
          loop
          className="text-[#F26649] text-2xl font-semibold"
        />
        <p className=" ">
          I'm a passionate Front-End Developer with a knack for crafting
          seamless digital experiences.
        </p>
        <div className="flex gap-[50px] text-3xl">
          <a
            href="https://www.linkedin.com/in/praveenkumar23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/23praveenkumar"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="flex gap-[60px] mt-[250px] text-xl">
          <a
            href="https://www.instagram.com/pravy_n?utm_source=qr&igsh=MWlhOGVodG93bDUxcg==/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram className="hover:text-[#F26649]" />
          </a>
          <SiGmail className="hover:text-[#F26649]" />
          <FaWhatsapp className="hover:text-[#F26649]" />
          <FaTwitter className="hover:text-[#F26649]" />
        </div>
        <a href={pdf2} target="_blank" rel="noreferrer">
          <button className="bg-[#F26649] w-[200px]  p-4 border-[#F26649] rounded-[50px] flex justify-center items-center gap-5">
            RESUME
            <FaDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileLg;
