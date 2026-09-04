"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  maxOffset?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  maxOffset = 6,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  // Check if device supports fine hover/pointer (Desktop/Mouse)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const springConfig = { stiffness: 350, damping: 25 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Limit offset to maxOffset (e.g. max 6px)
    const moveX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * 0.2));
    const moveY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * 0.2));

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    if (!canHover) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={canHover ? handleMouseMove : undefined}
      onMouseLeave={canHover ? handleMouseLeave : undefined}
      style={canHover ? { x, y } : undefined}
      onClick={onClick}
      className={`inline-block active:scale-[0.98] transition-transform duration-100 ${className}`}
    >
      {children}
    </motion.div>
  );
}
