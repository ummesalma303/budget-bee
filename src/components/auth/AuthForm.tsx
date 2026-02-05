// import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import type { AuthProps } from '@/types/home';


const AuthForm = ({ isSignUp, setIsSignUp }: AuthProps) => {

  return (
    <div className="space-y-4">
              {/* Full Name Input - Only for Sign Up */}
              {isSignUp && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <Input 
                      type="text" 
                      placeholder="John Doe"
                      className="pl-11 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    type="email" 
                    placeholder="you@example.com"
                    className="pl-11 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input 
                    type="password" 
                    placeholder="••••••••"
                    className="pl-11 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-300"
                  />
                </div>
                {isSignUp && (
                  <p className="text-xs text-slate-500 mt-1 animate-fadeIn">Must be at least 8 characters</p>
                )}
              </div>

              {/* Remember Me / Terms */}
              {!isSignUp ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-slate-700 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
                    <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-pink-400 hover:text-pink-300 transition">
                    Forgot password?
                  </a>
                </div>
              ) : (
                <div className="flex items-start space-x-2 pt-2 animate-fadeIn">
                  <Checkbox id="terms" className="mt-1 border-slate-700 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
                  <label htmlFor="terms" className="text-sm text-slate-400 cursor-pointer leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-pink-400 hover:text-pink-300">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-pink-400 hover:text-pink-300">Privacy Policy</a>
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-6 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-[1.02] group">
                {isSignUp ? 'Create account' : 'Sign in'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Toggle Link */}
              <p className="text-center text-slate-400 pt-2">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-pink-400 hover:text-pink-300 font-semibold transition"
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>
  )
}

export default AuthForm