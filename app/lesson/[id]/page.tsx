import LessonPageClient from './LessonClient'

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

export default function LessonPage() {
  return <LessonPageClient />
}
