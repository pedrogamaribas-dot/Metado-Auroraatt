import heroAurora from "@/assets/hero-aurora.png";

const AuroraHero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full">
        <div className="relative">
          <img
            src={heroAurora}
            alt="Larissa Farinazo - Método Aurora"
            className="block w-full h-auto min-h-[80vh] object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-aurora-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-aurora-warm/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default AuroraHero;