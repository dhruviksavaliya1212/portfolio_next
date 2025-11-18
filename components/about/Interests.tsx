"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Music, Camera, Coffee, Gamepad2 } from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Coding",
    description: "Building side projects and exploring new technologies",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Music,
    title: "Music",
    description: "Listening to music while coding, my perfect combo",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and beautiful landscapes",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Coffee,
    title: "Coffee",
    description: "Fuel for coding marathons and late-night debugging",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Relaxing with some games after work",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Interests() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-base">
          Beyond <span className="gradient-primary">Code</span>
        </h3>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          When I'm not coding, you'll find me doing these
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl space-y-4 cursor-pointer card-hover group"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center`}
            >
              <interest.icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Content */}
            <div>
              <h4 className="text-xl font-bold text-base mb-2">
                {interest.title}
              </h4>
              <p className="text-muted text-sm">{interest.description}</p>
            </div>

            {/* Hover effect */}
            <div
              className={`h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${interest.color} rounded-full`}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
