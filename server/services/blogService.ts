import db from "../lib/db";

class BlogService {
  async getBlogs() {
    return await db.blog.findMany({
      select: {
        title: true,
        slug: true,
        image: true,
        updatedAt: true,
        author: true,
      },
      orderBy: { updatedAt: "desc" },
    });
  }
  async getBlogBySlug(slug: string) {
    return await db.blog.findUnique({
      where: { slug },
      select: {
        title: true,
        slug: true,
        image: true,
        updatedAt: true,
        author: true,
        content: true,
      },
    });
  }
}
const blogService = new BlogService();
export default blogService;
