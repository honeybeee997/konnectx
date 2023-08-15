"use client";

import React, { useEffect, useRef, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
import Call_to_action from "../assets/Call_to_action_-_KonnectX.jpg";
import about from "../assets/About-Internet_provider_-_KonnectX.png";
import image2 from "../assets/home/002.png";
import image3 from "../assets/home/Internet-Providers3.png";
import image4 from "../assets/home/Internet-Providers4.png";
import image5 from "../assets/home/Internet-Providers5.png";
import image6 from "../assets/home/Internet_Providers6.png";

import picture1 from "../assets/about-section/KonnectX-8.jpg";
import picture2 from "../assets/about-section/KonnectX-11.jpg";
import pciture3 from "../assets/about-section/KonnectX-(10).jpg";
import picture4 from "../assets/about-section/KonnectX-(12).jpg";
import contactBg from "../assets/Call_to_action_-_KonnectX.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "../style/style.scss";

import Slider from "react-slick";
import Buttton from "./common/Buttton";
import { Helmet } from "react-helmet-async";
import { linkRoutes } from "../config/route";

const Aboutus = () => {
  // const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const columns = [
    {
      title: "Column 1",
      content: "Hello World",
    },
    {
      title: "Column 2",
      content: "Hello World!\nHello World!\nHello World!\nHello World!",
    },
    {
      title: "Column 3",
      content: "Some other text..\nSome other text..",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} left_arrow`}
        // className="left_arrow"
        // style={{ ...style }}
        onClick={onClick}
      >
        <i>
          <FaArrowRight />
        </i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} right_arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i>
          <FaArrowLeft />
        </i>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={linkRoutes.aboutUs} />
        <title>
          About Konnect X - Your Reliable Cable TV & Internet Provider
        </title>
        <meta
          name="description"
          content="Discover Konnect X, your trusted provider for cable TV and high-speed internet. Experience reliable connectivity and seamless entertainment."
        />
        <meta name="robots" content="index" />
      </Helmet>
      <div className=" about-container my-5 py-5">
        <section
          // className="px-md-5 mx-md-5 text-center white-text grey p-5 z-depth-1"
          className=" grey p-5 z-depth-1 about-section"
        >
          <div className="row w-100 cont-about">
            <div className="about-our-values col-md-5">
              <h2>About Us</h2>
              <h1>Your Premier Internet Cable Provider</h1>
              <p className="mb-3  fs-6">
                KonnectX - Seamless Online Experience at{" "}
                <span className="bold">Affordable Prices</span>
              </p>
              <p className="text-justify">
                Welcome to KonnectX, your premier internet cable provider! We
                understand that finding the right internet service provider can
                be a challenging task. But worry not, because we are here to
                offer you top-notch internet services at affordable prices. With
                our wide range of offerings and exceptional customer service, we
                ensure that you have a seamless online experience. Let's explore
                why we are the best choice for all your internet needs.
              </p>
            </div>
            <div className="col-md-6">
              <div className="img-blk ">
                <img
                  className="image-blk-about-us"
                  src={about.src}
                  alt="Best Internet Experience"
                />
              </div>
            </div>

            {/* <div className="col-xl-8 col-md-10">
              <FontAwesomeIcon icon={faGem} size="2x" className="mb-4" />
              <h3 className="font-weight-bold">Call to action</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                quam sapiente molestiae numquam quas, voluptates omnis nulla ea
                odio quia similique corrupti magnam.
              </p>
              <a
                href="#"
                className="btn btn-outline-white btn-md waves-effect"
                role="button"
              >
                <FontAwesomeIcon icon={faClone} className="left" /> View project
              </a>
            </div> */}
          </div>
        </section>
      </div>
      <div className="conatct-banner ">
        <h5 className="text-center fw-bold">
          Contact us today to get started{" "}
          <a className="text-decoration-none fw-bold" href="tel:+18663454585">
            (866) 345-4585{" "}
          </a>
        </h5>
      </div>
      <section className="bg-image-about-us">
        <div className="about-us-new-section-image"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="about-us-new-section-heading padding-mange">
                Discover the Best Internet Experience
              </h2>
              <p className="about-us-new-section-para mob-padding">
                Join our growing family of satisfied customers and experience
                the best internet services available. Whether you're looking for
                cable and internet, cable and internet bundles, or simply the
                fastest and cheapest internet in your area, we have the perfect
                solution for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container-fluid">
          <div className="row">
            <div className="col-sm d-flex">
              <div className="card card-body flex-fill">
                A small card content.
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="card card-body flex-fill">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
          </div>
          </div> */}
      <section id="slick-about-us">
        <Slider {...settings}>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Reliable Internet Services Provider
              </h3>
              <p className="card-text">
                When it comes to internet services, we are the leaders in the
                industry. Our extensive network coverage ensures that you can
                enjoy high-speed internet connectivity no matter where you are
                located. Whether you're searching for the best internet
                providers in your area we have got you covered.
              </p>
            </div>
          </div>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Convenient Bill Pay Options
              </h3>
              <p className="card-text">
                We understand the importance of hassle-free bill payment. That's
                why we offer multiple payment options to make it easy for you to
                manage your bills. Whether you prefer quick pay, easy pay, or
                even auto pay, we have flexible solutions to suit your
                preferences. You can conveniently pay your bill online or choose
                payment by phone—whatever works best for you.
              </p>
            </div>
          </div>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Unparalleled Customer Service
              </h3>
              <p className="card-text">
                At KonnectX, we prioritize customer satisfaction above
                everything else. Our dedicated customer service team is
                available to assist you with any queries or concerns you may
                have. Whether it's addressing billing issues or providing
                technical support, we are here to ensure that you have a smooth
                and pleasant experience with our services.
              </p>
            </div>
          </div>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Competitive Pricing
              </h3>
              <p className="card-text">
                We understand the importance of affordability without
                compromising on quality. That's why we offer competitive pricing
                options to suit your budget. Say goodbye to expensive internet
                bills and say hello to high-speed, reliable internet at the
                lowest cost possible.
              </p>
            </div>
          </div>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Easy Availability
              </h3>
              <p className="card-text">
                Determining internet availability at your address is crucial.
                With our user-friendly website or by reaching out to our
                customer service team, you can quickly find out if our services
                are available in your area. We strive to make the process as
                easy and seamless as possible.
              </p>
            </div>
          </div>
          <div className="card about-us-card">
            <div className="card-body">
              <h3 className="card-title about-us-card-title">
                Discover the Best Experience
              </h3>
              <p className="card-text">
                Join our growing family of satisfied customers and experience
                the best internet services available. Whether you're looking for
                cable and internet, cable and internet bundles, or simply the
                fastest and cheapest internet in your area, we have the perfect
                solution for you.
              </p>
            </div>
          </div>
        </Slider>
      </section>

      <div className="container my-5 px-5 pt-5 pb-4 z-depth-1">
        <section className="dark-grey-text mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 padding-mange">
              <h2 className=" mb-4">Connecting People Digitally</h2>
              <p className="lead text-justify">
                KonnectX, a leading Internet provider, is dedicated to creating
                meaningful moments of human connection through cutting-edge
                technology. As a prominent private broadband provider in the
                United States, we take pride in our ongoing investments in our
                team, communities, and network infrastructure.
              </p>
              <br />
              <Buttton>
                <a
                  className="number-design"
                  style={{ marginTop: "10px" }}
                  href="tel:+18663454585"
                >
                  (866) 345-4585
                </a>
              </Buttton>
            </div>
            <div className="col-lg-6 mb-4">
              <div id="mdb-lightbox-ui"></div>
              <div className="d-grid mdb-lightbox">
                <figure className="item">
                  <img
                    src={picture1.src}
                    alt="workplace"
                    className="images-position-about-section"
                  />
                </figure>
                {/* <figure className="item">
                  <img
                    src={picture2}
                    alt="workplace"
                    className="images-position-about-section"
                  />
                </figure> */}
                <figure className="item">
                  <img
                    className="images-position-about-section"
                    src={pciture3.src}
                    alt="workplace"
                  />
                </figure>
                <figure className="item">
                  <img
                    className="images-position-about-section"
                    src={picture4.src}
                    alt="workplace"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutus;
