import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Sunrise, Lock, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import comunidadeImage from "@/assets/comunidade-aurora-new.png";
import alvorecerImage from "@/assets/alvorecer-new.png";  
import salaSecretaImage from "@/assets/sala-secreta-new.png";
import auroraLiderancaImage from "@/assets/aurora-lideranca-new.png";

const methodCards = [
  {
    id: 1,
    title: "COMUNIDADE AURORA",
    subtitle: "CIRCLE",
    description: "Um espaço seguro para mulheres se conectarem, crescerem e se apoiarem mutuamente.",
    icon: Users,
    image: comunidadeImage,
    link: "/comunidade-aurora"
  },
  {
    id: 2,
    title: "MENTORIA ALVORECER",
    subtitle: "MENTORING", 
    description: "Acompanhamento personalizado para sua jornada de autoconhecimento e transformação.",
    icon: Sunrise,
    image: alvorecerImage
  },
  {
    id: 3,
    title: "SALA SECRETA",
    subtitle: "EXCLUSIVE ACCESS",
    description: "Conteúdos exclusivos e ferramentas avançadas para sua evolução pessoal.",
    icon: Lock,
    image: salaSecretaImage
  },
  {
    id: 4,
    title: "AURORA DA LIDERANÇA",
    subtitle: "LEADERSHIP",
    description: "Inteligência emocional e identidade fortalecida para lideranças saudáveis.",
    icon: Crown,
    image: auroraLiderancaImage
  }
];

const MethodCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl: 4 cards
      if (window.innerWidth >= 1024) return 3; // lg: 3 cards
      if (window.innerWidth >= 768) return 2;  // md: 2 cards  
      return 1; // mobile: 1 card
    }
    return 4; // default to 4 cards
  };

  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, methodCards.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Removed auto-play functionality

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-aurora-earth mb-4">
            DESCUBRA O MÉTODO AURORA
          </h2>
          <div className="w-24 h-1 bg-gradient-aurora mx-auto rounded-full"></div>
        </div>

        {/* Cards Container - Static Layout */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="overflow-visible px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {methodCards.map((card) => {
                const CardContent = (
                  <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer bg-card">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                  </div>
                );

                return (
                  <div key={card.id} className="flex-shrink-0">
                    {card.link ? (
                      <Link to={card.link}>
                        {CardContent}
                      </Link>
                    ) : (
                      CardContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodCarousel;