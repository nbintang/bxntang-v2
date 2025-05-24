"use client";

import Image from "next/image";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "../dummy";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import IconsRenderer from "@/components/icons/IconsRenderer";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const visibleTech = project.technologies.slice(0, 4);
  const hiddenTech = project.technologies.length - visibleTech.length;
  return (
    <section
      className={cn(
        "border border-white/10 my-3 rounded-3xl min-h-96 w-full py-3 px-3 relative overflow-hidden group transition-all duration-500",
        isHovered && "hover:border-white/20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image.endsWith(".png") || project.image.endsWith(".jpg") ? project.image : "/img/project/default.png"}
        alt={project.title}
        fill
        className={cn(
          "object-cover absolute inset-0 object-center transition-transform duration-500",
          isHovered ? "scale-100" : "scale-110"
        )}
        sizes="100vw"
        priority
      />

      <div
        className={cn(
          "absolute inset-0 pointer-events-none bg-primary/40 group-hover:bg-gradient-to-t from-primary/90 to-primary/20 transition-all duration-1000"
        )}
      />

      <div className="relative w-full h-full flex flex-col justify-between min-h-[360px]">
        <div className="flex justify-start">
          <h3 className="text-3xl md:text-4xl pt-2 font-bold text-secondary/70 group-hover:text-secondary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="space-y-4 flex flex-wrap justify-between items-end ">
          <div className="space-y-3 flex flex-col lg:w-1/2 justify-between">
            <p
              className={cn(
                "text-white/0 text-sm md:text-base leading-relaxed group-hover:text-secondary transition-all duration-300 delay-200",
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-80 translate-y-2"
              )}
            >
              {project.description}
            </p>
          </div>
          <div className="flex lg:flex-col  flex-row-reverse justify-between w-full md:w-fit items-end  gap-3">
            <div
              className={cn(
                "flex flex-wrap gap-2 transition-all duration-300 delay-100",
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2   group transition-all duration-500 rounded-full bg-secondary/10 hover:bg-secondary/20"
              >
                <GithubIcon className="w-4 h-4 text-secondary group-hover/link:scale-110 transition-transform  " />
              </Link>
            </div>
            <div
              className={cn(
                "flex flex-wrap gap-2 transition-all duration-300 delay-100",
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              {visibleTech.map((name, index) => (
                <IconsRenderer
                  key={name}
                  name={name}
                  className="px-3 py-1 h-9 w-9 md:w-12 md:h-12  bg-secondary/10 backdrop-blur-md text-secondary text-xs font-medium rounded-full  hover:bg-white/20 transition-all duration-200"
                />
              ))}

              {hiddenTech > 0 && (
                <div className="px-3 py-1 h-9 w-9 md:w-12 md:h-12 grid place-items-center  bg-secondary/10 backdrop-blur-md text-secondary text-xs font-medium rounded-full  hover:bg-white/20 transition-all duration-200">
                  <span className="md:text-base text-[8px]">
                    +{hiddenTech}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* Action Buttons */
}
