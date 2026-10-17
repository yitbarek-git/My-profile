"use client";

import { useState, Children } from "react";
import { motion } from "motion/react";

type DeckProps = {
  children: React.ReactNode;
};

const positions = ["left", "center", "right"] as const;

export default function Deck({ children }: DeckProps) {
  const cards = Children.toArray(children);
  const [cardOrder, setCardOrder] = useState(() =>
    cards.map((_, index) => index),
  );

  function moveToCenter(index: number) {
    const centerIndex = cardOrder.indexOf(index);
    if (centerIndex === 1) return;

    const nextOrder = [...cardOrder];
    [nextOrder[centerIndex], nextOrder[1]] = [
      nextOrder[1],
      nextOrder[centerIndex],
    ];
    setCardOrder(nextOrder);
  }

  return (
    // adjust the h-clamp if the cards overlaps with the button
    <div className="relative mx-[calc(50%-50vw)] my-4 h-[clamp(35rem,65vw,35rem)] overflow-x-clip">
      {cardOrder.slice(0, 3).map((cardIndex, positionIndex) => {
        const card = cards[cardIndex];
        const position = positions[positionIndex];
        const isCenter = position === "center";

        const xOffset =
          position === "left" ? "-108%" : position === "right" ? "12%" : "-50%";
        const rotation =
          position === "left" ? -16 : position === "right" ? 16 : 0;

        return (
          <motion.button
            key={cardIndex}
            type="button"
            aria-label={isCenter ? "Current project" : "View project"}
            /* 
              transform-gpu forces layer promotion on mobile devices.
              style={{ touchAction: "manipulation" }} removes mobile 300ms tap delays.
            */
            className={`absolute top-16 left-1/2 w-[min(62%,24rem)] text-left transform-gpu will-change-transform ${
              isCenter ? "z-20 cursor-default" : "z-10 cursor-pointer"
            }`}
            style={{ touchAction: "manipulation" }}
            animate={{
              x: xOffset,
              rotate: rotation,
              scale: isCenter ? 1 : 0.92,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              restDelta: 0.01,
            }}
            whileHover={isCenter ? { y: -8, scale: 1.04 } : { scale: 0.96 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => moveToCenter(cardIndex)}
          >
            {card}
          </motion.button>
        );
      })}
    </div>
  );
}
