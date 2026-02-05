import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 120L1440 120L1440 0C1440 0 1200 80 720 40C240 0 0 60 0 60L0 120Z" fill="#f8fafc"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Monitor your business<br />on real-time dashboard
              </h1>
              <p className="text-slate-300 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae lorem lorem bibendum sit.
              </p>
              <Button size='lg' className=" rounded-full text-lg">
                Try for free
              </Button>
            </div>
            <div className="relative">
              <Card className="p-6 bg-white shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-pink-100 rounded flex items-center justify-center">
                        <span className="text-xs">📊</span>
                      </div>
                      <span className="text-xs text-slate-600">Revenue</span>
                    </div>
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="75" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600">70%</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-slate-50">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded" style={{width: '80%'}}></div>
                        <span className="text-xs ml-2">35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" style={{width: '60%'}}></div>
                        <span className="text-xs ml-2">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded" style={{width: '40%'}}></div>
                        <span className="text-xs ml-2">20%</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative w-20 h-20">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                          <circle cx="40" cy="40" r="32" stroke="#ec4899" strokeWidth="6" fill="none" strokeDasharray="201" strokeDashoffset="50" />
                          <circle cx="40" cy="40" r="32" stroke="#3b82f6" strokeWidth="6" fill="none" strokeDasharray="201" strokeDashoffset="150" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-slate-50">
                    <div className="flex gap-2 mb-4">
                      <div className="w-8 h-16 bg-gradient-to-t from-pink-400 to-pink-300 rounded"></div>
                      <div className="w-8 h-24 bg-gradient-to-t from-blue-500 to-blue-400 rounded"></div>
                      <div className="w-8 h-20 bg-gradient-to-t from-purple-400 to-purple-300 rounded"></div>
                      <div className="w-8 h-28 bg-gradient-to-t from-blue-600 to-blue-500 rounded"></div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-slate-50">
                    <svg viewBox="0 0 100 60" className="w-full">
                      <path d="M 0 50 Q 25 30 50 35 T 100 20" stroke="#ec4899" strokeWidth="2" fill="none" />
                      <path d="M 0 40 Q 25 45 50 25 T 100 30" stroke="#3b82f6" strokeWidth="2" fill="none" />
                    </svg>
                    <div className="flex justify-around mt-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner