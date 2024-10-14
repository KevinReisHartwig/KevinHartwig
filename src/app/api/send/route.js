import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Recebido:", email, subject, message);

  try {
    const emailContent = `
      <html>
        <body>
          <h1>${subject}</h1>
          <p>Obrigado por nos contatar!</p>
          <p>Nova mensagem enviada:</p>
          <p>${message}</p>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: `Nova mensagem de contato: ${subject}`,
      html: emailContent,
    });

    console.log("Resposta do Resend:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
