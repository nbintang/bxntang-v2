export type dummyBlogProps = {
  slug: string
  title: string;
  description: string;
  image: string;
  content: string;
  date: string;
  author: string;
};

export const dummyBlog: dummyBlogProps[] = [
  {
    slug: "hono",
    title: "Hono: A Lightweight Web Framework with Big Potential",
    description:
      "When it comes to modern web development, simplicity, speed, and adaptability are the new cornerstones. Enter Hono.js, a minimalist yet powerful framework designed to thrive in cutting-edge environments like Cloudflare Workers, Deno, and Bun.",
    image: "/img/hono.jpg",
    date: "2025-08-01",
    content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi quisquam voluptas aliquid ipsa fugiat? Excepturi voluptatum autem molestias quisquam ex exercitationem veniam quidem quaerat ab cumque? Nam sed eaque veritatis sapiente enim ut aspernatur saepe error pariatur ad. Reprehenderit, minima magni corporis praesentium quas maiores nulla, omnis corrupti, maxime ad accusamus illum. Eius libero ea incidunt. Nisi, non provident, cumque harum laborum placeat esse dolorem tempore, animi numquam ratione debitis aut quo reprehenderit unde corporis? Debitis perspiciatis odit possimus labore officia! Quae laudantium suscipit obcaecati expedita provident. Incidunt, eius. Nostrum aliquam blanditiis porro eligendi nesciunt amet quisquam odio saepe distinctio pariatur ut quam facere, consequatur expedita sit mollitia fugit, rerum odit?",
    author: "Bxntang",
  },
  {
    slug: "go",
    title: "Understand Go: Goroutines, Channels, and Concurrency",
    description:
      "Goroutine adalah salah satu fitur kunci yang membedakan Go (Golang) dari bahasa pemrograman lainnya. Mereka adalah unit konkuren eksekusi yang ringan dan memungkinkan untuk menangani ribuan proses secara bersamaan.",
    image: "/img/go.png",
    date: "2025-02-21",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi quisquam voluptas aliquid ipsa fugiat? Excepturi voluptatum autem molestias quisquam ex exercitationem veniam quidem quaerat ab cumque? Nam sed eaque veritatis sapiente enim ut aspernatur saepe error pariatur ad. Reprehenderit, minima magni corporis praesentium quas maiores nulla, omnis corrupti, maxime ad accusamus illum. Eius libero ea incidunt. Nisi, non provident, cumque harum laborum placeat esse dolorem tempore, animi numquam ratione debitis aut quo reprehenderit unde corporis? Debitis perspiciatis odit possimus labore officia! Quae laudantium suscipit obcaecati expedita provident. Incidunt, eius. Nostrum aliquam blanditiis porro eligendi nesciunt amet quisquam odio saepe distinctio pariatur ut quam facere, consequatur expedita sit mollitia fugit, rerum odit?`,
    author: "Bxntang",
  },
  {
    slug: "nextjs",
    title: "What's New in Next.js 15: New Hooks, Turbopack and more!",
    description: `Next.js has consistently pushed the boundaries of modern web development, and with version 15, they've introduced some nice features that improve both performance and the developer experience.
    Let’s take a closer look at some of the most impactful updates with some example usages.`,
    image: "/img/nextjs.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi quisquam voluptas aliquid ipsa fugiat? Excepturi voluptatum autem molestias quisquam ex exercitationem veniam quidem quaerat ab cumque? Nam sed eaque veritatis sapiente enim ut aspernatur saepe error pariatur ad. Reprehenderit, minima magni corporis praesentium quas maiores nulla, omnis corrupti, maxime ad accusamus illum. Eius libero ea incidunt. Nisi, non provident, cumque harum laborum placeat esse dolorem tempore, animi numquam ratione debitis aut quo reprehenderit unde corporis? Debitis perspiciatis odit possimus labore officia! Quae laudantium suscipit obcaecati expedita provident. Incidunt, eius. Nostrum aliquam blanditiis porro eligendi nesciunt amet quisquam odio saepe distinctio pariatur ut quam facere, consequatur expedita sit mollitia fugit, rerum odit?`,
    date: "2025-04-12",
    author: "Bxntang",
  },
];
