import { useState, useRef, useEffect } from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const tabs = [
    { id: 'inspiration', label: 'Вдохновение' },
    { id: 'overview', label: 'Обзор' },
    { id: 'viewers', label: 'Зрители' },
    { id: 'engagement', label: 'Вовлеченность' }
  ];

  // Автоматический скролл к активной вкладке
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement && scrollRef.current) {
      const container = scrollRef.current;
      const tabLeft = activeTabElement.offsetLeft;
      const tabWidth = activeTabElement.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      // Центрируем активную вкладку или смещаем влево если она справа
      const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative bg-black sticky top-[44px] z-40">
      <div 
        ref={scrollRef}
        className="flex items-center overflow-x-hidden scrollbar-hide cursor-grab active:cursor-grabbing relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ userSelect: 'none' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => tabRefs.current[tab.id] = el}
            onClick={() => setActiveTab(tab.id)}
            className={`px-[12px] py-2.5 font-medium whitespace-nowrap relative flex-shrink-0 ${
              activeTab === tab.id 
                ? 'text-white' 
                : 'text-neutral-400'
            }`}
            style={{ 
              fontFamily: 'TikTok Sans, sans-serif', 
              letterSpacing: '0.5px',
              fontSize: '14px'
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#ffffff' }}></div>
            )}
          </button>
        ))}
      </div>
      {/* Сплошная серая линия под всеми вкладками - на полную ширину экрана */}
      <div className="absolute bottom-0 left-0 w-screen h-[1px] bg-neutral-800 pointer-events-none"></div>
      {/* Градиент справа для индикации прокрутки */}
      <div className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none" style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}></div>
    </div>
  );
}