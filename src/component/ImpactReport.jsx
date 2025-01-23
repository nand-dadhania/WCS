import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import map from "../assets/map.png";
// import "./custom.scss";

const ImpactReport = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 color_primary">2024 WCS IMPACT REPORT</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="impact-item">
            <img src={map} alt="World Icon" className="mb-3" />
            <h3>~40%</h3>
            <p>Conserves habitat for Earth’s biodiversity</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="impact-item">
            <img src={img1} alt="Protected Icon" className="mb-3 img-1" />
            <h3>360+</h3>
            <p>Protected areas WCS helped create since our founding</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="impact-item">
            <img src={img2} alt="Visitors Icon" className="mb-3" />
            <h3>3.5M</h3>
            <p>Visitors to our zoos and aquarium in 2023</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="impact-item">
            <img src={img3} alt="Partners Icon" className="mb-3" />
            <h3>440+</h3>
            <p>Local partner organizations, including local communities and Indigenous Peoples</p>
          </div>
        </div>
      </div>
      <button className="btn_primary mt-3">READ MORE</button>
    </div>
  );
};

export default ImpactReport;
