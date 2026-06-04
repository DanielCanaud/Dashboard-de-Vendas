"use client";

import { useState, useEffect } from "react";

export function useCountAnimation(endValue: string, duration: number = 1.5) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    let isActive = true;
    let animationFrameId: number;

    const numMatch = endValue.match(/[\d.,]+/);
    

    if (!numMatch) {
      animationFrameId = window.requestAnimationFrame(() => {
        if (isActive) setDisplayValue(endValue);
      });
      return () => {
        isActive = false;
        window.cancelAnimationFrame(animationFrameId);
      };
    }

    const numStr = numMatch[0];
    const prefix = endValue.substring(0, numMatch.index);
    const suffix = endValue.substring(numMatch.index! + numStr.length);

    const cleanNumStr = numStr.replace(/\./g, "").replace(",", ".");
    const target = parseFloat(cleanNumStr);


    if (isNaN(target)) {
      animationFrameId = window.requestAnimationFrame(() => {
        if (isActive) setDisplayValue(endValue);
      });
      return () => {
        isActive = false;
        window.cancelAnimationFrame(animationFrameId);
      };
    }

    let startTimestamp: number;
    
    const step = (timestamp: number) => {
      if (!isActive) return;
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * target;
      
      let formattedVal = "";
      if (numStr.includes(",")) {
        formattedVal = currentVal.toLocaleString("pt-BR", { 
          minimumFractionDigits: 2, 
          maximumFractionDigits: 2 
        });
      } else {
        formattedVal = Math.floor(currentVal).toLocaleString("pt-BR");
      }

      setDisplayValue(`${prefix}${formattedVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);


    return () => {
      isActive = false;
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return displayValue;
}