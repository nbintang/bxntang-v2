import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const cssResponse = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700&display=swap"
  );

  if (!cssResponse.ok) {
    throw new Error("Failed to fetch Google Fonts CSS.");
  }

  const css = await cssResponse.text();
  const fontUrlMatch = css.match(/https:\/\/fonts\.gstatic\.com\/.*\.ttf/);
  if (!fontUrlMatch) {
    throw new Error("Failed to retrieve font URL from Google Fonts response.");
  }

  const fontUrl = fontUrlMatch[0];
  const fontDataResponse = await fetch(fontUrl);
  if (!fontDataResponse.ok) {
    throw new Error("Failed to fetch font data.");
  }

  const fontData = await fontDataResponse.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
          backgroundColor: "#111",
        }}
      >
        <div
          style={{
            fontSize: "100px",
            fontFamily: "Inter Tight",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          {title || "BXNTANG"}
        </div>
      </div>
    ),
    {
      width: 700,
      height: 630,
      fonts: [
        {
          name: "Inter Tight",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}