"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const showAnnouncement = !["/terms", "/privacy"].includes(pathname || "");

  const announcement =
    "ANNOUNCEMENT: GRIDSCOUT HAS RELEASED. INVITE THE BOT TO YOUR SERVER AND GET STARTED...";

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (typeof window !== "undefined") {
      const featuresElement = document.getElementById("features");

      if (featuresElement) {
        // Add a small delay to ensure any UI updates finish first
        setTimeout(() => {
          const headerHeight = 80; // aprox header height
          const featuresPosition =
            featuresElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top: featuresPosition,
            behavior: "smooth",
          });
        }, 100);
      } else {
        window.location.href = "/#features";
      }
    }
  };

  return (
    <>
      {/* Announcement Banner */}
      {showAnnouncement && (
        <Link href="https://discord.gg/hNNaUGyTVz" target="_blank">
          <motion.div
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative flex h-[28px] cursor-pointer overflow-hidden transition-colors hover:bg-[#2a2a2a]"
            style={{
              background: `
                conic-gradient(#242424 90deg, #000 0 180deg, #242424 0 270deg, #000 0) 
                0 0/28px 28px
              `,
            }}
          >
            {/* Scrolling text container */}
            <div className="relative flex h-full w-full items-center overflow-hidden">
              {/* First marquee animation */}
              <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="inline-block px-12 font-semibold text-[#F3CD5E]"
                  >
                    {announcement}
                  </motion.span>
                ))}
              </div>
              {/* Second marquee animation with offset for seamless loop */}
              <div
                className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animationDelay: "15s" }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="inline-block px-12 font-semibold text-[#F3CD5E]"
                  >
                    {announcement}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      )}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`sticky top-0 z-20 w-full border-b-2 border-stroke bg-background transition-colors duration-200 ${
          isScrolled ? "bg-opacity-90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mr-2"
            >
              <Image
                src="/favicon.ico"
                alt="GridScout Logo"
                width={32}
                height={32}
              />
            </motion.div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide text-white"
            >
              GridScout
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden items-center space-x-32 md:flex"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMounted ? (
                <a
                  href="#features"
                  onClick={scrollToFeatures}
                  className="font-normal text-white transition-colors hover:text-red-500"
                >
                  Features
                </a>
              ) : (
                <span className="font-normal text-white">Features</span>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://docs.gridscout.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-white transition-colors hover:text-red-500"
              >
                Documentation
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://status.gridscout.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-white transition-colors hover:text-red-500"
              >
                Status
              </a>
            </motion.div>
          </motion.nav>

          {/* Support & GitHub Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden items-center space-x-4 md:flex"
          >
            <Link
              target="_blank"
              href="https://discord.gg/hNNaUGyTVz"
              className="font-medium text-white transition-colors hover:text-red-500"
            >
              Support Discord
            </Link>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Link
                href="https://github.com/GridScout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-white transition-colors"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="mr-2">
              <Link
                href="https://github.com/GridScout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-white transition-colors"
              >
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-stroke bg-background bg-opacity-95 backdrop-blur-sm md:hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-4 py-2">
                  {isMounted ? (
                    <a
                      href="#features"
                      onClick={scrollToFeatures}
                      className="block w-full py-2 font-normal text-white transition-colors hover:text-red-500"
                    >
                      Features
                    </a>
                  ) : (
                    <span className="block w-full py-2 font-normal text-white">
                      Features
                    </span>
                  )}
                  <a
                    href="https://docs.gridscout.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 font-normal text-white transition-colors hover:text-red-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </a>
                  <a
                    href="https://status.gridscout.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 font-normal text-white transition-colors hover:text-red-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Status
                  </a>
                  <Link
                    href="https://discord.gg/hNNaUGyTVz"
                    className="block w-full py-2 font-normal text-white transition-colors hover:text-red-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support Discord
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
