"use client";

import * as  React from "react";
import { useId } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface AnimatedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const AnimatedTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AnimatedTextareaProps
>(({ label, className, ...props }, ref) => {
  const id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <Textarea
        id={id}
        ref={ref}
        placeholder=" "
        className={cn(
          "peer block w-full border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950",
          "ring-4 ring-transparent transition",
          "focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5",
          "group-first:rounded-t-2xl group-last:rounded-b-2xl",
          "min-h-[100px] resize-y", // Added styles for textarea
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-6 top-8 origin-left text-base/6 text-neutral-500",
          "transition-all duration-200",
          "peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950",
          "peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75",
          "peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        )}
      >
        {label}
      </label>
    </div>
  );
});

AnimatedTextarea.displayName = "AnimatedTextarea";

export default AnimatedTextarea;
