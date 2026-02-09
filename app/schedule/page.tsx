'use client'

import { useAuthProtection } from '@/hooks/useAuthProtection'
import Sidebar from '@/components/Sidebar'
import { memo, useState, useMemo } from 'react'

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'text-purple-500' },
  green: { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-600' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', icon: 'text-teal-600' },
}

const ScheduleMobileHeader = memo(function ScheduleMobileHeader() {
  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-white/70 dark:bg-slate-800/70 border-b border-slate-100/50 dark:border-white/5 sticky top-0 z-30 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
          ن
        </div>
        <span className="font-bold text-lg text-slate-900 dark:text-white">نجاحي</span>
      </div>
      <button className="p-2 text-slate-500 bg-transparent rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  )
})

const ClassCard = memo(function ClassCard({ classItem, colorMap }: any) {
  const colors = colorMap[classItem.subjectColor as keyof typeof colorMap]
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 flex flex-col h-full group hover:shadow-soft-hover shadow-soft border border-slate-100 dark:border-slate-700 transition-all hover:-translate-y-0.5">
      <div className="flex justify-between items-start mb-5">
        <div
          className={`w-10 h-10 rounded-xl ${colors.bg} dark:bg-opacity-20 ${colors.icon} flex items-center justify-center border ${colors.bg.replace('bg-', 'border-').replace('-50', '-100')}`}
        >
          <span className="material-symbols-outlined text-[20px]">{classItem.icon}</span>
        </div>
        <span className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-100 dark:border-slate-600">
          {classItem.day}
        </span>
      </div>
      <div className="mb-6 flex-1">
        <span className={`${colors.text} text-xs font-bold uppercase tracking-wider mb-2 block`}>
          {classItem.subject}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {classItem.title}
        </h3>
        <div className="flex items-center gap-2 mt-3 text-slate-500 dark:text-slate-400">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          <span className="text-sm font-medium">{classItem.time}</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-700 pt-4 mt-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 bg-cover bg-center"></div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            {classItem.teacher}
          </span>
        </div>
      </div>
    </div>
  )
})

function SchedulePage() {
  const isLoggedIn = useAuthProtection()

  const [activeDay, setActiveDay] = useState('');
  const [activeFilter, setActiveFilter] = useState('الكل');

  const DAYS = [
    { date: '1', name: 'السبت' },
    { date: '2', name: 'الأحد' },
    { date: '3', name: 'الإثنين' },
    { date: '4', name: 'الثلاثاء' },
    { date: '5', name: 'الأربعاء' },
    { date: '6', name: 'الخميس' },
    { date: '7', name: 'الجمعة' },
  ];

  const CLASSES = [
    { id: 1, subject: 'الرياضيات', title: 'الجبر المتقدم والدوال', time: '18:00 - 19:30', day: 'السبت', subjectColor: 'orange', icon: 'calculate', teacher: 'أ. أحمد علي' },
    // Add more classes here
  ];

  const filteredClasses = useMemo(() => {
    if (activeFilter === 'الكل') {
      return CLASSES;
    }
    return CLASSES.filter((classItem) => classItem.subject === activeFilter);
  }, [activeFilter]);

  const colorMap = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'text-purple-500' },
    green: { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-600' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', icon: 'text-teal-600' },
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FDFDFD] dark:bg-slate-900" dir="rtl">
      <Sidebar />

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative lg:mr-72">
        <ScheduleMobileHeader />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 space-y-10">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-blue-500 font-semibold text-xs mb-2 uppercase tracking-wide bg-blue-50 dark:bg-blue-900/20 w-fit px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                جدول البث المباشر
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-normal">
                حصص هذا الأسبوع
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-normal text-lg mt-2 max-w-2xl leading-relaxed">
                نظرة عامة هادئة على جدولك الدراسي. ركّز على ما هو مهم الآن.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-11 h-11 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 hover:text-blue-500 transition-colors relative">
                <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-400 rounded-full ring-2 ring-white dark:ring-slate-800"></span>
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium text-sm rounded-xl transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>تصدير للتقويم</span>
              </button>
            </div>
          </header>

          {/* Calendar Section */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-soft border border-slate-100/60 dark:border-slate-700 overflow-hidden">
            <div className="flex justify-between items-center mb-4 px-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500 text-[20px]">date_range</span>
                مارس 2024
              </h3>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
                <button className="p-1.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-3">
              {DAYS.map((day) => (
                <button
                  key={day.date}
                  onClick={() => setActiveDay(day.date)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all border ${
                    activeDay === day.date
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 transform scale-[1.02] shadow-sm'
                      : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border-transparent hover:border-slate-100 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs font-medium">{day.name}</span>
                  <span className={`text-base font-semibold ${activeDay === day.date ? 'text-lg' : ''}`}>
                    {day.date}
                  </span>
                  {activeDay === day.date && (
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Live Session */}
          <section className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-blue-100/80 dark:border-blue-900/30 shadow-soft p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-transparent dark:from-blue-900/20 opacity-60 pointer-events-none"></div>
            <div className="relative flex flex-col md:flex-row items-center p-8 gap-8 md:gap-12">
              <div className="flex flex-col items-center md:items-start shrink-0 min-w-[140px]">
                <div className="flex items-center gap-2 mb-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-full border border-red-100 dark:border-red-800">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <span className="font-bold text-xs tracking-wider">مباشر الآن</span>
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white leading-none mb-1 font-mono tracking-tight">
                  18:00
                </div>
                <div className="text-sm font-medium text-slate-400 dark:text-slate-500">ينتهي 19:30</div>
              </div>
              <div className="flex-1 text-center md:text-right border-t md:border-t-0 md:border-r border-slate-100 dark:border-slate-700 pt-6 md:pt-0 md:pr-10">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calculate</span>
                    الرياضيات
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-100 dark:border-slate-600">
                    المستوى المتقدم
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  الجبر المتقدم والدوال
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 bg-cover bg-center ring-2 ring-white dark:ring-slate-800 shadow-sm"></div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">أ. أحمد علي</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">مدرس أول رياضيات</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
                <button className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 group">
                  <span className="material-symbols-outlined group-hover:animate-pulse">videocam</span>
                  انضم للحصة
                </button>
                <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3 font-medium">متبقي 45 دقيقة</p>
              </div>
            </div>
          </section>

          {/* Classes Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">upcoming</span>
                الحصص القادمة
              </h2>
              <div className="hidden md:flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                {['الكل', 'الرياضيات', 'العلوم', 'اللغات'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-md font-medium text-sm transition-all ${
                      activeFilter === filter
                        ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} colorMap={COLOR_MAP} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SchedulePage
