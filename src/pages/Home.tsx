// import React from 'react';
import Banner from '@/components/home/Banner';
import Reports from '@/components/home/Reports';
import Customizable from '@/components/home/Customizable';
import PreBuilt from '@/components/home/PreBuilt';
import Pricing from '@/components/home/Pricing';
// import Customizable from '@/components/home/Customizable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <Banner/>
    <Reports/>
    <Customizable/>
    <PreBuilt/>
    <Pricing/>
    </div>
  );
}