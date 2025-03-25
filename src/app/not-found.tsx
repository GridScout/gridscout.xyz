"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { LINKS } from "~/lib/constants";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-[calc(100vh-350px)] overflow-hidden">
        <div className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-60 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 text-6xl font-bold text-white md:text-8xl"
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Checkered Flag!
            </h2>
            <p className="mx-auto max-w-md text-lg text-gray-400">
              You've reached a page that doesn't exist.
              <br />
              If you think this is an error, please contact support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#EE0000] to-[#A0191B] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:from-[#CF0A0B] hover:to-[#95090A]"
            >
              <span className="relative">Back to Homepage</span>
            </Link>
            <Link
              target="_blank"
              href={LINKS.DISCORD_SUPPORT}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#353539] px-6 py-3 font-medium text-white transition duration-300 ease-out hover:from-[#CF0A0B] hover:to-[#95090A]"
            >
              <span className="relative">Support Server</span>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
