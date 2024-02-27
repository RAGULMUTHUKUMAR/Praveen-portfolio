function About({ about }) {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000" id="about" ref={about}>
      <h1 className="font-bold text-4xl mt-[50px] ml-5 ">About Me</h1>
      <p className="text-gray-500 p-5 leading-5 text-justify">
        Iam Praveenkumar R , I pursued my Bachelor's degree
        in Computer Science Engineering (BE-CSE) from the
        prestigious University College of Engineering, Tindivanam. After graduation, I decided to challenge myself
        and took the TCS NQT Exam, where I achieved an impressive result of
        73%. Now, I am eagerly delving into the exciting
        world of Python development, pursuing a comprehensive course to hone
        my skills and knowledge in this domain. My journey so far has been
        filled with dedication, enthusiasm, and a drive to excel in the
        ever-evolving tech landscape. I am excited to see where this path leads
        me and to contribute my expertise to meaningful and innovative projects
        in the future.
      </p>
      <h1 className="font-bold text-4xl mt-[50px] ml-5 ">Personal Info</h1>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="ml-5 mt-5 text-base  text-justify"
      >
        <h1>
          Age : <span className="text-gray-500">22</span>
        </h1>
        <h1>
          Residence : <span className="text-gray-500">India</span>
        </h1>
        <h1>
          Address : <span className="text-gray-500">1/37B,Kudisal</span>
        </h1>
        <h1>
          E-mail : <span className="text-gray-500">praveenkm2311@gmail.com</span>
        </h1>
        <h1>
          Phone : <span className="text-gray-500">+91 9025669748</span>
        </h1>
      </div>
    </div>
  );
}

export default About;
