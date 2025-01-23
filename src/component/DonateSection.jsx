// import "./custom.scss";

const DonateSection = () => {
  return (
    <div className="donate-section container text-center my-5">
      <h2 className="mb-4">PLEASE DONATE TO HELP SAVE WILDLIFE</h2>
      <p className="mb-4">
        {`When you give to WCS you're helping ensure a future for the earth's most magnificent creatures and the habitats critical to their survival. Make your tax-deductible gift today!`}
      </p>
      <div className="donation-options d-flex justify-content-center mb-4">
        <button className="btn btn-outline-secondary mx-2">$25</button>
        <button className="btn btn-outline-secondary mx-2">$50</button>
        <button className="btn btn-outline-secondary mx-2">$100</button>
        <button className="btn btn-outline-secondary mx-2">OTHER</button>
      </div>
      <button className="btn_light">NEXT</button>
    </div>
  );
};

export default DonateSection;
