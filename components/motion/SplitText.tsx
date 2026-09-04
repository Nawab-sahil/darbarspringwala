"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: { [key: string]: string };
}

export default function SplitText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  highlightWords = {},
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const words = text.split(" ");
  const customEase = [0.22, 0.61, 0.36, 1] as const;

  // On Mobile: animate whole phrase block or lines to prevent 375px word clutter
  if (isMobile) {
    return (
      <motion.span
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: customEase }}
        className={`inline-block ${className}`}
      >
        {text}
      </motion.span>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: customEase,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`inline-wrap ${className}`}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const customStyle = highlightWords[cleanWord] || "";

        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] last:mr-0 ${wordClassName} ${customStyle}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
