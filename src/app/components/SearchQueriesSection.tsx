import { Info } from 'lucide-react';
import { InfoIcon } from '@/app/components/InfoIcon';

export function SearchQueriesSection() {
  return (
    <div className="px-3 py-6 bg-[#1e1e1e] mx-3 rounded-[6px] mb-2">
      <div className="flex items-center gap-0.5 mb-0">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>Поисковые запросы</h2>
        <InfoIcon />
      </div>
      
      <p className="text-neutral-400 text-[13px]">
        Сейчас у всех поисковых запросов низкий трафик. Данные появятся, когда хотя бы у 1 запроса будет достаточно трафика.
      </p>
    </div>
  );
}