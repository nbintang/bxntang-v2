import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProjectCard from "@/features/project/components/ProjectCard";
import { projectData } from "@/features/project/dummy";


export default function ProjectCards() {
  return (
    <ScrollArea className="h-[calc(90dvh-4rem)]  rounded-3xl  w-full ">
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
