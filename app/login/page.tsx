'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@admin.com')
  const [password, setPassword] = useState('admin')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simple validation - in a real app this would be an API call
    if (email === 'admin@admin.com' && password === 'admin') {
      // Store auth state
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userEmail', email)
      router.push('/dashboard')
    } else {
      setError('بيانات الدخول غير صحيحة')
    }

    setIsLoading(false)
  }

  return (
    <div className="flex h-screen w-full" dir="rtl">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-20 bg-white shadow-2xl lg:shadow-none h-full overflow-y-auto">
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12">
          {/* Logo */}
          <div className="mb-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 text-xl">
              🎓
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">نجّحني</span>
          </div>

          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">مرحباً بعودتك! 👋</h1>
            <p className="text-slate-500 text-lg">نحن سعداء برؤيتك مرة أخرى. سجل الدخول لمتابعة رحلة نجاحك.</p>
          </div>

          {/* Tabs */}
          <div className="bg-slate-50 p-1.5 rounded-xl flex mb-8 border border-slate-100 relative">
            <button className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-white text-blue-700 shadow-sm transition-colors duration-150 text-center">
              تسجيل الدخول
            </button>
            <button className="flex-1 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors duration-150 text-center">
              إنشاء حساب جديد
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700" htmlFor="email">
                البريد الإلكتروني
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors duration-150 text-lg">
                  📧
                </div>
                <input
                  className="block w-full py-3.5 pr-11 pl-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-150 text-base"
                  dir="ltr"
                  id="email"
                  name="email"
                  placeholder="student@najahni.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-slate-700" htmlFor="password">
                  كلمة المرور
                </label>
                <a className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors" href="#">
                  هل نسيت كلمة المرور؟
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors duration-150 text-lg">
                  🔒
                </div>
                <input
                  className="block w-full py-3.5 pr-11 pl-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-150 text-base"
                  dir="ltr"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold rounded-xl shadow-md shadow-blue-600/25 hover:shadow-md hover:shadow-blue-700/30 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 group"
            >
              <span>{isLoading ? 'جارٍ الدخول...' : 'تسجيل الدخول'}</span>
              <span className="text-lg transition-transform duration-150 group-hover:-translate-x-1">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4 text-slate-400">
            <div className="h-px flex-1 bg-slate-100"></div>
            <span className="text-xs font-medium">أو تابع باستخدام</span>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          {/* Social Login */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors duration-150 group text-lg">
              <span>🔵</span>
              <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors duration-150 group text-lg">
              <span>🍎</span>
              <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800">Apple</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-slate-500">
            ليس لديك حساب؟{' '}
            <a className="font-bold text-blue-700 hover:text-blue-800 underline decoration-2 decoration-blue-200 hover:decoration-blue-500 transition-all" href="#">
              أنشئ حساباً مجانياً الآن
            </a>
          </p>

          {/* Support Link */}
          <div className="mt-auto pt-8 flex justify-center">
            <a className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-600 transition-colors" href="#">
              <span className="text-sm">🎧</span>
              <span>المساعدة والدعم الفني</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Image & Promo */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] relative overflow-hidden bg-blue-900 items-center justify-center">
        <img
          alt="Students studying"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay z-0"
          loading="lazy"
          decoding="async"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQEPZ6gR3c3A2HHvUQDesPxo7HatBES_KovKEhcKvS9_1JWC9wHW-RHqqYUqU3akbuaqB5HkJtKIwpX0k6l0K2xO8zguLMw-k3dYv-aCLN5UyhxnQgeHbhVCA2nFM8T9U-JXeKmSQ2xpjRT4EInJqU_39IlY1BePZzYaMnWKzcKgiSDDfLokp8sfD_U72c-rLGu2VHH_LgK9kgLG6-BQ9vAMuY56fMh98Q9xOUqZNNVDjA_W0K1vgMdqYlbIKQavkfeja343uesPGb"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-indigo-700/85 z-0"></div>
        <div className="relative z-10 p-12 w-full max-w-2xl text-center">
          {/* Promo Card */}
          <div className="relative z-10 p-8 rounded-3xl border border-white/15 shadow-lg overflow-hidden backdrop-blur-sm bg-white/8">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-700/15 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/8 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/15 text-3xl">
                📚
              </div>
              <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight font-display">
                ابدأ رحلة التميز الأكاديمي مع نجّحني
              </h2>
              <p className="text-blue-100 text-lg font-light leading-relaxed max-w-lg mx-auto">
                منصة تعليمية متكاملة تمنحك الأدوات التي تحتاجها للنجاح. دروس تفاعلية، ومتابعة دقيقة، ومجتمع طلابي ملهم.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex -space-x-3 space-x-reverse">
                  <img
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                    loading="lazy"
                    decoding="async"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGcHCe6t4esow9lMiBXIgvjKnYesOQ0-rzDoYQJ4LueEbvSbMnYMgMNXVWRL8mrqYRSbLyRD6UTBoy9EkvpjuURnFfBWFGK6cv3oqLF4FFDv_D5u2kXmaBGt-yDUakcXlme95m5mxbEdgdooCP9gWoDLzdoYfNZ55TN6q58RPDoRnB4lszNbFfZ-XLYRuhphQLH86RVtNfpDtgIJPm7yo5iAB4eCRAMmCrEBq4EOVQwJgm9M5mG9klqyZRP6JQ9UCNA2IFDEmWQTrE"
                  />
                  <img
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                    loading="lazy"
                    decoding="async"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxEGRToIi0vvcNz6AW2dJkw7gP2vOLHY5IMGbW_hB-ue3BQ-eL7hlgMCdOeo-wBVjg9WXDEa4bQMP997P-iJdDioVW3nM0UBQ9kDGlCRggxfH0vbD71oNI2Heum41o6nOglBjBYR7fMD4xCviovV1gnWo26z7Xllq-FdTTFPxBmTdOEdIrMtKaPcoZBeZaOUC675uV9AJYROu5e5k39Ju9GFCSSeFqSz7PVaIP0FIjRSpJnKQt1bSMHOTWbPggt6b6wMoo419F0K-K"
                  />
                  <img
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                    loading="lazy"
                    decoding="async"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkO_jKTC3McCCbdghiI3b7lsLMORBC3vwunP35ykC7bCsYTBPaX-dqWVHDAaaXTZX1bAccS6RN-XKmo4PziCHHFazJLAaLlQb6exaf3urpmojXBwwgvxr0GnB3MWgPXV4adxesqi5WoRe5bFhsCUGkSZP5M09YxUgLQ8J1oxOI-1yIc7kEIQ4jadJzN8Fa0LaNfZbmsK07M59X-V68MbuGG4jfb4nBfF9NKk8GuKh66W6KBbZrLwzz_8D6EAOoQkfKKvipHDpQ30WT"
                  />
                </div>
                <div className="text-white text-sm font-medium">
                  <span className="font-bold text-yellow-300">+5000</span> طالب يثقون بنا
                </div>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-16 h-1.5 rounded-full bg-white opacity-100"></div>
            <div className="w-3 h-1.5 rounded-full bg-white opacity-40"></div>
            <div className="w-3 h-1.5 rounded-full bg-white opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
