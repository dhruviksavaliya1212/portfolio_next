"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "../ui/shadcn-io/blur-text";
import Image from "next/image";

// TypeScript Interfaces
interface TechGradient {
  light: string;
  dark: string;
  border: string;
  glow: string;
}

interface Skill {
  name: string;
  level: number;
  description: string;
  icon: string;
}

interface SkillCategory {
  description: string;
  gradient: string;
  skills: Skill[];
}

interface SkillsData {
  [key: string]: SkillCategory;
}

interface ColorScheme {
  light: string;
  dark: string;
}

const TechStack: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Tech-specific gradient colors
  const techGradients: Record<string, TechGradient> = {
    // Frontend
    "React.js": {
      light: "from-cyan-400/20 via-blue-400/20 to-blue-500/20",
      dark: "from-cyan-500/10 via-blue-500/10 to-blue-600/10",
      border: "from-cyan-500 via-blue-500 to-blue-600",
      glow: "rgba(59, 130, 246, 0.3)",
    },
    "Next.js": {
      light: "from-slate-400/20 via-gray-400/20 to-zinc-500/20",
      dark: "from-slate-600/10 via-gray-600/10 to-zinc-700/10",
      border: "from-slate-500 via-gray-600 to-zinc-700",
      glow: "rgba(100, 116, 139, 0.3)",
    },
    Ionic: {
      light: "from-blue-400/20 via-indigo-400/20 to-blue-500/20",
      dark: "from-blue-500/10 via-indigo-500/10 to-blue-600/10",
      border: "from-blue-500 via-indigo-500 to-blue-600",
      glow: "rgba(79, 70, 229, 0.3)",
    },
    "React Native CLI": {
      light: "from-sky-400/20 via-cyan-400/20 to-blue-500/20",
      dark: "from-sky-500/10 via-cyan-500/10 to-blue-600/10",
      border: "from-sky-500 via-cyan-500 to-blue-600",
      glow: "rgba(14, 165, 233, 0.3)",
    },
    TypeScript: {
      light: "from-blue-500/20 via-blue-600/20 to-blue-700/20",
      dark: "from-blue-600/10 via-blue-700/10 to-blue-800/10",
      border: "from-blue-600 via-blue-700 to-blue-800",
      glow: "rgba(37, 99, 235, 0.3)",
    },
    "Tailwind CSS": {
      light: "from-cyan-400/20 via-teal-400/20 to-blue-500/20",
      dark: "from-cyan-500/10 via-teal-500/10 to-blue-600/10",
      border: "from-cyan-500 via-teal-500 to-blue-600",
      glow: "rgba(6, 182, 212, 0.3)",
    },
    "Framer Motion": {
      light: "from-pink-400/20 via-purple-400/20 to-violet-500/20",
      dark: "from-pink-500/10 via-purple-500/10 to-violet-600/10",
      border: "from-pink-500 via-purple-500 to-violet-600",
      glow: "rgba(168, 85, 247, 0.3)",
    },
    GSAP: {
      light: "from-green-400/20 via-emerald-400/20 to-teal-500/20",
      dark: "from-green-500/10 via-emerald-500/10 to-teal-600/10",
      border: "from-green-500 via-emerald-500 to-teal-600",
      glow: "rgba(16, 185, 129, 0.3)",
    },
    // Backend
    "Node.js": {
      light: "from-green-500/20 via-emerald-500/20 to-green-600/20",
      dark: "from-green-600/10 via-emerald-600/10 to-green-700/10",
      border: "from-green-600 via-emerald-600 to-green-700",
      glow: "rgba(34, 197, 94, 0.3)",
    },
    "Express.js": {
      light: "from-gray-500/20 via-slate-500/20 to-zinc-600/20",
      dark: "from-gray-600/10 via-slate-600/10 to-zinc-700/10",
      border: "from-gray-600 via-slate-600 to-zinc-700",
      glow: "rgba(71, 85, 105, 0.3)",
    },
    MongoDB: {
      light: "from-green-500/20 via-green-600/20 to-emerald-700/20",
      dark: "from-green-600/10 via-green-700/10 to-emerald-800/10",
      border: "from-green-600 via-green-700 to-emerald-800",
      glow: "rgba(22, 163, 74, 0.3)",
    },
    Firebase: {
      light: "from-yellow-400/20 via-orange-400/20 to-red-500/20",
      dark: "from-yellow-500/10 via-orange-500/10 to-red-600/10",
      border: "from-yellow-500 via-orange-500 to-red-600",
      glow: "rgba(249, 115, 22, 0.3)",
    },
    // Tools
    "Git & GitHub": {
      light: "from-purple-400/20 via-violet-400/20 to-purple-500/20",
      dark: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      border: "from-purple-500 via-violet-500 to-purple-600",
      glow: "rgba(139, 92, 246, 0.3)",
    },
    Cloudinary: {
      light: "from-blue-500/20 via-indigo-500/20 to-blue-600/20",
      dark: "from-blue-600/10 via-indigo-600/10 to-blue-700/10",
      border: "from-blue-600 via-indigo-600 to-blue-700",
      glow: "rgba(59, 130, 246, 0.3)",
    },
    Vercel: {
      light: "from-slate-400/20 via-gray-500/20 to-zinc-600/20",
      dark: "from-slate-500/10 via-gray-600/10 to-zinc-700/10",
      border: "from-slate-500 via-gray-600 to-zinc-700",
      glow: "rgba(71, 85, 105, 0.3)",
    },
    Netlify: {
      light: "from-teal-400/20 via-cyan-400/20 to-teal-500/20",
      dark: "from-teal-500/10 via-cyan-500/10 to-teal-600/10",
      border: "from-teal-500 via-cyan-500 to-teal-600",
      glow: "rgba(20, 184, 166, 0.3)",
    },
    Zustand: {
      light: "from-amber-400/20 via-orange-400/20 to-yellow-500/20",
      dark: "from-amber-500/10 via-orange-500/10 to-yellow-600/10",
      border: "from-amber-500 via-orange-500 to-yellow-600",
      glow: "rgba(245, 158, 11, 0.3)",
    },
    "Shadcn UI": {
      light: "from-slate-400/20 via-zinc-400/20 to-gray-500/20",
      dark: "from-slate-500/10 via-zinc-500/10 to-gray-600/10",
      border: "from-slate-500 via-zinc-500 to-gray-600",
      glow: "rgba(100, 116, 139, 0.3)",
    },
  };

  const skillsData: SkillsData = {
    Frontend: {
      description:
        "Crafting beautiful, responsive, and interactive user experiences",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      skills: [
        {
          name: "React.js",
          level: 90,
          description:
            "Building dynamic UIs with component-based architecture and hooks",
          icon: "/icons/react.png",
        },
        {
          name: "Next.js",
          level: 85,
          description:
            "Server-side rendering, SSG, and full-stack React applications",
          icon: "/icons/next.png",
        },
        {
          name: "Ionic",
          level: 65,
          description: "Cross-platform mobile apps with web technologies",
          icon: "/icons/ionic.png",
        },
        {
          name: "React Native CLI",
          level: 30,
          description: "Just started building native mobile apps with React",
          icon: "/icons/react.png",
        },
        {
          name: "TypeScript",
          level: 85,
          description:
            "Type-safe code for scalable and maintainable applications",
          icon: "/icons/typescript.png",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          description: "Utility-first CSS for rapid, consistent UI development",
          icon: "/icons/tailwind.png",
        },
        {
          name: "Framer Motion",
          level: 80,
          description: "Production-ready animations and smooth transitions",
          icon: "/icons/motion.png",
        },
        {
          name: "GSAP",
          level: 75,
          description: "Professional-grade animations for complex interactions",
          icon: "/icons/gsap.png",
        },
      ],
    },
    Backend: {
      description:
        "Building robust, scalable server-side applications and APIs",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      skills: [
        {
          name: "Node.js",
          level: 85,
          description:
            "JavaScript runtime for high-performance server applications",
          icon: "/icons/node.png",
        },
        {
          name: "Express.js",
          level: 85,
          description: "Fast, unopinionated web framework for Node.js",
          icon: "/icons/express.png",
        },
        {
          name: "MongoDB",
          level: 80,
          description: "Flexible NoSQL database for modern applications",
          icon: "/icons/mongodb.png",
        },
        {
          name: "Firebase",
          level: 75,
          description:
            "Real-time database, authentication, and cloud functions",
          icon: "/icons/firebase.png",
        },
      ],
    },
    Tools: {
      description:
        "Essential tools and platforms for modern development workflows",
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description:
            "Version control and collaborative development workflows",
          icon: "/icons/github.png",
        },
        {
          name: "Cloudinary",
          level: 80,
          description: "Cloud-based media management and optimization",
          icon: "/icons/cloudinary.png",
        },
        {
          name: "Vercel",
          level: 85,
          description: "Zero-config deployment for modern web applications",
          icon: "/icons/vercel.png",
        },
        {
          name: "Netlify",
          level: 85,
          description: "Continuous deployment and serverless functions",
          icon: "/icons/netlify.png",
        },
        {
          name: "Zustand",
          level: 80,
          description: "Lightweight, flexible state management for React",
          icon: "/icons/zustand.png",
        },
        {
          name: "Shadcn UI",
          level: 85,
          description: "Beautiful, accessible components with Radix UI",
          icon: "/icons/shadecn.png",
        },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.42, 0, 0.58, 1], // smooth easeInOut curve
        duration: 0.6,
      },
    },
  } as const;

  const getColorByLevel = (level: number): ColorScheme => {
    if (level >= 80) return { light: "#16a34a", dark: "#22c55e" }; // Green
    if (level >= 60) return { light: "#2563eb", dark: "#3b82f6" }; // Blue
    if (level >= 40) return { light: "#ea580c", dark: "#fb923c" }; // Orange
    return { light: "#dc2626", dark: "#ef4444" }; // Red
  };

  const getLevelLabel = (level: number): string => {
    if (level >= 80) return "Expert";
    if (level >= 60) return "Proficient";
    if (level >= 40) return "Intermediate";
    return "Learning";
  };

  interface SkillCardProps {
    skill: Skill;
    gradient: string;
    index: number;
  }

  const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const techColors: TechGradient =
      techGradients[skill.name] || techGradients["React.js"];
    const colors: ColorScheme = getColorByLevel(skill.level);

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -12,
          scale: 1.02,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group relative rounded-3xl overflow-hidden"
      >
        {/* Tech-Specific Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${techColors.light} dark:${techColors.dark} opacity-100 transition-opacity duration-500`}
        />

        {/* Animated Border Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${techColors.border} opacity-20 blur-xl`}
          />
        </div>

        {/* Glass Card Content */}
        <div className="relative glass-card border border-border/50 group-hover:border-primary/30 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 h-full">
          {/* Glow Effect on Hover */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
            style={{
              background: `radial-gradient(circle at center, ${techColors.glow}, transparent)`,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Icon & Name */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative p-3 rounded-2xl glass-premium shadow-lg group-hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                  style={{ background: techColors.glow }}
                />
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="rounded-lg relative z-10"
                />
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-black text-foreground group-hover:gradient-primary transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {skill.name}
                </motion.h3>
                <motion.span
                  className="text-xs font-bold text-muted-foreground uppercase tracking-wider"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {getLevelLabel(skill.level)}
                </motion.span>
              </div>
            </div>

            {/* Level Badge */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 max-sm:hidden rounded-2xl glass-premium text-base font-black shadow-lg"
            >
              <span className="gradient-primary">{skill.level}%</span>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
            {skill.description}
          </p>

          {/* Progress Bar Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-muted-foreground uppercase tracking-wider">
                Proficiency
              </span>
              <motion.span
                className="text-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-3 rounded-full bg-muted/30 overflow-hidden shadow-inner backdrop-blur-sm">
              {/* Animated Progress Bar */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  width: {
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  },
                  opacity: { duration: 0.5, delay: 0.2 },
                }}
                className="h-full rounded-full relative overflow-hidden shadow-lg"
                style={{
                  background: `linear-gradient(90deg, ${colors.light}, ${colors.dark})`,
                }}
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
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.5,
                  }}
                />

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5 flex flex-col items-center"
        >
          <BlurText
            text="Technologies & Tools"
            animateBy="letters"
            direction="top"
            delay={60}
            className="lily text-4xl sm:text-6xl lg:text-7xl font-black mb-6"
            textColor="gradient-primary"
          />
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto">
            My arsenal of modern development technologies
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent max-w-xs mx-auto mb-20"
        />

        {/* Skills Categories */}
        <div className="space-y-32">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category Header */}
              <div className="mb-14">
                <div className="flex items-center gap-6 mb-5">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${data.gradient} opacity-30 blur-2xl absolute inset-0 animate-pulse`}
                    />
                    <div
                      className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${data.gradient} relative flex items-center justify-center shadow-theme-lg`}
                    >
                      <motion.span
                        className="text-white font-black text-2xl lily"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {category[0]}
                      </motion.span>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground lily"
                    >
                      {category}
                    </motion.h3>
                  </div>

                  <motion.div
                    className={`hidden lg:block flex-1 h-2 rounded-full bg-gradient-to-r ${data.gradient} opacity-40 shadow-lg`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-muted-foreground text-base sm:text-lg ml-20 md:ml-24 max-w-3xl"
                >
                  {data.description}
                </motion.p>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                {data.skills.map((skill, index) => (
                  <SkillCard
                    key={`${skill.name}-${index}`}
                    skill={skill}
                    gradient={data.gradient}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
