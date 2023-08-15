"use client";

import React, { useRef } from "react";
import Header from "../container/Header/Header";
import Footer from "../container/Footer/Footer";
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (window.location.pathname.includes("blogs")) {
      redirect("/");
      setTimeout(() => {
        scrollRef?.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }, 500);
    } else {
      scrollRef?.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  return (
    <>
      <Header handleClickScroll={handleScroll} />
      {children}
      <Footer refes={scrollRef} />
    </>
  );
};

export default Layout;
