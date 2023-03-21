import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
function MainHead({ bannerText }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Banner bannerText={bannerText} />
    </div>
  );
}

export default MainHead;
