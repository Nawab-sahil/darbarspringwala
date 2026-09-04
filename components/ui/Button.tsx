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

  // Base styling with minimum 44px height tap target & 2px sharp corners
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all duration-120 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none min-h-[44px] min-w-[44px] active:scale-[0.98]";

  // Size styling
  const sizeClasses =
    size === "sm" ? "py-2.5 px-4 text-[11px]" : "py-3 px-6 text-xs font-medium";

  // Variant styling matching design system
  const variantClasses = isPrimary
    ? "bg-[#17324F] text-white shadow-xs hover:bg-[#10243b] border border-[#17324F]"
    : "bg-white border border-[#17324F]/15 hover:border-[#17324F] hover:bg-[#FBFAF7] text-[#17324F]";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {isPrimary && !hideIcon && (
        <ArrowRight className="h-3.5 w-3.5 text-[#E5C158]" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}
