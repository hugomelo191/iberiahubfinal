import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Missão", href: "#about" },
  { name: "Hubs", href: "#hubs" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-dark-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="font-rajdhani font-bold text-2xl tracking-wider">
              <span className="text-[#FF2D55] [text-shadow:_0_0_10px_#FF2D55]">
                IBERIA
              </span>
              <span className="text-[#FFCC00] [text-shadow:_0_0_10px_#FFCC00]">
                HUB
              </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-rajdhani font-medium text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#FFCC00] transition-colors duration-300"
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0D0D0D] border-t border-[#2D2D2D]"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#FFCC00] transition-colors duration-300 font-rajdhani font-medium text-lg py-2"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        setIsOpen(false);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
