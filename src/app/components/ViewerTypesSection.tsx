import { InfoIcon } from '@/app/components/InfoIcon';

export function ViewerTypesSection() {
  return (
    <div className="mx-3 mb-2 bg-[#1e1e1e] rounded-[6px] p-4">
      <div className="flex items-center gap-0.5 mb-4">
        <h2 className="text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
          Типы зрителей
        </h2>
        <InfoIcon />
      </div>
      
      {/* Новые vs Вернувшиеся */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold">35%</span>
          <span className="text-sm font-semibold">65%</span>
        </div>
        <div className="flex h-2.5 rounded-[1px] overflow-hidden mb-2 gap-[2px]">
          <div className="bg-[#8ecaff] rounded-[1px]" style={{ width: '35%' }}></div>
          <div className="bg-[#6b93b8] rounded-[1px]" style={{ width: '65%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-neutral-300">
          <span>Новые зрители</span>
          <span>Вернувшиеся зрители</span>
        </div>
      </div>
      
      {/* Не подписанные vs Подписчики */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold">100%</span>
          <span className="text-sm font-semibold">0%</span>
        </div>
        <div className="flex h-2.5 bg-neutral-700 rounded-[1px] overflow-hidden mb-2">
          <div className="bg-[#8ecaff]" style={{ width: '100%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-neutral-300">
          <span>Не подписанные</span>
          <span>Подписчики</span>
        </div>
      </div>
    </div>
  );
}