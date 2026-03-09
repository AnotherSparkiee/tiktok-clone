import { Info } from "lucide-react";
import { InfoIcon } from '@/app/components/InfoIcon';

export function MostFrequentWordsSection() {
  return (
    <div className="px-3 py-5 bg-[#1e1e1e] mx-3 rounded-[6px] mb-2">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-white text-[17px] font-bold leading-tight" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
          Самые частые слова в<br />комментариях
        </h2>
        <InfoIcon />
      </div>
      
      <p className="text-neutral-400 text-[13px]">
        Аналитические данные о самых часто используемых словах пока не готовы. Зайдите позже.
      </p>
    </div>
  );
}