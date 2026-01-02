import React, { useEffect, useState, useRef } from "react";
import { GameState, Language } from "../types";
import { Capsule } from "./Capsule";

interface Props {
  gameState: GameState;
  onInsertCoin: () => void;
  onSpin: () => void;
  onOpenCapsule: () => void;
  capsuleColor: string;
  onCapsuleColorPicked: (color: string) => void;
  remainingCount: number;
  language: Language;
}

interface FillerCapsule {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  rotate: number;
  color: string;
  zIndex: number;
}

// Translations for machine labels
const LABELS = {
  zh: {
    coinSlot: "投币口",
    spin: "点击旋转",
    exit: "取蛋口",
    soldOut: "已售罄",
    open: "点击或下滑打开",
    start: "点击投币",
  },
  en: {
    coinSlot: "INSERT",
    spin: "SPIN",
    exit: "EXIT",
    soldOut: "EMPTY",
    open: "CLICK OR SWIPE DOWN",
    start: "START HERE",
  },
};

export const GachaponMachine: React.FC<Props> = ({
  gameState,
  onInsertCoin,
  onSpin,
  onOpenCapsule,
  capsuleColor,
  onCapsuleColorPicked,
  remainingCount,
  language,
}) => {
  const isSpinning = gameState === "spinning";
  const isReady = gameState === "ready";
  const isDropped = gameState === "dropped";
  const isInserting = gameState === "inserting";
  const isEmpty = remainingCount === 0;

  const text = LABELS[language];
  const touchStartY = useRef<number | null>(null);

  // Manage visual capsules in state so we can remove them
  const [fillerCapsules, setFillerCapsules] = useState<FillerCapsule[]>([]);

  // Function to generate initial random capsules
  const generateCapsules = (count: number) => {
    // Show max 100 visual capsules to match fortune count
    const visualCount = Math.min(count, 100);
    return Array.from({ length: visualCount }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 75, // percentage
      y: 35 + Math.random() * 55, // percentage - fill more of the globe
      rotate: Math.random() * 60 - 30, // Subtle random rotation
      color: [
        "#ef4444",
        "#eab308",
        "#3b82f6",
        "#22c55e",
        "#a855f7",
        "#ec4899",
        "#f97316",
      ][i % 7],
      zIndex: i,
    }));
  };

  // Initialize on mount
  useEffect(() => {
    setFillerCapsules(generateCapsules(remainingCount));
  }, []);

  // Handle Physics (Chaos when spinning, Gravity when stopped)
  useEffect(() => {
    let animationId: number;

    if (isSpinning) {
      // Use requestAnimationFrame for smoother animation on mobile
      let lastUpdate = 0;
      const updateInterval = 80; // ~12fps for chaotic effect (smoother than 100ms setInterval)

      const animate = (timestamp: number) => {
        if (timestamp - lastUpdate >= updateInterval) {
          lastUpdate = timestamp;
          setFillerCapsules((prev) =>
            prev.map((cap) => ({
              ...cap,
              // Random positions throughout the globe
              x: 10 + Math.random() * 75,
              y: 15 + Math.random() * 65,
              // Wild rotation
              rotate: cap.rotate + (Math.random() * 180 - 90),
              zIndex: Math.floor(Math.random() * 50),
            }))
          );
        }
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
    } else {
      // GRAVITY: Settle back to bottom when stopping
      setFillerCapsules((prev) => {
        if (prev.length === 0) return prev;
        return prev.map((cap) => ({
          ...cap,
          // Settle range
          x: 15 + Math.random() * 65,
          y: 55 + Math.random() * 35,
          rotate: Math.random() * 60 - 30, // Settle rotation
        }));
      });
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isSpinning]);

  // Track which capsule index will be removed
  const [capsuleToRemove, setCapsuleToRemove] = useState<number | null>(null);

  // When spinning starts, pick a random capsule and notify parent of its color
  useEffect(() => {
    if (isSpinning && fillerCapsules.length > 0) {
      const indexToRemove = Math.floor(Math.random() * fillerCapsules.length);
      const pickedColor = fillerCapsules[indexToRemove].color;
      setCapsuleToRemove(indexToRemove);
      onCapsuleColorPicked(pickedColor);
    }
  }, [isSpinning]);

  // Remove the picked capsule after spin animation completes
  useEffect(() => {
    if (isSpinning && capsuleToRemove !== null) {
      const timer = setTimeout(() => {
        setFillerCapsules((prev) => {
          if (prev.length === 0) return prev;
          const newCaps = [...prev];
          newCaps.splice(capsuleToRemove, 1);
          return newCaps;
        });
        setCapsuleToRemove(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, capsuleToRemove]);

  // Touch handlers for swipe gesture on dropped capsule
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchEndY - touchStartY.current;

    // Detect downward swipe (threshold 50px)
    if (diffY > 50) {
      onOpenCapsule();
    }

    touchStartY.current = null;
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* 3D Machine Body */}
      <div
        className={`
        relative w-72 h-96 
        bg-gradient-to-b from-red-500 via-red-600 to-red-800
        rounded-t-[120px] rounded-b-3xl 
        border-4 border-red-900 
        shadow-[inset_0_-10px_30px_rgba(0,0,0,0.3),0_25px_60px_rgba(0,0,0,0.6)]
        flex flex-col items-center z-20
        ${isSpinning ? "animate-[shake-machine_0.3s_linear_infinite]" : ""}
      `}
      >
        {/* Top Decorative Ornament (Horse Ears/Hat) */}
        <div className="absolute -top-12 w-48 h-16 bg-gradient-to-b from-red-600 to-red-800 rounded-t-full border-4 border-yellow-500 shadow-lg z-0"></div>
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-5xl z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
          🐴
        </div>

        {/* Glass Window */}
        <div className="relative w-64 h-64 mt-8 bg-gradient-to-br from-blue-100/20 to-blue-500/5 rounded-full border-[6px] border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.2)] overflow-hidden backdrop-blur-[2px] z-10">
          {/* Main Reflection Highlight */}
          <div className="absolute top-6 left-6 w-20 h-10 bg-gradient-to-br from-white/60 to-transparent rounded-full -rotate-45 blur-[1px] z-20 pointer-events-none"></div>

          {/* Secondary Reflection */}
          <div className="absolute bottom-8 right-8 w-10 h-10 bg-white/10 rounded-full blur-md z-20 pointer-events-none"></div>

          {/* Filler Capsules (Visuals) */}
          {remainingCount > 0 &&
            fillerCapsules.map((cap) => (
              <div
                key={cap.id}
                className="absolute w-8 h-8 rounded-full will-change-transform backface-visibility-hidden"
                style={{
                  left: `${cap.x}%`,
                  top: `${cap.y}%`,
                  zIndex: cap.zIndex,
                  transform: `translate3d(0, 0, 0) rotate(${cap.rotate}deg)`,
                  transition: isSpinning
                    ? "none"
                    : "left 0.7s ease-out, top 0.7s ease-out, transform 0.7s ease-out",
                }}
              >
                {/* Inner visual of the capsule */}
                <div
                  className="w-full h-full rounded-full border border-black/5 overflow-hidden"
                  style={{ backgroundColor: cap.color }}
                >
                  {/* Glossy reflection */}
                  <div className="w-full h-1/2 bg-white/40 rounded-t-full"></div>
                </div>
              </div>
            ))}

          {/* SPINNING EFFECT OVERLAY */}
          {isSpinning && (
            <div className="absolute inset-0 z-30 pointer-events-none rounded-full overflow-hidden">
              {/* Swirl 1: White Speed Streaks / Motion Blur */}
              <div className="absolute inset-0 animate-[spin-fast_0.5s_linear_infinite]">
                <div className="w-full h-full rounded-full border-t-[30px] border-l-[15px] border-transparent border-t-white/30 border-l-white/10 blur-[3px]"></div>
              </div>

              {/* Swirl 2: Reverse Colored Hue (subtle rainbow/festive hint) */}
              <div className="absolute inset-0 animate-[spin-fast_0.7s_linear_infinite_reverse] opacity-40 mix-blend-overlay">
                <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(250,204,21,0.6),transparent,rgba(239,68,68,0.6),transparent)] blur-xl"></div>
              </div>
            </div>
          )}

          {isEmpty && (
            <div className="absolute inset-0 flex items-center justify-center text-red-900 font-black bg-white/60 text-lg shadow-inner">
              {text.soldOut}
            </div>
          )}
        </div>

        {/* Control Panel Area */}
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-red-700 to-red-900 rounded-b-2xl border-t-4 border-red-950/30 flex items-center justify-between px-6 z-20 shadow-[inset_0_5px_10px_rgba(0,0,0,0.3)]">
          {/* Coin Slot */}
          <div className="relative flex flex-col items-center group">
            <div className="text-[10px] text-yellow-100 font-bold mb-1 tracking-widest drop-shadow-sm uppercase">
              {text.coinSlot}
            </div>

            {/* Wrapper for button and tooltip to ensure close alignment */}
            <div className="relative">
              {/* Start Hint Tooltip */}
              {gameState === "idle" && !isEmpty && (
                <div className="absolute -top-9 -translate-x-1/2 z-40 animate-bounce pointer-events-none">
                  <div className="bg-white text-red-600 border-2 border-red-600 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm whitespace-nowrap relative">
                    {text.start}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b-2 border-r-2 border-red-600 rotate-45"></div>
                  </div>
                </div>
              )}

              <button
                onClick={onInsertCoin}
                disabled={gameState !== "idle" || isEmpty}
                className={`
                    w-10 h-14 rounded-full border-2 border-gray-500 shadow-[inset_0_2px_5px_rgba(0,0,0,0.5),0_2px_4px_rgba(255,255,255,0.1)]
                    flex items-center justify-center transition-all overflow-hidden
                    bg-gradient-to-b from-gray-600 to-gray-800
                    ${
                      gameState === "idle" && !isEmpty
                        ? "hover:scale-105 cursor-pointer hover:border-yellow-400 hover:ring-2 hover:ring-yellow-400/50"
                        : "opacity-80 cursor-not-allowed"
                    }
                  `}
              >
                {/* Metallic Slot Detail */}
                <div className="w-1.5 h-8 bg-black rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.3)] border border-gray-700"></div>
              </button>

              {/* Animated Coin - RM1 Token Style */}
              {isInserting && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 border-2 border-amber-700 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.5)] animate-[coin-drop_0.8s_forwards] pointer-events-none">
                  {/* Outer ring pattern */}
                  <div className="absolute inset-0.5 rounded-full border border-amber-500/40"></div>
                  {/* Inner circle with RM1 */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-600/50 flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]">
                    <span className="text-[8px] font-bold text-amber-900/80 leading-none">
                      RM
                    </span>
                    <span className="text-sm font-black text-amber-900 leading-none -mt-0.5">
                      1
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Knob */}
          <div className="relative group">
            <button
              onClick={onSpin}
              disabled={!isReady}
              className={`
                relative w-20 h-20 rounded-full 
                bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700
                border-b-4 border-yellow-800 
                shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_2px_10px_rgba(255,255,255,0.5)]
                flex items-center justify-center z-20 transition-transform duration-700
                ${
                  isReady
                    ? "cursor-pointer hover:brightness-110 active:scale-95"
                    : "cursor-not-allowed filter grayscale-[0.8] opacity-90"
                }
              `}
              style={{
                transform: isSpinning ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              {/* Knob Grip Detail */}
              <div className="w-16 h-4 bg-yellow-600/30 rounded-full absolute shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
              <div className="w-4 h-16 bg-yellow-600/30 rounded-full absolute shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>

              {/* Center Hub */}
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full z-10 shadow-[0_2px_5px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-200 rounded-full blur-[1px] opacity-70"></div>
              </div>
            </button>
            {isReady && (
              <div className="absolute -bottom-6 w-full text-center text-xs text-yellow-200 font-bold animate-bounce drop-shadow-md whitespace-nowrap">
                {text.spin}
              </div>
            )}
          </div>

          {/* Exit Chute Label */}
          <div className="w-12 text-center">
            <div className="w-12 h-12 bg-black/60 rounded-full shadow-[inset_0_5px_10px_rgba(0,0,0,1)] border-b border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            </div>
            <div className="text-[10px] text-yellow-100 font-bold mt-1 drop-shadow-sm uppercase">
              {text.exit}
            </div>
          </div>
        </div>
      </div>

      {/* Dropped Capsule Area */}
      {/* Increased height to allow better separation and landing visual */}
      <div className="relative h-36 w-full flex justify-center items-end -mt-6 z-30 perspective-500 pointer-events-none">
        {/* Container for capsule + shadow */}
        <div className="pointer-events-auto relative flex flex-col items-center pb-0">
          {/* Render Dropped State */}
          {isDropped && (
            <>
              {/* The Capsule - Animate from chute (Right) */}
              {/* Wrapping div carries the trajectory animation */}
              <div
                onClick={onOpenCapsule}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative z-10 cursor-pointer animate-[chute-exit_0.8s_forwards] origin-center hover:scale-105 transition-transform touch-none"
              >
                {/* Inner div provides static tilt for realistic landing pose */}
                <div className="rotate-[15deg] transform-gpu">
                  <Capsule color={capsuleColor} isOpen={false} />
                </div>
              </div>

              {/* Shadow on 'ground' - Animate from chute (Right) */}
              <div className="absolute bottom-1 left-1/2 w-16 h-3 bg-black/50 rounded-[50%] blur-sm z-0 animate-[shadow-slide_0.8s_forwards]"></div>

              {/* Hint Tooltip */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center text-xs text-white bg-red-600/90 border border-yellow-400/50 px-2 py-1 rounded-full animate-bounce whitespace-nowrap shadow-sm z-20">
                {text.open}
              </div>
            </>
          )}

          {/* Render Opening State (Stays on ground) */}
          {gameState === "opening" && (
            <div className="relative z-10 transition-transform pb-0">
              {/* Match the tilt from above for continuity */}
              <div className="rotate-[15deg]">
                <Capsule color={capsuleColor} isOpen={true} />
              </div>
              {/* Static shadow for opened state */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/40 rounded-[50%] blur-sm z-0"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
