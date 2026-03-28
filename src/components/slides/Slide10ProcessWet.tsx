"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

export default function Slide10ProcessWet() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const sunDrop: any = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 60 } },
  };
  
  const abyssUp: any = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <Slide key="10" title="Tác phẩm Nghệ thuật: Quy trình" subtitle="Giai đoạn Ướt: Dưới Nhật Quang & Biển Đêm" overlayOpacity={0.96}>
      
      {/* Sun & Abyss Split Background (Vertical Splitting Left to Right now) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex">
        {/* Sun Aura (Left) */}
        <div className="flex-1 bg-[radial-gradient(circle_at_left,rgba(250,204,21,0.15)_0%,transparent_80%)]"></div>
        {/* Abyss Depth (Right) */}
        <div className="flex-1 bg-[radial-gradient(circle_at_right,rgba(15,23,42,0.9)_0%,transparent_90%)]"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row h-full w-full max-w-7xl mx-auto relative z-10 items-center justify-center gap-8 mt-4 md:mt-8"
      >
        
        {/* Sun Step 3 (Left) */}
        <motion.div variants={sunDrop} className="flex-1 flex flex-col items-center text-center justify-center p-6 md:p-10 bg-yellow-950/20 backdrop-blur-md rounded-[40px] border border-yellow-500/20 shadow-[0_20px_50px_rgba(250,204,21,0.1)] h-full">
           <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-950 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.4)] mb-6 md:mb-8 shrink-0">
             <span className="text-4xl md:text-5xl font-black text-yellow-400">3</span>
           </div>
           <h4 className="text-[2.2rem] md:text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-amber-400 mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-tight">Nghiền Nát & Chồng Lớp</h4>
           <div className="overflow-y-auto pr-2 custom-scrollbar">
             <p className="text-[1.2rem] md:text-[1.4rem] text-yellow-50/90 leading-[1.8] font-light max-w-2xl text-justify md:text-center">
               Đậu nành mềm rục kết hợp cùng khối mốc tương sinh thái. Quá trình trộn đều này giống như điểm hỏa <strong className="text-yellow-300 font-semibold drop-shadow-md">kích hoạt hàng vạn cỗ máy enzyme</strong>, bắt đầu công cuộc xé toạc các bức tường cấu trúc cực đại.
             </p>
           </div>
        </motion.div>

        {/* separator vertical line */}
        <motion.div variants={sunDrop} className="hidden md:block w-px h-[60%] bg-gradient-to-b from-transparent via-emerald-600/50 to-transparent shrink-0"></motion.div>

        {/* Abyss Step 4 (Right) */}
        <motion.div variants={abyssUp} className="flex-1 flex flex-col items-center text-center justify-center p-6 md:p-10 bg-slate-900/40 backdrop-blur-md rounded-[40px] border border-blue-500/20 shadow-[0_20px_50px_rgba(59,130,246,0.1)] h-full">
           <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 rounded-full flex items-center justify-center border-4 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] mb-6 md:mb-8 shrink-0">
             <span className="text-4xl md:text-5xl font-black text-blue-400">4</span>
           </div>
           <h4 className="text-[2.2rem] md:text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-400 mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-tight">Ngủ Đông Dưới Viễn Dương muối</h4>
           <div className="overflow-y-auto pr-2 custom-scrollbar">
             <p className="text-[1.2rem] md:text-[1.4rem] text-blue-50/90 leading-[1.8] font-light max-w-2xl text-justify md:text-center">
               Phong ấn trong chum sành mặn chát. Ban ngày phơi mình hút tinh hoa <strong className="text-amber-200">Nhật Quang</strong>, ban đêm đóng kín phong tỏa màn sương lạnh. 
               Sau hàng tháng ròng rã, vi khuẩn kiến tạo nên một <span className="text-cyan-300 font-semibold drop-shadow-[0_0_10px_#22d3ee]">vương quốc hương vị bất khả xâm phạm</span>.
             </p>
           </div>
        </motion.div>
        
      </motion.div>
    </Slide>
  );
}
