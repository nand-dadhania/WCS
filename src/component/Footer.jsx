import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const mainLinks = ["CONTACT", "MEMBERSHIP", "OUR SCIENCE", "COUNTRY PROGRAMS", "E-MEDIA KIT"];

  const legalLinks = ["Terms of Use", "Privacy Policy", "Children's Privacy Policy", "Charitable Solicitations", "Accessibility Statement", "Other Legal Topics"];

  const socialLinks = [
    { name: "FACEBOOK", icon: <Facebook />, url: "#" },
    { name: "X", icon: <Twitter />, url: "#" },
    { name: "BLUESKY", icon: "🦋", url: "#" },
    { name: "INSTAGRAM", icon: <Instagram />, url: "#" },
    { name: "YOUTUBE", icon: <Youtube />, url: "#" },
    { name: "TIKTOK", icon: "♪", url: "#" },
    { name: "LINKEDIN", icon: <Linkedin />, url: "#" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="main-nav">
          {mainLinks.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="social-links">
          {socialLinks.map(({ name, icon, url }) => (
            <a key={name} href={url} className="social-link" aria-label={name}>
              <span className="icon">{icon}</span>
              <span className="name">{name}</span>
            </a>
          ))}
        </div>

        <nav className="legal-nav">
          {legalLinks.map((link) => (
            <a key={link} href="#" className="legal-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="legal-info">
          <p>©2025 Wildlife Conservation Society</p>
          <p className="trademark">{`WCS, the "W" logo, WE STAND FOR WILDLIFE, I STAND FOR WILDLIFE, and STAND FOR WILDLIFE are service marks of Wildlife Conservation Society.`}</p>
          <p className="nonprofit">
            The Wildlife Conservation Society is a nonprofit, tax-exempt charitable organization (tax ID number 13-1740011) under Section 501(c)(3) of the Internal Revenue Code. Donations are
            tax-deductible as allowed by law.
          </p>
          <address>
            2300 Southern Boulevard Bronx, New York 10460 <a href="tel:+17182205100">(718) 220-5100</a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
