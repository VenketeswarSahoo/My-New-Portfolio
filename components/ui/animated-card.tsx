"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedCardProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  active = false,
  onClick,
  children,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      layout
      transition={{
        layout: { type: "spring", stiffness: 80, damping: 12 },
      }}
      animate={{
        scale: active ? 1.03 : 1,
        backgroundColor: active
          ? "var(--card-active-bg)"
          : "var(--card-bg)",
        boxShadow: active
          ? "0px 8px 25px rgba(0,0,0,0.25)"
          : "0px 2px 8px rgba(0,0,0,0.1)",
      }}
      onClick={onClick}
      className={`
        p-6 rounded-3xl backdrop-blur-lg relative overflow-hidden 
        cursor-pointer transition-all duration-300
        bg-zinc-100 dark:bg-zinc-900
        ${className}
      `}
      style={{
        ["--card-bg" as any]: "rgb(244 244 245)",
        ["--card-active-bg" as any]: "rgb(228 228 231)",
      }}
    >
      {children}
    </motion.div>
  );
}
