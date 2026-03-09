import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Hash, TrendingUp } from 'lucide-react';

interface Hashtag {
  tag: string;
  views: string;
  growth: string;
  isGrowing: boolean;
}

export function TrendingHashtags() {
  const hashtags: Hashtag[] = [
    { tag: 'fyp', views: '2.4B', growth: '+12%', isGrowing: true },
    { tag: 'viral', views: '1.8B', growth: '+8%', isGrowing: true },
    { tag: 'trending2025', views: '892M', growth: '+24%', isGrowing: true },
    { tag: 'foryou', views: '756M', growth: '+5%', isGrowing: true },
    { tag: 'tiktok', views: '654M', growth: '-2%', isGrowing: false },
    { tag: 'challenge', views: '543M', growth: '+18%', isGrowing: true },
    { tag: 'dance', views: '421M', growth: '+7%', isGrowing: true },
    { tag: 'comedy', views: '389M', growth: '+11%', isGrowing: true }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg">Trending Hashtags</h3>
        <Badge variant="secondary" className="bg-pink-50 text-pink-700">
          Live
        </Badge>
      </div>
      
      <div className="space-y-3">
        {hashtags.map((hashtag, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                <Hash className="size-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">#{hashtag.tag}</p>
                <p className="text-sm text-neutral-600">{hashtag.views} views</p>
              </div>
            </div>
            <div className={`flex items-center gap-1 text-sm ${
              hashtag.isGrowing ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className={`size-4 ${!hashtag.isGrowing && 'rotate-180'}`} />
              {hashtag.growth}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
