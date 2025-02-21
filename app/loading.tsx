import Container from "@/components/layouts/Container";
import { LoaderCircleIcon } from "lucide-react";

export default function Loading() {
  return (
    <Container className="mt-12 sm:mt-16  min-h-[calc(80vh-4rem)] grid place-items-center">
      <main className="flex flex-row gap-4 items-center">
        <h1 className="text-2xl text-gray-400">Loading...</h1>
        <LoaderCircleIcon className="h-8 w-8 animate-spin text-gray-400" />
      </main>
    </Container>
  );
}
