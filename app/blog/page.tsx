import { TechIcons } from "@/components/icons/TechIcon";
import { Card } from "@/components/ui/card";

export default function Blog() {
  return (
    <main className="grid place-items-center min-h-screen ">
      <div>
        <Card className="grid grid-cols-4 p-3 gap-2">
          {Object.keys(TechIcons).map((key) => {
            const Icon = TechIcons[key as keyof typeof TechIcons];
            return <Icon className="h-6 w-6 md:w-8 md:h-8" key={key} />;
          })}
        </Card>
        <h1 className="text-lg md:text-xl text-muted-foreground ">
          coming very soon... ^^
        </h1>
      </div>
    </main>
  );
}
