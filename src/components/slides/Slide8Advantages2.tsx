"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

export default function Slide8Advantages2() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const fallDown: any = {
    hidden: { opacity: 0, y: -100, rotateX: -45 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <Slide key="8" title="Tuyệt Tác Hoàn Mỹ" subtitle="Sức Chiến Đấu Ngoan Cường (Phần 2)" bgImage="/bg-pot.png" overlayOpacity={0.93}>
      
      {/* Indigo & Mint Ambient light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-violet-500/40 blur-[100px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-teal-400/35 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-8 h-full max-w-7xl mx-auto pt-16 relative z-10 perspective-[1000px]"
      >
        {/* Card 1 */}
        <motion.div 
          variants={fallDown} 
          className="flex-1 bg-gradient-to-b from-violet-800/60 to-black/80 backdrop-blur-3xl rounded-[40px] p-10 border-t-4 border-violet-400 shadow-[0_30px_50px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)] flex flex-col items-center text-center mt-0 md:mt-24 hover:-translate-y-4 transition-transform duration-500 relative group overflow-hidden"
        >
          <div className="absolute -inset-10 bg-violet-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-[5rem] font-black text-violet-300/70 mb-4 leading-none select-none drop-shadow-[0_0_20px_#a78bfa]">03</div>
          <h3 className="text-[2rem] font-bold text-white mb-6 relative z-10 drop-shadow-[0_0_15px_#a78bfa]">Bất Diệt Kỷ Nguyên</h3>
          <p className="text-[1.3rem] text-indigo-100/70 font-light leading-[1.8] relative z-10">
            Axit lactic dựng nên một bức tường thép hoàn nguyên. <strong className="text-indigo-300">Miễn nhiễm cực đoan</strong> với sự xâm lấn của ô thiu, trường sinh bất tử qua bao tháng năm sành sứ.
          </p>
        </motion.div>
        
        {/* Card 2 */}
        <motion.div 
          variants={fallDown} 
          className="flex-1 bg-gradient-to-b from-cyan-700/60 to-black/80 backdrop-blur-3xl rounded-[40px] p-10 border-t-4 border-cyan-300 shadow-[0_30px_50px_rgba(34,211,238,0.4),0_0_40px_rgba(34,211,238,0.2)] flex flex-col items-center text-center mt-0 md:mt-12 hover:-translate-y-4 transition-transform duration-500 relative group overflow-hidden"
        >
          <div className="absolute -inset-10 bg-cyan-300/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-[5rem] font-black text-cyan-300/70 mb-4 leading-none select-none drop-shadow-[0_0_20px_#22d3ee]">04</div>
          <h3 className="text-[2rem] font-bold text-cyan-100 mb-6 relative z-10">Sức Sống Mãnh Liệt</h3>
          <p className="text-[1.3rem] text-cyan-100/70 font-light leading-[1.8] relative z-10">
            Phá vỡ mọi khuôn khổ phòng thí nghiệm. Chúng sục sôi và cháy hết mình ngay dưới nền nhiệt độ xích đạo ngoài trời <strong className="text-cyan-300">đầy khắc nghiệt và bụi bặm</strong>.
          </p>
        </motion.div>
        
        {/* Card 3 */}
        <motion.div 
          variants={fallDown} 
          className="flex-1 bg-gradient-to-b from-emerald-700/60 to-black/80 backdrop-blur-3xl rounded-[40px] p-10 border-t-4 border-emerald-300 shadow-[0_30px_50px_rgba(52,211,153,0.4),0_0_40px_rgba(52,211,153,0.2)] flex flex-col items-center text-center mt-0 md:mt-0 hover:-translate-y-4 transition-transform duration-500 relative group overflow-hidden"
        >
          <div className="absolute -inset-10 bg-emerald-300/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-[5rem] font-black text-emerald-300/70 mb-4 leading-none select-none drop-shadow-[0_0_20px_#34d399]">05</div>
          <h3 className="text-[2rem] font-bold text-teal-100 mb-6 relative z-10">Kinh Tế Vi Mô Hoàn Mĩ</h3>
          <p className="text-[1.3rem] text-teal-100/70 font-light leading-[1.8] relative z-10">
            Cội nguồn của nấm vô cùng dễ nhân bản. Một chuỗi phản ứng sinh thái có <strong className="text-teal-300">chi phí lõi tiệm cận 0</strong>, là phao cứu sinh kinh tế cho các hộ gia đình tự chủ.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
