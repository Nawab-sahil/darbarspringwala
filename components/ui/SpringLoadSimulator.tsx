"use client";

import React, { useState, useId, useRef } from "react";
import { Sliders, RefreshCw, Activity, Award } from "lucide-react";

interface SpringLoadSimulatorProps {
  initialWireDiameter?: number;
  initialFreeLength?: number;
  title?: string;
}

export default function SpringLoadSimulator({
  initialWireDiameter = 2.5,
  initialFreeLength = 80,
  title = "SPRING LOAD SIMULATOR",
}: SpringLoadSimulatorProps) {
  // State
  const [wireDiameter, setWireDiameter] = useState<number>(initialWireDiameter); // mm (0.2 to 16.0)
  const [compression, setCompression] = useState<number>(20); // mm compressed (0 to 45)

  const wireId = useId();
  const compressionId = useId();

  // Animation frame throttle refs for touch responsiveness
  const rAFRefWire = useRef<number | null>(null);
  const rAFRefComp = useRef<number | null>(null);

  const handleWireChange = (val: number) => {
    if (rAFRefWire.current) cancelAnimationFrame(rAFRefWire.current);
    rAFRefWire.current = requestAnimationFrame(() => {
      setWireDiameter(val);
    });
  };

  const handleCompressionChange = (val: number) => {
    if (rAFRefComp.current) cancelAnimationFrame(rAFRefComp.current);
    rAFRefComp.current = requestAnimationFrame(() => {
      setCompression(val);
    });
  };

  // Mechanical specs calculations
  const meanDiameter = 24; // mm
  const activeCoils = 8;
  const shearModulus = 79300; // N/mm2 (Spring steel IS 4454 / SS 302)

  // Spring rate k = (G * d^4) / (8 * D^3 * N)
  const d4 = Math.pow(wireDiameter, 4);
  const D3 = Math.pow(meanDiameter, 3);
  const rawK = (shearModulus * d4) / (8 * D3 * activeCoils); // N/mm
  const springRate = Math.min(9999, Math.max(0.1, rawK));

  const freeLength = initialFreeLength;
  const maxCompression = freeLength * 0.55; // Safety limit
  const currentCompression = Math.min(compression, maxCompression);
  const compressedLength = Math.max(15, freeLength - currentCompression);

  // Force F = k * delta_x (in Newtons and kgf)
  const forceN = springRate * currentCompression;
  const forceKg = forceN / 9.81;

  // Tolerance grade string
  const toleranceGrade =
    wireDiameter < 1.0 || (wireDiameter >= 1.0 && wireDiameter <= 4.0 && currentCompression < 25)
      ? "DIN 2095 Grade 1"
      : "DIN 2095 Grade 2";

  // SVG Coil Path Calculation
  // We draw a helix coil with 9 loops fitting inside width=260, height=200
  const svgWidth = 260;
  const svgHeight = 200;
  const totalHeight = Math.max(35, (compressedLength / freeLength) * 145);
  const startY = (svgHeight - totalHeight) / 2;
  const numLoops = 9;
  const loopHeight = totalHeight / numLoops;
  const coilRadius = 38;
  const centerX = svgWidth / 2;

  // Generate SVG path for the helical spring coil
  let pathD = `M ${centerX - coilRadius} ${startY}`;
  for (let i = 0; i < numLoops; i++) {
    const y1 = startY + i * loopHeight + loopHeight * 0.5;
    const y2 = startY + (i + 1) * loopHeight;
    pathD += ` C ${centerX + coilRadius + 10} ${y1}, ${centerX + coilRadius + 10} ${y1}, ${centerX - coilRadius} ${y2}`;
  }

  // Calculate stroke width proportional to wire diameter (scaled for SVG visualization)
  const strokeWidth = Math.max(2, Math.min(12, (wireDiameter / 16.0) * 10 + 2));

  return (
    <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-[18px] sm:p-[22px] shadow-sm relative">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#17324F]/10 pb-3 mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1px] bg-[#9C724A]" />
          <span className="font-mono text-[11px] font-medium text-[#17324F] uppercase tracking-wider">
            {title}
          </span>
        </div>
        <span className="font-mono text-[10px] font-medium text-[#9C724A] uppercase tracking-widest bg-[#9C724A]/10 px-2 py-0.5 rounded-[2px]">
          REAL-TIME KINEMATICS
        </span>
      </div>

      {/* Responsive Grid: Vertical Stack on Mobile (<768px), 2-Column Side-by-Side on Desktop */}
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
        
        {/* Visual Stage */}
        <div className="bg-[#FBFAF7] border border-[#17324F]/10 rounded-[2px] p-3 sm:p-4 flex flex-col items-center justify-between min-h-[210px] sm:min-h-[250px] relative overflow-hidden">
          
          {/* Top-Left Length Readout Overlay (Placed at top-3 left-3 to prevent overlapping bottom plate) */}
          <div className="absolute top-3 left-3 z-20 font-mono text-[10px] text-[#9C724A] font-semibold uppercase tracking-wider bg-white/95 border border-[#17324F]/15 px-2.5 py-1 rounded-[2px] shadow-2xs">
            L = {compressedLength.toFixed(1)} mm
          </div>

          {/* Top/Bottom Press Plates & SVG Coil */}
          <div className="w-full flex flex-col items-center z-10 my-auto pt-4">
            {/* Top Plate */}
            <div 
              className="w-40 sm:w-44 h-3 sm:h-3.5 bg-[#17324F] rounded-[1px] border-b border-[#9C724A] flex items-center justify-center transition-all duration-75"
              style={{
                transform: `translateY(${(currentCompression / freeLength) * 30}px)`
              }}
            >
              <div className="w-10 sm:w-12 h-[1px] bg-[#E5C158]" />
            </div>

            {/* SVG Spring Coil */}
            <svg
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-[160px] sm:h-[190px] transition-all duration-75 my-1"
            >
              {/* Background grid lines */}
              <line x1="20" y1={startY} x2="240" y2={startY} stroke="#17324F" strokeOpacity="0.1" strokeDasharray="3 3" />
              <line x1="20" y1={startY + totalHeight} x2="240" y2={startY + totalHeight} stroke="#17324F" strokeOpacity="0.1" strokeDasharray="3 3" />
              
              {/* Coil shadow */}
              <path
                d={pathD}
                fill="none"
                stroke="#17324F"
                strokeOpacity="0.08"
                strokeWidth={strokeWidth + 3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Active Spring Coil */}
              <path
                d={pathD}
                fill="none"
                stroke="#17324F"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-75"
              />

              {/* Wire highlight center core line */}
              <path
                d={pathD}
                fill="none"
                stroke="#9C724A"
                strokeWidth={1}
                strokeDasharray="4 2"
                strokeOpacity="0.8"
              />
            </svg>

            {/* Bottom Stationary Plate */}
            <div className="w-40 sm:w-44 h-3 sm:h-3.5 bg-[#17324F] rounded-[1px] border-t border-[#9C724A] flex items-center justify-center">
              <div className="w-10 sm:w-12 h-[1px] bg-[#9C724A]" />
            </div>
          </div>

        </div>

        {/* Controls & Instrumentation Readouts */}
        <div className="space-y-5">
          
          {/* Slider 1: Wire Diameter (d) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-mono">
              <label htmlFor={wireId} className="text-steel font-medium flex items-center gap-1.5 min-h-[36px]">
                <Sliders className="h-4 w-4 text-[#9C724A]" />
                <span>Wire Dia (d):</span>
              </label>
              <span className="font-semibold text-[#17324F] bg-[#17324F]/5 px-2.5 py-1 rounded-[2px] border border-[#17324F]/10">
                {wireDiameter.toFixed(1)} mm
              </span>
            </div>
            
            {/* Slider Track Container with High-Contrast Track Line */}
            <div className="relative flex items-center py-2">
              <input
                id={wireId}
                type="range"
                min="0.2"
                max="16.0"
                step="0.1"
                value={wireDiameter}
                onChange={(e) => handleWireChange(parseFloat(e.target.value))}
                style={{ touchAction: "none" }}
                className="w-full h-2 bg-[#17324F]/15 rounded-full appearance-none cursor-pointer accent-[#9C724A]
                  [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-[#17324F]/20 [&::-webkit-slider-runnable-track]:rounded-full
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#9C724A] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                  [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-[#17324F]/20 [&::-moz-range-track]:rounded-full
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#9C724A] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
              />
            </div>
            
            <div className="flex justify-between text-[9.5px] font-mono text-steel-2">
              <span>0.2mm</span>
              <span>8.0mm</span>
              <span>16.0mm</span>
            </div>
          </div>

          {/* Slider 2: Compression Distance (Δx) */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between items-center text-xs font-mono">
              <label htmlFor={compressionId} className="text-steel font-medium flex items-center gap-1.5 min-h-[36px]">
                <Activity className="h-4 w-4 text-[#9C724A]" />
                <span>Compression (&Delta;x):</span>
              </label>
              <span className="font-semibold text-[#17324F] bg-[#17324F]/5 px-2.5 py-1 rounded-[2px] border border-[#17324F]/10">
                {currentCompression.toFixed(1)} mm
              </span>
            </div>

            {/* Slider Track Container with High-Contrast Track Line */}
            <div className="relative flex items-center py-2">
              <input
                id={compressionId}
                type="range"
                min="0"
                max={maxCompression}
                step="1"
                value={currentCompression}
                onChange={(e) => handleCompressionChange(parseFloat(e.target.value))}
                style={{ touchAction: "none" }}
                className="w-full h-2 bg-[#17324F]/15 rounded-full appearance-none cursor-pointer accent-[#17324F]
                  [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:bg-[#17324F]/20 [&::-webkit-slider-runnable-track]:rounded-full
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#17324F] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                  [&::-moz-range-track]:h-2 [&::-moz-range-track]:bg-[#17324F]/20 [&::-moz-range-track]:rounded-full
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#17324F] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
              />
            </div>

            <div className="flex justify-between text-[9.5px] font-mono text-steel-2">
              <span>0mm (Free)</span>
              <span>{(maxCompression / 2).toFixed(0)}mm</span>
              <span>{maxCompression.toFixed(0)}mm (Max)</span>
            </div>
          </div>

          {/* Instrumentation Readout Panel */}
          <div className="border-t border-[#17324F]/10 pt-3 space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center py-1 border-b border-[#17324F]/5">
              <span className="text-steel">Free Length (L0):</span>
              <span className="font-semibold text-[#17324F]">{freeLength}.0 mm</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#17324F]/5">
              <span className="text-steel">Spring Rate (k):</span>
              <span className="font-semibold text-[#9C724A]">
                {springRate < 10 ? springRate.toFixed(2) : springRate.toFixed(1)} N/mm
              </span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#17324F]/5">
              <span className="text-steel">Operating Load (F):</span>
              <span className="font-semibold text-[#17324F]">
                {forceN < 1000 ? `${forceN.toFixed(1)} N` : `${(forceN / 1000).toFixed(2)} kN`}{" "}
                <span className="text-[10px] text-steel-2">({forceKg.toFixed(1)} kgf)</span>
              </span>
            </div>
            <div className="pt-1 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-steel shrink-0">
                <Award className="h-3.5 w-3.5 text-[#9C724A]" />
                <span>Tolerances:</span>
              </span>
              <span className="font-semibold text-[#9C724A] text-right truncate pl-2">
                {toleranceGrade}
              </span>
            </div>
          </div>

          {/* Reset Action */}
          <button
            onClick={() => {
              setWireDiameter(initialWireDiameter);
              setCompression(20);
            }}
            className="w-full text-center text-xs font-mono text-steel hover:text-[#17324F] min-h-[44px] py-2 border border-[#17324F]/15 hover:border-[#17324F] rounded-[2px] transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]"
          >
            <RefreshCw className="h-3.5 w-3.5 text-[#9C724A]" />
            <span>RESET CALCULATOR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
