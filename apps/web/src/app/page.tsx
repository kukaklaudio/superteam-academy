import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, Shield, Users } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');

  const features = [
    { icon: BookOpen, title: t('features.interactive'), desc: t('features.interactiveDesc') },
    { icon: Trophy, title: t('features.gamified'), desc: t('features.gamifiedDesc') },
    { icon: Shield, title: t('features.credentials'), desc: t('features.credentialsDesc') },
    { icon: Users, title: t('features.community'), desc: t('features.communityDesc') },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container flex flex-col items-center justify-center gap-6 pb-16 pt-24 text-center md:pt-32">
        <h1 className="max-w-3xl bg-gradient-to-r from-solana-purple via-foreground to-solana-green bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="flex gap-4">
          <Link href="/courses">
            <Button variant="solana" size="lg">{t('hero.cta')}</Button>
          </Link>
          <Link href="/auth/signin">
            <Button variant="outline" size="lg">{t('hero.ctaSecondary')}</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container pb-24">
        <h2 className="mb-12 text-center text-3xl font-bold">{t('features.title')}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center transition-colors hover:border-primary/50"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
