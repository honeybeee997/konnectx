"use client";

import React, { useState } from "react";
import "./cookie.scss";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import Link from "next/link";

const AllCookies = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get("cookieAccepted"));

  const acceptCookies = () => {
    Cookies.set("cookieAccepted", "true");
    setShowBanner(false);
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      {showBanner && (
        <div className="cky-consent-container cky-banner-bottom">
          <div
            className="cky-consent-bar"
            data-cky-tag="notice"
            style={{ backgroundColor: "#000034", borderColor: "#000034" }}
          >
            <div className="cky-notice">
              {" "}
              <p
                className="cky-title"
                data-cky-tag="title"
                style={{ color: "#212121" }}
              />
              <div className="cky-notice-group">
                {" "}
                <div
                  className="cky-notice-des"
                  data-cky-tag="description"
                  style={{ color: "white" }}
                >
                  <p>
                    This website uses cookies in order to offer you the most
                    relevant information. Please accept cookies for
                    optimal&nbsp;performance.&nbsp;
                    <Link href="/cookies-policy" target="_blank">
                      Read more
                    </Link>
                  </p>
                </div>
                <div
                  className="cky-notice-btn-wrapper"
                  data-cky-tag="notice-buttons"
                >
                  <a className="login-button" onClick={acceptCookies}>
                    Accept All
                  </a>
                  {/* <button className="cky-btn cky-btn-accept" aria-label="Accept All" onClick={acceptCookies}
               data-cky-tag="accept-button" style={{"color":"#FFFFFF","background-color":"#1863DC","border-color":"#1863DC"}}>Accept All</button> */}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default AllCookies;
