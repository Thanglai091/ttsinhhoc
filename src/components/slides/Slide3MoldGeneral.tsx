"use client";

import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import { Sparkles } from "lucide-react";

export default function Slide3MoldGeneral() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const popFade: any = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <Slide key="3" title="1. Nấm mốc" subtitle="Dưới lăng kính hiển vi cực tím (UV)" bgImage="/bg-micro.png" overlayOpacity={0.92}>
      
      {/* Microbial UV / Neon Purple Background */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-500/40 rounded-full blur-[100px] animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-400/35 rounded-full blur-[80px] animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-fuchsia-500/25 rounded-full blur-[80px] animate-pulse-slow"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col h-full justify-center items-center text-center max-w-5xl mx-auto mt-[-20px] relative z-10"
      >
        <motion.div variants={popFade} className="relative mb-8">
          <div className="w-36 h-36 bg-gradient-to-br from-fuchsia-700 to-purple-900 backdrop-blur-3xl border-4 border-fuchsia-400/80 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(217,70,239,0.8)] animate-pulse-slow">
            <Sparkles className="w-14 h-14 text-fuchsia-200 drop-shadow-[0_0_20px_#f0abfc]" />
          </div>
          {/* Bioluminescent rings */}
          <div className="absolute -inset-6 border-2 border-fuchsia-400/60 rounded-full animate-[spin_8s_linear_infinite] border-dashed"></div>
        </motion.div>
        
        <motion.div variants={popFade} className="mb-10">
          <h3 className="text-[4rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-fuchsia-200 to-violet-200 font-serif italic pb-4 drop-shadow-[0_5px_15px_rgba(200,100,255,0.9)]">
            Aspergillus oryzae
          </h3>
        </motion.div>
        
        <motion.div variants={popFade} className="bg-gradient-to-br from-fuchsia-950/80 to-indigo-950/70 backdrop-blur-2xl p-12 rounded-[50px] border border-fuchsia-400/50 shadow-[0_30px_60px_-15px_rgba(200,100,250,0.5)]">
          <p className="text-[1.3rem] text-indigo-50/90 leading-[1.8] font-light">
            Sứ giả quyền lực khoác lên mình sinh quyển trắng mịn màng, dân gian kính trọng gọi là 
            <span className="text-fuchsia-300 font-bold mx-3 px-4 py-2 bg-indigo-900/60 rounded-xl shadow-inner border border-indigo-500/50 whitespace-nowrap">&quot;Mốc Tương&quot;</span>.
            <br/><br/>
            Cấy vào môi trường xôi nếp với nhiệt độ chuẩn xác, hệ sợi tơ của nó vươn dài chọc thủng những lớp rào cản từ thực vật, <strong className="font-semibold text-purple-200">đồng hóa phân thân rực rỡ</strong> như một mạng lưới ngân hà thu nhỏ, đánh vỡ nền tảng vững chắc của vạn vật.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
