"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Junior React/Next.js Developer",
    company: "DI Solution",
    description:
      "Building modern web applications with React, Next.js, and TypeScript.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Freelance",
    description:
      "Worked on multiple client projects using MERN stack and Next.js.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Started Web Development",
    company: "Self-Learning",
    description:
      "Began my journey into web development, learning React and Node.js.",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500",
  },
  {
    year: "2021",
    title: "First Line of Code",
    company: "The Beginning",
    description:
      "Wrote my first 'Hello World' and fell in love with programming.",
    icon: Briefcase,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Journey() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-base">
          My <span className="gradient-primary">Journey</span>
        </h3>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          The path that led me to where I am today
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 hidden lg:block"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`glass-card p-6 rounded-2xl hover-shadow-primary ${
                  index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"
                }`}
              >
                <div className="inline-block mb-3">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color}`}
                  >
                    {item.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-semibold gradient-primary mb-3">
                  {item.company}
                </p>
                <p className="text-muted">{item.description}</p>
              </motion.div>

              {/* Icon */}
              <div
                className={`hidden lg:flex justify-center ${
                  index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
