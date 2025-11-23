"use client";
import React, { lazy, Suspense } from "react";
import HeroText from "./HeroText";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/shadcn-io/background-gradient";

// Lazy load heavy background components
const WavyBackground = lazy(() =>
  import("../ui/shadcn-io/wavy-background").then((mod) => ({
    default: mod.WavyBackground,
  }))
);

const Hero = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Only load backgrounds after initial render
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen max-h-fit flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        {mounted && (
          <Suspense fallback={null}>
            <div className="absolute inset-0 -z-10">
              <WavyBackground className="opacity-50" />
            </div>
          </Suspense>
        )}
        <section
          id="home"
          className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10"
        >
          {/* Container: Left (Text) + Right (Image) */}
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT: Hero Text */}
            <div className="order-2 md:order-1">
              <HeroText />
            </div>

            {/* RIGHT: Anime Developer Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 md:order-2 flex justify-center max-lg:hidden -mt-32"
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
        </section>
      </div>
    </div>
  );
};

export default Hero;
