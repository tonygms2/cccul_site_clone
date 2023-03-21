
function Banner({ bannerText }) {
  const { heading, para } = bannerText;
  return (
    <div className=" lg:pb-20 md:pb-16">
      <div
        className={`absolute top-0 h-96 -z-50 w-full bg-[url("./assets/images/unity1.jpg")] bg-cover bg-no-repeat brightness-50 blur-[2px]`}
      ></div>
      <div className="m-12">
        <h1 className="mb-4 transition duration-150 animate-fadeInLeft text-center md:text-5xl text-4xl font-medium text-slate-100">
          {heading}
        </h1>
        <p className="text-center animate-slideInRight text-base font-semibold text-slate-200">
          {para}
        </p>
      </div>
    </div>
  );
}

export default Banner;
