import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { site } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/planos", label: "Planos" },
  { href: "/avaliacoes", label: "Avaliações" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="One Fitness Academia"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="text-lg font-extrabold text-white">
              one<span className="text-sky-400">fitness</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-300">
            Estrutura completa, ambiente climatizado e uma equipe pronta para
            te ajudar a evoluir. Stay fit &amp; healthy.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300"
          >
            <Instagram className="h-4 w-4" /> @onefitnessacademia
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">
            Navegação
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-navy-300 hover:text-sky-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <a href={`tel:+${site.phoneRaw}`} className="hover:text-sky-400">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">
            Horários
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  {h.day}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 md:flex-row">
          <p>© {new Date().getFullYear()} One Fitness Academia. Todos os direitos reservados.</p>
          <p>onefitnessacademia.com.br</p>
        </div>
      </div>
    </footer>
  );
}
