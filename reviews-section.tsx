import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const reviews = [
  {
    name: "Julia Fornaziero",
    count: "5 avaliações",
    time: "um mês atrás",
    rating: 5,
    text: "Treino na One há quase um ano e meio e não tenho do que reclamar. Fui super bem recebida e atendida pela Renata, que sempre que possuo alguma dúvida ou problema, me ajuda de prontidão e com bastante simpatia! Além disso, treino no período da manhã e o instrutor responsável costuma ser o Gustavo, que além de procurar entender seus objetivos para montar um treino bom e pertinente, é super gente boa e sempre disponível para ajudar, ensinar, corrigir e tirar dúvidas. Sempre encontro a academia limpa e bem organizada e com os aparelhos em bom estado 🫶🏻",
  },
  {
    name: "Stefani Miranda Silva",
    count: "2 avaliações",
    time: "4 meses atrás",
    rating: 5,
    text: "Ótima academia, ambiente excelente, atendimento impecável da Renata Salinas, uma pessoa adorável e carismática, ótimos preços, recomendo muito.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function ReviewsSection({ limit }: { limit?: number }) {
  const items = limit ? reviews.slice(0, limit) : reviews;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((review) => (
        <Card key={review.name} className="p-2">
          <CardContent className="pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {initials(review.name)}
              </div>
              <div>
                <p className="font-bold text-navy-900">{review.name}</p>
                <p className="text-xs text-navy-400">{review.count}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sky-400 text-sky-400" />
                ))}
              </div>
              <span className="text-xs text-navy-400">{review.time}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-600">
              {review.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
