import { NextResponse } from "next/server";

// Endpoint simples para receber o formulário de contato.
// Substitua o console.log por um envio de e-mail (ex: Resend, Nodemailer)
// ou por uma gravação no banco de dados (Prisma + PostgreSQL) conforme
// a necessidade do projeto.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    // TODO: integrar com serviço de e-mail transacional ou salvar no banco.
    console.log("Novo contato recebido:", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Não foi possível processar a solicitação." },
      { status: 500 }
    );
  }
}
