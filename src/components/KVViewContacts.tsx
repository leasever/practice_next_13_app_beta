import kv from "@vercel/kv";

export const KVViewContact = async () => {
  const keys = await kv.keys("contact-*");
  return <small>{keys.length} contacts made </small>;
};
