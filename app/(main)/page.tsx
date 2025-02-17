import RandomQuotes from "@/features/home/components/RandomQuotes";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import { WordRotate } from "@/components/ui/word-rotate";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center md:justify-between  min-h-screen">
      <Meteors number={16} />
      <BlurFade delay={0.2} inView blur="0px">
        <h2 className="text-6xl font-bold  dark:text-white pt-5  tracking-tighter sm:text-9xl md:text-9xl lg:text-[300px] xl:text-[350px]">
          BXNTANG
        </h2>
      </BlurFade>
      <BlurFade
        delay={0.2 * 2}
        inView
        blur="0px"
        className="md:flex justify-right hidden lg:justify-center items-center text-muted-foreground gap-2"
      >
        <Quote className="rotate-180  shrink-0 w-3 h-3 md:w-8 md:h-8" />
        <p className="text-sm font-bold  pt-5 text-center  whitespace-normal break-words sm:text-2xl  lg:text-3xl xl:text-[30px]">
          <RandomQuotes />
        </p>
        <Quote className=" shrink-0 w-3 h-3 md:w-8 md:h-8" />
      </BlurFade>
      <div className="flex md:px-10 pl-1 justify-between  flex-col gap-x-2 md:flex-row items-start md:items-center">
        <BlurFade delay={0.2 * 2}>
          <span className=" text-pretty tracking-tighter ">
            <WordRotate
              className="text-xl dark:text-white/80 sm:text-3xl xl:text-4xl/none font-semibold  "
              words={[
                "Software Engineer",
                "Full-Stack Developer",
                "Front-End Developer",
                "Back-End Developer",
              ]}
            />
          </span>
        </BlurFade>
        <BlurFade delay={0.2 * 3}>
          <span className="text-lg dark:text-white/80  font-semibold text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            Depok, Indonesia
          </span>
        </BlurFade>
      </div>
    </section>
  );
}
