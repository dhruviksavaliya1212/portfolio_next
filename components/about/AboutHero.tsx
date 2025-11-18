"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Coffee Consumed", value: "∞" },
];

const details = [
  { icon: MapPin, label: "Based in", value: "Your City, Country" },
  { icon: Briefcase, label: "Current Role", value: "Junior Developer" },
  { icon: Calendar, label: "Experience", value: "2+ Years" },
  { icon: Mail, label: "Email", value: "dhruvik@example.com" },
];

export default function AboutHero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="relative z-10">
          {/* Decorative blob */}
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl group-hover:opacity-30 transition-opacity duration-500"></div>

          {/* Image container */}
          <div className="relative aspect-square max-w-md mx-auto glass-premium rounded-3xl p-2 overflow-hidden">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-purple-500/20">
              {/* Replace with your image */}
              <div className="w-full h-full flex items-center justify-center text-9xl">
                👨‍💻
              </div>
              {/* Uncomment when you have an image */}
              {/* <Image
                src="/your-photo.jpg"
                alt="Dhruvik"
                fill
                className="object-cover"
                priority
              /> */}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -bottom-4 -right-4 glass-premium px-6 py-3 rounded-2xl shadow-theme-lg"
          >
            <p className="text-sm text-muted">Available for work</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-base">Open to opportunities</span>
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
        className="space-y-8"
      >
        {/* Intro */}
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-base">
            Hello! I'm <span className="gradient-primary">Dhruvik</span>
          </h3>
          <p className="text-lg text-muted leading-relaxed">
            A passionate Full-Stack Developer based in [Your City]. I specialize
            in building exceptional digital experiences that combine beautiful
            design with powerful functionality.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Currently working as a Junior React/Next.js Developer at{" "}
            <span className="font-semibold text-base">DI Solution</span>, where
            I create modern web applications that users love.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-xl hover-shadow-soft transition-all cursor-default"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <detail.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted">{detail.label}</p>
                  <p className="font-semibold text-base">{detail.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-premium p-4 rounded-xl text-center card-hover"
            >
              <h4 className="text-3xl font-bold gradient-primary">
                {stat.value}
              </h4>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
