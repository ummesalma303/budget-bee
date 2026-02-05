import { Card } from '@/components/ui/card';

const Customizable = () => {
  return (
          <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-white">
              <div className="space-y-3">
                {[70, 45, 20, 80, 55].map((width, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded" style={{width: `${width}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Fully customizable to<br />address your needs
              </h2>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae lorem lorem bibendum sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Customizable