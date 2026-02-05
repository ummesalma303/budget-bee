// import React from 'react'
import { BarChart3} from 'lucide-react';
import { NavLink } from 'react-router';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ANALYTICS</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className="hover:text-pink-400 transition">Home</NavLink>
              <NavLink to="#" className="hover:text-pink-400 transition">Features</NavLink>
              <NavLink to="#" className="hover:text-pink-400 transition">Pricing</NavLink>
              <NavLink to="#" className="hover:text-pink-400 transition">FAQ</NavLink>
              <NavLink to="#" className="hover:text-pink-400 transition">Blog</NavLink>
            </div>
              <NavLink to='/authPage'>
            <div className="flex items-center gap-4">
              <button className="hover:text-pink-400 transition">Sign In</button>
              <Button className=" ">Sign Up</Button>
              
            </div>
              </NavLink>
          </nav>
        </div>
      </nav>
  )
}

export default Navbar