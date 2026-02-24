'use client'

import { useRouter, useParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

interface Lesson {
    id: string
    title: string
    subject: string
    description: string
    duration: string
    unit: string
}

const lessons: Record<string, Lesson> = {
    '1': {
        id: '1',
        title: 'الدرس 1: مقدمة في العلوم الطبيعية',
        subject: 'العلوم الطبيعية',
        description:
            'في هذا الدرس الأول، سنستعرض المفاهيم الأساسية لعلم الأحياء والطبيعة، ونفهم دورة الحياة وكيفية تفاعل الكائنات الحية مع بيئتها. هذا الدرس يمثل الأساس للوحدة الأولى وهو مدخل ضروري لفهم الوحدات اللاحقة.',
        duration: '12:30',
        unit: 'الوحدة الأولى: أساسيات الحياة',
    },
    '2': {
        id: '2',
        title: 'الدرس 2: الخلية ووظائفها',
        subject: 'العلوم الطبيعية',
        description:
            'دراسة تفصيلية لتركيب الخلية ووظائفها المختلفة، وأنواع الخلايا وأهميتها في الكائنات الحية. سنتعلم عن الأنواية والعضيات والعمليات الحيوية الأساسية.',
        duration: '15:45',
        unit: 'الوحدة الأولى: أساسيات الحياة',
    },
}

const playlistLessons = [
    {
        number: 1,
        title: 'مقدمة في العلوم الطبيعية',
        duration: '12:30',
        isActive: true,
        isLocked: false,
    },
    {
        number: 2,
        title: 'الخلية ووظائفها',
        duration: '15:45',
        isActive: false,
        isLocked: false,
    },
    {
        number: 3,
        title: 'عملية التمثيل الضوئي',
        duration: '20:10',
        isActive: false,
        isLocked: true,
    },
    {
        number: 4,
        title: 'دورة حياة الكائنات',
        duration: '18:30',
        isActive: false,
        isLocked: false,
    },
]

const pdfs = [
    {
        title: 'ملخص الدرس',
        size: '1.2 ميجابايت • PDF',
        isHighlighted: true,
    },
    {
        title: 'تمارين تطبيقية',
        size: '850 كيلوبايت • PDF',
        isHighlighted: false,
    },
    {
        title: 'ورقة مراجعة',
        size: '2.4 ميجابايت • PDF',
        isHighlighted: false,
    },
]

export default function LessonPageClient() {
    const params = useParams()
    const router = useRouter()
    const lesson = lessons[params.id as string] || lessons['1']

    return (
        <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-900" dir="rtl">
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen pr-0 lg:pr-72 transition-all duration-300 bg-slate-50 dark:bg-slate-900">
                {/* Header */}
                <header className="h-20 bg-white/60 dark:bg-slate-800/80 backdrop-blur-lg sticky top-0 z-30 px-6 sm:px-10 flex items-center justify-between border-b border-white/40 dark:border-slate-700 shadow-sm">
                    <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                        <button
                            onClick={() => router.push('/subjects')}
                            className="hover:text-blue-600 transition-colors hover:underline underline-offset-4 decoration-2 decoration-blue-600/30"
                        >
                            المواد
                        </button>
                        <span className="mx-3 text-slate-300 dark:text-slate-600 font-light text-lg">/</span>
                        <span className="text-slate-900 dark:text-white font-bold bg-white/50 dark:bg-white/5 px-3 py-1 rounded-lg border border-slate-200/50 dark:border-white/10">
                            {lesson.subject}
                        </span>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="relative w-10 h-10 rounded-full bg-white/80 dark:bg-slate-700 border border-white dark:border-slate-600 flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 transition-all shadow-sm hover:shadow text-slate-500">
                            <span className="material-symbols-outlined text-[22px]">notifications</span>
                            <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"></span>
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                    {/* Main Content */}
                    <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                        <div className="max-w-5xl mx-auto space-y-8">
                            {/* Video Player */}
                            <div className="relative bg-black rounded-3xl overflow-hidden aspect-video shadow-lg group ring-1 ring-white/10">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-500 cursor-pointer backdrop-blur-[1px] group-hover:backdrop-blur-0">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-2 shadow-2xl border border-white/30 hover:scale-110 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group/play">
                                        <span className="material-symbols-outlined text-5xl text-white group-hover/play:text-white drop-shadow-md">
                                            play_arrow
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <div className="w-full h-1.5 bg-white/20 rounded-full mb-6 cursor-pointer relative overflow-hidden backdrop-blur-sm">
                                        <div
                                            className="absolute top-0 right-0 h-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.8)] rounded-full"
                                            style={{ width: '35%' }}
                                        ></div>
                                    </div>
                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center gap-6">
                                            <button className="hover:text-blue-600 transition-colors">
                                                <span className="material-symbols-outlined text-3xl">play_arrow</span>
                                            </button>
                                            <button className="hover:text-blue-600 transition-colors">
                                                <span className="material-symbols-outlined text-2xl">volume_up</span>
                                            </button>
                                            <span className="text-sm font-medium font-mono opacity-90 tracking-wider">
                                                04:20 / {lesson.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="hover:text-blue-600 transition-colors">
                                                <span className="material-symbols-outlined">settings</span>
                                            </button>
                                            <button className="hover:text-blue-600 transition-colors">
                                                <span className="material-symbols-outlined">fullscreen</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lesson Info */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                                        {lesson.title}
                                    </h2>
                                    <div className="flex items-center gap-3 self-start md:self-auto">
                                        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 group">
                                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                                                thumb_up
                                            </span>
                                        </button>
                                        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 shadow-sm hover:shadow-md hover:bg-red-50 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-red-500 transition-all duration-300 group">
                                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                                                thumb_down
                                            </span>
                                        </button>
                                        <button className="h-12 px-5 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-all duration-300 gap-2 font-medium">
                                            <span className="material-symbols-outlined text-[20px]">share</span>
                                            <span>مشاركة</span>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-8 text-base md:text-lg max-w-4xl bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-white/50 dark:border-white/5">
                                    {lesson.description}
                                </p>
                            </div>

                            <div className="w-full h-px bg-gradient-to-l from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

                            {/* PDF Files Section */}
                            <section className="pb-10">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined text-[20px]">description</span>
                                    </div>
                                    الملفات المرتبطة (PDF)
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    {pdfs.map((pdf, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full gap-4"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 shadow-sm border border-red-100 dark:border-red-900/30">
                                                    <span className="material-symbols-outlined text-[26px]">
                                                        picture_as_pdf
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-800 dark:text-white text-base">
                                                        {pdf.title}
                                                    </span>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                        {pdf.size}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                className={`w-full font-medium text-sm flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${pdf.isHighlighted
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30'
                                                    : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10'
                                                    }`}
                                            >
                                                <span className="material-symbols-outlined text-[18px]">download</span>
                                                تحميل الملف
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Right Sidebar - Playlist */}
                    <aside className="w-full md:w-80 lg:w-96 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-r-0 md:border-r border-white/50 dark:border-slate-700 flex flex-col h-auto md:h-full z-20 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <div className="p-5 border-b border-gray-100 dark:border-slate-700/50 flex items-center justify-between sticky top-0 z-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
                            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 text-lg">
                                <span className="material-symbols-outlined text-blue-600">playlist_play</span>
                                محتوى الدورة
                            </h3>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800">
                                {playlistLessons.length} دروس
                            </span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-8">
                            <div className="relative">
                                <div className="absolute right-[27px] top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 -z-10"></div>
                                <div className="mb-4 pr-1">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                                        {lesson.unit}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    {playlistLessons.map((l, idx) => (
                                        <div key={idx} className="flex gap-4 relative group">
                                            <div className="mt-2 relative z-10">
                                                {l.isLocked ? (
                                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-slate-300 text-[14px]">
                                                            lock
                                                        </span>
                                                    </div>
                                                ) : l.isActive ? (
                                                    <div className="w-6 h-6 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/40 flex items-center justify-center shadow-md">
                                                        <span className="material-symbols-outlined text-white text-[14px]">
                                                            play_arrow
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center">
                                                        <span className="text-[10px] font-bold text-slate-400">
                                                            {l.number}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={`flex-1 p-3.5 rounded-2xl cursor-pointer transition-all ${l.isActive
                                                    ? 'bg-white dark:bg-white/5 border border-blue-600/20 shadow-lg shadow-blue-600/10'
                                                    : 'hover:bg-white/60 dark:hover:bg-white/5 border border-transparent hover:border-white dark:hover:border-white/10'
                                                    } ${l.isLocked ? 'opacity-70 hover:opacity-100' : ''}`}
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4
                                                        className={`text-sm font-${l.isActive ? 'bold' : 'medium'
                                                            } ${l.isActive
                                                                ? 'text-blue-600'
                                                                : 'text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors'
                                                            }`}
                                                    >
                                                        {l.title}
                                                    </h4>
                                                    {l.isLocked && (
                                                        <span className="material-symbols-outlined text-slate-300 text-[16px]">
                                                            lock
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <span className="material-symbols-outlined text-[14px]">
                                                        schedule
                                                    </span>
                                                    <span>{l.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>

            <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}
            </style>
        </div>
    )
}
