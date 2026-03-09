import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function VideoPreview() {
  return (
    <div className="px-4 py-4 flex flex-col items-center">
      <div className="relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
          alt="Video thumbnail"
          className="w-[77px] h-[104px] object-cover rounded-md"
        />
        <div className="absolute bottom-1 left-0 right-0 text-center">
          <span className="text-white text-sm font-medium drop-shadow-md">
            29.19 с.
          </span>
        </div>
      </div>
      <p className="text-sm mt-3" style={{ color: '#e0e0e0', fontSize: '13px' }}>
        Опубликовано 20 янв 2026, 02:23
      </p>
    </div>
  );
}