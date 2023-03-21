import MainHead from "components/_partials/MainHead";
import { NavLink, Outlet } from "react-router-dom";

const bannerText = {
  heading: "Our Services",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};
function About() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <div className="content  bg-gray-200 flex md:flex-nowrap flex-wrap flex-row gap-6 w-full bg-surface p-8 text-left text-onBackground shadow-sm  md:text-justify lg:p-20 md:p-14  lg:text-justify">
        <div className="md:w-9/12 rounded-lg animate-slideInUp bg-surface">
          <div className="content   p-5 container mx-auto text-justify w-full text-onBackground shadow-sm ">
            <Outlet />
          </div>
        </div>

        <div className="w-full overflow-hidden animate-slideInRight rounded-md bg-surface shadow-sm md:w-3/12">
          <h2 className="bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200">
            About Us
          </h2>
          <ul className="flex w-full flex-col divide-y p-6 text-onSurface">
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              <NavLink to="founders-profile">Founder's Profile</NavLink>
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              <NavLink to="our-story">Our Story</NavLink>
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Mission & Vission
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Core Values
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              President Message
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              C.U Movement
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Achievement
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Women Activity
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Gallery
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              Publication
            </li>
            <li className="group flex item-center overflow-hidden rounded-sm p-2 hover:bg-backgroundVariant hover:shadow-sm">
              DC Calender
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
