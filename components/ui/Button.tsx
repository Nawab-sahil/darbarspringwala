"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "default" | "sm";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  hideIcon?: boolean;
}

export default function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  hideIcon = false,
}: ButtonProps) {
  const isPrimary = variant === "primary";

  // Base styling
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none";

  // Size styling
  const sizeClasses =
    size === "sm" ? "py-2 px-4 text-xs" : "py-3.5 px-7 text-sm";

  // Variant styling
  const variantClasses = isPrimary
    ? "bg-[#9C724A] hover:bg-[#b98f5e] text-[#1a1206] shadow-md shadow-[#9C724A]/20 hover:shadow-lg hover:shadow-[#9C724A]/30 font-bold"
    : "bg-transparent border border-[#e2ded4] hover:border-[#17202B] text-[#17202B]";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  // Content with animated right arrow on primary variant
  const content = (
    <>
      <span>{children}</span>
      {isPrimary && !hideIcon && (
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-flex items-center"
        >
          <ArrowRight className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={isPrimary ? { y: -2 } : undefined}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClasses} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={isPrimary ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
}
