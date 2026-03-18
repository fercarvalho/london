import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '5543999943000';
  const message = encodeURIComponent('Olá! London Seguros, vim pelo site e gostaria de mais informações!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </a>
  );
};
