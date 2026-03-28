"use client";

import { motion } from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
  direction?: number; 
  title?: string;
  subtitle?: string;
  bgImage?: string;
  overlayOpacity?: number;
  hideDefaultBg?: boolean;
  background?: React.ReactNode; // Renders full-screen OUTSIDE the max-w content wrapper
  fullScreen?: boolean; // If true, children skip the max-w wrapper entirely
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Slide({ children, direction = 1, title, subtitle, hideDefaultBg = false, background, fullScreen = false }: SlideProps) {
  return (
    <motion.div
      key="slide"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      }}
      className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-[#021812] text-emerald-50 overflow-hidden"
    >
      {/* Pure CSS Animated Abstract Background for All Slides instead of an Image */}
      {!hideDefaultBg && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-900/20 blur-[150px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-teal-900/10 blur-[150px] rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>
      )}

      {/* Slot for full-screen backgrounds injected by individual slides */}
      {background}

      {fullScreen ? (
        // No max-w wrapper — children render edge-to-edge
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      ) : (
        <div className="w-full max-w-[1400px] px-4 md:px-8 py-4 flex flex-col h-full overflow-hidden z-10 relative">
          {(title || subtitle) && (
            <div className="mb-4 mt-6 text-center shrink-0">
              {title && (
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-100 mb-2 drop-shadow-lg tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xl md:text-2xl text-emerald-200/90 font-light tracking-widest uppercase">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0 relative">
            {children}
          </div>
        </div>
      )}
    </motion.div>
  );
}
