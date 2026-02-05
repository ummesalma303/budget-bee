import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import Social from '@/components/auth/Social';
import AuthForm from '@/components/auth/AuthForm';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Noise Texture Overlay */}
      <div
  className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
  style={{
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/940/997/non_2x/abstract-colorful-geometric-shapes-seamless-pattern-on-white-background-vector.jpg')"
  }}
></div>


      {/* Content */}
      <div className="relative z-10 w-full max-w-xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/50">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              ANALYTICS
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="text-slate-400">
            {isSignUp 
              ? 'Start your 14-day free trial. No credit card required.'
              : 'Sign in to continue to your dashboard'
            }
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 shadow-2xl shadow-purple-500/10">
          <div className="p-8">
            {/* Toggle Tabs */}
            <div className="flex bg-slate-800/50 rounded-lg p-1 mb-6">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  !isSignUp
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  isSignUp
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Social Sign In/Up */}
            <Social/>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900/50 text-slate-500">Or continue with email</span>
              </div>
            </div>

            {/* Form Fields */}
            <AuthForm isSignUp={isSignUp} setIsSignUp={setIsSignUp}></AuthForm>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>© 2024 Analytics. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}