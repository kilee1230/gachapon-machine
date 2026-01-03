import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { Fortune, Language } from "../types";

interface Props {
  fortune: Fortune;
  onClose: () => void;
  language: Language;
}

const UI_TEXT = {
  zh: {
    collect: "收入囊中",
    year: "2026 · 丙午年",
    horse: "馬",
    sharing: "正在分享...",
    shared: "已分享！",
    saved: "已保存图片！",
  },
  en: {
    collect: "COLLECT",
    year: "2026 · Year of Horse",
    horse: "Horse",
    sharing: "Sharing...",
    shared: "Shared!",
    saved: "Image saved!",
  },
};

const APP_URL = "https://kilee1230.github.io/gachapon-machine/";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const ResultModal: React.FC<Props> = ({
  fortune,
  onClose,
  language,
}) => {
  // Get text based on language
  const text = fortune[language];
  const ui = UI_TEXT[language];

  // Split fortune into title and content
  // ZH uses '：', EN uses ': '
  const separator = language === "zh" ? "：" : ": ";
  const [title, content] = text.includes(separator)
    ? text.split(separator)
    : [text, ""];

  const [shareStatus, setShareStatus] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const captureRef = useRef<HTMLDivElement>(null);

  // Helper: Detect mobile device
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Helper: Capture screenshot of the result
  const captureScreenshot = async (): Promise<Blob | null> => {
    if (!captureRef.current) return null;

    try {
      const dataUrl = await toPng(captureRef.current, {
        backgroundColor: "#fff1f1",
        pixelRatio: 2, // Higher quality
        filter: (node) => {
          // Filter out elements with data-html2canvas-ignore attribute
          if (node instanceof Element) {
            return !node.hasAttribute("data-html2canvas-ignore");
          }
          return true;
        },
      });

      // Convert data URL to Blob
      const response = await fetch(dataUrl);
      return await response.blob();
    } catch (error) {
      console.error("Screenshot failed:", error);
      return null;
    }
  };

  // Helper: Download image
  const downloadImage = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Share handler using Web Share API with image
  const handleShare = async (platform: "facebook" | "instagram") => {
    if (isSharing) return;

    setIsSharing(true);
    setShareStatus(ui.sharing);

    const blob = await captureScreenshot();

    if (!blob) {
      setShareStatus(null);
      setIsSharing(false);
      return;
    }

    const file = new File([blob], "fortune-2026.png", { type: "image/png" });
    const shareText =
      language === "zh"
        ? `🧧 我的2026马年新春运势！快来试试你的运气！ ${APP_URL}`
        : `🧧 My 2026 Year of Horse Fortune! Try your luck! ${APP_URL}`;

    // Try Web Share API (works on mobile for both FB & IG)
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title:
            language === "zh"
              ? "2026马年新春运势"
              : "2026 Year of Horse Fortune",
          text: shareText,
        });
        setShareStatus(ui.shared);
        setTimeout(() => setShareStatus(null), 2000);
        setIsSharing(false);
        return;
      } catch {
        // User cancelled or error - fall through to fallback
      }
    }

    // Fallback for desktop or if Web Share not supported
    if (platform === "facebook") {
      // Download image and open FB
      downloadImage(blob, "fortune-2026.png");
      setShareStatus(ui.saved);
      setTimeout(() => {
        window.open(`https://www.facebook.com/`, "_blank");
        setShareStatus(null);
      }, 500);
    } else {
      // Instagram - download image
      downloadImage(blob, "fortune-2026.png");
      setShareStatus(ui.saved);
      if (isMobile()) {
        setTimeout(() => {
          window.location.href = "instagram://app";
          setShareStatus(null);
        }, 500);
      } else {
        setTimeout(() => setShareStatus(null), 2000);
      }
    }

    setIsSharing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      {/* Paper Scroll/Strip - Capture Area */}
      <div
        ref={captureRef}
        className="relative w-full max-w-[320px] max-h-[85dvh] overflow-y-auto bg-[#fff1f1] border-8 border-red-200 rounded-sm shadow-[0_0_50px_rgba(255,215,0,0.5)] transform animate-[unfold-paper_0.6s_ease-out_forwards] origin-top flex flex-col scrollbar-hide"
      >
        {/* Top Decoration */}
        <div className="h-6 sm:h-8 bg-red-600 w-full shrink-0 flex items-center justify-center relative">
          <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
          {/* Close Button (Icon) - hidden in screenshot */}
          <button
            onClick={onClose}
            className="absolute right-2 text-white/80 hover:text-white font-bold text-xl leading-none"
            data-html2canvas-ignore="true"
          >
            ×
          </button>
        </div>

        <div className="p-6 sm:p-8 flex flex-col items-center text-center relative flex-1">
          {/* Horse Stamp Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl sm:text-9xl opacity-5 pointer-events-none select-none font-serif">
            {ui.horse}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-red-600 mb-3 sm:mb-4 tracking-wider drop-shadow-sm font-serif">
            {title}
          </h2>

          {content && (
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed font-serif">
              {content}
            </p>
          )}

          <div className="mt-6 sm:mt-8 w-16 h-1 bg-red-200 rounded-full shrink-0"></div>
          <p className="mt-2 text-xs text-red-400 font-mono shrink-0">
            {ui.year}
          </p>

          {/* App URL for screenshot */}
          <p className="mt-1 text-[10px] text-red-300 font-mono">
            {APP_URL.replace("https://", "")}
          </p>

          {/* Share Buttons - hidden in screenshot */}
          <div
            className="mt-4 flex items-center gap-3 relative"
            data-html2canvas-ignore="true"
          >
            {/* Facebook */}
            <button
              onClick={() => handleShare("facebook")}
              disabled={isSharing}
              className="w-10 h-10 flex items-center justify-center bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full shadow-md transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
              aria-label="Share to Facebook"
            >
              <FacebookIcon />
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleShare("instagram")}
              disabled={isSharing}
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-full shadow-md transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
              aria-label="Share to Instagram"
            >
              <InstagramIcon />
            </button>

            {/* Status tooltip */}
            {shareStatus && (
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-green-600 font-medium whitespace-nowrap bg-white px-2 py-0.5 rounded shadow-sm">
                {shareStatus}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="h-4 bg-red-600 w-full mt-auto shrink-0"></div>
      </div>

      {/* Action Button - Positioned fixed bottom or below content */}
      <button
        onClick={onClose}
        className="fixed bottom-8 sm:bottom-12 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 animate-pulse z-50 whitespace-nowrap border-2 border-yellow-200 uppercase"
      >
        {ui.collect}
      </button>
    </div>
  );
};
