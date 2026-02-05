import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


const PricingCard = () => {
  return (
    <Card className="p-8 bg-slate-800 border-slate-700 text-center">
              <h3 className="text-2xl text-accent font-bold mb-2">Starter</h3>
              <p className="text-slate-400 mb-6">up to 3 users</p>
              <div className="mb-8">
                <span className="text-sm text-accent align-top">$</span>
                <span className="text-5xl text-accent font-bold">29</span>
                <span className="text-slate-400 block text-sm mt-2">per month</span>
              </div>
              <Button variant="outline" className="w-full border-slate-600 hover:text-white hover:bg-slate-700">
                Order
              </Button>
            </Card>
  )
}

export default PricingCard