import Container from "@/components/Container";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container className="grid place-items-center min-h-[calc(100vh-4rem)]">
      <BlurFade  inView className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-center text-neutral-600">
          Sorry, I could not find the page you are looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </BlurFade>
    </Container>
  );
};

export default NotFound;
