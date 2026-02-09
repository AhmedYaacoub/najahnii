import React, { memo } from 'react'
import Sidebar from './Sidebar'

interface ProtectedLayoutProps {
  children: React.ReactNode
  showMobileHeader?: boolean
}

/**
 * Shared layout component for all protected pages
 * Eliminates duplicate layout code across pages
 * Memoized for performance optimization
 */
const ProtectedLayout = memo(function ProtectedLayout({
  children,
  showMobileHeader = true,
}: ProtectedLayoutProps) {
  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-blue-50 dark:bg-slate-900 text-slate-900 dark:text-gray-100 transition-colors duration-200"
      dir="rtl"
    >
      <Sidebar />

      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative lg:mr-72">
        {showMobileHeader && (
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
        )}

        {children}
      </main>
    </div>
  )
})

export default ProtectedLayout
