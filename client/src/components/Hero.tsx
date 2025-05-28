import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";
import logoIberiaHub from "../assets/logo-iberiahub.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1500&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/50"></div>
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 text-center z-10 mt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Logo */}
        <motion.div 
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.6 
          }}
        >
          <img 
            src={logoIberiaHub} 
            alt="Logo IberiaHub" 
            className="mx-auto w-full h-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
          className="font-rajdhani font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">UNINDO OS ESPORTS</span>
          <br />
          <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">DA PENÍNSULA IBÉRICA</span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Começamos com CS2. A comunidade ibérica dos esports, unida e em expansão. Portugal 🇵🇹 e Espanha 🇪🇸 juntos no mesmo servidor.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#contact" 
            className="group inline-block bg-gradient-to-r from-[#FF2D55] to-[#FFCC00] text-white font-rajdhani font-bold text-lg md:text-xl px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[0_0_15px_#FF2D55]"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
          >
            <span className="group-hover:animate-[glow-pulse_2s_infinite]">LIGA-TE AO FUTURO DOS ESPORTS</span>
          </a>
        </motion.div>
        
        {/* Social Icons */}
        <motion.div 
          className="mt-10 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="https://x.com/IberiaHubCS" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF2D55] transition-colors duration-300">
            <FaTwitter className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
          </a>
          <a href="https://www.instagram.com/iberia_hub/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFCC00] transition-colors duration-300">
            <FaInstagram className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
          </a>
          <a href="https://tiktok.com/@iberiahub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF2D55] transition-colors duration-300">
            <FaTiktok className="text-3xl hover:animate-[glow-pulse_2s_infinite]" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 1.5, repeat: Infinity, repeatType: "loop" }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </motion.div>
    </section>
  );
}
