import { Options } from '@mikro-orm/core';

const config = {
  dbName: 'test',
  type: 'postgresql',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'root',
  debug: true,
} as Options;

export default config;
