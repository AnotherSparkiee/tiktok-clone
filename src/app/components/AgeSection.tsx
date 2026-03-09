export function AgeSection() {
  const ageData = [
    { range: '18 - 24', percentage: 37 },
    { range: '25 - 34', percentage: 36 },
    { range: '35 - 44', percentage: 15 },
    { range: '45 - 54', percentage: 9 },
    { range: '55+', percentage: 3 }
  ];
  
  return (
    <div className="mx-3 mb-2 bg-[#1e1e1e] rounded-[6px] p-4">
      <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
        Возраст
      </h2>
      
      <div className="space-y-4">
        {ageData.map((item) => (
          <div key={item.range}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-white">{item.range}</span>
              <span className="text-sm font-semibold">{item.percentage}%</span>
            </div>
            <div className="h-2.5 bg-neutral-700 rounded-[1px] overflow-hidden">
              <div 
                className="h-full bg-[#8ecaff] rounded-[1px]"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}