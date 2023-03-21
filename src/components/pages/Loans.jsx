import LoanDesc from "assets/json/loanInfo.json";
import Card from "components/_partials/Card";
import MainHead from "components/_partials/MainHead";

const bannerText = {
  heading: "Our Services",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Loans() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <div className="container mt-32 md:mt-[3.5rem] mx-auto z-0 mb-20 gap-6 px-4 grid grid-cols-1 md:grid-cols-3">
        {LoanDesc.map((item, index) => (
          <Card key={index} LoanInfo={item} />
        ))}
      </div>
    </>
  );
}

export default Loans;
