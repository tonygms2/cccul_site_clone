import About from "components/pages/About";
import Career from "components/pages/Career";
import Contact from "components/pages/Contact";
import DebitCard from "components/pages/DebitCard";
import Deposits from "components/pages/Deposits";
import FAQ from "components/pages/FAQ";
import Home from "components/pages/Home";
import Loans from "components/pages/Loans";
import Notice from "components/pages/Notice";
import Projects from "components/pages/Projects";
import Services from "components/pages/Services";
import FoundersFullProfile from "components/_partials/About/FoundersFullProfile";
import History from "components/_partials/About/History";
import Footer from "components/_partials/Footer/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cccul_site_clone" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/loans" element={<Loans />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/card" element={<DebitCard />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />}>
          <Route index element={<History />} />
          <Route path="founders-profile" element={<FoundersFullProfile />} />
          <Route path="our-story" element={<History />} />
        </Route>
        <Route path="/notice" element={<Notice />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Header />
      <Sidebar/>
      <Banner bannerText={bannerText} />
      <Content /> */}
    </div>
  );
}

export default App;
