export function GenderSection() {
  const malePercentage = 42;
  const femalePercentage = 58;
  const otherPercentage = 0;
  
  // Рассчитываем углы для кругового графика (donut chart)
  const total = 100;
  const maleAngle = (malePercentage / total) * 360;
  const femaleAngle = (femalePercentage / total) * 360;
  
  return (
    <div className="mx-3 mb-2 bg-[#1e1e1e] rounded-[6px] p-4">
      <h2 className="text-lg font-bold mb-1" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
        Пол
      </h2>
      
      {/* Donut Chart */}
      <div className="flex justify-center mb-5">
        <svg width="240" height="130" viewBox="0 0 300 160">
          {/* Мужской - голубой (42%) - 42% от 180° = 75.6° */}
          <path
            d="M 40 150 A 110 110 0 0 1 130 42 L 142 80 A 70 70 0 0 0 78 150 Z"
            fill="#8ecaff"
            stroke="#000000"
            strokeWidth="2.5"
          />
          
          {/* Женский - серо-голубой (58%) - 58% от 180° = 104.4° */}
          <path
            d="M 130 42 A 110 110 0 0 1 260 150 L 222 150 A 70 70 0 0 0 142 80 Z"
            fill="#567490"
            stroke="#000000"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      
      {/* Легенда */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8ecaff]"></div>
            <span className="text-sm text-neutral-300">Мужской</span>
          </div>
          <span className="text-sm font-semibold">{malePercentage}%</span>
        </div>
        
        <div className="h-px bg-neutral-700"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#567490]"></div>
            <span className="text-sm text-neutral-300">Женский</span>
          </div>
          <span className="text-sm font-semibold">{femalePercentage}%</span>
        </div>
        
        <div className="h-px bg-neutral-700"></div>
        
        <div className="flex items-center justify-between pb-[3px]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#34404c]"></div>
            <span className="text-sm text-neutral-300">Другое</span>
          </div>
          <span className="text-sm font-semibold">{otherPercentage}%</span>
        </div>
      </div>
    </div>
  );
}