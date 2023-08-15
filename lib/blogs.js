import axios from "axios";

const CMS_URL = "https://villaex-cms.herokuapp.com/blog?website=konnectx";

export const getBlogs = async () => {
  const response = await axios.get(CMS_URL);

  return response?.data?.blogs;
};
