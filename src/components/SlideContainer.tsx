"use client";

import React, { useEffect, useState, useCallback, ReactNode, isValidElement, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";

interface SlideContainerProps {
  slides: ReactNode[];
}

export default function SlideContainer({ slides }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-green-950 font-sans">
      <AnimatePresence initial={false} custom={direction}>
        {slides.map((slide, index) => {
          if (index !== currentSlide) return null;
          // Clone element to pass direction
          return (
            <div key={index} className="w-full h-full absolute top-0 left-0">
              {isValidElement(slide) ? React.cloneElement(slide as ReactElement<{direction: number}>, { direction }) : slide}
            </div>
          );
        })}
      </AnimatePresence>

      {/* Presentation Controls & Progress */}
      <div className="absolute bottom-6 left-0 w-full flex justify-between items-center px-8 z-50 pointer-events-none">
        <div className="text-emerald-100/50 font-medium tracking-widest text-sm pointer-events-auto">
          {currentSlide > 0 && <button onClick={goToPrevSlide} className="hover:text-emerald-300 transition-colors mr-2">← TRƯỚC</button>}
        </div>
        
        <div className="flex gap-2 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? "bg-emerald-400 scale-125" : "bg-emerald-100/20 hover:bg-emerald-100/40"
              }`}
            />
          ))}
        </div>

        <div className="text-emerald-100/50 font-medium tracking-widest text-sm pointer-events-auto">
          {currentSlide < slides.length - 1 && <button onClick={goToNextSlide} className="hover:text-emerald-300 transition-colors ml-2">TIẾP →</button>}
        </div>
      </div>
    </div>
  );
}
