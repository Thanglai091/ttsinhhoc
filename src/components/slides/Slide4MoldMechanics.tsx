"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import { Beaker, Droplets, Fingerprint } from "lucide-react";

export default function Slide4MoldMechanics() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const pop: any = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <Slide key="4" title="Khoa học Xúc Tác" subtitle="Ma thuật Enzyme từ Aspergillus oryzae" overlayOpacity={0.92}>
      
      {/* Biological Cellular Background Illusion instead of squares */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
         <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] animate-[spin_12s_linear_infinite] blur-xl border border-emerald-400/20"></div>
         <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-teal-500/10 rounded-[60%_40%_50%_50%_/_30%_60%_40%_70%] animate-[spin_18s_linear_infinite_reverse] blur-2xl border border-teal-400/20"></div>
         <div className="absolute bottom-[20%] left-[30%] w-[250px] h-[250px] bg-cyan-500/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[spin_15s_linear_infinite] blur-lg border border-cyan-400/20"></div>
         {/* Floating smaller nuclei */}
         <div className="absolute top-[15%] right-[30%] w-6 h-6 bg-emerald-400/40 rounded-full blur-sm animate-float"></div>
         <div className="absolute bottom-[35%] right-[20%] w-8 h-8 bg-teal-300/40 rounded-full blur-sm animate-float-delayed"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col h-full justify-center mt-[-20px] max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Protease Panel - Biological Curves */}
          <motion.div 
            variants={pop}
            className="flex flex-col p-12 bg-gradient-to-br from-[#022c22]/80 to-[#064e3b]/90 backdrop-blur-2xl border border-emerald-500/30 rounded-[30%_10%_40%_10%_/_10%_40%_10%_30%] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:border-emerald-400/60 transition-colors"
          >
            <div className="w-24 h-24 bg-emerald-950 rounded-[40%] flex items-center justify-center mb-8 border border-emerald-500/40 shadow-[inset_0_0_20px_#10b981] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Beaker className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_#34d399]" />
            </div>
            <h4 className="text-[2.2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-green-400 mb-6 drop-shadow-md">ENZYME PROTEASE</h4>
            <p className="text-[1.3rem] text-emerald-50/80 leading-[1.8] font-light">
              Khởi nguồn phản ứng sinh học cắt chuỗi protein kiên cố của hạt đậu nành thô. Nó giải phóng đại dương axit amin, khai sinh ra <strong className="text-emerald-300 bg-emerald-900/50 px-3 py-1 ml-1 rounded">Vị Umami Tối Thượng</strong> trứ danh của tương cổ truyền.
            </p>
          </motion.div>
          
          {/* Amylase Panel - Biological Curves */}
          <motion.div 
            variants={pop}
            className="flex flex-col p-12 bg-gradient-to-br from-[#064e3b]/80 to-[#0f766e]/90 backdrop-blur-2xl border border-teal-500/30 rounded-[10%_30%_10%_40%_/_40%_10%_30%_10%] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:border-teal-400/60 transition-colors"
          >
            <div className="w-24 h-24 bg-teal-950 rounded-[40%] flex items-center justify-center mb-8 border border-teal-500/40 shadow-[inset_0_0_20px_#14b8a6] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
              <Droplets className="w-12 h-12 text-teal-400 drop-shadow-[0_0_10px_#2dd4bf]" />
            </div>
            <h4 className="text-[2.2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-400 mb-6 drop-shadow-md">ENZYME AMYLASE</h4>
            <p className="text-[1.3rem] text-teal-50/80 leading-[1.8] font-light">
              Mũi dao tước đi lớp khiên tinh bột của hạt nếp. Khối tinh bột kết tủa vỡ lở để tạo thành hàng triệu phân tử đường đơn khơi lên <strong className="text-teal-300 bg-teal-900/50 px-3 py-1 ml-1 rounded">Vị Ngọt Hậu</strong> thiết yếu cung cấp năng lượng cho hệ khuẩn Lactic.
            </p>
          </motion.div>

        </div>
        
        <motion.div 
          variants={pop}
          className="bg-black/60 p-10 rounded-[50px] border border-emerald-500/20 flex gap-8 items-center shadow-2xl backdrop-blur-xl group hover:bg-black/80 transition-colors"
        >
          <Fingerprint className="text-emerald-400 shrink-0 w-24 h-24 drop-shadow-[0_0_15px_#34d399] group-hover:scale-110 transition-transform" />
          <p className="text-[1.4rem] text-gray-300 font-light leading-[1.8]">
             &quot;Mỗi sợi ti nấm là một <strong className="text-white">liên kết cộng sinh</strong> kỳ ảo. Các tế bào enzyme sẽ tự hòa vào nhau sinh phản ứng dây chuyền mà con người không thể can thiệp!&quot;
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
