"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS } from "~/lib/constants";

// Function to format number with K/M abbreviations
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

const HeroSection = () => {
  const [guildCount, setGuildCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuildCount = async () => {
      try {
        const response = await fetch("/api/discord");
        const data = await response.json();

        if (data.success && data.guildCount) {
          setGuildCount(data.guildCount);
        }
      } catch (error) {
        console.error("Failed to fetch guild count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuildCount();
  }, []);

  return (
    <section className="relative overflow-hidden pt-2">
      <div className="container mx-auto px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
            >
              The{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-[#EE0000] to-[#A0191B] bg-clip-text text-transparent"
              >
                fastest
              </motion.span>{" "}
              F1 Discord bot.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-xl text-gray-300"
            >
              GridScout is the only motorsports bot you'll ever
              <br />
              need to discover.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center"
              >
                <Link
                  target="_blank"
                  href={LINKS.DISCORD_INVITE}
                  className="flex w-full items-center justify-center space-x-2 rounded-md bg-gradient-to-r from-[#CF0A0B] to-[#95090A] px-6 py-3 font-medium text-white transition-all hover:bg-[#4752c4]"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  <span>Add to Discord</span>
                </Link>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-2 text-center text-sm text-gray-400"
                >
                  Join the other{" "}
                  {loading ? (
                    <motion.span
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                      className="text-[#FF2D2D]"
                    >
                      ...
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="font-bold text-[#FF2D2D]"
                    >
                      {guildCount ? formatNumber(guildCount) : "many"}
                    </motion.span>
                  )}{" "}
                  servers!
                </motion.p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#features"
                  className="flex items-center justify-center rounded-md bg-[#353539] px-6 py-3 font-medium text-white transition-all hover:bg-gray-800"
                >
                  View features
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Car Image */}
          <div className="relative hidden md:block">
            {/* Background SVG */}
            <div className="absolute -top-0 left-1/2 z-0 w-[140%] -translate-x-1/2 translate-y-[30%]">
              <svg
                width="838"
                height="309"
                viewBox="0 0 838 309"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M172.802 206H347.737L274.138 309H102.499L172.802 206Z"
                  fill="#D9D9D9"
                  fillOpacity="0.25"
                />
                <path
                  d="M418.315 103H593.25L519.651 206H348.011L418.315 103Z"
                  fill="#D9D9D9"
                  fillOpacity="0.25"
                />
                <path
                  d="M316.087 0H491.022L417.423 103H245.784L316.087 0Z"
                  fill="url(#paint0_linear_673_2)"
                  fillOpacity="0.25"
                />
                <path
                  d="M71.1918 103H246.126L172.528 206H0.888428L71.1918 103Z"
                  fill="url(#paint1_linear_673_2)"
                  fillOpacity="0.25"
                />
                <path
                  d="M519.926 206H694.861L621.262 309H449.623L519.926 206Z"
                  fill="url(#paint2_linear_673_2)"
                  fillOpacity="0.25"
                />
                <path
                  d="M662.541 0H837.476L763.877 103H592.238L662.541 0Z"
                  fill="url(#paint3_linear_673_2)"
                  fillOpacity="0.25"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_673_2"
                    x1="307.728"
                    y1="-5.71952e-06"
                    x2="415.77"
                    y2="99.0385"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#737373" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_673_2"
                    x1="81.3529"
                    y1="174.668"
                    x2="245.345"
                    y2="131.01"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#737373" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_673_2"
                    x1="631.493"
                    y1="251.017"
                    x2="522.011"
                    y2="206"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#737373" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_673_2"
                    x1="764.385"
                    y1="96.1573"
                    x2="598.36"
                    y2="103"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop offset="1" stopColor="#737373" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Car image*/}
            <motion.div
              className="relative z-10 flex h-[400px] items-center justify-center"
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: 0,
                y: [0, -8, 0],
                opacity: 1,
              }}
              transition={{
                x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src="/images/car.png"
                alt="Formula 1 Car"
                width={600}
                height={300}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
