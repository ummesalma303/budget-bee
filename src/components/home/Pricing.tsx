import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform rotate-180"
        >
          <path
            d="M0 120L1440 120L1440 0C1440 0 1200 80 720 40C240 0 0 60 0 60L0 120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10 mt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-slate-800 border-slate-700 text-center">
            <h3 className="text-2xl text-accent font-bold mb-2">Starter</h3>
            <p className="text-slate-400 mb-6">up to 3 users</p>
            <div className="mb-8">
              <span className="text-sm text-accent align-top">$</span>
              <span className="text-5xl text-accent font-bold">29</span>
              <span className="text-slate-400 block text-sm mt-2">
                per month
              </span>
            </div>
            <Button
              variant="outline"
              className="w-full border-slate-600 hover:text-white hover:bg-slate-700"
            >
              Order
            </Button>
          </Card>

          <Card className="p-8 bg-white text-slate-900 text-center transform md:scale-105 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-slate-500 mb-6">up to 20 users</p>
            <div className="mb-8">
              <span className="text-sm align-top">$</span>
              <span className="text-5xl font-bold">99</span>
              <span className="text-slate-500 block text-sm mt-2">
                per month
              </span>
            </div>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
              Order
            </Button>
          </Card>
          <Card className="p-8 bg-slate-800 border-slate-700 text-center">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-slate-400 mb-6">up to 200 users</p>
            <div className="mb-8">
              <span className="text-sm align-top">$</span>
              <span className="text-5xl font-bold">299</span>
              <span className="text-slate-400 block text-sm mt-2">
                per month
              </span>
            </div>
            <Button
              variant="outline"
              className="w-full border-slate-600 hover:text-white hover:bg-slate-700"
            >
              Order
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
