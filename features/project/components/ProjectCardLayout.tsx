import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type ProjectCardLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  cardRef?: React.Ref<HTMLDivElement>;
  project: {
    title: string;
    image: string;
    status: string;
  };
  isHovered?: boolean;
};

const ProjectCardLayout = ({
  cardRef,
  className,
  project,
  children,
  isHovered = false,
  ...props
}: ProjectCardLayoutProps) => {
  return (
    <section
      ref={cardRef}
      className={cn(
        "border border-white/10  rounded-3xl  py-3 px-3 transition-all duration-500  ",
        isHovered && "hover:border-white/20",
        className
      )}
      {...props}
    >
      <Image
        src={
          project.image.endsWith(".png") || project.image.endsWith(".jpg")
            ? project.image
            : "/img/project/default.png"
        }
        alt={project.title}
        fill
        className={cn(
          "object-cover absolute inset-0 pointer-events-none  object-center transition-transform duration-500",
          isHovered ? "scale-100" : "scale-110"
        )}
        sizes="100vw"
        priority
      />
      <div className="absolute right-0 top-0 z-20">
        <Button
          className={cn(
            "bg-secondary/10 hover:bg-white/20   px-6  transition-all duration-300 delay-300 text-white",
            isHovered
              ? "opacity-100  group-hover:-translate-y-0"
              : "opacity-0 -translate-y-2",
            "rounded-bl-[50%]   rounded-t-none rounded-r-none",
            project.status === "Completed" && "bg-green-500 hover:bg-green-600",
            project.status === "In Progress" &&
              "bg-yellow-400 hover:bg-yellow-500",
            project.status === "Planned" && "bg-blue-500 hover:bg-blue-600",
            project.status === "Maintained" &&
              "bg-indigo-500 hover:bg-indigo-600",
            project.status === "Archived" && "bg-red-500 hover:bg-red-600"
          )}
        >
          {project.status}
        </Button>
      </div>

      <div
        className={cn(
          "absolute inset-0 pointer-events-none  transition-all duration-1000",
          isHovered
            ? "bg-gradient-to-t from-primary/90 to-primary/20 "
            : "bg-primary/40"
        )}
      />
      {children}
    </section>
  );
};



export default ProjectCardLayout;