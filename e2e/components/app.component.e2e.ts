import { test, expect } from '@playwright/test';
test('test', async ({ page, baseURL }) => {
  const welcomeMessage = page.locator('text=angular12-training app is running!');

  await expect(welcomeMessage).toBeTruthy();
});

test('test2', async ({ page, baseURL }) => {
  await page.goto('/');
  const tutorialMessage = page.locator('text=Here are some links to help you get started');

  await expect(tutorialMessage).toBeTruthy();
});

