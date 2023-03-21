import DepositDesc from "assets/json/depositInfo.json";
import Card from "components/_partials/Card";
import MainHead from "components/_partials/MainHead";
const bannerText = {
  heading: "The Christian Co-operative Credit Union Ltd., Dhaka",
  para: "Employment creation is our goal; Self-reliant community is our dream",
};
function Deposits() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <div className="container mt-32 md:mt-[3.5rem] mx-auto z-0  gap-6 px-4 grid grid-cols-1 md:grid-cols-3">
        {DepositDesc.map((item) => (
          <Card LoanInfo={item} />
        ))}
      </div>
    </>
  );
}

export default Deposits;
