import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "56968365231";
    const message = "Hola, me gustaría obtener más información";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50">
      {/* Mensaje llamativo */}
      <span className="bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium animate-bounce">
        Háblame ahora y comencemos 🚀
      </span>

      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        className="h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BD5A]"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;

