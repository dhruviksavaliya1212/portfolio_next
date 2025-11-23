"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code2,
  ArrowUpRight,
  Layers,
  Zap,
  Star,
} from "lucide-react";
import BlurText from "../ui/shadcn-io/blur-text";

// TypeScript Interfaces
interface TechStack {
  name: string;
  color: string;
}

interface ProjectLink {
  type: "github" | "live";
  url: string;
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  tech: TechStack[];
  links: ProjectLink[];
  gradient: string;
  lightBg: string;
  darkBg: string;
  year: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Placeholder Projects Data - Replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tagline: "Modern Shopping Experience",
      description:
        "A full-stack e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "/projects/project-1.jpg",
      category: "Full Stack",
      featured: true,
      tech: [
        { name: "React.js", color: "from-cyan-500 to-blue-500" },
        { name: "Node.js", color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
        { name: "Express", color: "from-gray-500 to-slate-600" },
        { name: "Tailwind", color: "from-cyan-400 to-teal-500" },
      ],
      links: [
        { type: "github", url: "#" },
        { type: "live", url: "#" },
      ],
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      lightBg: "from-violet-400/20 via-purple-400/20 to-fuchsia-500/20",
      darkBg: "from-violet-500/10 via-purple-500/10 to-fuchsia-600/10",
      year: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      tagline: "Productivity Redefined",
      description:
        "Collaborative task manager with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Perfect for agile teams.",
      image: "/projects/project-2.jpg",
      category: "Full Stack",
      featured: true,
      tech: [
        { name: "React.js", color: "from-cyan-500 to-blue-500" },
        { name: "Node.js", color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
        { name: "Socket.io", color: "from-slate-500 to-zinc-600" },
      ],
      links: [
        { type: "github", url: "#" },
        { type: "live", url: "#" },
      ],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      lightBg: "from-blue-400/20 via-cyan-400/20 to-teal-500/20",
      darkBg: "from-blue-500/10 via-cyan-500/10 to-teal-600/10",
      year: "2024",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      tagline: "Analytics Made Simple",
      description:
        "Comprehensive social media analytics platform with post scheduling, engagement tracking, and beautiful data visualizations for better insights.",
      image: "/projects/project-3.jpg",
      category: "Full Stack",
      featured: false,
      tech: [
        { name: "React.js", color: "from-cyan-500 to-blue-500" },
        { name: "Node.js", color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
        { name: "Chart.js", color: "from-pink-500 to-rose-500" },
      ],
      links: [
        { type: "github", url: "#" },
        { type: "live", url: "#" },
      ],
      gradient: "from-pink-500 via-rose-500 to-red-500",
      lightBg: "from-pink-400/20 via-rose-400/20 to-red-500/20",
      darkBg: "from-pink-500/10 via-rose-500/10 to-red-600/10",
      year: "2023",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const;

  interface ProjectCardProps {
    project: Project;
    index: number;
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{
          y: -20,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        className="group relative h-full"
      >
        {/* Card Container */}
        <div className="relative h-full rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.lightBg} dark:${project.darkBg} transition-opacity duration-500`}
          />

          {/* Animated Glow */}
          <div
            className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-700`}
          />

          {/* Main Card */}
          <div className="relative glass-card border border-border/50 group-hover:border-primary/40 rounded-3xl backdrop-blur-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                    <span className="text-xs font-black text-white">
                      Featured
                    </span>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Project Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
              {/* Image Container */}
              <div className="w-full h-full relative group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out">
                {/* Placeholder - Replace with actual image */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Animated Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-50 group-hover:animate-pulse"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <Code2 className="w-24 h-24 text-white/20 relative z-10" />
                </div>

                {/* Uncomment when you have images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Action Buttons */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 z-10 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {project.links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-5 py-3 rounded-2xl backdrop-blur-2xl border flex items-center justify-center gap-2.5 font-bold text-sm transition-all duration-300 ${
                      link.type === "live"
                        ? "bg-white/95 border-white text-black hover:bg-white shadow-xl"
                        : "bg-black/60 border-white/20 text-white hover:bg-black/80 hover:border-white/40"
                    }`}
                  >
                    {link.type === "github" ? (
                      <>
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </>
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-premium backdrop-blur-xl border border-white/30">
                <span className="text-xs font-bold text-white">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 sm:p-8 space-y-5">
              {/* Title & Tagline */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground group-hover:gradient-primary transition-all duration-300 leading-tight group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <div className="flex-shrink-0 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <p className="text-sm font-semibold text-primary">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Built With
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="group/tech relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 blur-lg group-hover/tech:opacity-40 transition-opacity duration-300 rounded-lg`}
                      />
                      <div
                        className={`relative px-4 py-2 rounded-lg bg-gradient-to-r ${tech.color} shadow-lg`}
                      >
                        <span className="text-xs font-black text-white">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="relative h-1.5 w-full rounded-full bg-muted/30 overflow-hidden mt-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.15,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${project.gradient} shadow-lg relative overflow-hidden`}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1.5,
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-gradient-primary opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-gradient-secondary opacity-10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20 flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-3 rounded-full glass-premium border border-primary/30 shadow-lg">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-black gradient-primary">
                  Live Projects
                </span>
              </div>
            </div>
          </motion.div>

          <BlurText
            text="Featured Work"
            animateBy="letters"
            direction="top"
            delay={60}
            className="lily text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            textColor="gradient-primary"
          />
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto mb-20">
            Real-world projects built with modern technologies
          </p>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-white shadow-lg bg-gradient-primary"
                    : "glass-card text-primary border border-accent!"
                }`}
              >
                {/* {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )} */}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
