"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  Sparkles,
} from "lucide-react";
import BlurText from "../ui/shadcn-io/blur-text";

// TypeScript Interfaces
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
  color: string;
  username: string;
}

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Social Links
  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900",
      username: "@yourusername",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "from-blue-600 to-blue-800",
      username: "/in/yourusername",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "from-sky-500 to-blue-600",
      username: "@yourusername",
    },
  ];

  // Contact Information
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      color: "from-purple-500 to-violet-600",
    },
  ];

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const;

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-primary opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-secondary opacity-10 rounded-full blur-3xl"
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
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-black gradient-primary">
                  Get In Touch
                </span>
              </div>
            </div>
          </motion.div>

          <BlurText
            text="Let's Work Together"
            animateBy="letters"
            direction="top"
            delay={60}
            className="lily text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
            textColor="gradient-primary"
          />

          <BlurText
            text="Have a project in mind? Let's create something amazing together!"
            animateBy="words"
            direction="top"
            delay={40}
            className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl"
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto"
        >
          {/* Left Column - Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground lily mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative">
                      {/* Background Gradient */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
                      />

                      {/* Card */}
                      <div className="relative glass-card rounded-2xl p-6 border border-border/50 group-hover:border-primary/40 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon
                              className="w-5 h-5 text-white"
                              strokeWidth={2.5}
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-base font-bold text-foreground hover:text-primary transition-colors duration-300"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-base font-bold text-foreground">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links - Enhanced */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground lily">
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      {/* Outer Glow Effect */}
                      <motion.div
                        className={`absolute -inset-2 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl`}
                        whileHover={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Card */}
                      <div className="relative glass-card rounded-2xl p-6 border-2 border-border/50 group-hover:border-primary/60 transition-all duration-500 overflow-hidden">
                        {/* Animated Background Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            backgroundSize: "200% 200%",
                          }}
                        />

                        {/* Shimmer on Hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                          }}
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="relative flex items-center gap-5">
                          {/* Animated Icon Container */}
                          <motion.div
                            className={`relative p-4 rounded-2xl bg-gradient-to-br ${social.color} shadow-lg`}
                            whileHover={{
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.15,
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                          >
                            {/* Icon Glow */}
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300`}
                            />

                            <Icon
                              className="w-6 h-6 text-white relative z-10"
                              strokeWidth={2.5}
                            />
                          </motion.div>

                          {/* Info */}
                          <div className="flex-1">
                            <p className="text-base font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {social.label}
                            </p>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {social.username}
                            </p>
                          </div>

                          {/* Animated Arrow */}
                          <motion.div
                            className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </motion.div>
                        </div>

                        {/* Bottom Accent Line */}
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.color}`}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative glass-card rounded-3xl p-8 border border-border/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2 lily">
                "Let's build something extraordinary!"
              </p>
              <p className="text-sm text-muted-foreground">
                I'm always excited to work on new projects and collaborate with
                talented people.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-3xl" />

              {/* Form Card */}
              <div className="relative glass-card rounded-3xl p-8 sm:p-10 border border-border/50 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider"
                    >
                      <User className="w-4 h-4 text-primary" />
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-2xl glass-card border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          errors.name
                            ? "border-red-500 dark:border-red-500"
                            : "border-border/50 focus:border-primary/50"
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-2xl glass-card border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          errors.email
                            ? "border-red-500 dark:border-red-500"
                            : "border-border/50 focus:border-primary/50"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider"
                    >
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className={`w-full px-5 py-4 rounded-2xl glass-card border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          errors.subject
                            ? "border-red-500 dark:border-red-500"
                            : "border-border/50 focus:border-primary/50"
                        }`}
                      />
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4 text-primary" />
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className={`w-full px-5 py-4 rounded-2xl glass-card border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
                          errors.message
                            ? "border-red-500 dark:border-red-500"
                            : "border-border/50 focus:border-primary/50"
                        }`}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  {/* Submit Button - Enhanced */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="relative w-full py-5 px-8 rounded-2xl font-black text-white overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-primary"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />

                    {/* Glow Effect on Hover */}
                    <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500" />

                    {/* Shimmer Effect */}
                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
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
                    )}

                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Button Content */}
                    <span className="relative flex items-center justify-center gap-3 text-base">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span className="font-black">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-black">Send Message</span>
                          <motion.span
                            className="inline-block"
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/30"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/30"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                        Oops! Something went wrong. Please try again.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
