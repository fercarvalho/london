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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 group"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </a>
  );
};
