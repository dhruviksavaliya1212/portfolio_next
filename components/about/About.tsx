"use client";

import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import Journey from "./Journey";
import TechStack from "./TechStack";
import Interests from "./Interests";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center space-y-4"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-premium text-sm font-semibold gradient-primary">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base">
              Get to know me
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Passionate developer crafting digital experiences
            </p>
          </motion.div>

          {/* About Components */}
          <AboutHero />
          <Journey />
          <TechStack />
          <Interests />
        </motion.div>
      </div>
    </section>
  );
}
