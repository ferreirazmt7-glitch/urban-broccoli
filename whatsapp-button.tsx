import { MessageCircle } from "lucide-react";
import { site } from "@/lib/utils";

export function WhatsappButton() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
