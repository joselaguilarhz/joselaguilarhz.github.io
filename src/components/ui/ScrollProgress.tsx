import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-30 h-[2px] w-full origin-left bg-white/70"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
