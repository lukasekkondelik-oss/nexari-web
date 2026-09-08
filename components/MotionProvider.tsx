"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Loads only the animation features actually used (fade/slide/scale variants,
 * viewport triggers, exit animations) instead of the full framer-motion
 * bundle, keeping the JS shipped for the site's motion layer small.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
