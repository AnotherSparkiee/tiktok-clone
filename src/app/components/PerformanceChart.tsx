import { Card } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const viewsData = [
  { day: 'Mon', views: 145000, likes: 28000 },
  { day: 'Tue', views: 189000, likes: 35000 },
  { day: 'Wed', views: 234000, likes: 42000 },
  { day: 'Thu', views: 298000, likes: 58000 },
  { day: 'Fri', views: 412000, likes: 78000 },
  { day: 'Sat', views: 568000, likes: 102000 },
  { day: 'Sun', views: 554000, likes: 115000 }
];

const engagementData = [
  { hour: '00:00', engagement: 12 },
  { hour: '04:00', engagement: 8 },
  { hour: '08:00', engagement: 15 },
  { hour: '12:00', engagement: 28 },
  { hour: '16:00', engagement: 35 },
  { hour: '20:00', engagement: 42 },
  { hour: '23:00', engagement: 18 }
];

export function PerformanceChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg mb-4">Performance Analytics</h3>
      
      <Tabs defaultValue="views" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="views">Views & Likes</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="views" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={viewsData}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="day" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="views" 
                stroke="#ec4899" 
                fillOpacity={1} 
                fill="url(#colorViews)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="likes" 
                stroke="#a855f7" 
                fillOpacity={1} 
                fill="url(#colorLikes)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-pink-500 rounded-full"></div>
              <span className="text-sm text-neutral-600">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-neutral-600">Likes</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="engagement" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="hour" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="engagement" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm text-neutral-600 mt-4">Best posting time: 4PM - 8PM</p>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
