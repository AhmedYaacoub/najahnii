'use client'

import { useAuthProtection } from '@/hooks/useAuthProtection'
import Sidebar from '@/components/Sidebar'
import { memo, useMemo } from 'react'

const DashboardHeader = memo(function DashboardHeader() {
  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-white/70 dark:bg-slate-800/70 border-b border-gray-200/50 dark:border-white/5 sticky top-0 z-30 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="size-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold shadow-lg">
          ن
        </div>
        <span className="font-bold text-lg text-blue-600">نجحي</span>
      </div>
      <button className="p-2 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/10 rounded-xl hover:bg-white/60 dark:hover:bg-white/20 transition-colors">
        <span className="text-xl">☰</span>
      </button>
    </div>
  )
})

export default function DashboardPage() {
  const isLoggedIn = useAuthProtection()

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-blue-50 dark:bg-slate-900 text-slate-900 dark:text-gray-100 transition-colors duration-200" dir="rtl">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative lg:mr-72">
        <DashboardHeader />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
                صباح الخير، <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">أحمد</span> 👋
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">
                الثلاثاء، 24 أكتوبر • <span className="text-blue-600 font-semibold">لنجعل اليوم مليئاً بالإنجاز.</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-12 h-12 bg-white/70 dark:bg-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm hover:shadow-md group relative border border-white/30 dark:border-white/5">
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                <span className="text-xl">🔔</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-2xl hover:shadow-lg hover:scale-105 transition-all shadow-md border border-white/20">
                <span>➕</span>
                <span>مهمة جديدة</span>
              </button>
            </div>
          </header>

          {/* Tip Card */}
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-l from-blue-600 via-blue-400 to-purple-600 shadow-lg">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
              <div className="flex items-start sm:items-center gap-5">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/40 dark:to-orange-900/40 p-3.5 rounded-2xl shadow-inner text-orange-500">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 text-sm uppercase tracking-wider mb-1">
                    نصيحة اليوم ✨
                  </h3>
                  <p className="text-slate-900 dark:text-gray-200 font-bold text-lg leading-snug">
                    {'"خصّص 30 دقيقة اليوم لمادة واحدة لزيادة التركيز"'}
                  </p>
                </div>
              </div>
              <button className="text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors whitespace-nowrap self-end sm:self-center bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-xl">
                تجاهل
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl -z-10 rounded-full"></div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/70 dark:bg-slate-800/70 rounded-3xl p-7 shadow-md dark:shadow-xl h-full flex flex-col relative overflow-hidden border border-white/50 dark:border-white/5 backdrop-blur-sm">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
                <h2 className="text-xl font-extrabold mb-8 flex items-center gap-3 relative z-10 text-slate-900 dark:text-white">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                    <span className="text-lg">📊</span>
                  </div>
                  تقدم الدراسة
                </h2>

                <div className="space-y-7 flex-1 relative z-10">
                  {/* Math Progress */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
                        <span className="font-bold text-sm text-gray-700 dark:text-gray-200">الرياضيات</span>
                      </div>
                      <span className="font-black text-sm text-blue-600 dark:text-blue-400">75%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-3 shadow-inner overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full relative shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{width: '75%'}}>
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Physics Progress */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                        <span className="font-bold text-sm text-gray-700 dark:text-gray-200">الفيزياء</span>
                      </div>
                      <span className="font-black text-sm text-purple-600 dark:text-purple-400">40%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-3 shadow-inner overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-400 h-3 rounded-full relative shadow-[0_0_10px_rgba(232,121,249,0.5)] transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(232,121,249,0.8)]" style={{width: '40%'}}></div>
                    </div>
                  </div>

                  {/* History Progress */}
                  <div className="group">
                    <div className="flex justify-between items-end mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
                        <span className="font-bold text-sm text-gray-700 dark:text-gray-200">التاريخ</span>
                      </div>
                      <span className="font-black text-sm text-orange-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-3 shadow-inner overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-3 rounded-full relative shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.8)]" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 grid grid-cols-2 gap-4 relative z-10">
                  <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors cursor-default">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-extrabold mb-1">الوقت الكلي</p>
                    <p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                      4س 20د
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors cursor-default">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-extrabold mb-1">المهام المنجزة</p>
                    <p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Course Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 dark:bg-slate-800/70 rounded-3xl overflow-hidden shadow-md dark:shadow-xl h-full flex flex-col md:flex-row group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-600/30 relative border border-white/50 dark:border-white/5 backdrop-blur-sm">
                <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 md:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-transparent to-transparent z-10 hidden md:block dark:from-slate-800/90 dark:via-slate-900/40"></div>
                  <img
                    alt="Study setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-110 contrast-110"
                    loading="lazy"
                    decoding="async"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWD6mXgrrrRaZxeXZulQ4o_xNKx4Lx9Ic2t2EoUILhbuwzAmnoDI01_goe_RFPAxg0ynvtiPuD92IcUnMUda6Mxbx9UvWGAXWHcji789VNAfGGhKZtdbIaRfvPS-J4LEG04QhFrNSVHwpF9Sz_Uc3aocdoqEUc7yr7zadGw8czrXxCRt37OaSBW8wBj9lXzi-6v3KbuOs_1n98mr_mJ0f4Mwhyh_m3hY_c4ztKQKsPOlYxcvkEQrLCd5Ggjyx-7hRJPt6PTVBpKSQy"
                  />
                </div>
                <div className="md:w-7/12 p-8 flex flex-col justify-center relative z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 text-[11px] font-black tracking-wide px-3 py-1 rounded-full hidden md:inline-block shadow-sm">
                      متابعة التعلم
                    </span>
                    <span className="text-gray-400 text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      آخر نشاط: منذ 20 دقيقة
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
                    الفلسفة <br />
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-2xl">الأخلاق والقيم</span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 text-base leading-relaxed max-w-md">
                    الفصل الثالث: مفهوم الواجب. <br /> واصل من حيث توقفت لتحقيق أهدافك اليوم.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                      <span>التقدم</span>
                      <span className="text-blue-600 dark:text-blue-400">65%</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 mb-8 shadow-inner p-[1px]">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full relative shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                        style={{width: '65%'}}
                      >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-600 transform group-hover:scale-125 transition-transform"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">▶️</span>
                        متابعة
                      </button>
                      <button className="flex-1 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 text-slate-900 dark:text-white px-4 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-105">
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Subjects Table */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">📚</span>
                المواد النشطة
              </h2>
              <a className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-1 bg-white/50 dark:bg-white/5 px-3 py-1.5 rounded-lg" href="#">
                عرض الكل
                <span className="text-sm rotate-180">→</span>
              </a>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 rounded-3xl overflow-hidden shadow-md dark:shadow-xl border border-white/50 dark:border-white/5 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 dark:bg-white/5 text-xs text-gray-500 uppercase tracking-wider font-bold">
                      <th className="px-8 py-5">المادة</th>
                      <th className="px-8 py-5">الموضوع الحالي</th>
                      <th className="px-8 py-5">الحالة</th>
                      <th className="px-8 py-5">تاريخ الاستحقاق</th>
                      <th className="px-8 py-5 text-left">إجراء</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100 dark:divide-white/5">
                    <tr className="group hover:bg-blue-50/50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 shadow-sm">
                            <span className="text-lg">🔢</span>
                          </div>
                          <span className="font-bold text-base text-slate-900 dark:text-white">الرياضيات</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 font-medium text-gray-600 dark:text-gray-300">الجبر المتقدم والدوال</td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-100/80 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                          قيد التنفيذ
                        </span>
                      </td>
                      <td className="px-8 py-5 font-medium text-gray-500 dark:text-gray-400">15 مارس</td>
                      <td className="px-8 py-5 text-left">
                        <button className="inline-flex items-center gap-1 px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-semibold text-sm">
                          <span>→</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="group hover:bg-blue-50/50 dark:hover:bg-white/5 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 text-purple-600 dark:text-purple-400 shadow-sm">
                            <span className="text-lg">⚛️</span>
                          </div>
                          <span className="font-bold text-base text-slate-900 dark:text-white">الفيزياء</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 font-medium text-gray-600 dark:text-gray-300">الحركة والقوى</td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          مكتمل
                        </span>
                      </td>
                      <td className="px-8 py-5 font-medium text-gray-500 dark:text-gray-400">10 مارس</td>
                      <td className="px-8 py-5 text-left">
                        <button className="inline-flex items-center gap-1 px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-semibold text-sm">
                          <span>→</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
