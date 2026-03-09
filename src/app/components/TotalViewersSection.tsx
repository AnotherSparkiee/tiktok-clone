import { InfoIcon } from '@/app/components/InfoIcon';
import { ArrowUpCircleIcon } from '@/app/components/ArrowUpCircleIcon';

export function TotalViewersSection() {
  return (
    <div className="mx-3 mt-2 mb-2 bg-[#1e1e1e] rounded-[6px] p-4">
      <div className="flex items-center gap-0.5 mb-1">
        <h2 className="text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
          Всего зрителей
        </h2>
        <InfoIcon />
      </div>
      <div className="text-[28px] font-bold mb-1 leading-[1.2]" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
        160
      </div>
      <div className="flex items-center gap-1 text-sm text-neutral-400">
        <div className="text-[#8ecaff]">
          <ArrowUpCircleIcon />
        </div>
        <span><span className="text-[#8ecaff]">+1</span> (в сравнении со вчерашним днем)</span>
      </div>
    </div>
  );
}