import MainHead from "components/_partials/MainHead";

const bannerText = {
  heading: "Notice",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Notice() {
  return (
    <>
      <MainHead bannerText={bannerText} />
    </>
  );
}

export default Notice;
