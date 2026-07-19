import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  HeartPulse,
  Users,
  ShieldCheck,
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReviewsSection } from "@/components/reviews-section";
import { site } from "@/lib/utils";

const stats = [
  { value: "180+", label: "Alunos ativos" },
  { value: "4.9★", label: "Avaliação Google" },
  { value: "R$180", label: "Planos a partir de" },
  { value: "7", label: "Dias por semana" },
];

const highlights = [
  {
    icon: Dumbbell,
    title: "Estrutura completa",
    text: "Musculação, esteiras de última geração e área de treino funcional totalmente equipada.",
  },
  {
    icon: Users,
    title: "Professores presentes",
    text: "Equipe qualificada acompanhando seu treino, corrigindo movimentos e tirando dúvidas.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente limpo e seguro",
    text: "Espaço climatizado, organizado e higienizado para você treinar com tranquilidade.",
  },
  {
    icon: HeartPulse,
    title: "Avaliação física grátis",
    text: "Ao se matricular, você recebe uma avaliação física completa sem custo adicional.",
  },
];

const modalities = [
  { name: "Musculação", image: "/images/gym-musculacao.jpg", desc: "Aparelhos completos para todos os níveis" },
  { name: "Cardio", image: "/images/esteiras.jpg", desc: "Esteiras Kikos de alta performance" },
  { name: "Treino Funcional", image: "/images/entrada-plantas.jpg", desc: "Aulas dinâmicas em grupo" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <Image
            src="/images/gym-musculacao.jpg"
            alt="Estrutura de musculação da One Fitness Academia"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/60" />
        </div>

        <div className="container-x relative py-24 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <span className="eyebrow bg-white/10 rounded-full px-4 py-1.5 text-sky-300">
              <Sparkles className="h-3.5 w-3.5" /> stay fit &amp; healthy
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Sua melhor versão
              <br />
              <span className="text-sky-400">começa na One</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-navy-200">
              Matricule-se e a avaliação física é grátis. Estrutura completa,
              equipe qualificada e planos que cabem no seu bolso, a partir de
              R$ 180.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg">
                  Quero treinar grátis <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/planos">
                <Button variant="white" size="lg">
                  Ver planos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-navy-950/40">
          <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-extrabold text-sky-400 md:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-navy-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-sky-500">Por que a One</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
              Tudo que você precisa para evoluir
            </h2>
            <p className="mt-4 text-navy-500">
              Unimos estrutura moderna com atendimento próximo, para que seu
              treino seja sempre eficiente e prazeroso.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title} className="p-2">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                    <item.icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <h3 className="mt-4 font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDADES PREVIEW */}
      <section className="section bg-navy-50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-sky-500">Nossa estrutura</span>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
                Conheça a academia
              </h2>
            </div>
            <Link href="/modalidades">
              <Button variant="outline">
                Ver todas as modalidades <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {modalities.map((mod) => (
              <div
                key={mod.name}
                className="group relative h-80 overflow-hidden rounded-2xl shadow-sm"
              >
                <Image
                  src={mod.image}
                  alt={mod.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{mod.name}</h3>
                  <p className="mt-1 text-sm text-navy-200">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA MATRICULA */}
      <section className="section">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-navy-900">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <Badge variant="accent">Oferta de matrícula</Badge>
                <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
                  Matricule-se hoje e a avaliação física é grátis
                </h2>
                <p className="mt-4 text-navy-300">
                  Planos a partir de R$ 180. Escolha o seu e comece a treinar
                  ainda essa semana.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="lg">
                      Falar no WhatsApp
                    </Button>
                  </a>
                  <Link href="/planos">
                    <Button variant="white" size="lg">
                      Ver planos e preços
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-64 lg:h-full">
                <Image
                  src="/images/fachada.jpg"
                  alt="Fachada da One Fitness Academia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="section bg-navy-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-sky-500">
              O que dizem sobre a gente
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
              Avaliações dos nossos alunos
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-sky-400 text-sky-400" />
                ))}
              </div>
              <span className="font-semibold text-navy-700">Google Avaliações</span>
            </div>
          </div>

          <div className="mt-10">
            <ReviewsSection />
          </div>

          <div className="mt-10 text-center">
            <Link href="/avaliacoes">
              <Button variant="outline">
                Ver mais avaliações <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-sky-500">Onde estamos</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900 md:text-4xl">
              Venha nos conhecer
            </h2>
            <p className="mt-4 flex items-start gap-2 text-navy-600">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky-500" />
              {site.address}
            </p>
            <p className="mt-3 flex items-start gap-2 text-navy-600">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-sky-500" />
              Segunda a Sexta: 06h às 22h · Sábados: 08h às 14h
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Abrir no Google Maps</Button>
              </a>
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Falar no WhatsApp</Button>
              </a>
            </div>
          </div>
          <div className="h-80 overflow-hidden rounded-2xl border border-navy-100 shadow-sm lg:h-96">
            <iframe
              src={site.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da One Fitness Academia"
            />
          </div>
        </div>
      </section>
    </>
  );
}
