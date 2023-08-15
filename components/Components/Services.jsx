"use client";

import React from "react";
import {
  FaObjectUngroup,
  FaMobileAlt,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";
import {
  FaFlagCheckered,
  FaFlask,
  FaGlassMartini,
  FaHeart,
  FaBolt,
  FaMagic,
} from "react-icons/fa";

import icon1 from "../assets/new-SVGS/service-fiber-optic.png";
import icon2 from "../assets/new-SVGS/telecom-5g.png";
import icon3 from "../assets/new-SVGS/voip.png";
import icon4 from "../assets/new-SVGS/mobile-device.png";
import icon5 from "../assets/new-SVGS/services-managed-network.png";
import icon6 from "../assets/new-SVGS/service-phone-plan.png";
import icon7 from "../assets/new-SVGS/center-solution.png";
import icon8 from "../assets/new-SVGS/unified-com.png";

import service1 from "../assets/SVG/Exceptional-Cable-and-Internet-Service-Features-2.png";
import service2 from "../assets/SVG/Exceptional-Cable-and-Internet-Service-Features-1.png";
import internet from "../assets/Service_Pack_Icons/high-speed-internet.png";
import tv from "../assets/Service_Pack_Icons/CableTV.png";
import packages from "../assets/Service_Pack_Icons/bundled-packages.png";
import feature from "../assets/Service_Pack_Icons/AdditionalFeatures.png";

import ourCommitImg from "../assets/images/our-commit.png";
import { Helmet } from "react-helmet-async";
import { linkRoutes } from "../config/route";

const Services = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={linkRoutes.services} />
        <title>Best Cable TV & Internet Service Provider | Konnect X</title>
        <meta
          name="description"
          content="Get the best cable TV and internet service with Konnect X. Experience fast speeds and a wide range of channels. Connect with us for reliable service today!"
        />
        <meta name="robots" content="index" />
      </Helmet>
      <div className="container my-5 py-5 z-depth-1">
        <section className="dark-grey-text text-center padding-mange">
          <h1 className="font-weight-bold pt-4 mb-4">
            Exceptional Cable and Internet Service Features
          </h1>
          {/* <h5 className="font-weight-bold font-italic mb-5">
            At vero eos et accusamus et iusto odio dignissimos qui cupiditate
            non provident.
          </h5> */}
          <div className="row mx-lg-5 mx-md-3">
            <div className="col-md-6 mb-4">
              <div className="view mb-5">
                <img
                  src={service2.src}
                  width={400}
                  height={400}
                  className="img-fluid"
                  alt=" Exceptional Cable and Internet Service Features"
                />
              </div>
              <p
                className="font-weight-normal  text-justify"
                style={{ textAlign: "left" }}
              >
                Experience lightning-fast internet speeds that allow you to
                browse, stream, download, and game without any lag or
                interruptions. Our advanced infrastructure and cutting-edge
                technology ensure that you have the bandwidth you need for all
                your online activities.
              </p>
              {/* <br/>
              <a
            className="primary-button text-decoration-none"
            style={{ marginTop: "10px", display: 'flex', justifyItems: 'start', alignItems: 'start' }}
            href="tel:+1234567890"
          >
            (866) 345-4585
          </a> */}
            </div>
            <div className="col-md-6 mb-4">
              <p
                className="font-weight-normal   text-justify"
                style={{ textAlign: "right" }}
              >
                Our cable service offers an extensive channel lineup, catering
                to a wide range of interests. From sports and news to
                entertainment and movies, there's something for everyone in the
                family. Stay entertained with a diverse selection of
                high-quality programming.
              </p>
              <div className="view mt-5">
                <img
                  src={service1.src}
                  // width={500}
                  // height={500}
                  className="img-fluid"
                  alt="5G Internet Service"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-5 z-depth-1">
        <section className="dark-grey-text padding-mange">
          <h2 className="text-center font-weight-bold mb-4 pb-2 fs-1">
            Our Top-Ranked Telecom Services and Keywords
          </h2>
          <p className="text-center lead grey-text mx-auto mb-5 text-justify">
            In today's interconnected world, reliable and efficient
            communication is essential for businesses to thrive. At KonnectX, we
            offer a comprehensive range of top-ranked telecom services and
            solutions designed to meet your organization's unique needs.
            Experience the pinnacle of connectivity with our cutting-edge
            offerings:.
          </p>
          <div className="row">
            <div className="col-md-6 mobile-img">
              <div className="row mb-3">
                <div className="col-2 text-end">
                  <img
                    src={icon1.src}
                    alt="Fiber-Optic Internet"
                    width={55}
                    height={55}
                  />
                  {/* <svg xmlns={SIcon1}/> */}
                  {/* <SIcon1 /> */}
                  {/* <FaFlagCheckered className="fas fa-2x fa-flag-checkered deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Fiber-Optic Internet
                  </h3>
                  <p className="grey-text">
                    Experience ultra-fast internet speeds with our fiber-optic
                    internet services.
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2 text-end">
                  <img
                    src={icon2.src}
                    alt="5G Connectivity"
                    width={55}
                    height={55}
                  />
                  {/* <FaFlask className="fas fa-2x fa-flask deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">5G Connectivity</h3>
                  <p className="grey-text">
                    Enjoy the future of wireless communication with our 5G
                    network coverage.
                  </p>
                </div>
              </div>
              <div className="row mb-md-0 mb-3">
                <div className="col-2 text-end">
                  <img
                    src={icon3.src}
                    alt="VoIP Solutions"
                    width={55}
                    height={55}
                  />
                  {/* <FaGlassMartini className="fas fa-2x fa-glass-martini deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">VoIP Solutions</h3>
                  <p className="grey-text mb-md-0">
                    Streamline your business communication with our VoIP (Voice
                    over Internet Protocol) solutions.
                  </p>
                </div>
              </div>
              <div className="row mb-md-0 mb-3 mt-4">
                <div className="col-2 text-end">
                  <img
                    src={icon4.src}
                    alt=" Mobile Device Management"
                    width={55}
                    height={55}
                  />
                  {/* <FaGlassMartini className="fas fa-2x fa-glass-martini deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Mobile Device Management
                  </h3>
                  <p className="grey-text mb-md-0">
                    Simplify mobile device management and enhance security with
                    our comprehensive solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-2 text-center">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
                                alt="Sample image" />
                        </div> */}

            <div className="col-md-6 mobile-img">
              <div className="row mb-3">
                <div className="col-2 text-end">
                  <img
                    src={icon5.src}
                    alt=" Managed Network Services"
                    width={55}
                    height={55}
                  />
                  {/* <FaHeart className="far fa-2x fa-heart deep-purple-text" /> */}
                </div>

                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Managed Network Services
                  </h3>
                  <p className="grey-text">
                    Let us handle your network infrastructure, ensuring optimal
                    performance and reliability.
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-2 text-end">
                  <img
                    src={icon6.src}
                    alt="Business Phone Plans"
                    width={55}
                    height={55}
                  />
                  {/* <FaBolt className="fas fa-2x fa-bolt deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Business Phone Plans{" "}
                  </h3>
                  <p className="grey-text">
                    Explore our range of business phone plans designed to meet
                    the unique needs of your organization..
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-end">
                  <img
                    src={icon7.src}
                    alt="Data Center Solutions"
                    width={55}
                    height={55}
                  />
                  {/* <FaMagic className="fas fa-2x fa-magic deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Data Center Solutions
                  </h3>
                  <p className="grey-text mb-0">
                    Secure and efficient data storage and management with our
                    state-of-the-art data center solutions.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-2 text-end">
                  <img
                    src={icon8.src}
                    alt="Unified Communications"
                    width={55}
                    height={55}
                  />
                  {/* <FaMagic className="fas fa-2x fa-magic deep-purple-text" /> */}
                </div>
                <div className="col-10">
                  <h3 className="font-weight-bold mb-3">
                    Unified Communications
                  </h3>
                  <p className="grey-text mb-0">
                    Integrate all your communication channels into a unified
                    platform for enhanced efficiency and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-5">
        <section>
          {/* <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">
            Services
          </h6> */}
          <h2 className="font-weight-bold text-center dark-grey-text pb-2 fs-1">
            Why Choose Us?
          </h2>
          <hr className="w-header my-4" />
          <p className="lead text-center   pt-2 mb-5 mob-padding">
            At KonnectX, we take pride in providing exceptional cable and
            internet services that deliver a seamless and reliable online
            experience. When you choose us as your service provider, you can
            enjoy a range of outstanding features that set us apart.
          </p>
          <div className="row services-icon">
            <div className="col-md-6 col-xl-3 mb-4">
              <div
                className="card text-center text-white"
                style={{ backgroundColor: "#00a1eb" }}
              >
                <div className="card-body card-body-services">
                  <p className="mt-4 pt-2">
                    <img src={internet.src} alt="High-Speed-Internet" />
                  </p>
                  <h3 className="font-weight-normal my-4 py-2 fs-5">
                    {/* <a className="text-white"> */}
                    High-Speed Internet
                    {/* </a> */}
                  </h3>
                  <p className="mb-4">
                    Whether you're a casual internet user, a remote worker, or a
                    gamer, we have the perfect internet plan for you. Experience
                    blazing-fast speeds that allow you to browse websites,
                    stream HD videos, video chat, and download large files
                    without any delays.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4">
              <div className="card text-center">
                <div className="card-body card-body-services">
                  <p className="mt-4 pt-2">
                    <img src={tv.src} alt="Cable-TV" />
                  </p>
                  <h3 className="font-weight-normal my-4 py-2 fs-5">
                    {/* <a className="dark-grey-text"> */}
                    Cable TV
                    {/* </a> */}
                  </h3>
                  <p className="  mb-4">
                    Enjoy a vast selection of channels, including sports, news,
                    entertainment, movies, and more with our cable TV services.
                    Get access to your favorite shows, live sports events, and
                    on-demand content, ensuring that there's always something to
                    watch for every member of your household.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4 ">
              <div
                className="card text-center lighten-1 text-white"
                style={{ backgroundColor: "#00a1eb" }}
              >
                <div className="card-body card-body-services">
                  <p className="mt-4 pt-2">
                    <img src={packages.src} alt="Bundled-Packages" />
                  </p>
                  <h3 className="font-weight-normal my-4 py-2 fs-5">
                    {/* <a className="text-white"> */}
                    Bundled Packages
                    {/* </a> */}
                  </h3>
                  <p className="mb-4">
                    Take advantage of our bundled packages that combine internet
                    and cable TV services. Not only do you get the convenience
                    of having both services from a single provider, but you can
                    also enjoy cost savings with our bundled offerings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card text-center">
                <div className="card-body card-body-services">
                  <p className="mt-4 pt-2">
                    <img src={feature.src} alt="Additional-Features" />
                  </p>
                  <h3 className="font-weight-normal my-4 py-2 fs-5">
                    {/* <a className="dark-grey-text"> */}
                    Additional Features
                    {/* </a> */}
                  </h3>
                  <p className="  mb-4">
                    Enhance your internet and cable TV experience with our
                    additional features. From DVR services that allow you to
                    record and watch your favorite shows at your convenience to
                    streaming apps that let you access content on multiple
                    devices, we offer a range of options to enhance your
                    entertainment experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container z-depth-1 my-5 p-5">
        <section>
          <h2 className="text-center text-uppercase small short-text">
            Services
          </h2>
          <h3 className="font-weight-bold text-center dark-grey-text pb-2 fs-1">
            What We Offer?
          </h3>
          <hr className="w-header my-4" />
          <p className="lead text-center   pt-2 mb-5 text-justify">
            Choose KonnectX for exceptional cable and internet services that
            prioritize speed, reliability, and customer satisfaction. Experience
            the difference with our outstanding features and enjoy a seamless
            online experience like never before. Contact us today to get started
            and elevate your internet and cable service to new heights.
          </p>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 col-xl-4 ">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Unlimited Data
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Responsive, Minimalism</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                Say goodbye to data caps and enjoy unlimited data usage with our
                internet service. Stream your favorite movies and shows, play
                online games, video chat, and download large files without
                worrying about exceeding data limits.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Wide Network Coverage
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">PHP, MySQL, Laravel</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We have an extensive network coverage that spans across United
                States. Whether you're in the heart of the city or a rural area,
                we strive to bring reliable internet and cable services to your
                doorstep. Stay connected no matter where you are.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Reliable Connection
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We understand the importance of a reliable internet connection.
                Our network is built to provide consistent and uninterrupted
                service, ensuring that you stay connected at all times. Say
                goodbye to frustrating outages and enjoy a reliable connection
                you can count on.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Advanced Security Features
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We prioritize your online security. Our internet service comes
                with advanced security features, including firewall protection,
                malware detection, and optional parental controls. Surf the web
                with confidence knowing that your online activities are
                safeguarded.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                On-Demand Content
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                Access a variety of on-demand content, including movies, TV
                shows, and special events. Catch up on missed episodes or
                explore new releases at your convenience. Enjoy the flexibility
                of watching what you want when you want it.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Streaming Apps and Platforms
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We offer compatibility with popular streaming apps and
                platforms, allowing you to access your favorite streaming
                services seamlessly. Whether you prefer Netflix, Hulu, Disney+,
                or others, you can easily stream your desired content on various
                devices.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Exceptional Customer Support
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We pride ourselves on delivering exceptional customer support.
                Our dedicated team is available to assist you with any
                inquiries, technical issues, or concerns you may have. We're
                committed to providing you with the best possible service and
                ensuring your satisfaction.
              </p>
            </div>
            <div className="col-md-6 col-xl-4">
              <h4 className="">
                {/* <a className="dark-grey-text"> */}
                Affordable Pricing and Packages
                {/* </a> */}
              </h4>
              {/* <p className="small grey-text">Andriod, iOS</p> */}
            </div>
            <div className="col-md-6">
              <p className="  mb-5 pb-2 text-justify">
                We offer competitive pricing and a variety of packages to suit
                different budgets and needs. Whether you're looking for basic
                internet or a comprehensive bundle with cable services, we have
                options that offer great value for your money.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container mt-5">
        <section>
          <div className="row">
            <div className="col-lg-7 mb-4 align-self-center text-center text-lg-left">
              <h2 className=" mb-5">Our Commitment</h2>
              <p className="  mb-4 mob-padding">
                We are committed to delivering reliable internet and cable
                services that meet your needs and exceed your expectations. Join
                our growing family of satisfied customers and experience the
                difference with KonnectX. Contact us today to get started and
                enjoy the benefits of fast, reliable, and entertaining services.
              </p>
            </div>
            <div className="col-lg-5 mb-4">
              <div className="view overlay">
                <img
                  className="img-fluid mx-auto"
                  width={500}
                  height={500}
                  src={ourCommitImg.src}
                  alt="reliable internet and cable services"
                />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
