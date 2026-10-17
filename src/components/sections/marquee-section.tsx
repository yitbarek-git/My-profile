"use client";

import { motion } from "motion/react";

const ITEMS = [
  "full-stack developer",
  "web developer",
  "C++ programmer",
  "Python developer",
  "Java programmer",
  "database enthusiast",
  "problem solver",
  "building Aplus Academy",
  "full-stack developer",
  "web developer",
  "C++ programmer",
  "Python developer",
  "Java programmer",
  "database enthusiast",
  "problem solver",
  "building Aplus Academy",
];

export default function MarqueeSection() {
  return (
    <div className="container mt-12 overflow-hidden border-y select-none">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-sm ">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
