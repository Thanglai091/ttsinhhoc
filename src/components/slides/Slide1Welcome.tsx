"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

const bgLayer = (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Deep emerald base radial */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,#064e3b_0%,#021812_55%,#000_100%)]" />
    {/* Giant amoeba blobs — full-screen */}
    <div className="absolute top-[5%] left-[5%] w-[65vw] h-[65vw] max-w-[1000px] max-h-[1000px] bg-emerald-500/30 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-[spin_22s_linear_infinite] blur-3xl" />
    <div className="absolute bottom-[-5%] right-[-5%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] bg-yellow-500/25 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[spin_28s_linear_infinite_reverse] blur-3xl" />
    <div className="absolute top-[35%] left-[50%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-lime-400/20 rounded-full animate-float blur-2xl" />
    {/* Small floating nuclei */}
    <div className="absolute top-[12%] right-[12%] w-10 h-10 bg-yellow-300/70 rounded-full blur-sm animate-float" />
    <div className="absolute bottom-[25%] left-[18%] w-6 h-6 bg-emerald-300/70 rounded-full blur-sm animate-float-delayed" />
    <div className="absolute top-[60%] right-[20%] w-4 h-4 bg-lime-400/80 rounded-full blur-sm animate-pulse" />
  </div>
);

export default function Slide1Welcome() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.2 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <Slide key="1" hideDefaultBg background={bgLayer} fullScreen>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center text-center h-full w-full z-10 relative px-8"
      >
        {/* Bio Icon */}
        <motion.div variants={itemVariants} className="mb-12 relative flex items-center justify-center">
          <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.5)_0%,transparent_70%)] rounded-full animate-pulse-slow" />
          <svg className="w-24 h-24 md:w-32 md:h-32 text-emerald-300 relative z-10 drop-shadow-[0_5px_25px_rgba(16,185,129,1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="rgba(250,204,21,0.9)" strokeWidth="1.5" className="animate-[spin_15s_linear_infinite_reverse]" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 12L15 9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 12L9 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-yellow-200 to-amber-400 mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] leading-[1.1] tracking-tight"
        >
          Sinh Khí Tương Việt
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-[1.9rem] text-emerald-200/95 font-light tracking-[0.25em] mb-16 drop-shadow-xl uppercase"
        >
          Kỷ Nguyên Vi Sinh Dân Gian
        </motion.h2>

        {/* CTA button */}
        <motion.div
          variants={itemVariants}
          className="cursor-pointer group flex items-center gap-6 px-14 py-5 rounded-[40px] bg-gradient-to-r from-emerald-700/50 via-yellow-800/30 to-emerald-700/50 border border-yellow-400/50 backdrop-blur-xl shadow-[0_10px_50px_rgba(16,185,129,0.4)] hover:scale-105 hover:shadow-[0_10px_60px_rgba(250,204,21,0.4)] transition-all duration-500 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-yellow-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse relative z-10 shadow-[0_0_15px_#eab308]" />
          <span className="text-emerald-50 font-bold tracking-widest text-[1.1rem] uppercase relative z-10">
            Khai Phá Huyền Cơ
          </span>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
