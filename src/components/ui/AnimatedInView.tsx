import type { PropsWithChildren } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedInViewProps = PropsWithChildren<{
  className?: string;
}>;

export default function AnimatedInView({
  children,
  className,
}: AnimatedInViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
