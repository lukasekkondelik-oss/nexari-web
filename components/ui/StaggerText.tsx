"use client";

import { motion, useReducedMotion } from "framer-motion";

interface StaggerTextProps {
  lines: string[];
  className?: string;
  delay?: number;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
};

const line = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerText({ lines, className, delay = 0 }: StaggerTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {lines.map((text) => (
          <span key={text} className="block">
            {text}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {lines.map((text) => (
        <span key={text} className="block overflow-hidden">
          <motion.span variants={line} className="block">
            {text}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
