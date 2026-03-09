import { InfoIcon } from '@/app/components/InfoIcon';
import { ChevronRightIcon } from '@/app/components/ChevronRightIcon';

export function LocationsSection() {
  const locationData = [
    { name: 'Соединенные Штаты', percentage: 23.7, hasChevron: false },
    { name: 'Россия', percentage: 20.6, hasChevron: false },
    { name: 'Другое', percentage: 13.9, hasChevron: false },
    { name: 'Франция', percentage: 13.4, hasChevron: false },
    { name: 'Бельгия', percentage: 6.7, hasChevron: false },
    { name: 'Нидерланды', percentage: 6.2, hasChevron: false },
    { name: 'Иран', percentage: 5.2, hasChevron: false },
    { name: 'Германия', percentage: 4.1, hasChevron: false },
    { name: 'Канада', percentage: 2.6, hasChevron: true },
    { name: 'Индия', percentage: 2.1, hasChevron: false },
    { name: 'Республика Молдова', percentage: 1.5, hasChevron: false }
  ];
  
  return (
    <div className="mx-3 mb-2 bg-[#1e1e1e] rounded-[6px] p-4">
      <div className="flex items-center gap-0.5 mb-4">
        <h2 className="text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
          Места
        </h2>
        <InfoIcon />
      </div>
      
      <div className="space-y-4">
        {locationData.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-white">{item.name}</span>
              <div className="flex items-center gap-0.5">
                <span className="text-sm font-semibold">{item.percentage}%</span>
                {item.hasChevron && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                    <path 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="3" 
                      d="m9 6l6 6l-6 6"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="h-2.5 bg-neutral-700 rounded-[1px] overflow-hidden">
              <div 
                className="h-full bg-[#8ecaff] rounded-[1px]"
                style={{ width: `${(item.percentage / 23.7) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}