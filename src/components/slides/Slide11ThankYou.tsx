"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import confetti from "canvas-confetti";

export default function Slide11ThankYou() {
  const [launched, setLaunched] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const COLORS = [
    "#34d399", // emerald
    "#facc15", // yellow
    "#f97316", // orange
    "#ec4899", // pink
    "#60a5fa", // blue
    "#a78bfa", // violet
    "#2dd4bf", // teal
    "#fb7185", // rose
  ];

  const launchFireworks = () => {
    const duration = 12 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    intervalRef.current = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      const particleCount = 60;

      confetti({
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.1, 0.5) },
        colors: COLORS,
        spread: 100,
        startVelocity: randomInRange(30, 55),
        gravity: 0.8,
        ticks: 200,
      });

      confetti({
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.1, 0.5) },
        colors: COLORS,
        spread: 100,
        startVelocity: randomInRange(30, 55),
        gravity: 0.8,
        ticks: 200,
      });

      confetti({
        particleCount: 30,
        origin: { x: randomInRange(0.4, 0.6), y: randomInRange(0.0, 0.3) },
        colors: COLORS,
        spread: 120,
        startVelocity: randomInRange(50, 70),
        gravity: 0.9,
        ticks: 300,
      });
    }, 350);
  };

  useEffect(() => {
    // Auto-launch when slide mounts
    const timeout = setTimeout(() => {
      setLaunched(true);
      launchFireworks();
    }, 600);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
  };

  const popUp: any = {
    hidden: { opacity: 0, scale: 0.5, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
  };

  const slide11Bg = (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep green/black radial — static */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d2518_0%,#020d07_60%,#000000_100%)]" />
      {/* Static conic burst — GPU-free */}
      <div className="absolute inset-0 opacity-5 bg-[conic-gradient(from_0deg,#34d399,#facc15,#f97316,#ec4899,#60a5fa,#a78bfa,#34d399)]" />
      {/* Ambient blobs — float animation (translate only, GPU layer) */}
      <div className="absolute top-[10%] left-[5%] w-[38vw] h-[38vw] bg-emerald-600/20 rounded-[60%_40%_30%_70%] blur-3xl animate-float" />
      <div className="absolute bottom-[5%] right-[5%] w-[32vw] h-[32vw] bg-yellow-600/20 rounded-[30%_70%_60%_40%] blur-3xl animate-float-delayed" />
      <div className="absolute top-[45%] right-[12%] w-[18vw] h-[18vw] bg-pink-500/15 rounded-full blur-2xl animate-pulse-slow" />
    </div>
  );

  return (
    <Slide key="11" overlayOpacity={0.96} hideDefaultBg background={slide11Bg} fullScreen>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col h-full justify-center items-center text-center max-w-7xl mx-auto relative z-10 gap-8 px-8"
      >
        {/* Stars / Sparkle Row */}
        <motion.div variants={popUp} className="flex items-center gap-4 md:gap-8">
          {["🎆", "✨", "🎇", "✨", "🎆"].map((e, i) => (
            <motion.span
              key={i}
              className="text-3xl md:text-5xl"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        {/* Huge Thank You */}
        <motion.h1
          variants={popUp}
          className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[1.05] tracking-tight"
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-yellow-200 to-amber-400 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Trân Trọng
          </motion.span>
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-300 to-emerald-400 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Cảm Ơn!
          </motion.span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          variants={popUp}
          className="text-[1.3rem] md:text-[1.8rem] font-light text-emerald-100/90 tracking-[0.2em] uppercase border-t border-b border-yellow-500/30 py-5 px-10 backdrop-blur-sm bg-black/20 rounded-2xl"
        >
          Hành trình vi sinh kì bí — Tạo nên Mỹ vị Nhân gian
        </motion.p>

        {/* Re-launch button */}
        <motion.button
          variants={popUp}
          onClick={() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            launchFireworks();
          }}
          className="mt-2 px-10 py-4 rounded-full bg-gradient-to-r from-emerald-600/40 to-yellow-600/40 border border-emerald-400/40 text-emerald-100 font-bold tracking-widest text-lg uppercase backdrop-blur-md hover:scale-105 hover:border-yellow-400/70 hover:from-emerald-600/60 hover:to-yellow-600/60 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          🎆 Bắn Pháo Hoa
        </motion.button>
      </motion.div>
    </Slide>
  );
}
