'use client';

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * Custom hook to protect pages with authentication
 * Centralized auth logic to avoid duplication
 */
export function useAuthProtection() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn')
    if (!loggedIn) {
      router.push('/login')
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  return isLoggedIn
}
