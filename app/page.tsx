"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Menu, Moon, Sun, X, Phone, Mail } from "lucide-react";

const phrases = [
  "feel right.",
  "drive results.",
  "scale smoothly.",
  "delight users.",
];

const toolkit = [
  { num: "01", name: "React" },
  { num: "02", name: "Next.js" },
  { num: "03", name: "TypeScript" },
  { num: "04", name: "Tailwind CSS" },
  { num: "05", name: "Motion" },
  { num: "06", name: "Design systems" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setCharIndex((prev) => prev + 1);
          setTypingSpeed(75);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setTypingSpeed(40);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(350);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingSpeed]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300 relative overflow-x-hidden font-sans"
      style={{
        backgroundColor: darkMode ? "#12131A" : "#F6F4EE",
        color: darkMode ? "#FFFFFF" : "#121212",
      }}
    >
      {/* Keyframe Animations */}
      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        .animate-orbit {
          animation: spinSlow 12s linear infinite;
        }
        .animate-orbit-reverse {
          animation: spinReverse 8s linear infinite;
        }
        .animate-float-card {
          animation: floatCard 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Header / Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
        style={{
          backgroundColor: darkMode ? "rgba(18, 19, 26, 0.85)" : "rgba(246, 244, 238, 0.9)",
          borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight flex items-center gap-0.5 group"
            style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
          >
            OI <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5E4D] ml-0.5 group-hover:scale-125 transition-transform" />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
            <a
              href="#work"
              className="hover:opacity-75 transition-opacity"
              style={{ color: darkMode ? "#E5E5E5" : "#121212" }}
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:opacity-75 transition-opacity"
              style={{ color: darkMode ? "#E5E5E5" : "#121212" }}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:opacity-75 transition-opacity"
              style={{ color: darkMode ? "#E5E5E5" : "#121212" }}
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full border transition-all hover:scale-110 active:scale-95"
              style={{
                borderColor: darkMode ? "#374151" : "#D1D5DB",
                color: darkMode ? "#FFFFFF" : "#121212",
              }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="text-sm font-bold border-b-2 hover:opacity-75 transition-all pb-0.5 flex items-center gap-1.5 group"
              style={{
                borderColor: darkMode ? "#FFFFFF" : "#121212",
                color: darkMode ? "#FFFFFF" : "#121212",
              }}
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border"
              style={{
                borderColor: darkMode ? "#374151" : "#D1D5DB",
                color: darkMode ? "#FFFFFF" : "#121212",
              }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-b px-6 py-6 space-y-4 shadow-xl"
            style={{
              backgroundColor: darkMode ? "#12131A" : "#F6F4EE",
              borderColor: darkMode ? "#262626" : "#E5E5E5",
            }}
          >
            <a
              href="#work"
              onClick={closeMobileMenu}
              className="block text-lg font-bold"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              Work
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block text-lg font-bold"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block text-lg font-bold"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              Contact
            </a>
            <div
              className="pt-4 border-t"
              style={{ borderColor: darkMode ? "#262626" : "#E5E5E5" }}
            >
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-2 text-[#635BFF] font-bold"
              >
                Let's work together
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7 space-y-8">
            <div
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase font-mono"
              style={{ color: darkMode ? "#9CA3AF" : "#121212" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              AVAILABLE FOR SELECT PROJECTS
            </div>

            <h1
              className="text-5xl sm:text-7xl xl:text-8xl font-serif font-normal leading-[1.05] tracking-tight"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              I build digital <br className="hidden sm:inline" />
              experiences that{" "}
              <br className="inline sm:hidden" />
              <span className="italic text-[#635BFF] dark:text-[#8171FF] font-semibold relative inline-block">
                {phrases[textIndex].substring(0, charIndex)}
                <span className="inline-block w-[3px] h-[0.85em] bg-[#FF5E4D] ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            <div className="flex items-start gap-4 pt-2 max-w-xl">
              <div
                className="w-10 h-[2px] mt-3.5 flex-shrink-0"
                style={{ backgroundColor: darkMode ? "#525252" : "#121212" }}
              />
              <p
                className="text-base sm:text-lg leading-relaxed font-medium"
                style={{ color: darkMode ? "#D4D4D4" : "#121212" }}
              >
                I'm{" "}
                <strong
                  className="font-bold"
                  style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
                >
                  Ojo Israel
                </strong>
                , a frontend developer crafting thoughtful, high-performance
                products with React and Next.js.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-3">
              <a
                href="#work"
                className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase font-mono hover:opacity-80 transition-all group"
                style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
              >
                <span>Scroll to explore</span>
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono group-hover:rotate-45 transition-transform duration-300"
                  style={{ borderColor: darkMode ? "#404040" : "#121212" }}
                >
                  //
                </div>
              </a>
            </div>
          </div>

          {/* Right Floating Animated Code Window (MARKED ITEM) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md animate-float-card group cursor-pointer">
              {/* Animated Lime Accent Shadow with Pulse Effect */}
              <div className="absolute inset-0 bg-[#CCFF00] rounded-2xl translate-x-3 translate-y-3 rotate-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-3 animate-pulse-glow" />

              {/* Code Box */}
              <div className="relative bg-[#12131A] text-gray-200 rounded-2xl p-6 shadow-2xl border border-neutral-800 font-mono text-xs sm:text-sm leading-relaxed transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-125 transition-transform" />
                  </div>
                  <span className="text-neutral-400 font-sans text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    craft.tsx
                  </span>
                  <Code2 className="w-4 h-4 text-neutral-500 group-hover:text-[#CCFF00] transition-colors" />
                </div>

                <div className="space-y-2 font-mono">
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">01</span>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">craft</span> = &#123;
                  </div>
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">02</span>
                    <span className="ml-4 text-purple-300">curiosity</span>:{" "}
                    <span className="text-sky-300">true</span>,
                  </div>
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">03</span>
                    <span className="ml-4 text-purple-300">details</span>:{" "}
                    <span className="text-[#CCFF00]">"intentional"</span>,
                  </div>
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">04</span>
                    <span className="ml-4 text-purple-300">experience</span>:{" "}
                    <span className="text-amber-300">"seamless"</span>,
                  </div>
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">05</span>
                    &#125;;
                  </div>
                  <div>
                    <span className="text-neutral-600 mr-4">06</span>
                  </div>
                  <div className="hover:bg-white/5 px-1 rounded transition-colors">
                    <span className="text-neutral-600 mr-4">07</span>
                    <span className="text-pink-400">export default</span>{" "}
                    <span className="text-blue-300">craft</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Selected Work Section */}
      <section
        id="work"
        className="py-20 max-w-7xl mx-auto px-6 lg:px-12 border-t"
        style={{ borderColor: darkMode ? "#262626" : "#D4D4D4" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
            >
              01 / SELECTED WORK
            </span>
            <h2
              className="text-4xl sm:text-6xl font-serif font-normal mt-2"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              Built with purpose.
            </h2>
          </div>
          <p
            className="text-sm md:text-base max-w-md leading-relaxed font-medium"
            style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
          >
            Every project is a balance of thoughtful design, clean code, and the small details that make a product memorable.
          </p>
        </div>

        <div className="space-y-24">
          {/* FinFlow */}
          <ProjectCard
            number="01"
            name="FinFlow"
            category="PRODUCT DESIGN · NEXT.JS"
            description="A focused finance dashboard that turns complex spending data into clear, useful decisions."
            background="#635BFF"
            darkMode={darkMode}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl text-slate-900 border border-slate-100 transition-transform duration-300 hover:scale-[1.01]">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                PORTFOLIO BALANCE
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
                $42,860.00
              </h3>
              <div className="h-20 w-full flex items-end">
                <svg className="w-full h-full text-[#635BFF]" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path d="M0,80 Q100,20 200,60 T400,20" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </ProjectCard>

          {/* Northstar */}
          <ProjectCard
            number="02"
            name="Northstar"
            category="WEB APP · REACT"
            description="A collaborative workspace designed to keep teams aligned, calm, and moving forward."
            background="#CCFF00"
            darkMode={darkMode}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl relative border border-slate-100 text-slate-900 transition-transform duration-300 hover:scale-[1.01]">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                SPRINT OVERVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6">
                Good morning, team.
              </h3>
              <div className="space-y-3">
                <div className="h-3 bg-neutral-100 rounded-full w-full" />
                <div className="h-3 bg-neutral-100 rounded-full w-4/5" />
                <div className="h-3 bg-neutral-100 rounded-full w-3/5" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#635BFF] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-xl font-mono animate-bounce">
                72% COMPLETE
              </div>
            </div>
          </ProjectCard>

          {/* Forma */}
          <ProjectCard
            number="03"
            name="Forma"
            category="E-COMMERCE · NEXT.JS"
            description="A refined storefront where bold editorial layouts meet a fast, frictionless shopping experience."
            background="#FF5E4D"
            darkMode={darkMode}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl border border-slate-100 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 transition-transform duration-300 hover:scale-[1.01]">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  NEW COLLECTION
                </span>
                <h4 className="text-3xl font-serif italic font-bold">
                  Objects for quiet living.
                </h4>
              </div>
              <div className="w-28 h-28 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#C59B73] animate-pulse" />
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 max-w-7xl mx-auto px-6 lg:px-12 border-t"
        style={{ borderColor: darkMode ? "#262626" : "#D4D4D4" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <span
              className="text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
            >
              02 / ABOUT
            </span>
            <h2
              className="text-4xl sm:text-6xl font-serif font-normal leading-tight"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              Design-minded.
              <br />
              <span className="italic text-[#FF5E4D] font-normal">
                Code-obsessed.
              </span>
            </h2>
          </div>

          <div
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed font-medium"
            style={{ color: darkMode ? "#D4D4D4" : "#121212" }}
          >
            <p
              className="text-xl font-bold"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              I turn ambitious ideas into interfaces people enjoy using.
            </p>
            <p>
              My work lives at the intersection of design and engineering. I care about scalable systems, meaningful motion, accessible experiences, and shipping work that makes an impact.
            </p>
            <p>
              From the first sketch to the final deploy, I bring a sharp eye, an open mind, and a bias toward making.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-bold text-sm border-b-2 pb-0.5 pt-2 group"
              style={{
                borderColor: darkMode ? "#FFFFFF" : "#121212",
                color: darkMode ? "#FFFFFF" : "#121212",
              }}
            >
              More about how I work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Toolkit Pills Section */}
      <section
        className="py-12 max-w-7xl mx-auto px-6 lg:px-12 border-t"
        style={{ borderColor: darkMode ? "#262626" : "#D4D4D4" }}
      >
        <span
          className="text-xs font-bold uppercase tracking-widest font-mono block mb-8"
          style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
        >
          MY TOOLKIT
        </span>

        <div className="flex flex-wrap gap-4">
          {toolkit.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 border rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-105 cursor-default hover:border-black dark:hover:border-white shadow-sm"
              style={{
                backgroundColor: darkMode ? "rgba(38, 38, 38, 0.6)" : "#E5E0D8",
                borderColor: darkMode ? "#404040" : "#C5C0B8",
                color: darkMode ? "#FFFFFF" : "#121212",
              }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
              >
                {skill.num}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner CTA Section with Orbiting Animated Balls */}
      <section id="contact" className="py-12 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#12131A] rounded-3xl p-8 sm:p-16 lg:p-20 text-white relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl">
          <div className="lg:col-span-8 z-10 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              HAVE A PROJECT IN MIND?
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif leading-tight text-white">
              Let's make something <br />
              <span className="italic text-[#CCFF00]">worth remembering.</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:israelojo899@gmail.com"
                className="bg-[#CCFF00] text-black font-bold text-sm px-6 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-lime-300 transition-all hover:scale-105 active:scale-95 group"
              >
                <Mail className="w-4 h-4" />
                <span>israelojo899@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/2349052168730"
                target="_blank"
                rel="noreferrer"
                className="bg-neutral-800 text-white border border-neutral-700 font-bold text-sm px-6 py-3.5 rounded-lg inline-flex items-center gap-2 hover:bg-neutral-700 transition-all hover:scale-105 active:scale-95 group"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 09052168730</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Animated Orbiting Ring Visual */}
          <div className="lg:col-span-4 relative flex justify-center items-center min-h-[260px]">
            {/* Outer Orbit Track */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-neutral-800 absolute flex justify-center items-center">
              
              {/* Animated Rotating Layer 1 (Orange Ball) */}
              <div className="absolute inset-0 w-full h-full animate-orbit">
                <div className="w-4 h-4 rounded-full bg-[#FF5E4D] absolute -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#FF5E4D]" />
              </div>

              {/* Inner Orbit Track */}
              <div className="w-48 h-48 rounded-full border border-neutral-800/80 absolute" />

              {/* Animated Rotating Layer 2 (Purple Ball in Reverse) */}
              <div className="absolute inset-0 w-full h-full animate-orbit-reverse">
                <div className="w-3.5 h-3.5 rounded-full bg-[#635BFF] absolute bottom-3 right-8 shadow-[0_0_12px_#635BFF]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: darkMode ? "#262626" : "#D4D4D4" }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs"
          style={{ color: darkMode ? "#737373" : "#121212" }}
        >
          <div
            className="flex items-center gap-1 font-bold text-base font-sans"
            style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
          >
            <span>OI</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5E4D]" />
          </div>

          <div className="font-bold">FRONTEND DEVELOPER · REACT & NEXT.JS</div>

          <div
            className="flex items-center gap-6 font-sans font-bold"
            style={{ color: darkMode ? "#E5E5E5" : "#121212" }}
          >
            <a href="#work" className="hover:underline">WORK</a>
            <a href="#about" className="hover:underline">ABOUT</a>
            <a href="#contact" className="hover:underline">CONTACT</a>
          </div>

          <div className="font-bold">© {new Date().getFullYear()} OJO ISRAEL</div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  number,
  name,
  category,
  description,
  background,
  darkMode,
  children,
}: {
  number: string;
  name: string;
  category: string;
  description: string;
  background: string;
  darkMode: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="space-y-6 group">
      <div
        className="rounded-3xl p-6 sm:p-12 lg:p-16 overflow-hidden flex justify-center items-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
        style={{ backgroundColor: background }}
      >
        <div className="w-full">{children}</div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-2">
        <div className="flex gap-4 items-start">
          <span
            className="text-xs font-mono font-bold"
            style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
          >
            {number}
          </span>
          <div>
            <h3
              className="text-3xl font-serif font-bold"
              style={{ color: darkMode ? "#FFFFFF" : "#121212" }}
            >
              {name}
            </h3>
            <p
              className="text-xs font-mono uppercase tracking-widest mt-1 font-bold"
              style={{ color: darkMode ? "#737373" : "#121212" }}
            >
              {category}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 max-w-md">
          <p
            className="text-sm leading-relaxed font-medium"
            style={{ color: darkMode ? "#A3A3A3" : "#121212" }}
          >
            {description}
          </p>
          <a
            href="#contact"
            className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{
              borderColor: darkMode ? "#404040" : "#121212",
              color: darkMode ? "#FFFFFF" : "#121212",
            }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
