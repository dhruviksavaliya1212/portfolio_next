"use client";

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Terminal,
  Atom,
  FileType2,
  Server,
  Shapes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React from "react";
import BlurText from "../ui/shadcn-io/blur-text";
import Image from "next/image";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/dhruvik",
    label: "GitHub",
    color: "hover-base",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dhruvik",
    label: "LinkedIn",
    color: "hover-accent",
  },
  {
    icon: Mail,
    href: "mailto:dhruvik@example.com",
    label: "Email",
    color: "hover-secondary",
  },
];

const skills = [
  { name: "React.js", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/next.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "3D Web", icon: "/icons/3d.png" },
  { name: "UI/UX", icon: "/icons/uiux.png" },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function HeroText() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      className="relative w-full max-w-xl mx-auto lg:mx-0 space-y-6"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center lg:justify-start"
      >
        <motion.div className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full shadow-theme-lg mx-auto lg:mx-0 cursor-pointer">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 icon-primary" />
          </motion.div>
          <span className="text-sm font-semibold gradient-primary">
            Available for Freelance Work
          </span>
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.div
        variants={itemVariants}
        className="text-center lg:text-left space-y-3"
      >
        <motion.div className="flex items-center justify-center lg:justify-start gap-2">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👋
          </motion.span>
          <BlurText
            text="Hi, I'm"
            animateBy="letters"
            direction="top"
            delay={80}
            className="text-xl font-medium"
            textColor="text-base"
          />
        </motion.div>

        {/* Name with Gradient */}
        <BlurText
          text="Dhruvik Savaliya"
          animateBy="letters"
          direction="top"
          delay={150}
          className="lily text-[40px] sm:text-6xl font-black leading-none py-1"
          textColor="gradient-primary py-1"
        />
      </motion.div>
      {/* Role Badge */}
      <div className="flex justify-center lg:justify-start">
        <motion.div className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl shadow-theme-lg transition-all w-fit">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className=""
          >
            <Code2 className="w-6 h-6 icon-primary" />
          </motion.div>
          <BlurText
            text="Full-Stack Developer"
            animateBy="letters"
            direction="top"
            delay={80}
            className="text-xl sm:text-2xl font-bold whitespace-nowrap"
            textColor="text-base"
          />
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        variants={itemVariants}
        className="text-muted leading-relaxed glass-card px-5 py-4 rounded-xl transition-all text-shadow"
      >
        Passionate Full-Stack Developer specializing in{" "}
        <BlurText
          text="React, Next.js, "
          animateBy="letters"
          direction="top"
          delay={100}
          className="font-bold "
          textColor="gradient-primary"
        />{" "}
        <BlurText
          text="Typescript"
          animateBy="letters"
          direction="top"
          delay={200}
          className="font-bold "
          textColor="gradient-primary"
        />{" "}
        and crafting{" "}
        <BlurText
          text="stunning UI/3D web experiences"
          animateBy="letters"
          direction="top"
          delay={50}
          className="font-bold "
          textColor="gradient-primary"
        />
        .
      </motion.div>

      {/* Skills */}
      {/* Skills Marquee with Pause on Hover */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden py-2"
      >
        {/* Marquee Container */}
        <motion.div
          className="flex gap-3 group"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
          style={{
            willChange: "transform",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{
                scale: 1.15,
                y: -5,
                zIndex: 10,
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-premium px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-theme hover:shadow-theme-lg cursor-pointer text-base whitespace-nowrap flex-shrink-0 transition-all"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Buttons */}
      {/* Buttons - OPTIMIZED VERSION */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Primary Button - View My Work */}
        <Link href="#projects" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto relative group"
          >
            {/* Reduced glow background */}
            <motion.div
              className="absolute -inset-0.5 rounded-full opacity-40 group-hover:opacity-60 blur transition duration-300"
              animate={{
                background: [
                  "linear-gradient(45deg, #7c3aed, #ec4899)",
                  "linear-gradient(45deg, #ec4899, #3b82f6)",
                  "linear-gradient(45deg, #3b82f6, #7c3aed)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <Button
              size="lg"
              className="relative w-full sm:w-auto btn-gradient-primary rounded-xl px-8 py-6 font-bold text-lg overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Icon with pulse */}
              <motion.div
                className="inline-block mr-2 relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Terminal className="h-5 w-5" />
              </motion.div>

              <span className="relative z-10">View My Work</span>

              {/* Animated arrow */}
              <motion.div
                className="inline-block ml-2 relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </Link>

        {/* Secondary Button - Download CV (MINIMAL VERSION) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="outline"
            className="relative w-full sm:w-auto glass-premium hover:glass-card rounded-xl px-8 py-6 font-bold text-lg text-base border-2 border-base overflow-hidden group hover-shadow-soft transition-all duration-300"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

            <div className="relative z-10 flex items-center justify-center gap-2">
              {/* Icon with bounce */}
              <Download className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110" />

              {/* Text */}
              <span className="transition-all duration-300 group-hover:translate-x-1">
                Download CV
              </span>
            </div>

            {/* Animated underline */}
            <div className="absolute bottom-2 left-8 right-8 h-0.5 bg-gradient-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div
        variants={itemVariants}
        className="flex gap-4 justify-center lg:justify-start"
      >
        {/* {socialLinks.map((social, index) => (
          <a
            className={`glass-premium p-3 rounded-xl shadow-theme-lg hover:shadow-theme-xl transition-all ${social.color} card-hover cursor-pointer text-base`}
            aria-label={social.label}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <social.icon className="h-6 w-6" />
            </motion.div>
          </a>
        ))} */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className=" max-sm:-mt-2 flex justify-center lg:justify-start"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-muted">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
