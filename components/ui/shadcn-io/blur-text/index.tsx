"use client";

import { motion, Transition, Easing } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  textColor?: string;
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  gradientOnFullText?: boolean;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
) => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "letters",
  direction = "top",
  textColor = "text-black dark:text-white",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  gradientOnFullText = true,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(containerRef.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -40 }
        : { filter: "blur(10px)", opacity: 0, y: 40 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(4px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  const isGradient =
    textColor.includes("from-") ||
    textColor.includes("via-") ||
    textColor.includes("to-") ||
    textColor.includes("bg-gradient") ||
    textColor.includes("gradient-to");

  // Gradient on full text - Apply blur to wrapper, gradient to text
  if (gradientOnFullText && isGradient) {
    return (
      <div
        ref={containerRef}
        className={cn("relative inline-flex flex-wrap", className)}
      >
        {elements.map((segment, index) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

          const spanTransition: Transition = {
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
            ease: easing,
          };

          return (
            <motion.span
              key={index}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={
                index === elements.length - 1 ? onAnimationComplete : undefined
              }
              className="inline-block"
              style={{
                willChange: "transform, opacity, filter",
              }}
            >
              <span
                className={cn(
                  "inline-block",
                  textColor,
                  "bg-clip-text text-transparent"
                )}
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {segment === " " ? "\u00A0" : segment}
              </span>
              {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
            </motion.span>
          );
        })}
      </div>
    );
  }

  // Per-letter gradient/color version
  return (
    <div ref={containerRef} className={cn("inline-flex flex-wrap", className)}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            className={cn(
              "inline-block",
              isGradient
                ? `${textColor} bg-clip-text text-transparent`
                : textColor
            )}
            style={{
              willChange: "transform, opacity, filter",
              ...(isGradient && {
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }),
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BlurText;
