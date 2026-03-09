import { Info } from 'lucide-react';
import { InfoIcon } from '@/app/components/InfoIcon';

export function MetricsSection() {
  return (
    <div className="px-1 pt-6 pb-0">
      <div className="flex items-center gap-0.5 mb-0 px-2">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>Основные метрики</h2>
        <InfoIcon />
      </div>
      <p className="text-neutral-400 text-sm mb-4 px-2" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Обновлено 28.01.2026.</p>
      
      <div className="grid grid-cols-2 gap-2.5 px-2 pb-2">
        <div className="bg-[#1d2226] rounded-lg border border-[#2d6aa0] flex flex-col justify-between min-h-[105px]" style={{ padding: '16px' }}>
          <p className="text-white text-[13px] leading-tight mb-3" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Просмотры видео</p>
          <p className="text-white" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600, fontSize: '21px', lineHeight: '1' }}>1116</p>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg border border-[#3a3a3a] flex flex-col justify-between min-h-[105px]" style={{ padding: '16px' }}>
          <p className="text-white text-[13px] leading-tight mb-3" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Общая продолжительность просмотра</p>
          <p className="text-white whitespace-nowrap" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500, fontSize: '18px', lineHeight: '1' }}>4 ч.:50 мин.:21 с.</p>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg border border-[#3a3a3a] flex flex-col justify-between min-h-[90px]" style={{ padding: '16px' }}>
          <p className="text-white text-[13px] leading-tight mb-3" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Среднее время просмотра</p>
          <p className="text-white" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600, fontSize: '21px', lineHeight: '1' }}>89.8 с.</p>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg border border-[#3a3a3a] flex flex-col justify-between min-h-[90px]" style={{ padding: '16px' }}>
          <p className="text-white text-[13px] leading-tight mb-3" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Просмотрели видео полностью</p>
          <p className="text-white" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600, fontSize: '21px', lineHeight: '1' }}>4.12%</p>
        </div>
        
        <div className="bg-[#1e1e1e] rounded-lg border border-[#3a3a3a] flex flex-col justify-between min-h-[75px]" style={{ padding: '16px' }}>
          <p className="text-white text-[13px] leading-tight mb-3" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Новые подписчики</p>
          <p className="text-white" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600, fontSize: '21px', lineHeight: '1' }}>0</p>
        </div>
      </div>
    </div>
  );
}