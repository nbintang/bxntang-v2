import { TechIcons } from '@/components/icons/TechIcon';
import { BlurFade } from '@/components/ui/blur-fade';
import React from 'react'

export default function TechList() {
  return (
    <ul
    role="list"
    className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10  lg:grid-cols-4 "
  >
    {Object.keys(TechIcons).map((key, index) => {
      const Icon = TechIcons[key as keyof typeof TechIcons];
      return (
        <li key={key}>
          <BlurFade
            className="flex flex-col sm:flex-row items-center gap-x-3"
            delay={0.1 * index}
          >
            <Icon className="h-8 w-8 md:w-12 md:h-12" />
            <p className="mt-2 text-xs sm:text-sm">{key}</p>
          </BlurFade>
        </li>
      );
    })}
  </ul>
  )
}
