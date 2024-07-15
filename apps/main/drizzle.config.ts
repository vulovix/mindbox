import type { Config } from 'drizzle-kit';

/** @type {import('drizzle-kit').Config} */
export default {
    out: './src/libs/database/migrations',
    schema: './src/libs/database/schema/index.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL ?? '',
    },
    verbose: true,
    strict: true,
} satisfies Config;
