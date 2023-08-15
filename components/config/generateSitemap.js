import { Routes } from "./Routes";
import { noIndexRoutes } from "./route";
import axios from "axios";

const hostname = "https://konnectx.us";

export function generateSitemap() {
  const currentDate = new Date().toISOString().split("T")[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const route of Routes) {
    if (noIndexRoutes.includes(route.path)) {
      continue;
    }

    xml += "<url>\n";
    xml += `<loc>${hostname}${route.path}</loc>\n`;
    xml += `<lastmod>${currentDate}</lastmod>\n`;
    xml += "<priority>0.8</priority>\n";
    xml += "</url>\n";
  }
  axios
    .get("https://villaex-cms.herokuapp.com/blog?website=konnectx")
    .then((response) => {
      const blogs = response?.data?.blogs;
      console.log({ blogs });

      for (const blog of blogs) {
        xml += "<url>\n";
        xml += `<loc>${hostname}/blogs/${blog?.searchurl}</loc>\n`;
        xml += `<lastmod>${currentDate}</lastmod>\n`;
        xml += "<priority>0.8</priority>\n";
        xml += "</url>\n";
      }

      xml += "</urlset>";

      // console.log(xml);
    })
    .catch((err) => {
      console.error("Error fetching blog data:", err);
    });
}

