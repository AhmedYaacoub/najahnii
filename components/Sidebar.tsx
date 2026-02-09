'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState, memo, useCallback } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'لوحة التحكم', icon: 'dashboard', path: '/dashboard' },
  { label: 'المواد الدراسية', icon: 'library_books', path: '/subjects' },
  { label: 'الجدول', icon: 'calendar_month', path: '/schedule' },
  { label: 'المصادر', icon: 'folder_open', path: '/resources' },
  { label: 'الإعدادات', icon: 'settings', path: '/settings' },
]

const NavItem = memo(function NavItem({
  item,
  isActive,
  onClick,
}: {
  item: (typeof NAV_ITEMS)[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
          ? 'bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 font-semibold'
          : 'text-slate-500 hover:bg-gray-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-blue-400 font-medium'
        }`}
    >
      <span className={`material-symbols-outlined ${isActive ? 'filled' : ''} group-hover:scale-110 transition-transform`}>
        {item.icon}
      </span>
      <span>{item.label}</span>
    </button>
  )
})

function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const navItems = NAV_ITEMS; // Declare navItems variable

  const handleLogout = useCallback(() => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    router.push('/login')
  }, [router])

  const handleNavClick = useCallback((path: string) => {
    router.push(path)
    setIsOpen(false)
  }, [router])

  const isActive = useCallback((path: string) => pathname === path, [pathname])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`w-72 bg-white dark:bg-[#1F2937] border-l border-gray-200 dark:border-gray-700 flex flex-col h-screen fixed right-0 top-0 z-40 transition-transform duration-300 will-change-transform ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          } hidden lg:flex`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-700">
          <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600/10 rounded-xl text-blue-600">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">نجحني</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto will-change-auto">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              isActive={isActive(item.path)}
              onClick={() => handleNavClick(item.path)}
            />
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
            <img
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHYC9lg8Hy8455pRBLYZ9PK8tGZvpVxlNsw-hykTuKIBTYr17-NJfb1x4JRDJHIRITtBeERM-YHuUDnQLr9VQO_nVj2sBpcVV-TZX09d5ZzrVPMEbvJxzdpojLZWqe3_uqkzYVVVoUpXo18_nS3JRs6pB8CERZDAQ_wkcRNVlQHjV6OX1kjboYkgyXzUASkSlUFKiRkXlDCCAkXpLJM2KS44FUyIYtoY72fxzuroQM0u_7pgpySUlxZjJMdJsEvEbpXPTyA1SKlDB"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">أحمد بن علي</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">شعبة العلوم</span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 dark:bg-red-500/10 rounded-lg border border-red-200 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default memo(Sidebar)
