import { useTranslations } from 'next-intl';

export default function AdminCoursesPage() {
  const t = useTranslations('admin');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">{t('courses')}</h1>
      <p className="mt-2 text-muted-foreground">Manage all platform courses.</p>
    </div>
  );
}
