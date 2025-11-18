// components/LetterStaggerText.tsx
"use client";
import { motion } from "framer-motion";

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 120 },
  },
};

export default function LetterStaggerText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
