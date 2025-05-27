import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProjectCard from "@/features/project/components/ProjectCard";
import { projectData } from "@/features/project/dummy";

export default function ProjectCards() {
  return (
    <ScrollArea className="h-[calc(90dvh-4rem)] rounded-3xl  w-full ">
      <div className="flex flex-col gap-4 p-6 overflow-y-auto">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <ScrollBar className="z-30" orientation="vertical" />
    </ScrollArea>
  );
}
