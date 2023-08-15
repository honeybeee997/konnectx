"use client";
import { HelmetProvider } from "react-helmet-async";

import Layout from "@/components/layout/Layout";
import AllCookies from "@/components/Components/AllCookies";
import icon from "@/components/assets/Icon/konnectx.ico";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const helmetContext = {};

export default function RootLayout({ children }) {
  return (
    <HelmetProvider context={helmetContext}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href={icon.src} sizes="any" />
        </head>
        <body>
          <Layout>
            {children}
            <AllCookies />
          </Layout>
        </body>
      </html>
    </HelmetProvider>
  );
}
