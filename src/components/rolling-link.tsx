"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import { useSound } from "./hooks/use-sound";

type RollingLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
};

const spanVariants: Variants = {
  normal: { y: 0 },
  hover: { y: "-100%" },
};

const secondSpanVariants: Variants = {
  normal: { y: "150%" },
  hover: { y: 0 },
};

export default function RollingLink({ children, ...props }: RollingLinkProps) {
  const { play } = useSound();

  const text = typeof children === "string" ? children : "";

  return (
    <motion.span
      onHoverStart={() => play("hover")}
      onClick={() => play("click")}
      initial="normal"
      whileHover="hover"
      className={`relative inline-block overflow-hidden no-underline ${props.className ?? ""}`}
    >
      <Link {...props} className="no-underline">
        <motion.span
          className="block"
          variants={spanVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 block"
          variants={secondSpanVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          aria-hidden
        >
          {text}
        </motion.span>
      </Link>
    </motion.span>
  );
}
