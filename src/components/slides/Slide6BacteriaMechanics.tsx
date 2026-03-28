"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

export default function Slide6BacteriaMechanics() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const pillarUp: any = {
    hidden: { opacity: 0, y: 100, scaleY: 0.8 },
    show: { opacity: 1, y: 0, scaleY: 1, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <Slide key="6" title="Song Trụ Năng Lượng" subtitle="Cơ chế Hoạt động của Vi khuẩn Lên men Ướt" bgImage="/bg-micro.png" overlayOpacity={0.92}>
      
      {/* Background Vertical Light Pillars */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-evenly">
        <div className="w-[200px] h-full bg-gradient-to-t from-emerald-400/35 to-transparent blur-[60px]"></div>
        <div className="w-[200px] h-full bg-gradient-to-t from-orange-400/30 to-transparent blur-[60px]"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col h-[75%] mt-12 max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
          
          {/* Pillar 1: Flavor Generation */}
          <motion.div 
            variants={pillarUp}
            className="flex flex-col bg-gradient-to-t from-[#022c22] via-emerald-900/40 to-transparent border-t-4 border-emerald-300 pt-16 px-12 relative group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-emerald-300 shadow-[0_0_60px_#34d399,0_0_30px_#34d399] group-hover:w-full transition-all duration-700"></div>
            
            <div className="text-[8rem] font-black text-emerald-400/20 absolute top-10 right-10 leading-none select-none">01</div>
            
            <h4 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300 mb-8 relative z-10 drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]">Kiến Tạo Hương Vị</h4>
            <p className="text-[1.3rem] text-emerald-100/80 leading-[1.8] font-light relative z-10">
              Biến đổi hoàn toàn các chất hữu cơ. Binh đoàn <strong className="font-semibold text-emerald-300">Bacillus</strong> thổi bùng hệ este thơm lừng, tạo nên chiều sâu hương vị khét lẹt, ngọt ngào và đượm đà đặc trưng mà không một phòng thí nghiệm nào sao chép được.
            </p>
          </motion.div>
          
          {/* Pillar 2: Biochemical Preservation */}
          <motion.div 
            variants={pillarUp}
            className="flex flex-col bg-gradient-to-t from-[#7c2d12] via-orange-900/40 to-transparent border-t-4 border-orange-400 pt-16 px-12 relative group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-orange-400 shadow-[0_0_60px_#fb923c,0_0_30px_#fb923c] group-hover:w-full transition-all duration-700"></div>
            
            <div className="text-[8rem] font-black text-orange-400/20 absolute top-10 right-10 leading-none select-none">02</div>
            
            <h4 className="text-[3rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-300 mb-8 relative z-10 drop-shadow-[0_0_20px_rgba(251,146,60,0.8)]">Lớp Giáp Sinh Học</h4>
            <p className="text-[1.3rem] text-green-100/80 leading-[1.8] font-light relative z-10">
              <strong className="font-semibold text-orange-300">Khuẩn Lactic</strong> rải xuống một đường mây axit vô hình. Độ Ph lý tưởng chôn vùi hoàn toàn sự tồn tại của các bào tử mốc dại. Một cơ chế tự vệ hoàn hảo sinh ra từ trong lòng nước muối!
            </p>
          </motion.div>

        </div>
      </motion.div>
    </Slide>
  );
}
