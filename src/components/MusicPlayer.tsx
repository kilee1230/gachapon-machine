import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Set a reasonable background volume
    audio.volume = 0.4;
    
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio autoplay prevented by browser:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`
            w-12 h-12 rounded-full border-2 shadow-xl transition-all duration-300
            flex items-center justify-center backdrop-blur-sm
            ${isPlaying 
                ? 'bg-yellow-400 text-red-900 border-red-800 scale-110 shadow-[0_0_15px_rgba(250,204,21,0.6)]' 
                : 'bg-black/20 text-white/80 border-white/20 hover:bg-black/40 hover:scale-105'}
        `}
        title={isPlaying ? "暂停音乐" : "播放音乐"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Music size={20} />}
      </button>
      
      <audio
        ref={audioRef}
        loop
        // Royalty-free festive Chinese New Year background music (Preview)
        // Source: Pixabay "Chinese New Year" by JuliusH
        src="https://cdn.pixabay.com/audio/2023/01/24/audio_982e094602.mp3"
      />
    </div>
  );
};

