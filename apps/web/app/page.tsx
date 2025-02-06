
import { quotes } from "@/dummy";
import { BlurFade } from "@workspace/ui/components/blur-fade";
import { Meteors } from "@workspace/ui/components/meteors";
import { WordRotate } from "@workspace/ui/components/word-rotate";

export default function Home() {
  const randomQuotesEveryRefresh = quotes[Math.floor(Math.random() * quotes.length)];
  return <section className="w-full flex flex-col justify-center md:justify-between  min-h-screen">
    <Meteors number={16} />
    <BlurFade delay={0.2} inView blur="0px">
      <h2 className="text-6xl font-bold  dark:text-white pt-5  tracking-tighter sm:text-9xl md:text-9xl lg:text-[300px] xl:text-[350px]">
        BXNTANG
      </h2>
    </BlurFade>
    <BlurFade delay={0.2 * 2} inView blur="0px" >
      <p className="text-lg font-bold  dark:text-white pt-5 text-left md:text-center tracking-tighter sm:text-xl md:text-9xl lg:text-[20px] xl:text-[30px]">
        &quot;{randomQuotesEveryRefresh}&quot;
      </p>
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
}
