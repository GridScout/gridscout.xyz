"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Race {
  season: string;
  round: string;
  raceName: string;
  date: string;
  time: string;
  Circuit: {
    circuitName: string;
    Location: {
      locality: string;
      country: string;
    };
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05, backgroundColor: "#31313A" }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="flex min-w-[70px] flex-col items-center justify-center rounded-md bg-[#2a2a32] px-3 py-2 text-center sm:px-4"
  >
    <motion.span
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 10,
      }}
      className="text-2xl font-bold text-white sm:text-4xl"
    >
      {value}
    </motion.span>
    <span className="text-xs text-gray-400">{label}</span>
  </motion.div>
);

const RaceCountdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [raceName, setRaceName] = useState("Loading...");
  const [circuitName, setCircuitName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch race data and find the next race
  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.jolpi.ca/ergast/f1/current/races.json",
        );
        const data = await response.json();
        const races = data.MRData.RaceTable.Races;

        // Find the next race (first race with a future date)
        const now = new Date();
        let nextRace: Race | null = null;

        for (const race of races) {
          const raceDate = new Date(`${race.date}T${race.time || "00:00:00Z"}`);
          if (raceDate > now) {
            nextRace = race;
            break;
          }
        }

        if (nextRace) {
          setRaceName(nextRace.raceName);
          setCircuitName(
            `${nextRace.Circuit.circuitName}, ${nextRace.Circuit.Location.country}`,
          );

          // Start the countdown
          const raceDateTime = new Date(
            `${nextRace.date}T${nextRace.time || "00:00:00Z"}`,
          );
          updateCountdown(raceDateTime);
        } else {
          setRaceName("No upcoming races found");
          setCircuitName("");
        }
      } catch (error) {
        console.error("Error fetching race data:", error);
        setRaceName("Error loading race data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRaceData();
  }, []);

  const updateCountdown = (raceDateTime: Date) => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = raceDateTime.getTime() - now.getTime();

      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return false;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      return true;
    };

    const shouldContinue = calculateTimeRemaining();

    if (shouldContinue) {
      const timer = setInterval(() => {
        const shouldContinue = calculateTimeRemaining();
        if (!shouldContinue) {
          clearInterval(timer);
        }
      }, 900);

      return () => clearInterval(timer);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-[#26252C] py-8 md:h-40 md:py-0"
    >
      {/* Vertically centered content */}
      <div className="container mx-auto h-full px-4 md:px-8 lg:px-12">
        <div className="flex h-full flex-col items-center gap-6 md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-bold text-white"
            >
              Upcoming Grand Prix
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg text-gray-300"
            >
              {raceName}
            </motion.p>
            {circuitName && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-sm text-gray-400"
              >
                {circuitName}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className="flex items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-2 gap-3 sm:flex sm:space-x-4 md:flex md:gap-0">
              <CountdownBox value={days} label="DAYS" />
              <CountdownBox value={hours} label="HRS" />
              <CountdownBox value={minutes} label="MINS" />
              <CountdownBox value={seconds} label="SECS" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RaceCountdown;
