import { useTranslations } from 'next-intl';

export default function CoursesPage() {
  const t = useTranslations('courses');

  return (
    <div className="container py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </div>

      {/* Filters */}
      <div className="mt-6 flex gap-2">
        {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((filter) => (
          <button
            key={filter}
            className="rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            {t(`filters.${filter}`)}
          </button>
        ))}
      </div>

      {/* Empty state */}
      <div className="mt-12 text-center text-muted-foreground">
        {t('empty')}
      </div>
    </div>
  );
}
