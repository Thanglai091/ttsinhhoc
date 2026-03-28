"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import { Sparkles, Microscope } from "lucide-react";

export default function Slide2Intro() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const slideLeft: any = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const slideRight: any = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <Slide key="2" title="Hai Dòng Chảy Sinh Học" subtitle="Sự kết hợp hoàn hảo giữa Nấm mốc & Vi khuẩn" overlayOpacity={0.95}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex h-[75%] items-center mt-4 w-full relative z-10 overflow-hidden rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-teal-400/40"
      >
        {/* Left Panel: Mốc (Emerald / Teal) */}
        <motion.div 
          variants={slideLeft}
          className="w-1/2 h-full bg-gradient-to-br from-teal-800 to-emerald-700 p-16 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.5)_0%,transparent_60%)] group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="relative z-10 mb-8">
            <div className="w-24 h-24 bg-emerald-600/80 rounded-[30%] flex items-center justify-center border border-emerald-300/60 mb-8 shadow-[0_0_50px_rgba(16,185,129,0.8)]">
              <Sparkles className="text-emerald-200 w-12 h-12 drop-shadow-[0_0_10px_#34d399]" />
            </div>
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Nấm Mốc</h3>
            <p className="text-[1.4rem] text-emerald-50/90 leading-[1.8] font-light">
              Lực lượng tiên phong ở giai đoạn <strong className="font-semibold text-emerald-200">lên men khô</strong>. Chúng ký sinh trên hạt nếp tơi, bung những dòng suối enzyme mạnh mẽ để phân giải liên kết rắn chắc của nguyên liệu.
            </p>
          </div>
        </motion.div>

        {/* Right Panel: Vi Khuẩn (Amber / Brown / Deep Red) */}
        <motion.div 
          variants={slideRight}
          className="w-1/2 h-full bg-gradient-to-bl from-amber-700 to-orange-800 p-16 flex flex-col justify-center relative overflow-hidden group border-l border-amber-400/40"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.4)_0%,transparent_60%)] group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="relative z-10 mb-8 ml-auto text-right flex flex-col items-end">
            <div className="w-24 h-24 bg-amber-600/80 rounded-[30%] flex items-center justify-center border border-amber-300/60 mb-8 shadow-[0_0_50px_rgba(245,158,11,0.8)]">
              <Microscope className="text-amber-200 w-12 h-12 drop-shadow-[0_0_10px_#fbbf24]" />
            </div>
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white to-amber-200 mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Vi Khuẩn</h3>
            <p className="text-[1.4rem] text-amber-50/90 leading-[1.8] font-light text-right">
              Hậu phương hoàn mỹ của giai đoạn <strong className="font-semibold text-amber-300">lên men ướt</strong>. Nhâm nhi nước muối mặn chát, tạo ra vị chua thanh lọc diệt khuẩn và hương sắc đậm đà qua thời gian vô tận.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
