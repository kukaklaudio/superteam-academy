import { useTranslations } from 'next-intl';

export default function TeachDashboardPage() {
  const t = useTranslations('teach');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">{t('myCourses')}</p>
          <p className="mt-1 text-2xl font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">{t('activeStudents')}</p>
          <p className="mt-1 text-2xl font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">{t('completionRate')}</p>
          <p className="mt-1 text-2xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
}
