'use client'

import { useEffect } from "react"
import { useState } from "react"
import { useAuthProtection } from '@/hooks/useAuthProtection'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'

interface Subject {
  id: string
  name: string
  description: string
  icon: string
  progress: number
  progressColor: string
  buttonText: string
  bgColor: string
}

const SUBJECTS: Subject[] = [
  {
    id: '1',
    name: 'الرياضيات',
    description: 'الجبر، الهندسة، والتفاضل والتكامل.',
    icon: 'calculate',
    progress: 45,
    progressColor: 'bg-orange-500',
    buttonText: 'متابعة',
    bgColor: 'bg-orange-50 dark:bg-orange-500/10',
  },
  {
    id: '2',
    name: 'العلوم',
    description: 'الفيزياء، الكيمياء، والأحياء العامة.',
    icon: 'science',
    progress: 20,
    progressColor: 'bg-blue-500',
    buttonText: 'متابعة',
    bgColor: 'bg-blue-50 dark:bg-blue-500/10',
  },
  {
    id: '3',
    name: 'اللغة العربية',
    description: 'النحو، الصرف، والبلاغة والأدب.',
    icon: 'menu_book',
    progress: 75,
    progressColor: 'bg-emerald-500',
    buttonText: 'متابعة',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    id: '4',
    name: 'اللغة الإنجليزية',
    description: 'Reading, Writing, and Grammar basics.',
    icon: 'language',
    progress: 10,
    progressColor: 'bg-blue-500',
    buttonText: 'متابعة',
    bgColor: 'bg-purple-50 dark:bg-purple-500/10',
  },
  {
    id: '5',
    name: 'التاريخ',
    description: 'تاريخ الحضارات والعصور القديمة والحديثة.',
    icon: 'history_edu',
    progress: 0,
    progressColor: 'bg-slate-300',
    buttonText: 'ابدأ الآن',
    bgColor: 'bg-amber-50 dark:bg-amber-500/10',
  },
  {
    id: '6',
    name: 'الجغرافيا',
    description: 'دراسة التضاريس، المناخ، والبيئة.',
    icon: 'public',
    progress: 30,
    progressColor: 'bg-blue-500',
    buttonText: 'متابعة',
    bgColor: 'bg-teal-50 dark:bg-teal-500/10',
  },
]

const SubjectCard = memo(function SubjectCard({ subject, onNavigate }: { subject: Subject; onNavigate: (id: string) => void }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl ${subject.bgColor} text-orange-500 dark:text-orange-400 flex items-center justify-center`}>
          <span className="material-symbols-outlined !text-2xl">{subject.icon}</span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined text-xl">more_vert</span>
        </button>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{subject.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
        {subject.description}
      </p>
      <div className="mt-auto">
        <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
          <span>التقدم</span>
          <span className="text-blue-600 dark:text-blue-400">{subject.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-6">
          <div className={`${subject.progressColor} h-1.5 rounded-full transition-all`} style={{ width: `${subject.progress}%` }} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2 space-x-reverse">
            {subject.progress > 0 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-slate-500">
                +3
              </div>
            )}
          </div>
          <button
            onClick={() => onNavigate(subject.id)}
            className="px-5 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
          >
            {subject.buttonText}
          </button>
        </div>
      </div>
    </div>
  )
})

export default function SubjectsPage() {
  const router = useRouter()
  const isLoggedIn = useAuthProtection()
  const [subjects, setSubjects] = useState(SUBJECTS); // Declare the subjects variable

  const handleNavigate = useCallback((id: string) => {
    router.push(`/lesson/${id}`)
  }, [router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100 dark:bg-[#111827] text-slate-800 dark:text-white" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen lg:mr-72 transition-all duration-300">
        {/* Header */}
        <header className="h-20 bg-white/50 dark:bg-[#111827]/50 backdrop-blur-sm sticky top-0 z-30 px-6 sm:px-10 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              المواد الدراسية
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              اختر المادة التي تريد متابعتها
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20 text-sm font-medium" onClick={() => router.push('/dashboard')}>
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>مهمة جديدة</span>
            </button>
            <button className="relative w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-slate-500">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </button>
            <button className="lg:hidden w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SUBJECTS.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} onNavigate={handleNavigate} />
            ))}
          </div>
          <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 pb-6">
            <p className="text-center text-xs text-slate-400 dark:text-slate-600">
              © 2024 منصة نجحني التعليمية. جميع الحقوق محفوظة.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
