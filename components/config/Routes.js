import { lazy } from "react";

const Aboutus = lazy(()=>import("../Components/Aboutus")) ;
const Blogs = lazy(()=>import( "../Components/Blogs/Blogs"));
const BlogsDetails = lazy(()=>import("../Components/Blogs/BlogsDetails/BlogsDetails")) ;
const CookiesPolicy = lazy(()=>import("../Components/CookiesPolicy")) ;
const DataPolicy = lazy(()=>import("../Components/DataPolicy")) ;
const Home = lazy(()=>import( "../Components/Home"));
const Packages = lazy(()=>import("../Components/Packages")) ;
const PrivacyPolicy = lazy(()=>import( "../Components/PrivacyPolicy"));
const Services = lazy(()=>import( "../Components/Services"));
const TermsCondition = lazy(()=>import("../Components/TermsCondition")) ;
const NotFound = lazy(()=>import("../Components/404NotFound/NotFound")) ;

export const Routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <Aboutus /> },
    { path: "/packages", element: <Packages /> },
    { path: "/services", element: <Services /> },
    { path: "/terms-and-conditions", element: <TermsCondition /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/data-policy", element: <DataPolicy /> },
    { path: "/cookies-policy", element: <CookiesPolicy /> },
    { path: "/blogs", element: <Blogs/> },
    { path: "/blogs/:blog", element: <BlogsDetails/> },
    { path: "*", element: <NotFound/> }
];
