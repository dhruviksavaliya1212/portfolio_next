"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Music, Camera, Coffee, Gamepad2 } from "lucide-react";
import BlurText from "../ui/shadcn-io/blur-text";

// TypeScript Interfaces
interface Interest {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  lightBg: string;
  darkBg: string;
  emoji: string;
}

const interests: Interest[] = [
  {
    icon: Code2,
    title: "Coding",
    description: "Building side projects and exploring new technologies",
    color: "from-violet-500/30 via-purple-500/30 to-fuchsia-500/30",
    lightBg: "from-violet-400/20 via-purple-400/20 to-fuchsia-500/20",
    darkBg: "from-violet-500/10 via-purple-500/10 to-fuchsia-600/10",
    emoji: "💻",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
    color: "from-blue-500/30 via-cyan-500/30 to-teal-500/30",
    lightBg: "from-blue-400/20 via-cyan-400/20 to-teal-500/20",
    darkBg: "from-blue-500/10 via-cyan-500/10 to-teal-600/10",
    emoji: "🎨",
  },
  {
    icon: Music,
    title: "Music",
    description: "Listening to music while coding, my perfect combo",
    color: "from-pink-500/30 via-rose-500/30 to-red-500/30",
    lightBg: "from-pink-400/20 via-rose-400/20 to-red-500/20",
    darkBg: "from-pink-500/10 via-rose-500/10 to-red-600/10",
    emoji: "🎵",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and beautiful landscapes",
    color: "from-orange-500/30 via-amber-500/30 to-yellow-500/30",
    lightBg: "from-orange-400/20 via-amber-400/20 to-yellow-500/20",
    darkBg: "from-orange-500/10 via-amber-500/10 to-yellow-600/10",
    emoji: "📸",
  },
  {
    icon: Coffee,
    title: "Coffee",
    description: "Fuel for coding marathons and late-night debugging",
    color: "from-green-500/30 via-emerald-500/30 to-teal-500/30",
    lightBg: "from-green-400/20 via-emerald-400/20 to-teal-500/20",
    darkBg: "from-green-500/10 via-emerald-500/10 to-teal-600/10",
    emoji: "☕",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Relaxing with some games after work",
    color: "from-indigo-500/30 via-blue-500/30 to-cyan-500/30",
    lightBg: "from-indigo-400/20 via-blue-400/20 to-cyan-500/20",
    darkBg: "from-indigo-500/10 via-blue-500/10 to-cyan-600/10",
    emoji: "🎮",
  },
];

const Interests: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const;

  interface InterestCardProps {
    interest: Interest;
    index: number;
  }

  const InterestCard: React.FC<InterestCardProps> = ({ interest, index }) => {
    const Icon = interest.icon;

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -15,
          scale: 1.03,
          rotateY: 5,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group relative rounded-3xl overflow-hidden perspective-1000"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${interest.lightBg} dark:${interest.darkBg} opacity-100 transition-opacity duration-500`}
        />

        {/* Glow Effect on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Card Content */}
        <div className="relative glass-card border border-border/50 group-hover:border-primary/30 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 h-full">
          {/* Animated Border on Hover */}
          <div
            className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${interest.color} -z-10 blur-xl`}
          />

          {/* Top Section: Icon & Emoji */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              whileHover={{
                rotate: [0, -15, 15, -15, 0],
                scale: 1.15,
              }}
              transition={{ duration: 0.6 }}
              className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
            >
              {/* Icon Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
              />
              <Icon
                className="w-8 h-8 text-white relative z-10"
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Floating Emoji */}
            <motion.div
              className="text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {interest.emoji}
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-6">
            <motion.h4
              className="text-2xl font-black text-foreground group-hover:gradient-primary transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              {interest.title}
            </motion.h4>
            <p className="text-sm text-muted-foreground leading-relaxed min-h-[40px]">
              {interest.description}
            </p>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative h-1.5 w-full rounded-full bg-muted/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15,
              }}
              className={`h-full rounded-full bg-gradient-to-r ${interest.color} shadow-lg relative overflow-hidden`}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </div>

          {/* Hover Accent Line */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${interest.color} rounded-b-3xl`}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />

          {/* Particles Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${interest.color}`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-16 px-5">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6 flex flex-col items-center"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 rounded-full glass-premium text-sm font-bold gradient-primary shadow-theme"
          >
            🌟 Interests & Hobbies
          </motion.span>

          <BlurText
            text="Beyond Code"
            animateBy="letters"
            direction="top"
            delay={80}
            className="lily text-4xl sm:text-5xl lg:text-6xl font-black"
            textColor="gradient-primary"
          />

          <BlurText
            text="When I'm not coding, you'll find me doing these"
            animateBy="words"
            direction="top"
            delay={50}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl"
          />
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.title}
              interest={interest}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-card rounded-3xl px-8 py-6 max-w-2xl mx-auto border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <p className="text-lg font-semibold text-foreground mb-2">
              "Life is a balance of work and play"
            </p>
            <p className="text-sm text-muted-foreground">
              Passionate about building amazing things while enjoying life's
              simple pleasures
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
