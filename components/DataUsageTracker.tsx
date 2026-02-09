'use client'

import React, { useState, useEffect } from 'react'
import { Wifi } from 'lucide-react'

export default function DataUsageTracker() {
    const [dataUsage, setDataUsage] = useState<number>(0)
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    useEffect(() => {
        const calculateUsage = () => {
            if (typeof window === 'undefined' || !window.performance) return

            let total = 0

            // Get navigation timing (main page load)
            const navigationEntries = performance.getEntriesByType('navigation')
            if (navigationEntries.length > 0) {
                total += (navigationEntries[0] as PerformanceNavigationTiming).transferSize || 0
            }

            // Get resource timing (images, scripts, css, fetch, etc.)
            const resourceEntries = performance.getEntriesByType('resource')
            resourceEntries.forEach((entry) => {
                total += (entry as PerformanceResourceTiming).transferSize || 0
            })

            // Convert to Megabytes
            setDataUsage(total / (1024 * 1024))
        }

        // Initial calculation
        calculateUsage()

        // Set up a periodic check (every 2 seconds) to catch new resources loaded via user interaction/navigation
        const intervalId = setInterval(calculateUsage, 2000)

        // Also listen for new resources specifically if supported
        const observer = new PerformanceObserver((list) => {
            calculateUsage()
        })

        try {
            observer.observe({ entryTypes: ['resource'] })
        } catch (e) {
            // Fallback if observer fails
            console.error("PerformanceObserver not supported or failed", e)
        }

        return () => {
            clearInterval(intervalId)
            observer.disconnect()
        }
    }, [])

    return (
        <div
            className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${isExpanded ? 'scale-100' : 'scale-95'}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 dark:border-slate-700 shadow-lg rounded-2xl p-3 flex items-center gap-3 transition-all hover:shadow-xl hover:scale-105">
                <div className={`p-2 rounded-xl bg-electric-blue/10 text-electric-blue ${isExpanded ? 'animate-pulse' : ''}`}>
                    <Wifi size={20} className={isExpanded ? 'text-electric-blue' : 'text-slate-500'} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                        استهلاك الإنترنت
                    </span>
                    <span className="text-sm font-black text-slate-800 dark:text-white dir-ltr font-mono">
                        {dataUsage.toFixed(2)} MB
                    </span>
                </div>
            </div>
        </div>
    )
}
