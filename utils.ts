import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const site = {
  name: "One Fitness Academia",
  tagline: "stay fit & healthy",
  phoneDisplay: "(11) 93910-5660",
  phoneRaw: "5511939105660",
  whatsappLink:
    "https://wa.me/5511939105660?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20f%C3%ADsica%20gratuita%20na%20One%20Fitness!",
  address: "R. Conselheiro Brotero, 870 - Santa Cecília, São Paulo - SP, 01232-011",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Conselheiro+Brotero,+870+-+Santa+Cecilia,+S%C3%A3o+Paulo+-+SP,+01232-011&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=R.+Conselheiro+Brotero%2C+870+-+Santa+Cecilia%2C+S%C3%A3o+Paulo+-+SP%2C+01232-011",
  instagram: "https://instagram.com/onefitnessacademia",
  hours: [
    { day: "Segunda a Sexta", time: "06:00 - 22:00" },
    { day: "Sábados", time: "08:00 - 14:00" },
    { day: "Domingos e Feriados", time: "Fechado" },
  ],
};
