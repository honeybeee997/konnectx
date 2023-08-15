"use client";

import React, { useEffect, useState } from "react";
import ring from "../../assets/blogs/ring.png";
import magic from "../../assets/blogs/MagicSpark.png";
import search from "../../assets/blogs/SearchIcon.png";
import sample from "../../assets/blogs/sample.jpg";
import sample2 from "../../assets/blogs/sample2.jpg";
import hoverImage from "../../assets/blogs/Size_Increase_Hover.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "react-tabs/style/react-tabs.css";
import "./blogs.scss";
import { BlogsInfo } from "../../constants/Blogs";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";
import moment from "moment/moment";
import Link from "next/link";

const Blogs = ({blogs}) => {
  const [selectIndex, setSelectIndex] = useState("All");

  const [loader, setLoader] = useState(false);

  const internetList = blogs?.filter(
    (item) => item?.blogCategory === "Internet"
  );
  const cableList = blogs?.filter((item) => item?.blogCategory === "Cable TV");

  return (
    <>
      <Helmet>
        <meta name="robots" content="index" />
        <link rel="canonical" href={`https://konnectx.us/blogs`} />
        <title>KonnectX Blogs - Everything about Internet, Cable TV</title>
        <meta
          name="description"
          content="Discover expert insights on internet and cable TV. From choosing plans to optimizing Wi-Fi, our articles cover it all. Stay informed and connected with our informative blogs."
        />
      </Helmet>
      {loader ? (
        <div className="loaderWrapper">
          <BounceLoader className="login-clip-loader" color="#008ddf" />
          <h1
            style={{
              color: "#844AFF",
              fontSize: "2.4rem",
            }}
          ></h1>
        </div>
      ) : (
        <section id="blog-wrapper">
          <div className="blog-hero">
            <div className="magic">
              <img src={magic.src} alt="" />
            </div>
            <div className="ring">
              <img src={ring.src} alt="" />
            </div>
            <h1>Blog</h1>
            <div className="search">
              <img src={search.src} alt="" />
              <input type="text" name="" id="" placeholder="search" />
            </div>
          </div>

          <div className="container">
            <Tabs>
              <TabList className="custom-tab-list">
                <Tab
                  className="custom-tab"
                  selectedClassName="custom-tab-selected"
                  onClick={(e) => setSelectIndex(e?.target?.textContent)}
                >
                  All
                </Tab>
                <Tab
                  className="custom-tab"
                  selectedClassName="custom-tab-selected"
                  onClick={(e) => setSelectIndex(e?.target?.textContent)}
                >
                  Internet
                </Tab>
                <Tab
                  className="custom-tab"
                  selectedClassName="custom-tab-selected"
                  onClick={(e) => setSelectIndex(e?.target?.textContent)}
                >
                  Cable TV
                </Tab>
              </TabList>
              {blogs?.length === 0 ? (
                <>
                  <TabPanel>
                    <h1>Sorry No data to show</h1>
                  </TabPanel>
                  <TabPanel>
                    <h1>Sorry No data to show</h1>
                  </TabPanel>
                  <TabPanel>
                    <h1>Sorry No data to show</h1>
                  </TabPanel>
                </>
              ) : (
                <div className="row gx-5 main-blog">
                  {selectIndex === "All" && (
                    <>
                      <div className="col-md-6 feature-image">
                        <Link
                          href={`/blogs/${blogs[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <img
                            src={blogs[0]?.featureImageUrl}
                            alt={blogs[0]?.featureImageTag}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6 blog-details">
                        <h6>{blogs[0]?.blogCategory}</h6>
                        <Link
                          href={`/blogs/${blogs[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <h2>{blogs[0]?.blogTitle}</h2>
                        </Link>
                        <p>{blogs[0]?.metaDescription}</p>
                        <div className="auther-details">
                          <div className="auther">
                            <img src={blogs[0]?.authorImageurl} alt="" />
                            <div>
                              <h4>{blogs[0]?.authorName}</h4>
                              <p>
                                {moment(blogs[0]?.create_datetime).format("LL")}
                              </p>
                            </div>
                          </div>
                          <Link
                            href={`/blogs/${blogs[0]?.searchUrl}`}
                            className="text-decoration-none"
                          >
                            Read More
                            <AiOutlineArrowRight className="arrow" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

                  {selectIndex === "Internet" && (
                    <>
                      <div className="col-md-6 feature-image">
                        <Link
                          href={`/blogs/${internetList[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <img
                            src={internetList[0]?.featureImageUrl}
                            alt={internetList[0]?.featureImageTag}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6 blog-details">
                        <h6>{internetList[0]?.blogCategory}</h6>
                        <Link
                          href={`/blogs/${internetList[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <h2>{internetList[0]?.blogTitle}</h2>
                        </Link>
                        <p>{internetList[0]?.metaDescription}</p>
                        <div className="auther-details">
                          <div className="auther">
                            <img src={internetList[0]?.authorImageurl} alt="" />
                            <div>
                              <h4>{internetList[0]?.authorName}</h4>
                              <p>
                                {moment(
                                  internetList[0]?.create_datetime
                                ).format("LL")}
                              </p>
                            </div>
                          </div>
                          <Link
                            href={`/blogs/${internetList[0]?.searchUrl}`}
                            className="text-decoration-none"
                          >
                            Read More
                            <AiOutlineArrowRight className="arrow" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

                  {selectIndex === "Cable TV" && (
                    <>
                      <div className="col-md-6 feature-image">
                        <Link
                          href={`/blogs/${cableList[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <img
                            src={cableList[0]?.featureImageUrl}
                            alt={cableList[0]?.featureImageTag}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6 blog-details">
                        <h6>{cableList[0]?.blogCategory}</h6>
                        <Link
                          href={`/blogs/${cableList[0]?.searchurl}`}
                          className="text-decoration-none text-dark"
                        >
                          <h2>{cableList[0]?.blogTitle}</h2>
                        </Link>
                        <p>{cableList[0]?.metaDescription}</p>
                        <div className="auther-details">
                          <div className="auther">
                            <img src={cableList[0]?.authorImageurl} alt="" />
                            <div>
                              <h4>{cableList[0]?.authorName}</h4>
                              <p>
                                {moment(cableList[0]?.create_datetime).format(
                                  "LL"
                                )}
                              </p>
                            </div>
                          </div>
                          <Link
                            href={`/blogs/${cableList[0]?.searchUrl}`}
                            className="text-decoration-none"
                          >
                            Read More
                            <AiOutlineArrowRight className="arrow" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

                  {blogs?.map((item, index) => {
                    return (
                      <div className="col-md-4 " id="blogs-list" key={index}>
                        {item?.blogCategory === selectIndex ? (
                          <>
                            <div className="image-hover-effect">
                              <Link href={`/blogs/${item?.searchurl}`}>
                                <img
                                  src={item?.featureImageUrl}
                                  alt={item?.featureImageTag}
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
                            <h6>{item?.blogCategory}</h6>
                            <Link
                              href={`/blogs/${item?.searchurl}`}
                              style={{ textDecoration: "none" }}
                            >
                              <h2>{item?.blogTitle}</h2>
                            </Link>
                            <p>{item?.metaDescription?.slice(0, 88)}...</p>
                            <div id="auther-details">
                              <div id="auther">
                                <img src={item?.authorImageurl} alt="" />
                                <div>
                                  <h4>{item?.authorName}</h4>
                                  <p>
                                    {moment(item?.create_datetime).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <Link
                                href={`/blogs/${item?.searchurl}`}
                                className="text-decoration-none"
                              >
                                Read More
                                <AiOutlineArrowRight id="arrow" />
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            {selectIndex === "All" && (
                              <>
                                <div className="image-hover-effect">
                                  <Link href={`/blogs/${item?.searchurl}`}>
                                    <img
                                      src={item?.featureImageUrl}
                                      alt={item?.featureImageTag}
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
                                <h6>{item?.blogCategory}</h6>
                                <Link
                                  href={`/blogs/${item?.searchurl}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <h2>{item.blogTitle}</h2>
                                </Link>
                                {/* <p>{item?.metaDescription?.slice(0, 88)}...</p> */}
                                <div id="auther-details">
                                  <div id="auther">
                                    <img src={item?.authorImageurl} alt="" />
                                    <div>
                                      <h4>{item?.authorName}</h4>
                                      <p>
                                        {moment(item?.create_datetime).format(
                                          "LL"
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  <Link
                                    href={`/blogs/${item.searchurl}`}
                                    className="text-decoration-none"
                                  >
                                    Read More
                                    <AiOutlineArrowRight id="arrow" />
                                  </Link>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Tabs>
            {/* <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link" href="#">
                  2 <span className="sr-only"></span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ....
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <IoIosArrowForward />
                </a>
              </li>
            </ul>
          </nav> */}
          </div>
        </section>
      )}
    </>
  );
};

export default Blogs;
