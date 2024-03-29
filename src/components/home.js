function Home({ home }) {
  return (
    <div data-aos="zoom-in" id="home" ref={home} data-aos-duration="2000">
      <div className="flex flex-col gap-1 justify-start mt-[150px] items-center  h-[700px] bg-[#F5F3EB]">
        <h1 className="text-4xl font-bold ">Hi I'm Praveenkumar R </h1>
        <p className="text-sm text-center p-5 text-gray-500">
          I'm a Front-End Developer and Python Developer creating awesome and
          effective visual identities for companies.
        </p>
        <button className="bg-[#F26649] text-white p-4 border-[#F26649] rounded-[10px] mt-8 w-[190px] shadow-[#F26649] shadow-2xl">
          HIRE ME
        </button>
      </div>
    </div>
  );
}
export default Home;
