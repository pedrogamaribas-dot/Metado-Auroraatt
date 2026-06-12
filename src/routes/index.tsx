import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  CalendarBlank, 
  Clock, 
  MapPin, 
  Handbag, 
  InstagramLogo, 
  WhatsappLogo, 
  List, 
  X, 
  User, 
  Envelope, 
  Phone, 
  Buildings, 
  CaretRight, 
  CaretDown, 
  CaretUp, 
  PaperPlaneTilt,
  Users,
  Gift,
  Heart,
  Briefcase,
  UsersThree,
  Cross,
  Sparkle,
  Leaf,
  CoatHanger,
  BookOpen
} from '@phosphor-icons/react';
import IMAGE_CONSTANTS from '@/constants/images';
import DespertarLogo from '@/components/DespertarLogo';
import GoldDivider from '@/components/GoldDivider';
import CrownDivider from '@/components/CrownDivider';
import Eyebrow from '@/components/Eyebrow';
import SectionWrapper from '@/components/SectionWrapper';
import GalleryCarousel from '@/components/GalleryCarousel';
import GlobalBackdrop from '@/components/GlobalBackdrop';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Despertar da Aurora — Imersão Presencial" },
      { name: "description", content: "Uma imersão presencial para mulheres que sustentam muito — e entendem que antes da expansão, precisam estar inteiras." }
    ]
  }),
  component: DespertarDaAurora,
});

