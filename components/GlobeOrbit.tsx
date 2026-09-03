"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, Package, Boxes, MapPin } from "lucide-react";

const ORBIT_ITEMS = [
  { icon: Plane, accent: "bg-accent-tracking", angle: 0 },
  { icon: Ship, accent: "bg-accent-network", angle: 72 },
  { icon: Truck, accent: "bg-accent-secure", angle: 144 },
  { icon: Package, accent: "bg-accent-support", angle: 216 },
  { icon: Boxes, accent: "bg-brand-violet", angle: 288 },
];

const PINS = [
  { color: "text-accent-tracking", top: "24%", left: "60%", delay: 0 },
  { color: "text-brand-gold", top: "50%", left: "28%", delay: 0.6 },
  { color: "text-accent-support", top: "64%", left: "56%", delay: 1.2 },
];

const RADIUS_PCT = 46;

export default function GlobeOrbit() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-full bg-brand-blue-light/20 blur-3xl" />

      {/* dashed orbit track — slow independent spin */}
      <motion.svg
        viewBox="0 0 320 320"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="160"
          cy="160"
          r="150"
          fill="none"
          stroke="var(--glass-border)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </motion.svg>

      {/* globe */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full sm:h-48 sm:w-48">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, var(--color-brand-blue-light), var(--color-brand-blue) 55%, var(--color-navy-900) 100%)",
            boxShadow:
              "0 0 60px rgba(41, 82, 214, 0.35), inset -12px -12px 30px rgba(0,0,0,0.35)",
          }}
        />
        <motion.svg
          viewBox="0 0 200 200"
          className="relative h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <g stroke="rgba(255,255,255,0.28)" strokeWidth="1" fill="none">
            <ellipse cx="100" cy="100" rx="95" ry="30" />
            <ellipse cx="100" cy="100" rx="95" ry="60" />
            <ellipse cx="100" cy="100" rx="30" ry="95" />
            <ellipse cx="100" cy="100" rx="60" ry="95" />
            <circle cx="100" cy="100" r="95" />
          </g>
        </motion.svg>

        {/* location pins — fixed on the surface, gentle bob */}
        {PINS.map((p, i) => (
          <motion.span
            key={i}
            className={`absolute ${p.color}`}
            style={{
              top: p.top,
              left: p.left,
              transform: "translate(-50%, -100%)",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          >
            <MapPin className="h-5 w-5 drop-shadow-md" fill="currentColor" />
          </motion.span>
        ))}
      </div>

      {/* orbiting cargo-method icons */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_ITEMS.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const top = 50 + RADIUS_PCT * Math.sin(rad);
          const left = 50 + RADIUS_PCT * Math.cos(rad);
          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                className={`${item.accent} flex h-11 w-11 items-center justify-center rounded-xl shadow-lg`}
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                <item.icon className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
