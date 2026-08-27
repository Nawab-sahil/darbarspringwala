"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollCoilRail() {
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Map scroll progress (0 to 1) to spring scale Y (1.0 = fully extended, 0.45 = compressed)
  const scaleY = useTransform(scrollYProgress, [0, 1], [1.0, 0.45]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Sync state with scroll progress for the text counter
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isDesktop) return null;

  return (
    <div className="fixed right-6 top-[30%] z-45 hidden xl:flex flex-col items-center gap-4 bg-white/70 backdrop-blur-md border border-line p-3.5 rounded-full shadow-sm w-12">
      {/* Scroll indicator text */}
      <span className="font-mono text-[9px] font-bold text-steel-2 uppercase tracking-wider writing-mode-vertical">
        Coil
      </span>

      {/* SVG Spring Rail Container */}
      <div className="relative h-32 w-6 flex items-center justify-center">
        {/* Static blueprint helper axis */}
        <div className="absolute top-0 bottom-0 left-[11px] w-[1px] bg-line border-dashed" />
        
        {/* Animated Spring */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 120"
            width="20"
            height="100"
            fill="none"
            className="overflow-visible"
          >
            <path
              d="M 12,0 
                 C 22,0 22,12 12,15 
                 C 2,18 2,30 12,33 
                 C 22,36 22,48 12,51 
                 C 2,54 2,66 12,69 
                 C 22,72 22,84 12,87 
                 C 2,90 2,102 12,105 
                 C 22,108 22,118 12,120"
              stroke="var(--bronze)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Live percentage counter */}
      <div className="flex flex-col items-center">
        <span className="font-mono text-[10px] font-bold text-navy">
          {scrollPercent}%
        </span>
        <span className="font-mono text-[8px] text-steel-2 uppercase mt-0.5 tracking-tighter">
          Load
        </span>
      </div>
    </div>
  );
}
