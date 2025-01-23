import { useEffect, useState } from "react";
import DonateSection from "./component/DonateSection";
import EmailSignup from "./component/EmailSignup";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import ImpactReport from "./component/ImpactReport";
import NewsSection from "./component/NewsSection";
import Sidebar from "./component/Sidebar";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="d-flex">
      {innerWidth > 768 && (
        <div style={{ zIndex: innerWidth < 1124 ? 9999 : 0, width: innerWidth < 1124 ? "200px" : "650px", minWidth: "91px" }}>
          <Sidebar />
        </div>
      )}
      <div className="">
        <div className="main_container">
          {innerWidth < 768 && <Sidebar />}
          <HeroSection />
          <ImpactReport />
          <DonateSection />
          <NewsSection />
          <EmailSignup />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
