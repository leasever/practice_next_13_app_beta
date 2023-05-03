import kv from "@vercel/kv";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (name == null || email == null || message == null) {
    return new Response("Please provide all fields.", { status: 400 });
  }

  const uuid = crypto.randomUUID();
  const timestamp = Date.now();

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestamp });

    return new Response("contact saved!", { status: 200 });
  } catch (error) {
    console.error("error ", error);
    return new Response("Internal error", { status: 500 });
  }
}
