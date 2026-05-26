import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

const MainCTA = () => {
  const ctaOptions = [
    {
      id: 1,
      title: "Acompanhamento Individual Exclusivo",
      description: "Mentoria personalizada com foco na sua jornada única de autoconhecimento e transformação",
      gradient: "from-aurora-gold via-aurora-warm to-aurora-gold",
      href: "https://wa.me/5511999999999?text=Quero%20saber%20mais%20sobre%20acompanhamento%20individual",
      features: ["Sessões individuais", "Plano personalizado", "Suporte contínuo"]
    },
    {
      id: 2,
      title: "Mentoria Aurora Liderança",
      description: "Fortaleça sua liderança e cresça emocionalmente e espiritualmente no seu chamado",
      gradient: "from-aurora-gold via-aurora-warm to-aurora-gold",
      href: "https://wa.me/5511999999999?text=Quero%20saber%20mais%20sobre%20Aurora%20Liderança",
      features: ["Desenvolvimento de liderança", "Crescimento espiritual", "Propósito de vida"]
    },
    {
      id: 3,
      title: "Comunidade Aurora",
      description: "Conecte-se com mulheres que desejam florescer juntas em uma jornada de crescimento",
      gradient: "from-aurora-gold via-aurora-warm to-aurora-gold",
      href: "https://wa.me/5511999999999?text=Quero%20saber%20mais%20sobre%20a%20Comunidade%20Aurora",
      features: ["Rede de apoio", "Crescimento coletivo", "Eventos exclusivos"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-aurora-cream via-white to-aurora-cream/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(233,216,253,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(252,211,77,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-aurora rounded-full mb-6">
            <div className="bg-white rounded-full p-3">
              <Heart className="w-6 h-6 text-aurora-earth" />
            </div>
          </div>
          
          <h2 className="font-serif-display text-4xl md:text-6xl font-bold text-aurora-earth mb-6 leading-tight">
            QUAL MOMENTO DA SUA VIDA
            <br />
            <span className="bg-gradient-aurora bg-clip-text text-transparent">
              VOCÊ VIVE HOJE?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-aurora-earth/80 max-w-4xl mx-auto font-light">
            Escolha a opção que mais fala com você e dê o primeiro passo para sua 
            <span className="font-semibold text-aurora-earth"> transformação</span>
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option) => {
            return (
              <div
                key={option.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-aurora-earth/10 flex flex-col h-full"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif-display text-2xl font-bold text-aurora-earth mb-4 group-hover:text-aurora-earth transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-aurora-earth/70 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-aurora-earth/60">
                        <div className="w-1.5 h-1.5 bg-aurora-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => window.open(option.href, '_blank')}
                  className={`w-full bg-gradient-to-r ${option.gradient} text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl mt-auto`}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-aurora-earth/10">
            <p className="text-lg md:text-xl text-aurora-earth/80 mb-4">
              <span className="font-semibold">Ainda tem dúvidas?</span> Estou aqui para te ajudar a descobrir qual caminho é o ideal para você.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20programas%20disponíveis', '_blank')}
              variant="outline"
              className="border-aurora-earth text-aurora-earth hover:bg-aurora-earth hover:text-white transition-all duration-300"
            >
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCTA;