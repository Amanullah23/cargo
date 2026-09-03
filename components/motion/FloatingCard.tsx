"use client";

import { motion } from "framer-motion";

export function FloatingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 0.6, 0, -0.6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.015 }}
    >
      {children}
    </motion.div>
  );
}
