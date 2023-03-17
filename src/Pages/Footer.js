import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>
              Email: info@yourwebsite.com <br />
              Phone: 555-555-5555 <br />
              Address: 123 Main Street, Anytown USA
            </p>
          </div>
          <div className="col-md-6">
            <h3>Connect With Us</h3>
            <p>
              <a href="#" className="text-white me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-white me-3">
                <FaFacebook />
              </a>
              <a href="#" className="text-white me-3">
                <FaInstagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
