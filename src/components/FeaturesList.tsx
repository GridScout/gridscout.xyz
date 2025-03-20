"use client";

import React from "react";
import { motion } from "framer-motion";

const FeaturesList = () => {
  return (
    <section id="features" className="w-full py-16">
      <div className="container mx-auto px-8">
        {/* First feature */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="pr-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-white"
            >
              Accurate and Reliable data
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-300"
            >
              GridScout sources its data from active and verified motorsport
              databases, ensuring you always get the latest and most precise
              race information.
            </motion.p>
          </div>
          <div className="hidden md:block"></div>
        </motion.div>

        {/* Second feature */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="hidden md:block"></div>
          <div className="pl-8 text-right">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-white"
            >
              Upcoming Event Notifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-300"
            >
              Never miss a race again! GridScout provides countdowns and
              reminders for every upcoming F1 Grand Prix.
            </motion.p>
          </div>
        </motion.div>

        {/* Third feature */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <div className="pr-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-white"
            >
              Detailed Driver and Team Stats
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-300"
            >
              Access in-depth statistics on drivers, teams, and past race
              performances to stay informed like a true F1 analyst.
            </motion.p>
          </div>
          <div className="hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesList;
