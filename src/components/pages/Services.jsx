import ServiceDesc from "assets/json/serviceInfo.json";
import MainHead from "components/_partials/MainHead";
import ServicesCard from "components/_partials/ServicesCard";

const bannerText = {
  heading: "Our Services",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

const images = require.context("/src/assets/images/service", true);
const imageFiles = images.keys().map((key) => images(key));
function Services() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <div className="container mt-32 md:mt-[3.5rem] mx-auto z-0 mb-20 gap-6 px-4 grid grid-cols-1 md:grid-cols-3">
        {ServiceDesc.map((item, index) => {
          return (
            <ServicesCard
              imgSrc={imageFiles[index]}
              key={index}
              ServicesInfo={item}
            />
          );
        })}
      </div>
    </>
  );
}

export default Services;
