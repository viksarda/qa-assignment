import { test, expect } from '@playwright/test';

test('First Spec', async ({ page }) => {
  await page.goto('/');
});
