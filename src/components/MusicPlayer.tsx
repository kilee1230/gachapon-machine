import React, { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { trackMusicToggle } from "../analytics";

const AUDIO_SRC = new URL("/audio/chinese-new-year-284910.mp3", import.meta.url)
  .href;

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingBeforeHidden = useRef(false);

  // Pause music when tab loses focus, resume when tab gains focus
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Tab is hidden - remember if we were playing and pause
        wasPlayingBeforeHidden.current = isPlaying;
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        }
      } else {
        // Tab is visible - resume if we were playing before
        if (wasPlayingBeforeHidden.current) {
          audio
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const startPlaying = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setShowOverlay(false);
      })
      .catch(() => {
        setShowOverlay(false);
      });
  }, []);

  const handleOverlayClick = () => {
    startPlaying();
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      // Track: User muted music
      trackMusicToggle("mute");
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          // Track: User unmuted music
          trackMusicToggle("unmute");
        })
        .catch(() => {});
    }
  };

  return (
    <>
      {/* Fullscreen overlay - tap anywhere to start */}
      {showOverlay && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-red-900/95 to-red-950/95 backdrop-blur-sm flex items-center justify-center cursor-pointer"
        >
          <div className="text-center">
            {/* Decorative elements */}
            <div className="text-6xl mb-6">🧧</div>

            {/* Play button */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.5)] animate-pulse border-4 border-yellow-200">
              <Play
                size={48}
                className="text-red-900 ml-2"
                fill="currentColor"
              />
            </div>

            <p className="text-yellow-300 text-2xl font-bold mb-2">点击开始</p>
            <p className="text-yellow-100/70 text-sm">Tap to Start</p>

            {/* Bottom decoration */}
            <div className="mt-8 text-4xl">🐴</div>
          </div>
        </div>
      )}

      {/* Music control button */}
      <button
        onClick={togglePlay}
        className={`
          fixed bottom-4 right-4 z-50
          w-10 h-10 rounded-full border-2 shadow-lg transition-all duration-300
          flex items-center justify-center backdrop-blur-sm cursor-pointer
          ${
            isPlaying
              ? "bg-yellow-400/90 text-red-900 border-yellow-500 shadow-[0_0_12px_rgba(250,204,21,0.5)]"
              : "bg-black/30 text-white/70 border-white/20 hover:bg-black/50 hover:text-white"
          }
        `}
        title={isPlaying ? "暂停音乐" : "播放音乐"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <audio ref={audioRef} loop preload="auto" src={AUDIO_SRC} />
    </>
  );
};
