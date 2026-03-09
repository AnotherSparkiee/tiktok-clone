import { Info } from 'lucide-react';
import { InfoIcon } from '@/app/components/InfoIcon';
import { useState, useRef } from 'react';
import exampleImage from 'figma:asset/f61058c7430513bbf3c9e3419fcefa64f5a70085.png';
import playIcon from 'figma:asset/d877f25f9c8cae23cec8dae0b7d775c94661604a.png';

export function RetentionSection() {
  const [currentTime, setCurrentTime] = useState(0); // в секундах
  const [duration, setDuration] = useState(0); // реальная длительность видео
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log('Play prevented:', error);
              setIsPlaying(false);
            });
        } else {
          setIsPlaying(true);
        }
      }
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.target as HTMLVideoElement;
    if (!isDragging) {
      setCurrentTime(video.currentTime);
    }
  };
  
  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current && videoRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  const handleSliderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleSliderClick(e);
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (sliderRef.current && videoRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const clickX = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
        const percentage = clickX / rect.width;
        const newTime = percentage * duration;
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const retentionPercentage = duration > 0 ? Math.max(100 - Math.floor((currentTime / duration) * 64), 36) : 100;
  
  // Функция д вычисления Y координаты на графике удержания
  const getRetentionY = (progress: number) => {
    // График падает от 10 (100%) до 90 (касается нижней линии)
    // Используем интерполяцию по точкам графика
    const points = [
      { x: 0, y: 10 },
      { x: 14, y: 35 },
      { x: 28, y: 50 },
      { x: 42, y: 60 },
      { x: 56, y: 70 },
      { x: 70, y: 78 },
      { x: 84, y: 85 },
      { x: 100, y: 90 }
    ];
    
    // Найти две ближайшие точки для интерполяции
    for (let i = 0; i < points.length - 1; i++) {
      if (progress >= points[i].x && progress <= points[i + 1].x) {
        const t = (progress - points[i].x) / (points[i + 1].x - points[i].x);
        return points[i].y + t * (points[i + 1].y - points[i].y);
      }
    }
    return 90; // По умолчанию последнее значение
  };
  
  const dotX = progressPercentage;
  const dotY = getRetentionY(progressPercentage);

  return (
    <div className="px-3 py-6 bg-[#1e1e1e] mx-3 rounded-[6px] mb-2">
      <div className="flex items-center gap-0.5 mb-2">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>Коэффициент удержания</h2>
        <InfoIcon />
      </div>
      
      <p className="text-neutral-400 text-sm mb-4">
        Большинство зрителей прекратили смотреть это видео на отметке 0:02. Узнайте, с какого омента бьшинство зрителей потеряли интерес к вашему видео.
      </p>
      
      {/* Video Preview */}
      <div className="relative mb-6">
        <div className="relative w-full max-w-[155px] mx-auto aspect-[10/16]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover bg-black rounded-[5px]"
            loop
            playsInline
            muted
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onError={() => console.error('Video loading error')}
          >
            <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" type="video/mp4" />
          </video>
          <button
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full z-10 flex items-center justify-center"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {!isPlaying && (
              <img src={playIcon} alt="Play" className="w-[32px] h-[32px]" />
            )}
          </button>
        </div>
      </div>
      
      {/* Retention Chart */}
      <div className="relative max-w-[310px] mx-auto">
        <div className="relative h-16 mb-4 flex items-stretch">
          {/* Graph container */}
          <div className="relative flex-1">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
              <defs>
                {/* Gradient for the area fill */}
                <linearGradient id="retentionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5eb3f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5eb3f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="#4c4c4c" strokeDasharray="3 3" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
              <line x1="0" y1="55" x2="100" y2="55" stroke="#4c4c4c" strokeDasharray="3 3" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
              <line x1="0" y1="90" x2="100" y2="90" stroke="#4c4c4c" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
              
              {/* Gradient fill area under the retention line */}
              <path
                d="M 0,10 L 14,35 L 28,50 L 42,60 L 56,70 L 70,78 L 84,85 L 100,90 L 100,100 L 0,100 Z"
                fill="url(#retentionGradient)"
              />
              
              {/* Retention line - drops from 100% to bottom line */}
              <polyline
                points="0,10 14,35 28,50 42,60 56,70 70,78 84,85 100,90"
                fill="none"
                stroke="#5eb3f6"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            {/* Vertical line indicator at current position */}
            <div 
              className="absolute w-px"
              style={{ 
                left: `${dotX}%`,
                top: '10%',
                height: '80%',
                backgroundColor: '#5eb3f6'
              }}
            />
            
            {/* Current position dot */}
            <div 
              className="absolute w-2.5 h-2.5 rounded-full border-2 border-[#5eb3f6]"
              style={{ 
                left: `${dotX}%`, 
                top: `${dotY}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#ffffff'
              }}
            />
          </div>
          
          {/* Percentage labels - on the RIGHT side aligned with grid lines */}
          <div className="relative pl-1.5" style={{ width: '32px' }}>
            <span className="absolute text-xs text-neutral-500 leading-none" style={{ top: '10%', transform: 'translateY(-50%)' }}>100%</span>
            <span className="absolute text-xs text-neutral-500 leading-none" style={{ top: '55%', transform: 'translateY(-50%)' }}>50%</span>
          </div>
        </div>
        
        {/* Timeline Slider */}
        <div className="relative mt-3 flex items-stretch">
          <div className="flex-1">
            <div 
              ref={sliderRef}
              className="relative h-1 bg-[#666666] rounded-full cursor-pointer"
              onClick={handleSliderClick}
            >
              <div 
                className="absolute left-0 top-0 h-full bg-white rounded-full pointer-events-none" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing" 
                style={{ left: `${progressPercentage}%`, marginLeft: '-14px' }}
                onMouseDown={handleSliderMouseDown}
              ></div>
            </div>
            <div className="flex justify-between text-xs mt-3">
              <span className="text-neutral-400">{formatTime(currentTime)} ({retentionPercentage}%)</span>
              <span className="text-neutral-400">{formatTime(duration)}</span>
            </div>
          </div>
          {/* Spacer to match percentage labels width */}
          <div style={{ width: '32px' }} className="pl-1.5"></div>
        </div>
      </div>
    </div>
  );
}