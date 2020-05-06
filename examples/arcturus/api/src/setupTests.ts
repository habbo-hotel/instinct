import * as Env from 'dotenv';

// Put .test.env into process.env
const testEnvPath = `${process.cwd()}/.test.env`;
Env.config({
  path: testEnvPath,
});
