import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://onefitnessacademia.com.br"),
  title: {
    default: "One Fitness Academia | Stay Fit & Healthy - Santa Cecília, SP",
    template: "%s | One Fitness Academia",
  },
  description:
    "Academia completa em Santa Cecília, São Paulo. Musculação, cardio e treinos personalizados. Avaliação física grátis na matrícula. Planos a partir de R$ 180.",
  keywords: [
    "academia São Paulo",
    "academia Santa Cecília",
    "musculação",
    "One Fitness Academia",
    "academia perto de mim",
  ],
  openGraph: {
    title: "One Fitness Academia | Stay Fit & Healthy",
    description:
      "Academia completa em Santa Cecília, São Paulo. Matricule-se e a avaliação física é grátis. Planos a partir de R$ 180.",
    url: "https://onefitnessacademia.com.br",
    siteName: "One Fitness Academia",
    locale: "pt_BR",
    type: "website",
    images: ["/images/gym-musculacao.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Fitness Academia | Stay Fit & Healthy",
    description:
      "Academia completa em Santa Cecília, São Paulo. Avaliação física grátis na matrícula.",
    images: ["/images/gym-musculacao.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
