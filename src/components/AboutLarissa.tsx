import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/larissa-about.jpg";

const AboutLarissa = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-aurora-earth mb-4">
            Quem é Larissa Farinazo?
          </h2>
          <div className="w-24 h-1 bg-gradient-aurora mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="lg:order-first order-last">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-aurora rounded-3xl opacity-20 blur-xl"></div>
              <img
                src={aboutImage}
                alt="Larissa Farinazo - Psicóloga e Mentora"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <div className="space-y-6 text-foreground font-sans-clean leading-relaxed">
              <p className="text-lg">
                Sou psicóloga, mentora, cristã, líder, esposa e mãe. Minha missão é clara e inegociável: 
                <span className="font-semibold text-aurora-earth"> ajudar mulheres a se conectarem com sua verdadeira essência, curar feridas emocionais e viver com identidade e propósito.</span>
              </p>

              <p className="text-lg">
                Sei que a vida da mulher moderna é desafiadora: conciliar família, trabalho, fé e sonhos exige força e equilíbrio. 
                E muitas vezes, nos sentimos perdidas e sozinhas.
              </p>

              <p className="text-lg">
                Por isso, coloco minha expertise da clínica a serviço de mulheres de diferentes realidades, na Mentoria Alvorecer, 
                na Comunidade Aurora e na Formação para Terapeutas e Mentoras.
              </p>

              <p className="text-lg">
                Já estive no lugar de mulheres que travam a vida ao se moldar às dores que influenciam grandes esferas, 
                sempre com um olhar individualista e um compromisso profundo com a verdade de cada uma.
              </p>

              <p className="text-lg">
                Meus pilares são: <span className="font-semibold text-aurora-warm">amor, integridade, ética, fé e excelência.</span> 
                E minha prática é sustentada por técnicas terapêuticas, neurociência, psicologia e a minha caminhada pessoal e cristã.
              </p>

              <p className="text-lg font-medium text-aurora-earth">
                Acredito que toda mulher pode despertar sua verdadeira essência e caminhar com leveza, confiança e propósito em cada passo da vida!
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                variant="cta" 
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl"
              >
                FALAR COM LARISSA AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLarissa;