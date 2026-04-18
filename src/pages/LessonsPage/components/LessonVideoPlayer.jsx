import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const LessonVideoPlayer = ({ 
  selectedLesson, 
  handleNext, 
  handlePrev, 
  currentIndex, 
  totalLessons, 
  isCompleted, 
  language 
}) => {
  const [t] = useTranslation();
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    setIsVideoEnded(false);
    
    const initializePlayer = () => {
      if (iframeRef.current && window.Vimeo) {
        if (playerRef.current) {
          playerRef.current.destroy();
        }

        playerRef.current = new window.Vimeo.Player(iframeRef.current);
        playerRef.current.on("ended", () => setIsVideoEnded(true));
      }
    };

    if (!window.Vimeo) {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = initializePlayer;
      document.body.appendChild(script);
    } else {
      const timer = setTimeout(initializePlayer, 500);
      return () => clearTimeout(timer);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [selectedLesson]);

  const canGoNext = isVideoEnded || isCompleted;

  return (
    <div className="space-y-8">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
        <iframe
          key={selectedLesson?.video_url}
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://player.vimeo.com/video/${selectedLesson?.video_url}?api=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
          title={selectedLesson?.[`title_${language}`]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-gray-100">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            currentIndex === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border-2 border-[#FE5D37] text-[#FE5D37] hover:bg-[#FE5D37] hover:text-white"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          {t("Oldingi")}
        </button>
        
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`flex items-center gap-2 px-8 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 ${
            !canGoNext
              ? "bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
              : "bg-[#FE5D37] text-white hover:bg-[#FE5D37]/90 shadow-[#FE5D37]/20"
          }`}
        >
          {isVideoEnded && !isCompleted && (
            <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-1" />
          )}
          {currentIndex === totalLessons - 1 ? t("Tamomlash") : t("Keyingi")}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
          {selectedLesson?.[`title_${language}`]}
        </h3>
        
        {selectedLesson?.documents?.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              {t("Dars uchun materiallar")}:
            </h4>
            <div className="flex flex-wrap gap-3">
              {selectedLesson?.documents?.map((file, index) => (
                <a
                  key={index}
                  href={file?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-gray-200 bg-white hover:border-[#FE5D37] hover:text-[#FE5D37] hover:shadow-md transition-all text-slate-700 font-medium"
                >
                  <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#FE5D37]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  {file?.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonVideoPlayer;
