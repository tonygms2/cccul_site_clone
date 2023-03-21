import PlasticCard from "components/PlasticCard";
import VirtualCard from "components/VirtualCard";
import MainHead from "components/_partials/MainHead";
import { NavLink } from "react-router-dom";
function DebitCard() {
  const bannerText = {
    heading: "Card",
    para: "Employment Creation is our goal; Self-reliant community is our dream",
  };
  return (
    <>
      <MainHead bannerText={bannerText} />
      <div className="flex flex-col bg-gray-100 h-screen">
        <div className="flex place-content-start ml-[10rem] mt-10 justify-start ">
          <div className="flex h-screen  flex-col">
            <VirtualCard
              cardNumber="55455455455"
              cardHolder="NICHOLAS TONY GOMES"
              accountNumber="T-51357"
              expiryDate={"02/20"}
            />
            <button className=" bg-indigo-900 mt-6 ml-[25%] w-[50%]  py-2 px-4 font-bold text-zinc-200 transition duration-300 hover:scale-105">
              <NavLink to="/">RE-ISSUE CARD</NavLink>
            </button>
          </div>
          <div className="ml-[2.5rem] flex h-screen flex-col">
            <PlasticCard
              cardNumber="55455455455"
              cardHolder="NICHOLAS TONY GOMES"
              accountNumber="T-51357"
              expiryDate={"02/20"}
            />
            <button className=" bg-indigo-900 mt-6 ml-[25%] w-[50%]  py-2 px-4 font-bold text-zinc-200 transition duration-300 hover:scale-105">
              <NavLink to="/">RE-ISSUE CARD</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DebitCard;
