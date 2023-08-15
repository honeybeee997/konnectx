"use client";

import React from "react";
// import { FaHome, FaUsers, FaSignal, FaAudible } from "react-icons/fa";
import icon1 from "../assets/SVG/Icon-Pkgs-01.png";
import icon2 from "../assets/SVG/Icon-Pkgs-02.png";
import icon3 from "../assets/SVG/Icon-Pkgs-03.png";
import icon4 from "../assets/SVG/ultimate.png";

import img1 from "../assets/about-section/KonnectX-(1).jpg";
import img2 from "../assets/about-section/KonnectX-(4).jpg";
import img3 from "../assets/about-section/KonnectX-8.jpg";
import Buttton from "./common/Buttton";
import { Helmet } from "react-helmet-async";
import { linkRoutes } from "../config/route";

const Packages = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={linkRoutes.packages} />
        <title>Cable TV & Internet Packages & Pricing | Konnect X</title>
        <meta
          name="description"
          content="Explore affordable cable TV and high-speed internet packages at Konnect X. Choose the perfect plan for your entertainment and connectivity needs."
        />
        <meta name="robots" content="index" />
      </Helmet>
      <div className="container my-5 py-5 z-depth-1 ">
        <section className="text-center px-md-5 mx-md-5 dark-grey-text padding-set">
          <div className="row mb-5">
            <div className="col-md-4 mx-auto">
              <div className="view mb-4 pb-2">
                <img
                  src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg"
                  className="img-fluid"
                  alt="Internet and Cable Packages"
                />
              </div>
            </div>
          </div>
          <h1 className="font-weight-bold mb-4 pb-2 padding-mange">
            Introducing our Internet and Cable Packages
          </h1>
          <p className="text-center mx-auto mb-4 pb-2 text-justify padding-mange">
            At KonnectX, we offer a range of packages designed to meet the
            diverse needs of our customers. Whether you're a casual internet
            user, a streaming enthusiast, a remote worker, or a family looking
            for a complete entertainment solution, we have the perfect package
            for you.
          </p>
          <Buttton>
            <a
              className="number-design"
              style={{ marginTop: "10px" }}
              href="tel:+18663454585"
            >
              (866) 345-4585
            </a>
          </Buttton>
        </section>
      </div>

      <div
        className="container my-5 package-our-pricing-plan "
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <section className="text-center dark-grey-text">
          <h2 className="font-weight-bold pb-2 mb-4 our-pricing-package">
            Our pricing plans
          </h2>
          <p className=" w-responsive mx-auto mb-5">
            Explore our packages below and choose the one that suits your needs.
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Basic Internet</h3>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <img
                        src={icon1.src}
                        alt="Basic Internet"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <h3 className="font-weight-bold my-4">$29.99/Mo</h3>
                  <div className="grey-text adjust-padding">
                    <ul style={{ paddingLeft: "1.5em" }}>
                      <li style={{ textAlign: "left" }}>
                        Ideal for light internet users who primarily browse the
                        web, check emails, and engage in social media.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Speeds up to 30 Mbps for smooth web browsing and basic
                        online activities.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Stay connected with a reliable and affordable internet
                        package.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="primary-button text-decoration-none"
                    style={{ marginTop: "10px" }}
                    href="tel:+18663454585"
                  >
                    (866) 345-4585
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Streaming</h3>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <img
                        src={icon2.src}
                        alt="Streaming"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <h3 className="font-weight-bold my-4">$79.99/Mo</h3>
                  <div className="grey-text">
                    <ul style={{ paddingLeft: "1.5em" }}>
                      <li style={{ textAlign: "left" }}>
                        Perfect for avid streamers and entertainment lovers who
                        enjoy seamless streaming of movies, TV shows, and music.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Speeds up to 100 Mbps to ensure smooth streaming without
                        buffering.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Unlimited data to support your binge-watching sessions.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="primary-button text-decoration-none"
                    style={{ marginTop: "10px" }}
                    href="tel:+18663454585"
                  >
                    (866) 345-4585
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Family Entertainment</h3>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <img
                        src={icon3.src}
                        alt="Family Entertainment"
                        width={110}
                      />
                    </div>
                  </div>
                  <h3 className="font-weight-bold my-4">$99.99/Mo</h3>
                  <div className="grey-text">
                    <ul style={{ paddingLeft: "1.5em" }}>
                      <li style={{ textAlign: "left" }}>
                        Ideal for families who want a comprehensive home
                        entertainment solution.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        High-speed internet with speeds up to 300 Mbps for
                        multiple devices and streaming simultaneously.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Extensive cable TV channels with a variety of genres to
                        suit everyone's interests.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="primary-button text-decoration-none"
                    style={{ marginTop: "10px" }}
                    href="tel:+18663454585"
                  >
                    (866) 345-4585
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-2">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Ultimate Bundle</h3>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <img src={icon4.src} alt="Ultimate Bundle" width={60} />
                    </div>
                  </div>
                  <h3 className="font-weight-bold my-4">$149.99/Mo</h3>
                  <div className="grey-text">
                    <ul style={{ paddingLeft: "1.5em" }}>
                      <li style={{ textAlign: "left" }}>
                        The complete package for those who want it all – fast
                        internet, extensive cable TV, and additional features.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Lightning-fast speeds up to 1 GIG for seamless browsing,
                        streaming, and gaming.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        A wide range of cable TV channels, including sports,
                        movies, news, and entertainment.
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Additional features such as DVR service, streaming apps,
                        and on-demand content.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="primary-button text-decoration-none"
                    style={{ marginTop: "10px" }}
                    href="tel:+18663454585"
                  >
                    (866) 345-4585
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-6 mb-2">
              <div className="card indigo">
                <div className="card-body white-text">
                  <h5 className="mb-4">Premium plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <FaUsers size={80} />
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">$79</h2>
                  <p>
                    Esse corporis saepe laudantium velit adipisci cumque iste
                    ratione facere non distinctio cupiditate sequi atque.
                  </p>
                  <a className="btn btn-outline-white btn-rounded">Buy now</a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-6 col-md-6 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-4">Advanced plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <FaChartLine size={80} className="indigo-text" />
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">$99</h2>
                  <p className="grey-text">
                    At ab ea a molestiae corrupti numquam quo beatae minima
                    ratione magni accusantium repellat eveniet quia vitae.
                  </p>
                  <a className="btn btn-indigo btn-rounded">Buy now</a>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>

      <div className="container mt-5 px-5 pt-5 pb-3 z-depth-1">
        <section className="text-center dark-grey-text">
          <h2 className="text-uppercase font-small short-text ">Features</h2>
          <h3 className="font-weight-bold fs-1">More Than You Think</h3>
          <hr className="w-header my-4" />
          <p className=" mx-auto mb-5 text-justify">
            At KonnectX, we understand that everyone has unique needs and
            preferences. That's why our packages are designed to be
            customizable. You can add features like DVR service, premium cable
            channels, or additional internet speed upgrades to create a package
            that perfectly fits your lifestyle.
          </p>
          <p className=" mx-auto mb-5 text-justify">
            Experience the convenience, reliability, and entertainment options
            that our packages offer. Contact us today to find the perfect
            package for your home or business and enjoy the benefits of fast and
            reliable internet and cable services from KonnectX.
          </p>
          <div className="row text-center d-flex justify-content-center">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="view card-img-100 mx-auto mb-4">
                <img
                  src={img1.src}
                  width={350}
                  height={350}
                  className="img-fluid packages-bottom-img"
                  alt="Blazing-Fast Internet Speeds"
                />
              </div>
              <h4 className="font-weight-normal mb-4">
                Blazing-Fast Internet Speeds
              </h4>
              <p className=" px-2 mb-lg-0 text-justify">
                Experience lightning-fast internet speeds that allow you to
                browse, stream, download, and game without any lag or
                interruptions. Our advanced infrastructure and cutting-edge
                technology ensure that you have the bandwidth you need for all
                your online activities.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="view card-img-100 mx-auto mb-4">
                <img
                  src={img2.src}
                  width={350}
                  height={350}
                  className="img-fluid packages-bottom-img"
                  alt="Unlimited Data"
                />
              </div>
              <h4 className="font-weight-normal mb-4">Unlimited Data</h4>
              <p className=" px-2 mb-lg-0 text-justify">
                Say goodbye to data caps and enjoy unlimited data usage with our
                internet service. Stream your favorite movies and shows, play
                online games, video chat, and download large files without
                worrying about exceeding data limits.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="view card-img-100 mx-auto mb-4">
                <img
                  src={img3.src}
                  width={333}
                  height={333}
                  className="img-fluid packages-bottom-img"
                  alt=" Wide Network Coverage"
                />
              </div>
              <h4 className="font-weight-normal mb-4 ">
                Wide Network Coverage
              </h4>
              <p className=" px-2 mb-md-0 text-justify">
                We have an extensive network coverage that spans across United
                States. Whether you're in the heart of the city or a rural area,
                we strive to bring reliable internet and cable services to your
                doorstep. Stay connected no matter where you are.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
