const apiOrigin = "https://nico-esora.heart-rainbow-ai.chatgpt.site";

export async function onRequest(context) {
  const method = context.request.method;
  if (method !== "GET" && method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json; charset=utf-8", allow: "GET, POST" }
    });
  }

  const target = new URL("/api/song-requests", apiOrigin);
  const headers = new Headers({ accept: "application/json" });
  const init = { method, headers };

  if (method === "POST") {
    headers.set("content-type", "application/json");
    init.body = await context.request.text();
  }

  const response = await fetch(target, init);
  return new Response(response.body, {
    status: response.status,
    headers: {
      "content-type": response.headers.get("content-type") || "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
