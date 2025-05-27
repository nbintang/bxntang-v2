"use client";

import Image from "next/image";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "../dummy";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import IconsRenderer from "@/components/icons/IconsRenderer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ProjectCardLayout from "./ProjectCardLayout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    toast.warning("This data is still dummy!", {
      richColors: true,
      className: "text-xs",
      id: "toast",
      position: "bottom-right",
    });

    return () => {
      toast.dismiss("toast");
    };
  }, []);
  const visibleTech = project.technologies.slice(0, 4);
  const hiddenTech = project.technologies.length - visibleTech.length;
  return (
    <TooltipProvider>
      <ProjectCardLayout
        className="relative group overflow-hidden  "
        project={project}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
      >
        <div className="relative w-full h-full flex flex-col justify-between min-h-[360px]">
          <div className="flex justify-start">
            <h3 className="text-2xl md:text-4xl pt-2 font-bold text-secondary/70 group-hover:text-secondary transition-colors duration-300">
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={"icon"}
                    rounded
                    className={cn(
                      "flex flex-wrap gap-2 transition-all delay-100  bg-secondary/10 backdrop-blur-md text-secondary text-xs font-medium   hover:bg-white/20 duration-200",
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                    asChild
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4 text-secondary transition-transform  " />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View on Github</TooltipContent>
              </Tooltip>
              <div
                className={cn(
                  "flex flex-wrap gap-2 transition-all duration-300 delay-100",
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
              >
                {visibleTech.map((name, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <IconsRenderer
                        name={name}
                        className="px-3 py-1 h-9 w-9 md:w-12 md:h-12  bg-secondary/10 backdrop-blur-md text-secondary text-xs font-medium rounded-full  hover:bg-white/20 transition-all duration-200"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                ))}

                {hiddenTech > 0 && (
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="px-3 py-1 h-9 w-9 md:w-12 md:h-12 grid place-items-center  bg-secondary/10 backdrop-blur-md text-secondary text-xs font-medium rounded-full  hover:bg-white/20 transition-all duration-200">
                        <span className="md:text-base text-[8px]">
                          +{hiddenTech}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="start">
                      {`${project.technologies.slice(4)}`}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        </div>
      </ProjectCardLayout>
    </TooltipProvider>
  );
}
