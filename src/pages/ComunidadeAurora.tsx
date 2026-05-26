import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Shield, Star, PlayCircle, HeartCrack } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import mentorImage from "@/assets/larissa-about.jpg";
import test1 from "@/assets/1.jpeg";
import test2 from "@/assets/2.jpeg";
import test3 from "@/assets/3.jpeg";
import test4 from "@/assets/4.jpeg";
import test5 from "@/assets/5.jpeg";
import test6 from "@/assets/6.jpeg";
import test7 from "@/assets/7.jpeg";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ComunidadeAurora = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppClick = (message: string = "Olá! Gostaria de saber mais sobre a Comunidade Aurora Circle.") => {
    const phoneNumber = "5524988112168";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && window.innerWidth < 768) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;

          if (isAtEnd) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            const cardWidth = scrollContainer.querySelector('div')?.clientWidth || clientWidth;
            scrollContainer.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
          }
        }
      }, 4000);
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);

  const painPoints = [
    "Dificuldade em conversar sem brigar ou acaba anulando o que sente.",
    "Se cobra para ser forte, mas por dentro está se desfazendo.",
    "Medo constante de decepcionar e por isso se anula.",
    "Vive mais pelo “o que vão pensar” do que pelo chamado de Deus.",
    "Carrega responsabilidades que não são suas.",
    "Está exausta de repetir ciclos emocionais e relacionamentos que drenam sua alma.",
    "Tem medo de permanecer estagnada, apagada e presa à aprovação."
  ];

  const structurePillars = [
    {
      number: "01",
      title: "Cura Emocional • Feridas que viram força",
      subtitle: "Da sobrevivência à liberdade",
      description: "Você vai entender de onde vêm seus padrões, quebrar repetições, curar rejeições antigas e aprender a lidar com emoções intensas sem explodir e sem se apagar."
    },
    {
      number: "02",
      title: "Autoconhecimento • Identidade e clareza",
      subtitle: "Quem você realmente é",
      description: "Você vai descobrir quem você é em Cristo, aprender a se ver com verdade, reconhecer suas necessidades, colocar limites e agir a partir da sua essência não da pressão externa."
    },
    {
      number: "03",
      title: "Transformação nos Relacionamentos • Comunicação, limites e vínculos saudáveis",
      subtitle: "Limites e Vínculos Reais",
      description: "Você vai aprender a se comunicar com calma e firmeza, sem medo e sem culpa. Chega de ser sempre quem “engole tudo” ou quem “explode”. O Aurora te ensina o caminho do equilíbrio."
    },
    {
      number: "04",
      title: "Espiritualidade Prática • Uma vida com Deus que sustenta sua alma",
      subtitle: "Fé e Maturidade",
      description: "Não é só fé. É fé aplicada ao emocional: decisões alinhadas, descanso, maturidade espiritual e reconciliação consigo mesma."
    }
  ];

  const monthlyJourney = [
    {
      month: "MÊS 1",
      title: "CURA EMOCIONAL",
      description: "Identificação de feridas e saída imediata do modo de sobrevivência."
    },
    {
      month: "MÊS 2",
      title: "AUTOCONHECIMENTO",
      description: "Quem é você sem as camadas de proteção? Redescobrindo sua essência."
    },
    {
      month: "MÊS 3",
      title: "VOCÊ EM CRISTO",
      description: "Curando a relação com sua história, com Deus e consigo mesma."
    },
    {
      month: "MÊS 4",
      title: "RELACIONAMENTOS",
      description: "Aprenda a expressar suas necessidades com clareza e firmeza amorosa."
    },
    {
      month: "MÊS 5",
      title: "LEVEZA E MATURIDADE EMOCIONAL",
      description: "Consolidando a inteligência emocional para lidar com desafios reais."
    },
    {
      month: "MÊS 6",
      title: "INTEGRAÇÃO E RENOVAÇÃO",
      description: "Integrando todas as mudanças para uma vida leve e com propósito."
    }
  ];

  const benefits = [
    "Encontros quinzenais ao vivo",
    "Grupo de acompanhamento exclusivo",
    "Exercícios de reprogramação emocional",
    "Material de apoio em PDF",
    "Convidadas especiais",
    "Comunidade segura e acolhedora"
  ];

  return (
    <div className="min-h-screen bg-background font-sans-clean w-full overflow-x-hidden">


      {/* Hero Section */}
      <section className="hero-mobile-fix relative z-10 pt-12 pb-12 lg:pt-32 lg:pb-32 px-6">
        {/* Strictly Contained Background Decor */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[60%] aspect-square bg-aurora-gold/10 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-[-10%] w-[60%] aspect-square bg-primary/5 rounded-full blur-[80px] translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10 min-w-0">
          <div className="space-y-8 animate-fade-up text-center lg:text-left w-full max-w-full min-w-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium tracking-wide max-w-full mx-auto lg:mx-0">
              <Star className="w-4 h-4 mr-2 text-aurora-gold flex-shrink-0" fill="currentColor" />
              <span className="truncate">Mentoria Exclusiva para Mulheres</span>
            </div>

            <h1
              className="font-serif-display text-4xl lg:text-5xl font-bold text-primary leading-[1.1] max-w-full break-words"
              style={{ wordWrap: 'break-word', hyphens: 'auto' }}
            >
              Em 6 meses, você vai transformar <span className="text-gradient-gold italic">dor em propósito</span>, organizar sua vida emocional e criar relacionamentos saudáveis com fundamentos da psicologia, inteligência emocional e da fé cristã.
            </h1>

            {/* Mobile Video Position (Headline -> Video -> Subheadline -> CTA) */}
            <div className="block lg:hidden w-full max-w-full aspect-video bg-black/5 rounded-xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm my-8 relative mx-auto">
              <iframe
                src="https://www.youtube.com/embed/36DIYM76kO0"
                title="Comunidade Aurora Circle"
                className="w-full h-full block border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Encontros quinzenais ao vivo via Google Meet para mulheres que carregam muito, sentem demais e querem romper o medo de decepcionar, colocar limites com amor e viver relações mais leves, nunca deixaram de acreditar que existe uma versão mais leve e inteira delas mesmas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start w-full">
              <Button
                onClick={() => handleWhatsAppClick()}
                style={{ background: 'var(--gradient-gold)' }}
                className="h-14 px-8 rounded-full text-white shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold border-0 w-full sm:w-auto max-w-sm mx-auto lg:mx-0"
              >
                Quero aplicar para a Mentoria
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center animate-fade-up delay-200" id="video-section">
            {/* Abstract Shapes behind video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-aurora-gold/20 to-transparent rounded-[2rem] rotate-3 scale-95 blur-sm transform transition-transform hover:rotate-6 duration-700"></div>

            <div className="relative w-full aspect-video lg:h-full bg-black/5 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <iframe
                src="https://www.youtube.com/embed/36DIYM76kO0"
                title="Comunidade Aurora Circle"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Glassmorphism Grid */}
      <section className="relative z-10 pt-16 pb-8 lg:py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-serif-display text-4xl lg:text-5xl font-bold text-primary mb-6">
              Você tem sentido <br /><span className="italic text-aurora-gold">isso ultimamente?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Muitas mulheres fortes por fora estão exaustas por dentro. Se você se identifica com isso, saiba que não é a única.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {painPoints.map((point, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-primary/5 shadow-soft hover:shadow-lg hover:border-aurora-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-aurora-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <HeartCrack className="w-6 h-6 text-aurora-gold" />
                </div>
                <p className="text-lg text-primary font-medium leading-relaxed flex-grow">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution/Method Pillars */}
      <section className="relative z-10 pt-16 pb-12 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <h2 className="font-serif-display text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
                A estrutura que sustenta a sua <span className="text-gradient-gold">nova vida</span>
              </h2>
              <p className="text-lg text-primary/90 leading-relaxed mx-auto lg:mx-0 mb-5 lg:mb-0">
                O Método Aurora não é sobre dicas rápidas, é uma reconstrução real.
              </p>

            </div>

            <div className="grid grid-cols-1 gap-6 auto-rows-fr">
              {structurePillars.map((pillar, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-white md:bg-white/70 md:backdrop-blur-md border border-white/60 shadow-none md:shadow-sm hover:border-aurora-gold/50 transition-all group flex flex-col h-full">
                  <div className="absolute top-4 right-8 font-serif-display text-8xl text-primary/5 font-bold z-0 pointer-events-none group-hover:text-aurora-gold/10 transition-colors">
                    {pillar.number}
                  </div>
                  <div className="relative z-10 flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif-display font-bold text-primary mb-2">{pillar.title}</h3>
                    <p className="text-sm font-bold text-aurora-gold uppercase tracking-wider mb-4">{pillar.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative z-10 py-12 lg:py-24 bg-aurora-cream/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif-display text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            Sua Jornada de <span className="text-gradient-gold">6 Meses</span>
          </h2>

          <div className="relative border-l-2 border-primary/10 ml-4 md:mx-auto space-y-12">
            {monthlyJourney.map((month, i) => (
              <div key={i} className="relative pl-12 md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full border-4 border-white bg-aurora-gold shadow-sm md:left-1/2 md:-translate-x-1/2"></div>

                <div className={`md:flex items-center justify-between gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="md:w-1/2 h-full flex">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 hover:-translate-y-1 transition-transform duration-300 w-full flex flex-col h-full">
                      <span className="text-xs font-bold text-aurora-gold tracking-widest uppercase mb-2 block flex-shrink-0">{month.month}</span>
                      <h3 className="text-xl font-serif-display font-bold text-primary mb-2 flex-shrink-0">{month.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{month.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24 px-6 bg-primary text-aurora-cream relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-serif-display text-4xl lg:text-5xl font-bold mb-6 text-white">
                O que você recebe ao <br />entrar no círculo?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Tudo o que você precisa para se sentir segura, acompanhada e guiada durante todo o processo.
              </p>
              <Button onClick={() => handleWhatsAppClick()} className="hidden lg:inline-flex bg-aurora-gold text-white hover:bg-white hover:text-primary h-14 px-8 rounded-full font-semibold text-lg hover:scale-105 transition-all">
                Garantir minha vaga
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 auto-rows-fr">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5 h-full">
                  <Check className="w-5 h-5 text-aurora-gold mt-0.5 shrink-0" />
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Mobile CTA Button (Below list) */}
            <div className="flex justify-center lg:hidden mt-8">
              <Button onClick={() => handleWhatsAppClick()} className="bg-aurora-gold text-white hover:bg-white hover:text-primary h-14 px-8 rounded-full font-semibold text-lg hover:scale-105 transition-all w-full sm:w-auto">
                Garantir minha vaga
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks - Real Testimonials */}
      <section className="py-16 lg:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif-display text-4xl lg:text-5xl font-bold text-primary mb-16 px-4">
            Histórias de <span className="text-gradient-gold">Transformação</span>
          </h2>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 text-left scrollbar-hide"
          >
            {[
              { id: 1, name: "Convidada", image: test1 },
              { id: 2, name: "Convidada", image: test2 },
              { id: 3, name: "Convidada", image: test3 },
              { id: 4, name: "Convidada", image: test4 },
              { id: 5, name: "Convidada", image: test5 },
              { id: 6, name: "Convidada", image: test6 },
              { id: 7, name: "Convidada", image: test7 }
            ].map((testimonial, i) => (
              <div key={i} className={`min-w-[85vw] md:min-w-0 snap-center bg-white p-4 pb-4 rounded-3xl shadow-soft border border-primary/5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300 h-fit ${i === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden border border-primary/5 group-hover:shadow-md transition-shadow">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-auto object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-8 text-primary/30 animate-pulse">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Deslize para ver mais</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 lg:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="absolute -inset-4 bg-aurora-gold/20 rounded-3xl blur-2xl"></div>
              <img
                src={mentorImage}
                alt="Larissa Farinazo"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-auto h-full max-h-[600px]"
              />
            </div>
            <div className="space-y-8 animate-fade-up delay-200">
              <h2 className="font-serif-display text-4xl lg:text-5xl font-bold text-primary">
                Quem é sua <span className="text-gradient-gold">Mentora?</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sou <strong>Larissa Farinazo</strong>, psicóloga e mentora de mulheres. Minha missão é ajudar você a se reconectar com sua verdadeira essência e florescer em todas as áreas da sua vida.
                </p>
                <p>
                  Com anos de experiência clínica, desenvolvi o Método Aurora para oferecer um caminho seguro de amadurecimento emocional e espiritual para mulheres que desejam viver com mais leveza e propósito.
                </p>
                <p>
                  Estou aqui para segurar sua mão nesta jornada de 6 meses no Aurora Circle. Vamos juntas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 lg:py-24 px-6 bg-aurora-cream/20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 lg:p-16 rounded-[3rem] border border-aurora-gold/20 bg-white shadow-soft animate-fade-up">
          <div className="w-24 h-24 bg-aurora-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-12 h-12 text-aurora-gold" />
          </div>
          <h2 className="font-serif-display text-4xl font-bold text-primary">
            Garantia de 30 dias <br />uma jornada sem riscos.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eu confio tanto no poder de transformação do Aurora Circle que ofereço uma garantia incondicional. Se em 30 dias você sentir que a mentoria não é para você, devolvemos seu investimento integralmente. O risco é todo meu.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif-display text-4xl font-bold text-primary text-center mb-16">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                1. Os encontros ficam gravados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Sim. Todos os encontros ao vivo ficam gravados para você assistir quando quiser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                2. Preciso estar disponível em todos os encontros ao vivo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Não. Os encontros são importantes, mas você pode assistir às gravações e continuar acompanhando normalmente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                3. Eu não sou cristã. Posso participar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Sim. A mentoria é fundamentada em princípios cristãos, mas qualquer mulher que respeite a espiritualidade do processo é bem-vinda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                4. Eu já faço terapia. Posso fazer a mentoria junto?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Pode e muitas alunas fazem. A mentoria traz um processo emocional + espiritual + relacional, complementar à terapia individual.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                5. Qual a diferença entre terapia e Aurora Circle?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                A terapia é individual, clínica e contínua. O Aurora Circle é um processo guiado, com técnicas e práticas para destravar áreas emocionais, espirituais e relacionais, em formato de grupo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                6. E se eu não me sentir à vontade para compartilhar no grupo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Você nunca é obrigada a expor nada. O grupo é seguro, acolhedor e sem julgamentos. Você participa no seu ritmo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                7. E se eu entrar e não gostar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Você tem garantia de 30 dias. Se não se identificar com o processo, devolvemos 100% do valor sem questionamentos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                8. Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Você pode pagar à vista ou parcelar no cartão de crédito.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                9. Existe suporte individual?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Há suporte dentro do grupo fechado e, em alguns momentos, orientação direta. Para acompanhamento individual clínico, existe o Protocolo Individual de Acompanhamento, separado da mentoria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="border border-primary/10 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-serif-display text-xl font-semibold hover:no-underline py-6">
                10. Essa mentoria vai me ajudar mesmo se eu estiver muito cansada emocionalmente?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                Sim. O método foi criado exatamente para mulheres que estão no limite: sobrecarregadas, culpadas, ansiosas ou emocionalmente exaustas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 px-6 relative">
        <div
          className="max-w-4xl mx-auto rounded-[3rem] p-8 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden"
          style={{ background: 'var(--gradient-gold)' }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold">
              Quero começar minha nova história agora
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Porque eu sei que não posso continuar vivendo do mesmo jeito.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => handleWhatsAppClick()}
                className="bg-white text-primary h-auto min-h-[4rem] px-6 md:px-10 rounded-full text-lg md:text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary hover:text-white transition-all w-full sm:w-auto whitespace-normal py-4 md:py-0"
              >
                Garantir minha vaga agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default ComunidadeAurora;
