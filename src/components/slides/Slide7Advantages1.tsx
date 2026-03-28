"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";

export default function Slide7Advantages1() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const popFade: any = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <Slide key="7" title="Tuyệt Tác Hoàn Mỹ" subtitle="Phép Màu Tử Sự Giao Thoa (Phần 1)" bgImage="/bg-pot.png" overlayOpacity={0.92}>
      
      {/* Heavy Typography Background & Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] text-[20rem] md:text-[25rem] font-black text-amber-500/5 select-none leading-none rotate-12">I</div>
        <div className="absolute -bottom-[20%] -right-[10%] text-[20rem] md:text-[25rem] font-black text-emerald-500/5 select-none leading-none -rotate-12">II</div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-500/35 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-12 h-full justify-center max-w-6xl mx-auto mt-[-20px] relative z-10"
      >
        
        {/* Row 1 - Left Aligned */}
        <motion.div variants={popFade} className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-amber-900/70 to-orange-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-amber-500/50 shadow-[0_20px_50px_rgba(217,119,6,0.3)] relative w-[90%] md:w-[85%] self-start group">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-amber-700 text-white rounded-full flex items-center justify-center text-4xl md:text-5xl font-black border-4 border-yellow-400/80 shadow-[0_0_60px_rgba(251,191,36,0.8)] group-hover:scale-110 transition-transform duration-500">
            01
          </div>
          <div>
            <h3 className="text-3xl md:text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-amber-300 mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">Phân Giải Triệt Để Nguyên Liệu</h3>
            <p className="text-[1.2rem] md:text-[1.4rem] text-amber-100/80 font-light leading-[1.8]">
              Khả năng bẻ gãy ngoạn mục những mảng protein và tinh bột khổng lồ thành dinh dưỡng thuần túy. Tạo ra một cực phẩm <strong className="text-amber-400 font-medium">dễ tiêu hóa, đậm đà vị ngọt thịt</strong> mà không cần sử dụng bất kỳ hóa chất xúc tác nào.
            </p>
          </div>
        </motion.div>
        
        {/* Row 2 - Right Aligned */}
        <motion.div variants={popFade} className="flex flex-col md:flex-row-reverse gap-8 items-center bg-gradient-to-l from-emerald-900/70 to-teal-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-emerald-400/50 shadow-[0_20px_50px_rgba(16,185,129,0.3)] relative w-[90%] md:w-[85%] self-end group">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-emerald-600 text-white rounded-full flex items-center justify-center text-4xl md:text-5xl font-black border-4 border-emerald-300/80 shadow-[0_0_60px_rgba(52,211,153,0.8)] group-hover:scale-110 transition-transform duration-500">
            02
          </div>
          <div className="text-left md:text-right">
            <h3 className="text-3xl md:text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-l from-emerald-200 to-green-500 mb-6 drop-shadow-md">Hương Vị Bản Ngã Thiên Nhiên</h3>
            <p className="text-[1.2rem] md:text-[1.4rem] text-emerald-100/80 font-light leading-[1.8]">
              Trăm ngàn hợp chất este đan xen từ quá trình cộng sinh tạo nên thứ mùi thơm ngào ngạt kinh điển. Một thứ linh hồn mà <strong className="text-emerald-400 font-medium">hương liệu nhân tạo công nghiệp mãi mãi chỉ là bản sao mờ nhạt</strong>.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </Slide>
  );
}
