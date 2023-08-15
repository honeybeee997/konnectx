import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  // FaLinkedin,
} from "react-icons/fa";
import Contact from "./Contact";
import "../../style/style.scss";
import logo from "../../assets/PNG/KonnectxLogoWhite.png";
import { routesPages } from "../../config/route";

const Footer = ({ refes }) => {
  const [showContact, setShowContact] = useState(null);

  useEffect(() => {
    const showContact = routesPages.find(
      (item) => window.location.pathname.toString() === item
    );

    setShowContact(showContact);
  }, []);

  return (
    <>
      {showContact && <Contact refs={refes} />}
      <footer className="page-footer text-center font-small info-color-dark background">
        <div className="rgba-stylish-strong">
          <div className=""></div>
          <div>
            <img className="footer-logo mb-3" src={logo.src} alt="logo" />
          </div>
          <div className="footer-copywright  background padding-mange">
            All product and company names are registered ® of their respective
            holders. <br></br>
            All Rights Reserved © {new Date().getFullYear()} KonnectX.com
          </div>
          <hr className="mb-0" />
          <div className="two-grid ">
            <div className="pages-link">
              <ul>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    target="_blank"
                    style={{ color: "white" }}
                    className="link"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    style={{ color: "white" }}
                    className="link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies-policy"
                    target="_blank"
                    style={{ color: "white" }}
                    className="link"
                  >
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-policy"
                    target="_blank"
                    style={{ color: "white" }}
                    className="link"
                  >
                    Data Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="icon-footer-adjustment">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <FaFacebookF className="mr-3 p-" size={15} color="white" />
                  </Link>
                </li>
                <li className="icon-footer-adjustment">
                  <Link href="https://www.instagram.com/" target="_blank">
                    <FaInstagram className="mr-3" size={15} color="white" />
                  </Link>
                </li>
                <li className="icon-footer-adjustment">
                  <Link href="https://twitter.com/" target="_blank">
                    <FaTwitter className="mr-3" size={15} color="white" />
                  </Link>
                </li>
                {/* <li className="icon-footer-adjustment">
                  <Link to="https://linkedin.com/" target="_blank">
                    <FaLinkedin className="mr-3" size={15} color="white" />
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
