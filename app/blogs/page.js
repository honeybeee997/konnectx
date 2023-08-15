import React from "react";

import Blogs from "@/components/Components/Blogs/Blogs";

export const metadata = {
  title: "Blogs",
};

async function fetchBlogs() {
  const res = await fetch("https://villaex-cms.herokuapp.com/blog?website=konnectx")

  const data = await res.json()

  return data.blogs;
}
 

const Page = async () => {

  const blogs = await fetchBlogs()

  return <Blogs blogs={blogs || []}/>;
};

export default Page;
