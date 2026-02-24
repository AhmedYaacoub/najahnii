'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-effect shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-110 rotate-3 text-xl">
                🎓
              </div>
              <h1 className="text-2xl font-black text-text-main tracking-tight group-hover:text-electric-blue transition-colors font-display">نجّحني</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a className="text-text-sub hover:text-electric-blue font-bold text-base transition-colors py-2 relative group" href="#">
                المواد
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full" />
              </a>
              <a className="text-text-sub hover:text-electric-blue font-bold text-base transition-colors py-2 relative group" href="#">
                كيف تعمل المنصة
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full" />
              </a>
              <a className="text-text-sub hover:text-electric-blue font-bold text-base transition-colors py-2 relative group" href="#">
                تواصل معنا               <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full" />
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button
                className="hidden sm:flex text-text-main font-bold text-sm hover:text-electric-blue transition-colors"
                onClick={() => router.push('/login')}
              >
                تسجيل الدخول
              </button>
              <button className="bg-electric-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-vibrant hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95 duration-200">
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-right flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit mx-auto lg:mx-0 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-blue" />
                </span>
                <span className="text-electric-blue text-sm font-bold">التسجيلات مفتوحة لموسم 2026 🚀</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-text-main leading-[1.1] tracking-tight text-balance font-display">
                حضّر للبكالوريا <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400 relative inline-block">
                  بثقة و هدوء
                  <svg className="absolute w-full h-3 -bottom-1 right-0 text-yellow-300 opacity-80" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00025 6.99997C2.00025 6.99997 45.4268 2.30002 99.4268 2.30002C153.427 2.30002 198.001 7.49997 198.001 7.49997" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg text-text-sub leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                منصة تعليمية تمنحك الطاقة للتفوق. اكتشف متعة التعلم مع أفضل الأساتذة ومحتوى تفاعلي يضمن لك النجاح والتميز.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <button className="group flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-vibrant hover:shadow-blue-600/50 hover:-translate-y-1 duration-300 min-w-[180px]">
                  <span>ابدأ رحلتك</span>
                  <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1 text-lg">🚀</span>
                </button>
                <button className="group flex items-center justify-center gap-2 bg-white border-2 border-slate-100 hover:border-electric-blue/30 text-text-main hover:text-electric-blue px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-sm hover:shadow-md min-w-[180px]">
                  <span>تصفح المواد</span>
                  <span className="text-xl transition-transform group-hover:scale-110">📚</span>
                </button>
              </div>
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-bold text-text-sub">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 bg-green-100 rounded-full p-1 text-[1.2rem]">✅</span>
                  <span>محتوى معتمد</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 bg-yellow-100 rounded-full p-1 text-[1.2rem]">⭐</span>
                  <span>أساتذة نخبة</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 bg-purple-100 rounded-full p-1 text-[1.2rem]">⚡</span>
                  <span>تفاعل مباشر</span>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[550px] aspect-[4/5] lg:aspect-auto lg:h-full group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-electric-blue rounded-[3rem] rotate-3 opacity-15 blur-3xl transition-all duration-500 group-hover:rotate-6" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02] bg-slate-100">
                  <img alt="Happy Student Learning" className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCByi88zFkn969l3Y-Zz1XqRDJwbJ8USljzpRVz_mbl1Xd8i1G7l7xKTzgv6qo2mU5glIGxXJ4l5O5NmtPpGcRxzYltwfFKfBYqegBpMvcFcliRAQVLa0XL-dHarEH4SRjo5Hz4S1t-ev0HQkhD-BL8uHabZGuiYPJbrYcQZxCScTlBccNbkU8bcUjlfnNsn8rG7bFcmlDMWjkaRdjyUF7t3QlP3O6LrmVCFOhyBJrPRfqqTz0f4puBGyIgFkosuxCuicNBWdwQtwcQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-lg shrink-0">
                        🎯
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">معدل النجاح</p>
                        <p className="text-sm font-bold text-slate-800">طلابنا حققوا نتائج مبهرة هذا العام!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float border-2 border-yellow-100 z-20 text-2xl">
                  🏆
                </div>
                <div className="absolute top-1/3 -left-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse-slow border-2 border-blue-100 z-20 text-2xl">
                  ▶️
                </div>
                <div className="absolute bottom-20 -right-8 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-float z-20 rotate-12 text-lg">
                  ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 border-y border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-text-muted font-bold text-sm tracking-wider uppercase bg-white px-4 py-1 rounded-full shadow-sm">شركاؤنا في النجاح</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="h-8 w-8 bg-slate-800 rounded flex items-center justify-center text-white font-serif font-bold text-lg group-hover:bg-electric-blue transition-colors">P</div>
              <span className="text-xl font-bold text-slate-600 tracking-wide font-serif group-hover:text-slate-900 transition-colors">Perenco</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background-light py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-soft-hover border border-slate-100 text-center transform transition hover:-translate-y-2 duration-300 group">
              <div className="mb-4 inline-flex p-3 rounded-full bg-blue-50 text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-colors text-3xl">
                👥
              </div>
              <p className="text-4xl lg:text-5xl font-black text-slate-800 mb-2 group-hover:text-electric-blue transition-colors">+5000</p>
              <p className="text-text-sub font-bold text-lg">طالب سنويًا</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-soft-hover border border-slate-100 text-center transform transition hover:-translate-y-2 duration-300 group">
              <div className="mb-4 inline-flex p-3 rounded-full bg-yellow-50 text-yellow-500 group-hover:bg-yellow-400 group-hover:text-white transition-colors text-3xl">
                👨‍🏫
              </div>
              <p className="text-4xl lg:text-5xl font-black text-slate-800 mb-2 group-hover:text-yellow-500 transition-colors">+120</p>
              <p className="text-text-sub font-bold text-lg">أستاذ خبير</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-soft-hover border border-slate-100 text-center transform transition hover:-translate-y-2 duration-300 group">
              <div className="mb-4 inline-flex p-3 rounded-full bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors text-3xl">
                📖
              </div>
              <p className="text-4xl lg:text-5xl font-black text-slate-800 mb-2 group-hover:text-purple-500 transition-colors">+850</p>
              <p className="text-text-sub font-bold text-lg">تمرين ومسألة</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-card hover:shadow-soft-hover border border-slate-100 text-center transform transition hover:-translate-y-2 duration-300 group">
              <div className="mb-4 inline-flex p-3 rounded-full bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors text-3xl">
                🎧
              </div>
              <p className="text-4xl lg:text-5xl font-black text-slate-800 mb-2 group-hover:text-green-500 transition-colors">24/7</p>
              <p className="text-text-sub font-bold text-lg">دعم فني</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-electric-blue font-bold tracking-wider uppercase mb-2 block text-sm">سهل وبسيط</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 font-display">كيف تعمل المنصة؟</h2>
            <p className="text-text-sub text-xl max-w-2xl mx-auto font-medium leading-relaxed">رحلة النجاح تبدأ بخطوات بسيطة ومدروسة لضمان فهمك العميق للمواد.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-16 right-0 left-0 h-[3px] bg-gradient-to-l from-transparent via-blue-100 to-transparent -z-10 mx-10 border-t border-dashed border-blue-200" />
            <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-vibrant transition-all duration-300 group hover:-translate-y-2 z-10">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric-blue group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-inner text-3xl">
                📚
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 text-center font-display">1. اختر المادة</h3>
              <p className="text-text-sub text-center text-sm font-medium leading-relaxed">حدد المادة التي تريد مراجعتها من بين جميع الشعب المتوفرة.</p>
            </div>
            <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-vibrant transition-all duration-300 group hover:-translate-y-2 z-10">
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white group-hover:-rotate-6 transition-all duration-300 shadow-inner text-3xl">
                📋
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 text-center font-display">2. تابع المحاور</h3>
              <p className="text-text-sub text-center text-sm font-medium leading-relaxed">تصفح المحاور الدراسية المرتبة بدقة حسب البرنامج الوزاري.</p>
            </div>
            <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-vibrant transition-all duration-300 group hover:-translate-y-2 z-10">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-inner text-3xl">
                ▶️
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 text-center font-display">3. شاهد الدروس</h3>
              <p className="text-text-sub text-center text-sm font-medium leading-relaxed">شروحات فيديو مفصلة وعالية الجودة لكل درس مع أساتذة خبراء.</p>
            </div>
            <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-vibrant transition-all duration-300 group hover:-translate-y-2 z-10">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white group-hover:-rotate-6 transition-all duration-300 shadow-inner text-3xl">
                ✏️
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 text-center font-display">4. راجع بالتمارين</h3>
              <p className="text-text-sub text-center text-sm font-medium leading-relaxed">ثبت معلوماتك بحل تمارين ومسائل مختارة ومحلولة بعناية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-soft-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-electric-blue font-bold tracking-wider uppercase mb-2 block text-sm">لماذا نحن؟</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-6 font-display">مميزات حصرية لطلابنا</h2>
            <p className="text-text-sub text-xl max-w-2xl mx-auto font-medium">كل ما يحتاجه الطالب في مكان واحد</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-3xl shadow-sm border border-white hover:border-blue-200 hover:shadow-soft-hover transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-2xl">
                📺
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-electric-blue transition-colors font-display">دروس فيديو عالية الجودة</h3>
                <p className="text-text-sub leading-relaxed font-medium">استمتع بتجربة تعلم فريدة مع فيديوهات بدقة عالية وصوت واضح، يمكنك مشاهدتها في أي وقت.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-3xl shadow-sm border border-white hover:border-blue-200 hover:shadow-soft-hover transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-2xl">
                📄
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-electric-blue transition-colors font-display">ملخصات PDF جاهزة للطباعة</h3>
                <p className="text-text-sub leading-relaxed font-medium">احصل على ملخصات مركزة وشاملة لكل وحدة، مصممة لتسهيل الحفظ والمراجعة النهائية.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-3xl shadow-sm border border-white hover:border-blue-200 hover:shadow-soft-hover transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-2xl">
                ✍️
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-electric-blue transition-colors font-display">تمارين تفاعلية ومسائل</h3>
                <p className="text-text-sub leading-relaxed font-medium">بنك ضخم من التمارين المتدرجة الصعوبة مع حلول مفصلة لتعزيز فهمك للمادة.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-3xl shadow-sm border border-white hover:border-blue-200 hover:shadow-soft-hover transition-all duration-300 group">
              <div className="flex-shrink-0 w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-2xl">
                📹
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-electric-blue transition-colors font-display">حصص مباشرة للمراجعة</h3>
                <p className="text-text-sub leading-relaxed font-medium">حصص أسبوعية مباشرة مع الأساتذة للإجابة على أسئلتكم ومراجعة النقاط الصعبة قبل الامتحانات.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-4 font-display">تعلم من الأفضل</h2>
              <p className="text-text-sub text-lg font-medium">نخبة من الأساتذة ذوي الخبرة والكفاءة العالية يرافقونك في رحلتك.</p>
            </div>
            <button className="text-electric-blue font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group bg-blue-50 px-5 py-2 rounded-xl">
              عرض كل الأساتذة
              <span className="text-lg rtl:rotate-180 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white border border-slate-100 rounded-[2rem] p-6 text-center hover:shadow-vibrant hover:border-electric-blue/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-28 h-28 mx-auto rounded-full bg-slate-50 mb-6 overflow-hidden relative shadow-lg ring-4 ring-white group-hover:ring-blue-50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-slate-200 to-white text-slate-500 font-bold text-2xl">أ.ع</div>
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-electric-blue transition-colors font-display">الأستاذ عبد الله</h3>
              <p className="text-sm text-text-sub font-semibold mb-3 bg-blue-50 text-blue-600 w-fit mx-auto px-3 py-1 rounded-lg">رياضيات</p>
              <div className="flex justify-center gap-1 text-yellow-400 text-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-base fill-current">star</span>
                <span className="material-symbols-outlined text-base fill-current">star</span>
                <span className="material-symbols-outlined text-base fill-current">star</span>
                <span className="material-symbols-outlined text-base fill-current">star</span>
                <span className="material-symbols-outlined text-base fill-current">star</span>
              </div>
            </div>
            <div className="group bg-white border border-slate-100 rounded-[2rem] p-6 text-center hover:shadow-vibrant hover:border-electric-blue/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-28 h-28 mx-auto rounded-full bg-slate-50 mb-6 overflow-hidden relative shadow-lg ring-4 ring-white group-hover:ring-purple-50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-purple-100 to-white text-purple-500 font-bold text-2xl">أ.س</div>
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-purple-600 transition-colors font-display">الأستاذة سارة</h3>
              <p className="text-sm text-text-sub font-semibold mb-3 bg-purple-50 text-purple-600 w-fit mx-auto px-3 py-1 rounded-lg">علوم طبيعية</p>
              <div className="flex justify-center gap-1 text-yellow-400 text-sm group-hover:scale-105 transition-transform">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
            <div className="group bg-white border border-slate-100 rounded-[2rem] p-6 text-center hover:shadow-vibrant hover:border-electric-blue/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-28 h-28 mx-auto rounded-full bg-slate-50 mb-6 overflow-hidden relative shadow-lg ring-4 ring-white group-hover:ring-cyan-50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-cyan-100 to-white text-cyan-600 font-bold text-2xl">أ.م</div>
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-cyan-600 transition-colors font-display">الأستاذ محمد</h3>
              <p className="text-sm text-text-sub font-semibold mb-3 bg-cyan-50 text-cyan-600 w-fit mx-auto px-3 py-1 rounded-lg">فيزياء</p>
              <div className="flex justify-center gap-1 group-hover:scale-105 transition-transform">
                <span className="text-lg">⭐</span>
                <span className="text-lg">⭐</span>
                <span className="text-lg">⭐</span>
                <span className="text-lg">⭐</span>
                <span className="text-lg">⭐</span>
              </div>
            </div>
            <div className="group bg-white border border-slate-100 rounded-[2rem] p-6 text-center hover:shadow-vibrant hover:border-electric-blue/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-28 h-28 mx-auto rounded-full bg-slate-50 mb-6 overflow-hidden relative shadow-lg ring-4 ring-white group-hover:ring-red-50 transition-all">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-red-100 to-white text-red-500 font-bold text-2xl">أ.ك</div>
              </div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-red-500 transition-colors font-display">الأستاذ كريم</h3>
              <p className="text-sm text-text-sub font-semibold mb-3 bg-red-50 text-red-600 w-fit mx-auto px-3 py-1 rounded-lg">لغة عربية</p>
              <div className="flex justify-center gap-1 text-yellow-400 text-sm group-hover:scale-105 transition-transform">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-electric-blue to-blue-700 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-500/40 group hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:translate-x-1/4 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3 group-hover:-translate-x-1/4 transition-transform duration-1000" />
            <div className="absolute top-10 left-10 w-12 h-12 border-2 border-white/20 rounded-full animate-float" />
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-white/10 rounded-lg rotate-12 animate-float-delayed" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-sm font-display">جاهز لتحقيق النجاح؟</h2>
              <p className="text-blue-50 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">انضم الآن إلى آلاف الطلاب الذين اختاروا منصة نجّحني رفيقًا لهم في درب البكالوريا.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-electric-blue hover:bg-yellow-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  اشترك الآن مجانًا
                  <span className="rtl:rotate-180 text-lg">→</span>
                </button>
              </div>
              <p className="mt-8 text-sm text-blue-200/90 font-medium bg-blue-900/20 w-fit mx-auto px-4 py-2 rounded-full backdrop-blur-sm">لا تتطلب بطاقة ائتمان للتجربة • إلغاء في أي وقت</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center text-white shadow-md text-lg">
                  🎓
                </div>
                <span className="text-2xl font-black text-text-main font-display">نجّحني</span>
              </div>
              <p className="text-text-sub text-sm leading-relaxed mb-8 font-medium">
                منصتك الأولى للتحضير للبكالوريا. نهدف إلى تبسيط العلم وجعله متاحًا للجميع بأعلى جودة.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-text-sub hover:bg-electric-blue hover:text-white transition-all duration-300 hover:scale-110 shadow-sm text-lg" href="#">
                  🌐
                </a>
                <a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-text-sub hover:bg-electric-blue hover:text-white transition-all duration-300 hover:scale-110 shadow-sm text-lg" href="#">
                  ✉️
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-text-main mb-6 text-lg font-display">الروابط السريعة</h4>
              <ul className="space-y-4 text-sm text-text-sub font-medium">
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">الرئيسية</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">من نحن</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">الأسعار</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-text-main mb-6 text-lg font-display">المواد الدراسية</h4>
              <ul className="space-y-4 text-sm text-text-sub font-medium">
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">الرياضيات</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">الفيزياء</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">العلوم الطبيعية</a></li>
                <li><a className="hover:text-electric-blue transition-colors hover:pr-2" href="#">اللغات الأجنبية</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-text-main mb-6 text-lg font-display">معلومات الاتصال</h4>
              <ul className="space-y-4 text-sm text-text-sub font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue text-lg mt-0.5">📍</span>
                  <span>تونس العاصمة،تونس</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-electric-blue text-lg">📱</span>
                  <span className="font-mono" dir="ltr">+216 555 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-electric-blue text-lg">📧</span>
                  <span>contact@najahni.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-medium">
            <p>© 2026 منصة نجّحني. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
              <a className="hover:text-electric-blue transition-colors" href="#">سياسة الخصوصية</a>
              <a className="hover:text-electric-blue transition-colors" href="#">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
