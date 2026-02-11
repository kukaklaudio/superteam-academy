import { useTranslations } from 'next-intl';

export default function LeaderboardPage() {
  const t = useTranslations('leaderboard');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>

      <div className="mt-6 flex gap-2">
        {(['weekly', 'monthly', 'allTime'] as const).map((timeframe) => (
          <button
            key={timeframe}
            className="rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            {t(timeframe)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="rounded-xl border">
          <div className="grid grid-cols-3 border-b px-6 py-3 text-sm font-medium text-muted-foreground">
            <span>{t('rank')}</span>
            <span>{t('player')}</span>
            <span className="text-right">{t('xp')}</span>
          </div>
          <div className="p-6 text-center text-muted-foreground">
            No data yet.
          </div>
        </div>
      </div>
    </div>
  );
}
