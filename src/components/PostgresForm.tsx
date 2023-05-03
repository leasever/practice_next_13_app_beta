"use client";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { toast } from "sonner";

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, name, message } = Object.fromEntries(formData.entries());

    await fetch("/api/postgres-send-message", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        form.reset();
        toast.success("Message sent succesfully");
      })
      .catch(() => {
        toast.error("Error sending message");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 space-y-8 border rounded border-white/10"
    >
      <Input
        name="email"
        id="email"
        label="Your email:"
        type="email"
        placeholder="example@email.com"
      />
      <Input
        name="name"
        id="text"
        label="Your name:"
        type="text"
        placeholder="Abraham Leandro"
      />
      <Input
        name="message"
        id="message"
        label="Your message:"
        type="text"
        placeholder="This is a test message"
      />
      <Button>Send message</Button>
    </form>
  );
};
