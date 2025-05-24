import { CarouselApi } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
export default function useCarouselBlog() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return { api, setApi, current, setCurrent, count, setCount };
}
