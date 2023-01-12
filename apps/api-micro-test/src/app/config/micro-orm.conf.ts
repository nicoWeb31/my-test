import { Options } from '@mikro-orm/core';
// https://abdlrahmansaber.medium.com/nestjs-setting-up-mikroorm-postgresql-c3e26b9c069e

const config = {
  dbName: 'test',
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  debug: true,
} as Options;

export default config;
