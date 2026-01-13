export default {
  async fetch(request) {
    return new Response("Hello from GitHub deploy", {
      headers: { "content-type": "text/plain" }
    });
  }
};
