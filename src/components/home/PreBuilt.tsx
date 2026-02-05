import { Card } from '@/components/ui/card';

const PreBuilt = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Pre-built Dashboard<br />Templates
              </h2>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae lorem lorem bibendum sit amet.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="grid grid-cols-7 gap-2">
                <div className="col-span-7 grid grid-cols-7 gap-2 text-center text-xs text-slate-500 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                {Array.from({length: 35}, (_, i) => {
                  const isHighlight = [2, 9, 10, 16, 23].includes(i);
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-full flex items-center justify-center text-sm ${
                        isHighlight 
                          ? i === 23 ? 'bg-pink-500 text-white' : 'bg-blue-500 text-white'
                          : 'text-slate-600'
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default PreBuilt