export function DespertarDaAurora() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(true);
  const [isScrolledAway, setIsScrolledAway] = useState(false);
  const lastScrollY = useRef(0);
  const ignoreScrollUntil = useRef(0);
  
  // Form States
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const WHATSAPP_URL = "https://wa.me/5524988112168?text=Ol%C3%A1!%20Tenho%20interesse%20na%20imers%C3%A3o%20Despertar%20da%20Aurora.";

  // Parallax scroll for Hero photo
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yHeroPhoto = useTransform(scrollY, [0, 600], ["0px", "80px"]);

  // Auto-hide header on scroll
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (Date.now() < ignoreScrollUntil.current) return;
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) < 5) return;

      if (currentY <= 10) {
        setHeaderOpen(true);
        setIsScrolledAway(false);
      } else {
        setHeaderOpen(false);
        setIsScrolledAway(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const handleToggleHeader = () => {
    const nextOpen = !headerOpen;
    if (nextOpen) {
      ignoreScrollUntil.current = Date.now() + 800;
    }
    setHeaderOpen(nextOpen);
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
    <div className="min-h-screen bg-[#FFF9EC] text-[#3B2314] overflow-x-hidden selection:bg-[#AE8625] selection:text-[#FFF9EC] relative">
      <GlobalBackdrop />
      
      {/* SECTION 1 — HEADER / NAVBAR */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 h-[92px] w-full flex items-center"
        style={{
          transform: headerOpen ? 'translateY(0px)' : 'translateY(-92px)',
          transition: 'transform 300ms ease',
          pointerEvents: headerOpen ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,249,236,0.20)_0%,rgba(255,249,236,0.15)_50%,rgba(255,249,236,0.08)_80%,transparent_100%)] backdrop-blur-[14px]"
        />
        <div className="relative z-10 w-full mx-auto px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <div 
            className="flex flex-col items-center cursor-pointer scale-90 md:scale-100 origin-left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Coroa SVG */}
            <svg width="22" height="10" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#AE8625] mb-1">
              <path
                d="M21 24L11 12L24 17L35 6L46 17L59 12L49 24 C44 25.5, 26 25.5, 21 24 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M23.5 24 C28 25, 42 25, 46.5 24"
                stroke="#F7EF8A"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M35 28.5L37.5 31L35 33.5L32.5 31Z"
                fill="currentColor"
              />
              <circle cx="35" cy="31" r="0.8" fill="#F7EF8A" />
            </svg>
            <span className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-[#7A5C44] mb-[2px] leading-none">
              DESPERTAR DA
            </span>
            <span className="font-cormorant text-[24px] tracking-[0.15em] uppercase text-[#2C1A0E] font-weight-500 leading-none">
              AURORA
            </span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-[40px]">
            {[
              { name: "O EVENTO", id: "o-encontro" },
              { name: "PARA QUEM É", id: "para-quem-e" },
              { name: "EXPERIÊNCIA", id: "a-proposta" },
              { name: "SOBRE LARISSA", id: "sobre-larissa" }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="relative group pb-1 font-montserrat text-[11px] font-normal tracking-[0.2em] text-[#3B2314] hover:text-[#AE8625] uppercase transition-colors duration-300 cursor-pointer"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-[-4px] left-0 h-[1px] bg-[#AE8625] w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Navigation CTA Button */}
          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[11px] font-semibold tracking-[0.15em] uppercase bg-[linear-gradient(110deg,#AE8625_0%,#F7EF8A_50%,#AE8625_100%)] bg-[size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] text-[#2C1A0E] py-3 px-7 rounded-[4px] shadow-[0_4px_16px_rgba(174,134,37,0.30)] hover:scale-[1.02] transition-all duration-[600ms] flex items-center cursor-pointer"
            >
              <span>GARANTIR MEU LUGAR</span>
              <span className="text-[9px] ml-[6px]">✦</span>
            </a>
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
      {isScrolledAway && (
        <button
          onClick={handleToggleHeader}
          className="fixed top-0 left-1/2 z-[60] -translate-x-1/2 w-[40px] h-[22px] rounded-b-xl bg-[rgba(255,249,236,0.75)] backdrop-blur-[12px] shadow-[0_8px_16px_rgba(44,26,14,0.08)] flex items-center justify-center cursor-pointer text-[#AE8625] pointer-events-auto"
          style={{ transform: headerOpen ? 'translate(-50%, 92px)' : 'translate(-50%, 0)' }}
          aria-label={headerOpen ? 'Recolher menu' : 'Abrir menu'}
        >
          {headerOpen ? <CaretUp size={18} weight="bold" /> : <CaretDown size={18} weight="bold" />}
        </button>
      )}

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
                    { name: "O Evento", id: "o-encontro" },
                    { name: "Para Quem É", id: "para-quem-e" },
                    { name: "Experiência", id: "a-proposta" },
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
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-montserrat text-xs font-semibold tracking-[0.18em] uppercase bg-[linear-gradient(110deg,#AE8625,#F7EF8A,#AE8625)] bg-[size:200%_auto] bg-[position:0%_center] hover:bg-[position:200%_center] text-[#2C1A0E] py-4 rounded-[2px] cursor-pointer"
                >
                  Garantir vaga
                </a>
                <div className="text-center font-montserrat text-[10px] tracking-[0.15em] text-[#7A5C44] uppercase">
                  12 de setembro de 2026
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full">
        {/* SECTION 2 — HERO SECTION (Redesigned) */}
        <section 
          ref={heroRef}
          className="relative w-full min-h-screen pt-[92px] grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden select-none bg-transparent"
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url('/Imagem_1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(255,249,236,0.92) 0%, rgba(255,249,236,0.68) 35%, rgba(255,249,236,0.12) 60%, transparent 100%)",
            }}
          />

          {/* Left Column (50% text) */}
          <div className="flex flex-col justify-start items-start text-left px-6 md:pl-[80px] md:pr-[48px] pt-[20px] pb-12 z-10 w-full max-w-[620px] md:max-w-none mx-auto md:mx-0">
            {/* BADGE SUPERIOR */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-[18px] font-montserrat text-[10px] tracking-[0.25em] uppercase text-[#7A5C44]"
            >
              IMERSÃO PRESENCIAL <span className="text-[#AE8625]">✦</span> 12 DE SETEMBRO DE 2026 <span className="text-[#AE8625]">✦</span> BARRA MANSA
            </motion.div>

            {/* TÍTULO */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="font-cormorant text-5xl md:text-[72px] font-weight-500 text-[#2C1A0E] leading-[0.95] tracking-[-0.01em] mt-2 select-none"
            >
              Despertar<br />
              <motion.span
                className="italic bg-[linear-gradient(105deg,#8A6A1E_0%,#C9A227_28%,#F7EF8A_50%,#C9A227_72%,#8A6A1E_100%)] bg-clip-text text-transparent bg-[length:220%_auto] inline-block pb-2"
                style={{ filter: "drop-shadow(0 2px 10px rgba(174,134,37,0.28))" }}
                animate={{ backgroundPosition: ["0% center", "220% center"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              >
                da Aurora
              </motion.span>
            </motion.h1>

            {/* DIVISOR */}
            <div className="w-16 h-[1px] bg-[linear-gradient(to_right,#AE8625,transparent)] mt-[18px] mb-[18px]" />

            {/* SUBTÍTULO */}
            <h2 className="font-cormorant text-[20px] md:text-[24px] font-weight-500 text-[#3B2314] font-style-normal">
              Estrutura antes da expansão
            </h2>

            {/* PARÁGRAFO */}
            <p className="font-montserrat text-[14px] font-light text-[#7A5C44] leading-[1.7] max-w-[420px] mt-[16px]">
              Uma imersão presencial para mulheres que sustentam muito — e entendem que antes da expansão, precisam estar inteiras.
            </p>

            {/* BOTÕES */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="w-full max-w-[480px] flex flex-col md:flex-row gap-4 mt-[24px]"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex-1 font-montserrat text-[12px] font-medium tracking-[0.15em] uppercase bg-[linear-gradient(110deg,#2C1A0E,#3B2314)] text-[#F7EF8A] px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_28px_rgba(44,26,14,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(247,239,138,0.35)_50%,transparent_70%)] -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[800ms] ease-in-out" />
                <span>QUERO VIVER ESSA EXPERIÊNCIA</span>
                <span className="text-[#AE8625] text-xs">✦</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-montserrat text-[12px] font-medium tracking-[0.15em] uppercase border border-[#AE8625]/50 text-[#7A5C44] bg-transparent px-8 py-4 rounded-full transition-all duration-300 hover:border-[#AE8625] hover:text-[#AE8625] hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                ENTRAR PARA A LISTA
                </a>
            </motion.div>

            {/* FAIXA DE MINI-CARDS (moved into left column, compact) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="w-full max-w-[480px] flex items-center justify-between bg-white/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] px-6 py-3 shadow-[0_8px_32px_rgba(44,26,14,0.08)] mt-6"
            >
              <div className="flex-1 flex items-center justify-center gap-3">
                <CalendarBlank size={22} weight="thin" className="text-[#AE8625] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2C1A0E] leading-none">12 SET</span>
                  <span className="font-montserrat text-[10px] text-[#7A5C44] mt-1">de 2026</span>
                </div>
              </div>
              <div className="w-[1px] h-9 bg-[#AE8625]/20 shrink-0" />
              <div className="flex-1 flex items-center justify-center gap-3">
                <MapPin size={22} weight="thin" className="text-[#AE8625] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2C1A0E] leading-none">BARRA MANSA</span>
                  <span className="font-montserrat text-[10px] text-[#7A5C44] mt-1">RJ</span>
                </div>
              </div>
              <div className="w-[1px] h-9 bg-[#AE8625]/20 shrink-0" />
              <div className="flex-1 flex items-center justify-center gap-3">
                <UsersThree size={22} weight="thin" className="text-[#AE8625] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2C1A0E] leading-none">VAGAS</span>
                  <span className="font-montserrat text-[10px] text-[#7A5C44] mt-1">limitadas</span>
                </div>
              </div>
              <div className="w-[1px] h-9 bg-[#AE8625]/20 shrink-0" />
              <div className="flex-1 flex items-center justify-center gap-3">
                <Gift size={22} weight="thin" className="text-[#AE8625] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2C1A0E] leading-none">BRINDES</span>
                  <span className="font-montserrat text-[10px] text-[#7A5C44] mt-1">exclusivos</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column (50% photo placeholder) */}
          <div className="w-full h-[450px] md:h-full relative overflow-hidden md:rounded-bl-[24px] z-10">
            {/* Parallax block: smaller centered photo */}
            <motion.div
                style={{ y: yHeroPhoto }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[57.5%] flex flex-col items-center justify-center bg-[linear-gradient(155deg,rgba(237,224,202,0.85)_0%,rgba(220,201,168,0.85)_45%,rgba(201,176,132,0.85)_100%)] p-6 text-center relative select-none rounded-2xl overflow-hidden"
              >
              {/* Glow externo sutil */}
              <div className="absolute inset-0 blur-[50px] bg-[#E8D9C0]/30 pointer-events-none z-0" />
              
              {/* Cortina de luz de janela */}
              <div className="absolute top-0 right-0 w-[60%] h-full bg-[linear-gradient(115deg,transparent_25%,rgba(243,233,215,0.65)_65%,rgba(239,227,201,0.90)_100%)] pointer-events-none z-0" />
              
              {/* Feixes diagonais de luz */}
              <div className="absolute top-[-30%] right-0 w-[60%] h-[160%] pointer-events-none z-0 overflow-hidden">
                <div className="absolute rotate-[18deg] w-[90px] h-[160%] bg-[linear-gradient(to_bottom,rgba(247,239,138,0.20),transparent)] blur-[24px] top-0 right-[240px]" />
                <div className="absolute rotate-[18deg] w-[90px] h-[160%] bg-[linear-gradient(to_bottom,rgba(247,239,138,0.20),transparent)] blur-[24px] top-0 right-[160px]" />
                <div className="absolute rotate-[18deg] w-[90px] h-[160%] bg-[linear-gradient(to_bottom,rgba(247,239,138,0.20),transparent)] blur-[24px] top-0 right-[80px]" />
              </div>

              {/* Bokeh dourado interno */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {[
                  { top: '10%', right: '15%', size: 'w-[14px] h-[14px]', bg: 'bg-[#AE8625]/30', duration: 4.5 },
                  { top: '25%', right: '28%', size: 'w-[8px] h-[8px]', bg: 'bg-[#F7EF8A]/40', duration: 6.2 },
                  { top: '15%', right: '35%', size: 'w-[12px] h-[12px]', bg: 'bg-[#C4A882]/35', duration: 5.0 },
                  { top: '8%', right: '22%', size: 'w-[16px] h-[16px]', bg: 'bg-[#AE8625]/30', duration: 7.5 },
                  { top: '30%', right: '18%', size: 'w-[10px] h-[10px]', bg: 'bg-[#F7EF8A]/40', duration: 5.8 },
                  { top: '22%', right: '12%', size: 'w-[6px] h-[6px]', bg: 'bg-[#C4A882]/35', duration: 6.5 }
                ].map((c, idx) => (
                  <motion.div
                    key={idx}
                    className={`absolute rounded-full blur-[2px] ${c.size} ${c.bg}`}
                    style={{ top: c.top, right: c.right }}
                    animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
                    transition={{ duration: c.duration, repeat: Infinity, delay: idx * 0.4 }}
                  />
                ))}
              </div>

              {/* Arco decorativo */}
              <svg className="absolute top-0 right-0 w-[150px] h-[150px] pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 100 0 A 100 100 0 0 0 0 100" stroke="rgba(174,134,37,0.40)" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Centro do placeholder */}
              <div className="flex flex-col items-center justify-center relative z-20">
                <svg width="48" height="48" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#AE8625] opacity-25">
                  <path
                    d="M21 24L11 12L24 17L35 6L46 17L59 12L49 24 C44 25.5, 26 25.5, 21 24 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M23.5 24 C28 25, 42 25, 46.5 24"
                    stroke="#F7EF8A"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 28.5L37.5 31L35 33.5L32.5 31Z"
                    fill="currentColor"
                  />
                  <circle cx="35" cy="31" r="0.8" fill="#F7EF8A" />
                </svg>
                <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#7A5C44]/50 uppercase mt-3">
                  FOTO DE LARISSA
                </span>
                <span className="font-montserrat text-[9px] tracking-[0.25em] text-[#7A5C44]/40 uppercase mt-1">
                  [ EM BREVE ]
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="w-full h-[2px] bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.85)_35%,#FFFFFF_50%,rgba(255,255,255,0.85)_65%,rgba(255,255,255,0.3)_90%,transparent_100%)] shadow-[0_0_18px_rgba(255,255,255,0.9),0_0_10px_rgba(255,250,235,0.7),0_0_30px_rgba(247,239,138,0.3)] relative z-30 mix-blend-mode-screen" style={{ mixBlendMode: 'screen' }} />

      {/* SECTION 3 — PARA QUEM É ESSA EXPERIÊNCIA */}
      <section id="para-quem-e" className="relative w-full py-16 px-6 md:px-12 bg-transparent select-none z-20">
        <div className="max-w-[1152px] mx-auto -mt-10 bg-white/45 backdrop-blur-[20px] border border-white/70 rounded-[32px] px-8 md:px-[56px] py-[56px] shadow-[0_24px_70px_rgba(44,26,14,0.12)] text-center relative z-20">
          
          {/* Eyebrow centralizado */}
          <div className="flex justify-center items-center gap-1.5 mb-4">
            <span className="text-[#AE8625]">✦</span>
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#AE8625]">PARA QUEM É ESSA EXPERIÊNCIA</span>
          </div>

          {/* Título central */}
          <h2 className="font-cormorant text-3xl md:text-[44px] text-[#2C1A0E] leading-[1.1] max-w-[600px] mx-auto -tracking-[0.01em]">
            Existe uma mulher por trás de tudo o que ela sustenta.
          </h2>

          {/* Subtexto */}
          <p className="font-montserrat text-[13px] text-[#7A5C44] max-w-[520px] mx-auto mt-[16px] leading-relaxed">
            Para mulheres que funcionam bem externamente, mas carregam silenciosamente o peso de sustentar tudo.
          </p>

          {/* Grid de 5 colunas com animação e divisores */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              {
                icon: Heart,
                name: "MÃES",
                desc: "Que sustentam muito emocionalmente."
              },
              {
                icon: Briefcase,
                name: "EMPRESÁRIAS",
                desc: "Que estão crescendo sem se sentirem inteiras."
              },
              {
                icon: UsersThree,
                name: "LÍDERES",
                desc: "Que lideram pessoas enquanto lidam com suas próprias batalhas."
              },
              {
                icon: BookOpen,
                name: "PASTORAS",
                desc: "Que cuidam de muitos e se esquecem de si mesmas."
              },
              {
                icon: Sparkle,
                name: "MULHERES EM EXPANSÃO",
                desc: "Que desejam alinhamento emocional e espiritual."
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col items-center px-4 text-center after:hidden md:after:block md:after:absolute md:after:top-1/2 md:after:-translate-y-1/2 md:after:right-0 md:after:w-[1px] md:after:h-[64px] md:after:bg-[#AE8625]/20 last:after:hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <col.icon weight="thin" size={30} className="text-[#AE8625]" />
                <h3 className="font-montserrat text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2C1A0E] mt-4 leading-none">
                  {col.name}
                </h3>
                <p className="font-montserrat text-[11px] text-[#7A5C44] leading-[1.6] mt-2">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* SECTION 4 — FAIXA DE CITAÇÃO ESCURA */}
      <section className="relative w-full py-24 bg-[#2C1A0E] overflow-hidden select-none">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/Imagem_6.png')" }}
          />
          <div className="absolute inset-0 bg-[#2C1A0E]/45" />
        </div>
        
        {/* placeholder imagem velas/vasos: aplicar bg cover + overlay rgba(44,26,14,0.75) */}

        {/* 14 partículas bokeh */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[
            { top: '15%', left: '10%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/20', duration: 4.8, delay: 0.1 },
            { top: '35%', left: '80%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/15', duration: 6.2, delay: 0.5 },
            { top: '70%', left: '25%', size: 'w-1.5 h-1.5', bg: 'bg-[#AE8625]/20', duration: 5.5, delay: 0.2 },
            { top: '80%', left: '70%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/15', duration: 7.0, delay: 0.8 },
            { top: '20%', left: '60%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/20', duration: 5.0, delay: 0.3 },
            { top: '55%', left: '85%', size: 'w-1.5 h-1.5', bg: 'bg-[#F7EF8A]/15', duration: 4.5, delay: 0.6 },
            { top: '90%', left: '40%', size: 'w-2.5 h-2.5', bg: 'bg-[#AE8625]/20', duration: 6.5, delay: 0.4 },
            { top: '45%', left: '15%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/15', duration: 5.8, delay: 0.7 },
            { top: '10%', left: '30%', size: 'w-1.5 h-1.5', bg: 'bg-[#AE8625]/20', duration: 4.2, delay: 0.9 },
            { top: '65%', left: '50%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/15', duration: 6.0, delay: 0.1 },
            { top: '30%', left: '40%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/20', duration: 5.4, delay: 0.3 },
            { top: '75%', left: '90%', size: 'w-1.5 h-1.5', bg: 'bg-[#F7EF8A]/15', duration: 4.9, delay: 0.7 },
            { top: '5%', left: '75%', size: 'w-2.5 h-2.5', bg: 'bg-[#AE8625]/20', duration: 6.1, delay: 0.2 },
            { top: '85%', left: '5%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/15', duration: 5.7, delay: 0.4 }
          ].map((c, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-full blur-[2px] ${c.size} ${c.bg}`}
              style={{ top: c.top, left: c.left }}
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Duas manchas de luz âmbar inferiores */}
        <div className="absolute bottom-[-40%] left-[-10%] w-[350px] h-[350px] rounded-full blur-[110px] bg-[#AE8625]/22 pointer-events-none z-0" />
        <div className="absolute bottom-[-40%] right-[-10%] w-[350px] h-[350px] rounded-full blur-[110px] bg-[#AE8625]/22 pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="font-cormorant text-[84px] text-[rgba(201,162,39,0.50)] leading-[0.5] select-none">“</span>
          
          <p className="font-cormorant italic text-3xl md:text-[42px] font-light text-[#F7EF8A] leading-[1.25] -tracking-[0.01em] -mt-2">
            Você não precisa de mais força. Você precisa de estrutura.
          </p>

          <div className="w-[80px] h-[1px] bg-[linear-gradient(to_right,transparent,#AE8625_30%,#F7EF8A_50%,#AE8625_70%,transparent)] my-[24px] mx-auto" />

          <span className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-[#C4A882]">
            — LARISSA FARINAZO
          </span>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[linear-gradient(to_right,transparent_0%,rgba(174,134,37,0.4)_15%,#F7EF8A_50%,rgba(174,134,37,0.4)_85%,transparent_100%)] shadow-[0_0_8px_rgba(247,239,138,0.5),0_0_4px_rgba(174,134,37,0.4)] relative z-30" />

      {/* SECTION 5 — O QUE VOCÊ VAI VIVER */}
      <section className="relative w-full py-20 px-6 md:px-12 bg-transparent select-none">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/Imagem_2.png')" }}
          />
          <div 
            className="absolute inset-0" 
            style={{ background: "linear-gradient(to bottom, rgba(255,249,236,0.55), rgba(255,249,236,0.45))" }}
          />
        </div>
        <div className="relative z-10 max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[48px] items-start">
          
          {/* Coluna Esquerda */}
          <div className="flex flex-col items-start text-left">
            <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#AE8625] mb-2 block">
              O QUE VOCÊ VAI VIVER
            </span>
            <h2 className="font-cormorant text-4xl md:text-[44px] text-[#2C1A0E] leading-tight -tracking-[0.01em] mt-2">
              Uma tarde que vai ficar.
            </h2>
            <p className="font-montserrat text-[13px] text-[#7A5C44] leading-[1.7] mt-6">
              Cada detalhe foi pensado para criar uma atmosfera de presença, consciência e alinhamento.
            </p>
            <button
              onClick={() => scrollToSection('sobre-larissa')}
              className="font-montserrat text-[11px] font-light tracking-[0.2em] uppercase border border-[#AE8625]/50 text-[#7A5C44] bg-transparent px-[28px] py-[12px] rounded-[4px] transition-all duration-300 hover:border-[#AE8625] hover:text-[#AE8625] hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-8"
            >
              SAIBA MAIS
            </button>
          </div>

          {/* Coluna Direita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
            {[
              { num: "01", text: "Imersão presencial de aproximadamente 4 horas" },
              { num: "02", text: "Ambiente elegante e cuidadosamente preparado" },
              { num: "03", text: "Cuidado do corpo com propósito" },
              { num: "04", text: "Conexão intencional entre mulheres" },
              { num: "05", text: "Coffee break e experiência acolhedora" },
              { num: "06", text: "Brindes exclusivos" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white/45 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-5 shadow-[0_6px_24px_rgba(44,26,14,0.07)] hover:shadow-[0_12px_36px_rgba(174,134,37,0.18)] hover:-translate-y-1 hover:border-[#AE8625]/30 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <span className="font-cormorant italic text-[32px] font-medium bg-[linear-gradient(110deg,#AE8625,#F7EF8A)] bg-clip-text text-transparent inline-block">
                  {card.num}
                </span>
                <p className="font-montserrat text-[12px] text-[#3B2314] leading-[1.6] mt-4">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 7 — INFORMAÇÕES DO EVENTO */}
      <section id="o-encontro" className="relative w-full py-16 px-6 md:px-12 bg-transparent select-none">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/Imagem_4.png')" }}
          />
          <div className="absolute inset-0 bg-[#FFF9EC]/50" />
        </div>
        <div className="relative z-10 max-w-[1152px] mx-auto flex flex-col items-center">
          
          <div className="flex justify-center mb-6">
            <Eyebrow text="INFORMAÇÕES DO EVENTO" />
          </div>

          <div className="w-full bg-white/40 backdrop-blur-[20px] border border-white/60 rounded-[28px] py-10 px-6 shadow-[0_20px_60px_rgba(44,26,14,0.10)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-0">
              {[
                {
                  icon: CalendarBlank,
                  label: "DATA",
                  val: "12 de setembro de 2026"
                },
                {
                  icon: Clock,
                  label: "HORÁRIO",
                  val: "Às 16h"
                },
                {
                  icon: MapPin,
                  label: "LOCAL",
                  val: "Barra Mansa — RJ / Av. Tenente José Eduardo, 461"
                },
                {
                  icon: CoatHanger,
                  label: "DRESS CODE",
                  val: "Elegante, tons neutros"
                },
                {
                  icon: UsersThree,
                  label: "VAGAS",
                  val: "Limitadas"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center px-4 after:hidden md:after:block md:after:absolute md:after:top-1/2 md:after:-translate-y-1/2 md:after:right-0 md:after:w-[1px] md:after:h-[56px] md:after:bg-[#AE8625]/15 last:after:hidden">
                  <div className="w-14 h-14 rounded-full border border-[#AE8625]/25 flex items-center justify-center text-[#AE8625] bg-white/10">
                    <item.icon weight="thin" size={26} />
                  </div>
                  <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2C1A0E] mt-4 leading-none">
                    {item.label}
                  </span>
                  <span className="font-montserrat text-[11px] text-[#7A5C44] mt-2 font-light">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="w-full h-[2px] bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.25)_10%,rgba(255,255,255,0.75)_35%,#FFFBF0_50%,rgba(255,255,255,0.75)_65%,rgba(255,255,255,0.25)_90%,transparent_100%)] shadow-[0_0_18px_rgba(255,255,255,0.7),0_0_10px_rgba(247,239,138,0.8),0_0_30px_rgba(174,134,37,0.5)] relative z-30" />

      {/* SECTION: CONVIDADA ESPECIAL */}
      <section className="relative w-full bg-transparent flex flex-col lg:flex-row lg:min-h-[600px] items-stretch overflow-hidden select-none">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/Imagem_5.png')" }}
          />
          <div className="absolute inset-0 bg-[#FFF9EC]/50" />
        </div>
        
        {/* COLUNA ESQUERDA — IMAGEM */}
        <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center py-12 lg:py-0 relative z-10">
          <div className="w-[280px] h-[360px] relative rounded-2xl overflow-hidden border-2 border-dashed border-[#AE8625]/35 bg-[#D4B483] flex flex-col justify-center items-center select-none shadow-md transition-transform duration-300 hover:scale-[1.01]">
            <span className="font-montserrat text-[0.7rem] tracking-wider text-[#7A5C44]/80 uppercase font-semibold">
              [ FOTO DA PALESTRANTE ]
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-4 flex flex-col items-start text-left z-10">
              <span className="font-cormorant text-[#AE8625] text-[1.8rem] leading-[1] font-semibold mb-0.5">“</span>
              <p className="font-cormorant italic text-[0.9rem] text-white leading-snug font-light pl-1 pr-1">
                Existe uma história por trás de toda mulher <span className="text-[#FFF9EC]/90 font-normal">que inspira</span> outras mulheres.
              </p>
              <span className="font-cormorant text-[#AE8625] text-[1.8rem] leading-[1] font-semibold self-end mt-0.5">”</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — CONTEÚDO */}
        <div className="relative z-10 w-full lg:w-1/2 bg-transparent px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 flex flex-col justify-center items-start text-left">
          <span className="font-montserrat text-[0.75rem] font-semibold tracking-[0.2em] text-[#AE8625] uppercase mb-5">
            CONVIDADA ESPECIAL
          </span>
          <h2 className="font-cormorant font-normal text-[#3B2314] text-[2.5rem] md:text-[3rem] leading-[1.1] mb-8">
            Uma presença<br />
            <span className="italic text-[#AE8625]">que inspira.</span>
          </h2>
          <div className="h-[1px] w-[60px] bg-[#D4B483] mb-7" />
          <h3 className="font-cormorant font-medium text-[1.5rem] text-[#3B2314] mb-1">
            Mariana Valle
          </h3>
          <p className="font-montserrat text-[0.85rem] text-[#7A5C44] tracking-[0.05em] mb-6">
            Psicóloga • Mentora • Escritora
          </p>
          <div className="h-[1px] w-full bg-[#E8D9C4] mb-6" />
          <div className="flex flex-col gap-4 font-montserrat text-[0.9rem] leading-[1.8] text-[#5C4033] mb-8">
            <p>
              Sua trajetória é marcada pelo compromisso em ajudar mulheres a desenvolverem maturidade emocional, identidade e posicionamento.
            </p>
            <p>
              Ao longo dos últimos anos, tem impactado centenas de mulheres através de atendimentos, mentorias, palestras e experiências transformadoras, conduzindo conversas profundas sobre propósito, relacionamentos, desenvolvimento pessoal e crescimento sustentável.
            </p>
            <p>
              Durante o Despertar da Aurora, sua presença contribuirá para ampliar reflexões importantes sobre aquilo que sustenta uma mulher por dentro antes de tudo aquilo que ela sustenta por fora.
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="font-cormorant italic text-[1.05rem] text-[#AE8625]">
              Uma voz que inspira, acolhe e fortalece.
            </span>
            <div className="h-[1px] w-[200px] bg-[#AE8625] mt-3" />
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[linear-gradient(to_right,transparent_0%,rgba(174,134,37,0.4)_15%,#F7EF8A_50%,rgba(174,134,37,0.4)_85%,transparent_100%)] shadow-[0_0_8px_rgba(247,239,138,0.5),0_0_4px_rgba(174,134,37,0.4)] relative z-30" />

      {/* SECTION: PILARES & SOBRE LARISSA LADO A LADO */}
      <section id="a-proposta" className="relative w-full py-20 px-6 md:px-12 bg-transparent select-none">
        <div className="max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px] items-stretch">
          {/* CARD ESQUERDO (CLARO) */}
          <div className="bg-white/45 backdrop-blur-[12px] border border-white/60 rounded-[28px] p-[32px] shadow-[0_20px_60px_rgba(44,26,14,0.10)] flex flex-col justify-between h-full">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-1.5">
                <span className="text-[#AE8625]">✦</span>
                <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#AE8625]">CORPO ✦ ALMA ✦ ESPÍRITO</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <h2 className="font-cormorant text-3xl md:text-[34px] font-weight-500 text-[#2C1A0E] leading-tight -tracking-[0.01em]">
                    A mulher precisa estar inteira para sustentar o que Deus confiou a ela.
                  </h2>
                  <p className="font-montserrat text-[13px] font-light text-[#7A5C44] leading-relaxed mt-2">
                    Existem dimensões que precisam estar alinhadas antes da expansão.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {[
                    { title: "CORPO", text: "Estrutura física também é sustentação.", icon: Leaf },
                    { title: "ALMA", text: "A vida emocional precisa de consciência.", icon: Heart },
                    { title: "ESPÍRITO", text: "Posicionamento espiritual não é excesso. É direção.", icon: Sparkle }
                  ].map((dim, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-center shrink-0 border border-[#AE8625]/30 rounded-full w-14 h-14 text-[#AE8625]">
                        <dim.icon weight="thin" size={26} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-montserrat text-[13px] font-semibold tracking-[0.15em] uppercase text-[#2C1A0E]">{dim.title}</span>
                        <p className="font-montserrat text-[13px] text-[#7A5C44] leading-relaxed mt-2">{dim.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full mt-8 pt-8 border-t border-[#AE8625]/20">
              <p className="font-cormorant italic text-[19px] text-[#AE8625] text-center leading-[1.7]">
                Quando corpo, alma e espírito estão alinhados, a mulher sustenta sem se esvaziar.
              </p>

              <div className="mt-8 flex flex-col items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#AE8625] opacity-60">
                  <path
                    d="M21 24L11 12L24 17L35 6L46 17L59 12L49 24 C44 25.5, 26 25.5, 21 24 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M23.5 24 C28 25, 42 25, 46.5 24"
                    stroke="#F7EF8A"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 28.5L37.5 31L35 33.5L32.5 31Z"
                    fill="currentColor"
                  />
                  <circle cx="35" cy="31" r="0.8" fill="#F7EF8A" />
                </svg>
                <span className="font-montserrat text-[11px] tracking-[0.3em] uppercase text-[#AE8625]">MÉTODO AURORA</span>
                <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-[#7A5C44]">Estrutura • Consciência • Direção</span>
              </div>
            </div>
          </div>

          {/* CARD DIREITO (ESCURO) */}
          <div id="sobre-larissa" className="rounded-[28px] overflow-visible relative bg-[linear-gradient(160deg,#3B2314_0%,#2C1A0E_60%,#1A0F07_100%)] p-[32px] shadow-[0_20px_50px_rgba(44,26,14,0.15)] flex flex-col justify-between">
            {/* Bokeh particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {[
                { top: '10%', left: '15%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/20', delay: 0.1 },
                { top: '30%', left: '80%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/15', delay: 0.4 },
                { top: '60%', left: '12%', size: 'w-1.5 h-1.5', bg: 'bg-[#C4A882]/15', delay: 0.2 },
                { top: '85%', left: '70%', size: 'w-2.5 h-2.5', bg: 'bg-[#F7EF8A]/15', delay: 0.6 },
                { top: '20%', left: '50%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/20', delay: 0.3 },
                { top: '75%', left: '40%', size: 'w-3 h-3', bg: 'bg-[#C4A882]/20', delay: 0.5 }
              ].map((b, bIdx) => (
                <motion.div
                  key={bIdx}
                  className={`absolute rounded-full blur-[1.5px] ${b.size} ${b.bg}`}
                  style={{ top: b.top, left: b.left }}
                  animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.25, 1] }}
                  transition={{ duration: 5 + bIdx * 0.5, repeat: Infinity, delay: b.delay }}
                />
              ))}
            </div>

            {/* Ambient light blob top right */}
            <div className="absolute top-[-20%] right-[-20%] w-[250px] h-[250px] rounded-full blur-[80px] bg-[#AE8625]/20 pointer-events-none z-0" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="text-[#AE8625]">✦</span>
                <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#AE8625]">SOBRE LARISSA</span>
              </div>
              
              <h2 className="font-cormorant text-3xl md:text-[26px] font-weight-500 text-[#F7EF8A] mt-4 -tracking-[0.01em]">
                Larissa Farinazo
              </h2>
              
              <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-[#AE8625] mt-2 mb-6">
                PSICÓLOGA • MENTORA • IDEALIZADORA DO MÉTODO AURORA
              </p>

              <div className="flex flex-col gap-3 font-montserrat text-[13px] font-light text-[#C4A882] leading-[1.7]">
                <p>
                  Larissa Farinazo é psicóloga, mentora e idealizadora do Método Aurora. Seu trabalho é voltado para conduzir mulheres que sustentam grandes esferas de responsabilidade a desenvolverem estrutura emocional sólida e alinhamento interno.
                </p>
                <p>
                  Acreditando profundamente na integração equilibrada da psicologia clínica, inteligência emocional e fundamentos da espiritualidade cristã, Larissa atua guiando mentorandas e alunas a restabelecerem a conexão com suas identidades em Deus e viverem com maturidade, clareza e real presença.
                </p>
              </div>
            </div>

            {/* FOTO PLACEHOLDER */}
            <div className="relative z-10 mt-6">
              <div className="w-full rounded-[16px] h-80 bg-[linear-gradient(160deg,rgba(122,92,68,0.40),#2C1A0E)] shadow-[inset_0_0_0_1px_rgba(174,134,37,0.20)] flex flex-col items-center justify-center text-center p-6 select-none relative overflow-hidden">
                <svg width="60" height="25" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#AE8625] opacity-20 mb-3">
                  <path
                    d="M21 24L11 12L24 17L35 6L46 17L59 12L49 24 C44 25.5, 26 25.5, 21 24 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M23.5 24 C28 25, 42 25, 46.5 24"
                    stroke="#F7EF8A"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 28.5L37.5 31L35 33.5L32.5 31Z"
                    fill="currentColor"
                  />
                  <circle cx="35" cy="31" r="0.8" fill="#F7EF8A" />
                </svg>
                <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#7A5C44]/50 uppercase mt-3">FOTO DE LARISSA</span>
                <span className="font-montserrat text-[9px] tracking-[0.25em] text-[#7A5C44]/40 uppercase mt-1">[ EM BREVE ]</span>
              </div>

              {/* CARD DE DEPOIMENTO SOBREPOSTO */}
              <motion.div 
                className="static md:absolute bottom-[-24px] right-[-12px] w-full md:max-w-[280px] bg-[#1A0F07]/85 backdrop-blur-[16px] border border-[#AE8625]/30 rounded-[12px] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.50)] mt-5 md:mt-0 z-20 text-left"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-cormorant italic text-[14px] text-[#F7EF8A]/90 leading-relaxed">
                  "Larissa tem uma forma única de conduzir mulheres de volta para si mesmas. Uma escuta profunda que transforma."
                </p>
                <div className="font-montserrat text-[9px] tracking-[0.25em] text-[#C4A882] uppercase mt-3">
                  — DEPOIMENTO REAL
                </div>
                <div className="flex gap-1.5 mt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#AE8625]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A5C44]/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A5C44]/40" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      <div className="w-full h-[2px] bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.85)_35%,#FFFFFF_50%,rgba(255,255,255,0.85)_65%,rgba(255,255,255,0.3)_90%,transparent_100%)] shadow-[0_0_18px_rgba(255,255,255,0.9),0_0_10px_rgba(255,250,235,0.7),0_0_30px_rgba(247,239,138,0.3)] relative z-30" style={{ mixBlendMode: 'screen' }} />

      {/* SECTION 6 — GALERIA PREMIUM */}
      <SectionWrapper id="fotos-secao" variant="dark" paddingClassName="py-6">
        <CrownDivider glow={true} className="mb-2" />
        <GalleryCarousel />
        <CrownDivider glow={true} className="mt-2" />
      </SectionWrapper>

      <div className="w-full h-[1px] bg-[linear-gradient(to_right,transparent_0%,rgba(174,134,37,0.4)_15%,#F7EF8A_50%,rgba(174,134,37,0.4)_85%,transparent_100%)] shadow-[0_0_8px_rgba(247,239,138,0.5),0_0_4px_rgba(174,134,37,0.4)] relative z-30" />

      {/* SECTION 8 — CTA FINAL ESCURO HORIZONTAL */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Imagem_3.png')" }}
          />
          <div className="absolute inset-0 bg-[#1A0F07]/55" />
        </div>

        <section
          className="relative w-full py-20 overflow-hidden select-none"
        >
        {/* Golden corner SVG arc */}
        <svg 
          className="absolute top-0 right-0 w-[35vw] h-full pointer-events-none opacity-40 z-0" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path d="M 100 0 A 100 100 0 0 0 0 100" stroke="rgba(174,134,37,0.40)" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Gold bokeh particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[
            { top: '15%', left: '10%', size: 'w-2 h-2', delay: 0.1 },
            { top: '35%', left: '85%', size: 'w-3 h-3', delay: 0.4 },
            { top: '75%', left: '20%', size: 'w-1.5 h-1.5', delay: 0.2 },
            { top: '80%', left: '60%', size: 'w-2 h-2', delay: 0.5 },
            { top: '25%', left: '45%', size: 'w-3 h-3', delay: 0.3 }
          ].map((c, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-full bg-[#F7EF8A]/15 blur-[1px] ${c.size}`}
              style={{ top: c.top, left: c.left }}
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 5 + idx * 0.5, repeat: Infinity, delay: c.delay }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1152px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-[32px]">
          {/* Left Side: Headline & subtitle */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="flex items-center gap-1.5">
              <span className="text-[#AE8625]">✦</span>
              <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#AE8625]">O CHAMADO</span>
            </div>
            <h2 className="font-cormorant italic text-3xl md:text-[38px] font-light text-[#FFF9EC] leading-[1.3] -tracking-[0.01em] mt-3">
              Algo importante está sendo construído. E você foi chamada para estar aqui.
            </h2>
            <p className="font-montserrat text-[12px] font-light text-[#C4A882] mt-4 leading-relaxed max-w-lg">
              A mulher que sustenta muito também necessita de um espaço de sustentação, cuidado e alinhamento prático. Reserve seu lugar nesta experiência restauradora.
            </p>
          </div>

          {/* Right Side: Gradient Button */}
          <div className="shrink-0 w-full md:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[13px] font-semibold tracking-[0.2em] uppercase bg-[linear-gradient(110deg,#AE8625,#F7EF8A,#AE8625)] bg-[size:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] text-[#2C1A0E] w-full md:w-auto px-[48px] py-[20px] rounded-[4px] shadow-[0_8px_30px_rgba(174,134,37,0.40)] hover:scale-[1.03] transition-all duration-[600ms] ease-in-out flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>QUERO VIVER ESSA EXPERIÊNCIA</span>
              <span className="text-[10px]">✦</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden py-10 px-12 text-left z-10 select-none">
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
          
          {/* Col 1: Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <DespertarLogo lightBg={false} layout="horizontal" size="sm" />
            <p className="font-montserrat text-[13px] font-light text-[#C4A882]/60 tracking-wider">
              Estrutura antes da expansão
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-montserrat text-[10px] font-light tracking-[0.22em] text-[#AE8625] uppercase mb-3">
              NAVEGAÇÃO
            </span>
            <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start">
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
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-montserrat text-[10px] font-light tracking-[0.22em] text-[#AE8625] uppercase mb-3">
              CONTATO
            </span>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/larifarinazo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-montserrat text-[14px] font-light text-[#C4A882] hover:text-[#F7EF8A] transition-colors duration-200"
              >
                <InstagramLogo size={18} weight="light" className="text-[#AE8625]" />
                <span>@larifarinazo</span>
              </a>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-montserrat text-[14px] font-light text-[#C4A882] hover:text-[#F7EF8A] transition-colors duration-200"
              >
                <WhatsappLogo size={18} weight="light" className="text-[#AE8625]" />
                <span>(24) 98811-2168</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-6xl mx-auto mt-6 flex justify-center">
          <p className="font-montserrat text-[11px] font-light text-[#C4A882]/40 text-center">
            © 2026 Despertar da Aurora · Todos os direitos reservados · Larissa Farinazo
          </p>
        </div>
      </footer>
    </div>

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
              className="relative w-full max-w-[480px] bg-[#FFF9EC]/97 p-8 md:p-10 z-10 flex flex-col justify-center border border-[#AE8625]/20 shadow-2xl rounded-[28px]"
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

    </div>
  );
}
export default DespertarDaAurora;
