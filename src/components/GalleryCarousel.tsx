import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface GalleryItem {
  id: number;
  img: string;
  alt: string;
  label: string;
}

export const GalleryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2); // Start at the middle item (index 2)

  const items: GalleryItem[] = [
    { 
      id: 1, 
      label: "CONEXÃO",
      alt: "Momento de acolhimento e abraço compartilhado entre participantes",
      img: "/despertar/WhatsApp_Image_2026-06-04_at_14_02_34__3_.jpeg"
    },
    { 
      id: 2, 
      label: "REFLEXÃO",
      alt: "Participante realizando dinâmica prática e anotações com os materiais exclusivos",
      img: "/despertar/WhatsApp_Image_2026-06-04_at_14_02_34__4_.jpeg"
    },
    { 
      id: 3, 
      label: "PRESENÇA",
      alt: "Larissa Farinazo compartilhando reflexões e guiando o grupo no encontro",
      img: "/despertar/WhatsApp_Image_2026-06-04_at_14_02_34.jpeg"
    },
    { 
      id: 4, 
      label: "INTEGRAÇÃO",
      alt: "Participante registrando insights e reflexões no diário durante o encontro",
      img: "/despertar/WhatsApp_Image_2026-06-04_at_14_02_35__1_.jpeg"
    },
    { 
      id: 5, 
      label: "ALINHAMENTO",
      alt: "Larissa Farinazo lendo e compartilhando conceitos fundamentais da mentoria",
      img: "/despertar/WhatsApp_Image_2026-06-04_at_14_02_35__3_.jpeg"
    }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };


  // Helper to calculate 3D card layout parameters based on position relative to active card
  const getCardStyle = (index: number) => {
    // Calculate circular offset
    let diff = index - activeIndex;
    
    // Normalize diff to the range [-2, 2]
    if (diff < -2) diff += items.length;
    if (diff > 2) diff -= items.length;

    const isActive = diff === 0;
    const absDiff = Math.abs(diff);

    // Scale and opacity setup
    let scale = 1.0;
    let opacity = 1.0;
    let zIndex = 10;
    let translateX = "0%";
    let rotateY = 0;

    if (isActive) {
      scale = 1.1;
      opacity = 1.0;
      zIndex = 30;
      translateX = "0%";
      rotateY = 0;
    } else if (diff === -1) {
      scale = 0.92;
      opacity = 0.75;
      zIndex = 20;
      translateX = "-65%";
      rotateY = 25; // 3D angle inwards
    } else if (diff === 1) {
      scale = 0.92;
      opacity = 0.75;
      zIndex = 20;
      translateX = "65%";
      rotateY = -25;
    } else if (diff === -2) {
      scale = 0.78;
      opacity = 0.35;
      zIndex = 10;
      translateX = "-125%";
      rotateY = 40;
    } else if (diff === 2) {
      scale = 0.78;
      opacity = 0.35;
      zIndex = 10;
      translateX = "125%";
      rotateY = -40;
    }

    return {
      scale,
      opacity,
      zIndex,
      x: translateX,
      rotateY,
      isActive,
      absDiff
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-visible py-8 text-center select-none perspective-[1200px]">
      
      {/* 1. Header Typography */}
      <div className="flex flex-col items-center max-w-2xl px-6 mb-14 relative z-20">
        <span className="font-montserrat text-[10px] font-normal tracking-[0.25em] text-[#AE8625] uppercase mb-4">
          GALERIA
        </span>
        <h2 className="font-cormorant text-3xl md:text-[46px] font-light text-[#F7EF8A] leading-tight">
          Momentos que inspiram transformações reais
        </h2>
        <p className="font-montserrat text-sm font-light text-[#C4A882] leading-relaxed mt-6 max-w-[580px]">
          Cada imagem representa histórias de mulheres que decidiram escolher a si mesmas e viver com mais leveza e propósito.
        </p>
      </div>

      {/* 2. 3D Interactive Carousel Container */}
      <div className="relative w-full max-w-5xl flex items-center justify-center overflow-visible px-4 my-8 z-20">
        
        {/* Navigation arrow (left) */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 z-40 w-12 h-12 rounded-full border border-[#AE8625]/20 bg-[#2C1A0E]/80 backdrop-blur-md flex items-center justify-center text-[#C4A882] hover:text-[#F7EF8A] hover:border-[#AE8625] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
          aria-label="Imagem anterior"
        >
          <CaretLeft size={22} weight="bold" />
        </button>

        {/* 3D Cards track */}
        <div className="relative w-[240px] md:w-[320px] aspect-[3/4] flex items-center justify-center overflow-visible">
          {items.map((item, idx) => {
            const cardStyle = getCardStyle(idx);
            
            return (
              <motion.div
                key={item.id}
                style={{
                  zIndex: cardStyle.zIndex,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  x: cardStyle.x,
                  scale: cardStyle.scale,
                  opacity: cardStyle.opacity,
                  rotateY: cardStyle.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 0.8
                }}
                onClick={() => {
                  setActiveIndex(idx);
                }}
                className={`absolute w-full h-full aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border transition-all duration-500 flex flex-col items-center justify-center select-none group ${
                  cardStyle.isActive 
                    ? 'border-[#AE8625] bg-[#1a0a00] shadow-[0_25px_60px_-15px_rgba(174,134,37,0.3)]' 
                    : 'border-white/5 bg-[#1a0a00] shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:opacity-90'
                }`}
              >
                {/* Custom radial gradient background for active card only */}
                {cardStyle.isActive && (
                  <div 
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-color-dodge opacity-25"
                    style={{
                      background: 'radial-gradient(circle, rgba(174, 134, 37, 0.8) 0%, transparent 70%)'
                    }}
                  />
                )}

                {/* Render actual image */}
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] select-none pointer-events-none" 
                />

                {/* Clean image cards without text overlays */}
              </motion.div>
            );
          })}
        </div>

        {/* Navigation arrow (right) */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 z-40 w-12 h-12 rounded-full border border-[#AE8625]/20 bg-[#2C1A0E]/80 backdrop-blur-md flex items-center justify-center text-[#C4A882] hover:text-[#F7EF8A] hover:border-[#AE8625] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
          aria-label="Próxima imagem"
        >
          <CaretRight size={22} weight="bold" />
        </button>
      </div>

      {/* 3. Animating Tooltip Instruction */}
      <div className="mt-8 h-6 flex justify-center items-center relative z-20">
        <motion.div
          animate={{
            y: [-3, 3, -3],
            opacity: [0.65, 1, 0.65]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center gap-2 font-montserrat text-[10px] font-light tracking-[0.2em] text-[#C4A882] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#AE8625] animate-ping" />
          <span>Navegue nos cartões laterais para explorar os momentos</span>
        </motion.div>
      </div>


    </div>
  );
};

export default GalleryCarousel;
