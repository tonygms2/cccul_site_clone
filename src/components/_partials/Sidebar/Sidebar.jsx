import Jobs from "./Jobs";

function Sidebar() {
  return (
    <div className="min-h-[86px] bg-red-60 fixed z-[51] flex w-80 -translate-x-[280px] flex-row items-center transition-all hover:translate-x-0 top-[6.5rem] ">
      <div className="bg-blue-500 text-center">
        <Jobs />
      </div>
      <p className="text-sideways rounded-r-md bg-primary px-2 py-6 text-center text-md capitalize text-onPrimaryVariant antialiased shadow-md hover:cursor-pointer">
        Work With US
      </p>
    </div>
  );
}

export default Sidebar;
