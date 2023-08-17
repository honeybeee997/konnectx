"use client";

import React from "react";
import sample from "../../../assets/blogs/sample.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./blogsDetails.scss";
import { BlogsInfo } from "../../../constants/Blogs";
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { BounceLoader } from "react-spinners";

const BlogsDetails = ({blogs, blogSelected, nextBlog, previousBlog}) => {

  const [loader, setLoader] = useState(false);

  return (
    <>
      <Helmet>
        <meta
          name="robots"
          content={blogSelected?.indexing === true ? "index" : "noindex"}
        />
        <link
          rel="canonical"
          href={`https://konnectx.us/blogs/${blogSelected?.searchurl}`}
        />
        <title>{blogSelected?.metaTitle}</title>
        <meta name="description" content={blogSelected?.metaDescription} />
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
        <section id="blog-details-wrapper">
          <div className="container mt-5 mb-5 blog-hero ">
            <div className="row p-5">
              <div className="col-md-6 text-center">
                <h2>{blogSelected?.blogCategory}</h2>
              </div>
              <div className="col-md-6 d-flex justify-content-center  ">
                <div id="auther">
                  <img src={blogSelected?.authorImageurl} alt="" />
                  <div>
                    <h4>{blogSelected?.authorName}</h4>
                    <p>{moment(blogSelected?.create_datetime).format("LL")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-md">
            <div className="container-md">
              <div className="row">
                <div className="col-md-7 blogs-description">
                  <img
                    src={blogSelected?.featureImageUrl}
                    alt={blogSelected?.featureImageTag}
                  />
                  <h1>{blogSelected?.blogTitle}</h1>
                  <>
                    {blogSelected !== undefined &&
                      parse(blogSelected?.blogDescription)}
                  </>
                  <hr />
                  <nav>
                    <ul className="pagination justify-content-between ">
                      {!previousBlog[0]?.searchurl ? (
                        " "
                      ) : (
                        <>
                          <li className="page-item">
                            <AiOutlineArrowLeft />
                            <a
                              className="page-link"
                              href={`/blogs/${previousBlog[0]?.searchurl}`}
                            >
                              Previous
                            </a>
                          </li>
                        </>
                      )}
                      {!nextBlog[0]?.searchurl ? (
                        " "
                      ) : (
                        <>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href={`/blogs/${nextBlog[0]?.searchurl}`}
                            >
                              {" "}
                              Next
                            </a>
                            <AiOutlineArrowRight />
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                  <hr />
                  <div className="post-comments-wrapper">
                    <span>Leave a Reply</span>
                    <form action="">
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="email" placeholder="Email address" />
                        </div>
                      </div>
                      <textarea rows="5" placeholder="Write your comment" />
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button>Post Comment</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 recent-post">
                  <h2>RECENT POSTS</h2>
                  <hr />
                  <div className="row">
                    {blogs?.map((item, index) => {
                      return (
                        <>
                          {index > 0 && index < 5 && (
                            <>
                              <div className="col-md-8 col-sm-8 col-8 post">
                                <span>{item?.blogCategory}</span>
                                <a
                                  href={`/blogs/${item?.searchurl}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <p>{item?.blogTitle}</p>
                                </a>

                                <div className="row">
                                  <div className="col-8 auther">
                                    <img src={item?.authorImageurl} alt="" />
                                    <span>{item?.authorName}</span>
                                  </div>
                                  <div className="col-4 date">
                                    <p>
                                      {moment(
                                        blogSelected?.create_datetime
                                      ).format("LL")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-4 col-4  d-flex justify-content-end">
                                <img
                                  src={item?.featureImageUrl}
                                  alt={item?.featureImageTag}
                                />
                              </div>
                              <hr />
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                  <div className="container newsletter-wrapper">
                    <div className="newsletter">
                      <p className="subscribe">Subscribe to our newsletter</p>
                      <p>Get latest news straight to your inbox</p>
                      <input type="email" placeholder="Your email Address" />
                      <button>Subscribe Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogsDetails;
