import Container from "@/components/layouts/Container";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import TechList from "@/features/about/components/TechList";

export default function About() {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto">
        <div className="text-black flex justify-start text-left max-w-4xl  px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <BlurFade delay={0.2} inView>
              <span className="block font-display text-base font-semibold text-neutral-950">
                About
              </span>
            </BlurFade>
            <BlurFade
              delay={0.3}
              inView
              className="font-medium relative font-display tracking-tight text-3xl sm:text-6xl"
            >
              My strength is collaboration
            </BlurFade>
            <BlurFade
              delay={0.4}
              inView
              className="text-muted-foreground text-base sm:text-xl"
            >
              My strength lies in my ability to build scalable and efficient web
              applications by combining frontend and backend expertise. I thrive
              in collaborative environments, ensuring seamless integration
              between UI/UX design and backend systems with great SEO ability to
              create user-centric digital experiences.
            </BlurFade>
          </div>
        </div>
      </section>
      <section
        className={cn(
          "rounded-[2rem] sm:rounded-t-[2rem]   bg-neutral-950 py-12 flex-1 "
        )}
      >
        <Container>
          <div className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              I have experienced working with many technologies
            </h2>
            <Separator
              orientation="horizontal"
              className="flex-1  bg-neutral-800 hidden sm:flex"
            />
          </div>
          <div>
            <TechList />
          </div>
        </Container>
      </section>
    </>
  );
}
