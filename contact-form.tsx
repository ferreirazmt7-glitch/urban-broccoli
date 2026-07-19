"use client";

import * as React from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-sky-500" />
        <h3 className="mt-4 text-xl font-bold text-navy-900">
          Mensagem enviada!
        </h3>
        <p className="mt-2 text-sm text-navy-500">
          Obrigado pelo contato. Nossa equipe vai te responder em breve.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-navy-100 bg-white p-8 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy-800">
          Nome completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-sky-400"
          placeholder="Seu nome"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy-800">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-sky-400"
            placeholder="voce@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy-800">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-sky-400"
            placeholder="(11) 90000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-800">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-2 w-full rounded-lg border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-sky-400"
          placeholder="Conte pra gente o que você precisa"
        />
      </div>

      <Button type="submit" variant="accent" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Enviar mensagem <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}
    </form>
  );
}
