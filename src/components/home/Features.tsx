import { BarChart3, Gauge, Rocket} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  return (
     <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Main Features</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae lorem lorem bibendum sit amet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Monitoring 24/7</h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Widget System</h3>
              <p className="text-slate-600">
                Sapien in etiam vitae lorem lorem bibendum sit amet. Vitae et lorem lorem bibendum bibendum sit amet.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Best Performance</h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est.
              </p>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Features