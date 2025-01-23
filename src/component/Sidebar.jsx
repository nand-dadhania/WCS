import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import bottomImage from "../assets/bottomImage.svg";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const mainSideBar = () => {
    return (
      <>
        <div className="logo_container">
          <img src={logo} alt="" />
        </div>
        <div className="menu_container">
          <div className="menu_item">ways to support</div>
          <div className="menu_item">global conservation</div>
          <div className="menu_item">zoos & aquarium</div>
          <div className="menu_item">careers</div>
          <div className="menu_item">about us</div>
          <div className="menu_item">diversity, equity, and inclusion</div>
          <div className="menu_item">newsroom</div>
          <div className="menu_item">buy wcs branded products</div>
        </div>
        <div className="bottom_text">
          <img src={bottomImage} alt="" />
        </div>
      </>
    );
  };

  const secondarySideBar = () => {
    return (
      <div className="secondary_sidebar">
        <div className="logo_container_small">
          <img src={logo} alt="" />
        </div>
        <div className="d-flex justify-content-center w-100 mt-5">
          <div className="btn_text" onClick={toggleSidebar}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="menu_item">ways to support</div>
          <div className="menu_item">global conservation</div>
          <div className="menu_item">zoos & aquarium</div>
          <div className="menu_item">careers</div>
          <div className="menu_item">about us</div>
          <div className="menu_item">diversity, equity, and inclusion</div>
          <div className="menu_item">newsroom</div>
          <div className="menu_item">buy wcs branded products</div>
        </div>
      </div>
    );
  };

  const mobileNavbar = () => {
    return (
      <div className="mobile_sidebar">
        <div className=" mt-2">
          <div className="btn_text" onClick={toggleSidebar}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
        <div className="logo_container_mobile">
          <img src={logo} alt="" />
        </div>

        <div></div>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="menu_items">ways to support</div>
          <div className="menu_items">global conservation</div>
          <div className="menu_items">zoos & aquarium</div>
          <div className="menu_items">careers</div>
          <div className="menu_items">about us</div>
          <div className="menu_items">diversity, equity, and inclusion</div>
          <div className="menu_items">newsroom</div>
          <div className="menu_items">buy wcs branded products</div>
        </div>
      </div>
    );
  };

  return <div className={innerWidth < 768 ? "collapse_sidebar_container" : "sidebar_container"}>{innerWidth < 768 ? mobileNavbar() : innerWidth < 1124 ? secondarySideBar() : mainSideBar()}</div>;
};

export default Sidebar;
