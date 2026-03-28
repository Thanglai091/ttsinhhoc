"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

export default function Slide9ProcessDry() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const waveUp: any = {
    hidden: { opacity: 0, scaleY: 0.8, y: 100 },
    show: { opacity: 1, scaleY: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } },
  };

  return (
    <Slide key="9" title="Tác phẩm Nghệ thuật: Quy trình" subtitle="Giai đoạn Khô: Giường Ấm & Mầm Sống" overlayOpacity={0.92}>
      
      {/* Earth & Forest Wave Background (CSS Only Illusion) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col">
        <div className="flex-1 bg-gradient-to-b from-transparent to-amber-900/10"></div>
        <div className="flex-1 bg-gradient-to-t from-emerald-950/40 to-amber-900/10 border-t border-amber-500/10" style={{clipPath: 'ellipse(150% 100% at 50% 100%)'}}></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col h-[80%] mt-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          
          {/* Earth Side (Amber) - Step 1 */}
          <motion.div variants={waveUp} className="bg-gradient-to-b from-amber-800/70 to-[#291706] rounded-t-[500px] rounded-b-[40px] border-t-8 border-amber-400 p-12 md:p-16 flex flex-col justify-end text-center shadow-[0_-20px_80px_rgba(217,119,6,0.5)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.5)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="text-[12rem] font-black text-amber-300/20 absolute top-10 left-1/2 -translate-x-1/2 leading-none">1</div>
            
            <div className="relative z-10 mt-auto">
              <h4 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 mb-8 drop-shadow-md">Nền Tảng Nguyên Thủy</h4>
              <p className="text-[1.4rem] text-amber-100/80 leading-[1.8] font-light">
                <strong className="text-amber-400 font-medium">Hạt đậu nành:</strong> Ninh mềm ngập nước đến khi cốt lõi tơi xốp.<br/><br/>
                <strong className="text-amber-400 font-medium">Gạo nếp dẻo thơm:</strong> Đồ chín thành biển xôi, trải mỏng tạo thành thảm đệm ấm áp, sẵn sàng ươm mầm sự sống.
              </p>
            </div>
          </motion.div>
          
          {/* Forest Side (Emerald) - Step 2 */}
          <motion.div variants={waveUp} className="bg-gradient-to-b from-[#022c22] to-emerald-800/70 rounded-b-[500px] rounded-t-[40px] border-b-8 border-emerald-400 p-12 md:p-16 flex flex-col justify-start text-center shadow-[0_20px_80px_rgba(16,185,129,0.5)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(52,211,153,0.5)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="text-[12rem] font-black text-emerald-300/20 absolute bottom-10 left-1/2 -translate-x-1/2 leading-none">2</div>
            
            <div className="relative z-10 mb-auto">
              <h4 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-400 mb-8 drop-shadow-md">Gieo Hạt Sinh Tồn</h4>
              <p className="text-[1.4rem] text-emerald-100/80 leading-[1.8] font-light">
                Rắc phôi <span className="italic text-emerald-300 font-medium">Aspergillus oryzae</span> vào hỗn hợp trên.<br/><br/>
                Khoảng tối âm u 3-4 ngày sẽ chứng kiến một sự sinh trưởng hoang dại: sợi nấm tơ bung nở trắng xóa, hóa kiếp nên thứ gọi là <strong className="text-emerald-400 bg-emerald-900/50 px-3 py-1 rounded">Linh Hồn Mốc Tương</strong>.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </Slide>
  );
}
