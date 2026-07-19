"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/planos", label: "Planos" },
  { href: "/avaliacoes", label: "Avaliações" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur"
          : "bg-white/70 backdrop-blur"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="One Fitness Academia"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-navy-900">
              one<span className="text-sky-400">fitness</span>
            </p>
            <p className="text-[11px] font-medium uppercase tracking-widest text-navy-400">
              stay fit &amp; healthy
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-navy-700 transition-colors hover:text-sky-500",
                pathname === link.href && "text-sky-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+${site.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-sky-500"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="accent">Matricule-se</Button>
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-semibold text-navy-700 hover:bg-navy-50",
                  pathname === link.href && "bg-sky-50 text-sky-500"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button variant="accent" className="w-full">
                Matricule-se
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
