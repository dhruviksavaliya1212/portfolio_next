"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Calendar,
  Code2,
  Github,
  Zap,
  Coffee,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/shadcn-io/background-gradient";
import BlurText from "../ui/shadcn-io/blur-text";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Side Projects",
    value: "10+",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
  },
  {
    label: "Technologies",
    value: "15+",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "GitHub Repos",
    value: "15+",
    icon: Github,
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Cups of Coffee",
    value: "∞",
    icon: Coffee,
    color: "from-orange-500 to-yellow-500",
  },
];

const details = [
  { icon: MapPin, label: "Based in", value: "Surat, India", color: "violet" },
  {
    icon: Code2,
    label: "Current Role",
    value: "Junior React/Next.js Developer",
    color: "blue",
  },
  { icon: Calendar, label: "Experience", value: "1.5+ Years", color: "blue" },
  {
    icon: Mail,
    label: "Email",
    value: "savaliyadhruvik61@gmail.com",
    color: "pink",
  },
];

const highlights = [
  { icon: "🚀", text: "Building cool stuff everyday" },
  { icon: "💡", text: "Learning new technologies" },
  { icon: "🎯", text: "Focused on clean code" },
  { icon: "✨", text: "Passionate about UI/UX" },
];

export default function AboutHero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left - Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group order-2 lg:order-1"
      >
        <div className="relative">
          {/* Image container */}
          <div className="relative aspect-square max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 md:order-2 flex justify-center sm:-mt-32 mt-0"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <BackgroundGradient>
                  <Image
                    src="/bg/hero.png" // change this to your real file
                    alt="Developer Anime Style"
                    width={550}
                    height={550}
                    className="drop-shadow-2xl rounded-3xl border border-white/10 dark:border-white/5"
                    priority
                  />
                </BackgroundGradient>

                {/* Glow Behind Image */}
                <div className="absolute inset-0 blur-3xl bg-violet-500/20 dark:bg-violet-400/20 -z-10 rounded-3xl" />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-5
             backdrop-blur-xl bg-white/10 dark:bg-white/5
             shadow-[0_8px_22px_rgba(0,0,0,0.15)]
             border border-white/20 dark:border-white/10"
          >
            <div className="flex items-center gap-4">
              {/* Status Dot */}
              <div className="relative flex items-center justify-center">
                <div className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <div className="absolute inset-0 w-3.5 h-3.5 bg-green-500 rounded-full animate-ping"></div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Status
                </p>

                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-base">
                    Open to opportunities
                  </p>

                  {/* Small glowing dot */}
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8 order-1 lg:order-2"
      >
        {/* Intro */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm font-semibold">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="gradient-primary">Building with passion</span>
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Hi, I'm{" "}
            <BlurText
              text="Dhruvik"
              animateBy="letters"
              direction="top"
              delay={150}
              className="lily text-[40px] sm:text-6xl font-black leading-none py-1"
              textColor="gradient-primary py-1"
            />{" "}
            <motion.span
              className="inline-block" // <-- FIXED HERE
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              👋
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted leading-relaxed"
          >
            A self-taught Full-Stack Developer who loves turning ideas into
            reality through code. I build personal projects to learn,
            experiment, and push my skills to the next level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted leading-relaxed"
          >
            Currently working at{" "}
            <BlurText
              text="DI Solution"
              animateBy="letters"
              direction="top"
              delay={150}
              className="lily text-xl font-black leading-none py-1"
              textColor="gradient-primary py-1"
            />{" "}
            as a Junior React/Next.js Developer, while constantly learning and
            building cool stuff in my free time.
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "flex items-center gap-3 p-4 rounded-xl transition-all",
                "backdrop-blur-xl border glass-card bg-zinc-100! dark:bg-zinc-900!"
              )}
            >
              {/* Icon with small hover animation */}
              <motion.span
                className="text-2xl"
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {item.icon}
              </motion.span>

              {/* Text */}
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card bg-zinc-100! dark:bg-zinc-900! p-4 rounded-xl hover-shadow-soft transition-all cursor-pointer group border "
            >
              <div className="flex items-start gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2.5 bg-gradient-to-br from-${detail.color}-500 to-${detail.color}-600 rounded-lg shadow-lg`}
                >
                  <detail.icon className="w-4 h-4 text-white" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-muted font-medium">
                    {detail.label}
                  </p>
                  <p className="font-bold text-base mt-0.5">{detail.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="glass-premium p-5 rounded-xl text-center card-hover group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-2"
                >
                  <div
                    className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                <h4
                  className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </h4>
                <p className="text-xs text-muted mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
