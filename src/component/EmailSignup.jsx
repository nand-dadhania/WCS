import { useState } from "react";
import tigerImg from "../assets/tiger.jpg";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return;
    }
    // Handle form submission
    setError("");
  };

  return (
    <section className="email-signup">
      <div className="container">
        <h6 className="color_primary mb-4">SIGN UP FOR EMAIL UPDATES</h6>
        <p className="description">{` Get news from the field and learn about ways you can help Earth's most threatened species.`}</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className={`form-control ${error ? "is-invalid" : ""}`}
              aria-label="Email Address"
            />
            <button type="submit" className="btn">
              SUBSCRIBE
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>

        <div className="logo-container">
          <img src={tigerImg} alt="Stand for Wildlife" className="wildlife-logo" />
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
