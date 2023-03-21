
function Jobs() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around rounded-r-md bg-surface p-4 text-onSurface shadow-md">
      <div className="text-left">
        <h2 className="text-2xl font-semibold uppercase antialiased">
          Job Portal
        </h2>
        <p className="text-xs">
          Dhaka Credit is the first &amp; largest Credit Union of its kind
          currently in Bangladesh. Join with us.
        </p>
      </div>
      <div className="my-10 w-full text-left">
        <ul className="flex w-full flex-col divide-y">
          <li className="group cursor-pointer overflow-hidden rounded-sm hover:bg-backgroundVariant hover:shadow-sm">
            <a className="" href="#">
              <p className="antialiased font-semibold">
                Front End Web Developer
              </p>
              <p className="text-xs"></p>
              <p className="text-xs">Apr 6th 23</p>
              <div className="text-xs"></div>
            </a>
            <span className="text-sm text-onSurface group-hover:text-primary group-hover:underline">
              View details
            </span>
          </li>
          <li className="group cursor-pointer overflow-hidden rounded-sm hover:bg-backgroundVariant hover:shadow-sm">
            <a aria-current="page" className="active" href="#">
              <p className="antialiased">Web Developer</p>
              <p className="text-xs"></p>
              <p className="text-xs">Mar 27th 23</p>
              <div className="text-xs"></div>
            </a>
            <span className="text-sm text-onSurface group-hover:text-primary group-hover:underline">
              View details
            </span>
          </li>
          <li className="group cursor-pointer overflow-hidden rounded-sm hover:bg-backgroundVariant hover:shadow-sm">
            <a className="" href="#">
              <p className="antialiased">
                Software Engineer (Dotnet Developer)
              </p>
              <p className="text-xs"></p>
              <p className="text-xs">Apr 20th 23</p>
              <div className="text-xs"></div>
            </a>
            <span className="text-sm text-onSurface group-hover:text-primary group-hover:underline">
              View details
            </span>
          </li>
        </ul>
      </div>
      <a
        aria-current="page"
        className="active float-right block pt-6 text-center hover:font-semibold hover:text-primary"
        href="#"
      >
        View All
      </a>
    </div>
  );
}

export default Jobs;
