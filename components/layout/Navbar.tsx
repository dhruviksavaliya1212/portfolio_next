"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navY = useTransform(scrollY, [0, 100], [0, 0]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity, y: navY }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 backdrop-blur-sm"
      >
        <div className="glass-premium rounded-2xl shadow-xl ">
          <div className="px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="#home">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-75"></div>
                    <div className="relative  bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                      D
                    </div>
                  </div>
                  {/* <span className="text-xl font-bold hidden sm:block gradient-text">
                    Dhruvik
                  </span> */}
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 bg-secondary/50 rounded-full px-2 py-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        className="relative rounded-full hover:bg-primary/10 text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="rounded-full relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-indigo-600" />
                    )}
                  </Button>
                </motion.div>

                {/* CTA Button - Desktop */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block"
                >
                  <Link href="#contact">
                    <Button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Let's Talk
                    </Button>
                  </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="rounded-full"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden"
        >
          <div className="glass-premium rounded-2xl shadow-2xl p-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left rounded-xl hover:bg-primary/10 text-lg"
                  >
                    {item.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="pt-4"
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
