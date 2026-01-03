import React from "react";

interface Props {
  color: string;
  isOpen: boolean;
}

export const Capsule: React.FC<Props> = ({ color, isOpen }) => {
  return (
    <div className="relative w-20 h-20 group perspective-500">
      {/* Inner Flash/Glow Effect - Explodes outward */}
      <div
        className={`
            absolute inset-0 rounded-full bg-yellow-100/80 z-0
            transition-all duration-500 ease-out pointer-events-none
        `}
        style={{
          transform: isOpen ? "scale(3)" : "scale(0.8)",
          opacity: isOpen ? 0 : 0,
        }}
      ></div>

      {/* Top Half */}
      <div
        className={`
          absolute top-0 left-0 w-20 h-10 
          rounded-t-full border-4 border-b-0 border-white/20
          shadow-[inset_-5px_5px_10px_rgba(0,0,0,0.2)]
          will-change-transform
          transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-10
        `}
        style={{
          backgroundColor: color,
          // Explosive outward movement with rotation
          transform: isOpen
            ? "translate(-80px, -120px) rotate(-135deg) scale(0.8)"
            : "translate(0, 0) rotate(0)",
          opacity: isOpen ? 0 : 1,
        }}
      >
        <div className="absolute top-2 left-4 w-6 h-3 bg-white/40 rounded-full rotate-[-20deg] blur-[1px]"></div>
      </div>

      {/* Bottom Half */}
      <div
        className={`
          absolute bottom-0 left-0 w-20 h-10 bg-white 
          rounded-b-full border-4 border-t-0 border-white/50
          shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.1)]
          will-change-transform
          transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)
        `}
        style={{
          // Explosive outward movement with rotation
          transform: isOpen
            ? "translate(80px, 100px) rotate(135deg) scale(0.8)"
            : "translate(0, 0) rotate(0)",
          opacity: isOpen ? 0 : 1,
        }}
      ></div>

      {/* Middle Seam (Hidden immediately when open) */}
      <div
        className="absolute top-1/2 left-0 w-full h-1 bg-black/10 -translate-y-1/2 z-20 transition-opacity duration-100"
        style={{ opacity: isOpen ? 0 : 1 }}
      ></div>

      <div
        className={`
          absolute top-1/2 left-1/2 w-10 h-6 bg-[#fff1f1] border border-red-200 
          shadow-lg rounded-[2px]
          -translate-x-1/2 -translate-y-1/2 z-0 
          will-change-transform
          transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1.2)
        `}
        style={{
          opacity: isOpen ? 1 : 0,
          // Moves up, scales, rotates slightly like it's floating
          transform: isOpen
            ? "translate(-50%, -180%) scale(2.0) rotate(-10deg)"
            : "translate(-50%, -50%) scale(0)",
        }}
      >
        {/* Simple lines to look like text */}
        <div className="flex flex-col gap-1 p-1 opacity-50">
          <div className="w-full h-[2px] bg-red-800/30 rounded-full"></div>
          <div className="w-2/3 h-[2px] bg-red-800/30 rounded-full"></div>
          <div className="w-full h-[2px] bg-red-800/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
