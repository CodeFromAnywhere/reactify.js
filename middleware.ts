//middleware for showing .d.ts files normally

export const config = {
  matcher: ["/:path*.ts"],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  // Only process .ts files
  if (url.pathname.slice(-3) !== ".ts") {
    return;
  }

  // Prevent potential infinite loops
  if (request.headers.get("X-TypeScript-Middleware") === "processed") {
    return;
  }

  try {
    // Fetch the original TypeScript file
    const response = await fetch(request.url, {
      headers: { "X-TypeScript-Middleware": "processed" },
    });

    if (!response.ok) {
      return;
    }

    const content = await response.text();

    // Return the content with the correct MIME type
    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error in TypeScript middleware:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
