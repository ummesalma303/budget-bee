// import React from 'react'

import { BarChart3 } from "lucide-react"

const Footer = () => {
  return (
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ANALYTICS</span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <a href="#" className="hover:text-pink-400 transition">Product</a>
              <a href="#" className="hover:text-pink-400 transition">Pricing Plans</a>
              <a href="#" className="hover:text-pink-400 transition">FAQ</a>
              <a href="#" className="hover:text-pink-400 transition">Blog</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition">
                t
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition">
                in
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer