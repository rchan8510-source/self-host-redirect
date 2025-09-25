export default {
  async fetch(request) {
    const url = new URL(request.url);
    const to = url.searchParams.get("to");
    if (!to) return new Response("Missing ?to=", { status: 400 });
    return Response.redirect(to, 302);
  }
}
