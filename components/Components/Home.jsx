"use client";
import React from "react";
import { FaGem, FaChartArea, FaCogs, FaCloudUploadAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Faqs from "./Faq";
import icon1 from "../assets/home/KonnectX Website 4 Icons-01.png";
import icon2 from "../assets/home/KonnectX Website 4 Icons-02.png";
import icon3 from "../assets/home/KonnectX Website 4 Icons-03.png";
import icon4 from "../assets/home/KonnectX Website 4 Icons-04.png";
import image1 from "../assets/home/001.png";
import image2 from "../assets/home/002.png";
import image3 from "../assets/home/Internet-Providers3.png";
import image4 from "../assets/home/Internet-Providers4.png";
import image5 from "../assets/home/Internet-Providers5.png";
import image6 from "../assets/home/Internet_Providers6.png";
import invoice from "../assets/home/Pay_Your_Internet_and_Cable_Artboard 1.png";
import invoicePerson from "../assets/home/Pay_Your_Internet_and_Cable-02.png";
import "../style/style.scss";
import Buttton from "./common/Buttton";
import { Helmet } from "react-helmet-async";
import { Routes } from "../config/Routes";
import { linkRoutes } from "../config/route";
import { BlogsInfo } from "../constants/Blogs";
import hoverImage from "../assets/blogs/Size_Increase_Hover.png";
import sample from "../assets/blogs/sample.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgScrollV } from "react-icons/cg";
import { PayBills } from "../constants/BillPay";
import { HashLoader } from "react-spinners";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={linkRoutes.home} />
        <title>Konnect X: High Speed Internet & Cable TV Provider in USA</title>
        <meta name="robots" content="index" />
        <meta
          name="description"
          content="Experience lightning-fast internet speed and a wide range of cable TV channels with KonnectX, the leading provider of high-speed internet and cable TV services."
        />
      </Helmet>
      <header>
        <div id="home" className="view deep-purple darken-3">
          <div className="mask">
            <span role="img" aria-label="konnectx high speed telecom services">
              {" "}
            </span>
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                  <h1 className="white-text mb-4">
                    KonnectX: Empowering High-Speed Telecom Services
                  </h1>
                  <p className="mb-4 pb-2 white-text">
                    Experience lightning-fast internet with KonnectX, your
                    premier service provider of reliable and high-speed internet
                    cable connections. Stay connected and explore the digital
                    world like never before..
                  </p>
                  <Link
                    href="/about-us"
                    type="button"
                    // className="primary-button text-decoration-none about-us-home-button-link"
                  >
                    <Buttton className="button-margin">About Us</Buttton>
                  </Link>
                  <Link
                    href="/services"
                    type="button"
                    // className=" primary-button text-decoration-none "
                  >
                    <Buttton>Services</Buttton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container my-5 py-5 z-depth-1">
        <section className=" dark-grey-text text-center">
          <div className="row d-flex justify-content-center">
            <div>
              <div className="row">
                <div className="col-md-3 col-6 mb-4">
                  <img
                    src={icon1.src}
                    alt="world wide internet service"
                    className="w-50"
                  />
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <img src={icon2.src} alt="internet modems" className="w-50" />
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <img
                    src={icon3.src}
                    alt="wireless wifi network"
                    className="w-50"
                  />
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <img
                    src={icon4.src}
                    alt="internet security"
                    className="w-50"
                  />
                </div>
              </div>
              <p className="mob-padding">
                KonnectX, the leading internet provider, offers lightning-fast
                and secure connections for seamless exploration of the digital
                world. With reliable services, robust network infrastructure,
                and top-notch security measures, KonnectX ensures effortless
                connectivity across multiple devices. Experience the true
                potential of the internet with KonnectX.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className=" bg-color my-5 py-5 z-depth-1">
        <div className="container mt-5">
          <section className=" dark-grey-text text-center text-lg-left">
            <div className="blog-list-view-detail row">
              <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                <img
                  src={image6.src}
                  className="img-fluid"
                  alt="reliable high-speed telecom services"
                />
              </div>
              <div className="col-lg-6 mb-lg-0">
                <h2 className="fw-bold">Unleash the Power of Reliable</h2>
                <p className="font-weight-bold">High-Speed Telecom Services</p>
                <p className=" text-justify">
                  Are you looking for a telecom services provider that
                  understands your need for reliable connectivity, lightning
                  fast data speeds, and exceptional customer support? Look no
                  further! At KonnectX, we pride ourselves on delivering
                  top-notch telecom services that transform the way you
                  communicate and connect with the world.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container mt-5">
        <section className="dark-grey-text" id="pay-internet-bills">
          <h2 className="text-center font-weight-bold mb-4 pb-2 ">
            Pay Your Internet and Cable Bills with Ease!
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-4 position-center d-flex flex-column">
              <div className="pay-image">
                <img className="img-fluid" src={invoice.src} alt="invoice" />
                <img
                  src={invoicePerson.src}
                  alt="invoice"
                  className="invoice-fluid"
                />
              </div>
              <p className="image-bottom">
                Don't let your bills hold you back. Pay with ease, pay with
                confidence!
              </p>
            </div>
            {/* <div className="col-1">
              <CgScrollV color="#30a9fa" size={60} className="scroll-icon" />
            </div> */}
            <div className="col-lg-7 padding-mange mt-4">
              {PayBills?.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className="fw-bold mb-3 ">{item?.title}</h3>
                    <p className="text-justify">{item?.describe}</p>
                  </div>
                );
              })}
              <CgScrollV color="#30a9fa" size={60} className="scroll-icon" />
            </div>
          </div>
        </section>
      </div>
      <div className="container mt-5">
        <section className="dark-grey-text">
          <h2 className="text-center font-weight-bold mb-4 pb-2 ">
            Why Choose KonnectX for Your Telecom Needs?
          </h2>
          <p className="mob-padding text-center mx-auto w-responsive mb-5 ">
            Choose KonnectX as your premier internet provider for reliable
            internet cable services. Experience unparalleled network coverage,
            blazing-fast speeds, cutting-edge technology, and exceptional
            customer support. Embrace the digital age confidently with our
            latest telecom solutions.
          </p>

          <div className="row align-items-center">
            <div className="col-lg-5 position-center">
              <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src={image2.src}
                  alt="unparalleled internet services"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-7 padding-mange">
              <h3 className="fw-bold mb-3 ">Unparalleled Network Coverage</h3>
              <p className="text-justify">
                Our extensive internet coverage ensures that you stay connected
                wherever you go. From bustling urban areas to remote rural
                locations, our internet services keep you seamlessly connected.
              </p>
              <br />
              <Buttton>
                <a
                  className="number-design"
                  // style={{ marginTop: "10px" }}
                  href="tel:+18663454585"
                >
                  (866) 345-4585
                </a>
              </Buttton>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-color mt-5 mob-padding">
        <div className="container mt-5">
          <section className="dark-grey-text">
            <div className="row align-items-center">
              <div className="col-lg-7 ">
                <h3 className="fw-bold mb-3">Cutting-Edge Technology</h3>
                <p>
                  We stay at the forefront of technological advancements to
                  provide you with the latest telecom services. From 5G
                  connectivity to fiber-optic internet, we offer solutions that
                  enable you to embrace the digital age with confidence.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src={image4.src}
                    alt="latest 5G telecom services"
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container mt-5">
        <section className="dark-grey-text">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src={image3.src}
                  alt="blazing fast internet speed"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-7 mob-padding">
              <h3 className="fw-bold mb-3">Blazing-Fast Internet Speed</h3>
              <p>
                Say goodbye to slow internet connections and lagging downloads.
                With our advanced telecom infrastructure, we offer
                lightning-fast data speeds that empower you to stream, download,
                and browse with unmatched efficiency.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-color mt-5 padding-mange">
        <div className="container mt-5 ">
          <section className="dark-grey-text">
            <div className="row align-items-center">
              <div className="col-lg-7 right-padding ">
                <h3 className="fw-bold mb-3">Exceptional Customer Support</h3>
                <p>
                  Our dedicated customer support team is always ready to assist
                  you with any queries or concerns you may have regarding
                  services or bill payments. We believe in providing a seamless
                  experience, from the moment you sign up for our services to
                  ongoing support throughout your journey with us.
                </p>
                <br />
                <Buttton>
                  <a
                    className="number-design"
                    // className="primary-button text-decoration-none position-center mb-2"
                    // style={{ marginTop: "10px" }}
                    href="tel:+18663454585"
                  >
                    (866) 345-4585
                  </a>
                </Buttton>
              </div>

              <div className="col-lg-5">
                <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src={image5.src}
                    alt="exceptional customer support"
                  />
                  <a>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container mt-5">
        <section>
          <h2 className="text-center font-weight-bold mb-4 pt-4 ">Our Blog</h2>
          <div className="row">
            {BlogsInfo.map((item, index) => {
              if (index >= 3) return null;

              return (
                <div key={item.id} className="col-md-4" id="blogs-list">
                  {/* <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                        <div className="card hoverable">
                          <img
                            className="card-img-top"
                            src={item.featureImageUrl} alt={item.featureImageAltTag}
                          />
                          <div className="card-body">
                            <p className="card-title text-muted font-small mt-3 mb-2">
                              {item.metaDescription.slice(0,85)}...
                            </p>
                            <Link type="button" className="secondary-button" to={`/blogs/${item.searchUrl}`} style={{textAlign: 'center', textDecoration: 'none'}}>
                              Read more
                              <i className="fa fa-angle-right ml-2"></i>
                            </Link>
                          </div>
                        </div>
                      </div> */}

                  <div className="image-hover-effect">
                    <Link href={`/blogs/${item.searchUrl}`}>
                      <img
                        src={item.featureImageUrl.src}
                        alt={item.featureImageAltTag}
                        className="image"
                      />
                      <div className="overlay">
                        <img
                          src={hoverImage.src}
                          alt=""
                          className="hover-image"
                        />
                      </div>
                    </Link>
                  </div>
                  <h6>{item.category}</h6>
                  <Link
                    href={`/blogs/${item?.searchUrl}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h2>{item.blogTitle}</h2>
                  </Link>
                  <p>{item.metaDescription?.slice(0, 88)}...</p>
                  <div id="auther-details">
                    <div id="auther">
                      <img src={sample.src} alt="" />
                      <div>
                        <h4>{item.author}</h4>
                        <p>{item.date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blogs/${item.searchUrl}`}
                      className="text-decoration-none"
                    >
                      Read More
                      <AiOutlineArrowRight id="arrow" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Faqs />
    </>
  );
};

export default Home;
