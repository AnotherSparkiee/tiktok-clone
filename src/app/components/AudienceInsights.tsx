import { Card } from '@/app/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Users, MapPin, Clock } from 'lucide-react';

const ageData = [
  { name: '13-17', value: 15, color: '#ec4899' },
  { name: '18-24', value: 42, color: '#a855f7' },
  { name: '25-34', value: 28, color: '#3b82f6' },
  { name: '35-44', value: 10, color: '#10b981' },
  { name: '45+', value: 5, color: '#f59e0b' }
];

const genderData = [
  { name: 'Female', value: 58, color: '#ec4899' },
  { name: 'Male', value: 40, color: '#3b82f6' },
  { name: 'Other', value: 2, color: '#a855f7' }
];

const topLocations = [
  { country: 'United States', percentage: 34, flag: '🇺🇸' },
  { country: 'United Kingdom', percentage: 18, flag: '🇬🇧' },
  { country: 'Canada', percentage: 12, flag: '🇨🇦' },
  { country: 'Australia', percentage: 8, flag: '🇦🇺' },
  { country: 'Germany', percentage: 6, flag: '🇩🇪' }
];

const peakHours = [
  { time: '12PM - 2PM', activity: 'High' },
  { time: '6PM - 9PM', activity: 'Very High' },
  { time: '10PM - 12AM', activity: 'Medium' }
];

export function AudienceInsights() {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="size-5 text-pink-500" />
          <h3 className="text-lg">Audience Demographics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-neutral-600 mb-3">Age Distribution</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry: any) => `${entry.payload.name} (${entry.payload.value}%)`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <p className="text-sm text-neutral-600 mb-3">Gender Split</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry: any) => `${entry.payload.name} (${entry.payload.value}%)`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="size-5 text-blue-500" />
            <h3 className="text-lg">Top Locations</h3>
          </div>
          <div className="space-y-3">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{location.flag}</span>
                  <span className="text-sm">{location.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                      style={{ width: `${location.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-neutral-600 w-8">{location.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="size-5 text-purple-500" />
            <h3 className="text-lg">Peak Activity Hours</h3>
          </div>
          <div className="space-y-4">
            {peakHours.map((hour, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{hour.time}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    hour.activity === 'Very High' 
                      ? 'bg-green-100 text-green-700'
                      : hour.activity === 'High'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {hour.activity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
