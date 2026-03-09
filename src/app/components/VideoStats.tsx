import {
  Heart,
} from "lucide-react";

export function VideoStats() {
  const stats = [
    { icon: "play", value: "1,116", label: "Просмотры" },
    { icon: Heart, value: "9", label: "Лайки" },
    { icon: "comment", value: "0", label: "Комментарии" },
    { icon: "share", value: "0", label: "Поделились" },
    { icon: "bookmark", value: "0", label: "Сохранили" },
  ];

  return (
    <div className="flex items-center px-4 py-2">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-2 w-full">
            {stat.icon === "play" ? (
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#666666]"
              >
                <path 
                  fill="currentColor"
                  d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"
                />
              </svg>
            ) : stat.icon === "comment" ? (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 48 48" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#666666]"
                style={{ transform: 'scaleX(-1)' }}
              >
                <path 
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.5 6C10.492 6 4 12.492 4 20.5C4 38.5 28 42 28 42v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6zM24 23.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M34.5 21a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16 23.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                  clipRule="evenodd"
                />
              </svg>
            ) : stat.icon === "share" ? (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 48 48" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#666666]"
              >
                <path 
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="m26 4l18 18l-18 17V28C12 28 6 43 6 43c0-17 5-28 20-28z"
                />
              </svg>
            ) : stat.icon === "bookmark" ? (
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#666666]"
              >
                <path 
                  fill="currentColor"
                  d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"
                />
              </svg>
            ) : (
              <stat.icon className="w-[20px] h-[20px] text-[#666666] fill-[#666666]" strokeWidth={0} />
            )}
            <span className="text-[#c0c0c0] font-medium text-sm">
              {stat.value}
            </span>
          </div>
          {index < stats.length - 1 && (
            <div className="h-6 w-px bg-[#1e1e1e] flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}