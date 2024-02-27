function Education({ education }) {
  return (
    <div ref={education} id="education">
      <p className="font-bold text-4xl p-5 mt-[100px]">Education</p>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl"
      >
        <h2 className="font-medium text-sm p-5">SSLC</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
        Raja Vignesh Hr. Sec.School-HSC Melamathur
        </p>
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          Completed SSLC with 96% in 2016-2017
        </h1>
      </div>
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="flex justify-end mr-5"
      >
        <div className="w-[50%] shadow-2xl p-5 rounded-xl">
          <h2 className="font-medium text-sm p-5">HSC</h2>
          <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
            Raja Vignesh Hr. Sec.School-HSC Melamathur
          </p>
          <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
            Completed HSC (Biology math group) with 80% in 2018-2019
          </h1>
        </div>
      </div>
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl"
      >
        <h2 className="font-medium  text-sm p-5">UNDERGRADUATE B.E-CSE</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          University College Of Engineering Tindivanam-604001
        </p>
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          Graduated in the year 2023 with an Aggregate CGPA of 7.5.
        </h1>
      </div>
    </div>
  );
}

export default Education;
