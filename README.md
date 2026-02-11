# 🎓 Superteam Academy

> The learning platform by Superteam Brazil for the Solana ecosystem. Interactive courses, code challenges, and on-chain credentials.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **UI:** Tailwind CSS + shadcn/ui + Radix UI
- **CMS:** Sanity
- **Auth:** NextAuth.js v5 (Solana Wallet + Google + GitHub)
- **Database:** Supabase (PostgreSQL + RLS)
- **i18n:** next-intl (PT-BR, EN, ES)
- **Package Manager:** pnpm (monorepo)

## Project Structure

```
superteam-academy/
├── apps/
│   ├── web/          # Next.js application
│   │   ├── src/
│   │   │   ├── app/          # App Router pages
│   │   │   │   ├── (public)/   # Public routes (courses, leaderboard)
│   │   │   │   ├── (auth)/     # Authenticated routes (dashboard, signin)
│   │   │   │   ├── (admin)/    # Admin-only routes
│   │   │   │   └── (teach)/    # Professor routes
│   │   │   ├── components/   # React components
│   │   │   ├── lib/          # Utilities, auth config
│   │   │   ├── services/     # Service interfaces
│   │   │   ├── types/        # TypeScript types
│   │   │   └── i18n/         # Internationalization config
│   │   ├── messages/         # i18n JSON files (pt-BR, en, es)
│   │   └── supabase/         # Database migrations
│   └── cms/          # Sanity CMS studio
│       └── schemas/  # Content schemas
└── packages/         # Shared packages
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repo
git clone https://github.com/kukaklaudio/superteam-academy.git
cd superteam-academy

# Install dependencies
pnpm install

# Copy env file
cp apps/web/.env.example apps/web/.env.local
# Fill in your environment variables
```

### Development

```bash
# Start the web app
pnpm dev

# Build for production
pnpm build
```

### Environment Variables

See `apps/web/.env.example` for all required variables:
- `AUTH_SECRET` — NextAuth.js secret
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` — GitHub OAuth
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase
- `NEXT_PUBLIC_SOLANA_RPC_URL` — Solana RPC endpoint

## Supabase Setup

1. Install [Supabase CLI](https://supabase.com/docs/guides/cli)
2. Run `supabase init` in `apps/web/`
3. Run `supabase start` for local development
4. Apply migrations: `supabase db reset`

The schema includes:
- Users with role-based access (admin/professor/student)
- Courses, modules, lessons (content/challenge/quiz/video)
- Enrollments, progress tracking, streaks
- Achievements, comments, notifications
- Full Row Level Security (RLS) policies

## Role-Based Access Control

| Role | Access |
|------|--------|
| **Admin** | Full platform access, user management, course approval |
| **Professor** | Create/manage own courses, view student analytics |
| **Student** | Browse courses, enroll, complete lessons, earn XP |

## Features

- 🌙 Dark mode primary, light mode secondary
- 🌐 Multilingual (PT-BR, EN, ES)
- 🔐 Solana wallet authentication (Phantom, Backpack, Solflare)
- 🎮 Gamification (XP, streaks, achievements, leaderboard)
- 📜 On-chain credentials (cNFT on Solana Devnet)
- 📝 Code challenges with Monaco Editor
- 💬 Lesson discussions
- 📊 Analytics dashboards (admin + professor)

## License

See [LICENSE](./LICENSE).

---

Built with 💜 by [Superteam Brazil](https://twitter.com/SuperteamBR)
