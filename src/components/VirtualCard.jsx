import ccculLogo from "assets/images/logo/logocccul.png";
import React from "react";
function VirtualCard({ cardNumber, cardHolder, accountNumber, expiryDate }) {
  return (
    <div
      className={`flex relative  h-[19rem] w-[31.5rem]  rounded-lg shadow-xl transition duration-150 hover:scale-105 bg-white-card bg-cover`}
    >
      <img
        className="absolute right-0 w-2/12  mr-5 mt-5"
        src={ccculLogo}
        alt="Dhaka Credit blue logo"
      />

      {/*This component will have the main */}
      <div className="items-center p-5 h-full w-11/12">
        <div className="relative h-full mt-3 flex flex-col">
          <div className="font-bold text-onSurface">DHAKA CREDIT</div>
          <div className="text-end w-[81.33%] mt-2 font-bold text-onSurface">
            VALID ONLY IN DHAKA CREDIT
          </div>
          <div className="flex flex-col h-full w-[108%]">
            <div className="h-3/5 w-full flex-col">
              <div className="w-full">
                <p className="text-center mt-5 font-bold text-onSurface ">
                  VIRTUAL CARD
                </p>
                <p className="text-center font-bold text-onSurface">
                  {cardNumber}
                </p>
                <p className="text-center font-bold text-onSurface">
                  {expiryDate}
                </p>
                <div className=" mt-5 flex w-full justify-between ">
                  <p className=" mt-4  h-3/6 font-bold text-onSurface">
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

      <div className="absolute top-[85%] h-[9%] z-10 w-[100%]  bg-amber-500 opacity-20"></div>
    </div>
  );
}

export default VirtualCard;
