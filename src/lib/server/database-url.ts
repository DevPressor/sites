import 'dotenv/config';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT
} = process.env;

/**
 * Builds a PostgreSQL connection URL from environment variables
 * Properly encodes special characters in the password
 */
export function buildDatabaseUrl(): string {
  if (!POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_DB || !POSTGRES_PORT) {
    throw new Error('Missing required database environment variables');
  }

  const encodedPassword = encodeURIComponent(POSTGRES_PASSWORD);
  return `postgres://${POSTGRES_USER}:${encodedPassword}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}`;
}

export const DATABASE_URL = buildDatabaseUrl();
