import React from "react";
import {headers} from "next/headers"
import BlogsDetails from "@/components/Components/Blogs/BlogsDetails/BlogsDetails";


async function fetchBlogs() {
  const res = await fetch("https://villaex-cms.herokuapp.com/blog?website=konnectx", {cache: "force-cache"})

  const data = await res.json()

  return data.blogs;
}
 

const Page = async () => {
  const blogs = await fetchBlogs()

  const path = headers().get("x-invoke-path")


  const blogSelected = blogs?.find(
    (item) => item?.searchurl === path.split("/")[2]
  );

  const previousBlog = blogs
    ?.map((item, index) => {
      if (item?.searchurl === path.split("/")[2]) {
        return blogs[index - 1];
      } else {
        return "";
      }
    })
    .filter((item) => item !== "");

  const nextBlog = blogs
    ?.map((item, index) => {
      if (item?.searchurl === path.split("/")[2]) {
        return blogs[index + 1];
      } else {
        return "";
      }
    })
    .filter((item) => item !== "");

  return <BlogsDetails blogs={blogs} nextBlog={nextBlog} previousBlog={previousBlog} blogSelected={blogSelected}/>;
};

export default Page;
