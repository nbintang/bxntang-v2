import { Blog } from "@prisma/client";
import axios from "axios";
export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get("/api/server/blogs");
    if (response.status === 404) throw new Error(response.statusText);

    const blogs = response.data?.data;
    if (!Array.isArray(blogs)) {
      throw new Error("Blog data is not an array");
    }

    return blogs;
  } catch (error) {
    throw new Error("Failed to fetch blog data");
  }
};

export const fetchBlogBySlug = async (slug: string): Promise<Blog> => {
  try {
    const response = await axios.get(`/api/server/blogs/${slug}`);

    if (response.status === 404) throw new Error(response.statusText);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch blog data");
  }
};
