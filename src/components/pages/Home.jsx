import Content from "components/_partials/MainContent/Content";
import MainHead from "components/_partials/MainHead";

const bannerText = {
  heading: "The Christian Co-operative Credit Union Ltd.,Dhaka",
  para: "Employment Creation is our goal; Self-reliant community is our dream",
};

function Home() {
  return (
    <>
      <MainHead bannerText={bannerText} />
      <Content />
    </>
  );
}

export default Home;
