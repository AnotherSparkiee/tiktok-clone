import { Eye, Heart, MessageCircle, Share2, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

function MetricCard({ icon, label, value, change, isPositive }: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
          {icon}
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
          isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <TrendingUp className={`size-3 ${!isPositive && 'rotate-180'}`} />
          {change}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-neutral-600">{label}</p>
        <p className="text-2xl mt-1">{value}</p>
      </div>
    </Card>
  );
}

export function MetricsOverview() {
  const metrics = [
    {
      icon: <Eye className="size-6 text-pink-500" />,
      label: 'Total Views',
      value: '2.4M',
      change: '+12.5%',
      isPositive: true
    },
    {
      icon: <Heart className="size-6 text-red-500" />,
      label: 'Likes',
      value: '458K',
      change: '+8.3%',
      isPositive: true
    },
    {
      icon: <MessageCircle className="size-6 text-blue-500" />,
      label: 'Comments',
      value: '12.8K',
      change: '+15.7%',
      isPositive: true
    },
    {
      icon: <Share2 className="size-6 text-purple-500" />,
      label: 'Shares',
      value: '34.2K',
      change: '-2.1%',
      isPositive: false
    },
    {
      icon: <Users className="size-6 text-orange-500" />,
      label: 'Followers Gained',
      value: '+8.5K',
      change: '+22.4%',
      isPositive: true
    },
    {
      icon: <TrendingUp className="size-6 text-green-500" />,
      label: 'Engagement Rate',
      value: '18.2%',
      change: '+5.1%',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
