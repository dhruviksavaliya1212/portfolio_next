"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  Sparkles,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react";
import BlurText from "../ui/shadcn-io/blur-text";

// Timeline with proper BCA and Internship overlap
const timeline = [
  {
    year: "2021",
    title: "First Line of Code",
    company: "The Beginning",
    description:
      "Wrote my first 'Hello World' and fell in love with programming. Started exploring the endless possibilities of code.",
    icon: Code,
    color: "from-orange-500 to-yellow-500",
    badge: "Day One",
  },
  {
    year: "2022",
    title: "Started BCA Degree",
    company: "Bachelor of Computer Applications",
    description:
      "Began my formal 3-year journey in computer applications. Learning programming fundamentals, data structures, databases, and web technologies.",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    badge: "Started",
  },
  {
    year: "Dec 2024",
    title: "React Developer Intern",
    company: "DI Solution",
    description:
      "Joined as an intern while completing my final year of BCA. Dived deep into JavaScript, React.js, state management (Redux/Zustand), and modern development practices.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    badge: "Internship",
    subNote: "During Final Year BCA",
  },
  {
    year: "2025",
    title: "Completed BCA Degree",
    company: "Bachelor of Computer Applications",
    description:
      "Successfully completed my 3-year BCA degree with strong foundation in computer science, algorithms, and software development.",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500",
    badge: "Graduate",
  },
  {
    year: "Jun 2025",
    title: "Junior React/Next.js Developer",
    company: "DI Solution",
    description:
      "Successfully completed 6-month internship and joined as Junior Developer. Now building production-ready applications with React, Next.js, and TypeScript.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
    badge: "Current Role",
  },
];

export default function Journey() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-[40px] sm:text-6xl font-bold">
            My{" "}
            <BlurText
              text="Journey"
              animateBy="letters"
              direction="top"
              delay={80}
              className="lily text-[40px] sm:text-6xl font-black leading-none py-1"
              textColor="gradient-primary py-1"
            />
          </h3>
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto">
            From writing my first line of code to becoming a professional
            developer
          </p>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent max-w-xs mx-auto"
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced Center line - Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block transform -translate-x-1/2">
          {/* Main solid line */}
          <div className="absolute inset-0 w-1 bg-gradient-to-b from-orange-500/60 via-green-500/60 via-blue-500/60 via-pink-500/60 to-violet-500/60 rounded-full"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 w-2 -left-0.5 bg-gradient-to-b from-orange-500/30 via-green-500/30 via-blue-500/30 via-pink-500/30 to-violet-500/30 blur-sm rounded-full"></div>

          {/* Dots along the line */}
          {timeline.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="absolute w-2 h-2 bg-background rounded-full left-1/2 -translate-x-1/2"
              style={{ top: `${(index / (timeline.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        {/* Enhanced Mobile line */}
        <div className="absolute left-8 top-0 bottom-0 lg:hidden">
          <div className="absolute inset-0 w-1 bg-gradient-to-b from-orange-500/60 via-green-500/60 via-blue-500/60 via-pink-500/60 to-violet-500/60 rounded-full"></div>
          <div className="absolute inset-0 w-2 -left-0.5 bg-gradient-to-b from-orange-500/30 via-green-500/30 via-blue-500/30 via-pink-500/30 to-violet-500/30 blur-sm rounded-full"></div>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Desktop Layout - Alternating */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content (for even index 0, 2, 4) */}
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="pr-12"
                    >
                      <TimelineCard item={item} align="right" />
                    </motion.div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="pl-12"
                    >
                      <TimelineCard item={item} align="left" />
                    </motion.div>
                  </>
                )}

                {/* Center Icon - Always centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    className="relative group"
                  >
                    {/* Outer glow ring - NO PING */}
                    <div
                      className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>

                    {/* White ring background */}
                    <div className="absolute -inset-1 bg-background rounded-full"></div>

                    {/* Icon container */}
                    <div
                      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Connecting lines from card to icon */}
                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? "left-1/2 -ml-10" : "left-1/2 ml-10"
                  } w-10 h-0.5`}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`h-full bg-gradient-to-r ${
                      item.color
                    } opacity-30 ${
                      index % 2 === 0 ? "origin-right" : "origin-left"
                    }`}
                  />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden pl-20">
                {/* Icon */}
                <div className="absolute left-8 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="relative"
                  >
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-full blur-md opacity-40`}
                    ></div>
                    <div className="absolute -inset-0.5 bg-background rounded-full"></div>
                    <div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div whileHover={{ scale: 1.01 }} className="mt-2">
                  <TimelineCard item={item} align="left" showYear />
                </motion.div>
              </div>

              {/* Year label for desktop - Positioned above icon */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-8 z-20">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    {item.year}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center pt-8"
      >
        <div className="inline-flex items-center gap-3 glass-premium px-8 py-4 rounded-full group hover:scale-105 transition-transform cursor-default">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Rocket className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </motion.div>
          <span className="font-bold text-base text-lg">
            The journey continues...
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// Timeline Card Component
function TimelineCard({
  item,
  align,
  showYear = false,
}: {
  item: (typeof timeline)[0];
  align: "left" | "right";
  showYear?: boolean;
}) {
  return (
    <div
      className={`relative glass-card bg-zinc-100! dark:bg-zinc-900! p-6 sm:p-8 rounded-3xl hover-shadow-primary transition-all duration-300 space-y-4 group overflow-hidden ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div className="relative z-10 space-y-4">
        {/* Badge */}
        <div
          className={`flex items-center gap-2 flex-wrap ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          {showYear && (
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-md`}
            >
              {item.year}
            </span>
          )}
          <span className="px-4 py-1.5 rounded-full text-xs font-bold glass-premium gradient-primary shadow-md">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-xl sm:text-2xl font-bold text-base leading-tight">
          {item.title}
        </h4>

        {/* Company */}
        <div
          className={`flex items-center gap-2 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-1.5 rounded-lg bg-gradient-to-br ${item.color}/80`}
          >
            <Briefcase className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          </div>
          <p className="text-sm font-semibold gradient-primary">
            {item.company}
          </p>
        </div>

        {/* Sub Note (if any) */}
        {item.subNote && (
          <div
            className={`flex items-center gap-2 ${
              align === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <p className="text-xs font-medium text-muted italic">
              {item.subNote}
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-muted leading-relaxed text-sm sm:text-base">
          {item.description}
        </p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`h-1 bg-gradient-to-r ${item.color} rounded-full ${
            align === "right" ? "origin-right ml-auto" : "origin-left"
          }`}
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
}
