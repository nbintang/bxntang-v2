import RandomQuotes from "@/features/home/components/RandomQuotes";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container className="mt-24 sm:mt-32 text-black">
      <div className="flex flex-col gap-12 justify-between min-h-[calc(80vh-4rem)]">
        <div className="max-w-3xl">
          <BlurFade delay={0.2 }>
            <span className=" text-pretty tracking-tighter ">
              <WordRotate
                className="text-lg  sm:text-2xl  font-semibold  "
                words={[
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Front-End Developer",
                  "Back-End Developer",
                ]}
              />
            </span>
          </BlurFade>
          <BlurFade delay={0.2 * 2} inView blur="0px">
            <h2 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Nur Bintang Hidayat
            </h2>
          <p className="mt-6 text-xl text-neutral-600">
            We are a group of developer working at the intersection of design
            and technology. It is a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
          </BlurFade>
        </div>
        <BlurFade
          delay={0.2 * 2}
          inView
          blur="0px"
          className="flex justify-center items-center text-muted-foreground gap-2"
        >
          <p className="text-sm font-bold  pt-5 text-center  whitespace-normal break-words sm:text-2xl  lg:text-3xl xl:text-[30px]">
            <RandomQuotes />
          </p>
        </BlurFade>
      </div>
    </Container>
  );
}
