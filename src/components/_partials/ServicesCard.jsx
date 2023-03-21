import { NavLink } from "react-router-dom";

function ServicesCard({ ServicesInfo, imgSrc }) {
  return (
    <>
      <NavLink to="#">
        <div className="group  flex animate-jackInTheBox  rounded-md bg-surface p-4 text-onSurface shadow-sm hover:shadow-md">
          <div>
            <img
              className="h-24 object-cover rounded-full"
              src={imgSrc}
              alt=""
            />
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">{ServicesInfo?.serviceType}</p>
            <p className="group-hover:cursor-pointer font-semibold">
              {ServicesInfo?.description}
              <span className="group-hover:underline group-hover:cursor-pointer ">
                Read More
              </span>
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default ServicesCard;
