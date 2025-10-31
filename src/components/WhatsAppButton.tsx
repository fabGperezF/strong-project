import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // INSTRUCCIÓN: Reemplaza el número de teléfono con tu número de WhatsApp
    // Formato: código de país + número (sin espacios, guiones ni símbolos)
    // Ejemplo: "56912345678" para Chile
    const phoneNumber = "56968365231";
    const message = "Hola, me gustaría obtener más información";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 bg-[#25D366] hover:bg-[#20BD5A]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
