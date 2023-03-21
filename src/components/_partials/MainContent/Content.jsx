import FoundersProfile from "./FoundersProfile";
import WhatWeDo from "./WhatWeDo";

function Content() {
  return (
    <div className="bg-gray-100 p-1">
      <div className="mt-32 md:mt-[3.5rem]">
        <WhatWeDo />
      </div>
      <div className="container mx-auto mb-20 px-4">
        <FoundersProfile />
      </div>
    </div>
  );
}

export default Content;
