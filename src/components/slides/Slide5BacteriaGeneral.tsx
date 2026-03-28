"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import { Droplets } from "lucide-react";

const slide5Bg = (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
    {/* Deep ocean base — static, free */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0c4a6e_0%,#021812_70%,#000_100%)]" />
    {/* Single soft pulsing glow — cheap opacity animation */}
    <div className="absolute w-[600px] h-[600px] bg-cyan-500/15 rounded-full animate-pulse-slow blur-3xl" />
    {/* Static thin ring for depth */}
    <div className="absolute w-[700px] h-[700px] border border-cyan-400/15 rounded-full" />
    <div className="absolute w-[450px] h-[450px] border border-blue-400/10 rounded-full" />
  </div>
);

export default function Slide5BacteriaGeneral() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const rippleUp: any = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <Slide key="5" title="Đại Dương Lên Men" subtitle="Sự Phục Sinh của Lợi Khuẩn trong Nước Muối" hideDefaultBg background={slide5Bg} fullScreen>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col h-full justify-center items-center text-center max-w-5xl mx-auto mt-[-20px] relative z-10 px-8"
      >
        <motion.div variants={rippleUp} className="relative mb-12 group">
          <div className="w-56 h-56 bg-gradient-to-br from-cyan-600 to-blue-800 backdrop-blur-3xl border border-cyan-300/70 rounded-full flex items-center justify-center shadow-[0_0_120px_rgba(34,211,238,0.8)] relative z-10">
            <Droplets className="w-24 h-24 text-cyan-200 drop-shadow-[0_0_30px_#06b6d4] group-hover:scale-110 transition-transform duration-700" />
          </div>
          {/* Sợi vi khuẩn tinh tế quanh icon */}
          <div className="absolute -inset-6 border-2 border-cyan-300/60 rounded-full animate-[spin_12s_linear_infinite] border-dashed"></div>
        </motion.div>
        
        <motion.div variants={rippleUp} className="mb-10 w-full flex flex-col items-center">
          <h3 className="text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-t from-cyan-300 to-white pb-2 drop-shadow-2xl">
            Bacillus subtilis & Lactic
          </h3>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 opacity-70"></div>
        </motion.div>
        
        <motion.div variants={rippleUp} className="bg-gradient-to-t from-[#020617]/90 to-cyan-900/50 backdrop-blur-md p-10 rounded-3xl border border-cyan-500/50 shadow-[0_20px_50px_rgba(8,145,178,0.5)]">
          <p className="text-[1.4rem] text-cyan-50/90 leading-[1.8] font-light">
            Nhân vật chính của <strong className="text-cyan-200 font-semibold text-[1.6rem]">Kỷ nguyên Ướt</strong>. Sau khi nấm mốc tàn lụi nhường chỗ cho bể nước muối, hệ khuẩn này trỗi dậy như dòng hải lưu sâu thẳm. 
            <br/><br/>
            Chúng chuyển hóa hương vị thành kiệt tác Este ngào ngạt và thiết lập  
            <span className="text-cyan-300 font-bold mx-2 px-4 py-2 bg-cyan-900/40 rounded border border-cyan-800 whitespace-nowrap">&quot;Lá Chắn pH tự nhiên&quot;</span> 
            giúp chum tương trường tồn cùng thời gian.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
