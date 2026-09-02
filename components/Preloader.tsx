"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Preloader() {
  // Start with true by default so there is ZERO flash of page content/header on initial render
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if user has already loaded the site during this session
    try {
      const hasLoaded = sessionStorage.getItem("dsw_has_loaded");
      if (hasLoaded === "true") {
        setIsLoading(false);
        setShouldRender(false);
        return;
      }
    } catch {
      // Fallback if sessionStorage is restricted
    }

    // Lock body scrolling while preloader covers the viewport
    document.body.style.overflow = "hidden";

    // Complete loading after minimum display duration (1600ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem("dsw_has_loaded", "true");
      } catch {
        // Storage fallback
      }
      
      // Unlock body scrolling after fade out
      setTimeout(() => {
        document.body.style.overflow = "";
        setShouldRender(false);
      }, 600);
    }, 1600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="dsw-preloader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen min-h-screen z-[999999] flex flex-col items-center justify-center bg-[#17324F] text-white select-none pointer-events-auto overflow-hidden"
        >
          {/* Accessible screen reader status announcement */}
          <div role="status" className="sr-only">
            Loading Darbar Springwala
          </div>

          {/* Visual Overlay Graphic Container (Hidden from Screen Readers) */}
          <div className="flex flex-col items-center justify-center gap-6" aria-hidden="true">
            {/* Inline SVG Spring Coil Graphic */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible"
                aria-hidden="true"
              >
                {/* 3 Static Navy Ellipses (Background Guide Lines) */}
                <ellipse cx="50" cy="30" rx="22" ry="7" fill="none" stroke="#3A5578" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="22" ry="7" fill="none" stroke="#3A5578" strokeWidth="1" />
                <ellipse cx="50" cy="70" rx="22" ry="7" fill="none" stroke="#3A5578" strokeWidth="1" />

                {/* Animated Bronze Coil Path Connecting Ellipses */}
                <motion.path
                  d="M 28 30 C 28 23, 72 23, 72 30 C 72 37, 28 43, 28 50 C 28 57, 72 57, 72 60 C 72 67, 28 63, 28 70 C 28 77, 72 77, 72 70"
                  fill="none"
                  stroke="#9C724A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.1,
                    ease: "easeInOut",
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    repeatType: "reverse",
                  }}
                />
              </svg>
            </div>

            {/* Wordmark Title */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <h1
                className="text-sm sm:text-base font-bold uppercase tracking-[0.08em] text-white font-['Space_Grotesk',sans-serif]"
                style={{ fontFamily: "'Space Grotesk', var(--font-sans), sans-serif" }}
              >
                DARBAR SPRINGWALA
              </h1>
            </motion.div>

            {/* Progress Bar (140px width, bg white/10%, fill #9C724A 0% -> 100%) */}
            <div className="w-[140px] h-[2px] bg-white/10 rounded-full overflow-hidden mt-1">
              <motion.div
                className="h-full bg-[#9C724A] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
