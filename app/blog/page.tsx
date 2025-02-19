
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export default function Blog() {
  return (
  
      <BlurFade>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            Blog
          </span>
          <span className="sr-only"> - </span>
          <span
            className={cn(
              "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
            )}
          >
            The latest articles and news
          </span>
        </h1>
        <div className={cn("mt-6 max-w-3xl text-xl text-neutral-600")}>
          <p>
            Stay up-to-date with the latest industry news as our marketing teams
            finds new ways to re-purpose old CSS tricks articles.
          </p>
        </div>
      </BlurFade>
  );
}
