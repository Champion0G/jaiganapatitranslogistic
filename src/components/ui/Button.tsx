"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", animate = true, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-red text-white hover:bg-red-800 shadow-lg shadow-brand-red/20",
      secondary: "bg-brand-dark text-white hover:bg-black shadow-lg shadow-brand-dark/20",
      outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
      ghost: "text-brand-dark hover:bg-brand-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={animate ? { scale: 1.02 } : undefined}
        whileTap={animate ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider font-semibold cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
