//@ts-nocheck

import { Form } from "@/components/Form";
import { KVViewContact } from "@/components/KVViewContacts";
// import { Form } from "@/components/PostgresForm";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${nunito.className} flex min-h-screen flex-col justify-center p-8 max-w-lg m-auto`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-center mb-4 ">
        Contact me
      </h2>
      <div className="flex flex-col text-center mx auto">
      <Form />
      <KVViewContact />

      </div>
      
    </main>
  );
}
