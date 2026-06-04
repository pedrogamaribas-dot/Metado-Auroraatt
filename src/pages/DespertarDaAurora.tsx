import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  CalendarBlank, 
  Clock, 
  MapPin, 
  Handbag, 
  InstagramLogo, 
  List, 
  X, 
  User, 
  Envelope, 
  Phone, 
  Buildings, 
  CaretRight, 
  PaperPlaneTilt 
} from '@phosphor-icons/react';
import IMAGE_CONSTANTS from '../constants/images';
import DespertarLogo from '../components/DespertarLogo';
import GoldDivider from '../components/GoldDivider';
import CrownDivider from '../components/CrownDivider';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import GalleryCarousel from '../components/GalleryCarousel';

export const DespertarDaAurora: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Form States
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parallax scroll for Hero photo
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yHeroPhoto = useTransform(scrollY, [0, 600], ["0px", "80px"]);

  // Detect scroll to style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp Mask: (XX) XXXXX-XXXX
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setNome('');
    setWhatsapp('');
    setEmail('');
    setCidade('');
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && whatsapp && email && cidade) {
      setIsSubmitted(true);
    }
  };

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EC] text-[#3B2314] overflow-x-hidden selection:bg-[#AE8625] selection:text-[#FFF9EC]">
      
      {/* SECTION 1 — HEADER / NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-[60px] md:h-[72px] transition-all duration-300 flex items-center ${
          scrolled ? 'shadow-sm border-b border-[#AE8625]/20 bg-[#FFF9EC]/92 backdrop-blur-md' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <div 
            className="flex items-center cursor-pointer scale-90 md:scale-100 origin-left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <DespertarLogo lightBg={true} layout="horizontal" size="sm" />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {[
              { name: "O Encontro", id: "o-encontro" },
              { name: "A Proposta", id: "a-proposta" },
              { name: "Fotos", id: "fotos-secao" },
              { name: "Sobre Larissa", id: "sobre-larissa" }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="font-montserrat text-[11px] font-light tracking-[0.25em] text-[#7A5C44] hover:text-[#AE8625] uppercase transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Navigation CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleOpenModal}
              className="font-montserrat text-[11px] font-light tracking-[0.2em] uppercase bg-[#2C1A0E] text-[#F7EF8A] px-7 py-3 hover:bg-[#AE8625] transition-all duration-300 rounded-[2px]"
            >
              Garantir minha vaga
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-[#AE8625] hover:text-[#3B2314] transition-colors p-1"
            aria-label="Abrir menu"
          >
            <List size={26} weight="light" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Drawer Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#2C1A0E]"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#FFF9EC]/98 backdrop-blur-md p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <DespertarLogo lightBg={true} layout="horizontal" size="sm" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#AE8625] hover:text-[#3B2314] p-1"
                    aria-label="Fechar menu"
                  >
                    <X size={26} weight="light" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {[
                    { name: "O Encontro", id: "o-encontro" },
                    { name: "A Proposta", id: "a-proposta" },
                    { name: "Fotos", id: "fotos-secao" },
                    { name: "Sobre Larissa", id: "sobre-larissa" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left font-montserrat text-sm font-light tracking-[0.2em] text-[#3B2314] hover:text-[#AE8625] uppercase py-3 border-b border-[#AE8625]/10"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  onClick={handleOpenModal}
                  className="w-full text-center font-montserrat text-xs font-light tracking-[0.18em] uppercase bg-[#2C1A0E] text-[#F7EF8A] py-4 rounded-[2px]"
                >
                  Garantir vaga
                </button>
                <div className="text-center font-montserrat text-[10px] tracking-[0.15em] text-[#7A5C44] uppercase">
                  15 de agosto de 2026
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* SECTION 2 — HERO SECTION (Original Watermark Layout) */}
      <section 
        ref={heroRef}
        className="relative w-full min-h-screen pt-28 lg:pt-0 flex flex-col lg:flex-row items-center overflow-hidden bg-cover bg-center select-none"
        style={{ backgroundImage: `url(${IMAGE_CONSTANTS.bgHero})` }}
      >
        {/* Left Typography Side - Contains floating labels, serif displays and elegant details */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-start text-left px-6 md:px-16 lg:pl-24 lg:pr-8 py-12 lg:py-24 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Eyebrow text="Imersão Presencial • Barra Mansa" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="font-cormorant text-5xl md:text-[86px] font-light text-[#3B2314] leading-[0.95] tracking-tight mt-4"
          >
            Despertar<br />
            <span className="italic text-[#AE8625]">da Aurora.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-cormorant text-2xl md:text-[32px] font-light text-[#7A5C44] italic mt-6"
          >
            Estrutura antes da expansão.
          </motion.h2>

          <GoldDivider marginClass="my-7" className="w-[120px] self-start" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="font-montserrat text-[15px] md:text-[16px] font-light text-[#7A5C44] leading-relaxed max-w-[480px] mt-5"
          >
            Uma imersão presencial para mulheres que sustentam muito — e entendem que antes da expansão, precisam estar inteiras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="w-full max-w-[360px] lg:max-w-none flex flex-col sm:flex-row gap-3 mt-9"
          >
            <button
              onClick={handleOpenModal}
              className="flex-1 lg:flex-none font-montserrat text-[13px] font-light tracking-[0.2em] uppercase bg-[#2C1A0E] text-[#F7EF8A] px-10 py-4.5 rounded-[2px] transition-all duration-300 hover:bg-[#AE8625] hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero viver essa experiência
            </button>
            <button
              onClick={handleOpenModal}
              className="flex-1 lg:flex-none font-montserrat text-[13px] font-light tracking-[0.2em] uppercase border border-[#AE8625] text-[#AE8625] bg-transparent px-10 py-4 rounded-[2px] transition-all duration-300 hover:bg-[#2C1A0E]/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              Entrar para a lista
            </button>
          </motion.div>
        </div>

        {/* Right Placeholder Side - Displays elegant gold dashed box for late placement */}
        <div className="w-full lg:w-[45%] flex justify-center items-center px-6 lg:px-12 h-[55vw] lg:h-[90vh] bg-transparent border-none shadow-none">
          <div className="w-full max-w-[380px] aspect-[3/4] flex flex-col items-center justify-center border-2 border-dashed border-[#AE8625]/35 bg-[#2C1A0E]/5 p-8 text-center rounded-xl shadow-lg relative overflow-hidden select-none z-10 transition-transform duration-300 hover:scale-[1.01]">
            <div className="absolute w-[80%] aspect-square bg-[#AE8625]/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 border border-[#AE8625]/20 flex items-center justify-center text-[#AE8625] mb-4 z-10">
              <span className="text-xs">◆</span>
            </div>
            <span className="font-montserrat text-[11px] font-medium tracking-[0.2em] text-[#AE8625] uppercase mb-2 z-10">
              FOTO DE LARISSA (CAMINHANDO)
            </span>
            <span className="font-montserrat text-[10px] font-light text-[#7A5C44]/75 tracking-[0.15em] uppercase z-10">
              [ INSERIR FOTO AQUI ]
            </span>
          </div>
        </div>
      </section>


      {/* SECTION 3 — GRAND QUOTE SECTION */}
      <section 
        className="relative w-full overflow-hidden bg-[#FFF9EC] pt-24 pb-8 select-none"
      >
        <div className="w-full max-w-5xl mx-auto text-center px-6 flex flex-col items-center">
          <GoldDivider className="mb-10 w-[80px]" />
          
          <h2 className="font-cormorant text-3xl md:text-[54px] font-light text-[#3B2314] leading-[1.25] italic max-w-4xl">
            Existe uma mulher por trás de tudo o que ela sustenta. E chegou a hora de voltar para si.
          </h2>
        </div>
      </section>


      {/* SECTION 4 — O ENCONTRO (DETAILS & INFO) */}
      <section 
        id="o-encontro" 
        className="relative w-full overflow-hidden bg-[#FFF9EC] py-12 px-6 md:px-16 lg:px-24"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Eyebrow text="Sobre o Evento" />
          
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-[#3B2314] mt-4 mb-16 text-center">
            15 de Agosto
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4 text-center">
            {/* Date Details */}
            <div className="flex flex-col items-center p-6 border border-[#AE8625]/10 rounded-2xl bg-white/20 backdrop-blur-sm shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 flex items-center justify-center text-[#AE8625] mb-4">
                <CalendarBlank size={24} weight="light" />
              </div>
              <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] text-[#AE8625] uppercase">Data</span>
              <h4 className="font-cormorant text-xl text-[#3B2314] font-normal mt-2">Sábado, 15/08/2026</h4>
            </div>

            {/* Time Details */}
            <div className="flex flex-col items-center p-6 border border-[#AE8625]/10 rounded-2xl bg-white/20 backdrop-blur-sm shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 flex items-center justify-center text-[#AE8625] mb-4">
                <Clock size={24} weight="light" />
              </div>
              <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] text-[#AE8625] uppercase">Horário</span>
              <h4 className="font-cormorant text-xl text-[#3B2314] font-normal mt-2">Às 16:00 horas</h4>
            </div>

            {/* Location Details */}
            <div className="flex flex-col items-center p-6 border border-[#AE8625]/10 rounded-2xl bg-white/20 backdrop-blur-sm shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 flex items-center justify-center text-[#AE8625] mb-4">
                <MapPin size={24} weight="light" />
              </div>
              <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] text-[#AE8625] uppercase">Localização</span>
              <h4 className="font-cormorant text-xl text-[#3B2314] font-normal mt-2">Barra Mansa, RJ</h4>
            </div>
          </div>

          {/* Dress code & limit information */}
          <div className="flex flex-col items-center mt-16 max-w-xl text-center">
            <div className="flex items-center gap-2 text-xs font-montserrat text-[#7A5C44] uppercase tracking-widest bg-white/40 border border-[#AE8625]/10 px-6 py-3.5 rounded-full shadow-sm">
              <Handbag size={16} className="text-[#AE8625]" />
              <span>Dress code: <strong className="text-[#3B2314]">Elegante • Tons neutros e terrosos</strong></span>
            </div>
            <p className="font-montserrat text-[11px] text-[#AE8625]/75 tracking-wider uppercase mt-4">
              *Vagas intencionalmente restritas para criar proximidade entre nós.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 5 — "CORPO • ALMA • ESPÍRITO" (Pillars & Reflexive Sitting Photo) */}
      <section 
        id="a-proposta" 
        className="relative w-full overflow-hidden bg-[#FFF9EC] pt-12 pb-24"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Column Left (Placeholder Sitting Box) */}
          <div className="w-full h-[400px] md:h-[550px] lg:h-auto min-h-[400px] lg:min-h-[680px] flex items-center justify-center relative overflow-hidden px-6 lg:px-12 bg-transparent select-none">
            
            <div className="w-[80%] max-w-[360px] aspect-[3/4] flex flex-col items-center justify-center border-2 border-dashed border-[#AE8625]/35 bg-[#FFF9EC]/40 p-8 text-center rounded-2xl shadow-sm z-10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 border border-[#AE8625]/20 flex items-center justify-center text-[#AE8625] mb-4">
                <span className="text-xs">◆</span>
              </div>
              <span className="font-montserrat text-[11px] font-medium tracking-[0.2em] text-[#AE8625] uppercase mb-2">
                FOTO DE LARISSA (SENTADA)
              </span>
              <span className="font-montserrat text-[10px] font-light text-[#7A5C44]/75 tracking-[0.15em] uppercase">
                [ INSERIR FOTO AQUI ]
              </span>
            </div>
          </div>

          {/* Column Right (Details) */}
          <div className="w-full flex flex-col justify-center px-6 md:px-12 lg:pl-[8%] lg:pr-12 py-16 lg:py-24 text-left">
            <Eyebrow text="A Proposta Central" />

            <h2 className="font-cormorant text-3xl md:text-[46px] font-light text-[#3B2314] leading-tight mt-6 max-w-lg">
              A mulher precisa estar inteira para sustentar o que Deus confiou a ela.
            </h2>

            <p className="font-montserrat text-sm md:text-base font-light text-[#7A5C44] leading-relaxed mt-6 max-w-[480px]">
              O Método Aurora baseia-se na harmonização integrada de três dimensões vitais para que a mulher moderna viva em plenitude sem sacrificar sua essência:
            </p>

            {/* Three dimensions block list with gold bullet details */}
            <div className="flex flex-col gap-6 mt-10">
              {[
                { title: "Corpo (Cuidado e Energia)", text: "Cuidar do corpo não é vaidade — é estrutura. A mulher que ignora o próprio corpo eventualmente não aguenta o peso que carrega." },
                { title: "Alma (Consciência e Emoções)", text: "A vida emocional precisa de atenção, consciência e espaço. Sentir não é fraqueza — é inteligência." },
                { title: "Espírito (Conexão e Alinhamento)", text: "O alinhamento com Deus não é só devoção. É posicionamento. É saber de onde vem a força que você tem." }
              ].map((dim, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex items-center gap-2 font-montserrat text-xs font-semibold tracking-wider text-[#AE8625] uppercase mt-1 min-w-[120px]">
                    <span className="text-[7px] text-[#AE8625]">◆</span>
                    <span>{dim.title}</span>
                  </div>
                  <p className="font-montserrat text-[14px] font-light text-[#7A5C44] leading-relaxed flex-1">
                    {dim.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 6 — GALERIA PREMIUM (3D Carousel Integrated between A Proposta and Sobre Larissa) */}
      <SectionWrapper id="fotos-secao" variant="dark" className="py-24">
        {/* Top elegant Crown Divider */}
        <CrownDivider glow={true} className="mb-4" />
        
        {/* Render 3D Carousel Gallery Component */}
        <GalleryCarousel />
        
        {/* Bottom elegant Crown Divider */}
        <CrownDivider glow={true} className="mt-4" />
      </SectionWrapper>


      {/* SECTION 7 — SOBRE LARISSA FARINAZO (DARK FUNDO) */}
      <section id="sobre-larissa" className="relative w-full bg-[#2C1A0E] py-20 md:py-28 overflow-hidden text-left select-none">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 md:px-12">
          
          {/* Column Left (Placeholder Bio Box) */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[400px] lg:min-h-[500px]">
            {/* Elegant gold circle glow behind the dark-section photo */}
            <div className="absolute w-[90%] aspect-square bg-[#F7EF8A]/5 rounded-full blur-3xl bottom-10 left-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="w-full max-w-[360px] aspect-[3/4] flex flex-col items-center justify-center border-2 border-dashed border-[#AE8625]/30 bg-[#FFF9EC]/5 p-8 text-center rounded-xl z-10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="w-12 h-12 rounded-full bg-[#AE8625]/10 border border-[#AE8625]/20 flex items-center justify-center text-[#AE8625] mb-4">
                <span className="text-xs">◆</span>
              </div>
              <span className="font-montserrat text-[11px] font-medium tracking-[0.2em] text-[#F7EF8A] uppercase mb-2">
                FOTO DE LARISSA (SOBRE)
              </span>
              <span className="font-montserrat text-[10px] font-light text-[#C4A882]/75 tracking-[0.15em] uppercase">
                [ INSERIR FOTO AQUI ]
              </span>
            </div>
          </div>

          {/* Column Right (Bio Details) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-[7%]">
            <Eyebrow text="Quem está por trás" lightBg={false} />

            <h2 className="font-cormorant text-4xl md:text-5xl font-normal text-[#F7EF8A] mt-6">
              Larissa Farinazo
            </h2>

            <span className="font-montserrat text-[10px] font-light tracking-[0.2em] text-[#C4A882] uppercase mt-2 mb-8">
              Psicóloga • Mentora • Idealizadora do Método Aurora
            </span>

            <div className="flex flex-col gap-6 font-montserrat text-sm md:text-[15px] font-light text-[#E6D7C3] leading-relaxed max-w-2xl">
              <p>
                Larissa Farinazo é psicóloga, mentora e idealizadora do Método Aurora. Seu trabalho é voltado para conduzir mulheres que sustentam grandes esferas de responsabilidade a desenvolverem estrutura emocional sólida e alinhamento interno.
              </p>
              <p>
                Acreditando profundamente na integração equilibrada da psicologia clínica, inteligência emocional e fundamentos da espiritualidade cristã, Larissa atua guiando mentorandas e alunas a restabelecerem a conexão com suas identidades em Deus e viverem com maturidade, clareza e real presença.
              </p>
              <p>
                A Imersão Despertar da Aurora é uma experiência presencial exclusiva desenhada metodologicamente para que você encontre esse repouso e realinhamento interior estrutural antes dos seus ciclos de expansão.
              </p>
            </div>

            {/* Social details in biography */}
            <div className="flex items-center gap-3 mt-10">
              <a 
                href="https://instagram.com/larissafarinazo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-montserrat text-xs font-light text-[#F7EF8A] hover:text-[#FFF9EC] tracking-[0.15em] uppercase transition-colors"
              >
                <InstagramLogo size={20} weight="light" className="text-[#AE8625]" />
                <span>@larissafarinazo</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 8 — FINAL CTA & INVITATION */}
      <section 
        className="relative w-full py-28 md:py-36 bg-cover bg-center text-center overflow-hidden select-none"
        style={{ backgroundImage: `url(${IMAGE_CONSTANTS.bgLightPattern})` }}
      >
        {/* Soft layout background orbs */}
        <div className="absolute w-[300px] h-[300px] bg-[#AE8625]/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center">
          <Eyebrow text="O Chamado" />
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[#3B2314] mt-6 max-w-2xl leading-[1.2]">
            Algo importante está sendo construído. E você foi convidada para estar aqui.
          </h2>

          <p className="font-montserrat text-sm font-light text-[#7A5C44] leading-relaxed mt-6 max-w-lg">
            A mulher que sustenta muito também necessita de um espaço de sustentação, cuidado e alinhamento prático. Reserve seu lugar nesta experiência restauradora.
          </p>

          {/* Symmetrical CTA Button centered */}
          <button
            onClick={handleOpenModal}
            className="font-montserrat text-[12px] font-medium tracking-[0.2em] uppercase bg-[#2C1A0E] text-[#FFF9EC] px-12 py-5 rounded-[4px] shadow-lg transition-all duration-300 hover:bg-[#AE8625] hover:text-[#2C1A0E] hover:scale-103 mt-12"
          >
            Quero viver essa experiência
          </button>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="w-full bg-[#1A0F07] py-16 px-12 text-left border-t border-[#AE8625]/10 z-10 relative select-none">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Col 1: Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <DespertarLogo lightBg={false} layout="horizontal" size="sm" />
            <p className="font-montserrat text-[13px] font-light text-[#C4A882]/60 tracking-wider">
              Estrutura antes da expansão
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-montserrat text-[10px] font-light tracking-[0.22em] text-[#AE8625] uppercase mb-4">
              NAVEGAÇÃO
            </span>
            <div className="flex flex-col gap-3">
              {[
                { name: "O Encontro", id: "o-encontro" },
                { name: "A Proposta", id: "a-proposta" },
                { name: "Fotos", id: "fotos-secao" },
                { name: "Sobre Larissa", id: "sobre-larissa" }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left font-montserrat text-[14px] font-light text-[#C4A882] hover:text-[#F7EF8A] transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-montserrat text-[10px] font-light tracking-[0.22em] text-[#AE8625] uppercase mb-4">
              CONTATO
            </span>
            <div className="flex flex-col gap-4">
              <a 
                href="https://instagram.com/larissafarinazo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-montserrat text-[14px] font-light text-[#C4A882] hover:text-[#F7EF8A] transition-colors duration-200"
              >
                <InstagramLogo size={18} weight="light" className="text-[#AE8625]" />
                <span>@larissafarinazo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto my-10 flex justify-center opacity-15">
          <svg width="100%" height="1" viewBox="0 0 1000 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0.5H1000" stroke="url(#footer-grad)" strokeWidth="1" />
            <defs>
              <linearGradient id="footer-grad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#AE8625" stopOpacity="0" />
                <stop offset="30%" stopColor="#AE8625" stopOpacity="1" />
                <stop offset="70%" stopColor="#AE8625" stopOpacity="1" />
                <stop offset="100%" stopColor="#AE8625" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-6xl mx-auto flex justify-center">
          <p className="font-montserrat text-[11px] font-light text-[#C4A882]/40 text-center">
            © 2026 Despertar da Aurora · Todos os direitos reservados · Larissa Farinazo
          </p>
        </div>
      </footer>


      {/* REGISTRATION MODAL FORM */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Overlay backdrop-blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#2C1A0E] backdrop-blur-[8px]"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-[480px] bg-[#FFF9EC]/97 p-8 md:p-10 z-10 flex flex-col justify-center border border-[#AE8625]/20 shadow-2xl rounded-xl"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-5 text-[#7A5C44] hover:text-[#3B2314] transition-colors p-1"
                aria-label="Fechar formulário"
              >
                <X size={20} weight="light" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="flex flex-col items-center text-center mb-6">
                    <DespertarLogo lightBg={true} layout="vertical" size="sm" />
                    <h3 className="font-cormorant text-2xl md:text-3xl font-light italic text-[#3B2314] mt-4">
                      Garantir meu lugar
                    </h3>
                    <p className="font-montserrat text-sm font-light text-[#7A5C44] mt-1.5">
                      Preencha abaixo e entraremos em contato em breve.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                    <div className="flex flex-col">
                      <label className="font-montserrat text-[10px] font-normal tracking-[0.15em] text-[#AE8625] uppercase mb-1.5">
                        NOME COMPLETO
                      </label>
                      <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full bg-transparent border-b border-[#AE8625]/30 focus:border-[#AE8625] text-sm font-light text-[#3B2314] py-2 px-1 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-montserrat text-[10px] font-normal tracking-[0.15em] text-[#AE8625] uppercase mb-1.5">
                        WHATSAPP
                      </label>
                      <input
                        type="text"
                        required
                        value={whatsapp}
                        onChange={handleWhatsappChange}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-transparent border-b border-[#AE8625]/30 focus:border-[#AE8625] text-sm font-light text-[#3B2314] py-2 px-1 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-montserrat text-[10px] font-normal tracking-[0.15em] text-[#AE8625] uppercase mb-1.5">
                        E-MAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu.email@exemplo.com"
                        className="w-full bg-transparent border-b border-[#AE8625]/30 focus:border-[#AE8625] text-sm font-light text-[#3B2314] py-2 px-1 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-montserrat text-[10px] font-normal tracking-[0.15em] text-[#AE8625] uppercase mb-1.5">
                        CIDADE / UF
                      </label>
                      <input
                        type="text"
                        required
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        placeholder="Sua cidade - UF"
                        className="w-full bg-transparent border-b border-[#AE8625]/30 focus:border-[#AE8625] text-sm font-light text-[#3B2314] py-2 px-1 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-montserrat text-xs font-light tracking-[0.2em] uppercase bg-[#2C1A0E] text-[#FFF9EC] py-4 rounded-[4px] transition-all duration-300 hover:bg-[#AE8625] mt-4 flex items-center justify-center gap-2"
                    >
                      <PaperPlaneTilt size={16} />
                      <span>Confirmar Inscrição</span>
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-6"
                >
                  <div className="mb-4">
                    <DespertarLogo lightBg={true} layout="vertical" size="sm" />
                  </div>
                  
                  <h3 className="font-cormorant text-2xl font-light italic text-[#3B2314] leading-tight mt-6">
                    Sua inscrição foi recebida.<br />
                    Em breve entraremos em contato.
                  </h3>
                  
                  <p className="font-montserrat text-sm font-light text-[#7A5C44] mt-4">
                    Fique atenta ao seu WhatsApp e e-mail.
                  </p>

                  <button
                    onClick={handleCloseModal}
                    className="font-montserrat text-[11px] font-normal tracking-[0.15em] uppercase text-[#AE8625] hover:text-[#3B2314] transition-colors border-b border-[#AE8625] mt-10 pb-0.5"
                  >
                    Voltar ao site
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DespertarDaAurora;
