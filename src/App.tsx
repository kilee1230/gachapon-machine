import React, { useState, useEffect } from "react";
import { GachaponMachine } from "./components/GachaponMachine";
import { ResultModal } from "./components/ResultModal";
import { MusicPlayer } from "./components/MusicPlayer";
import { FORTUNES } from "./data/fortunes";
import { GameState, Fortune, Language } from "./types";
import { Shuffle } from "lucide-react";
import {
  trackInsertCoin,
  trackSpinKnob,
  trackOpenCapsule,
  trackViewResult,
  trackResetMachine,
  trackLanguageSwitch,
  setUserLanguage,
  trackPageView,
} from "./analytics";

// Sound effect URLs
const SOUNDS = {
  coin: "https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3", // Coin drop
  spin: "https://assets.mixkit.co/active_storage/sfx/2069/2069-preview.mp3", // Ratchet/Crank
  drop: "https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3", // Plastic drop
  open: "https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3", // Pop
  reveal: "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3", // Success/Chime
};

// LocalStorage Keys
const STORAGE_KEYS = {
  LANG: "gacha_2026_lang",
  HISTORY: "gacha_2026_history", // Stores IDs of drawn fortunes
};

// Get base path for routing (handles /gachapon-machine/ prefix in production)
const getBasePath = () => {
  // In production, base is /gachapon-machine/, in dev it's /
  return import.meta.env.BASE_URL || "/";
};

// Parse language from URL path or query param (for 404 redirect)
const getLanguageFromPath = (): Language => {
  const basePath = getBasePath();
  const path = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);
  
  // Check for ?p= query param (from 404.html redirect)
  const redirectPath = searchParams.get('p');
  if (redirectPath) {
    // Clean up URL by removing query param and setting proper path
    const lang = redirectPath === 'en' || redirectPath.startsWith('en/') ? 'en' : 'zh';
    const newPath = lang === 'en' ? `${basePath}en` : basePath;
    window.history.replaceState(null, '', newPath);
    return lang;
  }

  // Remove base path prefix to get the language segment
  const relativePath = path.startsWith(basePath)
    ? path.slice(basePath.length)
    : path.slice(1); // fallback: just remove leading /

  // Check for /en or /en/
  if (relativePath === "en" || relativePath.startsWith("en/")) {
    return "en";
  }
  // Default to zh for /, /zh, or /zh/
  return "zh";
};

// Navigate to language route (updates URL)
const navigateToLanguage = (lang: Language, replace = false) => {
  const basePath = getBasePath();
  const newPath = lang === "en" ? `${basePath}en` : basePath;
  if (replace) {
    window.history.replaceState({ lang }, "", newPath);
  } else {
    window.history.pushState({ lang }, "", newPath);
  }
};

// Run immediately on module load before React renders
if (typeof window !== "undefined") {
  const basePath = getBasePath();
  const path = window.location.pathname;
  const relativePath = path.startsWith(basePath)
    ? path.slice(basePath.length).replace(/\/$/, "")
    : "";

  // If at base path (empty relative path), check localStorage for saved preference
  if (!relativePath || relativePath === "zh") {
    const savedLang = localStorage.getItem(STORAGE_KEYS.LANG) as Language;

    // If saved preference is English, redirect to /en
    if (savedLang === "en") {
      navigateToLanguage("en", true);
    }
  }
}

// UI Text Dictionary
const UI_TEXT = {
  zh: {
    title: "2026 马年大吉",
    subtitle: "新春扭蛋机 · 限量100份好运",
    drawn: "已抽取",
    reset: "重置机器",
    emptyAlert: "扭蛋已抽完！请重置机器重新开始。",
    resetConfirm: "确定要重置所有进度吗？",
    build: "版本",
  },
  en: {
    title: "2026 Year of Horse",
    subtitle: "New Year Gachapon · 100 Fortunes",
    drawn: "Drawn",
    reset: "Reset Machine",
    emptyAlert: "All fortunes drawn! Please reset to start over.",
    resetConfirm: "Are you sure you want to reset all progress?",
    build: "Build",
  },
};

const MAX_CAPSULES = 100;

