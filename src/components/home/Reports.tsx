// import React from 'react'
import { Card } from '@/components/ui/card';


const Reports = () => {
  return (
         <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Automated Reports<br />& Widget Alerts
              </h2>
              <p className="text-slate-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae lorem lorem bibendum sit amet.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="relative w-64 h-64 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <polygon points="100,20 160,60 150,130 50,130 40,60" stroke="#3b82f6" strokeWidth="2" fill="none" />
                  <polygon points="100,40 140,70 135,120 65,120 60,70" stroke="#ec4899" strokeWidth="2" fill="none" />
                </svg>
                <div className="absolute top-4 right-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-500">34%</div>
                    <div className="text-xs text-slate-500">Lorem 1</div>
                  </div>
                  <div className="text-right mt-4">
                    <div className="text-2xl font-bold text-blue-500">29%</div>
                    <div className="text-xs text-slate-500">Lorem 2</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

  )
}

export default Reports