"use client";

import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import Journey from "./Journey";
import TechStack from "./TechStack";
import Interests from "./Interests";
import BlurText from "../ui/shadcn-io/blur-text";

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
    <section id="about" className="relative pt-10 pb-20 overflow-hidden">
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
            className="text-center space-y-4 flex flex-col items-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-premium text-sm font-semibold gradient-primary">
              About Me
            </span>
            <BlurText
              text="Get to know me"
              animateBy="letters"
              direction="top"
              delay={80}
              className="lily text-[40px] sm:text-6xl font-black leading-none py-1"
              textColor="gradient-primary py-1"
            />
            <BlurText
              text="Passionate developer crafting digital experiences"
              animateBy="letters"
              direction="top"
              delay={30}
              className="text-sm sm:text-base text-muted text-center max-w-2xl mx-auto"
            />
          </motion.div>

          {/* About Components */}
          <AboutHero />
        </motion.div>
      </div>
    </section>
  );
}
