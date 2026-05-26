import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "@/assets/1.jpeg";
import testimonial2 from "@/assets/2.jpeg";
import testimonial3 from "@/assets/3.jpeg";
import testimonial4 from "@/assets/4.jpeg";
import testimonial5 from "@/assets/5.jpeg";
import testimonial6 from "@/assets/6.jpeg";
import testimonial7 from "@/assets/7.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Alena Steffen",
    image: testimonial1,
    alt: "Depoimento sobre mentoria Alvorecer - transformação pessoal"
  },
  {
    id: 2,
    name: "Daniela Costa",
    image: testimonial2,
    alt: "Depoimento sobre terapia - mudança de vida"
  },
  {
    id: 3,
    name: "Mentoria Alvorecer",
    image: testimonial3,
    alt: "Depoimento sobre processo de mentoria e esclarecimento"
  },
  {
    id: 4,
    name: "Alena Steffen",
    image: testimonial4,
    alt: "Depoimento sobre resistência e transformação pessoal"
  },
  {
    id: 5,
    name: "Thamiris Claudino",
    image: testimonial5,
    alt: "Depoimento sobre mudança de vida e apoio psicológico"
  },
  {
    id: 6,
    name: "Cliente",
    image: testimonial6,
    alt: "Depoimento sobre profissionalismo e humanidade"
  },
  {
    id: 7,
    name: "Lailla Côrtes",
    image: testimonial7,
    alt: "Depoimento sobre terapia e alívio emocional"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // Change page every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 px-6 bg-gradient-earth">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-aurora-earth mb-4">
            O QUE ELAS VIVERAM:
          </h2>
          <div className="w-24 h-1 bg-gradient-aurora mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-aurora-earth" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-aurora-earth" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="flex w-full flex-shrink-0 gap-4">
                  {testimonials
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="w-1/3 flex-shrink-0"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => setCurrentIndex(pageIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${pageIndex === currentIndex
                  ? 'bg-aurora-gold scale-125'
                  : 'bg-aurora-earth/40 hover:bg-aurora-earth/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;