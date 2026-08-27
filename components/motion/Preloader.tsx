"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Skip preloader if already loaded in this session to prevent repetitive interruptions
    const alreadyShown = sessionStorage.getItem("ds_loaded");
    if (alreadyShown) {
      setVisible(false);
      return;
    }

    // Set a safety timer to fade out the preloader
    const minTimer = setTimeout(() => {
      sessionStorage.setItem("ds_loaded", "1");
      setVisible(false);
    }, 1600);

    return () => clearTimeout(minTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {/* Animated Winding Spring SVG */}
          <div className="relative h-24 w-24">
            <svg
              viewBox="0 0 80 160"
              width="80"
              height="160"
              className="overflow-visible"
            >
              <motion.path
                d="M 40,15 C 75,15 75,35 40,40 C 5,45 5,65 40,70 C 75,75 75,95 40,100 C 5,105 5,125 40,130 C 75,135 75,145 40,150"
                fill="none"
                stroke="var(--bronze-2)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 0.61, 0.36, 1],
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </svg>
          </div>

          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-bronze-2 mt-4">
            Darbar Springwala
          </span>
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-steel-2">
            Precision in Progress
          </span>

          {/* Progress Bar */}
          <span className="h-[2px] w-[140px] overflow-hidden rounded-full bg-white/10 mt-2">
            <motion.span
              className="block h-full bg-bronze"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
