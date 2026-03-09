import { useState } from 'react';
import { FireIcon } from '@/app/components/FireIcon';

const viewsData = [
  { date: '19 янв', views: 213 },
  { date: '20 янв', views: 2 },
  { date: '21 янв', views: 2 },
  { date: '22 янв', views: 2 },
  { date: '23 янв', views: 2 },
  { date: '24 янв', views: 2 },
  { date: '25 янв', views: 2 }
];

export function ViewsChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const width = 360; // Уменьшена ширина на 10px (было 370)
  const height = 170; // Уменьшена высота
  const padding = { top: 20, right: 30, bottom: 30, left: 5 }; // Уменьшены отступы слева и справа
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  const maxViews = 220;
  const minViews = 60;
  
  // Функция для преобразования данных в координаты
  const getX = (index: number) => {
    return padding.left + (index / (viewsData.length - 1)) * chartWidth;
  };
  
  const getY = (views: number) => {
    return padding.top + chartHeight - ((views - minViews) / (maxViews - minViews)) * chartHeight;
  };
  
  // Горизонтаьные линии сетки
  const gridLines = [213, 142, 71].map(value => getY(value));
  
  // Четвертая линия - рассчитываем чтобы была на равном расстоянии
  const lineSpacing = (gridLines[1] - gridLines[0]); // Расстояние между первой и второй линией
  const fourthLineY = gridLines[2] + lineSpacing;
  
  // Создаем путь для линии
  const linePath = viewsData.map((d, i) => {
    const x = getX(i);
    const y = getY(d.views);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ') + ` L ${getX(viewsData.length - 1)} ${fourthLineY}`;
  
  // Содаем путь для заливки под линией
  const fillPath = viewsData.map((d, i) => {
    const x = getX(i);
    const y = getY(d.views);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ') + ` L ${getX(viewsData.length - 1)} ${fourthLineY} L ${getX(0)} ${fourthLineY} Z`;
  
  return (
    <div className="px-2 pt-2 pb-3">
      <div className="relative w-full" style={{ height: '185px' }}>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible" preserveAspectRatio="none">
          <defs>
            {/* Gradient for the area fill */}
            <linearGradient id="viewsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5eb3f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5eb3f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Горизонтальные линии сетки */}
          {gridLines.map((y, i) => (
            <line
              key={i}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#4c4c4c"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}
          
          {/* Четвертая нижняя линия */}
          <line
            x1={padding.left}
            y1={fourthLineY}
            x2={width - padding.right}
            y2={fourthLineY}
            stroke="#4c4c4c"
            strokeWidth="1"
          />
          
          {/* Градиентная заливка под линией - теперь до нижней линии */}
          <path
            d={fillPath}
            fill="url(#viewsGradient)"
          />
          
          {/* Линия графика */}
          <path
            d={linePath}
            fill="none"
            stroke="#5eb3f6"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Вертикальная голубая лни при наведении */}
          {hoveredIndex !== null && (
            <line
              x1={getX(hoveredIndex)}
              y1={gridLines[0]}
              x2={getX(hoveredIndex)}
              y2={fourthLineY}
              stroke="#5eb3f6"
              strokeWidth="1"
            />
          )}
          
          {/* Точки на графике - нешний круг голубой, внутри белый */}
          {viewsData.map((d, i) => (
            <g key={i}>
              {/* Невидимая область для наведения */}
              <circle
                cx={getX(i)}
                cy={getY(d.views)}
                r="15"
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {/* Внешний голубой круг */}
              <circle
                cx={getX(i)}
                cy={getY(d.views)}
                r={hoveredIndex === i ? "5" : "2.5"}
                fill="#5eb3f6"
                style={{ pointerEvents: 'none', transition: 'r 0.2s ease' }}
              />
              {/* Внутрений белы круг */}
              <circle
                cx={getX(i)}
                cy={getY(d.views)}
                r={hoveredIndex === i ? "3" : "1.5"}
                fill="white"
                style={{ pointerEvents: 'none', transition: 'r 0.2s ease' }}
              />
            </g>
          ))}
          
          {/* Метки уровней справа - точно на линиях */}
          <text x={width - padding.right + 5} y={gridLines[0]} fill="#a5a5a5" fontSize="12" dominantBaseline="middle" textAnchor="start">213</text>
          <text x={width - padding.right + 5} y={gridLines[1]} fill="#a5a5a5" fontSize="12" dominantBaseline="middle" textAnchor="start">142</text>
          <text x={width - padding.right + 5} y={gridLines[2]} fill="#a5a5a5" fontSize="12" dominantBaseline="middle" textAnchor="start">71</text>
          
          {/* Метки по оси X */}
          <text
            x={padding.left}
            y={fourthLineY + 15}
            fill="#a5a5a5"
            fontSize="12"
            textAnchor="start"
          >
            19 янв
          </text>
          <text
            x={width - padding.right}
            y={fourthLineY + 15}
            fill="#a5a5a5"
            fontSize="12"
            textAnchor="end"
          >
            25 янв
          </text>
        </svg>
        
        {/* Tooltip при наведении */}
        {hoveredIndex !== null && (
          <div 
            className="absolute bg-[#121212] text-white rounded-lg text-xs pointer-events-none border border-neutral-700 whitespace-nowrap"
            style={{
              left: `${(getX(hoveredIndex) / width) * 100}%`,
              top: `${(getY(viewsData[hoveredIndex].views) / height) * 100}%`,
              transform: hoveredIndex === viewsData.length - 1 
                ? 'translate(-110%, -75%)' // Для последней точки - слева, чуть выше
                : 'translate(10%, -75%)' // Для остальных точек - справа, чуть выше
            }}
          >
            <div className="text-left">
              <div className="px-2 pt-1.5 pb-1">{viewsData[hoveredIndex].date}</div>
              <div className="h-[0.5px] bg-neutral-700"></div>
              <div className="px-2 pt-1 pb-1.5">{viewsData[hoveredIndex].views}</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Текст о диаграмме */}
      <div className="px-2 mt-12 mb-4">
        <div className="bg-[#3b3b3b] rounded-lg px-3 py-3">
          <p className="leading-relaxed" style={{ fontFamily: 'TikTok Sans, sans-serif', color: '#e7e7e7', fontSize: '13px' }}>
            На диаграмме показывается тренд данных за последние 7 дней после публикации.
          </p>
        </div>
      </div>
      
      {/* Разделитель */}
      <div className="px-2 mb-4">
        <div className="h-[1px] bg-[#484848]"></div>
      </div>
      
      {/* Попробуйте продвижение */}
      <div className="px-2 mb-1">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <div>
              <FireIcon />
            </div>
            <p className="text-white leading-relaxed" style={{ fontFamily: 'TikTok Sans, sans-serif', fontSize: '12px' }}>
              Попробуйте продвижение, чтобы увеличить просмотры и вовлеченность.
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
            <path 
              fill="none" 
              stroke="#000000" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="m9 6l6 6l-6 6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}