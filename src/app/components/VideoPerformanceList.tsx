import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Play, Heart, MessageCircle, Share2 } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  date: string;
}

export function VideoPerformanceList() {
  const videos: Video[] = [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400',
      title: 'New Dance Challenge 2025 🔥',
      views: '2.4M',
      likes: '458K',
      comments: '12.8K',
      shares: '34.2K',
      date: '2 days ago'
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400',
      title: 'Life Hacks You Need to Try',
      views: '1.8M',
      likes: '342K',
      comments: '8.5K',
      shares: '28.1K',
      date: '4 days ago'
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400',
      title: 'Day in My Life Vlog',
      views: '1.2M',
      likes: '215K',
      comments: '5.2K',
      shares: '18.5K',
      date: '1 week ago'
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      title: 'Trending Fashion Tips',
      views: '890K',
      likes: '178K',
      comments: '3.8K',
      shares: '12.4K',
      date: '1 week ago'
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg mb-4">Top Performing Videos</h3>
      
      <div className="space-y-4">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="flex gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <div className="relative">
              <ImageWithFallback
                src={video.thumbnail}
                alt={video.title}
                className="size-24 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                <Play className="size-8 text-white fill-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <p className="font-medium mb-1 line-clamp-2">{video.title}</p>
              <p className="text-sm text-neutral-600 mb-2">{video.date}</p>
              
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Play className="size-4" />
                  {video.views}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="size-4" />
                  {video.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="size-4" />
                  {video.comments}
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="size-4" />
                  {video.shares}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
