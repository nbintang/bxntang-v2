import RandomQuotes from "@/features/home/components/RandomQuotes";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container className="mt-24 sm:mt-32 text-black">
      <div className="flex flex-col gap-12 justify-between min-h-[calc(80vh-4rem)]">
        <div className="max-w-3xl">
          <BlurFade delay={0.2}>
            <span className=" text-pretty tracking-tighter ">
              <WordRotate
                className="text-base  sm:text-2xl  font-medium  "
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
            <p className="mt-6 text-sm sm:text-xl text-neutral-600  indent-2">
            I&apos;m a fullstack web developer passionate about crafting
              seamless and intuitive digital experiences. With a strong focus on
              user-centric design, I build solutions that not only function
              efficiently but also enhance engagement. Whether working on
              dynamic platforms, interactive applications, or scalable systems,
              I thrive on turning ideas into impactful products. Every project
              is an opportunity to innovate and push boundaries in the
              ever-evolving digital space.
            </p>
          </BlurFade>
        </div>
        <BlurFade
          delay={0.2 * 2}
          inView
          blur="0px"
          className="flex justify-center items-center text-muted-foreground gap-2"
        >
           <blockquote className="relative font-display text-center text-lg font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
              
            <RandomQuotes />
            
              </p>
            </blockquote>
        </BlurFade>
      </div>
    </Container>
  );
}
