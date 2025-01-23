import { useEffect, useState } from "react";
import bg3 from "../assets/bg3.jpg";

const HeroSection = () => {
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
    <>
      {innerWidth > 768 && (
        <div className="hero1_container">
          <div className="hero1_content_container">
            <div className="hero1_content">
              <div className="title">Wildlife Conservation Society</div>
              <div className="sub_title">We Stand for Wildlife®</div>
              <div className="button_container">
                <button className="btn_white">DONATE NOW</button>
                <div className="btn_text">CONTACT US</div>
                <div className="btn_text">MEMBERSHIP</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {innerWidth <= 768 && (
        <div className="hero1_container_mobile">
          <div className="w-100 donate_btn">
            <button className="btn_light w-100">DONATE NOW</button>
          </div>
          <div className="hero1_content_container_mobile">
            <div className="title">Protecting Resilient Reefs</div>
            <div className="sub_title">
              On a new WCS Wild Audio, roughly 90% of coral reefs globally face collapse by 2050 due to human activity. Miamba Yetu, a creative new financing mechanism, is designed to help protect
              them off Kenya and Tanzania.
            </div>
            <div className="button_container">
              <button className="btn_sec">LISTEN</button>
            </div>
          </div>
        </div>
      )}

      <div className="hero2_container">
        {innerWidth > 768 && (
          <div className="hero2_content">
            <div className="title">Protecting Resilient Reefs</div>
            <div className="sub_title">
              On a new WCS Wild Audio, roughly 90% of coral reefs globally face collapse by 2050 due to human activity. Miamba Yetu, a creative new financing mechanism, is designed to help protect
              them off Kenya and Tanzania.
            </div>
            <div className="button_container">
              <button className="btn_sec">LISTEN</button>
            </div>
          </div>
        )}
      </div>

      <div className="hero3_container">
        <div className="section_first">
          <div className="content">
            <div className="title">global conservation</div>
            <div className="sub_title">Addressing Climate Change</div>
            <div className="text">It’s already having devastating impacts on people and biodiversity. WCS’s Forest and Climate Change Program works on innovative solutions.</div>
            <button className="btn_sec">READ MORE</button>
          </div>
        </div>
        <div className="section_second">
          <div className="cotent1">
            <div className="title">Take Action</div>
            <div className="sub_title">Help Say Thank You</div>
            <div className="text">
              Thanks to all who voiced support for the U.S. Foundation for International Conservation Act. Congress recently passed this critical bill, which promises sustainable funding for protected
              areas around the world through a public-private partnership.
            </div>
            <button className="btn_primary">ACT NOW</button>
          </div>
          <div className="cotent2">
            <img src={bg3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
