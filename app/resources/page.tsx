'use client'

import { useAuthProtection } from '@/hooks/useAuthProtection'
import Sidebar from '@/components/Sidebar'
import { memo } from 'react'

const ResourcesEmptyState = memo(function ResourcesEmptyState() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="material-symbols-outlined text-6xl text-blue-600 mb-4 mx-auto">
          folder_open
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">المصادر</h1>
        <p className="text-gray-500 dark:text-gray-400">مصادرك الدراسية ستعرض هنا قريباً</p>
      </div>
    </div>
  )
})

export default function ResourcesPage() {
  const isLoggedIn = useAuthProtection()

  if (!isLoggedIn) {
    return null
  }

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-blue-50 dark:bg-slate-900 text-slate-900 dark:text-gray-100 transition-colors duration-200"
      dir="rtl"
    >
      <Sidebar />

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative lg:mr-72">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ResourcesEmptyState />
        </div>
      </main>
    </div>
  )
}
