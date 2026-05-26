import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5524988112168"; // Updated number
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Método Aurora.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 animate-fade-up delay-300"
      aria-label="Falar no WhatsApp"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl"
      />
    </button>
  );
};

export default WhatsAppFloat;