export default function App() {
  // Scroll to top on page load & set initial language for analytics
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set user's preferred language in GA (for user segmentation)
    setUserLanguage(language);
    // Track initial page view with language
    trackPageView(language);
  }, []);

  // State Initialization

  // 1. Language (from URL path)
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return getLanguageFromPath();
    }
    return "zh";
  });

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const newLang = getLanguageFromPath();
      if (newLang !== language) {
        setLanguage(newLang);
        setUserLanguage(newLang);
        // Track page view on back/forward navigation
        trackPageView(newLang);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [language]);

  // 2. Fortune Pool (Lazy Init - Loads from LS immediately to prevent flash)
  const [fortunePool, setFortunePool] = useState<number[]>(() => {
    let drawnIds: number[] = [];
    if (typeof window !== "undefined") {
      const historyJson = localStorage.getItem(STORAGE_KEYS.HISTORY);
      drawnIds = historyJson ? JSON.parse(historyJson) : [];
    }

    // Only take the first MAX_CAPSULES from the data
    const allIds = FORTUNES.slice(0, MAX_CAPSULES).map((f) => f.id);

    // Filter out already drawn IDs
    const availableIds = allIds.filter((id) => !drawnIds.includes(id));

    // Initial Shuffle
    for (let i = availableIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableIds[i], availableIds[j]] = [availableIds[j], availableIds[i]];
    }
    return availableIds;
  });

  // Derived State: Calculate history count directly from pool length
  // This ensures they are always perfectly in sync.
  const drawnCount = MAX_CAPSULES - fortunePool.length;

  const [gameState, setGameState] = useState<GameState>("idle");
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
  const [capsuleColor, setCapsuleColor] = useState<string>("red");
  const [resetKey, setResetKey] = useState(0); // Used to force-remount the machine component for visual reset

  // Handle language switch with URL navigation
  const handleLanguageToggle = () => {
    const newLang = language === "zh" ? "en" : "zh";

    // Track: Language switch event
    trackLanguageSwitch(language, newLang);
    setUserLanguage(newLang);

    // Persist to localStorage
    localStorage.setItem(STORAGE_KEYS.LANG, newLang);

    // Navigate to new language route
    navigateToLanguage(newLang);
    setLanguage(newLang);

    // Track page view with new language
    trackPageView(newLang);
  };

  // Sound Helper
  const playSound = (key: keyof typeof SOUNDS) => {
    try {
      const audio = new Audio(SOUNDS[key]);
      audio.volume = 0.6;
      audio.currentTime = 0;
      audio.play().catch((e) => console.log("Sound play error:", e));
    } catch (e) {
      console.error("Audio error", e);
    }
  };

  const handleInsertCoin = () => {
    if (gameState !== "idle") return;
    if (fortunePool.length === 0) {
      alert(UI_TEXT[language].emptyAlert);
      return;
    }

    // Track: User inserted coin
    trackInsertCoin(fortunePool.length);

    playSound("coin");
    setGameState("inserting");

    setTimeout(() => {
      setGameState("ready");
    }, 800);
  };

  const handleSpin = () => {
    if (gameState !== "ready") return;

    // Track: User clicked knob to spin
    trackSpinKnob();

    playSound("spin");
    setGameState("spinning");

    // Color will be set by onCapsuleColorPicked callback from the machine

    setTimeout(() => {
      playSound("drop");
      setGameState("dropped");
    }, 2000);
  };

  // Called by GachaponMachine when it picks which capsule to dispense
  const handleCapsuleColorPicked = (color: string) => {
    setCapsuleColor(color);
  };

  const handleOpenCapsule = () => {
    if (gameState !== "dropped") return;

    // Track: User clicked to open capsule
    trackOpenCapsule(capsuleColor);

    playSound("open");

    // Draw fortune ID
    const drawnId = fortunePool[0];
    const newPool = fortunePool.slice(1);

    // Find full fortune object
    const fortuneData = FORTUNES.find((f) => f.id === drawnId);

    if (!fortuneData) return;

    // Update State
    setFortunePool(newPool); // This automatically increases 'drawnCount'
    setCurrentFortune(fortuneData);
    setGameState("opening");

    // Persist to LocalStorage
    const historyJson = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const currentHistory: number[] = historyJson ? JSON.parse(historyJson) : [];
    const newHistory = [...currentHistory, drawnId];
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory));

    setTimeout(() => {
      playSound("reveal");
      setGameState("result");

      // Track: User viewing result
      trackViewResult(fortuneData.id);
    }, 800);
  };

  // Called when closing the result modal to go back to idle
  const handleReset = () => {
    setGameState("idle");
    setCurrentFortune(null);
  };

  // Full Factory Reset (Clear History)
  const handleFullReset = () => {
    // Track: User pressed reset (before actually resetting)
    trackResetMachine(drawnCount);

    // 1. Clear Local Storage History
    localStorage.removeItem(STORAGE_KEYS.HISTORY);

    // 2. Refill Pool (Shuffle all MAX_CAPSULES)
    const allIds = FORTUNES.slice(0, MAX_CAPSULES).map((f) => f.id);
    for (let i = allIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allIds[i], allIds[j]] = [allIds[j], allIds[i]];
    }

    // 3. Update State - Force new reference for array
    setFortunePool([...allIds]);
    // NOTE: 'drawnCount' will immediately become 0 because it's (MAX - allIds.length)

    // 4. Reset Game UI State
    setGameState("idle");
    setCurrentFortune(null);

    // 5. Force visual reset of the machine (refill capsules)
    setResetKey((prev) => prev + 1);
  };

  const text = UI_TEXT[language];

  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-between pt-12 pb-6 sm:py-6 text-white overflow-hidden relative touch-manipulation">
      {/* Background Music */}
      <MusicPlayer />

      {/* Language Toggle - positioned in header area */}
      <div className="absolute top-3 right-3 z-50">
        <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full p-0.5 border border-white/10 shadow-md">
          <button
            onClick={() => language !== "zh" && handleLanguageToggle()}
            className={`
              px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300
              ${
                language === "zh"
                  ? "bg-yellow-400 text-red-900 shadow-sm"
                  : "text-white/50 hover:text-white/80"
              }
            `}
          >
            中文
          </button>
          <button
            onClick={() => language !== "en" && handleLanguageToggle()}
            className={`
              px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300
              ${
                language === "en"
                  ? "bg-yellow-400 text-red-900 shadow-sm"
                  : "text-white/50 hover:text-white/80"
              }
            `}
          >
            EN
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="text-center z-10 shrink-0 px-4 mt-2">
        <h1 className="text-3xl md:text-5xl font-black text-yellow-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-widest whitespace-nowrap">
          {text.title}
        </h1>
        <p className="text-yellow-100 text-xs md:text-sm mt-1 font-bold tracking-widest opacity-90">
          {text.subtitle}
        </p>
      </header>

      {/* Main Machine Area */}
      <main className="relative w-full flex-1 flex flex-col items-center justify-center min-h-0 pt-12">
        <div className="transform scale-[0.75] xs:scale-[0.85] sm:scale-95 md:scale-100 transition-transform duration-300 origin-center">
          {/* key={resetKey} ensures the machine re-mounts and refills visual capsules on reset */}
          <GachaponMachine
            key={resetKey}
            gameState={gameState}
            onInsertCoin={handleInsertCoin}
            onSpin={handleSpin}
            onOpenCapsule={handleOpenCapsule}
            capsuleColor={capsuleColor}
            onCapsuleColorPicked={handleCapsuleColorPicked}
            remainingCount={fortunePool.length}
            language={language}
          />
        </div>
      </main>

      {/* Footer Info */}
      <footer className="text-center text-red-200 text-xs font-light shrink-0 z-10 sm:mb-0">
        <p className="bg-black/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm border border-white/5">
          {text.drawn} {drawnCount} / {MAX_CAPSULES}
        </p>
        <button
          onClick={handleFullReset}
          className="mt-1 flex items-center gap-1 mx-auto opacity-60 hover:opacity-100 transition-opacity p-2 active:scale-95 uppercase"
        >
          <Shuffle size={14} /> {text.reset}
        </button>
      </footer>

      {/* Build Info*/}
      {import.meta.env.VITE_BUILD_NUMBER && (
        <p className="fixed bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-white/30 font-mono z-10 pointer-events-none">
          {text.build}: {import.meta.env.VITE_BUILD_NUMBER}
        </p>
      )}

      {/* Result Modal */}
      {gameState === "result" && currentFortune && (
        <ResultModal
          fortune={currentFortune}
          onClose={handleReset}
          language={language}
        />
      )}
    </div>
  );
}
