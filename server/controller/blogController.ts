import { Context } from "hono";
import blogService from "../services/blogService";
import { HTTPException } from "hono/http-exception";
export const getBlogs = async (c: Context) => {
  const blogs = await blogService.getBlogs();
  if (!blogs) throw new HTTPException(404, { message: "Failed" });
  return c.json(
    {
      data: blogs,
      message: "Success",
      success: true,
      status: 200,
    },
    200
  );
};

export const getBlogBySlug = async (c: Context) => {
  const blog = await blogService.getBlogBySlug(c.req.param("slug"));
  if (!blog) throw new HTTPException(404, { message: "Failed" });
  return c.json(
    {
      data: blog,
      message: "Success",
      success: true,
      status: 200,
    },
    200
  );
};
