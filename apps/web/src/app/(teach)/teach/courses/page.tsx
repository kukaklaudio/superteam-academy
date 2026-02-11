import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function TeachCoursesPage() {
  const t = useTranslations('teach');

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('myCourses')}</h1>
        <Button variant="solana">{t('createCourse')}</Button>
      </div>
      <p className="mt-4 text-muted-foreground">No courses yet. Create your first course!</p>
    </div>
  );
}
