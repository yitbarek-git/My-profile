"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "motion/react";

type Effect = { id: string; x: number; y: number };
type Particle = Effect & { angle: number; distance: number };
type InteractionMode =
  | "rings"
  | "burst"
  | "particles"
  | "crosshair"
  | "wavy"
  | "sniper";

interface Props {
  color?: string;
  interactionMode?: InteractionMode;
  duration?: number;
  strokeWidth?: number;
  effectSize?: number;
  rotation?: number;
  children?: ReactNode;
}

const BURST_ANGLES = [45, 80, 115, 150];
const CROSSHAIR_ANGLES = [0, 90, 180, 270];
const WAVY_ANGLES = [45, 90, 135, 180];
const SNIPER_DOT_ANGLES = [
  Math.PI / 3,
  (2 * Math.PI) / 3,
  (4 * Math.PI) / 3,
  (5 * Math.PI) / 3,
  Math.PI / 6,
  (5 * Math.PI) / 6,
  (7 * Math.PI) / 6,
  (11 * Math.PI) / 6,
];

export default function MouseEffects({
  color = "#ffffff",
  interactionMode = "burst",
  duration = 0.5,
  strokeWidth = 2,
  effectSize = 60,
  rotation = 12,
  children,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [rings, setRings] = useState<Effect[]>([]);
  const [bursts, setBursts] = useState<Effect[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [crosshairs, setCrosshairs] = useState<Effect[]>([]);
  const [wavies, setWavies] = useState<Effect[]>([]);
  const [snipers, setSnipers] = useState<Effect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;

      if (interactionMode === "rings") {
        setRings((prev) => [...prev, { id, x, y }]);
      } else if (interactionMode === "burst") {
        setBursts((prev) => [...prev, { id, x, y }]);
      } else if (interactionMode === "particles") {
        const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
          id: `${id}-${i}`,
          x,
          y,
          angle: i * 45 * (Math.PI / 180),
          distance: effectSize * 0.2 + Math.random() * (effectSize * 0.3),
        }));
        setParticles((prev) => [...prev, ...newParticles]);
      } else if (interactionMode === "crosshair") {
        setCrosshairs((prev) => [...prev, { id, x, y }]);
      } else if (interactionMode === "wavy") {
        setWavies((prev) => [...prev, { id, x, y }]);
      } else if (interactionMode === "sniper") {
        setSnipers((prev) => [...prev, { id, x, y }]);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [interactionMode, effectSize]);

  const svgContainerStyle = (x: number, y: number): CSSProperties => ({
    position: "absolute",
    left: x - effectSize / 2,
    top: y - effectSize / 2,
    width: effectSize,
    height: effectSize,
    pointerEvents: "none",
    overflow: "visible",
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "center",
  });

  const center = effectSize / 2;

  const hasEffects =
    rings.length > 0 ||
    bursts.length > 0 ||
    particles.length > 0 ||
    crosshairs.length > 0 ||
    wavies.length > 0 ||
    snipers.length > 0;

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}

      {hasEffects && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <AnimatePresence>
            {interactionMode === "rings" &&
              rings.map((ring) => (
                <motion.svg
                  key={ring.id}
                  style={svgContainerStyle(ring.x, ring.y)}
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{
                    scale: {
                      duration,
                      ease: [0, 0, 0.2, 1],
                    },
                    opacity: {
                      duration: duration * 0.2,
                      delay: duration * 0.8,
                      ease: "linear",
                    },
                  }}
                  onAnimationComplete={() =>
                    setRings((prev) => prev.filter((r) => r.id !== ring.id))
                  }
                >
                  <circle
                    cx={center}
                    cy={center}
                    r={effectSize / 4}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                  />
                </motion.svg>
              ))}

            {interactionMode === "burst" &&
              bursts.map((burst) => (
                <motion.svg
                  key={burst.id}
                  style={svgContainerStyle(burst.x, burst.y)}
                  onAnimationComplete={() =>
                    setBursts((prev) => prev.filter((b) => b.id !== burst.id))
                  }
                >
                  {BURST_ANGLES.map((angleDeg, index) => {
                    const angle = angleDeg * (Math.PI / 180);

                    // Explicit fallback checks ensuring values are strictly numbers
                    const rStart = effectSize * 0.1;
                    const rMid = effectSize * 0.25;
                    const rEnd = effectSize * 0.5;

                    const startX = center + rStart * Math.cos(angle);
                    const startY = center - rStart * Math.sin(angle);
                    const midX = center + rMid * Math.cos(angle);
                    const midY = center - rMid * Math.sin(angle);
                    const endX = center + rEnd * Math.cos(angle);
                    const endY = center - rEnd * Math.sin(angle);

                    return (
                      <motion.line
                        key={index}
                        x1={startX}
                        y1={startY}
                        x2={midX}
                        y2={midY}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="square"
                        initial={{
                          x1: startX,
                          y1: startY,
                          x2: midX,
                          y2: midY,
                          opacity: 1,
                        }}
                        animate={{
                          x1: [startX, endX],
                          y1: [startY, endY],
                          x2: [midX, endX],
                          y2: [midY, endY],
                          opacity: [1, 1, 0],
                        }}
                        transition={{
                          duration,
                          times: [0, 0.6, 1],
                          ease: "easeOut",
                          delay: index * 0.02,
                        }}
                      />
                    );
                  })}
                </motion.svg>
              ))}
            {interactionMode === "particles" &&
              particles.map((particle) => {
                const finalX =
                  particle.x + Math.cos(particle.angle) * particle.distance;
                const finalY =
                  particle.y + Math.sin(particle.angle) * particle.distance;

                return (
                  <motion.div
                    key={particle.id}
                    style={{
                      position: "absolute",
                      left: particle.x - strokeWidth / 2,
                      top: particle.y - strokeWidth / 2,
                      width: strokeWidth,
                      height: strokeWidth,
                      backgroundColor: color,
                      borderRadius: "50%",
                      pointerEvents: "none",
                      transformOrigin: "center",
                      rotate: rotation,
                    }}
                    initial={{
                      width: 0,
                      height: 0,
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      width: [0, strokeWidth, strokeWidth, 0],
                      height: [0, strokeWidth, strokeWidth, 0],
                      x: [0, 0, finalX - particle.x, finalX - particle.x],
                      y: [0, 0, finalY - particle.y, finalY - particle.y],
                      opacity: [1, 1, 1, 0],
                    }}
                    transition={{
                      duration,
                      times: [0, 0.2, 0.6, 1],
                      ease: "easeOut",
                    }}
                    onAnimationComplete={() =>
                      setParticles((prev) =>
                        prev.filter((p) => p.id !== particle.id),
                      )
                    }
                  />
                );
              })}

            {interactionMode === "crosshair" &&
              crosshairs.map((crosshair) => (
                <motion.svg
                  key={crosshair.id}
                  style={svgContainerStyle(crosshair.x, crosshair.y)}
                  onAnimationComplete={() =>
                    setCrosshairs((prev) =>
                      prev.filter((c) => c.id !== crosshair.id),
                    )
                  }
                >
                  {CROSSHAIR_ANGLES.map((angleDeg, index) => {
                    const angle = angleDeg * (Math.PI / 180);
                    const lineLength = effectSize * 0.3;
                    const startX = center + 20 * Math.cos(angle);
                    const startY = center - 20 * Math.sin(angle);
                    const endX = center + (20 + lineLength) * Math.cos(angle);
                    const endY = center - (20 + lineLength) * Math.sin(angle);

                    return (
                      <motion.line
                        key={index}
                        x1={startX}
                        y1={startY}
                        x2={center}
                        y2={center}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="square"
                        animate={{
                          x1: [startX, endX],
                          y1: [startY, endY],
                          x2: [center, endX],
                          y2: [center, endY],
                          opacity: [1, 1, 0],
                        }}
                        transition={{
                          duration: duration * 0.8,
                          times: [0, 0.5, 1],
                          ease: "easeOut",
                          delay: index * 0.02,
                        }}
                      />
                    );
                  })}
                </motion.svg>
              ))}

            {interactionMode === "wavy" &&
              wavies.map((wavy) => (
                <motion.svg
                  key={wavy.id}
                  style={svgContainerStyle(wavy.x, wavy.y)}
                  onAnimationComplete={() =>
                    setWavies((prev) => prev.filter((w) => w.id !== wavy.id))
                  }
                >
                  {WAVY_ANGLES.map((angleDeg, index) => {
                    const angle = angleDeg * (Math.PI / 180);
                    const startRadius = effectSize * 0.1;
                    const endRadius = effectSize * 0.5;
                    const startX = center + startRadius * Math.cos(angle);
                    const startY = center - startRadius * Math.sin(angle);
                    const endX = center + endRadius * Math.cos(angle);
                    const endY = center - endRadius * Math.sin(angle);
                    const midX = (startX + endX) / 2;
                    const midY = (startY + endY) / 2;
                    const waveOffset = effectSize * 0.05;
                    const control1X =
                      midX + waveOffset * Math.cos(angle + Math.PI / 2);
                    const control1Y =
                      midY - waveOffset * Math.sin(angle + Math.PI / 2);
                    const wavyPath = `M ${startX} ${startY} Q ${control1X} ${control1Y} ${midX} ${midY} T ${endX} ${endY}`;

                    return (
                      <motion.path
                        key={index}
                        d={wavyPath}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        fill="none"
                        initial={{
                          pathLength: 0,
                          opacity: 1,
                        }}
                        animate={{
                          pathLength: 1,
                          opacity: 0,
                        }}
                        transition={{
                          pathLength: {
                            duration,
                            ease: "easeOut",
                          },
                          opacity: {
                            duration: duration * 0.4,
                            delay: duration * 0.6,
                            ease: "linear",
                          },
                        }}
                      />
                    );
                  })}
                </motion.svg>
              ))}

            {interactionMode === "sniper" &&
              snipers.map((sniper) => (
                <motion.div
                  key={sniper.id}
                  onAnimationComplete={() =>
                    setSnipers((prev) => prev.filter((s) => s.id !== sniper.id))
                  }
                >
                  <svg style={svgContainerStyle(sniper.x, sniper.y)}>
                    {CROSSHAIR_ANGLES.map((angleDeg, index) => {
                      const angle = angleDeg * (Math.PI / 180);
                      const lineLength = effectSize * 0.2;
                      const startX = center + 5 * Math.cos(angle);
                      const startY = center - 5 * Math.sin(angle);
                      const endX = center + (5 + lineLength) * Math.cos(angle);
                      const endY = center - (5 + lineLength) * Math.sin(angle);

                      return (
                        <motion.line
                          key={index}
                          x1={startX}
                          y1={startY}
                          x2={endX}
                          y2={endY}
                          stroke={color}
                          strokeWidth={strokeWidth}
                          strokeLinecap="square"
                          animate={{
                            x1: [startX, endX],
                            y1: [startY, endY],
                            x2: [center, endX],
                            y2: [center, endY],
                            opacity: [1, 1, 0],
                          }}
                          transition={{
                            duration,
                            times: [0, 0.6, 1],
                            ease: "easeOut",
                            delay: index * 0.01,
                          }}
                        />
                      );
                    })}
                  </svg>
                  {SNIPER_DOT_ANGLES.map((angle, index) => {
                    const finalX = Math.cos(angle) * (effectSize * 0.4);
                    const finalY = Math.sin(angle) * (effectSize * 0.4);

                    return (
                      <motion.div
                        key={index}
                        style={{
                          position: "absolute",
                          left: sniper.x - strokeWidth / 2,
                          top: sniper.y - strokeWidth / 2,
                          width: strokeWidth,
                          height: strokeWidth,
                          backgroundColor: color,
                          pointerEvents: "none",
                          transformOrigin: "center",
                          rotate: rotation,
                        }}
                        initial={{
                          x: 0,
                          y: 0,
                          width: strokeWidth,
                          height: strokeWidth,
                          opacity: 1,
                        }}
                        animate={{
                          x: finalX,
                          y: finalY,
                          width: 0,
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
