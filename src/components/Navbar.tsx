"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
];

const rightLinks = [
  { name: "Events", href: "#events" },
  { name: "Contact Us", href: "#contact" },
];

const menuVariants = {
  hidden: {
    x: "-100%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-primary-foreground z-50 font-caslon bg-white/30 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between md:h-24 h-32">
          {/* Left Links */}
          <div className="flex items-center uppercase font-medium tracking-widest text-sm space-x-24 text-primary">
            {leftLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="h-full flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
                className="h-auto max-h-[65px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex items-center uppercase tracking-widest text-sm font-medium space-x-24 text-primary">
            {rightLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 h-full flex items-center">
              <Link href="/" className="h-full flex items-center">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={80}
                  height={32}
                  className="h-auto max-h-[32px] w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 p-1 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile menu with Framer Motion */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="fixed inset-0 bg-white z-40 pt-16 w-[60%]"
                style={{ top: "4rem" }} // Match your mobile navbar height
              >
                <div className="px-4 -mt-[4rem]">
                  {[...leftLinks, ...rightLinks].map((link, index) => (
                    <motion.div
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      className=""
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3  text-lg text-primary hover:font-semibold rounded-md transition-colors duration-200 font-sans hover:bg-primary-foreground/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
