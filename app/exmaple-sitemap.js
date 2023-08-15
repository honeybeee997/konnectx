import { getBlogs } from "../lib/blogs";
import { Routes } from "@/components/config/Routes";
import { noIndexRoutes } from "@/components/config/route";

const URL = "https://konnectx.us";

export default async function sitemap() {
  const blogs = await getBlogs();

  const blogUrls = blogs.map(({ searchurl }) => ({
    url: `${URL}/blog/${searchurl}`,
    lastModified: new Date().toISOString(),
  }));

  const urls = [];

  for (const route of Routes) {
    if (noIndexRoutes.includes(route.path)) continue;

    urls.push({
      url: `${URL}${route.path}`,
      lastModified: new Date().toISOString(),
    });
  }

  return [...urls, ...blogUrls];
}
