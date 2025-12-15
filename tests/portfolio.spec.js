import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Soyon | Full Stack Developer/);
});

test('navigation works', async ({ page }) => {
    await page.goto('/');

    // Check Home page content
    await expect(page.getByText("Hi, I'm Soyon")).toBeVisible();

    // Navigate to About
    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL(/.*about/);
    await expect(page.getByText('About Me')).toBeVisible();

    // Navigate to Projects
    await page.getByRole('link', { name: 'Projects' }).first().click();
    await expect(page).toHaveURL(/.*projects/);
    await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();
});

test('projects are displayed', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByText('Portfolio Website')).toBeVisible();
    await expect(page.getByText('E-Commerce Dashboard')).toBeVisible();
});
