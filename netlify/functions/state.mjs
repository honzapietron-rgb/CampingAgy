import { getStore } from "@netlify/blobs";

// Sdileny stav seznamu baleni. Ulozeno v Netlify Blobs.
export default async (req) => {
  const store = getStore("bled-stol");
  const KEY = "state";

  if (req.method === "GET") {
    const state = (await store.get(KEY, { type: "json" })) || {};
    return Response.json(state);
  }

  if (req.method === "POST") {
    const body = await req.json().catch(() => ({}));
    let state = (await store.get(KEY, { type: "json" })) || {};

    if (body.op === "reset") {
      state = {};
    } else if (body.op === "toggle" && body.id) {
      if (state[body.id]) delete state[body.id];
      else state[body.id] = 1;
    } else if (body.op === "set" && body.state && typeof body.state === "object") {
      state = body.state;
    }

    await store.setJSON(KEY, state);
    return Response.json(state);
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/state" };
