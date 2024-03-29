import React from "react";
import { FaXmark, FaTwitter, FaDownload, FaGithub } from "react-icons/fa6"; // Correct the import path
import profileImg from "../components/WhatsApp Image 2024-02-27 at 21.12.44_f2082f50.jpg";
import Typed from "react-typed";
import pdf1 from "./My Resume.pdf";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const Profile = ({ profile, setProfile }) => {
  function close() {
    setProfile(!profile);
  }

  return (
    <div>
      <div
        className={
          profile
            ? "fixed right-0 w-[95%] md:w-[50%] lg:w-[35%] bg-[#241F21]   transition-all duration-300 top-0 text-white  h-full z-50 "
            : "-right-full "
        }
      >
        {profile ? (
          <div>
            <FaXmark
              onClick={close}
              className="pt-3 pl-3 text-4xl text-gray-400"
            />
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="border-8 border-[#4d2d29] rounded-full w-[150px]"
                src={profileImg}
                alt="img"
              />
              <h1 className="text-3xl font-bold">Praveenkumar R</h1>
              <Typed
                strings={[
                  "Front-End Developer",
                  "Python Developer",
                ]}
                typeSpeed={50}
                backSpeed={25}
                loop
                className="text-[#F26649] text-2xl font-semibold"
              />
              <p className="text-center text-xs p-2">
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
              <div className="flex gap-10 text-xl mt-40 ">
                <a
                  href="https://www.instagram.com/pravy_n?utm_source=qr&igsh=MWlhOGVodG93bDUxcg=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrInstagram className="hover:text-[#F26649]" />
                </a>
                <SiGmail className="hover:text-[#F26649]" />
                <FaWhatsapp className="hover:text-[#F26649]" />
                <FaTwitter className="hover:text-[#F26649]" />
              </div>
              <a href={pdf1} target="_blank" rel="noreferrer">
                <button className="bg-[#F26649] w-[200px] p-4 border-[#F26649] rounded-[50px] flex justify-center items-center gap-5">
                  RESUME
                  <FaDownload />
                </button>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
