import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    trace: 'on-first-retry',
    browserName: 'chromium',
    launchOptions: {
      headless: false,
      slowMo: 10000,
      devtools: true,
    },
  },
  webServer: {
    command: 'npx ng serve',
    port: 4200,
    timeout: 120 * 1000,
  },
  testMatch: /.*e2e.ts/,
};
export default config;
