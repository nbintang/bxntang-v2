import { Hono } from "hono";
import { handle } from "hono/vercel";
import { getBlogBySlug, getBlogs } from "./controller/blogController";
const app = new Hono().basePath("/api/server");
app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

const blog = new Hono();
blog.get("/", getBlogs);
blog.get("/:slug", getBlogBySlug);
app.route("/blogs", blog);
const handler = handle(app);
export default handler;
