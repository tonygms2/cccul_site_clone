import familyLogo from "assets/images/logo/debit_card_family.png";
import ccculLogo from "assets/images/logo/golden_logo.png";
import React from "react";
function PlasticCard({ cardNumber, cardHolder, accountNumber, expiryDate }) {
  return (
    <div
      className={`flex relative  h-[19rem] w-[31.5rem]  shadow-xl transition duration-150 hover:scale-105 `}
    >
      <img
        className="absolute z-10 right-0 w-2/12  mr-5 mt-5"
        src={ccculLogo}
        alt="Dhaka Credit blue logo"
      />

      {/*This component will have the main */}
      <div className="items-center z-10  p-5 h-full w-11/12">
        <div className="relative  h-full mt-3 flex flex-col">
          <div className="font-bold text-[#DCAF5D] ">DHAKA CREDIT</div>
          <div className="text-end w-[81.33%] mt-2 font-bold text-[#DCAF5D]">
            VALID ONLY IN DHAKA CREDIT
          </div>
          <div className="flex flex-col h-full w-[108%]">
            <div className="h-3/5 w-full flex-col">
              <div className="w-full">
                <p className="text-center mt-5  font-bold text-onSurface ">
                  VIRTUAL CARD
                </p>
                <p className="text-center font-bold text-onSurface">
                  {cardNumber}
                </p>
                <p className="text-center font-bold text-onSurface">
                  {expiryDate}
                </p>
                <div className=" mt-5 flex w-full justify-between ">
                  <p className=" mt-4 ml-9 text-[#312F1A] h-3/6 font-bold ">
                    {cardHolder}
                  </p>
                  <div className="flex flex-col">
                    <p className="font-bold text-onSurface">Savings Account</p>
                    <p className="text-end font-semibold mt-1 text-onSurface">
                      {accountNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-[25%] rounded-b-lg h-[75%] w-[100%]   bg-yellow-600 bg-opacity-60"></div>
      <div className="absolute top-0 h-[30%]  rounded-t-lg w-[100%]  bg-[#312F1A] "></div>
      <div className="absolute top-[86%] h-[9%]  w-[100%]  bg-[#312F1A] "></div>
      <div className="absolute ml-1 top-[60%] h-[9%]  w-[100%]  ">
        <img className="h-20" src={familyLogo} alt="" />
      </div>
    </div>
  );
}

export default PlasticCard;
