import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function OtherPublicationsSection() {
  const thumbnails = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=200'
  ];

  return (
    <div className="px-3 py-4 bg-[#1e1e1e] mx-3 rounded-[6px] mb-2">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-white leading-snug" style={{ fontSize: '13px' }}>Посмотреть данные других<br />публикаций</h2>
        <div className="flex gap-1.5 flex-shrink-0">
          {thumbnails.map((thumb, index) => (
            <ImageWithFallback
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-[28px] h-[30px] object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}