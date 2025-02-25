import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
export default function BlogCreator({author,date}:{author:string,date:string}) {
  return (
    <div className="flex flex-col">
    <div className="flex gap-4 my-3 items-center">
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p>{author}</p>
        <p className="text-muted-foreground">{date}</p>
      </div>
    </div>
  </div>
  )
}
