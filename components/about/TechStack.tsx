"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  {
    category: "Frontend",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "⚡" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Firebase", level: 70, icon: "🔥" },
    ],
  },
  {
    category: "Tools & Others",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "Socket.io", level: 75, icon: "🔌" },
      { name: "Redux/Zustand", level: 80, icon: "🔄" },
      { name: "3D (R3F)", level: 70, icon: "🎪" },
    ],
  },
];

export default function TechStack() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-base">
          Tech <span className="gradient-primary">Stack</span>
        </h3>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Technologies I work with on a daily basis
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: techIndex * 0.1 }}
            className="glass-card p-6 rounded-2xl space-y-6"
          >
            {/* Category Header */}
            <div className="text-center">
              <h4
                className={`text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
              >
                {tech.category}
              </h4>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {tech.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIndex * 0.1 + index * 0.05 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="space-y-2"
                >
                  {/* Skill name */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-semibold text-base text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: techIndex * 0.1 + index * 0.05,
                      }}
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                    >
                      {hoveredSkill === skill.name && (
                        <motion.div
                          layoutId="skill-glow"
                          className="absolute inset-0 bg-white/30 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
