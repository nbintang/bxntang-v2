type dummyProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
};

export const dummyData: dummyProps[] = [
  {
    title: "Hono: A Lightweight Web Framework with Big Potential",
    description:
      "When it comes to modern web development, simplicity, speed, and adaptability are the new cornerstones. Enter Hono.js, a minimalist yet powerful framework designed to thrive in cutting-edge environments like Cloudflare Workers, Deno, and Bun.",
    image: "/img/hono.jpg",
    date: "2025-08-01",
    author: "Bxntang",
  },
  {
    title: "Understand Go: Goroutines, Channels, and Concurrency",
    description:
      "Goroutine adalah salah satu fitur kunci yang membedakan Go (Golang) dari bahasa pemrograman lainnya. Mereka adalah unit konkuren eksekusi yang ringan dan memungkinkan untuk menangani ribuan proses secara bersamaan.",
    image: "/img/go.png",
    date: "2025-02-21",
    author: "Bxntang",
  },
  {
    title: "What's New in Next.js 15: New Hooks, Turbopack and more!",
    description: `Next.js has consistently pushed the boundaries of modern web development, and with version 15, they've introduced some nice features that improve both performance and the developer experience.
    Let’s take a closer look at some of the most impactful updates with some example usages.`,
    image: "/img/nextjs.png",
    date: "2025-04-12",
    author: "Bxntang",
  },
];
