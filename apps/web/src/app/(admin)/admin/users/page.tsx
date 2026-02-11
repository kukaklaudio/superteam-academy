import { useTranslations } from 'next-intl';

export default function AdminUsersPage() {
  const t = useTranslations('admin');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">{t('users')}</h1>
      <p className="mt-2 text-muted-foreground">Manage platform users and roles.</p>
    </div>
  );
}
