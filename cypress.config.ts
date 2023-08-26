import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://localhost:5000',
    video: false,
    testIsolation: false,
    setupNodeEvents(on, config) {},
  },
});
