import type { Revalidate } from "next/dist/server/lib/revalidate";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import { cn } from "@/lib/utils";

export const revalidate: Revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Bxntang";
  const description =
    searchParams.get("description") || "Software Engineer from Indonesia";

  const fontPath = path.join(
    process.cwd(),
    "public/fonts/MonaSans-SemiBold.ttf"
  );
  const fontData = fs.readFileSync(fontPath);

  return new ImageResponse(
    (
      <main
        tw={cn(
          "h-full w-full flex flex-col items-center justify-center p-20 rounded-2xl bg-white"
        )}
      >
        <section tw={cn("flex flex-col items-center ")}>
          <h1
            tw={cn(
              "font-bold text-center  text-black font-display leading-none",
              title.trim().length > 12 ? "text-5xl" : "text-8xl"
            )}
          >
            {title}.
          </h1>
          <p
            tw={cn(
              " text-center text-gray-500 font-display leading-none -mt-2",
              description.trim().length > 20 ? "text-xl" : "text-2xl"
            )}
          >
            {description}.
          </p>
        </section>
      </main>
    ),
    {
      width: 700,
      height: 630,
      fonts: [
        {
          name: "Mona Sans",
          data: fontData,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
