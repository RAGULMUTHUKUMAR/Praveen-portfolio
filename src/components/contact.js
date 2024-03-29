import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
function Contact({ contact }) {
  return (
    <div id="contact" ref={contact}>
      <h1 className="font-bold text-4xl p-5 mt-[100px]">Contact</h1>
      <p className="text-gray-500 ml-5 font-light text-sm">
        Wanna talk about project, please feel free to contact me.
      </p>
      <br />
      <div className="w-[300px] h-[2px] bg-neutral-200 mx-auto flex justify-center items-center xl:w-[800px]"></div>
      <br />
      <div className="grid gap-2 mt-5 place-items-center md:grid-cols-3 md:p-5 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3">
        <div
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-[237px] h-[100px] border-[#F26649] border rounded-[15px] flex items-center justify-center lg:h-[150px]"
        >
          <div className="text-gray-500  font-light text-sm flex items-center gap-2 mr-5 justify-center">
            <FaPhone className="text-black" />
            (+91) 9025669748
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-[237px] h-[100px] border-[#F26649] border rounded-[15px] flex items-center justify-center lg:h-[150px]"
        >
          <div className="text-gray-500  font-light text-sm flex items-center gap-2 justify-center">
            <GoMail className="text-black" />
            praveenkm23114@gmail.com
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          className="w-[237px] h-[100px] border-[#F26649] border rounded-[15px] flex items-center justify-center lg:h-[150px]"
        >
          <div className="text-gray-500  font-light text-sm flex items-center gap-2 mr-6 justify-center">
            <FaLocationDot className="text-black" />
            Ariyalur,TamilNadu
          </div>
        </div>
      </div>
      <br />
      <div className="w-[300px] h-[2px] mt-5 bg-neutral-200 mx-auto flex justify-center items-center xl:w-[800px]"></div>
      <br />

      <div>
        <h1 className="font-bold text-4xl ml-5 mt-[50px]">Get In Touch</h1>

        <div className="xl:grid xl:grid-cols-2">
          <input
            type="text"
            placeholder="Name*"
            className="p-2 ml-5 mt-10 w-[290px]  border rounded-[5px] md:w-[350px] lg:w-[450px] xl:p-3 xl:w-[400px]"
          ></input>
          <input
            type="text"
            placeholder="Email*"
            className="p-2 ml-5 mt-10 w-[290px]  border rounded-[5px] md:w-[340px] lg:w-[450px] xl:p-3 xl:w-[400px]"
          ></input>

          <textarea
            placeholder="Message"
            className="p-2 ml-5 mt-10 w-[290px] h-[150px] md:w-[710px] lg:w-[925px] xl:w-[850px]"
          ></textarea>
        </div>

        <button className="bg-[#F26649] text-white p-3 border-[#F26649] rounded-[5px] mt-8 ml-5 w-[190px] shadow-[#F26649] shadow-2xl">
          SEND IT
        </button>
      </div>

      <div className="w-[300px] mt-[100px] h-[2px] bg-neutral-200 mx-auto flex justify-center items-center xl:w-[800px]"></div>
    </div>
  );
}

export default Contact;
